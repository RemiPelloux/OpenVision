import { Rfh, mXi } from "./conversationSearchProcess.js";
import { N1, gh } from "./reactive.js";
import { x } from "./tslib.es6.js";
var GAh;
export { GAh };
var __wakaru_Vn__initialized = false;
export function Vn_() {
if (__wakaru_Vn__initialized) return;
__wakaru_Vn__initialized = true;
"use strict";
x(), mXi(), N1(), GAh = class {
    constructor(e){
        this.selectedTeamId = e, this.authenticationEpoch = 0, this.revision = 0, this.mutableSnapshot = new gh(void 0), this.snapshot = this.mutableSnapshot;
    }
    captureScope() {
        return Object.freeze({
            authenticationEpoch: this.authenticationEpoch,
            selectedTeamId: this.selectedTeamId
        });
    }
    invalidateAuthentication(e) {
        this.authenticationEpoch++, this.selectedTeamId = e, this.mutableSnapshot.set(void 0);
    }
    updateSelectedTeam(e) {
        return this.selectedTeamId === e ? !1 : (this.selectedTeamId = e, this.mutableSnapshot.set(void 0), !0);
    }
    isCurrentScope(e) {
        return e.authenticationEpoch === this.authenticationEpoch && e.selectedTeamId === this.selectedTeamId;
    }
    publish(e, t) {
        if (!this.isCurrentScope(e)) return !1;
        const n = Object.freeze({
            authenticationEpoch: e.authenticationEpoch,
            selectedTeamId: e.selectedTeamId,
            revision: ++this.revision,
            candidates: Object.freeze(t.map((i)=>Object.freeze({
                    conversationId: i.conversationId,
                    title: i.title,
                    recency: i.recency,
                    isArchived: i.isArchived,
                    branches: i.branches
                })).sort((i, r)=>r.recency - i.recency).slice(0, Rfh))
        });
        return this.mutableSnapshot.set(n), !0;
    }
};

}
