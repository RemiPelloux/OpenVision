import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defaults, categories, planImport, summarize } from './cursor-import.mjs';
import { applyImport, restoreImport } from './import-transaction.mjs';
import { selectedImportDestinations } from './import-destinations.mjs';
import { listImportBackups, previewImportRestore } from './import-backup.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const options = defaults(root);
let apply = false;
let restore;
let previewRestore;
let listBackups = false;
let targetUserData;
let targetExtensions;
try {
  const args = process.argv.slice(2);
  for (let index = 0; index < args.length; index++) {
    const argument = args[index];
    if (argument === '--apply') apply = true;
    else if (argument === '--list-backups') listBackups = true;
    else if (argument === '--keep-existing') options.overwrite = false;
    else if (['--user', '--extensions', '--categories', '--restore', '--preview-restore', '--target-user-data', '--target-extensions'].includes(argument)) {
      const value = args[++index];
      if (!value || value.startsWith('--')) throw new Error(`Missing value for ${argument}`);
      if (argument === '--user') options.user = value;
      if (argument === '--extensions') options.extensions = value;
      if (argument === '--categories') options.categories = value.split(',');
      if (argument === '--restore') restore = value;
      if (argument === '--preview-restore') previewRestore = value;
      if (argument === '--target-user-data') targetUserData = resolve(value);
      if (argument === '--target-extensions') targetExtensions = resolve(value);
    } else if (argument === '--help') {
      console.log(`Usage: node desktop/import-cli.mjs [--apply] [--keep-existing]\n  [--user SOURCE_USER_PATH] [--extensions SOURCE_EXTENSIONS_PATH]\n  [--categories ${categories.join(',')}]\n  [--target-user-data USER_DATA_PATH --target-extensions EXTENSIONS_PATH]\nRecovery: --list-backups | --preview-restore BACKUP_DIRECTORY | --restore BACKUP_DIRECTORY\nSelect both target paths to recover native-dialog backups after restarting the app.\nWithout target paths, uses the installation's original default profile and CLI backup directory.\nDiscovery checks ownership/structure only; preview verifies backup bytes and checks for newer edits.\nWithout --apply, import prints a preview. Close OpenVision before CLI import or restore.`);
      process.exit(0);
    } else throw new Error(`Unknown option: ${argument}`);
  }
  if (Boolean(targetUserData) !== Boolean(targetExtensions)) throw Error('Select both --target-user-data and --target-extensions.');
  const destinations = targetUserData ? selectedImportDestinations(targetUserData, targetExtensions) : undefined;
  if ([restore, previewRestore, listBackups].filter(Boolean).length > 1) throw Error('Choose one recovery action.');
  if ((restore || previewRestore || listBackups) && (apply || args.some(value => ['--user', '--extensions', '--categories', '--keep-existing'].includes(value))))
    throw new Error('Recovery cannot be combined with import source options or --apply.');
  let result;
  if (restore) result = await restoreImport(root, restore, destinations);
  else if (previewRestore) result = await previewImportRestore(root, previewRestore, destinations);
  else if (listBackups) result = await listImportBackups(root, destinations);
  else result = await planImport({ ...options, destinations }).then(plan => apply ? applyImport(plan) : summarize(plan));
  console.log(JSON.stringify(result, null, 2));
} catch (error) { console.error(error.message); process.exitCode = 1; }
