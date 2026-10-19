// Verification overlay only. Called by the instrumented import transaction after
// each commit rename. `pause-<stage>-<index>` in OPENVISION_IMPORT_PROBE_DIR holds
// that commit point until the verifier kills the process; nothing else waits.
import { appendFileSync, existsSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';

const directory = process.env.OPENVISION_IMPORT_PROBE_DIR;
const record = entry => appendFileSync(join(directory, 'probe.ndjson'), `${JSON.stringify({ ...entry, pid: process.pid, at: Date.now() })}\n`);

export async function afterReplace(stage, index, path) {
  if (!directory) return;
  const armed = join(directory, `pause-${stage}-${index}`), pause = existsSync(armed);
  if (pause) unlinkSync(armed);
  record({ event: 'replaced', stage, index, path, pause });
  if (!pause) return;
  record({ event: 'paused', stage, index, path });
  for (;;) await new Promise(resolve => setTimeout(resolve, 25));
}
