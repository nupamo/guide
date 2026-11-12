// The VitePress site served pages as `<page>.html`. Directory-style output serves `<page>/`,
// so write a small redirect file at every old `.html` address that BOOTH pages may still link to.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const page = (to) => `<!doctype html><meta charset="utf-8"><title>Redirecting…</title><meta name="robots" content="noindex"><link rel="canonical" href="${to}"><meta http-equiv="refresh" content="0; url=${to}"><a href="${to}">${to}</a>\n`;

export default function legacyRedirects({ extra = {} } = {}) {
  let base = '/';
  return {
    name: 'legacy-redirects',
    hooks: {
      'astro:config:done': ({ config }) => { base = config.base.endsWith('/') ? config.base : `${config.base}/`; },
      'astro:build:done': async ({ dir }) => {
        const out = fileURLToPath(dir);
        const writes = [];
        const walk = async (d) => {
          for (const entry of await fs.readdir(d, { withFileTypes: true })) {
            const full = path.join(d, entry.name);
            if (entry.isDirectory()) await walk(full);
            else if (entry.name === 'index.html' && d !== out) {
              const relDir = path.relative(out, d).split(path.sep).join('/');
              const legacy = path.join(out, `${relDir}.html`);
              writes.push([legacy, `${base}${relDir}/`]);
            }
          }
        };
        await walk(out);
        for (const [from, to] of Object.entries(extra)) writes.push([path.join(out, from), to]);
        for (const [file, to] of writes) {
          try { await fs.access(file); continue; } catch {}
          await fs.mkdir(path.dirname(file), { recursive: true });
          await fs.writeFile(file, page(to));
        }
      },
    },
  };
}
