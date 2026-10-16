import { require_agent } from "./agent.js";
import { require_connect2 } from "./core/connect.js";
import { require_errors } from "./core/errors.js";
import { require_symbols } from "./core/symbols.js";
import { require_dispatcher_base } from "./dispatcher-base.js";
import { require_pool } from "./pool.js";
var __wakaru_require_proxy_agent_cache;
export function require_proxy_agent() {
if (__wakaru_require_proxy_agent_cache) return __wakaru_require_proxy_agent_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_proxy_agent_cache = module2;
"use strict";
var { kProxy, kClose, kDestroy, kInterceptors } = require_symbols();
var { URL: URL2 } = require("url");
var Agent = require_agent();
var Pool = require_pool();
var DispatcherBase = require_dispatcher_base();
var { InvalidArgumentError: InvalidArgumentError3, RequestAbortedError } = require_errors();
var buildConnector = require_connect2();
var kAgent = Symbol("proxy agent");
var kClient = Symbol("proxy client");
var kProxyHeaders = Symbol("proxy headers");
var kRequestTls = Symbol("request tls settings");
var kProxyTls = Symbol("proxy tls settings");
var kConnectEndpoint = Symbol("connect endpoint function");
function defaultProtocolPort(protocol) {
    return protocol === "https:" ? 443 : 80;
}
function buildProxyOptions(opts) {
    if (typeof opts === "string") {
        opts = {
            uri: opts
        };
    }
    if (!opts || !opts.uri) {
        throw new InvalidArgumentError3("Proxy opts.uri is mandatory");
    }
    return {
        uri: opts.uri,
        protocol: opts.protocol || "https"
    };
}
function defaultFactory(origin, opts) {
    return new Pool(origin, opts);
}
var ProxyAgent = class extends DispatcherBase {
    constructor(opts){
        super(opts);
        this[kProxy] = buildProxyOptions(opts);
        this[kAgent] = new Agent(opts);
        this[kInterceptors] = opts.interceptors && opts.interceptors.ProxyAgent && Array.isArray(opts.interceptors.ProxyAgent) ? opts.interceptors.ProxyAgent : [];
        if (typeof opts === "string") {
            opts = {
                uri: opts
            };
        }
        if (!opts || !opts.uri) {
            throw new InvalidArgumentError3("Proxy opts.uri is mandatory");
        }
        const { clientFactory = defaultFactory } = opts;
        if (typeof clientFactory !== "function") {
            throw new InvalidArgumentError3("Proxy opts.clientFactory must be a function.");
        }
        this[kRequestTls] = opts.requestTls;
        this[kProxyTls] = opts.proxyTls;
        this[kProxyHeaders] = opts.headers || {};
        const resolvedUrl = new URL2(opts.uri);
        const { origin, port, host, username, password } = resolvedUrl;
        if (opts.auth && opts.token) {
            throw new InvalidArgumentError3("opts.auth cannot be used in combination with opts.token");
        } else if (opts.auth) {
            this[kProxyHeaders]["proxy-authorization"] = `Basic ${opts.auth}`;
        } else if (opts.token) {
            this[kProxyHeaders]["proxy-authorization"] = opts.token;
        } else if (username && password) {
            this[kProxyHeaders]["proxy-authorization"] = `Basic ${Buffer.from(`${decodeURIComponent(username)}:${decodeURIComponent(password)}`).toString("base64")}`;
        }
        const connect3 = buildConnector({
            ...opts.proxyTls
        });
        this[kConnectEndpoint] = buildConnector({
            ...opts.requestTls
        });
        this[kClient] = clientFactory(resolvedUrl, {
            connect: connect3
        });
        this[kAgent] = new Agent({
            ...opts,
            connect: async (opts2, callback)=>{
                let requestedHost = opts2.host;
                if (!opts2.port) {
                    requestedHost += `:${defaultProtocolPort(opts2.protocol)}`;
                }
                try {
                    const { socket, statusCode } = await this[kClient].connect({
                        origin,
                        port,
                        path: requestedHost,
                        signal: opts2.signal,
                        headers: {
                            ...this[kProxyHeaders],
                            host
                        }
                    });
                    if (statusCode !== 200) {
                        socket.on("error", ()=>{}).destroy();
                        callback(new RequestAbortedError(`Proxy response (${statusCode}) !== 200 when HTTP Tunneling`));
                    }
                    if (opts2.protocol !== "https:") {
                        callback(null, socket);
                        return;
                    }
                    let servername;
                    if (this[kRequestTls]) {
                        servername = this[kRequestTls].servername;
                    } else {
                        servername = opts2.servername;
                    }
                    this[kConnectEndpoint]({
                        ...opts2,
                        servername,
                        httpSocket: socket
                    }, callback);
                } catch (err) {
                    callback(err);
                }
            }
        });
    }
    dispatch(opts, handler) {
        const { host } = new URL2(opts.origin);
        const headers = buildHeaders(opts.headers);
        throwIfProxyAuthIsSent(headers);
        return this[kAgent].dispatch({
            ...opts,
            headers: {
                ...headers,
                host
            }
        }, handler);
    }
    async [kClose]() {
        await this[kAgent].close();
        await this[kClient].close();
    }
    async [kDestroy]() {
        await this[kAgent].destroy();
        await this[kClient].destroy();
    }
};
function buildHeaders(headers) {
    if (Array.isArray(headers)) {
        const headersPair = {};
        for(let i = 0; i < headers.length; i += 2){
            headersPair[headers[i]] = headers[i + 1];
        }
        return headersPair;
    }
    return headers;
}
function throwIfProxyAuthIsSent(headers) {
    const existProxyAuth = headers && Object.keys(headers).find((key)=>key.toLowerCase() === "proxy-authorization");
    if (existProxyAuth) {
        throw new InvalidArgumentError3("Proxy-Authorization should be sent in ProxyAgent constructor");
    }
}
module2.exports = ProxyAgent;

return module2.exports;
}
