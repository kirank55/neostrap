import fs from 'fs';
import path from 'path';

const rdir = path.join(process.cwd(), 'public', 'r');
const files = fs.readdirSync(rdir).filter(f => f.endsWith('.json'));

files.forEach(file => {
  const fp = path.join(rdir, file);
  let raw;
  try { raw = fs.readFileSync(fp, 'utf8'); } catch (e) { console.error(e); return; }
  try {
    const json = JSON.parse(raw);
    if (!Array.isArray(json.registryDependencies)) return;

    const newDeps = json.registryDependencies.reduce((acc, dep) => {
      if (typeof dep !== 'string') return acc;
      if (/^https?:\/\//.test(dep)) {
        if (dep.includes('ui.shadcn.com/r/styles')) {
          console.log(`Removing remote style ${dep} from ${file}`);
          return acc; // drop remote style references
        }
        acc.push(dep); // keep full URLs
        return acc;
      }
      // drop style entries and convert short names to self-hosted URL
      if (/^styles\//.test(dep) || dep.startsWith('style')) {
        console.log(`Removing style entry ${dep} from ${file}`);
        return acc;
      }
      acc.push(`https://neostrapui.pages.dev/r/${dep}.json`);
      return acc;
    }, []);

    if (JSON.stringify(newDeps) !== JSON.stringify(json.registryDependencies)) {
      json.registryDependencies = newDeps;
      fs.writeFileSync(fp, JSON.stringify(json, null, 2) + '\n');
      console.log(`Updated ${file}`);
    }
  } catch (err) {
    console.error(`Failed to parse ${file}: ${err.message}`);
  }
});