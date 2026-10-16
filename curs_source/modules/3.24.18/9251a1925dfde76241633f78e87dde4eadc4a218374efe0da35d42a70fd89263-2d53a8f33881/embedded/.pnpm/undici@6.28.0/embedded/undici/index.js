import { require_api2 } from "./lib/api/index.js";
import { require_connect3 } from "./lib/core/connect.js";
import { require_errors2 } from "./lib/core/errors.js";
import { require_util8 } from "./lib/core/util.js";
import { require_agent2 } from "./lib/dispatcher/agent.js";
import { require_balanced_pool2 } from "./lib/dispatcher/balanced-pool.js";
import { require_client2 } from "./lib/dispatcher/client.js";
import { require_dispatcher2 } from "./lib/dispatcher/dispatcher.js";
import { require_env_http_proxy_agent } from "./lib/dispatcher/env-http-proxy-agent.js";
import { require_pool2 } from "./lib/dispatcher/pool.js";
import { require_proxy_agent2 } from "./lib/dispatcher/proxy-agent.js";
import { require_retry_agent } from "./lib/dispatcher/retry-agent.js";
import { require_global4 } from "./lib/global.js";
import { require_decorator_handler } from "./lib/handler/decorator-handler.js";
import { require_redirect_handler } from "./lib/handler/redirect-handler.js";
import { require_retry_handler } from "./lib/handler/retry-handler.js";
import { require_dns } from "./lib/interceptor/dns.js";
import { require_dump } from "./lib/interceptor/dump.js";
import { require_redirect_interceptor } from "./lib/interceptor/redirect-interceptor.js";
import { require_redirect } from "./lib/interceptor/redirect.js";
import { require_retry2 } from "./lib/interceptor/retry.js";
import { require_mock_agent2 } from "./lib/mock/mock-agent.js";
import { require_mock_client2 } from "./lib/mock/mock-client.js";
import { require_mock_errors2 } from "./lib/mock/mock-errors.js";
import { require_mock_pool2 } from "./lib/mock/mock-pool.js";
import { require_cachestorage2 } from "./lib/web/cache/cachestorage.js";
import { require_symbols9 } from "./lib/web/cache/symbols.js";
import { require_cookies2 } from "./lib/web/cookies/index.js";
import { require_eventsource } from "./lib/web/eventsource/eventsource.js";
import { require_data_url } from "./lib/web/fetch/data-url.js";
import { require_formdata2 } from "./lib/web/fetch/formdata.js";
import { require_global3 } from "./lib/web/fetch/global.js";
import { require_headers5 } from "./lib/web/fetch/headers.js";
import { require_fetch2 } from "./lib/web/fetch/index.js";
import { require_request4 } from "./lib/web/fetch/request.js";
import { require_response2 } from "./lib/web/fetch/response.js";
import { require_filereader2 } from "./lib/web/fileapi/filereader.js";
import { require_events2 } from "./lib/web/websocket/events.js";
import { require_websocket3 } from "./lib/web/websocket/websocket.js";
var __wakaru_require_undici2_cache;
export function require_undici2() {
if (__wakaru_require_undici2_cache) return __wakaru_require_undici2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_undici2_cache = module2;
"use strict";
var Client2 = require_client2();
var Dispatcher = require_dispatcher2();
var Pool = require_pool2();
var BalancedPool = require_balanced_pool2();
var Agent = require_agent2();
var ProxyAgent = require_proxy_agent2();
var EnvHttpProxyAgent = require_env_http_proxy_agent();
var RetryAgent = require_retry_agent();
var errors = require_errors2();
var util2 = require_util8();
var { InvalidArgumentError: InvalidArgumentError3 } = errors;
var api = require_api2();
var buildConnector = require_connect3();
var MockClient = require_mock_client2();
var MockAgent = require_mock_agent2();
var MockPool = require_mock_pool2();
var mockErrors = require_mock_errors2();
var RetryHandler = require_retry_handler();
var { getGlobalDispatcher, setGlobalDispatcher } = require_global4();
var DecoratorHandler = require_decorator_handler();
var RedirectHandler = require_redirect_handler();
var createRedirectInterceptor = require_redirect_interceptor();
Object.assign(Dispatcher.prototype, api);
module2.exports.Dispatcher = Dispatcher;
module2.exports.Client = Client2;
module2.exports.Pool = Pool;
module2.exports.BalancedPool = BalancedPool;
module2.exports.Agent = Agent;
module2.exports.ProxyAgent = ProxyAgent;
module2.exports.EnvHttpProxyAgent = EnvHttpProxyAgent;
module2.exports.RetryAgent = RetryAgent;
module2.exports.RetryHandler = RetryHandler;
module2.exports.DecoratorHandler = DecoratorHandler;
module2.exports.RedirectHandler = RedirectHandler;
module2.exports.createRedirectInterceptor = createRedirectInterceptor;
module2.exports.interceptors = {
    redirect: require_redirect(),
    retry: require_retry2(),
    dump: require_dump(),
    dns: require_dns()
};
module2.exports.buildConnector = buildConnector;
module2.exports.errors = errors;
module2.exports.util = {
    parseHeaders: util2.parseHeaders,
    headerNameToString: util2.headerNameToString
};
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
var fetchImpl = require_fetch2().fetch;
module2.exports.fetch = async function fetch2(init, options2 = void 0) {
    try {
        return await fetchImpl(init, options2);
    } catch (err) {
        if (err && typeof err === "object") {
            Error.captureStackTrace(err);
        }
        throw err;
    }
};
module2.exports.Headers = require_headers5().Headers;
module2.exports.Response = require_response2().Response;
module2.exports.Request = require_request4().Request;
module2.exports.FormData = require_formdata2().FormData;
module2.exports.File = globalThis.File ?? require("node:buffer").File;
module2.exports.FileReader = require_filereader2().FileReader;
var { setGlobalOrigin, getGlobalOrigin } = require_global3();
module2.exports.setGlobalOrigin = setGlobalOrigin;
module2.exports.getGlobalOrigin = getGlobalOrigin;
var { CacheStorage } = require_cachestorage2();
var { kConstruct } = require_symbols9();
module2.exports.caches = new CacheStorage(kConstruct);
var { deleteCookie, getCookies, getSetCookies, setCookie } = require_cookies2();
module2.exports.deleteCookie = deleteCookie;
module2.exports.getCookies = getCookies;
module2.exports.getSetCookies = getSetCookies;
module2.exports.setCookie = setCookie;
var { parseMIMEType, serializeAMimeType } = require_data_url();
module2.exports.parseMIMEType = parseMIMEType;
module2.exports.serializeAMimeType = serializeAMimeType;
var { CloseEvent, ErrorEvent: ErrorEvent2, MessageEvent: MessageEvent2 } = require_events2();
module2.exports.WebSocket = require_websocket3().WebSocket;
module2.exports.CloseEvent = CloseEvent;
module2.exports.ErrorEvent = ErrorEvent2;
module2.exports.MessageEvent = MessageEvent2;
module2.exports.request = makeDispatcher(api.request);
module2.exports.stream = makeDispatcher(api.stream);
module2.exports.pipeline = makeDispatcher(api.pipeline);
module2.exports.connect = makeDispatcher(api.connect);
module2.exports.upgrade = makeDispatcher(api.upgrade);
module2.exports.MockClient = MockClient;
module2.exports.MockPool = MockPool;
module2.exports.MockAgent = MockAgent;
module2.exports.mockErrors = mockErrors;
var { EventSource: EventSource2 } = require_eventsource();
module2.exports.EventSource = EventSource2;

return module2.exports;
}
