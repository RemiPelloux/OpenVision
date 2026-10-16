import { Nt, Qe, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Yu, qn } from "./async.js";
import { F9m, pqt } from "./cacheStorageEnvelope.js";
import { L1, tm } from "./descriptors.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { O9m, fJr } from "./yBp.js";
var mqt, B9m, _Jr, C0i, U9m, j9m, $9m, H9m, PKa, bJr, yJr;
export { $9m, B9m, C0i, H9m, PKa, U9m, _Jr, bJr, j9m, mqt, yJr };
var __wakaru_YEn_initialized = false;
export function YEn() {
if (__wakaru_YEn_initialized) return;
__wakaru_YEn_initialized = true;
"use strict";
E(), qn(), Qe(), Rn(), L1(), It(), Zi(), F9m(), mqt = "agentData.cacheStorage.", B9m = 300 * 1e3, _Jr = "::", C0i = 1e6, U9m = [
    -1,
    0,
    1
], j9m = [
    0,
    1
], $9m = 10080 * 60 * 1e3, H9m = '{"value":', PKa = ',"expiresAt":', bJr = jn("cacheStorageService"), yJr = class extends st {
    constructor(t, e){
        super(), this._storageService = t, this._storageExpiryByScopedKey = new Map, this._storageIndexHydrated = !1, this._defaultTtlMs = Math.max(1, Math.floor(e?.defaultTtlMs ?? $9m)), this._cleanupIntervalMs = Math.max(1, Math.floor(e?.cleanupIntervalMs ?? B9m)), this._now = e?.now ?? (()=>Date.now()), this._cleanupScheduler = this._register(new Yu(()=>this._runCleanupCycle(), this._cleanupIntervalMs)), this._cleanupScheduler.schedule();
        const n = this._register(new Nt);
        this._register(this._storageService.onDidChangeValue(-1, void 0, n)((i)=>this._onStorageValueChanged(i))), this._register(this._storageService.onDidChangeValue(0, void 0, n)((i)=>this._onStorageValueChanged(i))), this._register(this._storageService.onDidChangeValue(1, void 0, n)((i)=>this._onStorageValueChanged(i)));
    }
    get(t, e) {
        const n = this._toStorageKey(t), i = this._storageService.get(n, e);
        if (i === void 0) {
            this._untrackStorageEntry(e, n);
            return;
        }
        const r = this._parsePayload(i);
        if (!r || r.expiresAt <= this._now()) {
            this._storageService.remove(n, e), this._untrackStorageEntry(e, n);
            return;
        }
        return this._trackStorageEntry(e, n, r.expiresAt), r.value;
    }
    store(t, e, n, i, r = this._defaultTtlMs) {
        const s = Math.floor(r);
        if (!Number.isFinite(s) || s <= 0) {
            this.remove(t, n);
            return;
        }
        const o = this._toStorageKey(t);
        if (e.length > C0i) {
            this.remove(t, n);
            return;
        }
        const a = this._now(), l = this._storageService.get(o, n), c = l === void 0 ? void 0 : this._identicalV2StoredValueExpiry(l, e);
        if (c !== void 0 && c - a > s / 2 && this._storageService.keys(n, i).includes(o)) {
            this._trackStorageEntry(n, o, c);
            return;
        }
        const u = l === void 0 ? void 0 : this._identicalLegacyStoredValueExpiry(l, e);
        if (u !== void 0 && u - a > s / 2 && this._storageService.keys(n, i).includes(o)) {
            this._trackStorageEntry(n, o, u);
            return;
        }
        const d = a + s, h = O9m(e, d);
        if (h.length > C0i) {
            this.remove(t, n);
            return;
        }
        this._storageService.store(o, h, n, i), this._trackStorageEntry(n, o, d);
    }
    _identicalLegacyStoredValueExpiry(t, e) {
        const n = this._parsePayload(t);
        if (!(!n || n.value !== e)) return n.expiresAt;
    }
    _identicalV2StoredValueExpiry(t, e) {
        const n = fJr(t);
        if (!(n === void 0 || t.length !== n.valueOffset + e.length || !t.startsWith(e, n.valueOffset))) return n.expiresAt;
    }
    remove(t, e) {
        const n = this._toStorageKey(t);
        this._untrackStorageEntry(e, n), this._storageService.remove(n, e);
    }
    _runCleanupCycle() {
        this._evictExpiredInStorage(), this._cleanupScheduler.schedule();
    }
    _evictExpiredInStorage() {
        this._hydrateStorageIndex();
        const t = this._now(), e = [];
        for (const [n, i] of this._storageExpiryByScopedKey)i <= t && e.push(n);
        for (const n of e){
            const { scope: i, storageKey: r } = this._fromScopedStorageKey(n);
            this._storageService.remove(r, i), this._storageExpiryByScopedKey.delete(n);
        }
    }
    _hydrateStorageIndex() {
        if (this._storageIndexHydrated) return;
        this._storageIndexHydrated = !0;
        const t = this._now();
        for (const e of U9m)for (const n of j9m)for (const i of this._storageService.keys(e, n)){
            if (!i.startsWith(mqt)) continue;
            const r = this._storageService.get(i, e);
            if (r === void 0) {
                this._untrackStorageEntry(e, i);
                continue;
            }
            const s = this._parseExpiresAt(r);
            if (s === void 0 || s <= t) {
                this._storageService.remove(i, e), this._untrackStorageEntry(e, i);
                continue;
            }
            this._trackStorageEntry(e, i, s);
        }
    }
    _parsePayload(t) {
        if (t.length > C0i) return;
        const e = fJr(t);
        if (e !== void 0) return {
            value: t.slice(e.valueOffset),
            expiresAt: e.expiresAt
        };
        if (!t.startsWith(pqt)) try {
            const n = JSON.parse(t);
            return typeof n.value != "string" || typeof n.expiresAt != "number" || !Number.isFinite(n.expiresAt) ? void 0 : {
                value: n.value,
                expiresAt: n.expiresAt
            };
        } catch  {
            return;
        }
    }
    _parseExpiresAt(t) {
        if (t.length > C0i) return;
        const e = fJr(t);
        if (e !== void 0) return e.expiresAt;
        if (!t.startsWith(pqt)) {
            if (t.startsWith(H9m) && t.endsWith("}")) {
                const n = t.lastIndexOf(PKa);
                if (n !== -1) {
                    const i = Number(t.slice(n + PKa.length, -1));
                    if (Number.isFinite(i)) return i;
                }
            }
            return this._parsePayload(t)?.expiresAt;
        }
    }
    _onStorageValueChanged(t) {
        if (!t.key.startsWith(mqt)) return;
        if (t.target === void 0) {
            this._untrackStorageEntry(t.scope, t.key);
            return;
        }
        const e = this._storageService.get(t.key, t.scope);
        if (e === void 0) {
            this._untrackStorageEntry(t.scope, t.key);
            return;
        }
        const n = this._parseExpiresAt(e);
        if (n === void 0 || n <= this._now()) {
            this._storageService.remove(t.key, t.scope), this._untrackStorageEntry(t.scope, t.key);
            return;
        }
        this._trackStorageEntry(t.scope, t.key, n);
    }
    _trackStorageEntry(t, e, n) {
        this._storageExpiryByScopedKey.set(this._toScopedStorageKey(t, e), n);
    }
    _untrackStorageEntry(t, e) {
        this._storageExpiryByScopedKey.delete(this._toScopedStorageKey(t, e));
    }
    _toStorageKey(t) {
        return `${mqt}${t}`;
    }
    _toScopedStorageKey(t, e) {
        return `${t}${_Jr}${e}`;
    }
    _fromScopedStorageKey(t) {
        const e = t.indexOf(_Jr);
        if (e === -1) throw new Error(`Invalid scoped storage key: ${t}`);
        const n = Number(t.slice(0, e)), i = t.slice(e + _Jr.length);
        return {
            scope: n,
            storageKey: i
        };
    }
}, yJr = Re([
    F(0, ki)
], yJr), bn(bJr, new tm(yJr, [], !0));

}
