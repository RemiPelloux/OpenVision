import { Mis, Ytg } from "./conversationSearchProcess.js";
import { Kf, ca } from "./reactive.js";
import { E } from "./tslib.es6.js";
var Avg;
export { Avg };
var __wakaru_vwk_initialized = false;
export function vwk() {
if (__wakaru_vwk_initialized) return;
__wakaru_vwk_initialized = true;
"use strict";
E(), Mis(), Kf(), Avg = class {
    constructor(t){
        this.selectedTeamId = t, this.authenticationEpoch = 0, this.revision = 0, this.mutableSnapshot = new ca(void 0), this.snapshot = this.mutableSnapshot;
    }
    captureScope() {
        return Object.freeze({
            authenticationEpoch: this.authenticationEpoch,
            selectedTeamId: this.selectedTeamId
        });
    }
    invalidateAuthentication(t) {
        this.authenticationEpoch++, this.selectedTeamId = t, this.mutableSnapshot.set(void 0);
    }
    updateSelectedTeam(t) {
        return this.selectedTeamId === t ? !1 : (this.selectedTeamId = t, this.mutableSnapshot.set(void 0), !0);
    }
    isCurrentScope(t) {
        return t.authenticationEpoch === this.authenticationEpoch && t.selectedTeamId === this.selectedTeamId;
    }
    publish(t, e) {
        if (!this.isCurrentScope(t)) return !1;
        const n = Object.freeze({
            authenticationEpoch: t.authenticationEpoch,
            selectedTeamId: t.selectedTeamId,
            revision: ++this.revision,
            candidates: Object.freeze(e.map((i)=>Object.freeze({
                    conversationId: i.conversationId,
                    title: i.title,
                    recency: i.recency,
                    isArchived: i.isArchived,
                    branches: i.branches
                })).sort((i, r)=>r.recency - i.recency).slice(0, Ytg))
        });
        return this.mutableSnapshot.set(n), !0;
    }
};

}
