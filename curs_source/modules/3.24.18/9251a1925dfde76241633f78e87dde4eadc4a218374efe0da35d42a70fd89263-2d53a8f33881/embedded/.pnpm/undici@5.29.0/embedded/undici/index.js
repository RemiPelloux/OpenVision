import { require_agent } from "./lib/agent.js";
import { require_api } from "./lib/api/index.js";
import { require_balanced_pool } from "./lib/balanced-pool.js";
import { require_cachestorage } from "./lib/cache/cachestorage.js";
import { require_symbols4 } from "./lib/cache/symbols.js";
import { require_client } from "./lib/client.js";
import { require_cookies } from "./lib/cookies/index.js";
import { require_connect2 } from "./lib/core/connect.js";
import { require_errors } from "./lib/core/errors.js";
import { require_util } from "./lib/core/util.js";
import { require_dispatcher } from "./lib/dispatcher.js";
import { require_dataURL } from "./lib/fetch/dataURL.js";
import { require_file } from "./lib/fetch/file.js";
import { require_formdata } from "./lib/fetch/formdata.js";
import { require_global } from "./lib/fetch/global.js";
import { require_headers } from "./lib/fetch/headers.js";
import { require_fetch } from "./lib/fetch/index.js";
import { require_request2 } from "./lib/fetch/request.js";
import { require_response } from "./lib/fetch/response.js";
import { require_filereader } from "./lib/fileapi/filereader.js";
import { require_global2 } from "./lib/global.js";
import { require_DecoratorHandler } from "./lib/handler/DecoratorHandler.js";
import { require_RedirectHandler } from "./lib/handler/RedirectHandler.js";
import { require_RetryHandler } from "./lib/handler/RetryHandler.js";
import { require_redirectInterceptor } from "./lib/interceptor/redirectInterceptor.js";
import { require_mock_agent } from "./lib/mock/mock-agent.js";
import { require_mock_client } from "./lib/mock/mock-client.js";
import { require_mock_errors } from "./lib/mock/mock-errors.js";
import { require_mock_pool } from "./lib/mock/mock-pool.js";
import { require_pool } from "./lib/pool.js";
import { require_proxy_agent } from "./lib/proxy-agent.js";
import { require_websocket } from "./lib/websocket/websocket.js";
var __wakaru_require_undici_cache;
export function require_undici() {
if (__wakaru_require_undici_cache) return __wakaru_require_undici_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_undici_cache = module2;
"use strict";
var Client2 = require_client();
var Dispatcher = require_dispatcher();
var errors = require_errors();
var Pool = require_pool();
var BalancedPool = require_balanced_pool();
var Agent = require_agent();
var util2 = require_util();
var { InvalidArgumentError: InvalidArgumentError3 } = errors;
var api = require_api();
var buildConnector = require_connect2();
var MockClient = require_mock_client();
var MockAgent = require_mock_agent();
var MockPool = require_mock_pool();
var mockErrors = require_mock_errors();
var ProxyAgent = require_proxy_agent();
var RetryHandler = require_RetryHandler();
var { getGlobalDispatcher, setGlobalDispatcher } = require_global2();
var DecoratorHandler = require_DecoratorHandler();
var RedirectHandler = require_RedirectHandler();
var createRedirectInterceptor = require_redirectInterceptor();
var hasCrypto;
try {
    require("crypto");
    hasCrypto = true;
} catch  {
    hasCrypto = false;
}
Object.assign(Dispatcher.prototype, api);
module2.exports.Dispatcher = Dispatcher;
module2.exports.Client = Client2;
module2.exports.Pool = Pool;
module2.exports.BalancedPool = BalancedPool;
module2.exports.Agent = Agent;
module2.exports.ProxyAgent = ProxyAgent;
module2.exports.RetryHandler = RetryHandler;
module2.exports.DecoratorHandler = DecoratorHandler;
module2.exports.RedirectHandler = RedirectHandler;
module2.exports.createRedirectInterceptor = createRedirectInterceptor;
module2.exports.buildConnector = buildConnector;
module2.exports.errors = errors;
function makeDispatcher(fn) {
    return (url2, opts, handler)=>{
        if (typeof opts === "function") {
            handler = opts;
            opts = null;
        }
        if (!url2 || typeof url2 !== "string" && typeof url2 !== "object" && !(url2 instanceof URL)) {
            throw new InvalidArgumentError3("invalid url");
        }
        if (opts != null && typeof opts !== "object") {
            throw new InvalidArgumentError3("invalid opts");
        }
        if (opts && opts.path != null) {
            if (typeof opts.path !== "string") {
                throw new InvalidArgumentError3("invalid opts.path");
            }
            let path64 = opts.path;
            if (!opts.path.startsWith("/")) {
                path64 = `/${path64}`;
            }
            url2 = new URL(util2.parseOrigin(url2).origin + path64);
        } else {
            if (!opts) {
                opts = typeof url2 === "object" ? url2 : {};
            }
            url2 = util2.parseURL(url2);
        }
        const { agent, dispatcher = getGlobalDispatcher() } = opts;
        if (agent) {
            throw new InvalidArgumentError3("unsupported opts.agent. Did you mean opts.client?");
        }
        return fn.call(dispatcher, {
            ...opts,
            origin: url2.origin,
            path: url2.search ? `${url2.pathname}${url2.search}` : url2.pathname,
            method: opts.method || (opts.body ? "PUT" : "GET")
        }, handler);
    };
}
module2.exports.setGlobalDispatcher = setGlobalDispatcher;
module2.exports.getGlobalDispatcher = getGlobalDispatcher;
if (util2.nodeMajor > 16 || util2.nodeMajor === 16 && util2.nodeMinor >= 8) {
    let fetchImpl = null;
    module2.exports.fetch = async function fetch2(resource) {
        if (!fetchImpl) {
            fetchImpl = require_fetch().fetch;
        }
        try {
            return await fetchImpl(...arguments);
        } catch (err) {
            if (typeof err === "object") {
                Error.captureStackTrace(err, this);
            }
            throw err;
        }
    };
    module2.exports.Headers = require_headers().Headers;
    module2.exports.Response = require_response().Response;
    module2.exports.Request = require_request2().Request;
    module2.exports.FormData = require_formdata().FormData;
    module2.exports.File = require_file().File;
    module2.exports.FileReader = require_filereader().FileReader;
    const { setGlobalOrigin, getGlobalOrigin } = require_global();
    module2.exports.setGlobalOrigin = setGlobalOrigin;
    module2.exports.getGlobalOrigin = getGlobalOrigin;
    const { CacheStorage } = require_cachestorage();
    const { kConstruct } = require_symbols4();
    module2.exports.caches = new CacheStorage(kConstruct);
}
if (util2.nodeMajor >= 16) {
    const { deleteCookie, getCookies, getSetCookies, setCookie } = require_cookies();
    module2.exports.deleteCookie = deleteCookie;
    module2.exports.getCookies = getCookies;
    module2.exports.getSetCookies = getSetCookies;
    module2.exports.setCookie = setCookie;
    const { parseMIMEType, serializeAMimeType } = require_dataURL();
    module2.exports.parseMIMEType = parseMIMEType;
    module2.exports.serializeAMimeType = serializeAMimeType;
}
if (util2.nodeMajor >= 18 && hasCrypto) {
    const { WebSocket } = require_websocket();
    module2.exports.WebSocket = WebSocket;
}
module2.exports.request = makeDispatcher(api.request);
module2.exports.stream = makeDispatcher(api.stream);
module2.exports.pipeline = makeDispatcher(api.pipeline);
module2.exports.connect = makeDispatcher(api.connect);
module2.exports.upgrade = makeDispatcher(api.upgrade);
module2.exports.MockClient = MockClient;
module2.exports.MockPool = MockPool;
module2.exports.MockAgent = MockAgent;
module2.exports.mockErrors = mockErrors;

return module2.exports;
}
