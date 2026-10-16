import { a7i, zse } from "./A3u.js";
import { ZS, iXs, tJe } from "./De_3.js";
import { He, cn, rn } from "./HVr.js";
import { IVt, xVt } from "./agentWorkspaceResolutionConstants.js";
import { a8e, dfh, kVt, wgh } from "./cgh.js";
import { Hu, Tr } from "./chat_pb.js";
import { Err } from "./client.ts";
import { U1e } from "./cloudAgentRepositoryModel.js";
import { ps } from "./composer_pb.js";
import { So, cle } from "./constants_8.js";
import { lg_ } from "./firstSteerNotice.js";
import { N4h } from "./index_21.ts";
import { Ode } from "./projectAgentHeader.js";
import { Jt, Sv, bM } from "./qIc.js";
import { pSo } from "./queueMessageSubmitPolicy.js";
import { BPo, N8h } from "./realtimeVoiceAgents.js";
import { xg_ } from "./realtimeVoiceListener.js";
import { K8h, qPo, zPo } from "./realtimeVoiceRecords.js";
import { NPo, u9n } from "./realtimeVoiceSettings.js";
import { VPo } from "./realtimeVoiceUnheardMessages.js";
import { iL } from "./selectedContextData.js";
import { Crr } from "./system-clock.ts";
import { nt, ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
import { M4h } from "./turn-feed.ts";
import { _C } from "./utils_23.js";
import { zn } from "./uuid.js";
import { U0, Yv } from "./workspaceCollectionService.js";
import { XPe } from "./workspaceRefHelpers.js";
import { DHv, RHv, qPe } from "./xmo.js";
function Mp_(e, t, n) {
    const i = [];
    for (const r of t){
        const s = e.isTypedByThem(r), o = s ? e.words(r)?.trim() : e.said(r);
        o !== void 0 && o !== "" && i.push({
            row: r,
            id: e.lineId(r),
            writer: s ? "them" : "you",
            text: o
        });
    }
    return n > 0 ? i.slice(-n) : [];
}
function sUh(e, t, n) {
    for(let i = e.length - 1; i >= 0; i--){
        const r = e[i];
        if (r === void 0) continue;
        const s = n === void 0 ? void 0 : t.stampedAtMs(r);
        if (!(s !== void 0 && n !== void 0 && s > n) && t.isTypedByThem(r)) {
            const o = t.serverLineId(r);
            return o === void 0 ? {
                lineId: t.lineId(r)
            } : {
                lineId: t.lineId(r),
                serverLineId: o
            };
        }
    }
}
function Vp_(e, t, n) {
    if (t === void 0) return e;
    let i = e;
    if (i.anchor === void 0) {
        const a = sUh(t, n, i.startedAtMs);
        if (a === void 0) return i;
        i = {
            ...i,
            anchor: a
        };
    }
    const r = i.anchor;
    if (r === void 0 || r.serverLineId !== void 0) return i;
    const s = t.find((a)=>n.lineId(a) === r.lineId), o = s === void 0 ? void 0 : n.serverLineId(s);
    return o === void 0 ? i : {
        ...i,
        anchor: {
            ...r,
            serverLineId: o
        }
    };
}
function cg_(e, t) {
    return t.some((n)=>!e.has(n.bubbleId) && n.grouping?.isSteer === !0);
}
function z8h(e) {
    return wgh({
        composer: e
    }).normalizationMode;
}
function vg_(e, t) {
    return t.type !== Tr.AI ? !1 : e === "active" ? t.grouping?.hasSentMessage === !0 : t.grouping?.hasText === !0 && t.grouping.capabilityType !== ps.SUMMARIZATION;
}
function _g_(e, t) {
    if (t?.type !== Tr.AI) return;
    const i = (e === "active" ? tJe(t.toolFormerData)?.message : t.capabilityType === ps.SUMMARIZATION ? void 0 : t.text)?.trim();
    return i === void 0 || i === "" ? void 0 : i;
}
function bg_(e) {
    const t = e?.toolFormerData;
    return t?.status === "loading" && t.toolCall?.tool.case === "sendMessageToolCall";
}
function yg_(e) {
    return e.type === Tr.HUMAN && !iXs(qPe(e));
}
function Y8h(e, t) {
    return {
        isHuman: (n)=>n.type === Tr.HUMAN,
        startsATurn: yg_,
        isTypedByThem: K8h,
        mayBeSaid: (n)=>vg_(e(), n),
        said: (n)=>_g_(e(), t(n.bubbleId)),
        words: (n)=>t(n.bubbleId)?.text,
        lineId: (n)=>n.bubbleId,
        get eachMessageStandsAlone () {
            return e() === "active";
        }
    };
}
function Z8h(e) {
    return e === void 0 ? !1 : e.status.value === "needs_attention" || e.source !== "local" && e.hasPendingInteraction?.value === !0;
}
function Cg_(e) {
    const { agentReference: t, composerDataService: n, logService: i } = e, r = ()=>t.composerDataHandle.data, s = (o)=>n.getComposerBubble(t.composerDataHandle, o);
    return {
        reader: Y8h(()=>z8h(r()), s),
        clock: Crr,
        log: {
            info: (o)=>i.info(`${u9n} ${o}`),
            warn: (o, a)=>i.warn(`${u9n} ${o}`, a)
        },
        rows: ()=>r().fullConversationHeadersOnly ?? [],
        status: ()=>Tg_(t),
        isGone: ()=>t.isDisposed,
        turnIsInFlight: e.turnIsInFlight,
        submitFollowsTheQueueSetting: e.submitFollowsTheQueueSetting,
        isTheAgents: (o)=>o.type === Tr.AI,
        bodyIsLoaded: (o)=>s(o.bubbleId) !== void 0,
        sendIsStillLoading: (o)=>bg_(s(o.bubbleId)),
        loadBodies: (o)=>t.ensureConversationBodies(o.map((a)=>a.bubbleId)),
        newLineId: zn,
        watch: (o)=>{
            const a = new He, c = a.add(new cn);
            return c.value = Q8h(t, o), t.onDidReplace !== void 0 && a.add(t.onDidReplace(()=>{
                c.value = Q8h(t, o), o.headerMoved();
            })), ()=>a.dispose();
        }
    };
}
function Q8h(e, t) {
    const n = ()=>e.composerDataHandle.data, i = new He, r = e.header;
    i.add(r.status.onChange(()=>t.headerMoved()));
    const s = r.hasPendingInteraction;
    return s !== void 0 && i.add(s.onChange(()=>t.changed())), i.add(rn(bM((o)=>(Jt(Sv(()=>{
            const a = n(), c = a.fullConversationHeadersOnly ?? [], l = c.map((u)=>u.grouping?.hasSentMessage === !0 ? `${u.bubbleId}:${u.grouping.toolFormerStatus ?? ""}` : "").join(`
`);
            return [
                a.status,
                a.abortReason,
                a.chatGenerationUUID,
                a.queueItems?.length,
                c.length,
                c.at(-1)?.bubbleId,
                l
            ];
        }, ()=>t.changed(), {
            defer: !0
        })), o)))), i;
}
function Tg_(e) {
    const t = e.header, n = e.composerDataHandle.data;
    return {
        local: t.source === "local",
        coordinator: zse(t),
        parked: Z8h(t),
        pendingInteraction: t.hasPendingInteraction?.value === !0,
        header: t.status.value,
        turn: Eg_(n.status),
        abortReason: n.abortReason,
        generationId: n.chatGenerationUUID,
        queued: (n.queueItems ?? []).map((i)=>i.query)
    };
}
function Eg_(e) {
    switch(e){
        case "none":
            return;
        case "generating":
        case "aborted":
        case "completed":
            return e;
    }
}
function Ig_(e, t) {
    return cg_(e, t) ? "steered" : t.some((i)=>!e.has(i.bubbleId) && i.grouping?.isSteer !== !0 && i.type === Tr.HUMAN) ? "stopped" : "queued";
}
function Ag_(e, t) {
    for (const n of t){
        const i = e.getComposerDataIfLoadedReactive?.(n);
        if (i != null) {
            if (i.hasBlockingPendingActions === !0) return !0;
            continue;
        }
        if (e.allComposersData?.allComposers?.some((s)=>s.composerId === n && s.hasBlockingPendingActions === !0) === !0) return !0;
    }
    return !1;
}
function Rg_(e, { blockedOnlyByAChild: t, ownCloudApproval: n }) {
    const i = e.composerDataHandle.data, r = e.header, s = r?.source !== "local" && r?.hasPendingInteraction?.value === !0;
    if (r?.status?.value !== "needs_attention" && !s && !n) return !1;
    const o = r.hasPendingInteraction?.value === !0 || i.hasPendingPlan === !0 || n || i.hasBlockingPendingActions === !0 && !t;
    return !(zse(r) && !J8h(e) && !o);
}
function Dg_(e, t) {
    const n = e.composerDataHandle.data;
    if (n.status === "generating") return !0;
    const i = e.header;
    if (i?.source !== "cloud" || i.status?.value !== "in_progress") return !1;
    const r = e.backgroundComposerData;
    if (r?.status === void 0) return !0;
    if (r.isKilled === !0) return !1;
    const s = kVt({
        legacyStatus: r.status,
        workflowStatus: r.workflowStatus
    });
    return t ? s : dfh({
        legacyStatus: r.status,
        workflowStatus: r.workflowStatus,
        hasPendingQueueItems: (n.queueItems?.length ?? 0) > 0
    });
}
function J8h(e) {
    const t = e.composerDataHandle.data;
    return t.status === "generating" || t.chatGenerationUUID !== void 0 || (t.queueItems?.length ?? 0) !== 0 || e.header?.status?.value === "in_progress";
}
var e7h;
export { Ag_, Cg_, Dg_, Eg_, Ig_, J8h, Mp_, Q8h, Rg_, Tg_, Vp_, Y8h, Z8h, _g_, bg_, cg_, e7h, sUh, vg_, yg_, z8h };
var __wakaru_Mg__initialized = false;
export function Mg_() {
if (__wakaru_Mg__initialized) return;
__wakaru_Mg__initialized = true;
"use strict";
x(), N4h(), Hu(), ql(), So(), _C(), lg_(), U1e(), XPe(), IVt(), Ode(), iL(), Yv(), pSo(), BPo(), Err(), zPo(), xg_(), VPo(), NPo(), e7h = class {
    constructor(e, t){
        this.agentReference = e, this.services = t;
    }
    isGone() {
        return this.agentReference.isDisposed;
    }
    isParked() {
        const e = this.agentReference.header;
        return Z8h(e) || e.status.value === "in_progress" && this.listener?.pauseIsOpen === !0;
    }
    sendWouldAbortAPark() {
        return Rg_(this.agentReference, {
            blockedOnlyByAChild: this.blockedOnlyByAChild(),
            ownCloudApproval: this.ownCloudApprovalIsPending()
        });
    }
    whenSubmittable() {
        const e = this.agentReference.workspaceFactory;
        return this.agentReference.header?.source === "local" && e !== void 0 ? a8e(e, U0.Composer, xVt) : void 0;
    }
    submitTakesTheQueueSetting() {
        return Dg_(this.agentReference, this.forceSubmitTheWayTypingWould());
    }
    async relay(e, t) {
        if (this.isGone()) return {
            kind: "refused",
            refusal: "agent-unavailable"
        };
        const n = this.listener?.requestOf(e), i = this.forceSubmitTheWayTypingWould(), r = t ? new Set((this.agentReference.composerDataHandle.data.fullConversationHeadersOnly ?? []).map((u)=>u.bubbleId)) : void 0, s = ()=>{
            if (r === void 0) return {
                kind: "accepted"
            };
            let u = Ig_(r, this.agentReference.composerDataHandle.data.fullConversationHeadersOnly ?? []);
            return u === "queued" && i && (u = "stopped"), u === "stopped" && !i && (u = void 0), u === void 0 ? {
                kind: "accepted"
            } : {
                kind: "accepted",
                handover: u
            };
        };
        let o;
        const a = new Promise((u)=>{
            o = u;
        }), c = this.agentReference.submitMessage(e.request, {
            ...n === void 0 ? {} : {
                forceBubbleId: n.lineId
            },
            ...N8h,
            context: ZS(),
            sentByVoiceCall: !0,
            forceSubmit: i,
            modifierKeyStatus: DHv(void 0),
            onDidSendRequest: ()=>{
                o?.();
            }
        }).then(()=>({
                settled: "ok"
            }), (u)=>({
                settled: "error",
                error: u
            }));
        if (t) {
            const u = await Promise.race([
                c.then((h)=>({
                        kind: "submit",
                        result: h
                    })),
                a.then(()=>({
                        kind: "started"
                    }))
            ]);
            if (u.kind === "started") {
                const h = s();
                return c.then((p)=>{
                    p.settled === "error" && this.services.logService.error(`${u9n} composer submit failed after the receipt`, p.error);
                }), h;
            }
            if (u.result.settled === "error") throw u.result.error;
            return s();
        }
        const l = await c;
        if (l.settled === "error") throw l.error;
        return {
            kind: "accepted"
        };
    }
    async readWrittenLines(e) {
        const { composerDataService: t } = this.services, n = this.agentReference.composerDataHandle, i = t.getComposerData(n), r = (i?.fullConversationHeadersOnly ?? []).filter((l)=>l.type === Tr.HUMAN || l.type === Tr.AI), s = (l)=>t.getComposerBubble(n, l), o = Y8h(()=>z8h(i), s);
        let a = [], c = r.length;
        for(; c > 0 && a.length < e;){
            const l = Math.max(0, c - e);
            await this.agentReference.ensureConversationBodies(r.slice(l, c).map((u)=>u.bubbleId)), c = l, a = Mp_(o, r.slice(c), e);
        }
        return a.map(({ row: l, id: u, writer: h, text: p })=>{
            const g = s(l.bubbleId);
            return {
                id: u,
                writer: h,
                text: p,
                atMs: g === void 0 ? void 0 : a7i(g),
                serverId: l.serverBubbleId
            };
        });
    }
    listen(e) {
        if (this.agentReference.header?.status !== void 0) return this.listener = new M4h(Cg_({
            agentReference: this.agentReference,
            composerDataService: this.services.composerDataService,
            logService: this.services.logService,
            turnIsInFlight: ()=>J8h(this.agentReference),
            submitFollowsTheQueueSetting: ()=>this.submitTakesTheQueueSetting()
        }), e), this.listener;
    }
    anchor(e) {
        return Vp_(e, this.agentReference.composerDataHandle.data.fullConversationHeadersOnly, qPo);
    }
    forceSubmitTheWayTypingWould() {
        return RHv({
            queueDefaultBehavior: this.services.configurationService.getValue(cle),
            promptInputForceSubmit: void 0
        });
    }
    ownCloudApprovalIsPending() {
        const e = this.agentReference.header?.id;
        return e === void 0 || e.length === 0 ? !1 : this.services.agents.hasPendingCloudApproval(e);
    }
    blockedOnlyByAChild() {
        const e = this.agentReference.composerDataHandle.data.subagentComposerIds;
        return !zse(this.agentReference.header) || e === void 0 || e.length === 0 || !Ag_(this.services.composerDataService, e) || this.recentBubbleBodyIsMissing() || this.ownQuestionIsPending() ? !1 : !this.services.composerDataService.getIsBlockingUserDecision(this.agentReference.composerDataHandle);
    }
    ownQuestionIsPending() {
        return this.services.composerUtilsService.getHasPendingQuestionnaireAwaitingInput(this.agentReference.composerDataHandle);
    }
    recentBubbleBodyIsMissing() {
        const t = this.agentReference.composerDataHandle.data.fullConversationHeadersOnly;
        for(let n = t.length - 1; n >= 0; n--){
            const i = t[n];
            if (i === void 0) continue;
            if (i.type === Tr.HUMAN) return !1;
            const r = i.grouping?.toolFormerTool;
            if (!(r !== void 0 && r !== nt.ASK_QUESTION) && this.services.composerDataService.getComposerBubble(this.agentReference.composerDataHandle, i.bubbleId) === void 0) return !0;
        }
        return !1;
    }
};

}
