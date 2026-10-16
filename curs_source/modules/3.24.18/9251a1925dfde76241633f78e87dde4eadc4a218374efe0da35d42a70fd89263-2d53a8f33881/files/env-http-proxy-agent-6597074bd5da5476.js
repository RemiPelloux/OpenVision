import { require_symbols6 } from "../core/symbols.js";
import { require_agent2 } from "./agent.js";
import { require_dispatcher_base2 } from "./dispatcher-base.js";
import { require_proxy_agent2 } from "./proxy-agent.js";
var __wakaru_require_env_http_proxy_agent_cache;
export function require_env_http_proxy_agent() {
if (__wakaru_require_env_http_proxy_agent_cache) return __wakaru_require_env_http_proxy_agent_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_env_http_proxy_agent_cache = module2;
"use strict";
var DispatcherBase = require_dispatcher_base2();
var { kClose, kDestroy, kClosed, kDestroyed, kDispatch, kNoProxyAgent, kHttpProxyAgent, kHttpsProxyAgent } = require_symbols6();
var ProxyAgent = require_proxy_agent2();
var Agent = require_agent2();
var DEFAULT_PORTS = {
    "http:": 80,
    "https:": 443
};
var experimentalWarned = false;
var EnvHttpProxyAgent = class extends DispatcherBase {
    #noProxyValue = null;
    #noProxyEntries = null;
    #opts = null;
    constructor(opts = {}){
        super();
        this.#opts = opts;
        if (!experimentalWarned) {
            experimentalWarned = true;
            process.emitWarning("EnvHttpProxyAgent is experimental, expect them to change at any time.", {
                code: "UNDICI-EHPA"
            });
        }
        const { httpProxy, httpsProxy, noProxy, ...agentOpts } = opts;
        this[kNoProxyAgent] = new Agent(agentOpts);
        const HTTP_PROXY = httpProxy ?? process.env.http_proxy ?? process.env.HTTP_PROXY;
        if (HTTP_PROXY) {
            this[kHttpProxyAgent] = new ProxyAgent({
                ...agentOpts,
                uri: HTTP_PROXY
            });
        } else {
            this[kHttpProxyAgent] = this[kNoProxyAgent];
        }
        const HTTPS_PROXY = httpsProxy ?? process.env.https_proxy ?? process.env.HTTPS_PROXY;
        if (HTTPS_PROXY) {
            this[kHttpsProxyAgent] = new ProxyAgent({
                ...agentOpts,
                uri: HTTPS_PROXY
            });
        } else {
            this[kHttpsProxyAgent] = this[kHttpProxyAgent];
        }
        this.#parseNoProxy();
    }
    [kDispatch](opts, handler) {
        const url2 = new URL(opts.origin);
        const agent = this.#getProxyAgentForUrl(url2);
        return agent.dispatch(opts, handler);
    }
    async [kClose]() {
        await this[kNoProxyAgent].close();
        if (!this[kHttpProxyAgent][kClosed]) {
            await this[kHttpProxyAgent].close();
        }
        if (!this[kHttpsProxyAgent][kClosed]) {
            await this[kHttpsProxyAgent].close();
        }
    }
    async [kDestroy](err) {
        await this[kNoProxyAgent].destroy(err);
        if (!this[kHttpProxyAgent][kDestroyed]) {
            await this[kHttpProxyAgent].destroy(err);
        }
        if (!this[kHttpsProxyAgent][kDestroyed]) {
            await this[kHttpsProxyAgent].destroy(err);
        }
    }
    #getProxyAgentForUrl(url2) {
        let { protocol, host: hostname3, port } = url2;
        hostname3 = hostname3.replace(/:\d*$/, "").toLowerCase();
        port = Number.parseInt(port, 10) || DEFAULT_PORTS[protocol] || 0;
        if (!this.#shouldProxy(hostname3, port)) {
            return this[kNoProxyAgent];
        }
        if (protocol === "https:") {
            return this[kHttpsProxyAgent];
        }
        return this[kHttpProxyAgent];
    }
    #shouldProxy(hostname3, port) {
        if (this.#noProxyChanged) {
            this.#parseNoProxy();
        }
        if (this.#noProxyEntries.length === 0) {
            return true;
        }
        if (this.#noProxyValue === "*") {
            return false;
        }
        for(let i = 0; i < this.#noProxyEntries.length; i++){
            const entry = this.#noProxyEntries[i];
            if (entry.port && entry.port !== port) {
                continue;
            }
            if (!/^[.*]/.test(entry.hostname)) {
                if (hostname3 === entry.hostname) {
                    return false;
                }
            } else {
                if (hostname3.endsWith(entry.hostname.replace(/^\*/, ""))) {
                    return false;
                }
            }
        }
        return true;
    }
    #parseNoProxy() {
        const noProxyValue = this.#opts.noProxy ?? this.#noProxyEnv;
        const noProxySplit = noProxyValue.split(/[,\s]/);
        const noProxyEntries = [];
        for(let i = 0; i < noProxySplit.length; i++){
            const entry = noProxySplit[i];
            if (!entry) {
                continue;
            }
            const parsed = entry.match(/^(.+):(\d+)$/);
            noProxyEntries.push({
                hostname: (parsed ? parsed[1] : entry).toLowerCase(),
                port: parsed ? Number.parseInt(parsed[2], 10) : 0
            });
        }
        this.#noProxyValue = noProxyValue;
        this.#noProxyEntries = noProxyEntries;
    }
    get #noProxyChanged() {
        if (this.#opts.noProxy !== void 0) {
            return false;
        }
        return this.#noProxyValue !== this.#noProxyEnv;
    }
    get #noProxyEnv() {
        return process.env.no_proxy ?? process.env.NO_PROXY ?? "";
    }
};
module2.exports = EnvHttpProxyAgent;

return module2.exports;
}
