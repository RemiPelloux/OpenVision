"use strict";
const { kProxy: n, kClose: r, kDestroy: o, kInterceptors: s } = require("./module-8832.js"), { URL: a } = require("./module-7016.js"), i = require("./module-568.js"), c = require("./module-4003.js"), l = require("./module-9792.js"), { InvalidArgumentError: g, RequestAbortedError: E } = require("./module-7902.js"), u = require("./module-3991.js"), d = Symbol("proxy agent"), I = Symbol("proxy client"), h = Symbol("proxy headers"), Q = Symbol("request tls settings"), m = Symbol("proxy tls settings"), C = Symbol("connect endpoint function");
function B(e, A) {
    return new c(e, A);
}
module.exports = class extends l {
    constructor(e){
        if (super(e), this[n] = function(e) {
            if ("string" == typeof e && (e = {
                uri: e
            }), !e || !e.uri) throw new g("Proxy opts.uri is mandatory");
            return {
                uri: e.uri,
                protocol: e.protocol || "https"
            };
        }(e), this[d] = new i(e), this[s] = e.interceptors && e.interceptors.ProxyAgent && Array.isArray(e.interceptors.ProxyAgent) ? e.interceptors.ProxyAgent : [], "string" == typeof e && (e = {
            uri: e
        }), !e || !e.uri) throw new g("Proxy opts.uri is mandatory");
        const { clientFactory: A = B } = e;
        if ("function" != typeof A) throw new g("Proxy opts.clientFactory must be a function.");
        this[Q] = e.requestTls, this[m] = e.proxyTls, this[h] = e.headers || {};
        const t = new a(e.uri), { origin: r, port: o, host: c, username: l, password: p } = t;
        if (e.auth && e.token) throw new g("opts.auth cannot be used in combination with opts.token");
        e.auth ? this[h]["proxy-authorization"] = `Basic ${e.auth}` : e.token ? this[h]["proxy-authorization"] = e.token : l && p && (this[h]["proxy-authorization"] = `Basic ${Buffer.from(`${decodeURIComponent(l)}:${decodeURIComponent(p)}`).toString("base64")}`);
        const f = u({
            ...e.proxyTls
        });
        this[C] = u({
            ...e.requestTls
        }), this[I] = A(t, {
            connect: f
        }), this[d] = new i({
            ...e,
            connect: async (e, A)=>{
                let t = e.host;
                e.port || (t += ":" + ("https:" === e.protocol ? 443 : 80));
                try {
                    const { socket: n, statusCode: s } = await this[I].connect({
                        origin: r,
                        port: o,
                        path: t,
                        signal: e.signal,
                        headers: {
                            ...this[h],
                            host: c
                        }
                    });
                    if (200 !== s && (n.on("error", ()=>{}).destroy(), A(new E(`Proxy response (${s}) !== 200 when HTTP Tunneling`))), "https:" !== e.protocol) return void A(null, n);
                    let a;
                    a = this[Q] ? this[Q].servername : e.servername, this[C]({
                        ...e,
                        servername: a,
                        httpSocket: n
                    }, A);
                } catch (e) {
                    A(e);
                }
            }
        });
    }
    dispatch(e, A) {
        const { host: t } = new a(e.origin), n = function(e) {
            if (Array.isArray(e)) {
                const A = {};
                for(let t = 0; t < e.length; t += 2)A[e[t]] = e[t + 1];
                return A;
            }
            return e;
        }(e.headers);
        return function(e) {
            const A = e && Object.keys(e).find((e)=>"proxy-authorization" === e.toLowerCase());
            if (A) throw new g("Proxy-Authorization should be sent in ProxyAgent constructor");
        }(n), this[d].dispatch({
            ...e,
            headers: {
                ...n,
                host: t
            }
        }, A);
    }
    async [r]() {
        await this[d].close(), await this[I].close();
    }
    async [o]() {
        await this[d].destroy(), await this[I].destroy();
    }
};
