import { spawn } from "node:child_process";
import { createInterface } from "node:readline";
import { expand } from "./config.mjs";

const PROTOCOL_VERSION = "2024-11-05";
const DEFAULT_TIMEOUT_MS = 30_000;

function errorFrom(value, fallback = "MCP request failed.") {
  if (value instanceof Error) return value;
  return new Error(typeof value === "string" ? value : fallback);
}

function expandedServer(definition, environment) {
  const expandValue = value => typeof value === "string" ? expand(value, environment) : value;
  return {
    ...definition,
    command: expandValue(definition.command),
    args: (definition.args ?? []).map(expandValue),
    cwd: expandValue(definition.cwd),
    url: expandValue(definition.url),
    env: Object.fromEntries(Object.entries(definition.env ?? {}).map(([key, value]) => [key, expandValue(value)])),
  };
}

class JsonRpcClient {
  constructor({ timeoutMs = DEFAULT_TIMEOUT_MS } = {}) {
    this.timeoutMs = timeoutMs;
    this.nextId = 1;
    this.pending = new Map();
    this.closed = false;
    this.closeController = new AbortController();
  }

  request(method, params = {}, { signal, timeoutMs = this.timeoutMs } = {}) {
    if (this.closed) return Promise.reject(new Error("MCP client is closed."));
    if (signal?.aborted) return Promise.reject(errorFrom(signal.reason, "MCP request canceled."));
    const id = this.nextId++;
    const effectiveSignal = signal ? AbortSignal.any([signal, this.closeController.signal]) : this.closeController.signal;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => this.finish(id, new Error(`MCP request timed out: ${method}`)), timeoutMs);
      timer.unref?.();
      const abort = () => this.finish(id, errorFrom(effectiveSignal.reason, "MCP request canceled."));
      effectiveSignal.addEventListener("abort", abort, { once: true });
      this.pending.set(id, { resolve, reject, timer, abort, signal: effectiveSignal });
      this.send({ jsonrpc: "2.0", id, method, params }, { signal: effectiveSignal, timeoutMs }).catch(error => this.finish(id, error));
    });
  }

  finish(id, error, result) {
    const pending = this.pending.get(id);
    if (!pending) return;
    this.pending.delete(id);
    clearTimeout(pending.timer);
    pending.signal?.removeEventListener("abort", pending.abort);
    if (error) pending.reject(error);
    else pending.resolve(result);
  }

  handle(message) {
    if (!message || message.jsonrpc !== "2.0" || message.id === undefined) return;
    if (message.error) this.finish(message.id, new Error(message.error.message ?? "MCP server error."));
    else this.finish(message.id, undefined, message.result);
  }

  rejectPending(error) {
    for (const id of [...this.pending.keys()]) this.finish(id, error);
  }
}

export class McpStdioClient extends JsonRpcClient {
  constructor(definition, options = {}) {
    super(options);
    this.definition = expandedServer(definition, options.environment ?? process.env);
    this.child = undefined;
    this.stderr = "";
    this.ready = this.start();
  }

  async start() {
    this.child = spawn(this.definition.command, this.definition.args, {
      cwd: this.definition.cwd || undefined,
      env: { ...process.env, ...this.definition.env },
      stdio: ["pipe", "pipe", "pipe"],
      windowsHide: true,
    });
    this.child.on("error", error => this.rejectPending(errorFrom(error)));
    this.child.on("close", code => {
      if (!this.closed) this.rejectPending(new Error(`MCP server exited with code ${code ?? "unknown"}.`));
    });
    this.child.stderr.setEncoding("utf8");
    this.child.stderr.on("data", chunk => { this.stderr = `${this.stderr}${chunk}`.slice(-4096); });
    const lines = createInterface({ input: this.child.stdout });
    lines.on("line", line => {
      try { this.handle(JSON.parse(line)); }
      catch { this.rejectPending(new Error("MCP server emitted malformed JSON.")); }
    });
    await new Promise((resolve, reject) => {
      this.child.once("spawn", resolve);
      this.child.once("error", reject);
    });
    await this.request("initialize", {
      protocolVersion: PROTOCOL_VERSION,
      capabilities: {},
      clientInfo: { name: "OpenVision", version: "0.2.0" },
    });
    await this.send({ jsonrpc: "2.0", method: "notifications/initialized", params: {} });
    return this;
  }

