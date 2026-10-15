import { spawn } from "node:child_process";
import { isDeepStrictEqual } from "node:util";
import { expand } from "./config.mjs";
import { readMcpHttpResponse } from "./mcp-http-response.mjs";
import { readMcpStdio } from "./mcp-stdio-response.mjs";

const PROTOCOL_VERSION = "2024-11-05";
const DEFAULT_TIMEOUT_MS = 30_000;

function errorFrom(value, fallback = "MCP request failed.") {
  if (value instanceof Error) return value;
  return new Error(typeof value === "string" ? value : fallback);
}

function expandedServer(definition, environment) {
  const expandValue = value => typeof value === "string" ? expand(value, environment) : value;
  const transport = definition.transport ?? "stdio";
  if (transport === "http") return {
    transport, url: expandValue(definition.url),
    headers: Object.fromEntries([...new Headers(definition.headers)].map(([key, value]) => [key, expandValue(value)])),
  };
  return {
    transport,
    command: expandValue(definition.command),
    args: (definition.args ?? []).map(expandValue),
    cwd: expandValue(definition.cwd) || undefined,
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
    if (this.failure) return Promise.reject(this.failure);
    if (this.closed) return Promise.reject(new Error("MCP client is closed."));
    if (signal?.aborted) return Promise.reject(errorFrom(signal.reason, "MCP request canceled."));
    const id = this.nextId++;
    const controller = new AbortController();
    const effectiveSignal = AbortSignal.any([controller.signal, this.closeController.signal, ...(signal ? [signal] : [])]);
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => controller.abort(new Error(`MCP request timed out: ${method}`)), timeoutMs);
      timer.unref?.();
      const abort = () => this.finish(id, errorFrom(effectiveSignal.reason, "MCP request canceled."));
      effectiveSignal.addEventListener("abort", abort, { once: true });
      this.pending.set(id, { resolve, reject, timer, abort, signal: effectiveSignal, controller });
      this.send({ jsonrpc: "2.0", id, method, params }, { signal: effectiveSignal, timeoutMs }).catch(error => this.finish(id, error));
    });
  }

  finish(id, error, result) {
    const pending = this.pending.get(id);
    if (!pending) return;
    this.pending.delete(id);
    clearTimeout(pending.timer);
    pending.signal?.removeEventListener("abort", pending.abort);
    pending.controller.abort(error ?? new Error("MCP request completed."));
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
    this.child.on("error", error => this.fail(errorFrom(error)));
    this.child.on("close", code => {
      this.fail(new Error(`MCP server exited with code ${code ?? "unknown"}.`));
    });
    this.child.stderr.setEncoding("utf8");
    this.child.stderr.on("data", chunk => { this.stderr = `${this.stderr}${chunk}`.slice(-4096); });
    this.reading = readMcpStdio(this.child.stdout, message => this.handle(message)).then(
      () => this.fail(new Error("MCP STDIO stream ended.")), error => this.fail(error));
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
      if (this.failure) return reject(this.failure);
      if (this.closed || !this.child?.stdin.writable) return reject(new Error("MCP server stdin is closed."));
      this.child.stdin.write(`${JSON.stringify(message)}\n`, error => error ? reject(error) : resolve());
    });
  }

  fail(error) {
    if (this.closed || this.failure) return;
    this.failure = error;
    this.closeController.abort(error);
    this.rejectPending(error);
    this.child?.stdin.destroy();
    this.child?.stdout.destroy();
  }

  async close() {
    if (this.closed) return;
    this.closed = true;
    this.closeController.abort(new Error("MCP client closed."));
    this.rejectPending(new Error("MCP client closed."));
    this.child?.stdin.destroy();
    this.child?.stdout.destroy();
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
    const effectiveSignal = signal ?? AbortSignal.any([this.closeController.signal, AbortSignal.timeout(timeoutMs ?? this.timeoutMs)]);
    const response = await fetch(this.definition.url, { method: "POST", headers, body: JSON.stringify(message), signal: effectiveSignal });
    const session = response.headers.get("mcp-session-id");
    if (session) this.sessionId = session;
    const value = await readMcpHttpResponse(response, message.id, effectiveSignal);
    if (value !== undefined) this.handle(value);
    return value;
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
    this.closed = false;
  }

  async client(id, definition) {
    while (true) {
      if (this.closed) throw new Error("MCP manager is closed.");
      const current = this.clients.get(id);
      if (!current) {
        if (definition.enabled === false) throw new Error(`MCP server is disabled: ${id}`);
        return this.#connect(id, definition);
      }
      if (current.cleanupError) throw new Error("MCP cleanup failed; retry closing this server before reconnecting.", { cause: current.cleanupError });
      if (current.closing) { await current.closing; continue; }
      if (definition.enabled === false || current.client.closed || current.client.failure ||
          !isDeepStrictEqual(current.client.definition, expandedServer(definition, this.environment))) {
        await this.#closeEntry(id, current);
        continue;
      }
      return this.#readyClient(id, current);
    }
  }

  #connect(id, definition) {
    const Client = (definition.transport ?? "stdio") === "http" ? McpHttpClient : McpStdioClient;
    const client = new Client(definition, { environment: this.environment, timeoutMs: this.timeoutMs });
    const entry = { client };
    this.clients.set(id, entry);
    entry.ready = client.ready.catch(async error => {
      try { await this.#closeEntry(id, entry); }
      catch (cleanupError) { throw new AggregateError([error, cleanupError], "MCP initialization and cleanup failed."); }
      throw error;
    });
    return this.#readyClient(id, entry);
  }

  async #readyClient(id, entry) {
    await entry.ready;
    if (this.closed || this.clients.get(id) !== entry || entry.closing || entry.client.closed)
      throw new Error("MCP connection changed or closed during initialization.");
    return entry.client;
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
    const entry = this.clients.get(id);
    if (entry) await this.#closeEntry(id, entry);
  }

  async reconcile(id, definition) {
    const entry = this.clients.get(id);
    if (entry && (!definition || definition.enabled === false ||
        !isDeepStrictEqual(entry.client.definition, expandedServer(definition, this.environment))))
      await this.#closeEntry(id, entry);
  }

  async #closeEntry(id, entry) {
    if (entry.closing) return entry.closing;
    entry.closing = Promise.resolve().then(() => entry.client.close());
    try {
      await entry.closing;
      if (this.clients.get(id) === entry) this.clients.delete(id);
      entry.cleanupError = undefined;
    } catch (error) { entry.cleanupError = error; throw error; }
    finally { entry.closing = undefined; }
  }

  async closeAll() {
    this.closed = true;
    const results = await Promise.allSettled([...this.clients].map(([id, entry]) => this.#closeEntry(id, entry)));
    const errors = results.filter(result => result.status === "rejected").map(result => result.reason);
    if (errors.length) throw new AggregateError(errors, "MCP cleanup failed for one or more servers.");
  }
}
