import { createServer } from "node:http";
import { loadConfig, mutateConfig, paths, publicConfig, validateServer } from "./config.mjs";
import { runRea } from "./rea.mjs";

const port = Number(process.env.OPENVISION_PORT ?? process.env.CURSOR_APP_PORT ?? 4317);
const host = process.env.OPENVISION_HOST ?? process.env.CURSOR_APP_HOST ?? "127.0.0.1";
const maxBodyBytes = 1_048_576;
const operations = new Set([
  "analyze-javascript-application",
  "inspect-managed-artifact",
  "inspect-go-binary",
  "inspect-wasm-artifact",
  "inspect-pe-resources",
  "inspect-android-package",
  "decode-android-resources",
  "inspect-artifact",
  "analyze",
]);

function json(response, status, body) {
  response.writeHead(status, { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" });
  response.end(JSON.stringify(body));
}

async function body(request) {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > maxBodyBytes) throw new Error("Request body is too large.");
    chunks.push(chunk);
  }
  return chunks.length === 0 ? {} : JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

function safeServerView(id, definition) {
  return { id, kind: definition.kind, enabled: definition.enabled !== false, command: definition.command, args: definition.args, hasEnvironment: Object.keys(definition.env ?? {}).length > 0 };
}

async function route(request, response) {
  const url = new URL(request.url, `http://${host}:${port}`);
  const method = request.method ?? "GET";
  if (method === "GET" && url.pathname === "/") return page(response);
  if (method === "GET" && url.pathname === "/api/health") return json(response, 200, { ok: true, service: "openvision", version: "0.2.0", pid: process.pid });
  if (method === "GET" && url.pathname === "/api/servers") {
    const { configPath, config } = await loadConfig();
    return json(response, 200, { configPath, servers: Object.entries(config.servers).map(([id, definition]) => safeServerView(id, definition)) });
  }
  if (method === "GET" && url.pathname === "/api/apis") {
    const { config } = await loadConfig();
    return json(response, 200, { apis: (config.apis ?? []).map(({ id, baseUrl, enabled = true }) => ({ id, baseUrl, enabled })) });
  }
  if (method === "GET" && url.pathname === "/api/config") {
    const { configPath, config } = await loadConfig();
    return json(response, 200, { configPath, config: publicConfig(config) });
  }
  if (method === "GET" && url.pathname === "/api/capabilities") return json(response, 200, await runRea(["capabilities", "--format", "json"], { cacheMs: 15000 }));
  if (method === "GET" && url.pathname === "/api/doctor") return json(response, 200, await runRea(["doctor", "--format", "json"], { cacheMs: 10000 }));
  if (method === "GET" && url.pathname === "/api/ai/config") {
    const { config } = await loadConfig();
    return json(response, 200, { ai: publicConfig(config).ai });
  }
  if (method === "POST" && url.pathname === "/api/analyze") return analyze(await body(request), response);
  if (method === "POST" && url.pathname === "/api/ai/config") return updateAi(await body(request), response);
  if (method === "POST" && url.pathname === "/api/ai/chat") return aiChat(await body(request), response);
  if (method === "POST" && url.pathname === "/api/rea") {
    const input = await body(request);
    const allowMutations = process.env.CURSOR_APP_ALLOW_MUTATIONS === "true" && input.allowMutations === true;
    return json(response, 200, await runRea(input.args ?? [], { allowMutations }));
  }
  if (method === "POST" && url.pathname === "/api/servers") return addServer(await body(request), response);
  if (method === "POST" && url.pathname === "/api/apis") return addApi(await body(request), response);
  if (method === "POST" && url.pathname.startsWith("/api/apis/") && url.pathname.endsWith("/request")) return requestApi(decodeURIComponent(url.pathname.slice(10, -8)), await body(request), response);
  if (method === "DELETE" && url.pathname.startsWith("/api/servers/")) return removeServer(decodeURIComponent(url.pathname.slice(13)), response);
  if (method === "DELETE" && url.pathname.startsWith("/api/apis/")) return removeApi(decodeURIComponent(url.pathname.slice(10)), response);
  return json(response, 404, { error: "Route not found." });
}

async function analyze(input, response) {
  const operation = input.operation;
  if (!operations.has(operation) || typeof input.target !== "string" || input.target.length === 0) return json(response, 400, { error: "Use a supported operation and a target path." });
  const args = [operation, input.target, "--format", "json"];
  if (typeof input.provider === "string" && input.provider.length > 0) args.push("--provider", input.provider);
  return json(response, 200, await runRea(args, { timeoutMs: input.timeoutMs, cacheMs: input.cache === false ? 0 : 30000 }));
}

async function updateAi(input, response) {
  const patch = {
    enabled: input.enabled !== false,
    baseUrl: String(input.baseUrl ?? "").trim(),
    model: String(input.model ?? "").trim(),
    apiKeyEnv: String(input.apiKeyEnv ?? "OPENVISION_AI_API_KEY").trim(),
    timeoutMs: Number(input.timeoutMs ?? 60000),
  };
  new URL(patch.baseUrl);
  await mutateConfig((config) => { config.ai = patch; });
  const { config } = await loadConfig();
  return json(response, 200, { ai: publicConfig(config).ai });
}

async function aiChat(input, response) {
  const { config } = await loadConfig();
  const ai = config.ai;
  if (!ai.enabled) return json(response, 409, { error: "OpenVision AI is disabled. Configure /api/ai/config first." });
  if (!Array.isArray(input.messages) || input.messages.length === 0) return json(response, 400, { error: "messages must be a non-empty array." });
  const apiKey = process.env[ai.apiKeyEnv];
  const headers = { "content-type": "application/json", ...(apiKey ? { authorization: `Bearer ${apiKey}` } : {}) };
  const endpoint = `${ai.baseUrl.replace(/\/+$/u, "")}/chat/completions`;
  const started = performance.now();
  const result = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({ model: input.model ?? ai.model, messages: input.messages, temperature: input.temperature, max_tokens: input.max_tokens, stream: false }),
    signal: AbortSignal.timeout(ai.timeoutMs),
  });
  const contentType = result.headers.get("content-type") ?? "";
  const data = contentType.includes("json") ? await result.json() : await result.text();
  return json(response, result.ok ? 200 : 502, { ok: result.ok, status: result.status, latencyMs: Math.round(performance.now() - started), data });
}

