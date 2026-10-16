import { MZd, gqi } from "./A3u.js";
import { He, Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { ac, bn } from "./async.js";
import { PZd, Qkt } from "./cacheStorageEnvelope.js";
import { Dm, lc } from "./descriptors.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, vn } from "./qIc.js";
import { Vn, yn } from "./storage_2.js";
import { x } from "./tslib.es6.js";
var Jkt, LZd, vqi, D2n, NZd, OZd, FZd, BZd, Gpo, Vpo, _qi;
export { BZd, D2n, FZd, Gpo, Jkt, LZd, NZd, OZd, Vpo, _qi, vqi };
var __wakaru_YWt_initialized = false;
export function YWt() {
if (__wakaru_YWt_initialized) return;
__wakaru_YWt_initialized = true;
"use strict";
x(), bn(), Se(), Pn(), Dm(), Ze(), Vn(), PZd(), Jkt = "agentData.cacheStorage.", LZd = 300 * 1e3, vqi = "::", D2n = 1e6, NZd = [
    -1,
    0,
    1
], OZd = [
    0,
    1
], FZd = 10080 * 60 * 1e3, BZd = '{"value":', Gpo = ',"expiresAt":', Vpo = vn("cacheStorageService"), _qi = class extends we {
    constructor(e, t){
        super(), this._storageService = e, this._storageExpiryByScopedKey = new Map, this._storageIndexHydrated = !1, this._defaultTtlMs = Math.max(1, Math.floor(t?.defaultTtlMs ?? FZd)), this._cleanupIntervalMs = Math.max(1, Math.floor(t?.cleanupIntervalMs ?? LZd)), this._now = t?.now ?? (()=>Date.now()), this._cleanupScheduler = this._register(new ac(()=>this._runCleanupCycle(), this._cleanupIntervalMs)), this._cleanupScheduler.schedule();
        const n = this._register(new He);
        this._register(this._storageService.onDidChangeValue(-1, void 0, n)((i)=>this._onStorageValueChanged(i))), this._register(this._storageService.onDidChangeValue(0, void 0, n)((i)=>this._onStorageValueChanged(i))), this._register(this._storageService.onDidChangeValue(1, void 0, n)((i)=>this._onStorageValueChanged(i)));
    }
    get(e, t) {
        const n = this._toStorageKey(e), i = this._storageService.get(n, t);
        if (i === void 0) {
            this._untrackStorageEntry(t, n);
            return;
        }
        const r = this._parsePayload(i);
        if (!r || r.expiresAt <= this._now()) {
            this._storageService.remove(n, t), this._untrackStorageEntry(t, n);
            return;
        }
        return this._trackStorageEntry(t, n, r.expiresAt), r.value;
    }
    store(e, t, n, i, r = this._defaultTtlMs) {
        const s = Math.floor(r);
        if (!Number.isFinite(s) || s <= 0) {
            this.remove(e, n);
            return;
        }
        const o = this._toStorageKey(e);
        if (t.length > D2n) {
            this.remove(e, n);
            return;
        }
        const a = this._now(), c = this._storageService.get(o, n), l = c === void 0 ? void 0 : this._identicalV2StoredValueExpiry(c, t);
        if (l !== void 0 && l - a > s / 2 && this._storageService.keys(n, i).includes(o)) {
            this._trackStorageEntry(n, o, l);
            return;
        }
        const u = c === void 0 ? void 0 : this._identicalLegacyStoredValueExpiry(c, t);
        if (u !== void 0 && u - a > s / 2 && this._storageService.keys(n, i).includes(o)) {
            this._trackStorageEntry(n, o, u);
            return;
        }
        const h = a + s, p = MZd(t, h);
        if (p.length > D2n) {
            this.remove(e, n);
            return;
        }
        this._storageService.store(o, p, n, i), this._trackStorageEntry(n, o, h);
    }
    _identicalLegacyStoredValueExpiry(e, t) {
        const n = this._parsePayload(e);
        if (!(!n || n.value !== t)) return n.expiresAt;
    }
    _identicalV2StoredValueExpiry(e, t) {
        const n = gqi(e);
        if (!(n === void 0 || e.length !== n.valueOffset + t.length || !e.startsWith(t, n.valueOffset))) return n.expiresAt;
    }
    remove(e, t) {
        const n = this._toStorageKey(e);
        this._untrackStorageEntry(t, n), this._storageService.remove(n, t);
    }
    _runCleanupCycle() {
        this._evictExpiredInStorage(), this._cleanupScheduler.schedule();
    }
    _evictExpiredInStorage() {
        this._hydrateStorageIndex();
        const e = this._now(), t = [];
        for (const [n, i] of this._storageExpiryByScopedKey)i <= e && t.push(n);
        for (const n of t){
            const { scope: i, storageKey: r } = this._fromScopedStorageKey(n);
            this._storageService.remove(r, i), this._storageExpiryByScopedKey.delete(n);
        }
    }
    _hydrateStorageIndex() {
        if (this._storageIndexHydrated) return;
        this._storageIndexHydrated = !0;
        const e = this._now();
        for (const t of NZd)for (const n of OZd)for (const i of this._storageService.keys(t, n)){
            if (!i.startsWith(Jkt)) continue;
            const r = this._storageService.get(i, t);
            if (r === void 0) {
                this._untrackStorageEntry(t, i);
                continue;
            }
            const s = this._parseExpiresAt(r);
            if (s === void 0 || s <= e) {
                this._storageService.remove(i, t), this._untrackStorageEntry(t, i);
                continue;
            }
            this._trackStorageEntry(t, i, s);
        }
    }
    _parsePayload(e) {
        if (e.length > D2n) return;
        const t = gqi(e);
        if (t !== void 0) return {
            value: e.slice(t.valueOffset),
            expiresAt: t.expiresAt
        };
        if (!e.startsWith(Qkt)) try {
            const n = JSON.parse(e);
            return typeof n.value != "string" || typeof n.expiresAt != "number" || !Number.isFinite(n.expiresAt) ? void 0 : {
                value: n.value,
                expiresAt: n.expiresAt
            };
        } catch  {
            return;
        }
    }
    _parseExpiresAt(e) {
        if (e.length > D2n) return;
        const t = gqi(e);
        if (t !== void 0) return t.expiresAt;
        if (!e.startsWith(Qkt)) {
            if (e.startsWith(BZd) && e.endsWith("}")) {
                const n = e.lastIndexOf(Gpo);
                if (n !== -1) {
                    const i = Number(e.slice(n + Gpo.length, -1));
                    if (Number.isFinite(i)) return i;
                }
            }
            return this._parsePayload(e)?.expiresAt;
        }
    }
    _onStorageValueChanged(e) {
        if (!e.key.startsWith(Jkt)) return;
        if (e.target === void 0) {
            this._untrackStorageEntry(e.scope, e.key);
            return;
        }
        const t = this._storageService.get(e.key, e.scope);
        if (t === void 0) {
            this._untrackStorageEntry(e.scope, e.key);
            return;
        }
        const n = this._parseExpiresAt(t);
        if (n === void 0 || n <= this._now()) {
            this._storageService.remove(e.key, e.scope), this._untrackStorageEntry(e.scope, e.key);
            return;
        }
        this._trackStorageEntry(e.scope, e.key, n);
    }
    _trackStorageEntry(e, t, n) {
        this._storageExpiryByScopedKey.set(this._toScopedStorageKey(e, t), n);
    }
    _untrackStorageEntry(e, t) {
        this._storageExpiryByScopedKey.delete(this._toScopedStorageKey(e, t));
    }
    _toStorageKey(e) {
        return `${Jkt}${e}`;
    }
    _toScopedStorageKey(e, t) {
        return `${e}${vqi}${t}`;
    }
    _fromScopedStorageKey(e) {
        const t = e.indexOf(vqi);
        if (t === -1) throw new Error(`Invalid scoped storage key: ${e}`);
        const n = Number(e.slice(0, t)), i = e.slice(t + vqi.length);
        return {
            scope: n,
            storageKey: i
        };
    }
}, _qi = ie([
    C(0, yn)
], _qi), mn(Vpo, new lc(_qi, [], !0));

}
