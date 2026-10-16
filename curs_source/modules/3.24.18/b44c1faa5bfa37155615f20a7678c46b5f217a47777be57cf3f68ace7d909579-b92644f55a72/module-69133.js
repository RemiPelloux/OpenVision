"use strict";
const { kProxy: n, kClose: s, kDestroy: o, kInterceptors: i } = require("./module-15532.js"), { URL: a } = require("./module-87016.js"), c = require("./module-57132.js"), l = require("./module-26215.js"), u = require("./module-84220.js"), { InvalidArgumentError: d, RequestAbortedError: p } = require("./module-48762.js"), m = require("./module-4003.js"), h = Symbol("proxy agent"), f = Symbol("proxy client"), g = Symbol("proxy headers"), y = Symbol("request tls settings"), w = Symbol("proxy tls settings"), v = Symbol("connect endpoint function");
function _(e, t) {
    return new l(e, t);
}
module.exports = class extends u {
    constructor(e){
        if (super(e), this[n] = function(e) {
            if ("string" == typeof e && (e = {
                uri: e
            }), !e || !e.uri) throw new d("Proxy opts.uri is mandatory");
            return {
                uri: e.uri,
                protocol: e.protocol || "https"
            };
        }(e), this[h] = new c(e), this[i] = e.interceptors && e.interceptors.ProxyAgent && Array.isArray(e.interceptors.ProxyAgent) ? e.interceptors.ProxyAgent : [], "string" == typeof e && (e = {
            uri: e
        }), !e || !e.uri) throw new d("Proxy opts.uri is mandatory");
        const { clientFactory: t = _ } = e;
        if ("function" != typeof t) throw new d("Proxy opts.clientFactory must be a function.");
        this[y] = e.requestTls, this[w] = e.proxyTls, this[g] = e.headers || {};
        const r = new a(e.uri), { origin: s, port: o, host: l, username: u, password: A } = r;
        if (e.auth && e.token) throw new d("opts.auth cannot be used in combination with opts.token");
        e.auth ? this[g]["proxy-authorization"] = `Basic ${e.auth}` : e.token ? this[g]["proxy-authorization"] = e.token : u && A && (this[g]["proxy-authorization"] = `Basic ${Buffer.from(`${decodeURIComponent(u)}:${decodeURIComponent(A)}`).toString("base64")}`);
        const S = m({
            ...e.proxyTls
        });
        this[v] = m({
            ...e.requestTls
        }), this[f] = t(r, {
            connect: S
        }), this[h] = new c({
            ...e,
            connect: async (e, t)=>{
                let r = e.host;
                e.port || (r += ":" + ("https:" === e.protocol ? 443 : 80));
                try {
                    const { socket: n, statusCode: i } = await this[f].connect({
                        origin: s,
                        port: o,
                        path: r,
                        signal: e.signal,
                        headers: {
                            ...this[g],
                            host: l
                        }
                    });
                    if (200 !== i && (n.on("error", ()=>{}).destroy(), t(new p(`Proxy response (${i}) !== 200 when HTTP Tunneling`))), "https:" !== e.protocol) return void t(null, n);
                    let a;
                    a = this[y] ? this[y].servername : e.servername, this[v]({
                        ...e,
                        servername: a,
                        httpSocket: n
                    }, t);
                } catch (e) {
                    t(e);
                }
            }
        });
    }
    dispatch(e, t) {
        const { host: r } = new a(e.origin), n = function(e) {
            if (Array.isArray(e)) {
                const t = {};
                for(let r = 0; r < e.length; r += 2)t[e[r]] = e[r + 1];
                return t;
            }
            return e;
        }(e.headers);
        return function(e) {
            const t = e && Object.keys(e).find((e)=>"proxy-authorization" === e.toLowerCase());
            if (t) throw new d("Proxy-Authorization should be sent in ProxyAgent constructor");
        }(n), this[h].dispatch({
            ...e,
            headers: {
                ...n,
                host: r
            }
        }, t);
    }
    async [s]() {
        await this[h].close(), await this[f].close();
    }
    async [o]() {
        await this[h].destroy(), await this[f].destroy();
    }
};
