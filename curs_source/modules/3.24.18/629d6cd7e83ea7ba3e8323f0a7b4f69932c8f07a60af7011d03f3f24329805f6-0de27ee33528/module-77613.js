"use strict";
const r = require("./module-90996.js"), s = require("./module-47510.js"), o = require("./module-3817.js"), n = require("./module-69598.js"), i = require("./module-16618.js"), a = require("./module-31939.js"), Q = require("./module-8440.js"), g = require("./module-37921.js"), E = require("./module-38238.js"), B = require("./module-55201.js"), { InvalidArgumentError: c } = E, I = require("./module-50990.js"), C = require("./module-60039.js"), h = require("./module-8026.js"), l = require("./module-86140.js"), u = require("./module-76599.js"), d = require("./module-33078.js"), f = require("./module-3685.js"), { getGlobalDispatcher: w, setGlobalDispatcher: y } = require("./module-37922.js"), D = require("./module-31646.js"), p = require("./module-72005.js"), k = require("./module-39935.js");
function R(A) {
    return (e, t, r)=>{
        if ("function" == typeof t && (r = t, t = null), !e || "string" != typeof e && "object" != typeof e && !(e instanceof URL)) throw new c("invalid url");
        if (null != t && "object" != typeof t) throw new c("invalid opts");
        if (t && null != t.path) {
            if ("string" != typeof t.path) throw new c("invalid opts.path");
            let A = t.path;
            t.path.startsWith("/") || (A = `/${A}`), e = new URL(B.parseOrigin(e).origin + A);
        } else t || (t = "object" == typeof e ? e : {}), e = B.parseURL(e);
        const { agent: s, dispatcher: o = w() } = t;
        if (s) throw new c("unsupported opts.agent. Did you mean opts.client?");
        return A.call(o, {
            ...t,
            origin: e.origin,
            path: e.search ? `${e.pathname}${e.search}` : e.pathname,
            method: t.method || (t.body ? "PUT" : "GET")
        }, r);
    };
}
Object.assign(s.prototype, I), module.exports.Dispatcher = s, module.exports.Client = r, module.exports.Pool = o, module.exports.BalancedPool = n, module.exports.Agent = i, module.exports.ProxyAgent = a, module.exports.EnvHttpProxyAgent = Q, module.exports.RetryAgent = g, module.exports.RetryHandler = f, module.exports.DecoratorHandler = D, module.exports.RedirectHandler = p, module.exports.createRedirectInterceptor = k, module.exports.interceptors = {
    redirect: require("./module-35025.js"),
    retry: require("./module-36535.js"),
    dump: require("./module-53103.js"),
    dns: require("./module-12910.js")
}, module.exports.buildConnector = C, module.exports.errors = E, module.exports.util = {
    parseHeaders: B.parseHeaders,
    headerNameToString: B.headerNameToString
}, module.exports.setGlobalDispatcher = y, module.exports.getGlobalDispatcher = w;
const F = require("./module-75319.js").fetch;
module.exports.fetch = async function(A, e = void 0) {
    try {
        return await F(A, e);
    } catch (A) {
        throw A && "object" == typeof A && Error.captureStackTrace(A), A;
    }
}, module.exports.Headers = require("./module-48969.js").Headers, module.exports.Response = require("./module-54768.js").Response, module.exports.Request = require("./module-78078.js").Request, module.exports.FormData = require("./module-41445.js").FormData, module.exports.File = globalThis.File ?? require(4573).File, module.exports.FileReader = require("./module-7884.js").FileReader;
const { setGlobalOrigin: m, getGlobalOrigin: b } = require("./module-12808.js");
module.exports.setGlobalOrigin = m, module.exports.getGlobalOrigin = b;
const { CacheStorage: N } = require("./module-41974.js"), { kConstruct: S } = require("./module-71716.js");
module.exports.caches = new N(S);
const { deleteCookie: M, getCookies: U, getSetCookies: L, setCookie: T } = require("./module-34412.js");
module.exports.deleteCookie = M, module.exports.getCookies = U, module.exports.getSetCookies = L, module.exports.setCookie = T;
const { parseMIMEType: Y, serializeAMimeType: G } = require("./module-52603.js");
module.exports.parseMIMEType = Y, module.exports.serializeAMimeType = G;
const { CloseEvent: J, ErrorEvent: v, MessageEvent: H } = require("./module-63315.js");
module.exports.WebSocket = require("./module-75519.js").WebSocket, module.exports.CloseEvent = J, module.exports.ErrorEvent = v, module.exports.MessageEvent = H, module.exports.request = R(I.request), module.exports.stream = R(I.stream), module.exports.pipeline = R(I.pipeline), module.exports.connect = R(I.connect), module.exports.upgrade = R(I.upgrade), module.exports.MockClient = h, module.exports.MockPool = u, module.exports.MockAgent = l, module.exports.mockErrors = d;
const { EventSource: V } = require("./module-85399.js");
module.exports.EventSource = V;
