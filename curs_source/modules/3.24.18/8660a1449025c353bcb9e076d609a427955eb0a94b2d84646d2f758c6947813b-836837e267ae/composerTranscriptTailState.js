import { Ckw, _Of, kkw, vOf, wkw } from "./BA.js";
import { Qe, Vn, st } from "./Iwo.js";
import { Q_f } from "./Ycg.js";
import { bs, sd } from "./chat_pb.js";
import { cbs } from "./composerTranscriptRowHydration.js";
import { $Mi } from "./composerTranscriptTailStatus.js";
import { Mt } from "./index_197.js";
import { Qgi } from "./pending-approval.js";
import { ifi } from "./tail-status-placement.js";
import { E } from "./tslib.es6.js";
var bOf, yOf, SOf;
export { SOf, bOf, yOf };
var __wakaru_Ekw_initialized = false;
export function Ekw() {
if (__wakaru_Ekw_initialized) return;
__wakaru_Ekw_initialized = true;
"use strict";
E(), Mt(), sd(), Qe(), cbs(), $Mi(), bOf = 64, yOf = {
    approval: void 0,
    tailStatus: void 0,
    tailStatusHostRowId: void 0
}, SOf = class extends st {
    constructor(t, e){
        super(), this.transcriptSource = t, this.onStateInvalidated = e, this.state = yOf, this.hasStreamedAgentContent = !1, this.approvalContentInvalidated = !1, this.subscription = this._register(new Vn), this.subscriptionBubbleIds = [], this.handleBubbleChange = ()=>{
            const n = this.inputs;
            if (n === void 0) return;
            const i = this.transcriptSource.getHeadersSnapshot(), r = {
                ...n,
                headers: i.headers,
                generatingBubbleIds: i.generatingBubbleIds,
                isConversationGenerating: i.isGenerating
            }, s = this.collectActiveTailBubbleIds(r), o = this.derive(r, s);
            this.renewSubscription(s), this.approvalContentInvalidated = o.approval !== void 0, (this.approvalContentInvalidated || !Ckw(this.state, o)) && this.onStateInvalidated();
        };
    }
    update(t) {
        this.hasStreamedAgentContent || (this.hasStreamedAgentContent = t.headers.some((a)=>a.type === bs.AI && (a.grouping?.hasText === !0 || a.grouping?.hasThinking === !0)));
        const e = this.state;
        this.inputs = t;
        const n = this.collectActiveTailBubbleIds(t);
        this.state = this.derive(t, n), this.renewSubscription(n);
        const i = new Set;
        (this.approvalContentInvalidated || !vOf(e.approval, this.state.approval)) && i.add(Qgi), this.approvalContentInvalidated = !1;
        const r = !Q_f(e.tailStatus, this.state.tailStatus);
        r && i.add(ifi);
        const s = e.tailStatusHostRowId, o = this.state.tailStatusHostRowId;
        if (s !== o || r) for (const a of [
            s,
            o
        ])a !== void 0 && i.add(a);
        return {
            state: this.state,
            changedRowIds: i
        };
    }
    getState() {
        return this.state;
    }
    derive(t, e) {
        return wkw({
            rows: t.rows,
            activeTailBubbleIds: e,
            getBubbleSnapshot: (n)=>this.transcriptSource.getBubbleSnapshot(n),
            isConversationGenerating: t.isConversationGenerating,
            previousApprovalEntryId: this.state.approval?.row.entry.id,
            isCloudAgent: t.isCloudAgent,
            hasStreamedAgentContent: this.hasStreamedAgentContent,
            hasActiveWorktreeSetup: t.hasActiveWorktreeSetup,
            isActivityGroupExpanded: t.isActivityGroupExpanded,
            planningSnapshot: t.planningSnapshot,
            showsCloudOptimisticPlanningRow: t.showsCloudOptimisticPlanningRow
        });
    }
    collectActiveTailBubbleIds(t) {
        return kkw({
            rows: t.rows,
            activeToolBubbleIds: this.transcriptSource.getActiveToolBubbleIds(),
            generatingBubbleIds: t.generatingBubbleIds
        });
    }
    renewSubscription(t) {
        const e = [
            ...t
        ].sort();
        _Of(this.subscriptionBubbleIds, e) || (this.subscriptionBubbleIds = e, this.subscription.value = e.length === 0 ? void 0 : this.transcriptSource.subscribeBubbles(e, this.handleBubbleChange));
    }
};

}
