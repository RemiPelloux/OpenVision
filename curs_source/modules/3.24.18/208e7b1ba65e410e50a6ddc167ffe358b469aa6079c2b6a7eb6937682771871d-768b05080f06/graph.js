import { h } from "./tslib.es6.js";
var q2e, KU;
export { KU, q2e };
var __wakaru_Kct_initialized = false;
export function Kct() {
if (__wakaru_Kct_initialized) return;
__wakaru_Kct_initialized = true;
"use strict";
h(), q2e = class {
    constructor(e, t){
        this.key = e, this.data = t, this.incoming = new Map, this.outgoing = new Map;
    }
}, KU = class {
    constructor(e){
        this._hashFn = e, this._nodes = new Map;
    }
    roots() {
        const e = [];
        for (const t of this._nodes.values())t.outgoing.size === 0 && e.push(t);
        return e;
    }
    insertEdge(e, t) {
        const n = this.lookupOrInsertNode(e), r = this.lookupOrInsertNode(t);
        n.outgoing.set(r.key, r), r.incoming.set(n.key, n);
    }
    removeNode(e) {
        const t = this._hashFn(e);
        this._nodes.delete(t);
        for (const n of this._nodes.values())n.outgoing.delete(t), n.incoming.delete(t);
    }
    lookupOrInsertNode(e) {
        const t = this._hashFn(e);
        let n = this._nodes.get(t);
        return n || (n = new q2e(t, e), this._nodes.set(t, n)), n;
    }
    lookup(e) {
        return this._nodes.get(this._hashFn(e));
    }
    isEmpty() {
        return this._nodes.size === 0;
    }
    toString() {
        const e = [];
        for (const [t, n] of this._nodes)e.push(`${t}
	(-> incoming)[${[
            ...n.incoming.keys()
        ].join(", ")}]
	(outgoing ->)[${[
            ...n.outgoing.keys()
        ].join(",")}]
`);
        return e.join(`
`);
    }
    findCycleSlow() {
        for (const [e, t] of this._nodes){
            const n = new Set([
                e
            ]), r = this._findCycle(t, n);
            if (r) return r;
        }
    }
    _findCycle(e, t) {
        for (const [n, r] of e.outgoing){
            if (t.has(n)) return [
                ...t,
                n
            ].join(" -> ");
            t.add(n);
            const s = this._findCycle(r, t);
            if (s) return s;
            t.delete(n);
        }
    }
};

}
