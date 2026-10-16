// Verification overlay only: insert one probe call into a disposable copy of each
// Agent write helper so the verifier can hold a write at a deterministic point.
// Production builds never contain the probe.
import { agentWriteMarker } from './agent-write-durability-customization.mjs';

const probe = (stage, target, data, write) =>
  `process.env.OPENVISION_INTERRUPTION_PROBE && (await require(process.env.OPENVISION_INTERRUPTION_PROBE).duringWrite(${JSON.stringify(stage)}, ${target}, ${data}, ${write}));`;

// Recovered in-place helpers: open, verify, truncate, then write the new bytes.
export const agentWriteHelpers = [
  { file: 'extensions/cursor-agent-exec/dist/main.js', truncate: 'await s.truncate(0);', target: 'e', data: 't', handle: 's' },
  { file: 'extensions/cursor-agent-host/dist/main.js', truncate: 'await s.truncate(0);', target: 'e', data: 't', handle: 's' },
  { file: 'extensions/cursor-agent-host/dist/agent-host-daemon/dist/bin/daemon.cjs', truncate: 'await fd.truncate(0);',
    target: 'canonicalPath', data: 'data', handle: 'fd' },
];

// Durable helper: hold after part of the replacement reached the temporary
// sibling, before it is complete, closed and renamed over the target.
const durableWrite = 'await ovWriteAll(ovHandle, ovBytes);\n      await ovHandle.close();';

function insertOnce(text, anchor, insertion, file) {
  const count = text.split(anchor).length - 1;
  if (count !== 1) throw new Error(`Expected one Agent write probe anchor in ${file}, found ${count}`);
  return text.replace(anchor, insertion);
}

export function instrumentAgentWrite(text, helper) {
  if (text.includes(agentWriteMarker)) {
    return insertOnce(text, durableWrite, `${probe(`temporary-partial ${helper.file}`, 'ovTarget', 'ovBytes',
      'async (bytes, length) => { await ovHandle.write(bytes, 0, length, 0); }')}\n      ${durableWrite}`, helper.file);
  }
  return insertOnce(text, helper.truncate, `${helper.truncate}\n            ${probe(`after-truncate ${helper.file}`, helper.target, helper.data,
    `async (bytes, length) => { await ${helper.handle}.write(bytes, 0, length, 0); }`)}`, helper.file);
}
