'use strict';

const { randomUUID } = require('node:crypto');
const MAX_OUTPUT_BYTES = 4 * 1024 * 1024;
const IDLE_MS = 2 * 60 * 1000;

// A pending official tool invocation survives the short HTTP gap while the
// existing OpenVision Agent executes that tool and asks for the next completion.
function createChatSession(options) {
  const controller = new AbortController(), calls = new Map(), queue = [];
  let response, client, timer, closing, startup = Promise.resolve(), stream = options.request.stream;
  let closed = false, outputBytes = 0, text = '', reasoning = '', toolCalls = [];
  const id = `chatcmpl-${randomUUID()}`;
  const model = options.request.model;
  const created = Math.floor(Date.now() / 1000);
  function arm() { clearTimeout(timer); timer = setTimeout(() => fail(new Error('Account chat expired while idle. Please retry.')), IDLE_MS); timer.unref?.(); }
  function close() {
    if (closed) return closing;
    closed = true; clearTimeout(timer); controller.abort();
    for (const call of calls.keys()) options.forget(call);
    calls.clear(); queue.length = 0;
    if (response && !response.writableEnded) response.destroy();
    closing = startup.then(async () => { if (client) await client.close(); }).finally(options.release);
    return closing;
  }
  function chunk(delta, finish_reason = null) {
    return { id, object: 'chat.completion.chunk', created, model, choices: [{ index: 0, delta, finish_reason }] };
  }
  function write(value) {
    if (!response || response.destroyed) return;
    const data = `data: ${JSON.stringify(value)}\n\n`;
    if (response.writableLength + Buffer.byteLength(data) > MAX_OUTPUT_BYTES) throw new Error('Account output exceeded the stream buffer limit.');
    response.write(data);
  }
  function finish(reason) {
    if (!response) return;
    const target = response;
    if (stream) { write(chunk({}, reason)); target.end('data: [DONE]\n\n'); }
    else target.end(JSON.stringify({ id, object: 'chat.completion', created, model, choices: [{ index: 0,
      message: { role: 'assistant', content: text || null, ...(reasoning ? { reasoning_content: reasoning } : {}),
        ...(toolCalls.length ? { tool_calls: toolCalls } : {}) }, finish_reason: reason }] }));
    response = null; text = ''; reasoning = ''; toolCalls = []; arm();
  }
  function fail(error) {
    if (closed) return;
    try { if (response && !response.destroyed) {
      if (stream) { write({ error: { message: error.message, type: 'account_client_error' } }); response.end(); }
      else { response.statusCode = 502; response.end(JSON.stringify({ error: { message: error.message } })); }
      response = null;
    } } catch { response?.destroy(); } finally { response = null; }
    void close();
  }
  function flush() {
    try {
      while (response && queue.length && !closed) {
        const event = queue.shift();
        if (event.kind === 'text' || event.kind === 'reasoning') {
          if (event.kind === 'text') text += event.value; else reasoning += event.value;
          if (stream) write(chunk({ [event.kind === 'text' ? 'content' : 'reasoning_content']: event.value }));
        } else if (event.kind === 'tool') {
          toolCalls.push(event.value);
          if (stream) write(chunk({ tool_calls: [{ index: 0, ...event.value }] }));
          finish('tool_calls');
        } else if (event.kind === 'done') { finish('stop'); void close(); }
        else fail(event.value);
      }
    } catch (error) { fail(error); }
  }
  function enqueue(kind, value) {
    if (closed) return;
    outputBytes += Buffer.byteLength(typeof value === 'string' ? value : JSON.stringify(value ?? ''));
    if (outputBytes > MAX_OUTPUT_BYTES) { fail(new Error('Account response exceeded its output limit.')); return; }
    queue.push({ kind, value }); arm(); flush();
  }
  const events = {
    text: value => enqueue('text', value), reasoning: value => enqueue('reasoning', value),
    tool(name, args, reply) {
      if (closed) return;
      if (!options.request.tools.some(tool => tool.name === name)) { fail(new Error('Account requested a tool outside this request.')); return; }
      const callId = `ovcall_${randomUUID()}`;
      calls.set(callId, reply); options.remember(callId);
      enqueue('tool', { id: callId, type: 'function', function: { name, arguments: JSON.stringify(args ?? {}) } });
    },
    done: () => enqueue('done'), error: error => enqueue('error', error),
  };
  function attach(target, results = [], streaming = options.request.stream) {
    if (closed || response) throw new Error('Account conversation is unavailable or already running.');
    response = target; stream = streaming;
    target.setHeader('content-type', stream ? 'text/event-stream' : 'application/json');
    target.setHeader('cache-control', 'no-store');
    target.on('close', () => { if (!target.writableFinished) void close(); });
    if (stream) write(chunk({ role: 'assistant' }));
    for (const result of results) {
      const reply = calls.get(result.id);
      if (!reply) continue;
      calls.delete(result.id); options.forget(result.id); reply(result.text);
    }
    arm(); flush();
  }
  arm();
  return { model, provider: options.provider, accountId: options.accountId, signal: controller.signal, attach, close,
    start: operation => startup = Promise.resolve().then(async () => {
      try { client = await operation(events, controller.signal); }
      catch (error) { fail(error); }
    }) };
}

module.exports = { createChatSession };
