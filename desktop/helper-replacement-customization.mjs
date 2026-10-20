import { spawnSync } from 'node:child_process';
import { copyFile, mkdir, readFile, rename, stat, unlink, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { digest } from './import-files.mjs';

// OV-803 helper replacement build options. Defaults keep the original helpers
// until the owner approves switching them; every option is reversible because
// the first original of each helper is kept under backups/helper-replacement/.
//
//   OPENVISION_SANDBOX_HELPER=original | none | landlock
//     none:     no Agent command sandbox helper is shipped. Every caller's
//               existence check fails, so no preflight runs and commands use
//               the unsandboxed, approval-first path (as already enforced in
//               the workbench by autorun-customization.mjs).
//     landlock: desktop/sandbox-helper/openvision-sandbox.c, compiled with
//               $CC (default cc) and installed under the original file name.
//   OPENVISION_CREPECTL=original | none
//     none:     the grep index builder is not shipped; the retrieval service
//               records no_crepectl and Agent grep and search use ripgrep.
//               ripgrep cannot stand in: crepectl builds the on-disk index the
//               native GrepClient reads; it is not a search front end.
export const helperOptions = Object.freeze({
  OPENVISION_SANDBOX_HELPER: { file: 'source/app/resources/helpers/cursorsandbox', values: ['original', 'none', 'landlock'] },
  OPENVISION_CREPECTL: { file: 'source/app/resources/helpers/crepectl', values: ['original', 'none'] },
});
export const landlockSignature = 'OpenVision Agent command sandbox (Landlock)';

export function helperModes(env = process.env) {
  const modes = {};
  for (const [name, { values }] of Object.entries(helperOptions)) {
    const value = env[name] || 'original';
    if (!values.includes(value)) throw Error(`${name} must be one of ${values.join(', ')} (got ${JSON.stringify(value)})`);
    modes[name] = value;
  }
  return modes;
}

const read = path => readFile(path).catch(error => (error.code === 'ENOENT' ? undefined : Promise.reject(error)));

export function compileLandlockHelper(root, output, cc = process.env.CC || 'cc') {
  const source = join(root, 'desktop/sandbox-helper/openvision-sandbox.c');
  const result = spawnSync(cc, ['-std=c11', '-D_GNU_SOURCE', '-O2', '-Wall', '-Wextra', '-Werror', '-o', output, source], { encoding: 'utf8' });
  if (result.error) throw Error(`Cannot compile the Landlock sandbox helper with ${cc}: ${result.error.message}`);
  if (result.status !== 0) throw Error(`Landlock sandbox helper did not compile:\n${result.stderr}`);
}

// The original is recorded once, the first time a non-OpenVision helper is seen.
async function original(root, name, relative) {
  const record = join(root, 'backups/helper-replacement', `${name}.json`);
  const known = await read(record);
  if (known) return JSON.parse(known);
  const bytes = await read(join(root, relative));
  if (!bytes) throw Error(`${relative} is missing and no original backup exists`);
  if (bytes.includes(landlockSignature)) throw Error(`${relative} is an OpenVision replacement but no original backup exists`);
  const sha256 = digest(bytes), backup = join(root, 'backups/helper-replacement', `${name}-${sha256}.bin`);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(join(root, relative), backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  const value = { sha256, backup: backup.slice(root.length + 1), mode: (await stat(join(root, relative))).mode & 0o777 };
  await writeFile(record, JSON.stringify(value, null, 2) + '\n', { flag: 'wx' });
  return value;
}

export async function installHelperReplacements(root, env = process.env) {
  const modes = helperModes(env), applied = {};
  for (const [name, { file }] of Object.entries(helperOptions)) {
    const mode = modes[name], path = join(root, file);
    const source = await original(root, name, file), current = await read(path);
    if (mode === 'original') {
      if (!current || digest(current) !== source.sha256) {
        await unlink(`${path}.openvision-tmp`).catch(error => { if (error.code !== 'ENOENT') throw error; });
        await writeFile(`${path}.openvision-tmp`, await readFile(join(root, source.backup)), { mode: source.mode, flag: 'wx' });
        await rename(`${path}.openvision-tmp`, path);
      }
    } else if (mode === 'none') {
      if (current) await unlink(path);
    } else {
      compileLandlockHelper(root, `${path}.openvision-tmp`);
      await rename(`${path}.openvision-tmp`, path);
    }
    applied[name] = mode;
  }
  const changed = Object.entries(applied).filter(([, mode]) => mode !== 'original');
  if (changed.length) console.log(`Helper replacements: ${changed.map(([name, mode]) => `${name}=${mode}`).join(', ')}`);
  return applied;
}
