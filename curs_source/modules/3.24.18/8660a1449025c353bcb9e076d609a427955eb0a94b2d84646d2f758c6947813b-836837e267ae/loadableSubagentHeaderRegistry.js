import { E } from "./tslib.es6.js";
var Cfg;
export { Cfg };
var __wakaru_okk_initialized = false;
export function okk() {
if (__wakaru_okk_initialized) return;
__wakaru_okk_initialized = true;
"use strict";
E(), Cfg = class {
    constructor(t){
        this._onDidChangeIdentity = t, this._heldById = new Map, this._removalTokenById = new Map, this._lastRevision = 0;
    }
    get size() {
        return this._heldById.size;
    }
    get(t) {
        return this._heldById.get(t)?.header;
    }
    has(t) {
        return this._heldById.has(t);
    }
    keys() {
        return this._heldById.keys();
    }
    *values() {
        for (const t of this._heldById.values())yield t.header;
    }
    *[Symbol.iterator]() {
        for (const [t, e] of this._heldById)yield [
            t,
            e.header
        ];
    }
    getRevision(t) {
        return this._heldById.get(t)?.revision ?? this._removalTokenById.get(t) ?? 0;
    }
    set(t, e) {
        return this._heldById.get(t)?.header === e ? this : (this._heldById.set(t, {
            header: e,
            revision: this._mint()
        }), this._onDidChangeIdentity(t), this);
    }
    delete(t) {
        return this._heldById.delete(t) ? (this._announceRemoval([
            t
        ]), !0) : !1;
    }
    clear() {
        const t = [
            ...this._heldById.keys()
        ];
        this._heldById.clear(), this._announceRemoval(t);
    }
    _mint() {
        return ++this._lastRevision;
    }
    _announceRemoval(t) {
        for (const e of t)this._removalTokenById.set(e, this._mint());
        for (const e of t)this._onDidChangeIdentity(e);
        for (const e of t)this._removalTokenById.delete(e);
    }
};

}
