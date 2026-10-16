import { Yu } from "./browser.ts";
import { _4e } from "./cursor_rules_pb.js";
import { Jh } from "./dashboard_pb.js";
import { x } from "./tslib.es6.js";
var Q0h, c1o;
export { Q0h, c1o };
var __wakaru_J0h_initialized = false;
export function J0h() {
if (__wakaru_J0h_initialized) return;
__wakaru_J0h_initialized = true;
"use strict";
x(), Yu(), _4e(), Jh(), Q0h = 6e4, c1o = class {
    constructor(e = Q0h, t = Date.now){
        this.ttlMs = e, this.now = t, this.entries = new Map;
    }
    clear() {
        this.entries.clear();
    }
    syncRepoSourcePreference(e) {
        e !== this.lastRepoSourcePreference && (this.entries.clear(), this.lastRepoSourcePreference = e);
    }
    syncTeam(e) {
        e !== this.lastTeamId && (this.entries.clear(), this.lastTeamId = e);
    }
    get(e, t) {
        this.syncTeam(e);
        const n = this.entries.get(t);
        if (n !== void 0) {
            if (this.now() >= n.expiresAtMs) {
                this.entries.delete(t);
                return;
            }
            return n.resolution;
        }
    }
    set(e, t, n) {
        this.syncTeam(e), this.entries.set(t, {
            resolution: n,
            expiresAtMs: this.now() + this.ttlMs
        });
    }
};

}
