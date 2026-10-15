// Budget encoded bytes before LF, including any optional CR. Match the HTTP
// response budget; a server must return an explicit error rather than truncate.
export const mcpStdioLimits = Object.freeze({ messageBytes: 8 * 1024 * 1024 });
const initialBufferBytes = 64 * 1024;

function protocolError(code, message) {
  return Object.assign(new Error(`MCP STDIO ${message}`), { code });
}

class JsonLineReader {
  #buffer;
  #bytes = 0;

  #checkSize(bytes) {
    if (bytes > mcpStdioLimits.messageBytes)
      throw protocolError("MCP_STDIO_TOO_LARGE", `message exceeds ${mcpStdioLimits.messageBytes} encoded bytes.`);
  }

  #append(chunk) {
    const required = this.#bytes + chunk.byteLength;
    this.#checkSize(required);
    if (required > (this.#buffer?.byteLength ?? 0)) {
      const capacity = Math.min(mcpStdioLimits.messageBytes,
        Math.max(initialBufferBytes, required, (this.#buffer?.byteLength ?? 0) * 2));
      const buffer = Buffer.allocUnsafe(capacity);
      this.#buffer?.copy(buffer, 0, 0, this.#bytes);
      this.#buffer = buffer;
    }
    if (chunk.byteLength) chunk.copy(this.#buffer, this.#bytes);
    this.#bytes = required;
  }

  #message(chunk) {
    this.#checkSize(this.#bytes + chunk.byteLength);
    let bytes = chunk;
    if (this.#bytes) {
      this.#append(chunk);
      bytes = this.#buffer.subarray(0, this.#bytes);
    }
    this.#buffer = undefined;
    this.#bytes = 0;
    if (bytes.length === 0) return;
    try { return JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes)); }
    catch { throw protocolError("MCP_STDIO_MALFORMED", "server emitted malformed UTF-8 JSON."); }
  }

  push(chunk, onMessage) {
    let offset = 0;
    for (let newline; (newline = chunk.indexOf(10, offset)) !== -1;) {
      const message = this.#message(chunk.subarray(offset, newline));
      if (message !== undefined) onMessage(message);
      offset = newline + 1;
    }
    if (offset < chunk.length) this.#append(chunk.subarray(offset));
  }

  end() {
    if (this.#bytes) throw protocolError("MCP_STDIO_INCOMPLETE", "stream ended before the message newline.");
  }
}

// Async iteration destroys the stream on parser failure and releases its queued
// chunks. Fragment accumulation is bounded before allocation/UTF-8 decoding.
export async function readMcpStdio(stream, onMessage) {
  const reader = new JsonLineReader();
  for await (const chunk of stream) reader.push(chunk, onMessage);
  reader.end();
}
