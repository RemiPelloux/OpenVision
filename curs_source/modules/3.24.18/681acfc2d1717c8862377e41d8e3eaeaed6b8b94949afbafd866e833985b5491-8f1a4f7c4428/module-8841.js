"use strict";
const { kProxy: n, kClose: r, kDestroy: o, kInterceptors: s } = require("./module-8832.js"), { URL: i } = require("./module-7016.js"), a = require("./module-568.js"), c = require("./module-4003.js"), l = require("./module-9792.js"), { InvalidArgumentError: u, RequestAbortedError: g } = require("./module-7902.js"), E = require("./module-3991.js"), h = Symbol("proxy agent"), d = Symbol("proxy client"), I = Symbol("proxy headers"), B = Symbol("request tls settings"), Q = Symbol("proxy tls settings"), f = Symbol("connect endpoint function");
function C(e, t) {
    return new c(e, t);
}
module.exports = class extends l {
    constructor(e){
        if (super(e), this[n] = function(e) {
            if ("string" == typeof e && (e = {
                uri: e
            }), !e || !e.uri) throw new u("Proxy opts.uri is mandatory");
            return {
                uri: e.uri,
                protocol: e.protocol || "https"
            };
        }(e), this[h] = new a(e), this[s] = e.interceptors && e.interceptors.ProxyAgent && Array.isArray(e.interceptors.ProxyAgent) ? e.interceptors.ProxyAgent : [], "string" == typeof e && (e = {
            uri: e
        }), !e || !e.uri) throw new u("Proxy opts.uri is mandatory");
        const { clientFactory: t = C } = e;
        if ("function" != typeof t) throw new u("Proxy opts.clientFactory must be a function.");
        this[B] = e.requestTls, this[Q] = e.proxyTls, this[I] = e.headers || {};
        const A = new i(e.uri), { origin: r, port: o, host: c, username: l, password: p } = A;
        if (e.auth && e.token) throw new u("opts.auth cannot be used in combination with opts.token");
        e.auth ? this[I]["proxy-authorization"] = `Basic ${e.auth}` : e.token ? this[I]["proxy-authorization"] = e.token : l && p && (this[I]["proxy-authorization"] = `Basic ${Buffer.from(`${decodeURIComponent(l)}:${decodeURIComponent(p)}`).toString("base64")}`);
        const m = E({
            ...e.proxyTls
        });
        this[f] = E({
            ...e.requestTls
        }), this[d] = t(A, {
            connect: m
        }), this[h] = new a({
            ...e,
            connect: async (e, t)=>{
                let A = e.host;
                e.port || (A += ":" + ("https:" === e.protocol ? 443 : 80));
                try {
                    const { socket: n, statusCode: s } = await this[d].connect({
                        origin: r,
                        port: o,
                        path: A,
                        signal: e.signal,
                        headers: {
                            ...this[I],
                            host: c
                        }
                    });
                    if (200 !== s && (n.on("error", ()=>{}).destroy(), t(new g(`Proxy response (${s}) !== 200 when HTTP Tunneling`))), "https:" !== e.protocol) return void t(null, n);
                    let i;
                    i = this[B] ? this[B].servername : e.servername, this[f]({
                        ...e,
                        servername: i,
                        httpSocket: n
                    }, t);
                } catch (e) {
                    t(e);
                }
            }
        });
    }
    dispatch(e, t) {
        const { host: A } = new i(e.origin), n = function(e) {
            if (Array.isArray(e)) {
                const t = {};
                for(let A = 0; A < e.length; A += 2)t[e[A]] = e[A + 1];
                return t;
            }
            return e;
        }(e.headers);
        return function(e) {
            const t = e && Object.keys(e).find((e)=>"proxy-authorization" === e.toLowerCase());
            if (t) throw new u("Proxy-Authorization should be sent in ProxyAgent constructor");
        }(n), this[h].dispatch({
            ...e,
            headers: {
                ...n,
                host: A
            }
        }, t);
    }
    async [r]() {
        await this[h].close(), await this[d].close();
    }
    async [o]() {
        await this[h].destroy(), await this[d].destroy();
    }
};
