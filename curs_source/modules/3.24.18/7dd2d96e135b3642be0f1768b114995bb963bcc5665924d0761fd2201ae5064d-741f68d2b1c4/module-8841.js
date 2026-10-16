"use strict";
const { kProxy: a, kClose: s, kDestroy: o, kInterceptors: r } = require("./module-8832.js"), { URL: i } = require("./module-7016.js"), A = require("./module-568.js"), c = require("./module-4003.js"), l = require("./module-9792.js"), { InvalidArgumentError: d, RequestAbortedError: m } = require("./module-7902.js"), u = require("./module-3991.js"), g = Symbol("proxy agent"), p = Symbol("proxy client"), E = Symbol("proxy headers"), h = Symbol("request tls settings"), T = Symbol("proxy tls settings"), k = Symbol("connect endpoint function");
function f(e, n) {
    return new c(e, n);
}
module.exports = class extends l {
    constructor(e){
        if (super(e), this[a] = function(e) {
            if ("string" == typeof e && (e = {
                uri: e
            }), !e || !e.uri) throw new d("Proxy opts.uri is mandatory");
            return {
                uri: e.uri,
                protocol: e.protocol || "https"
            };
        }(e), this[g] = new A(e), this[r] = e.interceptors && e.interceptors.ProxyAgent && Array.isArray(e.interceptors.ProxyAgent) ? e.interceptors.ProxyAgent : [], "string" == typeof e && (e = {
            uri: e
        }), !e || !e.uri) throw new d("Proxy opts.uri is mandatory");
        const { clientFactory: n = f } = e;
        if ("function" != typeof n) throw new d("Proxy opts.clientFactory must be a function.");
        this[h] = e.requestTls, this[T] = e.proxyTls, this[E] = e.headers || {};
        const t = new i(e.uri), { origin: s, port: o, host: c, username: l, password: _ } = t;
        if (e.auth && e.token) throw new d("opts.auth cannot be used in combination with opts.token");
        e.auth ? this[E]["proxy-authorization"] = `Basic ${e.auth}` : e.token ? this[E]["proxy-authorization"] = e.token : l && _ && (this[E]["proxy-authorization"] = `Basic ${Buffer.from(`${decodeURIComponent(l)}:${decodeURIComponent(_)}`).toString("base64")}`);
        const I = u({
            ...e.proxyTls
        });
        this[k] = u({
            ...e.requestTls
        }), this[p] = n(t, {
            connect: I
        }), this[g] = new A({
            ...e,
            connect: async (e, n)=>{
                let t = e.host;
                e.port || (t += ":" + ("https:" === e.protocol ? 443 : 80));
                try {
                    const { socket: a, statusCode: r } = await this[p].connect({
                        origin: s,
                        port: o,
                        path: t,
                        signal: e.signal,
                        headers: {
                            ...this[E],
                            host: c
                        }
                    });
                    if (200 !== r && (a.on("error", ()=>{}).destroy(), n(new m(`Proxy response (${r}) !== 200 when HTTP Tunneling`))), "https:" !== e.protocol) return void n(null, a);
                    let i;
                    i = this[h] ? this[h].servername : e.servername, this[k]({
                        ...e,
                        servername: i,
                        httpSocket: a
                    }, n);
                } catch (e) {
                    n(e);
                }
            }
        });
    }
    dispatch(e, n) {
        const { host: t } = new i(e.origin), a = function(e) {
            if (Array.isArray(e)) {
                const n = {};
                for(let t = 0; t < e.length; t += 2)n[e[t]] = e[t + 1];
                return n;
            }
            return e;
        }(e.headers);
        return function(e) {
            const n = e && Object.keys(e).find((e)=>"proxy-authorization" === e.toLowerCase());
            if (n) throw new d("Proxy-Authorization should be sent in ProxyAgent constructor");
        }(a), this[g].dispatch({
            ...e,
            headers: {
                ...a,
                host: t
            }
        }, n);
    }
    async [s]() {
        await this[g].close(), await this[p].close();
    }
    async [o]() {
        await this[g].destroy(), await this[p].destroy();
    }
};
