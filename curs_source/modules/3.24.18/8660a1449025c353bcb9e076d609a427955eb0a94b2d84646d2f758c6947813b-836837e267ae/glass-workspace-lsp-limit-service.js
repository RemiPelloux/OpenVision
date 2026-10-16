import { Pn, Qe, st } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { F2v, NPs } from "./glass-workspace-lsp-settings-service.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Etc, OPs;
export { Etc, OPs };
var __wakaru_$P0_initialized = false;
export function $P0() {
if (__wakaru_$P0_initialized) return;
__wakaru_$P0_initialized = true;
"use strict";
E(), Qe(), Rn(), It(), F2v(), Etc = Il("glassWorkspaceLspLimitService"), OPs = class extends st {
    constructor(t){
        super(), this._settingsService = t, this._entries = new Map, this._register(this._settingsService.onDidChange(()=>{
            this._evictWhileOverBudget(void 0, !1), this._evictWhileOverBudget(void 0, !0);
        }));
    }
    register(t) {
        const e = t.isRemote();
        return this._entries.set(t, {
            lastActivity: Date.now(),
            isRemote: e
        }), this._evictWhileOverBudget(t, e), Pn(()=>{
            this._entries.delete(t);
        });
    }
    touch(t) {
        const e = this._entries.get(t);
        e && (e.lastActivity = Date.now());
    }
    _bucketSize(t) {
        let e = 0;
        for (const n of this._entries.values())n.isRemote === t && e++;
        return e;
    }
    _evictWhileOverBudget(t, e) {
        const n = e ? this._settingsService.getSettings().maxRemoteWorkspaces : this._settingsService.getSettings().maxLocalWorkspaces;
        for(; this._bucketSize(e) > n;){
            const i = this._pickEvictionVictim(t, e);
            if (!i) return;
            this._entries.delete(i), i.evict().catch(()=>{});
        }
    }
    _pickEvictionVictim(t, e) {
        if ((e ? this._settingsService.getSettings().maxRemoteWorkspaces : this._settingsService.getSettings().maxLocalWorkspaces) === 0 && t) return t;
        let i, r = 1 / 0, s, o = 1 / 0;
        for (const [a, l] of this._entries)a === t || l.isRemote !== e || (a.getMountedCodeFileCount() === 0 && l.lastActivity < r && (i = a, r = l.lastActivity), l.lastActivity < o && (s = a, o = l.lastActivity));
        return i ?? s;
    }
}, OPs = Re([
    F(0, NPs)
], OPs), bn(Etc, OPs, 1, 1);

}
