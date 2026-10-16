"use strict";
const { isIP: r } = require(77030), { lookup: s } = require(40610), o = require("./module-31646.js"), { InvalidArgumentError: n, InformationalError: i } = require("./module-38238.js"), a = Math.pow(2, 31) - 1;
class Q {
    #a = 0;
    #Q = 0;
    #g = new Map;
    dualStack = !0;
    affinity = null;
    lookup = null;
    pick = null;
    constructor(A){
        this.#a = A.maxTTL, this.#Q = A.maxItems, this.dualStack = A.dualStack, this.affinity = A.affinity, this.lookup = A.lookup ?? this.#E, this.pick = A.pick ?? this.#B;
    }
    get full() {
        return this.#g.size === this.#Q;
    }
    runLookup(A, e, t) {
        const r = this.#g.get(A.hostname);
        if (null == r && this.full) return void t(null, A.origin);
        const s = {
            affinity: this.affinity,
            dualStack: this.dualStack,
            lookup: this.lookup,
            pick: this.pick,
            ...e.dns,
            maxTTL: this.#a,
            maxItems: this.#Q
        };
        if (null == r) this.lookup(A, s, (e, r)=>{
            if (e || null == r || 0 === r.length) return void t(e ?? new i("No DNS entries found"));
            this.setRecords(A, r);
            const o = this.#g.get(A.hostname), n = this.pick(A, o, s.affinity);
            let a;
            a = "number" == typeof n.port ? `:${n.port}` : "" !== A.port ? `:${A.port}` : "", t(null, `${A.protocol}//${6 === n.family ? `[${n.address}]` : n.address}${a}`);
        });
        else {
            const o = this.pick(A, r, s.affinity);
            if (null == o) return this.#g.delete(A.hostname), void this.runLookup(A, e, t);
            let n;
            n = "number" == typeof o.port ? `:${o.port}` : "" !== A.port ? `:${A.port}` : "", t(null, `${A.protocol}//${6 === o.family ? `[${o.address}]` : o.address}${n}`);
        }
    }
    #E(A, e, t) {
        s(A.hostname, {
            all: !0,
            family: !1 === this.dualStack ? this.affinity : 0,
            order: "ipv4first"
        }, (A, e)=>{
            if (A) return t(A);
            const r = new Map;
            for (const A of e)r.set(`${A.address}:${A.family}`, A);
            t(null, r.values());
        });
    }
    #B(A, e, t) {
        let r = null;
        const { records: s, offset: o } = e;
        let n;
        if (this.dualStack ? (null == t && (null == o || o === a ? (e.offset = 0, t = 4) : (e.offset++, t = 1 & ~e.offset ? 4 : 6)), n = null != s[t] && s[t].ips.length > 0 ? s[t] : s[4 === t ? 6 : 4]) : n = s[t], null == n || 0 === n.ips.length) return r;
        null == n.offset || n.offset === a ? n.offset = 0 : n.offset++;
        const i = n.offset % n.ips.length;
        return r = n.ips[i] ?? null, null == r ? r : Date.now() - r.timestamp > r.ttl ? (n.ips.splice(i, 1), this.pick(A, e, t)) : r;
    }
    setRecords(A, e) {
        const t = Date.now(), r = {
            records: {
                4: null,
                6: null
            }
        };
        for (const A of e){
            A.timestamp = t, "number" == typeof A.ttl ? A.ttl = Math.min(A.ttl, this.#a) : A.ttl = this.#a;
            const e = r.records[A.family] ?? {
                ips: []
            };
            e.ips.push(A), r.records[A.family] = e;
        }
        this.#g.set(A.hostname, r);
    }
    getHandler(A, e) {
        return new g(this, A, e);
    }
}
class g extends o {
    #c = null;
    #t = null;
    #I = null;
    #C = null;
    #h = null;
    constructor(A, { origin: e, handler: t, dispatch: r }, s){
        super(t), this.#h = e, this.#C = t, this.#t = {
            ...s
        }, this.#c = A, this.#I = r;
    }
    onError(A) {
        switch(A.code){
            case "ETIMEDOUT":
            case "ECONNREFUSED":
                return this.#c.dualStack ? void this.#c.runLookup(this.#h, this.#t, (A, e)=>{
                    if (A) return this.#C.onError(A);
                    const t = {
                        ...this.#t,
                        origin: e
                    };
                    this.#I(t, this);
                }) : void this.#C.onError(A);
            case "ENOTFOUND":
                this.#c.deleteRecord(this.#h);
            default:
                this.#C.onError(A);
        }
    }
}
module.exports = (A)=>{
    if (null != A?.maxTTL && ("number" != typeof A?.maxTTL || A?.maxTTL < 0)) throw new n("Invalid maxTTL. Must be a positive number");
    if (null != A?.maxItems && ("number" != typeof A?.maxItems || A?.maxItems < 1)) throw new n("Invalid maxItems. Must be a positive number and greater than zero");
    if (null != A?.affinity && 4 !== A?.affinity && 6 !== A?.affinity) throw new n("Invalid affinity. Must be either 4 or 6");
    if (null != A?.dualStack && "boolean" != typeof A?.dualStack) throw new n("Invalid dualStack. Must be a boolean");
    if (null != A?.lookup && "function" != typeof A?.lookup) throw new n("Invalid lookup. Must be a function");
    if (null != A?.pick && "function" != typeof A?.pick) throw new n("Invalid pick. Must be a function");
    const e = A?.dualStack ?? !0;
    let t;
    t = e ? A?.affinity ?? null : A?.affinity ?? 4;
    const s = new Q({
        maxTTL: A?.maxTTL ?? 1e4,
        lookup: A?.lookup ?? null,
        pick: A?.pick ?? null,
        dualStack: e,
        affinity: t,
        maxItems: A?.maxItems ?? 1 / 0
    });
    return (A)=>function(e, t) {
            const o = e.origin.constructor === URL ? e.origin : new URL(e.origin);
            return 0 !== r(o.hostname) ? A(e, t) : (s.runLookup(o, e, (r, n)=>{
                if (r) return t.onError(r);
                let i = null;
                i = {
                    ...e,
                    servername: o.hostname,
                    origin: n,
                    headers: {
                        host: o.hostname,
                        ...e.headers
                    }
                }, A(i, s.getHandler({
                    origin: o,
                    dispatch: A,
                    handler: t
                }, e));
            }), !0);
        };
};
