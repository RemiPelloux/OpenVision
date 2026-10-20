import { readFileSync } from 'node:fs';

// Fixture model for verify:browser-automation. Replies are chosen from the
// request alone (tool schemas, tool results); nothing is inferred.
export const browserServerName = 'cursor-ide-browser';
export const browserFinished = name => `OpenVision browser ${name} finished.`;

const text = value => typeof value === 'string' ? value : JSON.stringify(value ?? '');
const callId = name => `call_openvision_browser_${name.replace(/[^a-z0-9]/gi, '_')}`;

export function toolResult(payload, name) {
  return payload.messages?.find(message => message.role === 'tool' && message.tool_call_id === callId(name));
}

// Browser tool names named in a GetMcpTools result (or in any text).
export function browserToolNames(content) {
  return [...new Set(text(content).match(/\bbrowser_[a-z_]+\b/g) ?? [])].sort();
}

function toolCall(event, name, tool, args) {
  event({ role: 'assistant', tool_calls: [{ index: 0, id: callId(name), type: 'function',
    function: { name: tool, arguments: JSON.stringify(args) } }] });
  event({}, 'tool_calls');
}
function finish(event, name) {
  event({ role: 'assistant', content: browserFinished(name) }); event({}, 'stop');
}

export function fixtureBrowserReply(payload, event, phase, state) {
  const advertised = payload.tools?.map(tool => tool.function?.name).filter(Boolean) ?? [];
  if (phase === 'discover') {
    const output = toolResult(payload, 'discover');
    if (output) {
      // Large results are written to a file and replaced by {note, filePath}.
      let content = text(output.content);
      try { const spilled = JSON.parse(content).filePath; if (spilled) content = readFileSync(spilled, 'utf8'); } catch {}
      const status = /"serverStatus":\s*"([^"]+)"/.exec(content)?.[1];
      state.results.discover = { tools: browserToolNames(content), serverStatus: status, result: content.slice(0, 6000),
        mentionedInRequest: text(payload.messages).includes(browserServerName), schema: state.discoverSchema };
      return finish(event, 'discover');
    }
    const discover = payload.tools?.find(tool => tool.function?.name === 'GetMcpTools')?.function;
    if (!discover) {
      state.results.discover = { tools: [], advertised, error: 'GetMcpTools is not advertised to the local Agent',
        mentionedInRequest: text(payload.messages).includes(browserServerName) };
      return finish(event, 'discover');
    }
    state.discoverSchema = discover.parameters;
    return toolCall(event, 'discover', 'GetMcpTools', { server: browserServerName });
  }
  // call:<step> — one CallMcpTool on the browser server with the arguments the verifier set.
  if (phase.startsWith('call:')) {
    const step = phase.slice('call:'.length), output = toolResult(payload, step);
    if (output) {
      const images = (payload.messages ?? []).flatMap(message => Array.isArray(message.content) ? message.content : [])
        .filter(part => part?.type === 'image_url').length;
      state.results[step] = { result: text(output.content).slice(0, 8000), imagePartsInRequest: images };
      return finish(event, step);
    }
    if (!advertised.includes('CallMcpTool')) {
      state.results[step] = { error: 'CallMcpTool is not advertised', advertised };
      return finish(event, step);
    }
    const { tool, args } = state.calls[step];
    return toolCall(event, step, 'CallMcpTool', { server: browserServerName, toolName: tool, arguments: args });
  }
  return finish(event, phase);
}

// Element refs from a browser_snapshot result, e.g. `- textbox "Name" [ref=e3]`.
export function snapshotRef(snapshot, role, name) {
  const pattern = new RegExp(`${role}\\s+"${name}"[^\\n]*?\\[ref=([\\w-]+)\\]`);
  return pattern.exec(text(snapshot))?.[1];
}
