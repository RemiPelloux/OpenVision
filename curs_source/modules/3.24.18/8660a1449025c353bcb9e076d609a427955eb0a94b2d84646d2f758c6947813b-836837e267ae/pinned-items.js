import { Gt, Nt, Qe, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { Zu, eu } from "./glass-log-service.js";
import { Nu, xc } from "./glass-storage-service.js";
import { It } from "./instantiation.js";
import { iJt, lw0 } from "./ofv.js";
import { aw0 } from "./pinned-items.types.js";
import { Vd, dv } from "./storage-keys.js";
import { Wg, io } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var OQl, tTv, y2s;
export { OQl, tTv, y2s };
var __wakaru_nTv_initialized = false;
export function nTv() {
if (__wakaru_nTv_initialized) return;
__wakaru_nTv_initialized = true;
"use strict";
E(), Gt(), Qe(), Rn(), It(), dv(), Zu(), xc(), aw0(), OQl = jn("glassPinnedItemsService"), tTv = new Set([
    "skill"
]), y2s = class extends st {
    constructor(t, e){
        super(), this._storageService = t, this._logService = e, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._items = [], this._keys = new Set, this._items = this._load(), this._rebuildKeys();
        const n = this._register(new Nt);
        this._register(this._storageService.onDidChangeValue(io.APPLICATION, Vd.PINNED_ITEMS, n)(()=>{
            const i = this._load();
            this._itemsEqual(this._items, i) || (this._items = i, this._rebuildKeys(), this._onDidChange.fire());
        }));
    }
    get items() {
        return this._items;
    }
    isPinned(t) {
        return this._keys.has(iJt(t));
    }
    pin(t) {
        this.isPinned(t) || (this._items = [
            ...this._items,
            t
        ], this._persist());
    }
    unpin(t) {
        const e = iJt(t);
        this._keys.has(e) && (this._items = this._items.filter((n)=>iJt(n) !== e), this._persist());
    }
    toggle(t) {
        this.isPinned(t) ? this.unpin(t) : this.pin(t);
    }
    updateSettings(t) {
        const e = iJt(t);
        this._keys.has(e) && (this._items = this._items.map((n)=>iJt(n) === e ? t : n), this._persist());
    }
    _itemsEqual(t, e) {
        return t === e ? !0 : t.length !== e.length ? !1 : JSON.stringify(t) === JSON.stringify(e);
    }
    _load() {
        const t = this._storageService.get(Vd.PINNED_ITEMS, io.APPLICATION);
        if (t === void 0) return [];
        try {
            return lw0(JSON.parse(t), this._logService);
        } catch (e) {
            return this._logService.warn(`[pinned-items] failed to parse storage JSON: ${e instanceof Error ? e.message : String(e)}`), [];
        }
    }
    _persist() {
        this._rebuildKeys(), this._storageService.store(Vd.PINNED_ITEMS, JSON.stringify(this._items), io.APPLICATION, Wg.USER), this._onDidChange.fire();
    }
    _rebuildKeys() {
        this._keys = new Set(this._items.map((t)=>iJt(t)));
    }
}, y2s = Re([
    F(0, Nu),
    F(1, eu)
], y2s), bn(OQl, y2s, 1);

}
