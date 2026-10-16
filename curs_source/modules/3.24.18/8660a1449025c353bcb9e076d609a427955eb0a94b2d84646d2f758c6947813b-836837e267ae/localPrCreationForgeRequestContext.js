import { kl } from "./browser.ts";
import { Xet } from "./cursor_rules_pb.js";
import { Du } from "./dashboard_pb.js";
import { E } from "./tslib.es6.js";
var vdg, dll;
export { dll, vdg };
var __wakaru__dg_initialized = false;
export function _dg() {
if (__wakaru__dg_initialized) return;
__wakaru__dg_initialized = true;
"use strict";
E(), kl(), Xet(), Du(), vdg = 6e4, dll = class {
    constructor(t = vdg, e = Date.now){
        this.ttlMs = t, this.now = e, this.entries = new Map;
    }
    clear() {
        this.entries.clear();
    }
    syncRepoSourcePreference(t) {
        t !== this.lastRepoSourcePreference && (this.entries.clear(), this.lastRepoSourcePreference = t);
    }
    syncTeam(t) {
        t !== this.lastTeamId && (this.entries.clear(), this.lastTeamId = t);
    }
    get(t, e) {
        this.syncTeam(t);
        const n = this.entries.get(e);
        if (n !== void 0) {
            if (this.now() >= n.expiresAtMs) {
                this.entries.delete(e);
                return;
            }
            return n.resolution;
        }
    }
    set(t, e, n) {
        this.syncTeam(t), this.entries.set(e, {
            resolution: n,
            expiresAtMs: this.now() + this.ttlMs
        });
    }
};

}
