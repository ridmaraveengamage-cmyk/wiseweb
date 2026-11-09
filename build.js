// Build WiseWeb.
//
//   node build.js        (or: npm run build)
//
// Outputs:
//   index.html          the live site for GitHub Pages (login gate + app)
//   dist/preview.html   the app without login, for claude.ai artifacts or a quick local look
//
// Source files live in src/. Any  @@include path/to/file@@  is replaced by that file's
// contents (paths are relative to this folder, and includes can nest).
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const read = p => fs.readFileSync(path.join(ROOT, p), 'utf8');

function inc(text, depth = 0) {
  if (depth > 5) throw new Error('include nesting too deep');
  return text.replace(/@@include (\S+)@@/g, (_, p) => {
    if (!fs.existsSync(path.join(ROOT, p))) throw new Error('missing include: ' + p);
    return inc(read(p), depth + 1);
  });
}

const app = inc(read('src/app.html'));
if (app.includes('@@include')) throw new Error('unresolved include left in app');

fs.mkdirSync(path.join(ROOT, 'dist'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'dist', 'preview.html'), app);

const index = read('src/page-head.html') + read('src/auth-head.html') + app + '\n' + read('src/auth-tail.html') + '</body>\n</html>\n';
fs.writeFileSync(path.join(ROOT, 'index.html'), index);
console.log(`index.html ${index.length.toLocaleString('en-US')} chars · dist/preview.html ${app.length.toLocaleString('en-US')} chars`);
