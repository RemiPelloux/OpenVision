"use strict";
require.d(exports, {
    D$: ()=>u,
    FC: ()=>l,
    Sc: ()=>i,
    nb: ()=>a
});
var n = require("./module-37949.js"), s = require("./module-2798.js");
const o = (0, n.h)("RemoteConversationActionManager");
Error;
function i(e) {
    return "object" == typeof e && null !== e && "intentional" in e && !0 === e.intentional;
}
class a {
    async pop(e) {}
    async peek(e) {}
}
class c extends Error {
    constructor(){
        super(...arguments), this.name = "ConversationActionMailboxOverflowError";
    }
}
class l {
    constructor(e){
        this.maxActions = e, this.queue = [];
    }
    get length() {
        return this.queue.length;
    }
    push(e) {
        if (!0 === this.interceptor?.(e)) return !1;
        if (this.queue.length >= this.maxActions) throw new c("Conversation action mailbox limit exceeded");
        return this.queue.push(e), !0;
    }
    setInterceptor(e) {
        this.interceptor = e;
        const t = [
            ...this.queue
        ];
        this.clear();
        for (const r of t)e(r) || this.queue.push(r);
    }
    shift() {
        return this.queue.shift();
    }
    peek() {
        return this.queue[0];
    }
    clear() {
        this.queue.length = 0;
    }
}
class u {
    constructor(e, t, r, n){
        this.mailbox = t, this.cancel = r, this.transformedActions = new WeakMap, this.injectionDeliveryBuffer = [], this.injectionAdmittedListeners = new Set, this.listenerCtx = e, this.subagentCanceler = n?.subagentCanceler, this.sideChannelHandlers = n?.sideChannelHandlers ?? {}, this.transform = n?.transform, this.contextInjectionOptions = n?.contextInjection, void 0 !== this.contextInjectionOptions && (this.injectionLedger = new s.y(this.contextInjectionOptions.activeRunId, {
            onStateChange: this.contextInjectionOptions.onInjectionStateChange
        })), t.setInterceptor((e)=>this.handleImmediateAction(e));
    }
    endRun() {
        this.injectionLedger?.endRun({
            retagClaimed: !1
        }), this.resyncOverduePendingSteerFallback();
    }
    resyncOverduePendingSteerFallback() {
        const e = this.injectionLedger?.oldestPendingAdmittedAtMs("user");
        if (void 0 !== this.overduePendingSteerTimer && (clearTimeout(this.overduePendingSteerTimer), this.overduePendingSteerTimer = void 0), void 0 === e) return;
        const t = Math.max(0, e + 3e5 - Date.now()), r = setTimeout(()=>{
            this.overduePendingSteerTimer = void 0;
            const e = this.injectionLedger?.retagQueuedUserInjectionsToNextTurn() ?? [];
            e.length > 0 && o.info(this.listenerCtx, "Overdue pending context injections converted to queued follow-ups", {
                convertedInjectionIds: e
            });
        }, t);
        r.unref?.(), this.overduePendingSteerTimer = r;
    }
    handleImmediateAction(e) {
        if ("cancelAction" === e.action.case) {
            const t = e.action.value.reason || "unknown";
            o.info(this.listenerCtx, "Cancel action received", {
                reason: t
            });
            const r = [
                ...new Set([
                    ...e.action.value.interruptedPendingToolCallResolutions?.resolutions.filter((e)=>"taskResult" === e.resolution.case).map((e)=>e.toolCallId) ?? []
                ])
            ];
            return this.mailbox.clear(), this.injectionDeliveryBuffer.length = 0, this.injectionLedger?.endRun(), this.resyncOverduePendingSteerFallback(), this.subagentCanceler?.cancelAll({
                intentional: !0,
                reason: "cancel action",
                excludeToolCallIds: r
            }), this.cancel(), !0;
        }
        if ("cancelSubagentAction" === e.action.case) {
            const t = e.action.value.subagentId;
            return t && this.subagentCanceler && this.subagentCanceler.cancel(t), !0;
        }
        if ("injectContextAction" === e.action.case) return this.handleInjectContext(e, e.action.value), !0;
        if ("backgroundShellAction" === e.action.case || "backgroundSubagentAction" === e.action.case) {
            const t = e.action.case, r = e.action.value.toolCallId, n = this.sideChannelHandlers[t];
            if (r && n) return n(r).catch((e)=>{
                o.error(this.listenerCtx, `Error in side-channel handler for ${t}`, e);
            }), !0;
        }
        return !1;
    }
    handleInjectContext(e, t) {
        if (void 0 === this.injectionLedger || void 0 === this.contextInjectionOptions) return void o.info(this.listenerCtx, "InjectContextAction received without context-injection support; dropping", {
            injectionId: t.injectionId
        });
        if ("systemContext" === t.payload.case) return o.info(this.listenerCtx, "System context injection rejected", {
            injectionId: t.injectionId,
            producer: t.payload.value.producer
        }), void this.contextInjectionOptions.onInjectionStateChange?.(t.injectionId, {
            kind: "rejected",
            reason: "producer_not_allowlisted"
        });
        if ("userContext" !== t.payload.case || void 0 === t.payload.value.userMessage) return o.info(this.listenerCtx, "Context injection rejected: missing user payload", {
            injectionId: t.injectionId
        }), void this.contextInjectionOptions.onInjectionStateChange?.(t.injectionId, {
            kind: "rejected",
            reason: "invalid_payload"
        });
        const r = this.injectionLedger.admit({
            injectionId: t.injectionId,
            expectedRunId: t.expectedRunId,
            source: "user",
            payload: {
                envelope: e,
                userContext: t.payload.value
            }
        });
        if (o.info(this.listenerCtx, "Context injection admission", {
            injectionId: t.injectionId,
            expectedRunId: t.expectedRunId,
            admission: r.kind,
            ..."rejected" === r.kind ? {
                reason: r.reason
            } : {}
        }), "queued" === r.kind) {
            this.resyncOverduePendingSteerFallback();
            for (const e of this.injectionAdmittedListeners)try {
                e();
            } catch (e) {
                o.error(this.listenerCtx, "Error in injection-admitted listener", e);
            }
        }
        "rejected" === r.kind && this.contextInjectionOptions.onInjectionStateChange?.(t.injectionId, {
            kind: "rejected",
            reason: r.reason
        });
    }
    cancelInjection(e) {
        const t = this.injectionLedger?.cancel(e) ?? !1;
        return t && this.resyncOverduePendingSteerFallback(), t;
    }
    getInjectionState(e) {
        return this.injectionLedger?.getState(e);
    }
    peekIsClaimedInjection() {
        return void 0 !== this.injectionDeliveryBuffer[0];
    }
    failConsumedInjectionDelivery() {
        const e = this.lastConsumedInjectionId;
        if (this.lastConsumedInjectionId = void 0, void 0 === e) return !1;
        const t = this.injectionLedger?.failDeliveredInjection(e) ?? !1;
        return t && o.info(this.listenerCtx, "Consumed injection reverted after turn-build failure", {
            injectionId: e
        }), t;
    }
    getContextInjectionToolSignal() {
        const e = this.injectionLedger;
        if (void 0 !== e) return {
            hasPendingUserInjections: ()=>e.pendingCount("user") > 0,
            onUserInjectionAdmitted: (e)=>(this.injectionAdmittedListeners.add(e), ()=>{
                    this.injectionAdmittedListeners.delete(e);
                })
        };
    }
    claimPendingInjectionsIfIdle() {
        if (void 0 === this.injectionLedger || this.mailbox.length > 0 || this.injectionDeliveryBuffer.length > 0) return;
        const e = this.injectionLedger.claimBatch("user");
        void 0 !== e && (e.injections.forEach((e)=>{
            const { envelope: t, userContext: r } = e.payload;
            this.injectionDeliveryBuffer.push({
                injectionId: e.injectionId,
                action: {
                    _privacyMode: t._privacyMode,
                    triggeringAuthId: t.triggeringAuthId,
                    triggeringUserInfo: t.triggeringUserInfo,
                    action: {
                        case: "userMessageAction",
                        value: {
                            _privacyMode: t._privacyMode,
                            userMessage: r.userMessage,
                            requestContext: r.requestContext,
                            prependUserMessages: []
                        }
                    }
                }
            });
        }), o.info(this.listenerCtx, "Context injection batch claimed", {
            deliveryBatchId: e.deliveryBatchId,
            batchSize: e.injections.length
        }), this.resyncOverduePendingSteerFallback());
    }
    async pop(e) {
        const t = this.injectionDeliveryBuffer.shift();
        if (void 0 !== t) return this.injectionLedger?.ackDeliveredInjection(t.injectionId, this.contextInjectionOptions?.currentStep?.() ?? 0), this.lastConsumedInjectionId = t.injectionId, t.action;
        this.lastConsumedInjectionId = void 0;
        const r = this.mailbox.length, n = this.mailbox.shift(), s = this.mailbox.length;
        return "userMessageAction" === n?.action.case && r >= 3 && o.info(this.listenerCtx, "conversation_action_queue_dequeue", {
            queueDepthBefore: r,
            queueDepthAfter: s,
            actionCase: n.action.case,
            userMessageId: n.action.value.userMessage?.messageId
        }), void 0 === n ? (this.claimPendingInjectionsIfIdle(), void 0 !== this.injectionDeliveryBuffer[0] ? this.pop(e) : void 0) : await this.transformOnce(n);
    }
    async peek(e) {
        if (void 0 !== this.injectionDeliveryBuffer[0]) return this.injectionDeliveryBuffer[0].action;
        const t = this.mailbox.peek();
        return void 0 !== t ? await this.transformOnce(t) : (this.claimPendingInjectionsIfIdle(), this.injectionDeliveryBuffer.at(0)?.action);
    }
    push(e) {
        const t = this.mailbox.length, r = "userMessageAction" === e.action.case ? e.action.value.userMessage?.messageId : void 0, n = "userMessageAction" === e.action.case ? e.action.value.prependUserMessages?.length ?? 0 : 0;
        if (!this.mailbox.push(e)) return;
        const s = this.mailbox.length;
        (n > 0 || s >= 3) && o.info(this.listenerCtx, "conversation_action_queue_enqueue", {
            queueDepthBefore: t,
            queueDepthAfter: s,
            actionCase: e.action.case,
            userMessageId: r,
            prependUserMessagesCount: n
        });
    }
    transformOnce(e) {
        if (void 0 === this.transform) return Promise.resolve(e);
        const t = this.transformedActions.get(e);
        if (void 0 !== t) return t;
        const r = this.transform(e);
        return this.transformedActions.set(e, r), r;
    }
}
