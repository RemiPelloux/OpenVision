import { require_privateInferenceEnablement } from "./privateInferenceEnablement.js";
import { require_privateInferencePerimeter } from "./privateInferencePerimeter.js";
var __wakaru_require_privateInferenceHttpGuard_cache;
export function require_privateInferenceHttpGuard() {
if (__wakaru_require_privateInferenceHttpGuard_cache) return __wakaru_require_privateInferenceHttpGuard_cache;
var exports2 = {};
__wakaru_require_privateInferenceHttpGuard_cache = exports2;
"use strict";
var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
    return mod2 && mod2.__esModule ? mod2 : {
        "default": mod2
    };
};
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.PrivateInferenceHttpGuard = exports2.PRIVATE_INFERENCE_ALLOW_HOSTS_ENV = exports2.OPTIONAL_PRIVATE_INFERENCE_CURSOR_HOSTS = exports2.PrivateInferenceEgressRefusedError = exports2.PRIVATE_INFERENCE_EGRESS_REFUSED_CODE = void 0;
exports2.isPrivateInferenceEgressRefusedError = isPrivateInferenceEgressRefusedError;
exports2.isCursorControlPlanePath = isCursorControlPlanePath;
exports2.installPrivateInferenceHttpGuard = installPrivateInferenceHttpGuard;
exports2.getPrivateInferenceHttpGuard = getPrivateInferenceHttpGuard;
exports2.combinePrivateInferenceEnablements = combinePrivateInferenceEnablements;
var node_http_1 = __importDefault(require("node:http"));
var node_http2_1 = __importDefault(require("node:http2"));
var node_https_1 = __importDefault(require("node:https"));
var node_module_1 = require("node:module");
var privateInferenceEnablement_js_1 = require_privateInferenceEnablement();
var privateInferencePerimeter_js_1 = require_privateInferencePerimeter();
exports2.PRIVATE_INFERENCE_EGRESS_REFUSED_CODE = "ERR_PRIVATE_INFERENCE_EGRESS_REFUSED";
var PrivateInferenceEgressRefusedError = class extends Error {
    constructor(host, initiator){
        super(host === void 0 ? `private inference lockdown: ${initiator} egress to an unparseable target is refused` : `private inference lockdown: ${initiator} egress to ${host} is refused`);
        this.host = host;
        this.initiator = initiator;
        this.name = "PrivateInferenceEgressRefusedError";
        this.code = exports2.PRIVATE_INFERENCE_EGRESS_REFUSED_CODE;
    }
};
exports2.PrivateInferenceEgressRefusedError = PrivateInferenceEgressRefusedError;
function isPrivateInferenceEgressRefusedError(error3) {
    return error3 instanceof Error && "code" in error3 && error3.code === exports2.PRIVATE_INFERENCE_EGRESS_REFUSED_CODE;
}
exports2.OPTIONAL_PRIVATE_INFERENCE_CURSOR_HOSTS = {
    downloads: "downloads.cursor.com",
    marketplace: "marketplace.cursorapi.com"
};
var CONNECT_ROUTE_PATTERN = /^\/([a-z][a-z0-9_]*(?:\.[a-z0-9_]+)*\.[A-Z][A-Za-z0-9_]*)\/([A-Z][A-Za-z0-9_]*)$/;
function isCursorControlPlanePath(pathname, state = "enabled") {
    const route = CONNECT_ROUTE_PATTERN.exec(pathname);
    if (route === null) {
        return false;
    }
    const [, serviceTypeName, methodName] = route;
    if (serviceTypeName === void 0 || methodName === void 0) {
        return false;
    }
    return (0, privateInferencePerimeter_js_1.isPrivateInferenceRpcAllowedInState)(state, serviceTypeName, methodName);
}
exports2.PRIVATE_INFERENCE_ALLOW_HOSTS_ENV = "CURSOR_PRIVATE_INFERENCE_ALLOW_HOSTS";
var NO_NETWORK_PROTOCOLS = new Set([
    "data:",
    "blob:",
    "file:"
]);
var DEFAULT_PORTS = {
    "http:": "80",
    "ws:": "80",
    "https:": "443",
    "wss:": "443"
};
var GUARD_KEY = Symbol.for("anysphere.cursor-network.privateInferenceHttpGuard");
var PrivateInferenceHttpGuard = class {
    constructor(options2 = {}){
        this.lockdownSources = [];
        this.lockdownSubscriptions = [];
        this.cursorBackendUrlProviders = [];
        this.allowedHosts = new Set();
        this.logs = [];
        this.refusalListeners = [];
        this.loggedRefusals = new Set();
        this.allowLoopback = options2.allowLoopback ?? true;
        const env = options2.env ?? process.env;
        for (const entry of (env[exports2.PRIVATE_INFERENCE_ALLOW_HOSTS_ENV] ?? "").split(",")){
            this.allowHost(entry);
        }
        this.contribute(options2);
    }
    contribute(options2) {
        if (options2.enablement !== void 0 && !this.lockdownSources.includes(options2.enablement)) {
            this.lockdownSources.push(options2.enablement);
            this.lockdownSubscriptions.push(options2.enablement.onDidChange(()=>this.logStateIfChanged()));
            this.logStateIfChanged();
        }
        if (options2.cursorBackendUrls !== void 0) {
            this.cursorBackendUrlProviders.push(options2.cursorBackendUrls);
        }
        for (const host of options2.optionalHosts ?? []){
            this.allowHost(host);
        }
        if (options2.log !== void 0 && !this.logs.includes(options2.log)) {
            this.logs.push(options2.log);
        }
        if (options2.onRefused !== void 0) {
            this.refusalListeners.push(options2.onRefused);
        }
    }
    get lockdownState() {
        return combinePrivateInferenceEnablements(this.lockdownSources.map((source)=>source.state));
    }
    isActive() {
        return (0, privateInferenceEnablement_js_1.isPrivateInferenceLockedDown)(this.lockdownState);
    }
    logStateIfChanged() {
        const state = this.lockdownState;
        if (state !== this.lastLoggedState) {
            this.lastLoggedState = state;
            this.info(`[PrivateInferenceHttpGuard] lockdown ${state}`);
        }
    }
    allowBaseUrl(baseUrl) {
        const host = hostKeyFromUrl(parseUrl(baseUrl));
        if (host !== void 0) {
            this.allowedHosts.add(host);
        }
    }
    allowHost(entry) {
        const trimmed = entry.trim();
        if (trimmed.length === 0) {
            return;
        }
        const hasPort = /:\d+$/.test(trimmed) && !trimmed.startsWith("[");
        if (hasPort) {
            const key = hostKeyFromUrl(parseUrl(`https://${trimmed}/`));
            if (key !== void 0) {
                this.allowedHosts.add(key);
            }
            return;
        }
        for (const scheme of [
            "http:",
            "https:"
        ]){
            const key = hostKeyFromUrl(parseUrl(`${scheme}//${trimmed}/`));
            if (key !== void 0) {
                this.allowedHosts.add(key);
            }
        }
    }
    allowsTarget(target, options2 = {}) {
        const url2 = target === void 0 ? void 0 : parseUrl(target);
        if (url2 === void 0) {
            return false;
        }
        if (NO_NETWORK_PROTOCOLS.has(url2.protocol)) {
            return true;
        }
        const host = hostKeyFromUrl(url2);
        if (host === void 0) {
            return false;
        }
        if (this.allowLoopback && isLoopbackHostname(hostnameOf(host))) {
            return true;
        }
        if (this.allowedHosts.has(host)) {
            return true;
        }
        if (this.isCursorBackendHost(host)) {
            return options2.pathKnown === false || isCursorControlPlanePath(url2.pathname, this.lockdownState);
        }
        return false;
    }
    isCursorBackendHost(host) {
        for (const provider of this.cursorBackendUrlProviders){
            for (const baseUrl of provider()){
                if (baseUrl === void 0) {
                    continue;
                }
                if (hostKeyFromUrl(parseUrl(baseUrl)) === host) {
                    return true;
                }
            }
        }
        return false;
    }
    check(target, initiator) {
        if (!this.isActive() || this.allowsTarget(target, {
            pathKnown: initiator !== "http2.connect"
        })) {
            return;
        }
        const url2 = target === void 0 ? void 0 : parseUrl(target);
        const host = url2 === void 0 ? void 0 : hostKeyFromUrl(url2);
        this.reportRefusal({
            host,
            initiator,
            stackHint: callerStackHint()
        });
        throw new PrivateInferenceEgressRefusedError(host, initiator);
    }
    install() {
        if (this.restore !== void 0) {
            return;
        }
        const restores = [];
        const originalFetch = globalThis.fetch;
        const guardedFetch = (input, init)=>{
            try {
                this.check(fetchTarget(input), "fetch");
            } catch (error3) {
                return Promise.reject(error3);
            }
            return originalFetch.call(globalThis, input, init);
        };
        globalThis.fetch = guardedFetch;
        restores.push(()=>{
            if (globalThis.fetch === guardedFetch) {
                globalThis.fetch = originalFetch;
            }
        });
        restores.push(this.patchHttpModule(node_http_1.default, "http"));
        restores.push(this.patchHttpModule(node_https_1.default, "https"));
        const originalConnect = node_http2_1.default.connect;
        const guardedConnect = ((authority, options2, listener)=>{
            const target = typeof authority === "string" || authority instanceof URL ? authority : void 0;
            this.check(target, "http2.connect");
            const session = originalConnect.call(node_http2_1.default, authority, options2, listener);
            this.guardHttp2Session(session, target);
            return session;
        });
        node_http2_1.default.connect = guardedConnect;
        restores.push(()=>{
            if (node_http2_1.default.connect === guardedConnect) {
                node_http2_1.default.connect = originalConnect;
            }
        });
        (0, node_module_1.syncBuiltinESMExports)();
        this.restore = ()=>{
            for (const restore of restores){
                restore();
            }
            (0, node_module_1.syncBuiltinESMExports)();
        };
        this.info(`[PrivateInferenceHttpGuard] installed (lockdown ${this.lockdownState})`);
    }
    dispose() {
        this.restore?.();
        this.restore = void 0;
        for (const subscription of this.lockdownSubscriptions){
            subscription.dispose();
        }
        this.lockdownSubscriptions.length = 0;
        const g2 = globalThis;
        if (g2[GUARD_KEY] === this) {
            delete g2[GUARD_KEY];
        }
    }
    guardHttp2Session(session, authority) {
        const base = authority === void 0 ? void 0 : parseUrl(authority);
        if (base === void 0) {
            return;
        }
        const originalRequest = session.request;
        const guardedSessionRequest = ((headers, options2)=>{
            const path64 = http2PathHeader(headers);
            let target;
            if (typeof path64 === "string") {
                try {
                    target = new URL(path64, base);
                } catch  {
                    target = void 0;
                }
            }
            this.check(target, "http2.request");
            return originalRequest.call(session, headers, options2);
        });
        session.request = guardedSessionRequest;
    }
    patchHttpModule(module3, name17) {
        const defaultProtocol = `${name17}:`;
        const originalRequest = module3.request;
        const originalGet = module3.get;
        const guardedRequest = ((...args)=>{
            this.check(httpRequestTarget(args, defaultProtocol), `${name17}.request`);
            return originalRequest.apply(module3, args);
        });
        const guardedGet = ((...args)=>{
            this.check(httpRequestTarget(args, defaultProtocol), `${name17}.get`);
            return originalGet.apply(module3, args);
        });
        module3.request = guardedRequest;
        module3.get = guardedGet;
        return ()=>{
            if (module3.request === guardedRequest) {
                module3.request = originalRequest;
            }
            if (module3.get === guardedGet) {
                module3.get = originalGet;
            }
        };
    }
    reportRefusal(refusal) {
        const key = `${refusal.initiator} ${refusal.host ?? "<unparseable>"}`;
        const line = `[PrivateInferenceHttpGuard] refused host=${refusal.host ?? "<unparseable>"} initiator=${refusal.initiator} from=${refusal.stackHint ?? "?"}`;
        if (!this.loggedRefusals.has(key)) {
            this.loggedRefusals.add(key);
            for (const log5 of this.logs){
                log5.warn(`${line} (further refusals of this target are logged at trace level)`);
            }
        } else {
            for (const log5 of this.logs){
                log5.trace(line);
            }
        }
        for (const listener of this.refusalListeners){
            try {
                listener(refusal);
            } catch  {}
        }
    }
    info(message) {
        for (const log5 of this.logs){
            log5.info(message);
        }
    }
};
exports2.PrivateInferenceHttpGuard = PrivateInferenceHttpGuard;
function installPrivateInferenceHttpGuard(options2 = {}) {
    const g2 = globalThis;
    const existing = g2[GUARD_KEY];
    if (existing !== void 0) {
        existing.contribute(options2);
        return existing;
    }
    const guard = new PrivateInferenceHttpGuard(options2);
    g2[GUARD_KEY] = guard;
    guard.install();
    return guard;
}
function getPrivateInferenceHttpGuard() {
    return globalThis[GUARD_KEY];
}
var STATE_RANK = {
    disabled: 0,
    pending: 1,
    enabled: 2
};
function combinePrivateInferenceEnablements(states) {
    let result = "disabled";
    for (const state of states){
        if (STATE_RANK[state] > STATE_RANK[result]) {
            result = state;
        }
    }
    return result;
}
function http2PathHeader(headers) {
    if (Array.isArray(headers)) {
        for(let i = 0; i + 1 < headers.length; i += 2){
            if (headers[i] === ":path" && typeof headers[i + 1] === "string") {
                return headers[i + 1];
            }
        }
        return void 0;
    }
    if (headers !== null && typeof headers === "object") {
        const path64 = headers[":path"];
        return typeof path64 === "string" ? path64 : void 0;
    }
    return void 0;
}
function fetchTarget(input) {
    if (typeof input === "string" || input instanceof URL) {
        return input;
    }
    if (input !== null && typeof input === "object" && "url" in input && typeof input.url === "string") {
        return input.url;
    }
    return void 0;
}
function isRequestOptions(value) {
    return value !== null && typeof value === "object" && !(value instanceof URL);
}
function httpRequestTarget(args, defaultProtocol) {
    const [first, second] = args;
    let base;
    let options2;
    if (typeof first === "string" || first instanceof URL) {
        base = parseUrl(first);
        if (base === void 0) {
            return void 0;
        }
        if (isRequestOptions(second)) {
            options2 = second;
        }
    } else if (isRequestOptions(first)) {
        options2 = first;
    } else {
        return void 0;
    }
    if (options2 === void 0) {
        return base;
    }
    return urlFromRequestOptions(options2, base, defaultProtocol);
}
function urlFromRequestOptions(options2, base, defaultProtocol) {
    if (base === void 0 && typeof options2.href === "string") {
        base = parseUrl(options2.href);
    }
    const protocol = typeof options2.protocol === "string" && options2.protocol.length > 0 ? options2.protocol : base?.protocol ?? defaultProtocol;
    let hostname3;
    let port;
    if (typeof options2.hostname === "string" && options2.hostname.length > 0) {
        hostname3 = options2.hostname;
    } else if (typeof options2.host === "string" && options2.host.length > 0) {
        const split = parseUrl(`${protocol}//${options2.host}`);
        if (split === void 0) {
            return void 0;
        }
        hostname3 = split.hostname;
        port = split.port.length > 0 ? split.port : void 0;
    } else if (base !== void 0) {
        hostname3 = base.hostname;
        port = base.port.length > 0 ? base.port : void 0;
    }
    if (typeof options2.port === "string" || typeof options2.port === "number") {
        port = String(options2.port);
    }
    if (hostname3 === void 0 || hostname3.length === 0) {
        return void 0;
    }
    let path64 = "/";
    if (typeof options2.path === "string") {
        if (!options2.path.startsWith("/")) {
            return void 0;
        }
        path64 = options2.path;
    } else if (base !== void 0) {
        path64 = `${base.pathname}${base.search}`;
    }
    const authority = hostname3.includes(":") ? `[${hostname3}]` : hostname3;
    return parseUrl(`${protocol}//${authority}${port !== void 0 ? `:${port}` : ""}${path64}`);
}
function parseUrl(value) {
    if (value instanceof URL) {
        return value;
    }
    try {
        return new URL(value);
    } catch  {
        return void 0;
    }
}
function hostKeyFromUrl(url2) {
    if (url2 === void 0) {
        return void 0;
    }
    const hostname3 = url2.hostname.toLowerCase().replace(/^\[|\]$/g, "");
    if (hostname3.length === 0) {
        return void 0;
    }
    const port = url2.port.length > 0 ? url2.port : DEFAULT_PORTS[url2.protocol];
    if (port === void 0) {
        return void 0;
    }
    return `${hostname3.replace(/\.$/, "")}:${port}`;
}
function hostnameOf(hostKey) {
    return hostKey.slice(0, hostKey.lastIndexOf(":"));
}
function isLoopbackHostname(hostname3) {
    return hostname3 === "localhost" || hostname3.endsWith(".localhost") || hostname3 === "::1" || /^127\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(hostname3);
}
var OWN_FRAME_PATTERN = /\b(?:PrivateInferenceHttpGuard\.|callerStackHint|guarded(?:Fetch|Request|Get|Connect|SessionRequest))\b/;
function callerStackHint() {
    const stack = new Error().stack;
    if (stack === void 0) {
        return void 0;
    }
    for (const line of stack.split("\n").slice(1)){
        const frame = line.trim();
        if (!frame.startsWith("at ") || OWN_FRAME_PATTERN.test(frame) || frame.includes("node:internal") || frame.includes("node:http") || frame.includes("node:https") || frame.includes("node:http2")) {
            continue;
        }
        const location = /\(([^()]+)\)$/.exec(frame)?.[1] ?? frame.slice(3);
        return location;
    }
    return void 0;
}

return exports2;
}
