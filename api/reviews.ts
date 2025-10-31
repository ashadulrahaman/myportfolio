// Lightweight serverless handler — do NOT import '@vercel/node' to avoid TS build errors.
// Use `any` for req/res and install @types/node for Buffer/process types in the build.

async function getFileFromGitHub() {
  const GITHUB_REPO = process.env.GITHUB_REPO; // format: owner/repo
  const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';
  const REVIEWS_PATH = process.env.REVIEWS_PATH || 'data/reviews.json';
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  if (!GITHUB_REPO) return { exists: false, content: '[]', sha: null };

  const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/${REVIEWS_PATH}?ref=${GITHUB_BRANCH}`;
  const res = await fetch(url, {
    headers: GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : undefined,
  });
  if (res.status === 404) return { exists: false, content: '[]', sha: null };
  if (!res.ok) throw new Error(`GitHub GET failed: ${res.status}`);
  const json = await res.json();
  const b64 = json.content || '';
  const text = Buffer.from(b64, 'base64').toString('utf8');
  return { exists: true, content: text, sha: json.sha };
}

export default async function handler(req: any, res: any) {
  try {
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const GITHUB_REPO = process.env.GITHUB_REPO; // format: owner/repo
    const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';
    const REVIEWS_PATH = process.env.REVIEWS_PATH || 'data/reviews.json';

    if (req.method === 'GET') {
      const file = await getFileFromGitHub();
      let data;
      try { data = JSON.parse(file.content); } catch { data = []; }
      return res.status(200).json({ ok: true, reviews: data });
    }

    if (req.method === 'POST') {
      if (!GITHUB_TOKEN || !GITHUB_REPO) {
        return res.status(500).json({ ok: false, error: 'Server not configured. Set GITHUB_TOKEN and GITHUB_REPO.' });
      }
      const { author, relation, quote } = req.body || {};
      if (!author || !quote) return res.status(400).json({ ok: false, error: 'Missing fields' });

      const file = await getFileFromGitHub();
      let arr = [];
      try { arr = JSON.parse(file.content); } catch { arr = []; }

      const newEntry = { author, relation: relation || '', quote, createdAt: new Date().toISOString() };
      arr.push(newEntry);

      const content = Buffer.from(JSON.stringify(arr, null, 2)).toString('base64');

      const putUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${REVIEWS_PATH}`;
      const body: any = {
        message: `Add testimonial by ${author}`,
        content,
        branch: GITHUB_BRANCH,
      };
      if (file.sha) body.sha = file.sha;

      const putRes = await fetch(putUrl, {
        method: 'PUT',
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
          Accept: 'application/vnd.github+json',
        },
        body: JSON.stringify(body),
      });

      if (!putRes.ok) {
        const text = await putRes.text();
        return res.status(500).json({ ok: false, error: `GitHub PUT failed: ${putRes.status}`, detail: text });
      }

      return res.status(201).json({ ok: true, reviews: arr });
    }

    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  } catch (err: any) {
    return res.status(500).json({ ok: false, error: err.message || String(err) });
  }
}
