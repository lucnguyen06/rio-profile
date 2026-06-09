const fs = require('fs');
const path = require('path');

const musicDir = path.join(__dirname, 'data', 'music');

const files = fs.readdirSync(musicDir).filter(f =>
  /\.(mp3|wav)$/i.test(f)
);

const entries = files.map(f => {
  const name = f.replace(/\.(mp3|wav)$/i, '');
  return `  { title: '${name.replace(/'/g, "\\'")}', src: './data/music/${f}' }`;
});

const output = `const MUSIC_TRACKS = [\n${entries.join(',\n')}\n];\n`;
fs.writeFileSync('tracks_output.js', output, 'utf8');

console.log(`Generated ${files.length} tracks`);
files.forEach((f, i) => console.log(`${i + 1}. ${f}`));