  send(message) {
    return new Promise((resolve, reject) => {
      if (this.closed || !this.child?.stdin.writable) return reject(new Error("MCP server stdin is closed."));
      this.child.stdin.write(`${JSON.stringify(message)}\n`, error => error ? reject(error) : resolve());
    });
  }

  async close() {
    if (this.closed) return;
    this.closed = true;
    this.closeController.abort(new Error("MCP client closed."));
    this.rejectPending(new Error("MCP client closed."));
    this.child?.stdin.destroy();
    if (!this.child || this.child.exitCode !== null) return;
    await new Promise(resolve => {
      const force = setTimeout(() => { this.child.kill(); resolve(); }, 2000);
      force.unref?.();
      this.child.once("close", () => { clearTimeout(force); resolve(); });
      this.child.kill();
    });
  }
}

export class McpHttpClient extends JsonRpcClient {
  constructor(definition, options = {}) {
    super(options);
    this.definition = expandedServer(definition, options.environment ?? process.env);
    this.sessionId = undefined;
    this.ready = this.start();
  }

  async start() {
    await this.request("initialize", {
      protocolVersion: PROTOCOL_VERSION,
      capabilities: {},
      clientInfo: { name: "OpenVision", version: "0.2.0" },
    });
    await this.send({ jsonrpc: "2.0", method: "notifications/initialized", params: {} });
    return this;
  }

  async send(message, { signal, timeoutMs } = {}) {
    const headers = { "content-type": "application/json", accept: "application/json, text/event-stream", ...(this.definition.headers ?? {}) };
    if (this.sessionId) headers["mcp-session-id"] = this.sessionId;
    const response = await fetch(this.definition.url, { method: "POST", headers, body: JSON.stringify(message), signal: signal ?? AbortSignal.timeout(timeoutMs ?? this.timeoutMs) });
    const session = response.headers.get("mcp-session-id");
    if (session) this.sessionId = session;
    const type = response.headers.get("content-type") ?? "";
    if (!response.ok) throw new Error(`MCP HTTP ${response.status}: ${(await response.text()).slice(0, 512)}`);
    if (response.status === 202 || !response.body) return undefined;
    if (type.includes("application/json")) return response.json().then(value => { this.handle(value); return value; });
    const text = await response.text();
    const data = text.split(/\r?\n/gu).find(line => line.startsWith("data:"))?.slice(5).trim();
    if (!data) throw new Error("MCP HTTP response did not contain JSON or SSE data.");
    const value = JSON.parse(data); this.handle(value); return value;
  }

  async close() {
    this.closed = true;
    this.closeController.abort(new Error("MCP client closed."));
    this.rejectPending(new Error("MCP client closed."));
  }
}

export class McpManager {
  constructor({ environment = process.env, timeoutMs = DEFAULT_TIMEOUT_MS } = {}) {
    this.environment = environment;
    this.timeoutMs = timeoutMs;
    this.clients = new Map();
  }

  async client(id, definition) {
    if (definition.enabled === false) throw new Error(`MCP server is disabled: ${id}`);
    const current = this.clients.get(id);
    if (current) return current;
    const Client = (definition.transport ?? "stdio") === "http" ? McpHttpClient : McpStdioClient;
    const client = new Client(definition, { environment: this.environment, timeoutMs: this.timeoutMs });
    this.clients.set(id, client);
    try { await client.ready; return client; }
    catch (error) { this.clients.delete(id); await client.close(); throw error; }
  }

  async listTools(id, definition, options) {
    const result = await (await this.client(id, definition)).request("tools/list", {}, options);
    return result?.tools ?? [];
  }

  async callTool(id, definition, name, args, options) {
    if (typeof name !== "string" || name.length === 0) throw new Error("MCP tool name is required.");
    return (await this.client(id, definition)).request("tools/call", { name, arguments: args ?? {} }, options);
  }

  async close(id) {
    const client = this.clients.get(id);
    this.clients.delete(id);
    await client?.close();
  }

  async closeAll() { for (const id of [...this.clients.keys()]) await this.close(id); }
}
