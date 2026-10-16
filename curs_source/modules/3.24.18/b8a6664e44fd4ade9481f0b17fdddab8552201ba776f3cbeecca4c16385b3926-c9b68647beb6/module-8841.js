"use strict";
const { kProxy: r, kClose: s, kDestroy: o, kInterceptors: n } = require("./module-58832.js"), { URL: i } = require(87016), E = require("./module-60568.js"), Q = require("./module-34003.js"), g = require("./module-9792.js"), { InvalidArgumentError: C, RequestAbortedError: B } = require("./module-95521.js"), a = require("./module-3991.js"), I = Symbol("proxy agent"), c = Symbol("proxy client"), h = Symbol("proxy headers"), l = Symbol("request tls settings"), u = Symbol("proxy tls settings"), d = Symbol("connect endpoint function");
function f(A, e) {
    return new Q(A, e);
}
module.exports = class extends g {
    constructor(A){
        if (super(A), this[r] = function(A) {
            if ("string" == typeof A && (A = {
                uri: A
            }), !A || !A.uri) throw new C("Proxy opts.uri is mandatory");
            return {
                uri: A.uri,
                protocol: A.protocol || "https"
            };
        }(A), this[I] = new E(A), this[n] = A.interceptors && A.interceptors.ProxyAgent && Array.isArray(A.interceptors.ProxyAgent) ? A.interceptors.ProxyAgent : [], "string" == typeof A && (A = {
            uri: A
        }), !A || !A.uri) throw new C("Proxy opts.uri is mandatory");
        const { clientFactory: e = f } = A;
        if ("function" != typeof e) throw new C("Proxy opts.clientFactory must be a function.");
        this[l] = A.requestTls, this[u] = A.proxyTls, this[h] = A.headers || {};
        const t = new i(A.uri), { origin: s, port: o, host: Q, username: g, password: y } = t;
        if (A.auth && A.token) throw new C("opts.auth cannot be used in combination with opts.token");
        A.auth ? this[h]["proxy-authorization"] = `Basic ${A.auth}` : A.token ? this[h]["proxy-authorization"] = A.token : g && y && (this[h]["proxy-authorization"] = `Basic ${Buffer.from(`${decodeURIComponent(g)}:${decodeURIComponent(y)}`).toString("base64")}`);
        const D = a({
            ...A.proxyTls
        });
        this[d] = a({
            ...A.requestTls
        }), this[c] = e(t, {
            connect: D
        }), this[I] = new E({
            ...A,
            connect: async (A, e)=>{
                let t = A.host;
                A.port || (t += ":" + ("https:" === A.protocol ? 443 : 80));
                try {
                    const { socket: r, statusCode: n } = await this[c].connect({
                        origin: s,
                        port: o,
                        path: t,
                        signal: A.signal,
                        headers: {
                            ...this[h],
                            host: Q
                        }
                    });
                    if (200 !== n && (r.on("error", ()=>{}).destroy(), e(new B(`Proxy response (${n}) !== 200 when HTTP Tunneling`))), "https:" !== A.protocol) return void e(null, r);
                    let i;
                    i = this[l] ? this[l].servername : A.servername, this[d]({
                        ...A,
                        servername: i,
                        httpSocket: r
                    }, e);
                } catch (A) {
                    e(A);
                }
            }
        });
    }
    dispatch(A, e) {
        const { host: t } = new i(A.origin), r = function(A) {
            if (Array.isArray(A)) {
                const e = {};
                for(let t = 0; t < A.length; t += 2)e[A[t]] = A[t + 1];
                return e;
            }
            return A;
        }(A.headers);
        return function(A) {
            const e = A && Object.keys(A).find((A)=>"proxy-authorization" === A.toLowerCase());
            if (e) throw new C("Proxy-Authorization should be sent in ProxyAgent constructor");
        }(r), this[I].dispatch({
            ...A,
            headers: {
                ...r,
                host: t
            }
        }, e);
    }
    async [s]() {
        await this[I].close(), await this[c].close();
    }
    async [o]() {
        await this[I].destroy(), await this[c].destroy();
    }
};
