import { Ec, Qe, Vn } from "./Iwo.js";
import { Qbk, yhg } from "./Ycg.js";
import { aym } from "./agent-host-interaction-projection.ts";
import { $zt, JPe, Uzt, Vxn, _Ei, bEi, hG, jJ, vEi } from "./agent_host_pb.js";
import { qn } from "./async.js";
import { T1 } from "./errors.ts";
import { FO } from "./index_10.ts";
import { hX } from "./index_12.ts";
import { E } from "./tslib.es6.js";
var Shg, khg, whg, Wll, gos;
export { Shg, Wll, gos, khg, whg };
var __wakaru_fos_initialized = false;
export function fos() {
if (__wakaru_fos_initialized) return;
__wakaru_fos_initialized = true;
"use strict";
E(), hX(), FO(), hG(), qn(), Qe(), Shg = 250, khg = "The user was not shown this request because the approval prompt failed", whg = "The user was not shown this request because the interaction watch failed", Wll = class extends T1 {
    constructor(t){
        super("Another client answered this interaction."), this.resolution = t;
    }
}, gos = class {
    constructor(t, e, n, i){
        this.sessionId = t, this.providerService = e, this.logService = n, this.onDidClose = i, this.projection = new aym, this.live = new Map, this.actionable = new Map, this.prompts = new Map, this.requestedInteractions = new Map, this.watchFailureResponses = new Set, this.retryTimer = new Vn, this.watchFailureState = "canRetry", this.disposed = !1;
    }
    bindSurface(t) {
        this.surface = {
            ctx: t.ctx,
            interactionListener: t.interactionListener,
            onSurfaceFailure: t.onSurfaceFailure
        }, this.watchFailureState = "canRetry", this.ensureWatch();
        for (const e of this.actionable.values())this.startPrompt(e);
    }
    observeSessionEvent(t) {
        if (t.event.case === "turnAwaitingInput") {
            const e = new _Ei({
                interactionId: t.event.value.interactionId,
                turnId: t.event.value.turnId,
                question: t.event.value.question
            });
            this.requestedInteractions.set(e.interactionId, e), this.applyChanges(this.projection.observeRequest(e.interactionId)), this.watchFailureState === "unavailable" && !this.surfaceLeavesPending() && this.failCloseInteraction(e);
        } else if (t.event.case === "interactionResolved") {
            const { interactionId: e, resolution: n } = t.event.value;
            this.requestedInteractions.delete(e), this.cancelPrompt(e, n), this.applyChanges(this.projection.observeResolution(e));
        }
    }
    dispose() {
        this.disposed || (this.disposed = !0, this.retryTimer.dispose(), this.clearPending(), this.iterator?.return?.(), this.iterator = void 0, this.requestedInteractions.clear());
    }
    ensureWatch() {
        if (this.disposed || this.iterator !== void 0 || this.watchFailureState === "unavailable") return;
        const t = this.providerService.watchSessionInteractions(new Vxn({
            sessionId: this.sessionId
        }).toBinary())[Symbol.asyncIterator]();
        this.iterator = t;
        const e = ()=>this.disposed || this.iterator !== t;
        (async ()=>{
            let n = !1, i = !1;
            try {
                for(;;){
                    const r = await t.next();
                    if (e()) return;
                    if (r.done) {
                        i = !0;
                        break;
                    }
                    const s = bEi.fromBinary(r.value);
                    if (!(s.event.case !== "snapshot" && s.event.case !== "state")) {
                        this.live.clear();
                        for (const o of s.event.value.interactions)this.live.set(o.interactionId, o);
                        this.applyChanges(this.projection.replacePending(s.event.value.interactions));
                    }
                }
            } catch (r) {
                if (e()) return;
                n = !0, this.logService.warn("[AgentHostInteractionMirror] interaction watch failed", {
                    sessionId: this.sessionId,
                    error: r
                });
            } finally{
                await t.return?.(), e() || (this.iterator = void 0, n && this.watchFailureState === "retryUsed" && (this.watchFailureState = "unavailable", this.surfaceLeavesPending() ? this.logService.warn("[AgentHostInteractionMirror] interaction watch unavailable; leaving the projected turn's interactions pending", {
                    sessionId: this.sessionId
                }) : this.failCloseKnownInteractions()), this.live.clear(), this.clearPending(), i ? (this.retryTimer.dispose(), this.disposed = !0, this.onDidClose?.()) : n && this.watchFailureState === "canRetry" && (this.watchFailureState = "retryUsed", this.retryTimer.value = Ec(()=>{
                    this.retryTimer.clear(), this.ensureWatch();
                }, Shg)));
            }
        })();
    }
    applyChanges(t) {
        for (const e of t){
            if (e.case === "activate") {
                const n = new _Ei(e.interaction);
                this.actionable.set(n.interactionId, n), this.startPrompt(n);
                continue;
            }
            this.actionable.delete(e.interactionId), this.requestedInteractions.has(e.interactionId) || this.cancelPrompt(e.interactionId);
        }
    }
    clearPending() {
        this.applyChanges(this.projection.clearPending());
        for (const t of [
            ...this.prompts.keys()
        ])this.cancelPrompt(t);
    }
    cancelPrompt(t, e) {
        const n = this.prompts.get(t);
        if (n === void 0) return;
        this.prompts.delete(t);
        const i = e !== void 0 && e.case !== "cancelled" && e.case !== "failed" && e.case !== void 0;
        n(i ? new Wll(e) : new T1("Host interaction is no longer pending."));
    }
    startPrompt(t) {
        const e = this.surface, n = e === void 0 ? void 0 : Qbk(e, t);
        if (e === void 0 || n === void 0 || this.prompts.has(t.interactionId)) return;
        const [i, r] = e.ctx.withCancel();
        this.prompts.set(t.interactionId, r);
        const s = (o, a)=>{
            this.logService.warn(`[AgentHostInteractionMirror] projected surface ${a}; leaving the interaction pending`, {
                sessionId: this.sessionId,
                interactionId: t.interactionId,
                error: o
            }), this.prompts.delete(t.interactionId);
        };
        (async ()=>{
            let o;
            try {
                o = await n(i);
            } catch (c) {
                if (i.signal.aborted) return;
                if (e.onSurfaceFailure === "leavePending") {
                    s(c, "could not answer");
                    return;
                }
                const u = yhg(t, khg);
                if (u === void 0) {
                    this.logService.warn("[AgentHostInteractionMirror] surface interaction query failed with no safe fallback; interrupting turn", c), this.interruptTurn(t.turnId);
                    return;
                }
                this.logService.warn("[AgentHostInteractionMirror] surface interaction query failed; sending fail-closed response", c), o = u;
            }
            const a = await this.providerService.respondToInteraction(new $zt({
                sessionId: this.sessionId,
                interactionId: t.interactionId,
                answer: o
            }).toBinary()), l = vEi.fromBinary(a).status;
            l !== Uzt.ACCEPTED && l !== Uzt.ALREADY_RESOLVED && this.logService.warn("[AgentHostInteractionMirror] agent host rejected interaction response", {
                sessionId: this.sessionId,
                interactionId: t.interactionId,
                status: l
            });
        })().catch((o)=>{
            if (!i.signal.aborted) {
                if (e.onSurfaceFailure === "leavePending") {
                    s(o, "could not deliver its answer");
                    return;
                }
                this.logService.warn("[AgentHostInteractionMirror] responding to host interaction failed", {
                    sessionId: this.sessionId,
                    interactionId: t.interactionId,
                    error: o
                }), this.interruptTurn(t.turnId);
            }
        });
    }
    surfaceLeavesPending() {
        return this.surface?.onSurfaceFailure === "leavePending";
    }
    failCloseKnownInteractions() {
        for (const t of this.live.values())this.failCloseInteraction(t);
        for (const t of this.requestedInteractions.values())this.failCloseInteraction(t);
    }
    failCloseInteraction(t) {
        if (this.watchFailureResponses.has(t.interactionId)) return;
        this.watchFailureResponses.add(t.interactionId);
        const e = yhg(t, whg);
        if (e === void 0) {
            this.logService.warn("[AgentHostInteractionMirror] interaction watch failed with no safe fallback; interrupting turn", {
                sessionId: this.sessionId,
                interactionId: t.interactionId
            }), this.interruptTurn(t.turnId);
            return;
        }
        (async ()=>{
            const n = await this.providerService.respondToInteraction(new $zt({
                sessionId: this.sessionId,
                interactionId: t.interactionId,
                answer: e
            }).toBinary()), i = vEi.fromBinary(n).status;
            i === Uzt.ACCEPTED || i === Uzt.ALREADY_RESOLVED || (this.logService.warn("[AgentHostInteractionMirror] agent host rejected fail-closed interaction response; interrupting turn", {
                sessionId: this.sessionId,
                interactionId: t.interactionId,
                status: i
            }), await this.interruptTurn(t.turnId));
        })().catch((n)=>{
            this.logService.warn("[AgentHostInteractionMirror] responding to interaction after watch failure failed; interrupting turn", {
                sessionId: this.sessionId,
                interactionId: t.interactionId,
                error: n
            }), this.interruptTurn(t.turnId);
        });
    }
    async interruptTurn(t) {
        try {
            await this.providerService.interruptTurn(new JPe({
                sessionId: this.sessionId,
                turnId: t,
                reason: "Interaction surface failed",
                initiatedBy: jJ.CLIENT_ERROR
            }).toBinary());
        } catch (e) {
            this.logService.warn("[AgentHostInteractionMirror] interrupting failed interaction turn failed", {
                sessionId: this.sessionId,
                turnId: t,
                error: e
            });
        }
    }
};

}
