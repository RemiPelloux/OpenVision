import { mcpAttemptOwner } from './mcp-attempt-customization.mjs';
import { mcpLifecycleOwner } from './mcp-lifecycle-cleanup-customization.mjs';

// This changes a disposable copy only. Rejection precedes the real close so the
// fixture can prove that the actual child remains alive until a successful retry.
export function injectMcpCloseFailure(source, { reportPath, failures = 1, releasePath, reason = 'dispose' }) {
  const owner = mcpAttemptOwner(source), commit = owner.body.body.find(method => method.key?.name === 'commit');
  source = source.slice(0, commit.value.body.start + 1) +
    `openvisionVerifyReport('attempt-committed', {identifier:this.identifier});` + source.slice(commit.value.body.start + 1);
  const lifecycle = mcpLifecycleOwner(source);
  const method = lifecycle.body.body.find(node => node.key?.name === 'closeCurrentServerInstance');
  const offset = method.value.body.start + 1;
  const argument = method.value.params[0]?.name;
  if (!argument) throw new Error('Native MCP close parameter changed');
  const prefix = `
import {appendFileSync as openvisionVerifyAppend, existsSync as openvisionVerifyExists} from 'node:fs';
let openvisionVerifyInjected = false, openvisionVerifyResource;
function openvisionVerifyReport(event, extra = {}) {
  openvisionVerifyAppend(${JSON.stringify(reportPath)}, JSON.stringify({event, pid:process.pid, at:new Date().toISOString(), ...extra})+'\\n');
}
function openvisionVerifyFailCloseOnce(instance, identifier) {
  const resource = instance?.transport ?? instance?.client?.transport;
  if (!resource || openvisionVerifyInjected) return;
  openvisionVerifyInjected = true;
  openvisionVerifyResource = resource;
  const original = resource.close; let remainingFailures = ${failures};
  resource.close = async function(...args) {
    openvisionVerifyReport('close-attempt', {identifier});
    ${releasePath ? `openvisionVerifyReport('close-held', {identifier});
    while (!openvisionVerifyExists(${JSON.stringify(releasePath)})) await new Promise(resolve => setTimeout(resolve, 100));` : ''}
    if (remainingFailures-- > 0) { openvisionVerifyReport('close-rejected', {identifier}); throw new Error('Injected native MCP close failure'); }
    const result = await original.apply(this, args);
    openvisionVerifyReport('close-released', {identifier}); return result;
  };
}
`;
  return prefix + source.slice(0, offset) + `
    openvisionVerifyReport('transport-retirement', {identifier:this.identifier, reason:${argument}.reason});
    if (${argument}.reason === ${JSON.stringify(reason)}) {
      openvisionVerifyReport(${JSON.stringify(reason.replaceAll(' ', '-') + '-request')}, {identifier:this.identifier});
      openvisionVerifyFailCloseOnce(this.serverInstance, this.identifier);
    }
  ` + source.slice(offset);
}
