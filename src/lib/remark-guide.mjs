// Markdown fixes for guide pages, carried over from the VitePress source:
// - `## Heading {#id}` sets a fixed heading id.
// - Relative links (`./installation.md`, `../photoframe/frame-materials`, `./presets#song-presets`)
//   become absolute page URLs so they work with directory-style output.
// - Root-relative images and raw HTML `src`/`href` (`/split.png`) get the base path.
import path from 'node:path';

const DOCS_DIR = path.join('src', 'content', 'docs');
const DEFAULT_LOCALE = 'ko';

function visit(node, fn) {
  fn(node);
  if (node.children) for (const child of node.children) visit(child, fn);
}

export default function remarkGuide({ base = '/' } = {}) {
  const withBase = (url) => `${base.replace(/\/$/, '')}${url}`;
  return (tree, file) => {
    const rel = path.relative(path.resolve(DOCS_DIR), path.resolve(file.path ?? file.history?.[0] ?? ''));
    const [locale, guide] = rel.split(path.sep);
    const localeRoot = locale === DEFAULT_LOCALE ? '/' : `/${locale}/`;

    const resolveDocLink = (url) => {
      const m = url.match(/^(\.{1,2}\/[^#?]*)(#.*)?$/);
      if (!m) return url;
      const target = path.posix.normalize(path.posix.join(guide, m[1]));
      const [g, page = 'index'] = target.replace(/\.md$/, '').split('/');
      const pagePart = page === 'index' || page === '' ? '' : `${page}/`;
      return withBase(`${localeRoot}${g}/${pagePart}`) + (m[2] ?? '');
    };

    visit(tree, (node) => {
      if (node.type === 'heading') {
        const last = node.children[node.children.length - 1];
        const m = last?.type === 'text' && last.value.match(/\s*\{#([\w-]+)\}\s*$/);
        if (m) {
          last.value = last.value.slice(0, m.index);
          node.data ??= {};
          node.data.hProperties = { ...node.data.hProperties, id: m[1] };
        }
      } else if (node.type === 'link') {
        node.url = resolveDocLink(node.url);
      } else if (node.type === 'image' && node.url.startsWith('/')) {
        node.url = withBase(node.url);
      } else if (node.type === 'html') {
        node.value = node.value.replace(/\b(src|href)="\/(?!\/)/g, (_, attr) => `${attr}="${withBase('/')}`);
      }
    });
  };
}
