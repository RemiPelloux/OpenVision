import { require_connect3 } from "../core/connect.js";
import { require_errors2 } from "../core/errors.js";
import { require_symbols6 } from "../core/symbols.js";
import { require_agent2 } from "./agent.js";
import { require_client2 } from "./client.js";
import { require_dispatcher_base2 } from "./dispatcher-base.js";
import { require_pool2 } from "./pool.js";
var __wakaru_require_proxy_agent2_cache;
export function require_proxy_agent2() {
if (__wakaru_require_proxy_agent2_cache) return __wakaru_require_proxy_agent2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_proxy_agent2_cache = module2;
"use strict";
var { kProxy, kClose, kDestroy, kDispatch, kInterceptors } = require_symbols6();
var { URL: URL2 } = require("node:url");
var Agent = require_agent2();
var Pool = require_pool2();
var DispatcherBase = require_dispatcher_base2();
var { InvalidArgumentError: InvalidArgumentError3, RequestAbortedError, SecureProxyConnectionError } = require_errors2();
var buildConnector = require_connect3();
var Client2 = require_client2();
var kAgent = Symbol("proxy agent");
var kClient = Symbol("proxy client");
var kProxyHeaders = Symbol("proxy headers");
var kRequestTls = Symbol("request tls settings");
var kProxyTls = Symbol("proxy tls settings");
var kConnectEndpoint = Symbol("connect endpoint function");
var kTunnelProxy = Symbol("tunnel proxy");
function defaultProtocolPort(protocol) {
    return protocol === "https:" ? 443 : 80;
}
function defaultFactory(origin, opts) {
    return new Pool(origin, opts);
}
var noop5 = ()=>{};
function defaultAgentFactory(origin, opts) {
    if (opts.connections === 1) {
        return new Client2(origin, opts);
    }
    return new Pool(origin, opts);
}
var Http1ProxyWrapper = class extends DispatcherBase {
    #client;
    constructor(proxyUrl2, { headers = {}, connect: connect3, factory }){
        super();
        if (!proxyUrl2) {
            throw new InvalidArgumentError3("Proxy URL is mandatory");
        }
        this[kProxyHeaders] = headers;
        if (factory) {
            this.#client = factory(proxyUrl2, {
                connect: connect3
            });
        } else {
            this.#client = new Client2(proxyUrl2, {
                connect: connect3
            });
        }
    }
    [kDispatch](opts, handler) {
        const onHeaders = handler.onHeaders;
        handler.onHeaders = function(statusCode, data, resume) {
            if (statusCode === 407) {
                if (typeof handler.onError === "function") {
                    handler.onError(new InvalidArgumentError3("Proxy Authentication Required (407)"));
                }
                return;
            }
            if (onHeaders) onHeaders.call(this, statusCode, data, resume);
        };
        const { origin, path: path64 = "/", headers = {} } = opts;
        opts.path = origin + path64;
        if (!("host" in headers) && !("Host" in headers)) {
            const { host } = new URL2(origin);
            headers.host = host;
        }
        opts.headers = {
            ...this[kProxyHeaders],
            ...headers
        };
        return this.#client[kDispatch](opts, handler);
    }
    async [kClose]() {
        return this.#client.close();
    }
    async [kDestroy](err) {
        return this.#client.destroy(err);
    }
};
var ProxyAgent = class extends DispatcherBase {
    constructor(opts){
        super();
        if (!opts || typeof opts === "object" && !(opts instanceof URL2) && !opts.uri) {
            throw new InvalidArgumentError3("Proxy uri is mandatory");
        }
        const { clientFactory = defaultFactory } = opts;
        if (typeof clientFactory !== "function") {
            throw new InvalidArgumentError3("Proxy opts.clientFactory must be a function.");
        }
        const { proxyTunnel = true } = opts;
        const url2 = this.#getUrl(opts);
        const { href, origin, port, protocol, username, password, hostname: proxyHostname } = url2;
        this[kProxy] = {
            uri: href,
            protocol
        };
        this[kInterceptors] = opts.interceptors?.ProxyAgent && Array.isArray(opts.interceptors.ProxyAgent) ? opts.interceptors.ProxyAgent : [];
        this[kRequestTls] = opts.requestTls;
        this[kProxyTls] = opts.proxyTls;
        this[kProxyHeaders] = opts.headers || {};
        this[kTunnelProxy] = proxyTunnel;
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
        const agentFactory = opts.factory || defaultAgentFactory;
        const factory = (origin2, options2)=>{
            const { protocol: protocol2 } = new URL2(origin2);
            if (!this[kTunnelProxy] && protocol2 === "http:" && this[kProxy].protocol === "http:") {
                return new Http1ProxyWrapper(this[kProxy].uri, {
                    headers: this[kProxyHeaders],
                    connect: connect3,
                    factory: agentFactory
                });
            }
            return agentFactory(origin2, options2);
        };
        this[kClient] = clientFactory(url2, {
            connect: connect3
        });
        this[kAgent] = new Agent({
            ...opts,
            factory,
            connect: async (opts2, callback)=>{
                let requestedPath = opts2.host;
                if (!opts2.port) {
                    requestedPath += `:${defaultProtocolPort(opts2.protocol)}`;
                }
                try {
                    const { socket, statusCode } = await this[kClient].connect({
                        origin,
                        port,
                        path: requestedPath,
                        signal: opts2.signal,
                        headers: {
                            ...this[kProxyHeaders],
                            host: opts2.host
                        },
                        servername: this[kProxyTls]?.servername || proxyHostname
                    });
                    if (statusCode !== 200) {
                        socket.on("error", noop5).destroy();
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
                    if (err.code === "ERR_TLS_CERT_ALTNAME_INVALID") {
                        callback(new SecureProxyConnectionError(err));
                    } else {
                        callback(err);
                    }
                }
            }
        });
    }
    dispatch(opts, handler) {
        const headers = buildHeaders(opts.headers);
        throwIfProxyAuthIsSent(headers);
        if (headers && !("host" in headers) && !("Host" in headers)) {
            const { host } = new URL2(opts.origin);
            headers.host = host;
        }
        return this[kAgent].dispatch({
            ...opts,
            headers
        }, handler);
    }
    #getUrl(opts) {
        if (typeof opts === "string") {
            return new URL2(opts);
        } else if (opts instanceof URL2) {
            return opts;
        } else {
            return new URL2(opts.uri);
        }
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
