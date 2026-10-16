"use strict";
const r = require("./module-27110.js"), { kClose: s, kDestroy: o, kClosed: n, kDestroyed: i, kDispatch: a, kNoProxyAgent: Q, kHttpProxyAgent: g, kHttpsProxyAgent: E } = require("./module-76992.js"), B = require("./module-31939.js"), c = require("./module-16618.js"), I = {
    "http:": 80,
    "https:": 443
};
let C = !1;
module.exports = class extends r {
    #A = null;
    #e = null;
    #t = null;
    constructor(A = {}){
        super(), this.#t = A, C || (C = !0, process.emitWarning("EnvHttpProxyAgent is experimental, expect them to change at any time.", {
            code: "UNDICI-EHPA"
        }));
        const { httpProxy: e, httpsProxy: t, noProxy: r, ...s } = A;
        this[Q] = new c(s);
        const o = e ?? process.env.http_proxy ?? process.env.HTTP_PROXY;
        this[g] = o ? new B({
            ...s,
            uri: o
        }) : this[Q];
        const n = t ?? process.env.https_proxy ?? process.env.HTTPS_PROXY;
        this[E] = n ? new B({
            ...s,
            uri: n
        }) : this[g], this.#r();
    }
    [a](A, e) {
        const t = new URL(A.origin);
        return this.#s(t).dispatch(A, e);
    }
    async [s]() {
        await this[Q].close(), this[g][n] || await this[g].close(), this[E][n] || await this[E].close();
    }
    async [o](A) {
        await this[Q].destroy(A), this[g][i] || await this[g].destroy(A), this[E][i] || await this[E].destroy(A);
    }
    #s(A) {
        let { protocol: e, host: t, port: r } = A;
        return t = t.replace(/:\d*$/, "").toLowerCase(), r = Number.parseInt(r, 10) || I[e] || 0, this.#o(t, r) ? "https:" === e ? this[E] : this[g] : this[Q];
    }
    #o(A, e) {
        if (this.#n && this.#r(), 0 === this.#e.length) return !0;
        if ("*" === this.#A) return !1;
        for(let t = 0; t < this.#e.length; t++){
            const r = this.#e[t];
            if (!r.port || r.port === e) {
                if (/^[.*]/.test(r.hostname)) {
                    if (A.endsWith(r.hostname.replace(/^\*/, ""))) return !1;
                } else if (A === r.hostname) return !1;
            }
        }
        return !0;
    }
    #r() {
        const A = this.#t.noProxy ?? this.#i, e = A.split(/[,\s]/), t = [];
        for(let A = 0; A < e.length; A++){
            const r = e[A];
            if (!r) continue;
            const s = r.match(/^(.+):(\d+)$/);
            t.push({
                hostname: (s ? s[1] : r).toLowerCase(),
                port: s ? Number.parseInt(s[2], 10) : 0
            });
        }
        this.#A = A, this.#e = t;
    }
    get #n() {
        return void 0 === this.#t.noProxy && this.#A !== this.#i;
    }
    get #i() {
        return process.env.no_proxy ?? process.env.NO_PROXY ?? "";
    }
};
