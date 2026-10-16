import { bPd } from "./A3u.js";
import { Cl, Se, cn } from "./HVr.js";
import { xDd } from "./agent-host-interaction-projection.ts";
import { Stt, _oe, a3n, bq, c3n, hCt, l3n, mCt, mZi, pCt, pZi, ytt } from "./agent_host_pb.js";
import { bn } from "./async.js";
import { hb } from "./errors.ts";
import { z3 } from "./index_10.ts";
import { ZW } from "./index_12.ts";
import { x } from "./tslib.es6.js";
function JZv(e, t) {
    const { question: n } = t;
    switch(n.case){
        case void 0:
            return;
        case "interactionQuery":
            {
                const i = n.value;
                return async (r)=>({
                        case: "interactionResponse",
                        value: await e.interactionListener.query(r, i)
                    });
            }
        default:
            return async (i)=>{
                if (e.interactionListener.answerHostQuestion === void 0) throw new Error("This surface cannot show a Host question");
                return e.interactionListener.answerHostQuestion(i, n);
            };
    }
}
function X1h(e, t) {
    const { question: n } = e;
    switch(n.case){
        case "interactionQuery":
            {
                const i = bPd(n.value, t);
                return i === void 0 ? void 0 : {
                    case: "interactionResponse",
                    value: i
                };
            }
        case "execApproval":
            return {
                case: "execApproval",
                value: new pCt({
                    approved: !1,
                    reason: t
                })
            };
        case "mcpElicitation":
            return {
                case: "mcpElicitation",
                value: new Stt({
                    action: mCt.CANCEL
                })
            };
        default:
            return;
    }
}
var Z1h, Q1h, J1h, W1o, UQi;
export { J1h, JZv, Q1h, UQi, W1o, X1h, Z1h };
var __wakaru_$Qi_initialized = false;
export function $Qi() {
if (__wakaru_$Qi_initialized) return;
__wakaru_$Qi_initialized = true;
"use strict";
x(), ZW(), z3(), bq(), bn(), Se(), Z1h = 250, Q1h = "The user was not shown this request because the approval prompt failed", J1h = "The user was not shown this request because the interaction watch failed", W1o = class extends hb {
    constructor(e){
        super("Another client answered this interaction."), this.resolution = e;
    }
}, UQi = class {
    constructor(e, t, n, i){
        this.sessionId = e, this.providerService = t, this.logService = n, this.onDidClose = i, this.projection = new xDd, this.live = new Map, this.actionable = new Map, this.prompts = new Map, this.requestedInteractions = new Map, this.watchFailureResponses = new Set, this.retryTimer = new cn, this.watchFailureState = "canRetry", this.disposed = !1;
    }
    bindSurface(e) {
        this.surface = {
            ctx: e.ctx,
            interactionListener: e.interactionListener,
            onSurfaceFailure: e.onSurfaceFailure
        }, this.watchFailureState = "canRetry", this.ensureWatch();
        for (const t of this.actionable.values())this.startPrompt(t);
    }
    observeSessionEvent(e) {
        if (e.event.case === "turnAwaitingInput") {
            const t = new l3n({
                interactionId: e.event.value.interactionId,
                turnId: e.event.value.turnId,
                question: e.event.value.question
            });
            this.requestedInteractions.set(t.interactionId, t), this.applyChanges(this.projection.observeRequest(t.interactionId)), this.watchFailureState === "unavailable" && !this.surfaceLeavesPending() && this.failCloseInteraction(t);
        } else if (e.event.case === "interactionResolved") {
            const { interactionId: t, resolution: n } = e.event.value;
            this.requestedInteractions.delete(t), this.cancelPrompt(t, n), this.applyChanges(this.projection.observeResolution(t));
        }
    }
    dispose() {
        this.disposed || (this.disposed = !0, this.retryTimer.dispose(), this.clearPending(), this.iterator?.return?.(), this.iterator = void 0, this.requestedInteractions.clear());
    }
    ensureWatch() {
        if (this.disposed || this.iterator !== void 0 || this.watchFailureState === "unavailable") return;
        const e = this.providerService.watchSessionInteractions(new pZi({
            sessionId: this.sessionId
        }).toBinary())[Symbol.asyncIterator]();
        this.iterator = e;
        const t = ()=>this.disposed || this.iterator !== e;
        (async ()=>{
            let n = !1, i = !1;
            try {
                for(;;){
                    const r = await e.next();
                    if (t()) return;
                    if (r.done) {
                        i = !0;
                        break;
                    }
                    const s = mZi.fromBinary(r.value);
                    if (!(s.event.case !== "snapshot" && s.event.case !== "state")) {
                        this.live.clear();
                        for (const o of s.event.value.interactions)this.live.set(o.interactionId, o);
                        this.applyChanges(this.projection.replacePending(s.event.value.interactions));
                    }
                }
            } catch (r) {
                if (t()) return;
                n = !0, this.logService.warn("[AgentHostInteractionMirror] interaction watch failed", {
                    sessionId: this.sessionId,
                    error: r
                });
            } finally{
                await e.return?.(), t() || (this.iterator = void 0, n && this.watchFailureState === "retryUsed" && (this.watchFailureState = "unavailable", this.surfaceLeavesPending() ? this.logService.warn("[AgentHostInteractionMirror] interaction watch unavailable; leaving the projected turn's interactions pending", {
                    sessionId: this.sessionId
                }) : this.failCloseKnownInteractions()), this.live.clear(), this.clearPending(), i ? (this.retryTimer.dispose(), this.disposed = !0, this.onDidClose?.()) : n && this.watchFailureState === "canRetry" && (this.watchFailureState = "retryUsed", this.retryTimer.value = Cl(()=>{
                    this.retryTimer.clear(), this.ensureWatch();
                }, Z1h)));
            }
        })();
    }
    applyChanges(e) {
        for (const t of e){
            if (t.case === "activate") {
                const n = new l3n(t.interaction);
                this.actionable.set(n.interactionId, n), this.startPrompt(n);
                continue;
            }
            this.actionable.delete(t.interactionId), this.requestedInteractions.has(t.interactionId) || this.cancelPrompt(t.interactionId);
        }
    }
    clearPending() {
        this.applyChanges(this.projection.clearPending());
        for (const e of [
            ...this.prompts.keys()
        ])this.cancelPrompt(e);
    }
    cancelPrompt(e, t) {
        const n = this.prompts.get(e);
        if (n === void 0) return;
        this.prompts.delete(e);
        const i = t !== void 0 && t.case !== "cancelled" && t.case !== "failed" && t.case !== void 0;
        n(i ? new W1o(t) : new hb("Host interaction is no longer pending."));
    }
    startPrompt(e) {
        const t = this.surface, n = t === void 0 ? void 0 : JZv(t, e);
        if (t === void 0 || n === void 0 || this.prompts.has(e.interactionId)) return;
        const [i, r] = t.ctx.withCancel();
        this.prompts.set(e.interactionId, r);
        const s = (o, a)=>{
            this.logService.warn(`[AgentHostInteractionMirror] projected surface ${a}; leaving the interaction pending`, {
                sessionId: this.sessionId,
                interactionId: e.interactionId,
                error: o
            }), this.prompts.delete(e.interactionId);
        };
        (async ()=>{
            let o;
            try {
                o = await n(i);
            } catch (l) {
                if (i.signal.aborted) return;
                if (t.onSurfaceFailure === "leavePending") {
                    s(l, "could not answer");
                    return;
                }
                const u = X1h(e, Q1h);
                if (u === void 0) {
                    this.logService.warn("[AgentHostInteractionMirror] surface interaction query failed with no safe fallback; interrupting turn", l), this.interruptTurn(e.turnId);
                    return;
                }
                this.logService.warn("[AgentHostInteractionMirror] surface interaction query failed; sending fail-closed response", l), o = u;
            }
            const a = await this.providerService.respondToInteraction(new a3n({
                sessionId: this.sessionId,
                interactionId: e.interactionId,
                answer: o
            }).toBinary()), c = c3n.fromBinary(a).status;
            c !== hCt.ACCEPTED && c !== hCt.ALREADY_RESOLVED && this.logService.warn("[AgentHostInteractionMirror] agent host rejected interaction response", {
                sessionId: this.sessionId,
                interactionId: e.interactionId,
                status: c
            });
        })().catch((o)=>{
            if (!i.signal.aborted) {
                if (t.onSurfaceFailure === "leavePending") {
                    s(o, "could not deliver its answer");
                    return;
                }
                this.logService.warn("[AgentHostInteractionMirror] responding to host interaction failed", {
                    sessionId: this.sessionId,
                    interactionId: e.interactionId,
                    error: o
                }), this.interruptTurn(e.turnId);
            }
        });
    }
    surfaceLeavesPending() {
        return this.surface?.onSurfaceFailure === "leavePending";
    }
    failCloseKnownInteractions() {
        for (const e of this.live.values())this.failCloseInteraction(e);
        for (const e of this.requestedInteractions.values())this.failCloseInteraction(e);
    }
    failCloseInteraction(e) {
        if (this.watchFailureResponses.has(e.interactionId)) return;
        this.watchFailureResponses.add(e.interactionId);
        const t = X1h(e, J1h);
        if (t === void 0) {
            this.logService.warn("[AgentHostInteractionMirror] interaction watch failed with no safe fallback; interrupting turn", {
                sessionId: this.sessionId,
                interactionId: e.interactionId
            }), this.interruptTurn(e.turnId);
            return;
        }
        (async ()=>{
            const n = await this.providerService.respondToInteraction(new a3n({
                sessionId: this.sessionId,
                interactionId: e.interactionId,
                answer: t
            }).toBinary()), i = c3n.fromBinary(n).status;
            i === hCt.ACCEPTED || i === hCt.ALREADY_RESOLVED || (this.logService.warn("[AgentHostInteractionMirror] agent host rejected fail-closed interaction response; interrupting turn", {
                sessionId: this.sessionId,
                interactionId: e.interactionId,
                status: i
            }), await this.interruptTurn(e.turnId));
        })().catch((n)=>{
            this.logService.warn("[AgentHostInteractionMirror] responding to interaction after watch failure failed; interrupting turn", {
                sessionId: this.sessionId,
                interactionId: e.interactionId,
                error: n
            }), this.interruptTurn(e.turnId);
        });
    }
    async interruptTurn(e) {
        try {
            await this.providerService.interruptTurn(new ytt({
                sessionId: this.sessionId,
                turnId: e,
                reason: "Interaction surface failed",
                initiatedBy: _oe.CLIENT_ERROR
            }).toBinary());
        } catch (t) {
            this.logService.warn("[AgentHostInteractionMirror] interrupting failed interaction turn failed", {
                sessionId: this.sessionId,
                turnId: e,
                error: t
            });
        }
    }
};

}