async function addServer(input, response) {
  const definition = { ...input, kind: input.kind ?? "mcp" };
  validateServer(input.id, definition);
  if (input.id === "rea") return json(response, 409, { error: "The built-in rea server cannot be replaced." });
  const server = { kind: "mcp", enabled: input.enabled !== false, command: input.command, args: input.args, env: input.env ?? {} };
  await mutateConfig((config) => { config.servers[input.id] = server; });
  return json(response, 201, { server: safeServerView(input.id, server) });
}

async function addApi(input, response) {
  new URL(input.baseUrl);
  if (!/^[a-z][a-z0-9_-]{0,63}$/u.test(input.id)) throw new Error("Invalid API id.");
  const api = { id: input.id, baseUrl: input.baseUrl, enabled: input.enabled !== false, headers: input.headers ?? {} };
  await mutateConfig((config) => { config.apis = (config.apis ?? []).filter((candidate) => candidate.id !== input.id); config.apis.push(api); });
  return json(response, 201, { api: { id: input.id, baseUrl: input.baseUrl, enabled: input.enabled !== false } });
}

async function removeServer(id, response) {
  if (id === "rea") return json(response, 409, { error: "The built-in rea server cannot be removed." });
  const removed = await mutateConfig((config) => {
    if (!Object.hasOwn(config.servers, id)) return false;
    delete config.servers[id];
    return true;
  });
  if (!removed) return json(response, 404, { error: "Server not found." });
  return json(response, 200, { removed: id });
}

async function removeApi(id, response) {
  const removed = await mutateConfig((config) => {
    const before = (config.apis ?? []).length;
    config.apis = (config.apis ?? []).filter((api) => api.id !== id);
    return config.apis.length !== before;
  });
  if (!removed) return json(response, 404, { error: "API not found." });
  return json(response, 200, { removed: id });
}

