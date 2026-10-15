// Limits apply to decoded response bytes, including decompressed HTTP bodies.
// Oversized tool results fail explicitly; they are never silently truncated.
export const mcpHttpLimits = Object.freeze({ responseBytes: 8 * 1024 * 1024, errorBytes: 64 * 1024, diagnosticChars: 512 });
const decodeBlockBytes = 4096;

function responseError(reason) {
  return new Error(`MCP HTTP ${reason}`);
}

async function consumeBody(response, signal, limit, consume) {
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let bytes = 0;
  let aborted;
  const abort = () => { aborted = signal.reason; void reader.cancel(aborted).catch(() => {}); };
  signal.addEventListener("abort", abort, { once: true });
  try {
    signal.throwIfAborted();
    for (;;) {
      const { done, value } = await reader.read();
      signal.throwIfAborted();
      if (done) return consume(decoder.decode(), true);
      bytes += value.byteLength;
      if (bytes > limit) throw responseError(`response exceeds ${limit} decoded bytes.`);
      for (let offset = 0; offset < value.byteLength; offset += decodeBlockBytes) {
        const result = consume(decoder.decode(value.subarray(offset, offset + decodeBlockBytes), { stream: true }), false);
        if (result !== undefined) return result;
      }
    }
  } finally {
    signal.removeEventListener("abort", abort);
    await reader.cancel(aborted).catch(() => {});
    reader.releaseLock();
  }
}

function matches(value, id) {
  return value?.jsonrpc === "2.0" && value.id === id &&
    (Object.hasOwn(value, "result") || Object.hasOwn(value, "error"));
}

function sseConsumer(id) {
  let parts = [], data = [], skipLF = false;
  function endLine() {
    const current = parts.join(""); parts = [];
    if (current === "") {
      if (!data.length) return;
      const value = JSON.parse(data.join("\n")); data = [];
      if (matches(value, id)) return value;
    } else if (current === "data" || current.startsWith("data:")) {
      data.push(current.slice(5).replace(/^ /u, ""));
    }
  }
  return (text, done) => {
    let offset = skipLF && text.startsWith("\n") ? 1 : 0;
    if (text.length) skipLF = false;
    const endings = /\r\n|[\r\n]/gu;
    endings.lastIndex = offset;
    for (let match; (match = endings.exec(text));) {
      parts.push(text.slice(offset, match.index));
      const result = endLine();
      if (result !== undefined) return result;
      offset = endings.lastIndex;
      skipLF = match[0] === "\r" && offset === text.length;
    }
    if (offset < text.length) parts.push(text.slice(offset));
    // SSE dispatch requires a blank line; an incomplete event at EOF is invalid.
    if (done) throw responseError("stream ended without a matching JSON-RPC response.");
  };
}

export async function readMcpHttpResponse(response, id, signal) {
  if (!response.body) {
    if (!response.ok) throw responseError(String(response.status));
    if (id !== undefined) throw responseError("response has no JSON-RPC body.");
    return;
  }
  if (!response.ok) {
    let text = "";
    try {
      await consumeBody(response, signal, mcpHttpLimits.errorBytes, (chunk) => {
        text += chunk.slice(0, Math.max(0, mcpHttpLimits.diagnosticChars - text.length));
      });
    } catch (error) {
      signal.throwIfAborted();
      throw responseError(`${response.status}: ${text} (${error.message})`);
    }
    throw responseError(`${response.status}: ${text}`);
  }
  if (id === undefined) { await response.body.cancel(); return; }
  const type = response.headers.get("content-type")?.split(";", 1)[0].trim().toLowerCase();
  if (type === "text/event-stream") return consumeBody(response, signal, mcpHttpLimits.responseBytes, sseConsumer(id));
  if (type !== "application/json") {
    await response.body.cancel();
    throw responseError("response must use application/json or text/event-stream.");
  }
  const chunks = [];
  return consumeBody(response, signal, mcpHttpLimits.responseBytes, (chunk, done) => {
    chunks.push(chunk);
    if (!done) return;
    const value = JSON.parse(chunks.join(""));
    if (!matches(value, id)) throw responseError("response does not match the requested JSON-RPC id.");
    return value;
  });
}
