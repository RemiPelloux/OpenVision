import { parseExpressionAt } from '../tooling/dependencies.mjs';

// This changes a disposable copy only. Rejection precedes the real close so the
// fixture can prove that the actual child remains alive until a successful retry.
export function injectMcpCloseFailure(source, reportPath, failures = 1) {
  const anchor = 'closeCurrentServerInstance(';
  const start = source.indexOf(anchor);
  if (start < 0 || source.indexOf(anchor, start + anchor.length) < 0)
    throw new Error('Native MCP close method/callers missing');
  const tail = source.slice(start), node = parseExpressionAt(`function ${tail}`, 0, { ecmaVersion: 'latest' });
  const offset = start + node.body.start - 'function '.length + 1;
  const argument = node.params[0]?.name;
  if (!argument) throw new Error('Native MCP close parameter changed');
  const prefix = `
import {appendFileSync as openvisionVerifyAppend} from 'node:fs';
let openvisionVerifyInjected = false;
function openvisionVerifyReport(event, extra = {}) {
  openvisionVerifyAppend(${JSON.stringify(reportPath)}, JSON.stringify({event, pid:process.pid, at:new Date().toISOString(), ...extra})+'\\n');
}
function openvisionVerifyFailCloseOnce(instance, identifier) {
  const resource = instance?.client?.transport;
  if (!resource || openvisionVerifyInjected) return;
  openvisionVerifyInjected = true;
  const original = resource.close; let remainingFailures = ${failures};
  resource.close = async function(...args) {
    openvisionVerifyReport('close-attempt', {identifier});
    if (remainingFailures-- > 0) { openvisionVerifyReport('close-rejected', {identifier}); throw new Error('Injected native MCP close failure'); }
    const result = await original.apply(this, args);
    openvisionVerifyReport('close-released', {identifier}); return result;
  };
}
`;
  return prefix + source.slice(0, offset) + `
    if (${argument}.reason === 'dispose') {
      openvisionVerifyReport('dispose-request', {identifier:this.identifier});
      openvisionVerifyFailCloseOnce(this.serverInstance, this.identifier);
    }
  ` + source.slice(offset);
}
