import { createClient, findActualExecutable, isAgentStoreFusePath, resolvePath, slugifyPath, spawnPromise } from "./dist_exports.js";
import { createConnectTransport, createContextPropagatingClient } from "./dashboard_connect_exports.js";
import { AgentConnectClient } from "./agent-client/dist/connect.js";
import { import_cursor_network2 } from "./agent-host/dist/network/agent-transport.js";
import { NetworkPrivateInferenceBackend, import_cursor_network } from "./agent-host/dist/network/private-inference-backend.js";
import { createContext } from "./agent-host/dist/storage/instruments.js";
import { __toESM } from "./agent-host/dist/storage/sqlite-store.js";
import { MCP_TOOL_REQUIRES_CONFIRMATION_META_KEY } from "./constants/dist/mcp.js";
import { AuthNetworkError, LoginManager, import_node_crypto4 } from "./cursor-config/dist/auth/login.js";
import { import_node_tls, proxyUrl } from "./cursor-config/dist/auth/proxy-fetch.js";
import { LOCAL_CLI_MODE_ENV, LOCAL_CLI_MODE_HEADER, TEAM_ID_HEADER_NAME } from "./cursor-config/dist/request.js";
import { AGENT_DATA_CLEANUP_ENTRIES_PER_YIELD, DEFAULT_AGENT_DATA_ALLOWED_EXTENSIONS, DEFAULT_AGENT_DATA_SUBDIRS, DEFAULT_AGENT_DATA_TTL_MS, import_node_path11, import_promises3 } from "./local-exec/dist/agent-data-cleanup.js";
import { MAX_TOOL_ANNOTATION_TITLE_LENGTH } from "./mcp-core/dist/mcp-tool-annotations.js";
import { Code } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/code.js";
import { ConnectError } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/connect-error.js";
import { require_undici2 } from "./node_modules/.pnpm/undici@6.28.0/node_modules/undici/index.js";
import { AgentService } from "./proto/dist/generated/agent/v1/agent_service_connect.js";
import { AgentStoreConflictCursor } from "./proto/dist/generated/agent/v1/agent_store_conflict_exec_pb.js";
import { AiService } from "./proto/dist/generated/aiserver/v1/aiserver_connect.js";
import { BackgroundComposerService } from "./proto/dist/generated/aiserver/v1/background_composer_connect.js";
import { BidiService } from "./proto/dist/generated/aiserver/v1/bidi_connect.js";
import { DashboardService } from "./proto/dist/generated/aiserver/v1/dashboard_connect.js";
import { InferenceService } from "./proto/dist/generated/aiserver/v1/inference_connect.js";
import { PrivateInferenceService } from "./proto/dist/generated/aiserver/v1/private_inference_connect.js";
import { RepositoryService } from "./proto/dist/generated/aiserver/v1/repository_connect.js";
import { BashState, import_node_path16 } from "./shell-exec/dist/bash.js";
import { import_node_child_process8, import_node_stream2 } from "./shell-exec/dist/core.js";
import { BASH_STATE_END_MARKER, BASH_STATE_START_MARKER, dump_bash_state_default } from "./shell-exec/dist/dump_bash_state.js";
import { ZSH_STATE_END_MARKER, ZSH_STATE_START_MARKER, dump_zsh_state_default } from "./shell-exec/dist/dump_zsh_state.js";
import { ZSH_STATE_LIGHT_MARKER, dump_zsh_state_light_default } from "./shell-exec/dist/dump_zsh_state_light.js";
import { SOCKET_ENV_VARS_TO_SCRUB } from "./shell-exec/dist/env-filter.js";
import { NaiveTerminalExecutor } from "./shell-exec/dist/naive.js";
import { ShellOutputLimiter } from "./shell-exec/dist/output-limiter.js";
import { PowerShellState, UTF8_BOM, fs8, import_node_fs16, path14 } from "./shell-exec/dist/powershell.js";
import { import_node_path12 } from "./shell-exec/dist/ripgrep.js";
import { SANDBOX_CACHE_DIR, import_node_crypto5, import_node_fs12, import_node_os6, import_node_path13 } from "./shell-exec/dist/sandbox/cache-env.js";
import { execFileUtf8, sandboxMetadataMap } from "./shell-exec/dist/sandbox/macos/seatbelt.js";
import { import_promises8 } from "./shell-exec/dist/sandbox/policy-loader.js";
import { additionalReadPathsPolicyField, import_node_path15, import_promises5, readBoundaryPolicyField } from "./shell-exec/dist/sandbox/policy-merge.js";
import { SandboxUnsupportedError, import_node_child_process7, import_node_fs15, isMacOS2 } from "./shell-exec/dist/sandbox/sandbox.js";
import { SUDO_ALIAS, isWindows3 } from "./shell-exec/dist/sudo.js";
import { SHELL_ENV_OVERRIDES } from "./shell-exec/dist/types.js";
import { ZshLightState } from "./shell-exec/dist/zsh-light.js";
import { ZshState } from "./shell-exec/dist/zsh.js";
import { SpawnCwdHopStdoutHold } from "./utils/dist/safe-spawn-cwd.js";
import { spawnWorkload } from "./utils/dist/workload-spawn.js";
function withNetworkStarted(transport) {
    return {
        run: (ctx, request3, options2)=>(async function*() {
                const response = transport.run(ctx, request3, options2);
                options2.onNetworkStarted?.();
                yield* response;
            })()
    };
}
export function authIdFromToken(token) {
    if (token === void 0) {
        return void 0;
    }
    try {
        const { sub } = (0, import_cursor_network.decodeJwt)(token);
        return typeof sub === "string" && sub.trim() !== "" ? sub : void 0;
    } catch  {
        return void 0;
    }
}
export function backendNamespace(baseUrl) {
    if (baseUrl === void 0) {
        return void 0;
    }
    try {
        const url2 = new URL(baseUrl);
        if (url2.protocol !== "https:" && url2.protocol !== "http:" || url2.username !== "" || url2.password !== "" || url2.search !== "" || url2.hash !== "") {
            return void 0;
        }
        return `${url2.origin}${url2.pathname.replace(/\/+$/, "")}`;
    } catch  {
        return void 0;
    }
}
export function sameIdentity(left, right) {
    if (left === void 0 || right === void 0) {
        return left === right;
    }
    return left.authId === right.authId && left.backendUrl === right.backendUrl;
}
export function samePrivateInferenceIdentity(left, right) {
    return sameIdentity(left, right);
}
export function privateInferenceIdentityChangedError() {
    return new ConnectError("Private inference account or backend changed", Code.Canceled);
}
export function identityChangedError() {
    return privateInferenceIdentityChangedError();
}
export async function createNetworkAgentClient(runtime, deps = {}) {
    const host = runtime;
    const createTransportHandler = deps.createTransportHandler ?? ((resolvedHost)=>new import_cursor_network2.AiConnectTransportHandler(resolvedHost));
    const createContextClient = deps.createContextClient ?? ((service, transport2)=>createContextPropagatingClient(service, transport2));
    const createConnectClient = deps.createConnectClient ?? createClient;
    const createAgentClient = deps.createAgentClient ?? ((transport2, endpointUrl2)=>new AgentConnectClient(transport2, endpointUrl2));
    const loadBackgroundComposerService = deps.loadBackgroundComposerService ?? (async ()=>BackgroundComposerService);
    const transportHandler = createTransportHandler(host);
    const transportReady = transportHandler.isSetup.then(()=>void 0);
    let transport;
    if (host.getCursorAuthToken() === void 0 && host.getCursorCreds() !== void 0) {
        transport = holdCallsUntilSetup(transportHandler, transportReady);
    } else {
        await transportReady;
        transport = transportHandler.getTransport();
    }
    const endpointUrl = host.getCursorCreds()?.agentBackendUrlNonPrivacy.default ?? host.getCursorCreds()?.backendUrl ?? "";
    const contextClient = createContextClient(AgentService, transport);
    const started = withNetworkStarted({
        run: (ctx, request3, options2)=>contextClient.run(ctx, request3, options2)
    });
    const agentTransport = deps.wrapAgentTransport === void 0 ? started : deps.wrapAgentTransport(started);
    let backgroundComposerClientPromise;
    const backgroundComposerClientProvider = ()=>{
        backgroundComposerClientPromise ??= Promise.resolve().then(()=>loadBackgroundComposerService()).then((service)=>createConnectClient(service, transport)).catch((error3)=>{
            backgroundComposerClientPromise = void 0;
            throw error3;
        });
        return backgroundComposerClientPromise;
    };
    const client = createAgentClient(agentTransport, endpointUrl);
    const builtinInference = {
        transport,
        isHttp2TransportFor: (rpc)=>transportHandler.isHttp2TransportFor(rpc)
    };
    const inference = deps.wrapInferenceTransport === void 0 ? builtinInference : deps.wrapInferenceTransport(builtinInference);
    const managedInferenceClient = createConnectClient(InferenceService, inference.transport);
    const aiToolsClient = createConnectClient(AiService, inference.transport);
    const managedAgentToolsClient = {
        runWebSearch: aiToolsClient.runWebSearch,
        runWebFetch: aiToolsClient.runWebFetch,
        runGenerateImage: aiToolsClient.runGenerateImage,
        runGenerateVideo: aiToolsClient.runGenerateVideo,
        runXSearch: aiToolsClient.runXSearch,
        codebaseSearch: createConnectClient(RepositoryService, inference.transport),
        smartModeClassifier: aiToolsClient
    };
    const privateInferenceBackend = new NetworkPrivateInferenceBackend(host, createConnectClient(PrivateInferenceService, inference.transport));
    const managedAgentServiceClient = createConnectClient(AgentService, inference.transport);
    return {
        client,
        transport,
        inferenceTransport: inference.transport,
        managedInferenceClient,
        managedAgentToolsClient,
        managedAgentServiceClient,
        privateInferenceBackend,
        backgroundComposerClientProvider,
        transportReady,
        dispose: ()=>{
            privateInferenceBackend.dispose();
            transportHandler.dispose();
            runtime.dispose?.();
        }
    };
}
function holdCallsUntilSetup(handler, ready2) {
    return {
        unary: async (service, method, signal, timeoutMs, header, input, contextValues)=>{
            await ready2;
            return handler.getTransport().unary(service, method, signal, timeoutMs, header, input, contextValues);
        },
        stream: async (service, method, signal, timeoutMs, header, input, contextValues)=>{
            await ready2;
            return handler.getTransport().stream(service, method, signal, timeoutMs, header, input, contextValues);
        }
    };
}
function isLocalCliMode() {
    return typeof process !== "undefined" && process.env?.[LOCAL_CLI_MODE_ENV] === "true";
}
function applyLocalCliModeHeader(headers) {
    if (isLocalCliMode()) {
        headers.set(LOCAL_CLI_MODE_HEADER, "true");
    }
}
function createLocalCliModeHeaders(headers) {
    if (!isLocalCliMode()) {
        return headers;
    }
    return {
        ...headers,
        [LOCAL_CLI_MODE_HEADER]: "true"
    };
}
function parseActiveTeamId(raw) {
    return typeof raw === "number" && Number.isInteger(raw) && raw > 0 ? raw : void 0;
}
function applyActiveTeamIdHeader(headers, activeTeamId) {
    const teamId = parseActiveTeamId(activeTeamId);
    if (teamId !== void 0 && !headers.get(TEAM_ID_HEADER_NAME)) {
        headers.set(TEAM_ID_HEADER_NAME, String(teamId));
    }
}
function noopRequestMiddleware(req, next) {
    return next(req);
}
function parseCsvStrings(raw) {
    return (raw ?? "").split(",").map((entry)=>entry.trim()).filter((entry)=>entry.length > 0);
}
function parseNumericIds(raw) {
    return [
        ...new Set(parseCsvStrings(raw).map(Number).filter((id)=>Number.isSafeInteger(id) && id > 0))
    ];
}
function parseOrganizationIds(raw) {
    return [
        ...new Set(parseCsvStrings(raw).filter((entry)=>/^\d+$/.test(entry)).map((entry)=>BigInt(entry).toString()).filter((entry)=>entry !== "0"))
    ];
}
function normalizeAllowedLoginDomain(raw) {
    let domain = raw.trim().toLowerCase();
    if (domain.startsWith("@")) {
        domain = domain.slice(1);
    }
    if (domain.length === 0 || domain.includes("@") || /\s/.test(domain)) {
        return void 0;
    }
    return domain;
}
function parseEnforced(raw) {
    if (typeof raw === "boolean") return raw;
    if (typeof raw === "number") return raw === 1;
    if (typeof raw === "string") {
        return [
            "1",
            "true",
            "yes",
            "on"
        ].includes(raw.trim().toLowerCase());
    }
    return false;
}
function rawPolicyIsEffective(raw) {
    return buildMdmSignInPolicyHeaderValue(raw) !== void 0;
}
function buildMdmSignInPolicyHeaderValue(raw) {
    const enforced = parseEnforced(raw.SignInEnforcement);
    const allowedOrganizationIds = parseOrganizationIds(raw.AllowedOrganizationIds);
    const allowedTeamIds = [
        ...new Set([
            ...parseNumericIds(raw.AllowedTeamIds),
            ...parseNumericIds(raw.AllowedTeamId)
        ])
    ];
    const allowedLoginEmails = [
        ...new Set(parseCsvStrings(raw.AllowedLoginEmails).map((email2)=>email2.toLowerCase()).filter((email2)=>email2.includes("@")))
    ];
    const allowedLoginDomains = [
        ...new Set(parseCsvStrings(raw.AllowedLoginDomains).map(normalizeAllowedLoginDomain).filter((domain)=>domain !== void 0))
    ];
    if (!enforced && allowedOrganizationIds.length === 0 && allowedTeamIds.length === 0 && allowedLoginEmails.length === 0 && allowedLoginDomains.length === 0) {
        return void 0;
    }
    const json2 = JSON.stringify({
        enforced,
        allowedOrganizationIds,
        allowedTeamIds: allowedTeamIds.map(String),
        allowedLoginEmails,
        allowedLoginDomains
    });
    return `v1.${Buffer.from(json2, "utf-8").toString("base64url")}`;
}
function pickPolicyValues(source) {
    const keys = [
        "SignInEnforcement",
        "AllowedOrganizationIds",
        "AllowedTeamIds",
        "AllowedTeamId",
        "AllowedLoginEmails",
        "AllowedLoginDomains"
    ];
    const picked = {};
    let any2 = false;
    for (const key of keys){
        if (source[key] !== void 0) {
            picked[key] = source[key];
            any2 = true;
        }
    }
    return any2 ? picked : void 0;
}
async function readMacosManagedPreferences() {
    const candidatePaths = [];
    for (const domain of MACOS_POLICY_DOMAINS){
        candidatePaths.push(import_node_path10.default.join("/Library/Managed Preferences", import_node_os5.default.userInfo().username, `${domain}.plist`), import_node_path10.default.join("/Library/Managed Preferences", `${domain}.plist`));
    }
    let fallback3;
    for (const plistPath of candidatePaths){
        try {
            await import_node_fs11.promises.access(plistPath);
        } catch  {
            continue;
        }
        try {
            const { stdout } = await execFileAsync2("plutil", [
                "-convert",
                "json",
                "-o",
                "-",
                plistPath
            ]);
            const parsed = JSON.parse(stdout);
            const values = pickPolicyValues(parsed);
            if (values !== void 0) {
                if (rawPolicyIsEffective(values)) {
                    return values;
                }
                fallback3 ??= values;
            }
        } catch  {}
    }
    return fallback3;
}
async function readWindowsPolicyRegistry() {
    let fallback3;
    for (const registryKey of WINDOWS_POLICY_REGISTRY_KEYS){
        let stdout;
        try {
            ({ stdout } = await execFileAsync2("reg.exe", [
                "query",
                registryKey
            ]));
        } catch  {
            continue;
        }
        const values = {};
        for (const line of stdout.split(/\r?\n/)){
            const match2 = /^\s{4}(\S+)\s+(REG_\w+)\s+(.*)$/.exec(line);
            if (match2 === null) continue;
            const [, name17, type2, rawValue] = match2;
            if (type2 === "REG_DWORD") {
                values[name17] = Number.parseInt(rawValue.trim(), 16);
            } else {
                values[name17] = rawValue.trim();
            }
        }
        const picked = pickPolicyValues(values);
        if (picked !== void 0) {
            if (rawPolicyIsEffective(picked)) {
                return picked;
            }
            fallback3 ??= picked;
        }
    }
    return fallback3;
}
async function readLinuxPolicyFile() {
    const policyPath = import_node_path10.default.join(import_node_os5.default.homedir(), ".cursor", "policy.json");
    try {
        const contents = await import_node_fs11.promises.readFile(policyPath, "utf-8");
        return pickPolicyValues(JSON.parse(contents));
    } catch  {
        return void 0;
    }
}
async function readRawPolicyValues() {
    const envOverride = process.env.CURSOR_MDM_SIGN_IN_POLICY_JSON;
    if (envOverride !== void 0 && envOverride.length > 0) {
        try {
            return pickPolicyValues(JSON.parse(envOverride));
        } catch  {
            return void 0;
        }
    }
    switch(process.platform){
        case "darwin":
            return await readMacosManagedPreferences();
        case "win32":
            return await readWindowsPolicyRegistry();
        case "linux":
            return await readLinuxPolicyFile();
        default:
            return void 0;
    }
}
async function readMdmSignInPolicyHeaderValue() {
    const now2 = Date.now();
    if (now2 - cachedAtMs < POLICY_CACHE_TTL_MS) {
        return cachedHeaderValue;
    }
    try {
        const raw = await readRawPolicyValues();
        cachedHeaderValue = raw === void 0 ? void 0 : buildMdmSignInPolicyHeaderValue(raw);
    } catch  {
        cachedHeaderValue = void 0;
    }
    cachedAtMs = now2;
    return cachedHeaderValue;
}
async function mdmSignInPolicyHeaders() {
    const value = await readMdmSignInPolicyHeaderValue();
    return value === void 0 ? {} : {
        [MDM_SIGN_IN_POLICY_HEADER_NAME]: value
    };
}
var cachedHeaderValue;
function importUndici() {
    return Promise.resolve().then(()=>__toESM(require_undici2(), 1));
}
function tryCreateAuthDispatcher(undici) {
    try {
        return createAuthDispatcher(undici, proxyUrl, tryCreateSystemAwareTlsOptions());
    } catch  {
        return void 0;
    }
}
function tryCreateSystemAwareTlsOptions() {
    try {
        return createSystemAwareTlsOptions();
    } catch  {
        return void 0;
    }
}
function createSystemAwareTlsOptions() {
    const getCACertificates = import_node_tls.default.getCACertificates;
    if (getCACertificates === void 0) return void 0;
    const defaultCertificates = getCACertificates("default");
    const systemCertificates = getCACertificates("system");
    if (systemCertificates.length === 0) return void 0;
    return {
        ca: [
            ...new Set([
                ...defaultCertificates,
                ...systemCertificates
            ])
        ]
    };
}
function createAuthDispatcher(undici, url2, options2) {
    if (url2 !== void 0 && url2.length > 0) {
        return options2 === void 0 ? new undici.ProxyAgent(url2) : new undici.ProxyAgent({
            uri: url2,
            proxyTls: options2,
            requestTls: options2
        });
    }
    return options2 === void 0 ? void 0 : new undici.Agent({
        connect: options2
    });
}
async function proxyFetch(url2, options2) {
    authTransport ??= importUndici().then((undici)=>({
            fetch: undici.fetch,
            dispatcher: tryCreateAuthDispatcher(undici)
        }));
    const { fetch: fetch2, dispatcher } = await authTransport;
    if (dispatcher !== void 0) {
        return fetch2(url2, {
            ...options2,
            dispatcher
        });
    }
    return fetch2(url2, options2);
}
var authTransport;
function stripTrailingSlashes(url2) {
    return url2.replace(/\/+$/, "");
}
export function resolveWebsiteUrl(url2) {
    return stripTrailingSlashes(url2 ?? process.env.CURSOR_WEBSITE_URL ?? "https://cursor.com");
}
export function resolveApiBaseUrl(url2) {
    return stripTrailingSlashes(url2 ?? process.env.CURSOR_API_BASE_URL ?? "https://api2.cursor.sh");
}
function base64URLEncode(buffer) {
    return buffer.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function sha256(data) {
    return import_node_crypto4.default.createHash("sha256").update(data).digest();
}
function generateUuid() {
    return import_node_crypto4.default.randomUUID();
}
export function generateAuthParams(redirectTarget = "cli", websiteUrl = resolveWebsiteUrl(), supportsSelectedTeamLogin = false) {
    const verifierArray = import_node_crypto4.default.randomBytes(32);
    const verifier = base64URLEncode(verifierArray);
    const challengeHash = sha256(verifier);
    const challenge = base64URLEncode(challengeHash);
    const uuid2 = generateUuid();
    const loginUrl = new URL("/loginDeepControl", websiteUrl);
    loginUrl.searchParams.set("challenge", challenge);
    loginUrl.searchParams.set("uuid", uuid2);
    loginUrl.searchParams.set("mode", "login");
    loginUrl.searchParams.set("redirectTarget", redirectTarget);
    if (supportsSelectedTeamLogin) {
        loginUrl.searchParams.set("supportsSelectedTeamLogin", "true");
    }
    return {
        uuid: uuid2,
        challenge,
        verifier,
        loginUrl: loginUrl.toString()
    };
}
export function stripCredentialsFromProxyUrl(proxyUrl2) {
    try {
        const url2 = new URL(proxyUrl2);
        url2.username = "";
        url2.password = "";
        return url2.toString();
    } catch  {
        return "[proxy URL redacted]";
    }
}
export async function exchangeApiKeyForTokens(apiKey, options2) {
    const baseUrl = resolveApiBaseUrl(options2?.endpoint);
    const policyHeaders = await mdmSignInPolicyHeaders();
    try {
        const headers = createLocalCliModeHeaders({
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
            ...policyHeaders
        });
        const response = await proxyFetch(`${baseUrl}/auth/exchange_user_api_key`, {
            method: "POST",
            headers,
            body: JSON.stringify({})
        });
        if (response.status === 403) {
            const body = await response.json().catch(()=>void 0);
            if (body?.error === SIGN_IN_POLICY_VIOLATION_ERROR) {
                throw new SignInPolicyViolationError();
            }
            return null;
        }
        if (response.status >= 500) {
            throw new AuthNetworkError(new Error(`exchange_user_api_key returned HTTP ${response.status}`));
        }
        if (!response.ok) return null;
        const authResult = await response.json();
        if (typeof authResult === "object" && authResult !== null && "accessToken" in authResult && "refreshToken" in authResult) {
            return authResult;
        }
        return null;
    } catch (err) {
        if (err instanceof SignInPolicyViolationError || err instanceof AuthNetworkError) {
            throw err;
        }
        throw new AuthNetworkError(err);
    }
}
function isAborted2(signal) {
    return signal?.aborted === true;
}
function sleep(ms2, signal) {
    return new Promise((resolve36)=>{
        if (signal?.aborted === true) {
            resolve36();
            return;
        }
        const onAbort = ()=>{
            clearTimeout(timer2);
            resolve36();
        };
        const timer2 = setTimeout(()=>{
            signal?.removeEventListener("abort", onAbort);
            resolve36();
        }, ms2);
        signal?.addEventListener("abort", onAbort, {
            once: true
        });
    });
}
function clientErrorClass(error3) {
    if (typeof error3 !== "object" || error3 === null) return "unknown";
    const candidate = error3;
    if (typeof candidate.code === "string" && /^[A-Z][A-Z0-9_]{0,63}$/.test(candidate.code)) {
        return candidate.code.includes("TIMEOUT") || candidate.code === "ETIMEDOUT" ? "timeout" : candidate.code;
    }
    if (candidate.cause !== void 0) return clientErrorClass(candidate.cause);
    return "other";
}
export async function pollAuthenticationStatus({ uuid: uuid2, verifier, apiBaseUrl = resolveApiBaseUrl(), signal, onGiveUp }) {
    const pollingEndpoint = `${apiBaseUrl}/auth/poll`;
    const maxAttempts = 150;
    const baseDelay = 1e3;
    const maxDelay = 1e4;
    const backoffMultiplier = 1.2;
    const maxConsecutiveErrors = 3;
    const policyHeaders = await mdmSignInPolicyHeaders();
    let consecutiveErrors = 0;
    let pollAttemptCount = 0;
    let lastHttpStatus;
    let lastClientErrorClass;
    const startedAt = Date.now();
    const giveUp = (reason)=>{
        try {
            onGiveUp?.({
                uuid: uuid2,
                elapsedMs: Math.max(0, Date.now() - startedAt),
                reason,
                lastHttpStatus,
                clientErrorClass: lastClientErrorClass,
                consecutiveErrorCount: consecutiveErrors,
                pollAttemptCount
            });
        } catch  {}
        return null;
    };
    for(let attempt = 0; attempt < maxAttempts; attempt++){
        if (isAborted2(signal)) {
            return giveUp("other");
        }
        pollAttemptCount++;
        try {
            const headers = createLocalCliModeHeaders({
                "Content-Type": "application/json",
                ...policyHeaders
            });
            const response = await proxyFetch(`${pollingEndpoint}?uuid=${uuid2}&verifier=${verifier}`, {
                headers,
                signal
            });
            lastHttpStatus = response.status;
            lastClientErrorClass = void 0;
            if (response.status === 403) {
                const body = await response.json().catch(()=>void 0);
                if (body?.error === SIGN_IN_POLICY_VIOLATION_ERROR) {
                    throw new SignInPolicyViolationError();
                }
            }
            if (response.status === 404) {
                consecutiveErrors = 0;
                const delay3 = Math.min(baseDelay * backoffMultiplier ** attempt, maxDelay);
                await sleep(delay3, signal);
                continue;
            }
            if (!response.ok) {
                consecutiveErrors++;
                if (consecutiveErrors >= maxConsecutiveErrors) {
                    return giveUp("three_non_404");
                }
                const delay3 = Math.min(baseDelay * backoffMultiplier ** attempt, maxDelay);
                await sleep(delay3, signal);
                continue;
            }
            consecutiveErrors = 0;
            const authResult = await response.json();
            if (typeof authResult === "object" && authResult !== null && "accessToken" in authResult && "refreshToken" in authResult) {
                return authResult;
            }
            return giveUp("bad_200");
        } catch (_error) {
            if (_error instanceof SignInPolicyViolationError) {
                throw _error;
            }
            if (isAborted2(signal)) {
                return giveUp("other");
            }
            lastHttpStatus = void 0;
            lastClientErrorClass = clientErrorClass(_error);
            consecutiveErrors++;
            if (consecutiveErrors >= maxConsecutiveErrors) {
                return giveUp("three_non_404");
            }
            const delay3 = Math.min(baseDelay * backoffMultiplier ** attempt, maxDelay);
            await sleep(delay3, signal);
        }
    }
    return giveUp("other");
}
export async function resolveAccessTokenWithRefreshPolicy(params) {
    const { currentToken, ephemeralToken, isTokenExpiringSoon: isTokenExpiringSoon3, refreshToken } = params;
    const sessionToken = ephemeralToken ?? currentToken;
    if (!sessionToken) {
        return await refreshToken();
    }
    if (!isTokenExpiringSoon3(sessionToken)) {
        return sessionToken;
    }
    const refreshedToken = await refreshToken();
    return refreshedToken ?? sessionToken;
}
async function cacheThenPersistAccessToken(params) {
    const { accessToken, persist, setEphemeralToken, onPersistError } = params;
    setEphemeralToken(accessToken);
    try {
        await persist();
    } catch (error3) {
        onPersistError?.(error3);
    }
}
function decodeJwt_ONLY_FOR_EXPIRATION_CHECK(token) {
    const base64Payload = token.split(".")[1];
    const payloadBuffer = Buffer.from(base64Payload, "base64");
    return JSON.parse(payloadBuffer.toString());
}
function isTokenExpiringSoon(token) {
    try {
        const decoded = decodeJwt_ONLY_FOR_EXPIRATION_CHECK(token);
        const currentTime = Math.floor(Date.now() / 1e3);
        const expirationTime = decoded.exp;
        return expirationTime - currentTime < 300;
    } catch  {
        return true;
    }
}
async function refreshTokenWithApiKey(credentialManager, endpoint) {
    const apiKey = await credentialManager.getApiKey() ?? process.env.CURSOR_API_KEY;
    if (!apiKey) {
        return null;
    }
    const loginManager = new LoginManager();
    let authResult;
    try {
        authResult = await loginManager.loginWithApiKey(apiKey, {
            endpoint
        });
    } catch (err) {
        if (err instanceof AuthNetworkError) {
            return null;
        }
        throw err;
    }
    if (authResult?.accessToken && authResult.refreshToken) {
        await cacheThenPersistAccessToken({
            accessToken: authResult.accessToken,
            setEphemeralToken: (token)=>{
                ephemeralAccessToken = token;
            },
            persist: async ()=>{
                await credentialManager.setAuthentication(authResult.accessToken, authResult.refreshToken, apiKey);
            }
        });
        return authResult.accessToken;
    }
    return null;
}
async function getValidAccessToken(credentialManager, endpoint) {
    const currentToken = await credentialManager.getAccessToken() ?? null;
    return await resolveAccessTokenWithRefreshPolicy({
        currentToken,
        ephemeralToken: ephemeralAccessToken,
        isTokenExpiringSoon,
        refreshToken: async ()=>{
            const apiKey = await credentialManager.getApiKey() ?? process.env.CURSOR_API_KEY;
            if (!apiKey) {
                return null;
            }
            return await refreshTokenWithApiKey(credentialManager, endpoint);
        }
    });
}
function envToNumber(name17, fallback3) {
    const raw = process.env[name17];
    if (!raw) return fallback3;
    const n = Number.parseInt(raw, 10);
    return Number.isFinite(n) && n > 0 ? n : fallback3;
}
function protoPrivacyToGhostMode(privacyMode) {
    return privacyMode === 0 || privacyMode === 1 || privacyMode === 2;
}
function getPrivacyCacheSafe(provider) {
    const c = provider.get();
    const pc = c.privacyCache;
    if (!pc) return void 0;
    return {
        ghostMode: pc.ghostMode,
        privacyMode: pc.privacyMode,
        updatedAt: pc.updatedAt
    };
}
function maybeRefreshPrivacyCacheInBackground(args) {
    try {
        const now2 = Date.now();
        const maxAgeMs = envToNumber("CURSOR_PRIVACY_CACHE_MAX_AGE_MS", ONE_HOUR_MS);
        const sampleEvery = envToNumber("CURSOR_PRIVACY_SAMPLE_RATE", 10);
        const current = getPrivacyCacheSafe(args.configProvider);
        const isStale = !current || now2 - current.updatedAt > maxAgeMs;
        const doSample = Math.floor(Math.random() * sampleEvery) === 0;
        const shouldRefresh = !current || isStale || doSample;
        if (!shouldRefresh) {
            return;
        }
        void (async ()=>{
            try {
                const authInterceptor = (next)=>async (req)=>{
                        const token = await args.credentialManager.getAccessToken();
                        if (token) req.header.set("authorization", `Bearer ${token}`);
                        applyLocalCliModeHeader(req.header);
                        return next(req);
                    };
                const baseUrl = args.baseUrl.endsWith("cursor.sh") ? "https://api2.cursor.sh" : args.baseUrl;
                const transport = createConnectTransport({
                    baseUrl,
                    httpVersion: "1.1",
                    interceptors: [
                        authInterceptor
                    ],
                    nodeOptions: {
                        rejectUnauthorized: !isDev
                    }
                });
                const dashboard = createClient(DashboardService, transport);
                const resp = await dashboard.getUserPrivacyMode({
                    inferredPrivacyMode: 0
                });
                const newGhost = protoPrivacyToGhostMode(resp.privacyMode);
                await args.configProvider.transform((c)=>({
                        ...c,
                        privacyCache: {
                            ghostMode: newGhost,
                            privacyMode: resp.privacyMode,
                            updatedAt: Date.now()
                        }
                    }));
            } catch (_e2) {}
        })();
    } catch (_e2) {}
}
function createAuthInterceptor(credentialManager, requestMiddleware, opts) {
    const pinnedActiveTeamId = opts?.configProvider?.get().authInfo?.activeTeamId;
    return (next)=>async (req)=>{
            if (opts?.baseUrl && opts?.configProvider) {
                try {
                    maybeRefreshPrivacyCacheInBackground({
                        credentialManager,
                        baseUrl: opts.baseUrl,
                        configProvider: opts.configProvider
                    });
                } catch  {}
            }
            const baseUrl = opts?.baseUrl || "";
            const token = await getValidAccessToken(credentialManager, baseUrl);
            if (token !== void 0 && token !== null) {
                req.header.set("authorization", `Bearer ${token}`);
            }
            const ghostMode = (()=>{
                try {
                    const configValue = opts?.configProvider?.get().privacyCache?.ghostMode;
                    if (typeof configValue === "boolean") {
                        return configValue;
                    }
                    return true;
                } catch  {
                    return true;
                }
            })();
            req.header.set("x-ghost-mode", ghostMode ? "true" : "false");
            applyLocalCliModeHeader(req.header);
            applyActiveTeamIdHeader(req.header, pinnedActiveTeamId);
            req.header.set("x-cursor-client-version", `extension-${process.env.VSCODE_VERSION ?? "unknown"}`);
            if (!req.header.get("x-request-id")) {
                req.header.set("x-request-id", crypto.randomUUID());
            }
            const anyReq = {
                requestId: req.header.get("x-request-id"),
                inner: req
            };
            const response = await requestMiddleware(anyReq, (req2)=>next(req2.inner));
            return response;
        };
}
export function createDashboardClient(options2) {
    const authInterceptor = createAuthInterceptor(options2.credentialManager, options2.requestMiddleware ?? noopRequestMiddleware, {
        baseUrl: options2.endpoint,
        configProvider: options2.configProvider
    });
    const transport = createConnectTransport({
        baseUrl: options2.endpoint,
        httpVersion: "1.1",
        interceptors: [
            authInterceptor,
            ...options2.extraInterceptors ?? []
        ],
        nodeOptions: {
            rejectUnauthorized: !isDev
        }
    });
    return createClient(DashboardService, transport);
}
export function mcpToolRequiresConfirmation(annotations) {
    return annotations?.[MCP_TOOL_REQUIRES_CONFIRMATION_META_KEY] === true;
}
export function isDeclaredReadOnlyMcpTool(annotations) {
    if (annotations === void 0) {
        return false;
    }
    if (annotations.destructiveHint === true) {
        return false;
    }
    return annotations.readOnlyHint === true;
}
export function parseMcpToolAnnotations(annotationsJson) {
    if (annotationsJson === void 0 || annotationsJson.length === 0) {
        return void 0;
    }
    try {
        const parsed = JSON.parse(annotationsJson);
        if (typeof parsed === "object" && parsed !== null && !Array.isArray(parsed)) {
            return parsed;
        }
    } catch  {}
    return void 0;
}
export function toolAnnotationsJsonField(annotations) {
    if (annotations === void 0) {
        return {};
    }
    const bounded2 = {};
    if (typeof annotations.title === "string" && annotations.title.length > 0) {
        bounded2.title = annotations.title.slice(0, MAX_TOOL_ANNOTATION_TITLE_LENGTH);
    }
    for (const key of [
        "readOnlyHint",
        "destructiveHint",
        "idempotentHint",
        "openWorldHint"
    ]){
        if (typeof annotations[key] === "boolean") {
            bounded2[key] = annotations[key];
        }
    }
    if (mcpToolRequiresConfirmation(annotations)) {
        bounded2[MCP_TOOL_REQUIRES_CONFIRMATION_META_KEY] = true;
    }
    if (Object.keys(bounded2).length === 0) {
        return {};
    }
    return {
        annotationsJson: JSON.stringify(bounded2)
    };
}
async function cleanupSubdir(dir, nowMs2, ttlMs, allowedExtensions, recursive, traversalState) {
    let scannedFiles = 0;
    let deletedFiles = 0;
    let isEmpty = true;
    try {
        const entries = await (0, import_promises3.readdir)(dir, {
            withFileTypes: true
        });
        for (const entry of entries){
            traversalState.entriesSinceYield++;
            if (traversalState.entriesSinceYield >= AGENT_DATA_CLEANUP_ENTRIES_PER_YIELD) {
                traversalState.entriesSinceYield = 0;
                await new Promise((resolve36)=>setImmediate(resolve36));
            }
            const entryPath = (0, import_node_path11.join)(dir, entry.name);
            if (entry.isDirectory()) {
                if (!recursive) {
                    isEmpty = false;
                    continue;
                }
                const result = await cleanupSubdir(entryPath, nowMs2, ttlMs, allowedExtensions, recursive, traversalState);
                scannedFiles += result.scannedFiles;
                deletedFiles += result.deletedFiles;
                if (!result.isEmpty) {
                    isEmpty = false;
                    continue;
                }
                try {
                    await (0, import_promises3.rmdir)(entryPath);
                } catch  {
                    isEmpty = false;
                }
                continue;
            }
            if (!entry.isFile() || !allowedExtensions.some((ext2)=>entry.name.endsWith(ext2))) {
                isEmpty = false;
                continue;
            }
            scannedFiles++;
            try {
                const s3 = await (0, import_promises3.stat)(entryPath);
                if (Number.isFinite(s3.mtimeMs) && nowMs2 - s3.mtimeMs > ttlMs) {
                    await (0, import_promises3.rm)(entryPath, {
                        force: true
                    });
                    deletedFiles++;
                } else {
                    isEmpty = false;
                }
            } catch  {
                isEmpty = false;
            }
        }
    } catch  {
        isEmpty = false;
    }
    return {
        scannedFiles,
        deletedFiles,
        isEmpty
    };
}
export async function cleanupOldAgentData(options2) {
    const nowMs2 = options2.nowMs ?? Date.now();
    const ttlMs = options2.ttlMs ?? DEFAULT_AGENT_DATA_TTL_MS;
    const allowedExtensions = options2.allowedExtensions ?? DEFAULT_AGENT_DATA_ALLOWED_EXTENSIONS;
    const subdirs = options2.subdirs ?? DEFAULT_AGENT_DATA_SUBDIRS;
    let scannedProjects = 0;
    let scannedFiles = 0;
    let deletedFiles = 0;
    const traversalState = {
        entriesSinceYield: 0
    };
    try {
        const projectEntries = await (0, import_promises3.readdir)(options2.projectsDir, {
            withFileTypes: true
        });
        for (const projectEntry of projectEntries){
            if (!projectEntry.isDirectory()) continue;
            scannedProjects++;
            for (const subdir of subdirs){
                const dir = (0, import_node_path11.join)(options2.projectsDir, projectEntry.name, subdir);
                try {
                    if (!(await (0, import_promises3.lstat)(dir)).isDirectory()) continue;
                } catch  {
                    continue;
                }
                const result = await cleanupSubdir(dir, nowMs2, ttlMs, allowedExtensions, subdir === "agent-tools", traversalState);
                scannedFiles += result.scannedFiles;
                deletedFiles += result.deletedFiles;
            }
        }
    } catch  {}
    return {
        scannedProjects,
        scannedFiles,
        deletedFiles
    };
}
export function toProtoCursor(cursor) {
    return new AgentStoreConflictCursor({
        journalEpoch: cursor.journalEpoch,
        seq: BigInt(cursor.seq),
        lastEventId: cursor.lastEventId
    });
}
export function fromProtoCursor(cursor) {
    if (cursor === void 0) {
        return void 0;
    }
    return {
        journalEpoch: cursor.journalEpoch,
        seq: Number(cursor.seq),
        lastEventId: cursor.lastEventId
    };
}
export function resolveRipgrepFromPath() {
    const resolved = findActualExecutable("rg", []).cmd;
    return resolved !== "rg" ? resolved : void 0;
}
export function configureRipgrepPath(path64) {
    if (!path64) {
        throw new Error("configureRipgrepPath: path must not be empty");
    }
    configuredPath = path64;
}
function findPathEnvKey(env) {
    const pathKeys = Object.keys(env).filter((key)=>key.toLowerCase() === "path");
    if (pathKeys.length === 0) {
        return void 0;
    }
    if (process.platform === "win32") {
        return pathKeys.find((key)=>key === "Path") ?? pathKeys[0];
    }
    return pathKeys.find((key)=>key === "PATH") ?? pathKeys[0];
}
function getPathEnvValue(env) {
    const pathKey = findPathEnvKey(env);
    return pathKey !== void 0 ? env[pathKey] ?? "" : "";
}
function setPathEnvValue(env, pathValue) {
    const pathKey = findPathEnvKey(env) ?? (process.platform === "win32" ? "Path" : "PATH");
    const result = {
        ...env
    };
    for (const key of Object.keys(result)){
        if (key !== pathKey && key.toLowerCase() === "path") {
            delete result[key];
        }
    }
    result[pathKey] = pathValue;
    return result;
}
function prependExecutableDirToPath(env, executablePath) {
    const executableDir = (0, import_node_path12.dirname)(executablePath);
    if (!executableDir || executableDir === ".") {
        return env;
    }
    const currentPathEntries = getPathEnvValue(env).split(import_node_path12.delimiter).filter(Boolean);
    const newPathValue = [
        executableDir,
        ...currentPathEntries.filter((entry)=>entry !== executableDir)
    ].join(import_node_path12.delimiter);
    return setPathEnvValue(env, newPathValue);
}
export function withConfiguredRipgrepEnv(env) {
    if (!configuredPath || !(0, import_node_path12.isAbsolute)(configuredPath)) {
        return env;
    }
    return {
        ...prependExecutableDirToPath(env, configuredPath),
        CURSOR_RIPGREP_PATH: configuredPath
    };
}
export function getRipgrepBinaryPath() {
    if (!configuredPath) {
        throw new Error("Ripgrep path not configured. Call configureRipgrepPath() at startup.");
    }
    return configuredPath;
}
export function isRipgrepConfigured() {
    return configuredPath !== void 0;
}
var configuredPath;
function filterElectronEnv(env) {
    const sourceEnv = env || process.env;
    const { ELECTRON_RUN_AS_NODE, ...filteredEnv } = sourceEnv;
    return filteredEnv;
}
function scrubSocketEnvVars(env) {
    const result = {
        ...env
    };
    for (const key of SOCKET_ENV_VARS_TO_SCRUB){
        delete result[key];
    }
    return result;
}
function generateSessionId() {
    return (0, import_node_crypto5.randomBytes)(16).toString("hex");
}
function getSessionId() {
    if (!cachedSessionId) {
        cachedSessionId = generateSessionId();
    }
    return cachedSessionId;
}
function isPrivateOwnedDirectory(path64, uid) {
    const stat24 = (0, import_node_fs12.lstatSync)(path64);
    return stat24.isDirectory() && stat24.uid === uid && (stat24.mode & 18) === 0;
}
function mkdirIfMissing(path64) {
    try {
        (0, import_node_fs12.mkdirSync)(path64, {
            mode: 448
        });
    } catch (error3) {
        if (error3.code !== "EEXIST") {
            throw error3;
        }
    }
}
function ensureSandboxProjectDir(workspaceRoot) {
    return resolveSandboxProjectDir(workspaceRoot, {
        create: true
    });
}
export function getSandboxProjectDir(workspaceRoot) {
    return resolveSandboxProjectDir(workspaceRoot, {
        create: false
    });
}
function resolveSandboxProjectDir(workspaceRoot, { create }) {
    const uid = process.getuid?.();
    if (uid === void 0) {
        return void 0;
    }
    const dir = (0, import_node_path13.join)((0, import_node_os6.tmpdir)(), `cursor-sandbox-${slugifyPath((0, import_node_path13.resolve)(workspaceRoot))}`);
    try {
        for (const level of [
            dir,
            (0, import_node_path13.join)(dir, "tmp")
        ]){
            if (create) {
                mkdirIfMissing(level);
            }
            if (!isPrivateOwnedDirectory(level, uid)) {
                return void 0;
            }
        }
        return dir;
    } catch  {
        return void 0;
    }
}
function getSandboxProjectTempEnv(projectDir) {
    const dir = (0, import_node_path13.join)(projectDir, "tmp");
    return {
        TMPDIR: dir,
        TMP: dir,
        TEMP: dir,
        TMPPREFIX: (0, import_node_path13.join)(dir, "sh-")
    };
}
function getSandboxCacheEnv(cacheRoot = (0, import_node_path13.join)((0, import_node_os6.tmpdir)(), SANDBOX_CACHE_DIR, getSessionId())) {
    return {
        NPM_CONFIG_CACHE: (0, import_node_path13.join)(cacheRoot, "npm"),
        PNPM_STORE_PATH: (0, import_node_path13.join)(cacheRoot, "pnpm-store"),
        GOCACHE: (0, import_node_path13.join)(cacheRoot, "go-build"),
        GOMODCACHE: (0, import_node_path13.join)(cacheRoot, "go-mod"),
        CARGO_TARGET_DIR: (0, import_node_path13.join)(cacheRoot, "cargo-target"),
        PIP_CACHE_DIR: (0, import_node_path13.join)(cacheRoot, "pip"),
        UV_CACHE_DIR: (0, import_node_path13.join)(cacheRoot, "uv"),
        BUN_INSTALL_CACHE_DIR: (0, import_node_path13.join)(cacheRoot, "bun"),
        YARN_CACHE_FOLDER: (0, import_node_path13.join)(cacheRoot, "yarn"),
        npm_config_devdir: (0, import_node_path13.join)(cacheRoot, "node-gyp"),
        PLAYWRIGHT_BROWSERS_PATH: (0, import_node_path13.join)(cacheRoot, "playwright"),
        PUPPETEER_CACHE_DIR: (0, import_node_path13.join)(cacheRoot, "puppeteer"),
        TURBO_CACHE_DIR: (0, import_node_path13.join)(cacheRoot, "turbo"),
        GRADLE_USER_HOME: (0, import_node_path13.join)(cacheRoot, "gradle"),
        CONDA_PKGS_DIRS: (0, import_node_path13.join)(cacheRoot, "conda"),
        POETRY_CACHE_DIR: (0, import_node_path13.join)(cacheRoot, "poetry"),
        GEM_SPEC_CACHE: (0, import_node_path13.join)(cacheRoot, "gem-specs"),
        BUNDLE_PATH: (0, import_node_path13.join)(cacheRoot, "bundle"),
        COMPOSER_HOME: (0, import_node_path13.join)(cacheRoot, "composer"),
        HOMEBREW_CACHE: (0, import_node_path13.join)(cacheRoot, "homebrew"),
        CYPRESS_CACHE_FOLDER: (0, import_node_path13.join)(cacheRoot, "cypress"),
        NX_CACHE_DIRECTORY: (0, import_node_path13.join)(cacheRoot, "nx"),
        NUGET_PACKAGES: (0, import_node_path13.join)(cacheRoot, "nuget"),
        CCACHE_DIR: (0, import_node_path13.join)(cacheRoot, "ccache"),
        CP_HOME_DIR: (0, import_node_path13.join)(cacheRoot, "cocoapods")
    };
}
var cachedSessionId;
export function getHardcodedAllowedReadPaths(platform = process.platform, homeDir = import_node_os7.default.homedir(), bundledPaths = {}) {
    const paths = [];
    for (const entry of HARDCODED_ALLOWED_READ_PATHS){
        if (entry.platform !== platform) {
            continue;
        }
        if (entry.scope === "global") {
            paths.push(entry.path);
            continue;
        }
        const candidate = entry.scope === "bundled" ? bundledPaths[entry.path] : (0, import_node_path14.join)(homeDir, entry.path);
        if (!candidate) {
            continue;
        }
        try {
            let isAllowed;
            switch(entry.scope){
                case "home":
                    isAllowed = (0, import_node_fs13.lstatSync)(candidate).isFile();
                    break;
                case "home-dir":
                    isAllowed = (0, import_node_fs13.lstatSync)(candidate).isDirectory();
                    break;
                case "bundled":
                    isAllowed = (0, import_node_fs13.statSync)(candidate).isFile();
                    break;
            }
            if (isAllowed) {
                paths.push(candidate);
            }
        } catch  {}
    }
    return paths;
}
function convertPathsToIgnoreMapping(...paths) {
    const mapping = {};
    for (const p2 of paths){
        let isDir = false;
        try {
            isDir = (0, import_node_fs13.existsSync)(p2) && (0, import_node_fs13.statSync)(p2).isDirectory();
        } catch  {}
        if (isDir) {
            if (!mapping[p2]) mapping[p2] = [];
            mapping[p2].push("**");
        } else {
            const lastSlash = p2.lastIndexOf("/");
            const dir = lastSlash > 0 ? p2.slice(0, lastSlash) : "/";
            const file = lastSlash >= 0 ? p2.slice(lastSlash + 1) : p2;
            if (!mapping[dir]) mapping[dir] = [];
            if (file) {
                mapping[dir].push(file, `${file}/**`);
            } else {
                mapping[dir].push("**");
            }
        }
    }
    return mapping;
}
function getWorkspaceWriteProtectionMapping(workspaceDir) {
    const patterns = HARDCODED_WRITE_PROTECTION_PATTERNS.filter((e)=>e.type === "workspace").map((e)=>e.pattern);
    return {
        [workspaceDir]: patterns
    };
}
function getGitWriteProtectionMapping(gitDirParent) {
    const patterns = HARDCODED_WRITE_PROTECTION_PATTERNS.filter((e)=>e.type === "git").map((e)=>e.pattern);
    return {
        [gitDirParent]: patterns
    };
}
function getWorktreeWriteProtectionMapping(workspaceDir) {
    const patterns = HARDCODED_WRITE_PROTECTION_PATTERNS.filter((e)=>e.type === "worktree").map((e)=>e.pattern);
    return {
        [workspaceDir]: patterns
    };
}
function getHardcodedNetworkPolicy() {
    if (HARDCODED_NETWORK_DENYLIST.length === 0) {
        return void 0;
    }
    return {
        version: 1,
        deny: [
            ...HARDCODED_NETWORK_DENYLIST
        ]
    };
}
function getEffectiveSandboxReadBoundary(requested, workspaceReadEnabled) {
    if (!workspaceReadEnabled) {
        return "system";
    }
    return requested ?? "system";
}
function getHardcodedSandboxPolicy(workspaceDir) {
    const networkPolicy = getHardcodedNetworkPolicy();
    const homeDir = import_node_os7.default.homedir();
    const additionalReadonlyPaths = [];
    for (const entry of HARDCODED_WRITE_PROTECTION_PATTERNS){
        switch(entry.type){
            case "workspace":
                break;
            case "git":
                break;
            case "worktree":
                break;
            case "absolute":
                {
                    additionalReadonlyPaths.push(entry.pattern);
                    break;
                }
            case "home":
                {
                    if (homeDir.length > 0) {
                        additionalReadonlyPaths.push((0, import_node_path14.join)(homeDir, entry.pattern));
                    }
                    break;
                }
            default:
                {
                    const _exhaustive = entry.type;
                    throw new Error(`Unknown entry type: ${_exhaustive}`);
                }
        }
    }
    return {
        type: "workspace_readwrite",
        additionalReadonlyPaths,
        writeProtectionMapping: getWorkspaceWriteProtectionMapping(workspaceDir),
        ...networkPolicy && {
            networkPolicy
        },
        networkPolicyStrict: true
    };
}
function getWorkspaceIgnore() {
    if (_workspaceIgnore === null) {
        _workspaceIgnore = (0, import_ignore.default)({
            ignoreCase: true
        });
        _workspaceIgnore.add(HARDCODED_WRITE_PROTECTION_PATTERNS.filter((e)=>e.type === "workspace").map((e)=>e.pattern));
    }
    return _workspaceIgnore;
}
function getGitIgnore() {
    if (_gitIgnore === null) {
        _gitIgnore = (0, import_ignore.default)({
            ignoreCase: true
        });
        _gitIgnore.add(HARDCODED_WRITE_PROTECTION_PATTERNS.filter((e)=>e.type === "git").map((e)=>e.pattern));
    }
    return _gitIgnore;
}
async function resolveWorktreeGitDirParent(workspaceDir) {
    try {
        const commonDir = await spawnPromise("git", [
            "rev-parse",
            "--git-common-dir"
        ], {
            cwd: workspaceDir
        });
        return (0, import_node_path14.dirname)((0, import_node_path14.resolve)(workspaceDir, commonDir.trim()));
    } catch  {
        return null;
    }
}
function getAbsoluteAndHomePaths() {
    if (_absoluteAndHomePaths !== null) return _absoluteAndHomePaths;
    const homeDir = import_node_os7.default.homedir();
    const paths = [];
    for (const entry of HARDCODED_WRITE_PROTECTION_PATTERNS){
        switch(entry.type){
            case "absolute":
                paths.push(entry.pattern);
                break;
            case "home":
                if (homeDir.length > 0) {
                    paths.push((0, import_node_path14.join)(homeDir, entry.pattern));
                }
                break;
            default:
                break;
        }
    }
    _absoluteAndHomePaths = paths;
    return paths;
}
async function resolveGitContext(workspaceDir) {
    const cached2 = _gitContextCache.get(workspaceDir);
    if (cached2) return cached2;
    const dotGitStat = await (0, import_promises4.stat)((0, import_node_path14.join)(workspaceDir, ".git")).catch(()=>null);
    const isWorktree = dotGitStat?.isFile() ?? false;
    if (!isWorktree) {
        const result2 = {
            isWorktree: false,
            gitDirParent: workspaceDir
        };
        _gitContextCache.set(workspaceDir, result2);
        return result2;
    }
    const gitDirParent = await resolveWorktreeGitDirParent(workspaceDir);
    const result = {
        isWorktree: true,
        gitDirParent: gitDirParent ?? workspaceDir
    };
    _gitContextCache.set(workspaceDir, result);
    return result;
}
function normalizeRootDir(rootDir) {
    if (!rootDir.endsWith(import_node_path14.sep)) {
        return rootDir;
    }
    const withoutTrailingSep = rootDir.slice(0, -1);
    if (withoutTrailingSep === "" || process.platform === "win32" && /^[a-zA-Z]:$/.test(withoutTrailingSep)) {
        return rootDir;
    }
    return withoutTrailingSep;
}
function rootDescendantPrefix(root) {
    return root.endsWith(import_node_path14.sep) ? root : root + import_node_path14.sep;
}
function isPathUnder(absolutePath, rootDir) {
    const root = normalizeRootDir(rootDir);
    if (_caseInsensitiveFs) {
        const lower = absolutePath.toLowerCase();
        const rootLower = root.toLowerCase();
        return lower === rootLower || lower.startsWith(rootDescendantPrefix(rootLower));
    }
    return absolutePath === root || absolutePath.startsWith(rootDescendantPrefix(root));
}
function relativeForwardSlash(rootDir, absolutePath) {
    const root = normalizeRootDir(rootDir);
    if (_caseInsensitiveFs) {
        return (0, import_node_path14.relative)(root.toLowerCase(), absolutePath.toLowerCase()).replace(/\\/g, "/");
    }
    return (0, import_node_path14.relative)(root, absolutePath).replace(/\\/g, "/");
}
export async function isHardcodedWriteProtected(absolutePath, workspaceDir) {
    if (isPathUnder(absolutePath, workspaceDir)) {
        const relPath = relativeForwardSlash(workspaceDir, absolutePath);
        if (getWorkspaceIgnore().ignores(relPath)) return true;
    }
    const { isWorktree, gitDirParent } = await resolveGitContext(workspaceDir);
    if (isPathUnder(absolutePath, gitDirParent)) {
        const gitRelPath = relativeForwardSlash(gitDirParent, absolutePath);
        if (getGitIgnore().ignores(gitRelPath)) return true;
    }
    if (isWorktree && isPathUnder(absolutePath, workspaceDir)) {
        const relPath = relativeForwardSlash(workspaceDir, absolutePath);
        if (relPath === ".git") return true;
    }
    for (const protectedPath of getAbsoluteAndHomePaths()){
        if (isPathUnder(absolutePath, protectedPath)) return true;
    }
    return false;
}
function registerSandboxMetadata(child, metadata) {
    sandboxMetadataMap.set(child, metadata);
}
async function captureSandboxDenies(child) {
    const metadata = sandboxMetadataMap.get(child);
    if (!metadata) {
        console.log("No sandbox metadata found on child process");
        return [];
    }
    return captureSandboxDeniesInternal(metadata.pid, metadata.startTime, metadata.unrelatedPids);
}
function determineRelationship(eventPid, rootPid, unrelatedPids) {
    if (eventPid === rootPid) {
        return "related";
    }
    if (unrelatedPids?.has(eventPid)) {
        return "probably_unrelated";
    }
    return "maybe_related";
}
function captureSandboxDeniesInternal(pid, startTime, unrelatedPids) {
    return new Promise((resolve36)=>{
        try {
            const now2 = new Date();
            const secondsAgo = Math.ceil((now2.getTime() - startTime.getTime()) / 1e3);
            const logArgs = [
                "show",
                "--style",
                "ndjson",
                "--predicate",
                `process=="kernel" AND eventMessage CONTAINS "Sandbox:" AND eventMessage contains "deny"`,
                "--last",
                secondsAgo.toString()
            ];
            spawnWorkload(execFileUtf8, "/usr/bin/log", logArgs, (error3, stdout)=>{
                if (error3) {
                    resolve36([
                        {
                            raw: error3.message
                        }
                    ]);
                    return;
                }
                const lines2 = stdout.split(/\r?\n/).filter((l)=>l.trim().length > 0);
                const out = [];
                for (const line of lines2){
                    try {
                        const obj = JSON.parse(line);
                        const msg = obj?.eventMessage ?? "";
                        if (!msg || typeof msg !== "string") continue;
                        const deny = /^Sandbox:\s+([^(]+)\((\d+)\)\s+([a-zA-Z-]+)\((\d+)\)\s+([^\s]+)\s+(.+)$/.exec(msg);
                        if (deny) {
                            const [, processName, pidStr, decision, decisionCodeStr, operation, targetRest] = deny;
                            const eventPid = Number(pidStr);
                            out.push({
                                timestamp: obj.timestamp,
                                processName: processName.trim(),
                                pid: eventPid,
                                decision: decision.toLowerCase(),
                                decisionCode: Number(decisionCodeStr),
                                operation,
                                target: targetRest,
                                duplicateCount: 1,
                                raw: msg,
                                relationship: determineRelationship(eventPid, pid, unrelatedPids)
                            });
                            continue;
                        }
                        const dup = /^(\d+) duplicate report for Sandbox: (.+)$/.exec(msg);
                        if (dup) {
                            const count2 = Number(dup[1]);
                            const inner = dup[2];
                            const dm = /^([^(]+)\((\d+)\)\s+([a-zA-Z-]+)\((\d+)\)\s+([^\s]+)\s+(.+)$/.exec(inner);
                            if (dm) {
                                const [, processName, pidStr, decision, decisionCodeStr, operation, targetRest] = dm;
                                const eventPid = Number(pidStr);
                                out.push({
                                    timestamp: obj.timestamp,
                                    processName: processName.trim(),
                                    pid: eventPid,
                                    decision: decision.toLowerCase(),
                                    decisionCode: Number(decisionCodeStr),
                                    operation,
                                    target: targetRest,
                                    duplicateCount: count2,
                                    raw: msg,
                                    relationship: determineRelationship(eventPid, pid, unrelatedPids)
                                });
                            } else {
                                out.push({
                                    timestamp: obj.timestamp,
                                    duplicateCount: count2,
                                    raw: msg
                                });
                            }
                            continue;
                        }
                        out.push({
                            timestamp: obj.timestamp,
                            raw: msg
                        });
                    } catch  {}
                }
                resolve36(out);
            });
        } catch (error3) {
            resolve36([
                {
                    raw: String(error3)
                }
            ]);
        }
    });
}
function getEffectiveNetworkPolicy(policy) {
    if (policy !== void 0) {
        return policy;
    }
    return {
        version: 1,
        default: "deny"
    };
}
export function isNetworkEnabledByPolicy(policy) {
    if (policy === void 0) {
        return false;
    }
    if (policy.default === "allow") {
        return true;
    }
    if (policy.allow !== void 0 && policy.allow.length > 0) {
        return true;
    }
    return false;
}
export function isAllowAllNetworkByPolicy(policy) {
    if (policy === void 0) {
        return false;
    }
    return policy.default === "allow";
}
export function networkDisabledPolicy() {
    return {
        version: 1,
        default: "deny"
    };
}
export function networkAllowAllPolicy() {
    return {
        version: 1,
        default: "allow"
    };
}
function getSandboxPolicyDirectory() {
    const override = process.env[SANDBOX_POLICY_DIR_ENV]?.trim();
    if (override) {
        return path11.resolve(override);
    }
    return path11.resolve(path11.join(os3.homedir(), ".cursor", SANDBOX_POLICY_DIR_NAME));
}
function pruneStaleSandboxPolicyFiles(dir) {
    let entries;
    try {
        entries = fs6.readdirSync(dir);
    } catch  {
        return;
    }
    const now2 = Date.now();
    for (const name17 of entries){
        if (!name17.startsWith("sandbox-policy-")) {
            continue;
        }
        const fullPath = path11.join(dir, name17);
        try {
            const st2 = fs6.statSync(fullPath);
            if (!st2.isFile()) {
                continue;
            }
            if (now2 - st2.mtimeMs > STALE_POLICY_MAX_AGE_MS) {
                fs6.unlinkSync(fullPath);
            }
        } catch  {}
    }
}
function ensureSandboxPolicyDirectory() {
    const dir = getSandboxPolicyDirectory();
    fs6.mkdirSync(dir, {
        recursive: true,
        mode: 448
    });
    try {
        fs6.chmodSync(dir, 448);
    } catch  {}
    const now2 = Date.now();
    if (now2 - lastPruneAtMs >= PRUNE_INTERVAL_MS) {
        lastPruneAtMs = now2;
        pruneStaleSandboxPolicyFiles(dir);
    }
    return dir;
}
function writeSandboxPolicyFile(policyJson) {
    const dir = ensureSandboxPolicyDirectory();
    const suffix = crypto3.randomBytes(8).toString("hex");
    const filePath = path11.join(dir, `sandbox-policy-${suffix}`);
    fs6.writeFileSync(filePath, policyJson, {
        encoding: "utf-8",
        mode: 384
    });
    return filePath;
}
function withPolicyDirectoryReadonly(additionalReadonlyPaths) {
    const dir = ensureSandboxPolicyDirectory();
    if (!additionalReadonlyPaths || additionalReadonlyPaths.length === 0) {
        return [
            dir
        ];
    }
    if (additionalReadonlyPaths.includes(dir)) {
        return additionalReadonlyPaths;
    }
    return [
        ...additionalReadonlyPaths,
        dir
    ];
}
function isWorkspaceReadControlEnabled() {
    const configured = configuredWorkspaceReadEnabled;
    return typeof configured === "function" ? configured() : configured;
}
function configureSandboxPrereqs(options2) {
    getRipgrepBinaryPath();
    const { sandboxBinaryPath, workspaceReadEnabled } = options2;
    if (!configuredSandboxBinaryPath) {
        configuredSandboxBinaryPath = sandboxBinaryPath;
    }
    if (workspaceReadEnabled !== void 0) {
        configuredWorkspaceReadEnabled = workspaceReadEnabled;
    }
}
function getSandboxBinary() {
    return configuredSandboxBinaryPath;
}
function applyConfiguredRipgrepToSandboxEnv(env) {
    if (process.platform !== "linux") {
        return;
    }
    Object.assign(env, withConfiguredRipgrepEnv(env));
}
function resolveNetworkPolicyForFile(sandboxPolicy) {
    if (sandboxPolicy.type === "insecure_none") {
        return void 0;
    }
    const policy = sandboxPolicy.networkPolicy;
    if (policy === void 0) {
        return void 0;
    }
    if (!isNetworkEnabledByPolicy(policy)) {
        return void 0;
    }
    const hasDenyList = policy.deny !== void 0 && policy.deny.length > 0;
    if (policy.default === "allow" && !hasDenyList) {
        return void 0;
    }
    return {
        version: 1,
        ...policy
    };
}
function resolveHardcodedAllowedReadPaths(platform = process.platform) {
    const resolved = [];
    const seen = new Set();
    const bundledPaths = {};
    try {
        bundledPaths.ripgrep = getRipgrepBinaryPath();
    } catch  {}
    for (const entry of getHardcodedAllowedReadPaths(platform, os4.homedir(), bundledPaths)){
        if (seen.has(entry)) {
            continue;
        }
        seen.add(entry);
        resolved.push(entry);
    }
    return resolved;
}
function withSandboxPolicyDirectoryReadonly(sandboxPolicy) {
    return {
        ...sandboxPolicy,
        additionalReadonlyPaths: withPolicyDirectoryReadonly(sandboxPolicy.additionalReadonlyPaths)
    };
}
function normalizeAdditionalReadPathRoots(paths) {
    const roots = [];
    const seen = new Set();
    for (const raw of paths){
        let entry = raw.trim();
        if (!entry) {
            continue;
        }
        if (entry === "~") {
            entry = os4.homedir();
        } else if (entry.startsWith("~/") || entry.startsWith("~\\")) {
            entry = path12.join(os4.homedir(), entry.slice(2));
        }
        entry = entry.replace(/\/\*\*$/, "").replace(/\/\*$/, "");
        entry = entry.replace(/\\\*\*$/, "").replace(/\\\*$/, "");
        const base = path12.basename(entry);
        if (base.includes("*") || base.includes("?")) {
            entry = path12.dirname(entry);
        }
        if (!entry || entry === ".") {
            continue;
        }
        const normalized = path12.normalize(entry);
        if (seen.has(normalized)) {
            continue;
        }
        seen.add(normalized);
        roots.push(normalized);
    }
    return roots;
}
function buildNativeSandboxPolicy(sandboxPolicy, cwd, options2) {
    let ignoreMapping;
    if (sandboxPolicy.ignoreMapping) {
        ignoreMapping = buildIgnoreMapping(sandboxPolicy.ignoreMapping, cwd, [], []);
    }
    const additionalReadonlyPaths = buildReadOnlyJson(sandboxPolicy.additionalReadonlyPaths, sandboxPolicy.writeProtectionMapping, cwd);
    const readBoundary = getEffectiveSandboxReadBoundary(sandboxPolicy.readBoundary, options2?.workspaceReadEnabled ?? isWorkspaceReadControlEnabled());
    const trustedReadPaths = resolveHardcodedAllowedReadPaths();
    const allowlistRoots = readBoundary === "workspace" ? normalizeAdditionalReadPathRoots(sandboxPolicy.additionalReadPaths ?? []) : [];
    const hardcodedReadPaths = [
        ...trustedReadPaths
    ];
    const seen = new Set(trustedReadPaths);
    for (const root of allowlistRoots){
        if (seen.has(root)) {
            continue;
        }
        seen.add(root);
        hardcodedReadPaths.push(root);
    }
    const common2 = {
        cwd,
        readBoundary,
        hardcodedReadPaths,
        additionalReadonlyPaths,
        networkAccess: isNetworkEnabledByPolicy(sandboxPolicy.networkPolicy),
        ignoreMapping
    };
    if (sandboxPolicy.type === "workspace_readonly") {
        return {
            type: sandboxPolicy.type,
            ...common2
        };
    }
    return {
        type: sandboxPolicy.type,
        ...common2,
        additionalReadwritePaths: sandboxPolicy.additionalReadwritePaths || [],
        disableTmpWrite: sandboxPolicy.disableTmpWrite || false
    };
}
function resolveWorkspaceScratch(sandbox) {
    if (sandbox.readBoundary !== "workspace" || sandbox.type === "workspace_readwrite" && sandbox.disableTmpWrite || process.platform === "win32") {
        return void 0;
    }
    return ensureSandboxProjectDir(sandbox.cwd);
}
function getWorkspaceScratchEnv(projectDir, env, enableSharedBuildCache) {
    const scratchEnv = getSandboxProjectTempEnv(projectDir);
    if (enableSharedBuildCache) {
        const sessionCacheEnv = getSandboxCacheEnv();
        for (const [name17, value] of Object.entries(getSandboxCacheEnv(projectDir))){
            if (env[name17] === sessionCacheEnv[name17]) {
                scratchEnv[name17] = value;
            }
        }
    }
    return scratchEnv;
}
function checkBinaryAvailable(ctx) {
    if (binaryAvailable !== null) {
        return !!binaryAvailable;
    }
    try {
        const bin = getSandboxBinary();
        logger16.info(ctx, `[checkBinaryAvailable] Resolved binary path: ${bin}`);
        if (!bin) {
            binaryCheckError = new Error("Sandbox binary path was not configured");
            binaryAvailable = false;
            logger16.info(ctx, "[checkBinaryAvailable] Binary path not set, returning false");
            return false;
        }
        binaryAvailable = fs7.existsSync(bin);
        if (!binaryAvailable) {
            binaryCheckError = new Error(`Sandbox binary not found at ${bin}`);
            logger16.info(ctx, `[checkBinaryAvailable] Binary not found at: ${bin}`);
        } else {
            logger16.info(ctx, `[checkBinaryAvailable] Binary path exists: ${binaryAvailable}`);
        }
        return !!binaryAvailable;
    } catch (e) {
        binaryCheckError = e;
        binaryAvailable = false;
        logger16.info(ctx, `[checkBinaryAvailable] Exception checking binary: ${e}`);
        return false;
    }
}
function isSandboxHelperSupported(ctx) {
    if (cachedSandboxHelperSupported !== null) {
        return cachedSandboxHelperSupported;
    }
    const effectiveCtx = ctx ?? createContext();
    logger16.info(effectiveCtx, "[isSandboxHelperSupported] Starting sandbox support check...");
    if (!checkBinaryAvailable(effectiveCtx)) {
        const reason = binaryCheckError?.message || "Binary check failed";
        lastSandboxFailureReason = reason;
        logger16.info(effectiveCtx, `[isSandboxHelperSupported] Binary not available, returning false. Reason: ${reason}`);
        cachedSandboxHelperSupported = false;
        return cachedSandboxHelperSupported;
    }
    if (process.platform === "win32") {
        lastSandboxFailureReason = "Windows sandbox helper only provides network proxy, not filesystem isolation";
        logger16.info(effectiveCtx, "[isSandboxHelperSupported] win32: returning false (proxy-only, no filesystem sandbox)");
        cachedSandboxHelperSupported = false;
        return cachedSandboxHelperSupported;
    }
    if (process.platform === "darwin") {
        lastSandboxFailureReason = null;
        logger16.info(effectiveCtx, `[isSandboxHelperSupported] ${process.platform} platform, binary available, sandbox supported!`);
        cachedSandboxHelperSupported = true;
        return cachedSandboxHelperSupported;
    }
    const { binaryPath, args, env } = buildPreflightInvocation(effectiveCtx, process.cwd());
    try {
        const preflightStart = Date.now();
        spawnWorkload(import_node_child_process6.execFileSync, binaryPath, args, {
            stdio: [
                "ignore",
                "ignore",
                "pipe"
            ],
            timeout: PREFLIGHT_PROBE_TIMEOUT_MS,
            env,
            shell: false
        });
        const preflightMs = Date.now() - preflightStart;
        lastSandboxFailureReason = null;
        logger16.info(effectiveCtx, `[isSandboxHelperSupported] Preflight succeeded in ${preflightMs}ms, sandbox supported!`);
        cachedSandboxHelperSupported = true;
        return cachedSandboxHelperSupported;
    } catch (e) {
        const error3 = e;
        return recordPreflightFailure(effectiveCtx, {
            message: error3.message,
            status: error3.status,
            stderrText: error3.stderr?.toString?.() || ""
        });
    }
}
function buildPreflightInvocation(ctx, cwd) {
    const unifiedPolicy = {
        sandbox: buildNativeSandboxPolicy(withSandboxPolicyDirectoryReadonly({
            type: "workspace_readwrite"
        }), cwd)
    };
    const binaryPath = String(getSandboxBinary());
    logger16.info(ctx, `[sandboxPreflight] Running preflight with binary: ${binaryPath}`);
    logger16.info(ctx, `[sandboxPreflight] CWD: ${cwd}`);
    const env = {
        ...process.env
    };
    applyConfiguredRipgrepToSandboxEnv(env);
    const policyFilePath = writeSandboxPolicyFile(JSON.stringify(unifiedPolicy));
    return {
        binaryPath,
        args: [
            "--policy",
            policyFilePath,
            "--preflight-only",
            "--",
            "/bin/true"
        ],
        env
    };
}
function recordPreflightFailure(ctx, failure2) {
    const { message, status, stderrText } = failure2;
    logger16.error(ctx, `[sandboxPreflight] Preflight failed: ${message}`);
    logger16.error(ctx, `[sandboxPreflight] Exit status: ${status}`);
    if (stderrText) {
        logger16.error(ctx, `[sandboxPreflight] Stderr: ${stderrText}`);
    }
    if (status === 2) {
        lastSandboxFailureReason = `Linux preflight failed with exit code 2 (unsupported kernel features). stderr: ${stderrText || "none"}`;
    } else {
        lastSandboxFailureReason = `Linux preflight failed: ${message || "unknown error"}. Exit status: ${status}. stderr: ${stderrText || "none"}`;
    }
    cachedSandboxHelperSupported = false;
    return false;
}
async function primeSandboxHelperSupport(opts) {
    if (cachedVerdictIsWorkspaceRooted && cachedSandboxHelperSupported !== null) {
        return cachedSandboxHelperSupported;
    }
    if (inFlightWorkspaceProbe !== null) {
        return inFlightWorkspaceProbe;
    }
    inFlightWorkspaceProbe = probeSandboxSupportFromWorkspace(opts).finally(()=>{
        inFlightWorkspaceProbe = null;
    });
    return inFlightWorkspaceProbe;
}
async function probeSandboxSupportFromWorkspace(opts) {
    const ctx = opts.ctx ?? createContext();
    if (!isLinux || !checkBinaryAvailable(ctx)) {
        const supported2 = isSandboxHelperSupported(ctx);
        cachedVerdictIsWorkspaceRooted = true;
        return supported2;
    }
    if (cachedSandboxHelperSupported !== null) {
        logger16.info(ctx, `[primeSandboxHelperSupport] Re-probing from ${opts.workspaceCwd}; the cached verdict (${cachedSandboxHelperSupported}) was measured from a different directory`);
    }
    const timeoutMs = opts.timeoutMs ?? PREFLIGHT_PROBE_TIMEOUT_MS;
    const { binaryPath, args, env } = buildPreflightInvocation(ctx, opts.workspaceCwd);
    const started = Date.now();
    const outcome = await runPreflightWithTimeout({
        binaryPath,
        args,
        env,
        timeoutMs
    });
    const elapsedMs2 = Date.now() - started;
    if (outcome.kind === "timeout") {
        lastSandboxFailureReason = `Linux preflight rooted at ${opts.workspaceCwd} did not finish within ${timeoutMs}ms (sandbox setup for this workspace is slower than the terminal tool will wait). stderr: ${outcome.stderrText || "none"}`;
        logger16.error(ctx, `[primeSandboxHelperSupport] Preflight timed out after ${timeoutMs}ms, treating sandbox as unsupported`);
        cachedSandboxHelperSupported = false;
        cachedVerdictIsWorkspaceRooted = true;
        return false;
    }
    if (outcome.kind === "failed") {
        const supported2 = recordPreflightFailure(ctx, {
            message: outcome.message,
            status: outcome.status,
            stderrText: outcome.stderrText
        });
        cachedVerdictIsWorkspaceRooted = true;
        return supported2;
    }
    lastSandboxFailureReason = null;
    logger16.info(ctx, `[primeSandboxHelperSupport] Preflight rooted at ${opts.workspaceCwd} succeeded in ${elapsedMs2}ms, sandbox supported!`);
    cachedSandboxHelperSupported = true;
    cachedVerdictIsWorkspaceRooted = true;
    return true;
}
function runPreflightWithTimeout(opts) {
    return new Promise((resolve36)=>{
        let child;
        try {
            child = spawnWorkload(import_node_child_process6.spawn, opts.binaryPath, opts.args, {
                stdio: [
                    "ignore",
                    "ignore",
                    "pipe"
                ],
                env: opts.env,
                shell: false,
                detached: true,
                windowsHide: true
            });
        } catch (e) {
            resolve36({
                kind: "failed",
                message: e instanceof Error ? e.message : String(e),
                stderrText: ""
            });
            return;
        }
        let stderrText = "";
        child.stderr?.on("data", (chunk)=>{
            stderrText += chunk.toString();
        });
        let settled = false;
        const timer2 = setTimeout(()=>{
            if (settled) {
                return;
            }
            settled = true;
            killProcessGroup(child);
            resolve36({
                kind: "timeout",
                stderrText
            });
        }, opts.timeoutMs);
        timer2.unref?.();
        const finish = (outcome)=>{
            if (settled) {
                return;
            }
            settled = true;
            clearTimeout(timer2);
            resolve36(outcome);
        };
        child.on("error", (e)=>{
            finish({
                kind: "failed",
                message: e.message,
                stderrText
            });
        });
        child.on("close", (code, signal)=>{
            if (code === 0) {
                finish({
                    kind: "ok"
                });
                return;
            }
            finish({
                kind: "failed",
                message: `preflight exited with code ${code}${signal ? ` (signal ${signal})` : ""}`,
                status: code,
                stderrText
            });
        });
    });
}
function killProcessGroup(child) {
    const pid = child.pid;
    if (pid === void 0) {
        return;
    }
    try {
        process.kill(-pid, "SIGKILL");
    } catch  {
        try {
            child.kill("SIGKILL");
        } catch  {}
    }
}
function spawnWithSandboxHelper(command, args = [], options2 = {}, sandboxPolicy) {
    const ctx = createContext();
    options2.env = filterElectronEnv(options2.env);
    if (!checkBinaryAvailable(ctx)) {
        throw new Error(`Sandbox binary not available: ${binaryCheckError?.message || `binary not configured`}. Please build the binary or use 'insecure_none' policy.`);
    }
    if (sandboxPolicy.type === "insecure_none") {
        return spawnWorkload(import_node_child_process6.spawn, command, args, {
            ...options2,
            windowsHide: true
        });
    }
    if (sandboxPolicy.type === "workspace_readwrite" || sandboxPolicy.type === "workspace_readonly") {
        return spawnWithSandboxHelperPolicy(command, args, options2, sandboxPolicy);
    }
    throw new Error(`Unsupported sandbox policy: ${String(sandboxPolicy)}`);
}
function spawnWithSandboxHelperPolicy(command, args, options2, sandboxPolicy) {
    if (sandboxPolicy.type !== "workspace_readwrite" && sandboxPolicy.type !== "workspace_readonly") {
        throw new Error("Expected workspace_readwrite or workspace_readonly policy");
    }
    const executionCwd = String(options2.cwd ?? process.cwd());
    const cwd = sandboxPolicy.sandboxWorkspaceRoot ?? executionCwd;
    let actualCommand = command;
    let actualArgs = args;
    if (options2.shell) {
        if (process.platform === "win32") {
            const shellPath = typeof options2.shell === "string" ? options2.shell : "cmd.exe";
            actualCommand = shellPath;
            actualArgs = [
                "/c",
                `${command} ${args.join(" ")}`
            ];
        } else {
            const shellPath = typeof options2.shell === "string" ? options2.shell : "/bin/sh";
            actualCommand = shellPath;
            actualArgs = [
                "-c",
                `${command} ${args.join(" ")}`
            ];
        }
    }
    const sandbox = buildNativeSandboxPolicy(withSandboxPolicyDirectoryReadonly(sandboxPolicy), cwd);
    const projectDir = resolveWorkspaceScratch(sandbox);
    if (projectDir) {
        sandbox.additionalReadwritePaths = [
            ...sandbox.additionalReadwritePaths ?? [],
            projectDir
        ];
    }
    const resolvedNetworkPolicy = resolveNetworkPolicyForFile(sandboxPolicy);
    const unifiedPolicy = {
        sandbox
    };
    if (resolvedNetworkPolicy !== void 0) {
        unifiedPolicy.networkPolicy = resolvedNetworkPolicy;
    }
    if (sandboxPolicy.networkPolicyStrict === false) {
        unifiedPolicy.networkPolicyStrict = false;
    }
    const policyFilePath = writeSandboxPolicyFile(JSON.stringify(unifiedPolicy));
    const sandboxArgs = [
        "--policy",
        policyFilePath,
        "--",
        actualCommand,
        ...actualArgs
    ];
    const baseEnv = process.platform === "linux" ? scrubSocketEnvVars(process.env) : process.env;
    const optionsEnv = process.platform === "linux" && options2.env ? scrubSocketEnvVars(options2.env) : options2.env;
    const mergedEnv = {
        ...baseEnv,
        ...optionsEnv,
        CURSOR_SANDBOX: "native"
    };
    applyConfiguredRipgrepToSandboxEnv(mergedEnv);
    if (projectDir) {
        const tempEnv = getWorkspaceScratchEnv(projectDir, mergedEnv, sandboxPolicy.enableSharedBuildCache);
        Object.assign(mergedEnv, tempEnv);
        mergedEnv.__CURSOR_SANDBOX_OWNED_ENV = Object.keys(tempEnv).join(" ");
        mergedEnv.__CURSOR_SANDBOX_TEMP_RESTORE = Object.entries(tempEnv).map(([name17, value])=>`builtin export ${name17}='${value.replace(/'/g, "'\\''")}'`).join("; ");
    }
    const spawnOptions = {
        cwd: options2.cwd || executionCwd,
        env: mergedEnv,
        stdio: options2.stdio || [
            "pipe",
            "pipe",
            "pipe"
        ],
        detached: options2.detached,
        windowsHide: true
    };
    try {
        const startTime = new Date();
        const child = spawnWorkload(import_node_child_process6.spawn, String(getSandboxBinary()), sandboxArgs, spawnOptions);
        if (isMacOS && child.pid) {
            registerSandboxMetadata(child, {
                startTime,
                pid: child.pid
            });
        }
        return child;
    } catch (e) {
        throw new Error(`Failed to spawn sandboxed process: ${e}`);
    }
}
function isGitBackedSync(dir, exists = (p2)=>fs7.existsSync(p2)) {
    if (isAgentStoreFusePath(dir)) {
        return true;
    }
    let current = path12.resolve(dir);
    for(;;){
        try {
            const dotGit = path12.join(current, ".git");
            if (exists(dotGit)) {
                return true;
            }
        } catch  {}
        const parent = path12.dirname(current);
        if (parent === current) {
            return false;
        }
        current = parent;
    }
}
function buildReadOnlyJson(additionalReadonlyPaths, writeProtectionMapping, cwd) {
    const fromPaths = additionalReadonlyPaths && additionalReadonlyPaths.length > 0 ? convertPathsToIgnoreMapping(...additionalReadonlyPaths) : {};
    const cwdIsGitBacked = isGitBackedSync(cwd);
    const fromWorkspace = !isLinux || cwdIsGitBacked ? writeProtectionMapping ?? {} : {};
    const merged = {
        ...fromPaths
    };
    for (const [dir, patterns] of Object.entries(fromWorkspace)){
        if (merged[dir]) {
            merged[dir] = [
                ...merged[dir],
                ...patterns
            ];
        } else {
            merged[dir] = patterns;
        }
    }
    if (Object.keys(merged).length === 0) {
        return void 0;
    }
    return normalizeIgnoreMapping(merged, cwd, [], []);
}
function buildIgnoreMapping(ignoreMapping, _cwd, _additionalReadwrite, _additionalReadonly) {
    return normalizeIgnoreMapping(ignoreMapping, _cwd, _additionalReadwrite, _additionalReadonly);
}
function normalizeIgnoreMapping(ignoreMapping, _cwd, _additionalReadwrite, _additionalReadonly) {
    const result = {};
    for (const [path64, patterns] of Object.entries(ignoreMapping)){
        const fsPath = path64.startsWith("file://") ? uriToFsPath(path64) : path64;
        result[fsPath] = patterns;
        const canonicalPath = tryRealpath(fsPath);
        if (canonicalPath !== fsPath) {
            result[canonicalPath] = patterns;
        }
    }
    return result;
}
function uriToFsPath(uri) {
    let path64 = uri.replace(/^file:\/\//, "");
    path64 = decodeURIComponent(path64);
    if (path64.length > 1 && path64.endsWith("/")) {
        path64 = path64.slice(0, -1);
    }
    return path64;
}
function tryRealpath(p2, realpath11) {
    if (isAgentStoreFusePath(p2)) {
        return p2;
    }
    try {
        return (realpath11 ?? import_node_fs14.realpathSync)(p2);
    } catch  {
        return p2;
    }
}
export function getLastSandboxFailureReason() {
    return lastSandboxFailureReason;
}
var configuredSandboxBinaryPath;
export function configureSandboxPrereqs2(options2) {
    configureSandboxPrereqs(options2);
}
export function spawnInSandbox(command, args = [], options2 = {}, sandboxPolicy) {
    options2.env = filterElectronEnv(options2.env);
    if (sandboxPolicy.enableSharedBuildCache) {
        options2 = {
            ...options2,
            env: {
                ...filterElectronEnv(process.env),
                ...getSandboxCacheEnv(),
                ...options2.env
            }
        };
    }
    if (sandboxPolicy.type !== "insecure_none") {
        if (isSandboxHelperSupported()) {
            return spawnWithSandboxHelper(command, args, options2, sandboxPolicy);
        }
        const failureReason = getLastSandboxFailureReason();
        throw new SandboxUnsupportedError(`Sandbox policy '${sandboxPolicy.type}' is not supported on this system. Ensure the sandbox helper binary is available, or use 'insecure_none'. Reason: ${failureReason || "unknown"}`, failureReason ?? void 0);
    }
    return spawnUnsafe(command, args, options2);
}
function spawnUnsafe(command, args, options2) {
    return spawnWorkload(import_node_child_process7.spawn, command, args, {
        ...options2,
        windowsHide: true
    });
}
export function captureSandboxDenies2(child) {
    if (isMacOS2) {
        return captureSandboxDenies(child);
    } else {
        return Promise.resolve([]);
    }
}
export function isSandboxSupported(_policy, _options) {
    if (isMacOS2) {
        try {
            (0, import_node_fs15.accessSync)("/usr/bin/sandbox-exec", import_node_fs15.constants.X_OK);
        } catch  {
            return false;
        }
    }
    return isSandboxHelperSupported(_options?.ctx);
}
export async function primeSandboxSupport(options2) {
    if (isMacOS2) {
        try {
            (0, import_node_fs15.accessSync)("/usr/bin/sandbox-exec", import_node_fs15.constants.X_OK);
        } catch  {
            return false;
        }
    }
    return primeSandboxHelperSupport(options2);
}
function resolveProcessTreeKillMode(options2) {
    if (options2.platform === "win32") {
        return "windows_tree";
    }
    return options2.detached ? "process_group" : "single_process";
}
function killProcessTree(child, mode, signal) {
    const pid = child.pid;
    if (pid === void 0) {
        return;
    }
    const killChildOnly = ()=>{
        try {
            child.kill(signal);
        } catch  {}
    };
    switch(mode){
        case "process_group":
            try {
                process.kill(-pid, signal);
            } catch  {
                killChildOnly();
            }
            return;
        case "windows_tree":
            try {
                (0, import_node_child_process8.spawn)("taskkill", [
                    "/pid",
                    String(pid),
                    "/t",
                    "/f"
                ], {
                    stdio: "ignore",
                    windowsHide: true
                }).on("error", killChildOnly);
            } catch  {
                killChildOnly();
            }
            return;
        case "single_process":
            killChildOnly();
            return;
        default:
            {
                const _exhaustive = mode;
                throw new Error(`Unknown process tree kill mode: ${String(mode)}`);
            }
    }
}
export function spawnWithSignal(command, args = [], options2 = {}, sandboxPolicy, signal) {
    const child = spawnInSandbox(command, args, {
        ...options2,
        env: withConfiguredRipgrepEnv(options2.env ?? process.env)
    }, sandboxPolicy);
    if (signal) {
        const killMode = resolveProcessTreeKillMode({
            platform: process.platform,
            detached: options2.detached === true
        });
        const abortHandler = ()=>{
            if (!child.pid) {
                return;
            }
            killProcessTree(child, killMode, "SIGTERM");
            const forceKillTimeout = setTimeout(()=>{
                if (!child.killed && child.pid) {
                    killProcessTree(child, killMode, "SIGKILL");
                }
            }, 1e3);
            child.once("exit", ()=>{
                clearTimeout(forceKillTimeout);
            });
        };
        if (signal.aborted) {
            abortHandler();
        } else {
            signal.addEventListener("abort", abortHandler, {
                once: true
            });
            child.once("exit", ()=>{
                signal.removeEventListener("abort", abortHandler);
            });
        }
    }
    return child;
}
export function killDetachedProcessGroup(pid, signal, forceKillAfterMs) {
    if (!pid) {
        return;
    }
    try {
        process.kill(-pid, signal);
    } catch  {
        return;
    }
    if (signal === "SIGTERM" && forceKillAfterMs !== void 0 && forceKillAfterMs > 0) {
        setTimeout(()=>{
            try {
                process.kill(-pid, "SIGKILL");
            } catch  {}
        }, forceKillAfterMs);
    }
}
function ignoreStreamErrors(stream3) {
    stream3?.on("error", ()=>{});
}
export function canPipeCommand() {
    return process.platform !== "win32";
}
export function writePipedCommand(child, command) {
    const fd = child.stdio.at(5);
    if (!(fd instanceof import_node_stream2.default.Writable)) {
        return;
    }
    ignoreStreamErrors(fd);
    fd.end(`${command}\0`);
}
export function writeShellStatePipe(inFd, state) {
    if (!inFd) {
        return;
    }
    ignoreStreamErrors(inFd);
    inFd.write(state);
    inFd.end();
}
export function attachShellStateOutput(outFd, onChunk) {
    if (!outFd) {
        return;
    }
    ignoreStreamErrors(outFd);
    outFd.on("data", (data)=>{
        onChunk(data.toString());
    });
}
export function splitPwdAndState(state) {
    const firstLineIndex = state.indexOf("\n");
    const cwd = state.substring(0, firstLineIndex);
    const rest = state.substring(firstLineIndex);
    return {
        cwd,
        rest
    };
}
function parseShellStateOutput(fullOutput, marker17) {
    const markerWithNewline = `${marker17}
`;
    const markerIndex = fullOutput.indexOf(markerWithNewline);
    return markerIndex >= 0 ? fullOutput.slice(markerIndex + markerWithNewline.length) : fullOutput;
}
export function coalesceAdjacentShellOutputEvents(events) {
    if (events.length === 0) {
        return [];
    }
    const coalesced = [];
    let currentType = events[0].type;
    let dataChunks = [
        events[0].data
    ];
    for(let index = 1; index < events.length; index++){
        const next = events[index];
        if (next.type === currentType) {
            dataChunks.push(next.data);
            continue;
        }
        coalesced.push({
            type: currentType,
            data: Buffer.concat(dataChunks)
        });
        currentType = next.type;
        dataChunks = [
            next.data
        ];
    }
    coalesced.push({
        type: currentType,
        data: Buffer.concat(dataChunks)
    });
    return coalesced;
}
function toError(error3) {
    return error3 instanceof Error ? error3 : new Error(String(error3));
}
export function attachShellOutputStreams(options2) {
    const hold = new SpawnCwdHopStdoutHold();
    if (!options2.bufferOutputEvents) {
        const writeOutputEvent = (type2, data)=>{
            void options2.writable.write({
                type: type2,
                data
            }).catch(()=>{});
        };
        options2.stdout?.on("data", (data)=>{
            const released = hold.note(data);
            if (released !== void 0 && released.length > 0) {
                writeOutputEvent("stdout", released);
            }
        });
        options2.stderr?.on("data", (data)=>{
            writeOutputEvent("stderr", data);
        });
        return {
            get stdoutBytes () {
                return hold.bytes;
            },
            get stdoutPrefix () {
                return hold.stdoutPrefix;
            },
            async waitForOutput () {},
            async releaseHeldStdout () {
                const released = hold.takeHeld();
                if (released !== void 0 && released.length > 0) {
                    writeOutputEvent("stdout", released);
                }
            },
            dropHeldStdout () {
                hold.takeHeld();
            },
            async flush () {
                await this.releaseHeldStdout();
            }
        };
    }
    const limiter = new ShellOutputLimiter(options2.writable, options2.outputLimiterOptions);
    let outputPumpError;
    const outputPumpPromise = Promise.all([
        pumpHeldStdout(options2.stdout, limiter, hold),
        pumpShellOutputStream(options2.stderr, "stderr", limiter)
    ]).then(()=>void 0).catch((error3)=>{
        outputPumpError = error3;
    });
    return {
        get stdoutBytes () {
            return hold.bytes;
        },
        get stdoutPrefix () {
            return hold.stdoutPrefix;
        },
        async waitForOutput () {
            await outputPumpPromise;
            if (outputPumpError !== void 0) {
                throw toError(outputPumpError);
            }
        },
        async releaseHeldStdout () {
            const released = hold.takeHeld();
            if (released !== void 0 && released.length > 0) {
                await limiter.push("stdout", released);
            }
        },
        dropHeldStdout () {
            hold.takeHeld();
        },
        async flush () {
            await this.releaseHeldStdout();
            await limiter.flush();
        }
    };
}
async function pumpHeldStdout(stream3, limiter, hold) {
    if (!stream3) return;
    for await (const chunk of stream3){
        const released = hold.note(chunk);
        if (released !== void 0 && released.length > 0) {
            await limiter.push("stdout", released);
        }
    }
}
async function pumpShellOutputStream(stream3, type2, limiter, onChunk) {
    if (!stream3) return;
    for await (const chunk of stream3){
        onChunk?.(chunk);
        await limiter.push(type2, chunk);
    }
}
export function getSandboxPolicyType(policy) {
    return policy.teamAdmin?.type ?? policy.perRepo?.type ?? policy.perUser?.type ?? "insecure_none";
}
function mergeRestrictiveBoolean(...values) {
    return values.some((v2)=>v2 === true);
}
export function mergePathsIntersection(...sources) {
    const definedSources = sources.filter((s3)=>s3 !== void 0);
    if (definedSources.length === 0) {
        return [];
    }
    if (definedSources.some((s3)=>s3.length === 0)) {
        return [];
    }
    if (definedSources.length === 1) {
        return deduplicatePaths(definedSources[0]).map(normalizePath);
    }
    let result = new Set(definedSources[0].map(normalizePath));
    for(let i = 1; i < definedSources.length; i++){
        const sourceSet = new Set(definedSources[i].map(normalizePath));
        result = new Set([
            ...result
        ].filter((path64)=>sourceSet.has(path64)));
    }
    return [
        ...result
    ];
}
export function mergePathsUnion(...sources) {
    const allPaths = new Set();
    for (const source of sources){
        if (source) {
            for (const path64 of source){
                allPaths.add(normalizePath(path64));
            }
        }
    }
    return [
        ...allPaths
    ];
}
export function rankedPolicyField({ defaultValue, rank }) {
    return {
        defaultValue,
        merge: (...sources)=>{
            const definedSources = sources.filter((source)=>source !== void 0);
            if (definedSources.length === 0) {
                return defaultValue;
            }
            return definedSources.reduce((strictest, source)=>rank[source] < rank[strictest] ? source : strictest);
        }
    };
}
export function intersectingPathPolicyField() {
    return {
        defaultValue: [],
        merge: (...sources)=>mergePathsIntersection(...sources)
    };
}
export function mergeReadBoundary(...sources) {
    return readBoundaryPolicyField.merge(...sources);
}
export function mergeAdditionalReadPaths(...sources) {
    return additionalReadPathsPolicyField.merge(...sources);
}
function normalizePath(path64) {
    const normalized = path64.replace(/\\/g, "/").replace(/\/+$/, "");
    if (normalized === "") {
        return "/";
    }
    if (/^[a-zA-Z]:$/.test(normalized)) {
        return `${normalized}/`;
    }
    return normalized;
}
function deduplicatePaths(paths) {
    const seen = new Set();
    const result = [];
    for (const path64 of paths){
        const normalized = normalizePath(path64);
        if (!seen.has(normalized)) {
            seen.add(normalized);
            result.push(path64);
        }
    }
    return result;
}
export function mergeNetworkPolicies(...sources) {
    const definedSources = sources.filter((s3)=>s3 !== void 0);
    if (definedSources.length === 0) {
        return void 0;
    }
    let mergedDefault;
    for (const source of definedSources){
        if (source.default === "deny") {
            mergedDefault = "deny";
            break;
        } else if (source.default === "allow" && mergedDefault === void 0) {
            mergedDefault = "allow";
        }
    }
    const mergedDeny = new Set();
    for (const source of definedSources){
        if (source.deny) {
            for (const pattern of source.deny){
                mergedDeny.add(pattern);
            }
        }
    }
    const mergedAllowSet = new Set();
    for (const source of definedSources){
        if (source.allow) {
            for (const pattern of source.allow){
                mergedAllowSet.add(pattern);
            }
        }
    }
    const mergedAllow = mergedAllowSet.size > 0 ? [
        ...mergedAllowSet
    ] : void 0;
    let mergedLogging;
    for(let i = definedSources.length - 1; i >= 0; i--){
        if (definedSources[i].logging !== void 0) {
            mergedLogging = definedSources[i].logging;
            break;
        }
    }
    const merged = {
        version: 1
    };
    if (mergedDefault !== void 0) {
        merged.default = mergedDefault;
    }
    if (mergedAllow !== void 0) {
        merged.allow = mergedAllow;
    }
    if (mergedDeny.size > 0) {
        merged.deny = [
            ...mergedDeny
        ];
    }
    if (mergedLogging !== void 0) {
        merged.logging = mergedLogging;
    }
    if (merged.default === void 0 && (merged.allow === void 0 || merged.allow.length === 0) && (merged.deny === void 0 || merged.deny.length === 0) && merged.logging === void 0) {
        return void 0;
    }
    return merged;
}
function mergeIgnoreMappings(...sources) {
    const definedSources = sources.filter((s3)=>s3 !== void 0);
    if (definedSources.length === 0) {
        return void 0;
    }
    const merged = {};
    for (const source of definedSources){
        for (const [path64, patterns] of Object.entries(source)){
            const existing = merged[path64];
            if (existing) {
                const patternSet = new Set(existing);
                for (const pattern of patterns){
                    if (patternSet.has(pattern)) {
                        patternSet.delete(pattern);
                    }
                    patternSet.add(pattern);
                }
                merged[path64] = [
                    ...patternSet
                ];
            } else {
                merged[path64] = [
                    ...patterns
                ];
            }
        }
    }
    if (Object.keys(merged).length === 0) {
        return void 0;
    }
    return merged;
}
function takeHighestPriorityDefined(...sources) {
    for(let i = sources.length - 1; i >= 0; i--){
        if (sources[i] !== void 0) {
            return sources[i];
        }
    }
    return void 0;
}
export async function resolveSandboxPolicyForWorkspace(workspaceDir, sources, deps = {}) {
    if (!sources) return {
        policy: {
            type: "insecure_none"
        }
    };
    if (isAgentStoreFusePath(workspaceDir)) {
        return mergeSandboxPolicies(sources, {
            workspaceDir
        });
    }
    const statFn = deps.stat ?? import_promises5.stat;
    const spawnPromiseFn = deps.spawnPromise ?? spawnPromise;
    const dotGitStat = await statFn((0, import_node_path15.join)(workspaceDir, ".git")).then((s3)=>s3, ()=>null);
    const isWorktree = dotGitStat?.isFile() ?? false;
    const isGitRepo = dotGitStat !== null;
    if (getSandboxPolicyType(sources) === "workspace_readwrite") {
        let gitDirParent = workspaceDir;
        if (isWorktree) {
            const commonDir = await spawnPromiseFn("git", [
                "rev-parse",
                "--git-common-dir"
            ], {
                cwd: workspaceDir
            }).then((x)=>(0, import_node_path15.resolve)(workspaceDir, x.trim()), ()=>null);
            if (commonDir) {
                gitDirParent = (0, import_node_path15.dirname)(commonDir);
                const p2 = sources.perRepo;
                const ig = p2?.ignoreMapping;
                sources = {
                    ...sources,
                    perRepo: {
                        ...p2,
                        type: "workspace_readwrite",
                        additionalReadwritePaths: [
                            ...p2?.additionalReadwritePaths ?? [],
                            commonDir
                        ],
                        ignoreMapping: ig,
                        writeProtectionMapping: mergeIgnoreMappings(p2?.writeProtectionMapping, getWorktreeWriteProtectionMapping(workspaceDir))
                    }
                };
            }
        }
        if (isGitRepo) {
            return mergeSandboxPolicies(sources, {
                workspaceDir,
                gitDirParent
            });
        }
    }
    return mergeSandboxPolicies(sources, {
        workspaceDir
    });
}
function validateAndGetPolicyType(sources) {
    const { perUser, perRepo, teamAdmin } = sources;
    const definedPolicies = [
        perUser,
        perRepo,
        teamAdmin
    ].filter((p2)=>p2 !== void 0);
    if (definedPolicies.length === 0) {
        return void 0;
    }
    const firstType = definedPolicies[0].type;
    for (const policy of definedPolicies){
        if (policy.type !== firstType) {
            throw new Error(`Cannot merge policies of different types: found "${firstType}" and "${policy.type}". All policies must be of the same type (all workspace_readwrite, all workspace_readonly, or all insecure_none).`);
        }
    }
    return firstType;
}
function mergeSandboxPolicies(sources, options2) {
    const policyType = validateAndGetPolicyType(sources);
    if (policyType === void 0) {
        return mergeWorkspaceReadWritePolicies(sources, options2);
    }
    switch(policyType){
        case "workspace_readwrite":
            return mergeWorkspaceReadWritePolicies(sources, options2);
        case "workspace_readonly":
            return mergeWorkspaceReadOnlyPolicies(sources, options2);
        case "insecure_none":
            return mergeInsecureNonePolicies(sources, options2);
        default:
            {
                const _exhaustive = policyType;
                throw new Error(`Unknown policy type: ${policyType}`);
            }
    }
}
function mergeCommonWorkspaceFields(sources, options2) {
    const debug = options2?.debug;
    const { perUser, perRepo, teamAdmin } = sources;
    const workspaceDir = options2?.workspaceDir ?? process.cwd();
    const hardcoded = getHardcodedSandboxPolicy(workspaceDir);
    const fieldSources = {};
    const orderedSources = [
        perUser,
        perRepo,
        teamAdmin
    ];
    const sourceNames = [
        "perUser",
        "perRepo",
        "teamAdmin",
        "hardcoded"
    ];
    const recordSource = (field4, sourceIndex)=>{
        if (debug) {
            fieldSources[field4] = sourceNames[sourceIndex] ?? "unknown";
        }
    };
    const disableTmpWrite = mergeRestrictiveBoolean(perUser?.disableTmpWrite, perRepo?.disableTmpWrite, teamAdmin?.disableTmpWrite);
    for(let i = orderedSources.length - 1; i >= 0; i--){
        if (orderedSources[i]?.disableTmpWrite === true) {
            recordSource("disableTmpWrite", i);
            break;
        }
    }
    const networkPolicyStrict = mergeRestrictiveBoolean(perUser?.networkPolicyStrict, perRepo?.networkPolicyStrict, teamAdmin?.networkPolicyStrict, hardcoded.networkPolicyStrict);
    if (hardcoded.networkPolicyStrict) {
        recordSource("networkPolicyStrict", 3);
    }
    const readBoundary = takeHighestPriorityDefined(perUser?.readBoundary, perRepo?.readBoundary, teamAdmin?.readBoundary) ?? "system";
    const localReadPaths = takeHighestPriorityDefined(perUser?.additionalReadPaths, perRepo?.additionalReadPaths);
    const additionalReadPaths = teamAdmin?.allowUserOverrideReadPaths === false ? mergePathsUnion(teamAdmin.additionalReadPaths) : mergePathsUnion(localReadPaths, teamAdmin?.additionalReadPaths);
    const mergedReadPaths = readBoundary === "workspace" ? additionalReadPaths : void 0;
    const additionalReadonlyPaths = mergePathsUnion(perUser?.additionalReadonlyPaths, perRepo?.additionalReadonlyPaths, teamAdmin?.additionalReadonlyPaths, hardcoded.additionalReadonlyPaths);
    const mergedReadonlyPaths = additionalReadonlyPaths.length > 0 ? additionalReadonlyPaths : void 0;
    let mergedNetworkPolicy = mergeNetworkPolicies(perUser?.networkPolicy, perRepo?.networkPolicy, teamAdmin?.networkPolicy, hardcoded.networkPolicy);
    const teamAdminAllow = teamAdmin?.networkPolicy?.allow;
    if (teamAdminAllow !== void 0 && teamAdminAllow.length > 0 && mergedNetworkPolicy !== void 0) {
        mergedNetworkPolicy = {
            ...mergedNetworkPolicy,
            allow: [
                ...teamAdminAllow
            ]
        };
        if (debug) {
            fieldSources["networkPolicy.allow"] = "teamAdmin (replace)";
        }
    }
    const networkPolicy = getEffectiveNetworkPolicy(mergedNetworkPolicy);
    const debugOutputDir = takeHighestPriorityDefined(perUser?.debugOutputDir, perRepo?.debugOutputDir, teamAdmin?.debugOutputDir);
    const captureDenies = mergeRestrictiveBoolean(perUser?.captureDenies, perRepo?.captureDenies, teamAdmin?.captureDenies);
    const enableSharedBuildCache = takeHighestPriorityDefined(perUser?.enableSharedBuildCache, perRepo?.enableSharedBuildCache, teamAdmin?.enableSharedBuildCache);
    const ignoreMapping = mergeIgnoreMappings(perUser?.ignoreMapping, perRepo?.ignoreMapping, teamAdmin?.ignoreMapping, hardcoded.ignoreMapping);
    const gitDirParent = options2?.gitDirParent ?? workspaceDir;
    const gitWriteProtection = getGitWriteProtectionMapping(gitDirParent);
    const writeProtectionMapping = mergeIgnoreMappings(perUser?.writeProtectionMapping, perRepo?.writeProtectionMapping, teamAdmin?.writeProtectionMapping, hardcoded.writeProtectionMapping, gitWriteProtection);
    return {
        disableTmpWrite: disableTmpWrite || void 0,
        networkPolicyStrict,
        readBoundary,
        additionalReadPaths: mergedReadPaths,
        additionalReadonlyPaths: mergedReadonlyPaths,
        networkPolicy,
        debugOutputDir,
        captureDenies: captureDenies || void 0,
        enableSharedBuildCache,
        ignoreMapping,
        writeProtectionMapping,
        fieldSources
    };
}
function cleanPolicy(policy, type2) {
    const clean = Object.fromEntries(Object.entries(policy).filter(([_2, v2])=>v2 !== void 0));
    clean.type = type2;
    return clean;
}
function mergeWorkspaceReadWritePolicies(sources, options2) {
    const { perUser, perRepo, teamAdmin } = sources;
    const debug = options2?.debug;
    const common2 = mergeCommonWorkspaceFields(sources, options2);
    const orderedSources = [
        perUser,
        perRepo,
        teamAdmin
    ];
    const sourceNames = [
        "perUser",
        "perRepo",
        "teamAdmin",
        "hardcoded"
    ];
    const additionalReadwritePaths = mergePathsUnion(perUser?.additionalReadwritePaths, perRepo?.additionalReadwritePaths, teamAdmin?.additionalReadwritePaths);
    const policy = {
        type: "workspace_readwrite",
        disableTmpWrite: common2.disableTmpWrite,
        networkPolicyStrict: common2.networkPolicyStrict,
        readBoundary: common2.readBoundary,
        additionalReadPaths: common2.additionalReadPaths,
        additionalReadwritePaths: additionalReadwritePaths.length > 0 ? additionalReadwritePaths : void 0,
        additionalReadonlyPaths: common2.additionalReadonlyPaths,
        networkPolicy: common2.networkPolicy,
        debugOutputDir: common2.debugOutputDir,
        captureDenies: common2.captureDenies,
        enableSharedBuildCache: common2.enableSharedBuildCache,
        ignoreMapping: common2.ignoreMapping,
        writeProtectionMapping: common2.writeProtectionMapping
    };
    const result = {
        policy: cleanPolicy(policy, "workspace_readwrite")
    };
    if (debug) {
        result.debug = {
            fieldSources: common2.fieldSources
        };
    }
    return result;
}
function mergeWorkspaceReadOnlyPolicies(sources, options2) {
    const debug = options2?.debug;
    const common2 = mergeCommonWorkspaceFields(sources, options2);
    const policy = {
        type: "workspace_readonly",
        disableTmpWrite: common2.disableTmpWrite,
        networkPolicyStrict: common2.networkPolicyStrict,
        readBoundary: common2.readBoundary,
        additionalReadPaths: common2.additionalReadPaths,
        additionalReadonlyPaths: common2.additionalReadonlyPaths,
        networkPolicy: common2.networkPolicy,
        debugOutputDir: common2.debugOutputDir,
        captureDenies: common2.captureDenies,
        enableSharedBuildCache: common2.enableSharedBuildCache,
        ignoreMapping: common2.ignoreMapping,
        writeProtectionMapping: common2.writeProtectionMapping
    };
    const result = {
        policy: cleanPolicy(policy, "workspace_readonly")
    };
    if (debug) {
        result.debug = {
            fieldSources: common2.fieldSources
        };
    }
    return result;
}
function mergeInsecureNonePolicies(sources, options2) {
    const { perUser, perRepo, teamAdmin } = sources;
    const debug = options2?.debug;
    const fieldSources = {};
    const allowlistEscalated = mergeRestrictiveBoolean(perUser?.allowlistEscalated, perRepo?.allowlistEscalated, teamAdmin?.allowlistEscalated);
    const debugOutputDir = takeHighestPriorityDefined(perUser?.debugOutputDir, perRepo?.debugOutputDir, teamAdmin?.debugOutputDir);
    const captureDenies = mergeRestrictiveBoolean(perUser?.captureDenies, perRepo?.captureDenies, teamAdmin?.captureDenies);
    const enableSharedBuildCache = takeHighestPriorityDefined(perUser?.enableSharedBuildCache, perRepo?.enableSharedBuildCache, teamAdmin?.enableSharedBuildCache);
    const policy = {
        type: "insecure_none",
        allowlistEscalated: allowlistEscalated || void 0,
        debugOutputDir,
        captureDenies: captureDenies || void 0,
        enableSharedBuildCache
    };
    const cleanPolicy2 = Object.fromEntries(Object.entries(policy).filter(([_2, v2])=>v2 !== void 0));
    cleanPolicy2.type = "insecure_none";
    const result = {
        policy: cleanPolicy2
    };
    if (debug) {
        result.debug = {
            fieldSources
        };
    }
    return result;
}
export function shouldEnableSudoAskpass(env) {
    if (isWindows3) {
        return false;
    }
    return !!env?.SUDO_ASKPASS;
}
export function getSudoAliasInjection(env) {
    return shouldEnableSudoAskpass(env) ? `${SUDO_ALIAS}; ` : "";
}
export function transformSudoCommand(command) {
    const result = [];
    let i = 0;
    while(i < command.length){
        const isCommandStart = i === 0 || command.slice(Math.max(0, i - 2), i) === "&&" || command.slice(Math.max(0, i - 2), i) === "||" || command[i - 1] === "|" || command[i - 1] === ";";
        const lookbackStart = Math.max(0, i - 10);
        const lookback = command.slice(lookbackStart, i);
        const isAfterOperator = /(?:&&|\|\||[|;])\s*$/.test(lookback) || i === 0 && /^\s*$/.test(lookback);
        if ((isCommandStart || isAfterOperator) && command.slice(i, i + 4) === "sudo") {
            const afterSudo = i + 4;
            if (afterSudo >= command.length || /\s/.test(command[afterSudo])) {
                let j2 = afterSudo;
                while(j2 < command.length && /\s/.test(command[j2])){
                    j2++;
                }
                let hasAFlag = false;
                if (j2 < command.length && command[j2] === "-") {
                    let flagEnd = j2 + 1;
                    while(flagEnd < command.length && /[^\s]/.test(command[flagEnd])){
                        flagEnd++;
                    }
                    const flag = command.slice(j2, flagEnd);
                    hasAFlag = /^-[a-zA-Z]*A[a-zA-Z]*$/.test(flag);
                }
                if (hasAFlag) {
                    result.push("sudo");
                    i = afterSudo;
                } else {
                    result.push("sudo -A");
                    i = afterSudo;
                }
                continue;
            }
        }
        result.push(command[i]);
        i++;
    }
    return result.join("");
}
export function getBashPath(userTerminalHint) {
    if (process.platform === "win32") {
        const pathMustMatch = /git.*bash/i;
        if (userTerminalHint && pathMustMatch.test(userTerminalHint)) {
            return userTerminalHint;
        }
        const gitBashPath = findActualExecutable("bash", [], pathMustMatch).cmd;
        if (pathMustMatch.test(gitBashPath)) {
            return gitBashPath;
        } else {
            return null;
        }
    }
    const shell = process.env.SHELL;
    if (shell?.includes("bash")) {
        return shell;
    }
    const bashPath = findActualExecutable("bash", []).cmd;
    return bashPath;
}
export function windowsPathToGitBash(windowsPath) {
    if (process.platform !== "win32") {
        return windowsPath;
    }
    const normalized = import_node_path16.default.normalize(windowsPath);
    const driveLetter = normalized[0]?.toLowerCase();
    if (driveLetter && normalized[1] === ":" && normalized[2] === import_node_path16.default.sep) {
        const unixPath = `/${driveLetter}${normalized.slice(2).replace(/\\/g, "/")}`;
        return unixPath;
    }
    return normalized.replace(/\\/g, "/");
}
export async function initBashState(options2) {
    const env = {
        ...process.env,
        ...SHELL_ENV_OVERRIDES,
        ...options2?.env
    };
    const STATE_MARKER = "__CURSOR_STATE_MARKER__";
    const args = [
        "-O",
        "extglob",
        "-ilc",
        dump_bash_state_default + ` builtin printf '${STATE_MARKER}\\n'; dump_bash_state`
    ];
    const bashPath = getBashPath(options2?.userTerminalHint);
    if (!bashPath) {
        throw new Error("Can't find Bash");
    }
    const child = spawnWithSignal(bashPath, args, {
        env,
        detached: true,
        stdio: [
            "ignore",
            "pipe",
            "pipe"
        ]
    }, {
        type: "insecure_none"
    }, options2?.signal);
    let fullOutput = "";
    child.stdout?.on("data", (data)=>{
        fullOutput += data.toString();
    });
    child.on("error", (error3)=>{
        console.warn(`[shell-exec] bash state init spawn failed; falling back to empty state: ${error3 instanceof Error ? error3.message : String(error3)}`);
    });
    await new Promise((resolve36)=>{
        child.on("close", ()=>{
            resolve36(void 0);
        });
    });
    const snapshot = parseShellStateOutput(fullOutput, STATE_MARKER);
    const startMarkerLine = `${BASH_STATE_START_MARKER}
`;
    const endMarkerLine = `${BASH_STATE_END_MARKER}
`;
    let stateWithoutMarkers;
    if (snapshot.startsWith(startMarkerLine) && snapshot.endsWith(endMarkerLine)) {
        stateWithoutMarkers = snapshot.slice(startMarkerLine.length);
        stateWithoutMarkers = stateWithoutMarkers.slice(0, -(BASH_STATE_END_MARKER.length + 1));
    } else {
        stateWithoutMarkers = `${process.cwd()}
`;
    }
    const { cwd, rest } = splitPwdAndState(stateWithoutMarkers);
    const useFileStateTransport = process.platform === "win32";
    const initialCwd = process.platform === "win32" ? process.cwd() : cwd;
    return new BashState(initialCwd, rest, options2?.userTerminalHint, useFileStateTransport);
}
export function getPowerShellExecutable() {
    if (process.platform !== "win32") {
        const shell = process.env.SHELL;
        if (shell?.includes("pwsh") || shell?.includes("powershell")) {
            return shell;
        }
    }
    let pwsh = findActualExecutable("pwsh", []).cmd;
    if (pwsh !== "pwsh") {
        return pwsh;
    }
    pwsh = findActualExecutable("powershell", []).cmd;
    if (pwsh !== "powershell") {
        return pwsh;
    }
    if (process.platform === "win32") {
        pwsh = path14.join(process.env.SYSTEMROOT, "System32", "WindowsPowerShell", "v1.0", "powershell.exe");
        if ((0, import_node_fs16.existsSync)(pwsh)) {
            return pwsh;
        }
    }
    throw new Error("Neither 'pwsh' (PowerShell Core) nor 'powershell' (Windows PowerShell) found in PATH");
}
export async function writeFileWithBom(filePath, content) {
    await fs8.writeFile(filePath, UTF8_BOM + content, {
        encoding: "utf8"
    });
}
export async function initPowerShellState() {
    return new PowerShellState(process.cwd(), "");
}
export function createNaiveTerminalExecutor(options2) {
    const isWindows5 = process.platform === "win32";
    const shell = options2?.shell ?? (isWindows5 ? getPowerShellExecutable() : void 0);
    const cwd = process.cwd();
    return new NaiveTerminalExecutor(cwd, {
        ...options2,
        shell
    });
}
export function getZshPath() {
    const shell = process.env.SHELL;
    if (shell?.includes("zsh")) {
        return shell;
    }
    return findActualExecutable("zsh", []).cmd;
}
export async function initZshState(options2) {
    const env = {
        ...process.env,
        ...SHELL_ENV_OVERRIDES,
        ...options2?.env
    };
    const STATE_MARKER = "__CURSOR_STATE_MARKER__";
    const args = [
        "-o",
        "extendedglob",
        "-ilc",
        `${dump_zsh_state_default} builtin printf '${STATE_MARKER}\\n'; dump_zsh_state`
    ];
    const child = spawnWithSignal(getZshPath(), args, {
        env,
        stdio: [
            "ignore",
            "pipe",
            "pipe"
        ],
        detached: true
    }, {
        type: "insecure_none"
    }, options2?.signal);
    let fullOutput = "";
    child.stdout?.on("data", (data)=>{
        fullOutput += data.toString();
    });
    child.on("error", (error3)=>{
        console.warn(`[shell-exec] zsh state init spawn failed; falling back to empty state: ${error3 instanceof Error ? error3.message : String(error3)}`);
    });
    await new Promise((resolve36)=>{
        child.on("close", ()=>{
            resolve36(void 0);
        });
    });
    const snapshot = parseShellStateOutput(fullOutput, STATE_MARKER);
    const startMarkerLine = `${ZSH_STATE_START_MARKER}
`;
    const endMarkerLine = `${ZSH_STATE_END_MARKER}
`;
    let stateWithoutMarkers;
    if (snapshot.startsWith(startMarkerLine) && snapshot.endsWith(endMarkerLine)) {
        stateWithoutMarkers = snapshot.slice(startMarkerLine.length);
        stateWithoutMarkers = stateWithoutMarkers.slice(0, -(ZSH_STATE_END_MARKER.length + 1));
    } else {
        stateWithoutMarkers = `${process.cwd()}
`;
    }
    const { cwd, rest } = splitPwdAndState(stateWithoutMarkers);
    return new ZshState(cwd, rest);
}
export function getZshPath2() {
    const shell = process.env.SHELL;
    if (shell?.includes("zsh")) {
        return shell;
    }
    return findActualExecutable("zsh", []).cmd;
}
export async function initZshLightState(options2) {
    const env = {
        ...process.env,
        ...SHELL_ENV_OVERRIDES,
        ...options2?.env
    };
    const STATE_MARKER = "__CURSOR_STATE_MARKER__";
    const args = [
        "-o",
        "extendedglob",
        "-ilc",
        `${dump_zsh_state_light_default} builtin printf '${STATE_MARKER}\\n'; dump_zsh_state_light`
    ];
    const child = spawnWithSignal(getZshPath2(), args, {
        env,
        stdio: [
            "ignore",
            "pipe",
            "pipe"
        ],
        detached: true
    }, {
        type: "insecure_none"
    }, options2?.signal);
    let fullOutput = "";
    child.stdout?.on("data", (data)=>{
        fullOutput += data.toString();
    });
    child.on("error", (error3)=>{
        console.warn(`[shell-exec] zsh-light state init spawn failed; falling back to empty state: ${error3 instanceof Error ? error3.message : String(error3)}`);
    });
    await new Promise((resolve36)=>{
        child.on("close", ()=>{
            resolve36(void 0);
        });
    });
    const snapshot = parseShellStateOutput(fullOutput, STATE_MARKER);
    const markerLine = `${ZSH_STATE_LIGHT_MARKER}
`;
    const stateWithoutMarker = snapshot.startsWith(markerLine) ? snapshot.slice(markerLine.length) : `${process.cwd()}
`;
    const { cwd, rest } = splitPwdAndState(stateWithoutMarker);
    return new ZshLightState(cwd, rest);
}
export function createIgnoreMapping(patterns, baseDir) {
    if (!patterns || patterns.length === 0) {
        return {};
    }
    const validPatterns = patterns.map((pattern)=>pattern.trim()).filter((pattern)=>pattern !== "" && !pattern.startsWith("#"));
    if (validPatterns.length === 0) {
        return {};
    }
    return {
        [baseDir]: validPatterns
    };
}
export function acquireEventLoopPressureTracker() {
    acquireCount++;
    if (sharedEventLoopPressureTracker === void 0) {
        sharedEventLoopPressureTracker = new EventLoopPressureTracker();
    }
    const tracker = sharedEventLoopPressureTracker;
    let disposed = false;
    return {
        isUnderPressure: ()=>tracker.isUnderPressure(),
        formatSuppressionSection: ()=>tracker.formatSuppressionSection(),
        dispose: ()=>{
            if (disposed) {
                return;
            }
            disposed = true;
            acquireCount--;
            if (acquireCount === 0 && sharedEventLoopPressureTracker !== void 0) {
                sharedEventLoopPressureTracker.dispose();
                sharedEventLoopPressureTracker = void 0;
            }
        }
    };
}
var sharedEventLoopPressureTracker;
export function formatSuppressionReason(args) {
    const volumeReasons = [
        `output volume ${args.charsInWindow} chars in window >= min ${args.minChars}`,
        `output rate ${Math.round(args.charsPerSecond)} chars/s >= threshold ${args.triggeredThresholdCharsPerSecond} chars/s`
    ];
    const volumeSection = `volume thresholds met (${volumeReasons.join("; ")})`;
    const eventLoopSection = args.suppressWithoutPressure ? "event loop pressure gate bypassed due to extreme output rate" : args.eventLoopPressureTracker.formatSuppressionSection();
    return `${volumeSection}; ${eventLoopSection}`;
}
function parseNetworkPolicy(json2) {
    if (!json2) return void 0;
    const result = {
        version: 1
    };
    if (json2.default === "allow" || json2.default === "deny") {
        result.default = json2.default;
    }
    if (Array.isArray(json2.allow) && json2.allow.length > 0) {
        result.allow = json2.allow.filter((item)=>typeof item === "string");
    }
    if (Array.isArray(json2.deny) && json2.deny.length > 0) {
        result.deny = json2.deny.filter((item)=>typeof item === "string");
    }
    if (json2.logging) {
        const logging = {};
        if (typeof json2.logging.decisionLogPath === "string") {
            logging.decisionLogPath = json2.logging.decisionLogPath;
        }
        if (json2.logging.logFormat === "jsonl") {
            logging.logFormat = "jsonl";
        }
        if (Object.keys(logging).length > 0) {
            result.logging = logging;
        }
    }
    return result;
}
export function parseSandboxPolicyJson(json2) {
    const type2 = json2.type ?? "workspace_readwrite";
    const commonFields = {
        debugOutputDir: json2.debugOutputDir,
        captureDenies: json2.captureDenies,
        enableSharedBuildCache: json2.enableSharedBuildCache
    };
    if (type2 === "insecure_none") {
        const policy2 = {
            type: "insecure_none",
            ...commonFields
        };
        return policy2;
    }
    let additionalReadonlyPaths;
    if (Array.isArray(json2.additionalReadonlyPaths)) {
        const paths = json2.additionalReadonlyPaths;
        additionalReadonlyPaths = paths.length > 0 ? paths : void 0;
    }
    const sandboxedCommon = {
        ...commonFields,
        networkAccess: json2.networkAccess,
        networkPolicy: parseNetworkPolicy(json2.networkPolicy),
        networkPolicyStrict: json2.networkPolicyStrict,
        additionalReadonlyPaths,
        readBoundary: json2.readBoundary,
        additionalReadPaths: Array.isArray(json2.additionalReadPaths) ? json2.additionalReadPaths : void 0,
        disableTmpWrite: json2.disableTmpWrite
    };
    if (type2 === "workspace_readonly") {
        const policy2 = {
            type: "workspace_readonly",
            ...sandboxedCommon
        };
        return policy2;
    }
    const policy = {
        type: "workspace_readwrite",
        ...sandboxedCommon,
        additionalReadwritePaths: json2.additionalReadwritePaths
    };
    return policy;
}
function validateSandboxPolicyJson(value) {
    if (typeof value !== "object" || value === null) {
        return "Expected an object";
    }
    const json2 = value;
    if (json2.type !== void 0) {
        const validTypes = [
            "insecure_none",
            "workspace_readwrite",
            "workspace_readonly"
        ];
        if (typeof json2.type !== "string" || !validTypes.includes(json2.type)) {
            return `Invalid type: expected one of ${validTypes.join(", ")}`;
        }
    }
    const booleanFields = [
        "networkAccess",
        "networkPolicyStrict",
        "disableTmpWrite",
        "enableSharedBuildCache",
        "captureDenies"
    ];
    for (const field4 of booleanFields){
        if (json2[field4] !== void 0 && typeof json2[field4] !== "boolean") {
            return `Invalid ${field4}: expected boolean`;
        }
    }
    const stringFields = [
        "debugOutputDir"
    ];
    for (const field4 of stringFields){
        if (json2[field4] !== void 0 && typeof json2[field4] !== "string") {
            return `Invalid ${field4}: expected string`;
        }
    }
    const stringArrayFields = [
        "additionalReadwritePaths",
        "additionalReadonlyPaths",
        "additionalReadPaths"
    ];
    for (const field4 of stringArrayFields){
        if (json2[field4] !== void 0) {
            if (!Array.isArray(json2[field4])) {
                return `Invalid ${field4}: expected array`;
            }
            const arr = json2[field4];
            if (!arr.every((item)=>typeof item === "string")) {
                return `Invalid ${field4}: expected array of strings`;
            }
        }
    }
    if (json2.readBoundary !== void 0 && json2.readBoundary !== "system" && json2.readBoundary !== "workspace") {
        return 'Invalid readBoundary: expected "system" or "workspace"';
    }
    if (json2.networkPolicy !== void 0) {
        if (typeof json2.networkPolicy !== "object" || json2.networkPolicy === null) {
            return "Invalid networkPolicy: expected object";
        }
        const np = json2.networkPolicy;
        if (np.default !== void 0 && np.default !== "allow" && np.default !== "deny") {
            return 'Invalid networkPolicy.default: expected "allow" or "deny"';
        }
        if (np.allow !== void 0 && !Array.isArray(np.allow)) {
            return "Invalid networkPolicy.allow: expected array";
        }
        if (np.deny !== void 0 && !Array.isArray(np.deny)) {
            return "Invalid networkPolicy.deny: expected array";
        }
    }
    return void 0;
}
async function loadSandboxPolicyFromFile(filePath, baseDir) {
    try {
        const content = await (0, import_promises8.readFile)(filePath, "utf-8");
        const json2 = JSON.parse(content);
        const validationError = validateSandboxPolicyJson(json2);
        if (validationError) {
            return {
                success: false,
                error: `Invalid sandbox policy: ${validationError}`
            };
        }
        let policy = parseSandboxPolicyJson(json2);
        if (baseDir) {
            policy = resolvePolicyPaths(policy, baseDir);
        }
        return {
            success: true,
            policy
        };
    } catch (error3) {
        if (error3 instanceof Error) {
            if ("code" in error3 && error3.code === "ENOENT") {
                return {
                    success: false,
                    error: "File not found"
                };
            }
            if (error3 instanceof SyntaxError) {
                return {
                    success: false,
                    error: `Invalid JSON: ${error3.message}`
                };
            }
            return {
                success: false,
                error: error3.message
            };
        }
        return {
            success: false,
            error: "Unknown error"
        };
    }
}
export async function loadSandboxPolicyFromFileOrUndefined(filePath, baseDir) {
    const result = await loadSandboxPolicyFromFile(filePath, baseDir);
    if (result.success) {
        return result.policy;
    }
    return void 0;
}
export function resolvePolicyPaths(policy, baseDir) {
    if (policy.type === "insecure_none") {
        return policy;
    }
    const resolvedReadonlyPaths = policy.additionalReadonlyPaths?.map((p2)=>resolvePath(p2, baseDir));
    const resolvedReadPaths = policy.additionalReadPaths?.map((p2)=>resolvePath(p2, baseDir));
    if (policy.type === "workspace_readonly") {
        return {
            ...policy,
            additionalReadonlyPaths: resolvedReadonlyPaths,
            additionalReadPaths: resolvedReadPaths
        };
    }
    const resolvedReadwritePaths = policy.additionalReadwritePaths?.map((p2)=>resolvePath(p2, baseDir));
    return {
        ...policy,
        additionalReadonlyPaths: resolvedReadonlyPaths,
        additionalReadPaths: resolvedReadPaths,
        additionalReadwritePaths: resolvedReadwritePaths
    };
}
export { BidiService };

export var bidi_connect_exports = {};
Object.defineProperty(bidi_connect_exports, "BidiService", {
    enumerable: true,
    get: ()=>BidiService
});

import { createLogger } from "./agent-kv/dist/subagent-states.js";
import { init_dist } from "./context/dist/index.js";
import { init_auth } from "./cursor-config/dist/auth/index.js";
import { init_request } from "./cursor-config/dist/request.js";
import { init_esm4 } from "./node_modules/.pnpm/_46b84b12e081161e2c23c10160f61a1d/node_modules/@connectrpc/connect-node/dist/esm/index.js";
import { init_esm3 } from "./node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { require_ignore } from "./node_modules/.pnpm/ignore@7.0.5/node_modules/ignore/index.js";
import { init_dashboard_connect } from "./proto/dist/generated/aiserver/v1/dashboard_connect.js";
import { init_env_filter } from "./shell-exec/dist/env-filter.js";
import { init_ripgrep } from "./shell-exec/dist/ripgrep.js";
import { init_cache_env } from "./shell-exec/dist/sandbox/cache-env.js";
import { init_seatbelt } from "./shell-exec/dist/sandbox/macos/seatbelt.js";
import { init_network_policy_utils } from "./shell-exec/dist/sandbox/network-policy-utils.js";
import { init_dist3 } from "./utils/dist/index.js";
var import_node_child_process4, import_node_fs11, import_node_os5, import_node_path10, import_node_util3, execFileAsync2, MDM_SIGN_IN_POLICY_HEADER_NAME, SIGN_IN_POLICY_VIOLATION_ERROR, SIGN_IN_POLICY_VIOLATION_MESSAGE, SignInPolicyViolationError, MACOS_POLICY_DOMAINS, WINDOWS_POLICY_REGISTRY_KEYS, POLICY_CACHE_TTL_MS, cachedAtMs;
var isDev, ONE_HOUR_MS, ephemeralAccessToken;
var import_node_fs13, import_promises4, import_node_os7, import_node_path14, import_ignore, HOME_TOOLCHAIN_DIRS, PACKAGE_PREFIX_SUBDIRS, prefixEntries, NODE_CACHE_DIRS, homeToolchainEntries, HARDCODED_ALLOWED_READ_PATHS, HARDCODED_WRITE_PROTECTION_PATTERNS, HARDCODED_PROTECTED_GIT_PATTERNS, CURSOR_ALLOWED_WRITE_SUBDIRS, HARDCODED_NETWORK_DENYLIST, _workspaceIgnore, _gitIgnore, _absoluteAndHomePaths, _gitContextCache, _caseInsensitiveFs;
var crypto3, fs6, os3, path11, SANDBOX_POLICY_DIR_NAME, SANDBOX_POLICY_DIR_ENV, STALE_POLICY_MAX_AGE_MS, PRUNE_INTERVAL_MS, lastPruneAtMs;
var import_node_child_process6, fs7, import_node_fs14, os4, path12, isMacOS, isLinux, logger16, configuredWorkspaceReadEnabled, binaryAvailable, binaryCheckError, lastSandboxFailureReason, cachedSandboxHelperSupported, cachedVerdictIsWorkspaceRooted, inFlightWorkspaceProbe, PREFLIGHT_PROBE_TIMEOUT_MS;
var import_node_perf_hooks, EventLoopPressureThresholdDefault, EventLoopPressureTrackerDefault, EMPTY_SNAPSHOT, acquireCount, EventLoopPressureTracker;
export { CURSOR_ALLOWED_WRITE_SUBDIRS, EMPTY_SNAPSHOT, EventLoopPressureThresholdDefault, EventLoopPressureTracker, EventLoopPressureTrackerDefault, HARDCODED_ALLOWED_READ_PATHS, HARDCODED_NETWORK_DENYLIST, HARDCODED_PROTECTED_GIT_PATTERNS, HARDCODED_WRITE_PROTECTION_PATTERNS, HOME_TOOLCHAIN_DIRS, MACOS_POLICY_DOMAINS, MDM_SIGN_IN_POLICY_HEADER_NAME, NODE_CACHE_DIRS, ONE_HOUR_MS, PACKAGE_PREFIX_SUBDIRS, POLICY_CACHE_TTL_MS, PREFLIGHT_PROBE_TIMEOUT_MS, PRUNE_INTERVAL_MS, SANDBOX_POLICY_DIR_ENV, SANDBOX_POLICY_DIR_NAME, SIGN_IN_POLICY_VIOLATION_ERROR, SIGN_IN_POLICY_VIOLATION_MESSAGE, STALE_POLICY_MAX_AGE_MS, SignInPolicyViolationError, WINDOWS_POLICY_REGISTRY_KEYS, _absoluteAndHomePaths, _caseInsensitiveFs, _gitContextCache, _gitIgnore, _workspaceIgnore, acquireCount, binaryAvailable, binaryCheckError, cachedAtMs, cachedSandboxHelperSupported, cachedVerdictIsWorkspaceRooted, configuredWorkspaceReadEnabled, crypto3, ephemeralAccessToken, execFileAsync2, fs6, fs7, homeToolchainEntries, import_ignore, import_node_child_process4, import_node_child_process6, import_node_fs11, import_node_fs13, import_node_fs14, import_node_os5, import_node_os7, import_node_path10, import_node_path14, import_node_perf_hooks, import_node_util3, import_promises4, inFlightWorkspaceProbe, isDev, isLinux, isMacOS, lastPruneAtMs, lastSandboxFailureReason, logger16, os3, os4, path11, path12, prefixEntries };
var __wakaru_init_mdm_sign_in_policy_initialized = false;
export function init_mdm_sign_in_policy() {
if (__wakaru_init_mdm_sign_in_policy_initialized) return;
__wakaru_init_mdm_sign_in_policy_initialized = true;
"use strict";
import_node_child_process4 = require("node:child_process");
import_node_fs11 = require("node:fs");
import_node_os5 = __toESM(require("node:os"), 1);
import_node_path10 = __toESM(require("node:path"), 1);
import_node_util3 = require("node:util");
execFileAsync2 = (0, import_node_util3.promisify)(import_node_child_process4.execFile);
MDM_SIGN_IN_POLICY_HEADER_NAME = "x-cursor-mdm-signin-policy";
SIGN_IN_POLICY_VIOLATION_ERROR = "sign_in_policy_violation";
SIGN_IN_POLICY_VIOLATION_MESSAGE = "Sign-in on this device is restricted by your organization's device policy. Sign in with an allowed account to continue.";
SignInPolicyViolationError = class extends Error {
    constructor(){
        super(SIGN_IN_POLICY_VIOLATION_MESSAGE);
        this.name = "SignInPolicyViolationError";
    }
};
MACOS_POLICY_DOMAINS = [
    "com.todesktop.230313mzl4w4u92",
    "co.anysphere.cursor.dev"
];
WINDOWS_POLICY_REGISTRY_KEYS = [
    "HKLM\\SOFTWARE\\Policies\\Cursor\\Cursor",
    "HKLM\\SOFTWARE\\Policies\\Microsoft\\Cursor",
    "HKLM\\SOFTWARE\\Policies\\Cursor\\Cursor Dev"
];
POLICY_CACHE_TTL_MS = 3e4;
cachedAtMs = 0;

}
var __wakaru_init_dashboard_initialized = false;
export function init_dashboard() {
if (__wakaru_init_dashboard_initialized) return;
__wakaru_init_dashboard_initialized = true;
"use strict";
init_dashboard_connect();
init_esm3();
init_esm4();
init_auth();
init_request();
isDev = process.env.NODE_ENV === "development";
ONE_HOUR_MS = 60 * 60 * 1e3;
ephemeralAccessToken = null;

}
var __wakaru_init_hardcoded_policy_initialized = false;
export function init_hardcoded_policy() {
if (__wakaru_init_hardcoded_policy_initialized) return;
__wakaru_init_hardcoded_policy_initialized = true;
"use strict";
import_node_fs13 = require("node:fs");
import_promises4 = require("node:fs/promises");
import_node_os7 = __toESM(require("node:os"), 1);
import_node_path14 = require("node:path");
init_dist3();
import_ignore = __toESM(require_ignore(), 1);
HOME_TOOLCHAIN_DIRS = [
    ".local/bin",
    ".local/share/mise",
    ".local/share/pnpm",
    ".nvm",
    ".volta",
    ".asdf",
    ".pyenv",
    ".rbenv",
    ".rustup",
    ".cargo/bin",
    ".cargo/registry",
    ".cargo/git"
];
PACKAGE_PREFIX_SUBDIRS = [
    "bin",
    "sbin",
    "lib",
    "opt",
    "Cellar",
    "share",
    "Frameworks",
    "etc/gitconfig",
    "etc/openssl@3/cert.pem",
    "etc/openssl@3/openssl.cnf",
    "etc/ca-certificates"
];
prefixEntries = (platform, prefixes)=>prefixes.flatMap((prefix)=>PACKAGE_PREFIX_SUBDIRS.map((sub)=>({
                platform,
                scope: "global",
                path: `${prefix}/${sub}`
            })));
NODE_CACHE_DIRS = {
    linux: [
        ".cache/node",
        ".cache/yarn"
    ],
    darwin: [
        ".cache/node",
        "Library/Caches/Yarn"
    ]
};
homeToolchainEntries = (platform)=>[
        ...HOME_TOOLCHAIN_DIRS,
        ...NODE_CACHE_DIRS[platform]
    ].map((path64)=>({
            platform,
            scope: "home-dir",
            path: path64
        }));
HARDCODED_ALLOWED_READ_PATHS = [
    {
        platform: "linux",
        scope: "global",
        path: "/bin"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/sbin"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/usr/bin"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/usr/sbin"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/lib"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/lib64"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/usr/lib"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/usr/lib64"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/usr/libexec"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/usr/share"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/ld.so.cache"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/ld.so.conf"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/ld.so.conf.d"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/ssl/certs"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/ssl/openssl.cnf"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/ssl/cert.pem"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/ssl/ca-bundle.pem"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/ssl/certs/ca-certificates.crt"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/pki/tls/certs"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/pki/tls/openssl.cnf"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/pki/ca-trust/extracted"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/resolv.conf"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/hosts"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/nsswitch.conf"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/gai.conf"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/alternatives"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/mime.types"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/profile"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/bash.bashrc"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/zsh/zshenv"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/zsh/zprofile"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/zsh/zshrc"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/zsh/zlogin"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/etc/gitconfig"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".bashrc"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".bash_profile"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".profile"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".zshenv"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".zprofile"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".zshrc"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".zlogin"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".gitconfig"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".ssh/known_hosts"
    },
    {
        platform: "linux",
        scope: "home",
        path: ".config/mise/config.toml"
    },
    {
        platform: "linux",
        scope: "home-dir",
        path: ".cache/dotslash"
    },
    ...homeToolchainEntries("linux"),
    ...prefixEntries("linux", [
        "/usr/local",
        "/home/linuxbrew/.linuxbrew"
    ]),
    {
        platform: "linux",
        scope: "global",
        path: "/usr/local/go"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/nix/store"
    },
    {
        platform: "linux",
        scope: "global",
        path: "/nix/var/nix/profiles"
    },
    {
        platform: "linux",
        scope: "bundled",
        path: "ripgrep"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/bin"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/usr/bin"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/usr/lib"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/usr/libexec"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/usr/share"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/System/Library"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/System/Cryptexes"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/Library/Apple"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/Library/Developer/CommandLineTools"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/Applications/Xcode.app"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/Library/Preferences/com.apple.dt.Xcode.plist"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/private/etc/ssl/cert.pem"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/private/etc/ssl/certs"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/private/etc/ssl/openssl.cnf"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/private/etc/hosts"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/private/etc/resolv.conf"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/private/etc/apache2/mime.types"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/etc/profile"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/etc/bashrc"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/etc/zshenv"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/etc/zprofile"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/etc/zshrc"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/etc/zlogin"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/etc/gitconfig"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".bashrc"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".bash_profile"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".profile"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".zshenv"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".zprofile"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".zshrc"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".zlogin"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".gitconfig"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".ssh/known_hosts"
    },
    {
        platform: "darwin",
        scope: "home",
        path: "Library/Preferences/.GlobalPreferences.plist"
    },
    {
        platform: "darwin",
        scope: "home",
        path: ".config/mise/config.toml"
    },
    {
        platform: "darwin",
        scope: "home-dir",
        path: "Library/Python"
    },
    {
        platform: "darwin",
        scope: "home-dir",
        path: "Library/Caches/dotslash"
    },
    ...homeToolchainEntries("darwin"),
    ...prefixEntries("darwin", [
        "/opt/homebrew",
        "/usr/local"
    ]),
    {
        platform: "darwin",
        scope: "global",
        path: "/nix/store"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/nix/var/nix/profiles"
    },
    {
        platform: "darwin",
        scope: "bundled",
        path: "ripgrep"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/dev/null"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/dev/zero"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/dev/random"
    },
    {
        platform: "darwin",
        scope: "global",
        path: "/dev/urandom"
    }
];
HARDCODED_WRITE_PROTECTION_PATTERNS = [
    {
        type: "workspace",
        pattern: "**/.cursor/*.json"
    },
    {
        type: "workspace",
        pattern: "**/.cursor/**/*.json"
    },
    {
        type: "workspace",
        pattern: "**/.cursor/.workspace-trusted"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/rules"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/rules/**"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/commands"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/commands/**"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/worktrees"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/worktrees/**"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/skills"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/skills/**"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/agents"
    },
    {
        type: "workspace",
        pattern: "!**/.cursor/agents/**"
    },
    {
        type: "workspace",
        pattern: "**/.claude/*.json"
    },
    {
        type: "workspace",
        pattern: "**/.claude/**/*.json"
    },
    {
        type: "workspace",
        pattern: "**/.vscode/**"
    },
    {
        type: "workspace",
        pattern: "**/.idea/**"
    },
    {
        type: "workspace",
        pattern: "**/.venv/"
    },
    {
        type: "workspace",
        pattern: "**/venv/"
    },
    {
        type: "workspace",
        pattern: "**/*.code-workspace"
    },
    {
        type: "workspace",
        pattern: "**/.cursorignore"
    },
    {
        type: "workspace",
        pattern: "**/.workspace-trusted"
    },
    {
        type: "workspace",
        pattern: "**/.cursor/**/cli.json"
    },
    {
        type: "workspace",
        pattern: "**/.cursor/**/cli-config.json"
    },
    {
        type: "workspace",
        pattern: "**/.cursor/**/mcp.json"
    },
    {
        type: "workspace",
        pattern: "**/.cursor/**/mcp-approvals.json"
    },
    {
        type: "workspace",
        pattern: "**/.cursor/**/permissions.json"
    },
    {
        type: "git",
        pattern: "**/.git/hooks/**"
    },
    {
        type: "git",
        pattern: "**/.git/config"
    },
    {
        type: "git",
        pattern: "**/.git/config.worktree"
    },
    {
        type: "git",
        pattern: "**/.git/info/attributes"
    },
    {
        type: "git",
        pattern: "**/.git/commondir"
    },
    {
        type: "git",
        pattern: "**/.git/worktrees/*/commondir"
    },
    {
        type: "worktree",
        pattern: ".git"
    },
    {
        type: "absolute",
        pattern: "/etc/ssl/cert.pem"
    },
    {
        type: "absolute",
        pattern: "/etc/ssl/ca-bundle.pem"
    },
    {
        type: "absolute",
        pattern: "/private/etc/ssl/cert.pem"
    },
    {
        type: "absolute",
        pattern: "/etc/ssl/certs/ca-certificates.crt"
    },
    {
        type: "absolute",
        pattern: "/etc/pki/tls/certs/ca-bundle.crt"
    },
    {
        type: "absolute",
        pattern: "/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem"
    },
    {
        type: "home",
        pattern: ".cursor/sandbox-policies"
    }
];
HARDCODED_PROTECTED_GIT_PATTERNS = HARDCODED_WRITE_PROTECTION_PATTERNS.filter((e)=>e.type === "git").map((e)=>e.pattern);
CURSOR_ALLOWED_WRITE_SUBDIRS = HARDCODED_WRITE_PROTECTION_PATTERNS.filter((e)=>e.type === "workspace" && e.pattern.startsWith("!") && !e.pattern.endsWith("/**")).map((e)=>e.pattern.replace(/^!(\*\*\/)?/, ""));
HARDCODED_NETWORK_DENYLIST = [];
_workspaceIgnore = null;
_gitIgnore = null;
_absoluteAndHomePaths = null;
_gitContextCache = new Map();
_caseInsensitiveFs = process.platform === "win32" || process.platform === "darwin";

}
var __wakaru_init_policy_file_initialized = false;
export function init_policy_file() {
if (__wakaru_init_policy_file_initialized) return;
__wakaru_init_policy_file_initialized = true;
"use strict";
crypto3 = __toESM(require("node:crypto"), 1);
fs6 = __toESM(require("node:fs"), 1);
os3 = __toESM(require("node:os"), 1);
path11 = __toESM(require("node:path"), 1);
SANDBOX_POLICY_DIR_NAME = "sandbox-policies";
SANDBOX_POLICY_DIR_ENV = "CURSOR_SANDBOX_POLICY_DIR";
STALE_POLICY_MAX_AGE_MS = 60 * 60 * 1e3;
PRUNE_INTERVAL_MS = 15 * 60 * 1e3;
lastPruneAtMs = 0;

}
var __wakaru_init_helper_initialized = false;
export function init_helper() {
if (__wakaru_init_helper_initialized) return;
__wakaru_init_helper_initialized = true;
"use strict";
import_node_child_process6 = require("node:child_process");
fs7 = __toESM(require("node:fs"), 1);
import_node_fs14 = require("node:fs");
os4 = __toESM(require("node:os"), 1);
path12 = __toESM(require("node:path"), 1);
init_dist();
init_dist3();
init_env_filter();
init_ripgrep();
init_cache_env();
init_hardcoded_policy();
init_seatbelt();
init_network_policy_utils();
init_policy_file();
isMacOS = process.platform === "darwin";
isLinux = process.platform === "linux";
logger16 = createLogger("shell-exec:sandbox");
configuredWorkspaceReadEnabled = true;
binaryAvailable = null;
binaryCheckError = null;
lastSandboxFailureReason = null;
cachedSandboxHelperSupported = null;
cachedVerdictIsWorkspaceRooted = false;
inFlightWorkspaceProbe = null;
PREFLIGHT_PROBE_TIMEOUT_MS = 15e3;

}
var __wakaru_init_event_loop_pressure_initialized = false;
export function init_event_loop_pressure() {
if (__wakaru_init_event_loop_pressure_initialized) return;
__wakaru_init_event_loop_pressure_initialized = true;
"use strict";
import_node_perf_hooks = require("node:perf_hooks");
(function(EventLoopPressureThresholdDefault2) {
    EventLoopPressureThresholdDefault2[EventLoopPressureThresholdDefault2["EventLoopDelayP95Ms"] = 50] = "EventLoopDelayP95Ms";
    EventLoopPressureThresholdDefault2[EventLoopPressureThresholdDefault2["EventLoopUtilization"] = 0.7] = "EventLoopUtilization";
})(EventLoopPressureThresholdDefault || (EventLoopPressureThresholdDefault = {}));
(function(EventLoopPressureTrackerDefault2) {
    EventLoopPressureTrackerDefault2[EventLoopPressureTrackerDefault2["SampleIntervalMs"] = 250] = "SampleIntervalMs";
    EventLoopPressureTrackerDefault2[EventLoopPressureTrackerDefault2["EventLoopResolutionMs"] = 20] = "EventLoopResolutionMs";
})(EventLoopPressureTrackerDefault || (EventLoopPressureTrackerDefault = {}));
EMPTY_SNAPSHOT = {
    eventLoopDelayP95Ms: 0,
    eventLoopUtilization: 0
};
acquireCount = 0;
EventLoopPressureTracker = class {
    eventLoopMonitor;
    sampleTimer;
    lastEventLoopUtilization = import_node_perf_hooks.performance.eventLoopUtilization();
    latestSnapshot = EMPTY_SNAPSHOT;
    constructor(){
        this.eventLoopMonitor = (0, import_node_perf_hooks.monitorEventLoopDelay)({
            resolution: EventLoopPressureTrackerDefault.EventLoopResolutionMs
        });
        this.lastEventLoopUtilization = import_node_perf_hooks.performance.eventLoopUtilization();
        this.eventLoopMonitor.enable();
        this.sample();
        this.sampleTimer = setInterval(()=>{
            this.sample();
        }, EventLoopPressureTrackerDefault.SampleIntervalMs);
        this.sampleTimer.unref?.();
    }
    dispose() {
        if (this.sampleTimer === void 0) {
            return;
        }
        clearInterval(this.sampleTimer);
        this.sampleTimer = void 0;
        this.eventLoopMonitor.disable();
        this.latestSnapshot = EMPTY_SNAPSHOT;
        this.lastEventLoopUtilization = import_node_perf_hooks.performance.eventLoopUtilization();
    }
    isUnderPressure() {
        return this.latestSnapshot.eventLoopDelayP95Ms >= EventLoopPressureThresholdDefault.EventLoopDelayP95Ms || this.latestSnapshot.eventLoopUtilization >= EventLoopPressureThresholdDefault.EventLoopUtilization;
    }
    formatSuppressionSection() {
        const snapshot = this.latestSnapshot;
        const metrics = [
            `event loop delay p95 ${snapshot.eventLoopDelayP95Ms.toFixed(1)}ms (threshold ${EventLoopPressureThresholdDefault.EventLoopDelayP95Ms}ms)`,
            `event loop utilization ${(snapshot.eventLoopUtilization * 100).toFixed(1)}% (threshold ${(EventLoopPressureThresholdDefault.EventLoopUtilization * 100).toFixed(1)}%)`
        ].join(", ");
        const pressureReasons = this.getPressureTriggerReasons(snapshot);
        const pressureState = pressureReasons.length > 0 ? `event loop under pressure (${pressureReasons.join(", ")})` : "event loop not under pressure";
        return `event loop pressure gate enabled; ${pressureState}; event loop metrics: ${metrics}`;
    }
    getPressureTriggerReasons(snapshot) {
        const reasons = [];
        if (snapshot.eventLoopDelayP95Ms >= EventLoopPressureThresholdDefault.EventLoopDelayP95Ms) {
            reasons.push(`event loop delay p95 ${snapshot.eventLoopDelayP95Ms.toFixed(1)}ms >= ${EventLoopPressureThresholdDefault.EventLoopDelayP95Ms}ms`);
        }
        if (snapshot.eventLoopUtilization >= EventLoopPressureThresholdDefault.EventLoopUtilization) {
            reasons.push(`event loop utilization ${(snapshot.eventLoopUtilization * 100).toFixed(1)}% >= ${(EventLoopPressureThresholdDefault.EventLoopUtilization * 100).toFixed(1)}%`);
        }
        return reasons;
    }
    sample() {
        this.latestSnapshot = {
            eventLoopDelayP95Ms: this.computeEventLoopDelayP95Ms(),
            eventLoopUtilization: this.computeEventLoopUtilization()
        };
    }
    computeEventLoopDelayP95Ms() {
        const rawP95Ns = this.eventLoopMonitor.percentile(95);
        this.eventLoopMonitor.reset();
        if (!Number.isFinite(rawP95Ns)) {
            return 0;
        }
        const p95Ms = rawP95Ns / 1e6;
        return Math.max(0, p95Ms - EventLoopPressureTrackerDefault.EventLoopResolutionMs);
    }
    computeEventLoopUtilization() {
        const currentEventLoopUtilization = import_node_perf_hooks.performance.eventLoopUtilization();
        const active = currentEventLoopUtilization.active - this.lastEventLoopUtilization.active;
        const idle = currentEventLoopUtilization.idle - this.lastEventLoopUtilization.idle;
        const total = active + idle;
        this.lastEventLoopUtilization = currentEventLoopUtilization;
        if (total <= 0 || !Number.isFinite(total)) {
            return 0;
        }
        return active / total;
    }
};

}