async function requestApi(id, input, response) {
  const { config } = await loadConfig();
  const api = (config.apis ?? []).find((candidate) => candidate.id === id && candidate.enabled !== false);
  if (!api) return json(response, 404, { error: "Enabled API not found." });
  const method = String(input.method ?? "GET").toUpperCase();
  if (!["GET", "POST", "PUT", "PATCH", "DELETE"].includes(method)) return json(response, 400, { error: "Unsupported HTTP method." });
  const path = String(input.path ?? "/");
  if (!path.startsWith("/") || path.includes("\\")) return json(response, 400, { error: "API path must be an HTTP path beginning with /." });
  const target = new URL(path, api.baseUrl);
  const headers = { ...(api.headers ?? {}), ...(input.headers ?? {}) };
  const result = await fetch(target, {
    method,
    headers,
    body: method === "GET" || method === "DELETE" ? undefined : JSON.stringify(input.body ?? {}),
  });
  const contentType = result.headers.get("content-type") ?? "";
  const payload = contentType.includes("json") ? await result.json() : await result.text();
  return json(response, result.ok ? 200 : 502, { ok: result.ok, status: result.status, contentType, data: payload });
}

function page(response) {
  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  response.end(`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>OpenVision</title><style>body{font:15px system-ui;margin:2rem;max-width:1100px;color:#15202b}main{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(300px,1fr))}section{border:1px solid #d7dee7;border-radius:8px;padding:1rem}pre{white-space:pre-wrap;overflow:auto;background:#f5f7fa;padding:.75rem;border-radius:6px;max-height:360px}button{padding:.55rem .8rem;border:1px solid #9aa8b8;border-radius:6px;background:white;cursor:pointer}input,select,textarea{padding:.5rem;width:100%;box-sizing:border-box;margin:.25rem 0 .6rem}textarea{min-height:120px;font-family:inherit}label{display:block;font-weight:600;margin-top:.4rem}.muted{color:#5a6875}</style></head><body><h1>OpenVision</h1><p class="muted">Fast local reverse engineering, evidence, AI routing, and custom MCP/API orchestration.</p><main><section><h2>Runtime</h2><pre id="health">Loading...</pre><button onclick="load()">Refresh</button></section><section><h2>REA capability surface</h2><pre id="capabilities">Loading...</pre></section><section><h2>AI server</h2><label>OpenAI-compatible base URL<input id="aiUrl" placeholder="http://127.0.0.1:11434/v1"></label><label>Model<input id="aiModel" placeholder="local-model"></label><label>API key environment variable<input id="aiEnv" value="OPENVISION_AI_API_KEY"></label><button onclick="saveAi()">Save AI settings</button><pre id="aiStatus"></pre></section><section><h2>Analysis</h2><label>Operation<select id="operation"><option>analyze-javascript-application</option><option>inspect-managed-artifact</option><option>inspect-go-binary</option><option>inspect-wasm-artifact</option><option>inspect-pe-resources</option><option>inspect-android-package</option><option>decode-android-resources</option><option>inspect-artifact</option></select></label><label>Target<input id="target" placeholder="C:\\path\\to\\artifact"></label><button onclick="analyze()">Run analysis</button><pre id="result"></pre></section><section><h2>AI chat</h2><label>Prompt<textarea id="prompt" placeholder="Explain this evidence..."></textarea></label><button onclick="chat()">Ask OpenVision</button><pre id="chatResult"></pre></section></main><script>async function get(path){const r=await fetch(path);return r.json()}async function load(){document.querySelector('#health').textContent=JSON.stringify(await get('/api/health'),null,2);const c=await get('/api/capabilities');document.querySelector('#capabilities').textContent=JSON.stringify(c.capabilities??c,null,2);const a=await get('/api/ai/config');if(a.ai){aiUrl.value=a.ai.baseUrl;aiModel.value=a.ai.model;aiEnv.value=a.ai.apiKeyEnv;aiStatus.textContent=JSON.stringify(a.ai,null,2)}}async function saveAi(){const r=await fetch('/api/ai/config',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({enabled:true,baseUrl:aiUrl.value,model:aiModel.value,apiKeyEnv:aiEnv.value})});aiStatus.textContent=JSON.stringify(await r.json(),null,2)}async function analyze(){result.textContent='Running...';const r=await fetch('/api/analyze',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({operation:operation.value,target:target.value})});result.textContent=JSON.stringify(await r.json(),null,2)}async function chat(){chatResult.textContent='Running...';const r=await fetch('/api/ai/chat',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:prompt.value}]})});chatResult.textContent=JSON.stringify(await r.json(),null,2)}load()</script></body></html>`);
}

const server = createServer((request, response) => route(request, response).catch((error) => json(response, 500, { error: error instanceof Error ? error.message : String(error) })));
server.listen(port, host, () => console.log(`OpenVision listening at http://${host}:${port}`));
