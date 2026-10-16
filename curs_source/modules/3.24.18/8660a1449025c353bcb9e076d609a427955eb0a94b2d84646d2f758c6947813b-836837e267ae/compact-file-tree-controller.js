import { Qka } from "./ipa.js";
import { E } from "./tslib.es6.js";
var cip, uip, skn, dip;
export { cip, dip, skn, uip };
var __wakaru_hip_initialized = false;
export function hip() {
if (__wakaru_hip_initialized) return;
__wakaru_hip_initialized = true;
"use strict";
E(), cip = Object.defineProperty, uip = (t, e, n)=>e in t ? cip(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, skn = (t, e, n)=>uip(t, typeof e != "symbol" ? e + "" : e, n), dip = class {
    constructor(){
        skn(this, "_roots", []), skn(this, "_visibleRows", []), skn(this, "_elements", new Map), skn(this, "_openState", new Map), skn(this, "_listeners", new Set);
    }
    subscribe(t) {
        return this._listeners.add(t), ()=>{
            this._listeners.delete(t);
        };
    }
    _notify() {
        for (const t of this._listeners)t();
    }
    get roots() {
        return this._roots;
    }
    setFiles(t, e) {
        this._roots = Qka(t, e), this._pruneOpenState(), this._visibleRows = this._computeVisibleRows(), this._notify();
    }
    register(t, e) {
        this._elements.set(t, e);
    }
    unregister(t) {
        this._elements.delete(t);
    }
    reportOpen(t, e) {
        this._openState.get(t) !== e && (this._openState.set(t, e), this._visibleRows = this._computeVisibleRows(), this._notify());
    }
    toggleOpen(t) {
        this.reportOpen(t, !this.isOpen(t));
    }
    isOpen(t) {
        return this._openState.get(t) ?? !0;
    }
    _pruneOpenState() {
        const t = new Set, e = (n)=>{
            for (const i of n)i.children && (t.add(i.path), e(i.children));
        };
        e(this._roots);
        for (const n of this._openState.keys())t.has(n) || this._openState.delete(n);
    }
    getVisibleRows() {
        return this._visibleRows;
    }
    _computeVisibleRows() {
        const t = [], e = (n, i)=>{
            for (const r of n)t.push({
                node: r,
                depth: i
            }), r.children && this.isOpen(r.path) && e(r.children, i + 1);
        };
        return e(this._roots, 0), Object.freeze(t);
    }
    getAdjacentVisiblePath(t, e) {
        const n = this.getVisibleRows(), i = n.findIndex((o)=>o.node.path === t);
        if (i === -1) return;
        const r = i + e, s = n[r];
        if (s) return {
            path: s.node.path,
            index: r
        };
    }
    focusNext(t) {
        const e = this.getAdjacentVisiblePath(t, 1);
        e && this.focusPath(e.path);
    }
    focusPrev(t) {
        const e = this.getAdjacentVisiblePath(t, -1);
        e && this.focusPath(e.path);
    }
    focusPath(t) {
        const e = this._elements.get(t);
        return e ? (e.focus(), !0) : !1;
    }
    focusFirstVisible() {
        const t = this._visibleRows[0];
        return t ? this.focusPath(t.node.path) : !1;
    }
};

}
