import { constants } from 'node:fs';
import { access, stat } from 'node:fs/promises';
import { dirname } from 'node:path';

// The main process creates logs, global storage and SQLite files under the
// profile folder before any window opens. On a read-only profile the first of
// those writes fails (Node's recursive mkdir reports it as ENOENT, not EROFS),
// the upstream startup handler only explains EACCES/EPERM, and the host exits
// with code 1 and no message. Check the profile once, before any profile write,
// and explain the problem instead. Nothing is written to the profile here.
export const unwritableCodes = new Set(['EROFS', 'EACCES', 'EPERM']);

// The nearest existing folder decides whether the profile can be created or written.
async function nearestExisting(path, fs) {
  for (let current = path; ; current = dirname(current)) {
    try { await fs.stat(current); return current; }
    catch (error) {
      if (error.code !== 'ENOENT' || dirname(current) === current) return current;
    }
  }
}

export function profileProblem(userDataPath, folder, error) {
  const reason = error.code === 'EROFS' ? 'It is on a read-only file system.' : 'You do not have permission to write to it.';
  return {
    type: 'error',
    buttons: ['Close'],
    message: 'OpenVision cannot start because its profile folder cannot be written.',
    detail: `${userDataPath}${folder === userDataPath ? '' : `\n(checked at ${folder})`}\n\n${reason} (${error.code})\n\n` +
      'Nothing in the profile was changed. Make this folder writable (for example remount the drive read-write or fix its ' +
      'permissions), or start OpenVision with --user-data-dir set to a writable folder.',
  };
}

// Returns true when startup may continue. Only a definite permission or
// read-only answer stops startup; any other probe error is left to the
// existing startup path.
export async function profileWritable(userDataPath, show, fs = { access, stat }, log = console.error) {
  const folder = await nearestExisting(userDataPath, fs);
  try { await fs.access(folder, constants.W_OK); return true; }
  catch (error) {
    if (!unwritableCodes.has(error.code)) return true;
    const problem = profileProblem(userDataPath, folder, error);
    // Also written to stderr so a terminal launch shows the same explanation.
    log(`[openvision] ${problem.message}\n${problem.detail}`);
    show(problem);
    return false;
  }
}
