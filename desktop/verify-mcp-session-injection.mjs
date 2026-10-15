import { mcpLifecycleOwner } from './mcp-lifecycle-cleanup-customization.mjs';

// Disposable production-boundary driver. No SDK, retry logic or adapter is replaced.
export function injectMcpSessionDriver(source, commandPath) {
  const owner = mcpLifecycleOwner(source);
  const method = owner.body.body.find(node => node.key?.name === 'createAndRegisterAdapter');
  if (!method || method.value.params.length !== 1)
    throw new Error('Native MCP adapter registration contract changed');
  const starter = owner.body.body.find(node => node.key?.name === 'startConnectionService');
  const attempt = /new ([\w$]+)\(this.identifier\)/.exec(source.slice(starter.start, starter.end))?.[1];
  if (!attempt) throw new Error('Native MCP cleanup registry owner reference changed');
  const prefix = `
import {readFileSync as openvisionSessionRead} from 'node:fs';
let openvisionSessionLifecycle, openvisionSessionDriver, openvisionSessionCommand, openvisionSessionBusy = false;
function openvisionSessionAttach(lifecycle) {
  openvisionSessionLifecycle = lifecycle;
  openvisionVerifyReport('session-driver-attached', {identifier:lifecycle.identifier});
  openvisionSessionDriver ??= setInterval(async () => {
    if (openvisionSessionBusy) return;
    let command;
    try { command = JSON.parse(openvisionSessionRead(${JSON.stringify(commandPath)}, 'utf8')); }
    catch (error) { if (error.code !== 'ENOENT' && !(error instanceof SyntaxError)) openvisionVerifyReport('driver-error', {error:String(error)}); return; }
    if (command.id === openvisionSessionCommand) return;
    openvisionSessionCommand = command.id; openvisionSessionBusy = true;
    const current = openvisionSessionLifecycle;
    try {
      let result;
      if (command.operation === 'inspect') result = {result:{inspected:true}};
      else if (command.operation === 'reinitialize') {
        try { await current.handleSessionReinit(current.getAdapter()); result = {result:{reinitialized:true}}; }
        catch(error) { result = {result:{error:String(error)}}; }
      } else result = await current.getAdapter().callToolForUI('memory_probe', {}, command.id);
      const retained = [...(${attempt}.openvisionCleanupOwners ?? [])].filter(item => item.identifier === current.identifier);
      openvisionVerifyReport('session-call-result', {command:command.id, identifier:current.identifier,
        result, retainedOwners:retained.length, liveInstance:!!current.getServerInstance(),
        retainsInjectedTransport:retained.some(item => item.openvisionFailedClosures?.has(openvisionVerifyResource))});
    } catch(error) { openvisionVerifyReport('driver-error', {command:command.id, error:String(error)}); }
    finally { openvisionSessionBusy = false; }
  }, 100);
  openvisionSessionDriver.unref();
}
`;
  const offset = method.value.body.end - 1;
  return prefix + source.slice(0, offset) + '\nopenvisionSessionAttach(this);\n' + source.slice(offset);
}
