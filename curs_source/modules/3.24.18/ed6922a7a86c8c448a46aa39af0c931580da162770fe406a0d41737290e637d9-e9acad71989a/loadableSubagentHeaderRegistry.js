import { x } from "./tslib.es6.js";
var FIh;
export { FIh };
var __wakaru_Rt__initialized = false;
export function Rt_() {
if (__wakaru_Rt__initialized) return;
__wakaru_Rt__initialized = true;
"use strict";
x(), FIh = class {
    constructor(e){
        this._onDidChangeIdentity = e, this._heldById = new Map, this._removalTokenById = new Map, this._lastRevision = 0;
    }
    get size() {
        return this._heldById.size;
    }
    get(e) {
        return this._heldById.get(e)?.header;
    }
    has(e) {
        return this._heldById.has(e);
    }
    keys() {
        return this._heldById.keys();
    }
    *values() {
        for (const e of this._heldById.values())yield e.header;
    }
    *[Symbol.iterator]() {
        for (const [e, t] of this._heldById)yield [
            e,
            t.header
        ];
    }
    getRevision(e) {
        return this._heldById.get(e)?.revision ?? this._removalTokenById.get(e) ?? 0;
    }
    set(e, t) {
        return this._heldById.get(e)?.header === t ? this : (this._heldById.set(e, {
            header: t,
            revision: this._mint()
        }), this._onDidChangeIdentity(e), this);
    }
    delete(e) {
        return this._heldById.delete(e) ? (this._announceRemoval([
            e
        ]), !0) : !1;
    }
    clear() {
        const e = [
            ...this._heldById.keys()
        ];
        this._heldById.clear(), this._announceRemoval(e);
    }
    _mint() {
        return ++this._lastRevision;
    }
    _announceRemoval(e) {
        for (const t of e)this._removalTokenById.set(t, this._mint());
        for (const t of e)this._onDidChangeIdentity(t);
        for (const t of e)this._removalTokenById.delete(t);
    }
};

}
