import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defaults, categories, planImport, summarize } from './cursor-import.mjs';
import { applyImport, restoreImport } from './import-transaction.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const options = defaults(root);
let apply = false;
let restore;
try {
  const args = process.argv.slice(2);
  for (let index = 0; index < args.length; index++) {
    const argument = args[index];
    if (argument === '--apply') apply = true;
    else if (argument === '--keep-existing') options.overwrite = false;
    else if (['--user', '--extensions', '--categories', '--restore'].includes(argument)) {
      const value = args[++index];
      if (!value || value.startsWith('--')) throw new Error(`Missing value for ${argument}`);
      if (argument === '--user') options.user = value;
      if (argument === '--extensions') options.extensions = value;
      if (argument === '--categories') options.categories = value.split(',');
      if (argument === '--restore') restore = value;
    } else if (argument === '--help') {
      console.log(`Usage: node desktop/import-cli.mjs [--apply] [--keep-existing]\n  [--user PATH] [--extensions PATH] [--categories ${categories.join(',')}]\n  [--restore BACKUP_DIRECTORY]\nWithout --apply, prints a preview. Close OpenVision before CLI import or restore.`);
      process.exit(0);
    } else throw new Error(`Unknown option: ${argument}`);
  }
  if (restore && (apply || args.some(value => ['--user', '--extensions', '--categories', '--keep-existing'].includes(value))))
    throw new Error('--restore cannot be combined with import options.');
  const result = restore ? await restoreImport(root, restore) : await planImport(options).then(plan => apply ? applyImport(plan) : summarize(plan));
  console.log(JSON.stringify(result, null, 2));
} catch (error) { console.error(error.message); process.exitCode = 1; }
