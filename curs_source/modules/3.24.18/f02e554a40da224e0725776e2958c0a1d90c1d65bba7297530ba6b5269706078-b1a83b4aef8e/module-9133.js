"use strict";
const { kProxy: n, kClose: s, kDestroy: i, kInterceptors: o } = require("./module-5532.js"), { URL: a } = require("./module-7016.js"), u = require("./module-7132.js"), c = require("./module-6215.js"), l = require("./module-4220.js"), { InvalidArgumentError: m, RequestAbortedError: d } = require("./module-8762.js"), f = require("./module-4003.js"), p = Symbol("proxy agent"), h = Symbol("proxy client"), g = Symbol("proxy headers"), A = Symbol("request tls settings"), _ = Symbol("proxy tls settings"), y = Symbol("connect endpoint function");
function w(t, e) {
    return new c(t, e);
}
module.exports = class extends l {
    constructor(t){
        if (super(t), this[n] = function(t) {
            if ("string" == typeof t && (t = {
                uri: t
            }), !t || !t.uri) throw new m("Proxy opts.uri is mandatory");
            return {
                uri: t.uri,
                protocol: t.protocol || "https"
            };
        }(t), this[p] = new u(t), this[o] = t.interceptors && t.interceptors.ProxyAgent && Array.isArray(t.interceptors.ProxyAgent) ? t.interceptors.ProxyAgent : [], "string" == typeof t && (t = {
            uri: t
        }), !t || !t.uri) throw new m("Proxy opts.uri is mandatory");
        const { clientFactory: e = w } = t;
        if ("function" != typeof e) throw new m("Proxy opts.clientFactory must be a function.");
        this[A] = t.requestTls, this[_] = t.proxyTls, this[g] = t.headers || {};
        const r = new a(t.uri), { origin: s, port: i, host: c, username: l, password: S } = r;
        if (t.auth && t.token) throw new m("opts.auth cannot be used in combination with opts.token");
        t.auth ? this[g]["proxy-authorization"] = `Basic ${t.auth}` : t.token ? this[g]["proxy-authorization"] = t.token : l && S && (this[g]["proxy-authorization"] = `Basic ${Buffer.from(`${decodeURIComponent(l)}:${decodeURIComponent(S)}`).toString("base64")}`);
        const J = f({
            ...t.proxyTls
        });
        this[y] = f({
            ...t.requestTls
        }), this[h] = e(r, {
            connect: J
        }), this[p] = new u({
            ...t,
            connect: async (t, e)=>{
                let r = t.host;
                t.port || (r += ":" + ("https:" === t.protocol ? 443 : 80));
                try {
                    const { socket: n, statusCode: o } = await this[h].connect({
                        origin: s,
                        port: i,
                        path: r,
                        signal: t.signal,
                        headers: {
                            ...this[g],
                            host: c
                        }
                    });
                    if (200 !== o && (n.on("error", ()=>{}).destroy(), e(new d(`Proxy response (${o}) !== 200 when HTTP Tunneling`))), "https:" !== t.protocol) return void e(null, n);
                    let a;
                    a = this[A] ? this[A].servername : t.servername, this[y]({
                        ...t,
                        servername: a,
                        httpSocket: n
                    }, e);
                } catch (t) {
                    e(t);
                }
            }
        });
    }
    dispatch(t, e) {
        const { host: r } = new a(t.origin), n = function(t) {
            if (Array.isArray(t)) {
                const e = {};
                for(let r = 0; r < t.length; r += 2)e[t[r]] = t[r + 1];
                return e;
            }
            return t;
        }(t.headers);
        return function(t) {
            const e = t && Object.keys(t).find((t)=>"proxy-authorization" === t.toLowerCase());
            if (e) throw new m("Proxy-Authorization should be sent in ProxyAgent constructor");
        }(n), this[p].dispatch({
            ...t,
            headers: {
                ...n,
                host: r
            }
        }, e);
    }
    async [s]() {
        await this[p].close(), await this[h].close();
    }
    async [i]() {
        await this[p].destroy(), await this[h].destroy();
    }
};
