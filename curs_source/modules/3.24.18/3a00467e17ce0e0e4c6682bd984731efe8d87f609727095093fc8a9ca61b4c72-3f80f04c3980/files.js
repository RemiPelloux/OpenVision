import { Ue } from "./errors.js";
import { D1, Sn } from "./instantiation.js";
import { Ct, Me } from "./lazy.js";
import { tr } from "./network.js";
import { $s, Vt } from "./nls.js";
import { le } from "./path.js";
import { X } from "./platform.js";
import { Ke } from "./strings.js";
import { F2, nr } from "./ternarySearchTree.js";
import { w } from "./tslib.es6.js";
import { Or } from "./types.js";
import { Ye } from "./uri.js";
function Ho(e) {
    return typeof e == "number" && !isNaN(e);
}
function ra() {
    return globalThis._VSCODE_NLS_MESSAGES;
}
function Fs(e, t) {
    let r;
    return t.length === 0 ? r = e : r = e.replace(/\{(\d+)\}/g, (s, i)=>{
        const n = parseInt(i, 10), a = t[n];
        let o = s;
        return typeof a == "string" ? o = a : (typeof a == "number" || typeof a == "boolean" || a === void 0 || a === null) && (o = String(a)), o;
    }), $s && (r = "\uFF3B" + r.replace(/[aouei]/g, "$&$&") + "\uFF3D"), r;
}
function b(e, t, ...r) {
    return Fs(typeof e == "number" ? sa(e, t) : t, r);
}
function sa(e, t) {
    const r = ra()?.[e];
    if (typeof r != "string") {
        if (typeof t == "string") return t;
        throw new Error(`!!! NLS MISSING: ${e} !!!`);
    }
    return r;
}
var U2, An, me;
export { An, Fs, Ho, U2, b, me, ra, sa };
var __wakaru_q2_initialized = false;
export function q2() {
if (__wakaru_q2_initialized) return;
__wakaru_q2_initialized = true;
"use strict";
w(), Ue(), F2(), le(), Ke(), Or(), Ye(), Vt(), Sn(), X(), tr(), Ct(), U2 = D1("fileService"), An = class yr {
    constructor(t, r){
        this.ignorePathCasing = r, this.correlationId = void 0, this.added = new Me(()=>{
            const s = nr.forUris(()=>this.ignorePathCasing);
            return s.fill(this.rawAdded.map((i)=>[
                    i,
                    !0
                ])), s;
        }), this.updated = new Me(()=>{
            const s = nr.forUris(()=>this.ignorePathCasing);
            return s.fill(this.rawUpdated.map((i)=>[
                    i,
                    !0
                ])), s;
        }), this.deleted = new Me(()=>{
            const s = nr.forUris(()=>this.ignorePathCasing);
            return s.fill(this.rawDeleted.map((i)=>[
                    i,
                    !0
                ])), s;
        }), this.rawAdded = [], this.rawUpdated = [], this.rawDeleted = [];
        for (const s of t){
            switch(s.type){
                case 1:
                    this.rawAdded.push(s.resource);
                    break;
                case 0:
                    this.rawUpdated.push(s.resource);
                    break;
                case 2:
                    this.rawDeleted.push(s.resource);
                    break;
            }
            this.correlationId !== yr.MIXED_CORRELATION && (typeof s.cId == "number" ? this.correlationId === void 0 ? this.correlationId = s.cId : this.correlationId !== s.cId && (this.correlationId = yr.MIXED_CORRELATION) : this.correlationId !== void 0 && (this.correlationId = yr.MIXED_CORRELATION));
        }
    }
    contains(t, ...r) {
        return this.doContains(t, {
            includeChildren: !1
        }, ...r);
    }
    affects(t, ...r) {
        return this.doContains(t, {
            includeChildren: !0
        }, ...r);
    }
    doContains(t, r, ...s) {
        if (!t) return !1;
        const i = s.length > 0;
        return !!((!i || s.includes(1)) && (this.added.value.get(t) || r.includeChildren && this.added.value.findSuperstr(t)) || (!i || s.includes(0)) && (this.updated.value.get(t) || r.includeChildren && this.updated.value.findSuperstr(t)) || (!i || s.includes(2)) && (this.deleted.value.findSubstr(t) || r.includeChildren && this.deleted.value.findSuperstr(t)));
    }
    gotAdded() {
        return this.rawAdded.length > 0;
    }
    gotDeleted() {
        return this.rawDeleted.length > 0;
    }
    gotUpdated() {
        return this.rawUpdated.length > 0;
    }
    correlates(t) {
        return this.correlationId === t;
    }
    hasCorrelation() {
        return typeof this.correlationId == "number";
    }
}, An.MIXED_CORRELATION = null, me = class Oe {
    static formatSize(t) {
        return Ho(t) || (t = 0), t < Oe.KB ? b(2024, null, t.toFixed(0)) : t < Oe.MB ? b(2025, null, (t / Oe.KB).toFixed(2)) : t < Oe.GB ? b(2026, null, (t / Oe.MB).toFixed(2)) : t < Oe.TB ? b(2027, null, (t / Oe.GB).toFixed(2)) : b(2028, null, (t / Oe.TB).toFixed(2));
    }
}, me.KB = 1024, me.MB = me.KB * me.KB, me.GB = me.MB * me.KB, me.TB = me.GB * me.KB;

}
