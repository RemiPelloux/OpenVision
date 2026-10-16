"use strict";
require.r(exports), require.d(exports, {
    BinaryDecisionDiagram: ()=>n,
    EndpointCache: ()=>s,
    EndpointError: ()=>i.c,
    customEndpointFunctions: ()=>g.m,
    decideEndpoint: ()=>h,
    isIpAddress: ()=>f.o,
    isValidHostLabel: ()=>p.X,
    resolveEndpoint: ()=>m.s
});
class n {
    nodes;
    root;
    conditions;
    results;
    constructor(e, t, r, n){
        this.nodes = e, this.root = t, this.conditions = r, this.results = n;
    }
    static from(e, t, r, s) {
        return new n(e, t, r, s);
    }
}
class s {
    capacity;
    data = new Map;
    parameters = [];
    constructor({ size: e, params: t }){
        this.capacity = e ?? 50, t && (this.parameters = t);
    }
    get(e, t) {
        const r = this.hash(e);
        if (!1 === r) return t();
        if (!this.data.has(r)) {
            if (this.data.size > this.capacity + 10) {
                const e = this.data.keys();
                let t = 0;
                for(;;){
                    const { value: r, done: n } = e.next();
                    if (this.data.delete(r), n || ++t > 10) break;
                }
            }
            this.data.set(r, t());
        }
        return this.data.get(r);
    }
    size() {
        return this.data.size;
    }
    hash(e) {
        let t = "";
        const { parameters: r } = this;
        if (0 === r.length) return !1;
        for (const n of r){
            const r = String(e[n] ?? "");
            if (r.includes("|;")) return !1;
            t += r + "|;";
        }
        return t;
    }
}
var i = require("./module-93451.js"), o = require("./module-5090.js"), a = require("./module-15235.js"), c = require("./module-20961.js"), l = require("./module-77330.js"), u = require("./module-4374.js");
const d = 1e8, h = (e, t)=>{
    const { nodes: r, root: n, results: s, conditions: h } = e;
    let f = n;
    const p = {}, g = {
        referenceRecord: p,
        endpointParams: t.endpointParams,
        logger: t.logger
    };
    for(; 1 !== f && -1 !== f && f < d;){
        const e = 3 * (Math.abs(f) - 1), [t, n, s] = [
            r[e],
            r[e + 1],
            r[e + 2]
        ], [i, a, c] = h[t], l = (0, o.F)({
            fn: i,
            assign: c,
            argv: a
        }, g);
        if (l.toAssign) {
            const { name: e, value: t } = l.toAssign;
            p[e] = t;
        }
        f = f >= 0 === l.result ? n : s;
    }
    if (f >= d) {
        const e = s[f - d];
        if (-1 === e[0]) {
            const [, t] = e;
            throw new i.c((0, a.O4)(t, "Error", g));
        }
        const [t, r, n] = e;
        return {
            url: (0, u.t)(t, g),
            properties: (0, l.Fb)(r, g),
            headers: (0, c.w)(n ?? {}, g)
        };
    }
    throw new i.c("No matching endpoint.");
};
var f = require("./module-3871.js"), p = require("./module-62340.js"), g = require("./module-6685.js"), m = require("./module-14074.js");
