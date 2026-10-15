'use strict';

const { codexServer } = require('./account-auth-process.cjs');
const { claudeClient } = require('./account-claude-client.cjs');

async function startCodex(options, events, dependencies = {}) {
  const client = await (dependencies.codex ?? codexServer)({ ...options, inference: true });
  const listener = message => {
    const p = message.params ?? {};
    if (message.method === 'item/agentMessage/delta') events.text(p.delta ?? '');
    if (message.method === 'item/reasoning/textDelta' || message.method === 'item/reasoning/summaryTextDelta') events.reasoning(p.delta ?? '');
    if (message.method === 'item/tool/call') {
      events.tool(p.tool, p.arguments, result => client.respond(message.id, {
        contentItems: [{ type: 'inputText', text: result }], success: true }));
    } else if (message.id !== undefined && message.method) {
      // OpenVision owns tool execution and approvals. Never silently approve an
      // official client's unrelated builtin execution or account interaction.
      client.respond(message.id, { decision: 'decline' });
      events.error(new Error('The account client requested an unsupported builtin operation. Use the official panel for this operation.'));
    }
    if (message.method === 'turn/completed') {
      if (p.turn?.status === 'completed') events.done();
      else events.error(new Error('The official Codex turn did not complete. Check the account limit or reconnect.'));
    }
    if (message.method === 'error' && p.willRetry !== true) events.error(new Error('The official Codex client could not complete this request. Check the account and model.'));
    if (message.method === 'openvision/processClosed') events.error(new Error('The Codex account connection closed.'));
  };
  client.listeners.add(listener);
  try {
    const result = await client.request('thread/start', { model: options.model, ephemeral: true,
      approvalPolicy: 'untrusted', sandbox: 'read-only', environments: [],
      baseInstructions: options.system || 'You are OpenVision. Use only the provided tools; OpenVision manages execution and permissions.',
      dynamicTools: options.tools.map(tool => ({ type: 'function', name: tool.name,
        description: tool.description || tool.name, inputSchema: tool.parameters, deferLoading: false })),
      config: { mcp_servers: {}, web_search: 'disabled', features: { shell_tool: false,
        apply_patch_freeform: false, js_repl: false, collab: false, apps: false } } });
    await client.request('turn/start', { threadId: result.thread.id,
      input: [{ type: 'text', text: options.prompt }], ...(options.effort ? { effort: options.effort } : {}) });
  } catch (error) { client.listeners.delete(listener); await client.close(); throw error; }
  return { async close() { client.listeners.delete(listener); await client.close(); } };
}

async function startClaude(options, events, dependencies = {}) {
  const client = (dependencies.claude ?? claudeClient)(options);
  const tools = new Map(options.tools.map(tool => [tool.name, tool]));
  const respond = (id, response) => client.send({ type: 'control_response', response: {
    subtype: 'success', request_id: id, response } });
  function mcp(id, request) {
    const value = request.message;
    const reply = result => respond(id, { mcp_response: { jsonrpc: '2.0', id: value.id, result } });
    if (request.server_name !== 'openvision') throw new Error('Unknown account tool server.');
    if (value.method === 'initialize') reply({ protocolVersion: '2024-11-05',
      capabilities: { tools: {} }, serverInfo: { name: 'openvision', version: '1.0.0' } });
    else if (value.method === 'tools/list') reply({ tools: options.tools.map(tool => ({ name: tool.name,
      description: tool.description, inputSchema: tool.parameters })) });
    else if (value.method === 'tools/call' && tools.has(value.params?.name)) {
      events.tool(value.params.name, value.params.arguments, result => reply({ content: [{ type: 'text', text: result }] }));
    } else if (value.method?.startsWith('notifications/')) reply({});
    else reply({});
  }
  const listener = message => {
    try {
      if (message.type === 'control_request') {
        const request = message.request;
        if (request.subtype === 'mcp_message') mcp(message.request_id, request);
        else if (request.subtype === 'can_use_tool' && request.tool_name?.startsWith('mcp__openvision__') &&
          tools.has(request.tool_name.slice('mcp__openvision__'.length)))
          respond(message.request_id, { behavior: 'allow', updatedInput: request.input });
        else respond(message.request_id, { behavior: 'deny', message: 'Use only OpenVision tools and its existing approval flow.' });
      }
      if (message.type === 'stream_event' && message.event?.type === 'content_block_delta') {
        const delta = message.event.delta;
        if (delta.type === 'text_delta') events.text(delta.text);
        if (delta.type === 'thinking_delta') events.reasoning(delta.thinking);
      }
      if (message.type === 'result') {
        if (message.is_error) events.error(new Error('The official Claude client could not complete this request. Check the account limit and model.'));
        else events.done();
      }
      if (message.type === 'openvision/processClosed') events.error(new Error('The Claude account connection closed.'));
    } catch (error) { events.error(error); }
  };
  client.listeners.add(listener);
  try {
    await client.request({ subtype: 'initialize', hooks: {}, sdkMcpServers: options.tools.length ? ['openvision'] : [],
      systemPrompt: [options.system || 'You are OpenVision. Use the supplied tools. OpenVision manages execution and permissions.'] });
    client.send({ type: 'user', message: { role: 'user', content: options.prompt }, parent_tool_use_id: null, session_id: '' });
  } catch (error) { client.listeners.delete(listener); await client.close(); throw error; }
  return { async close() { client.listeners.delete(listener); await client.close(); } };
}

module.exports = { startCodex, startClaude };
