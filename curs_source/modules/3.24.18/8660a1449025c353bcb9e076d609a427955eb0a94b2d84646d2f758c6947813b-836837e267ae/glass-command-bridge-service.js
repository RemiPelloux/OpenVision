import { bVf, wVf, yVf } from "./BA.js";
import { Gt, Qe, st, tt } from "./Iwo.js";
import { bn } from "./SZu.js";
import { ma, wl } from "./agentRepositoryServiceTypes.js";
import { cat, qCe } from "./agentWindowCommandBridge.js";
import { Rn } from "./extensions.js";
import { kVf } from "./glass-command-bridge-service.types.js";
import { F_, xd } from "./glass-workspace-context-service.js";
import { Hv, vm } from "./glassActiveAgentService.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { $t, Bs } from "./window.js";
var CVf, TVf, tl, fCs;
export { CVf, TVf, fCs, tl };
var __wakaru_mC_initialized = false;
export function mC() {
if (__wakaru_mC_initialized) return;
__wakaru_mC_initialized = true;
"use strict";
E(), Bs(), Gt(), Qe(), Rn(), It(), cat(), wl(), Hv(), xd(), kVf(), CVf = 10, TVf = 300, tl = qCe, fCs = class extends st {
    constructor(t, e, n){
        super(), this._activeAgentService = t, this._agentRepositoryService = e, this._workspaceContextService = n, this._onEmitted = this._register(new tt({
            leakWarningThreshold: TVf,
            leakWarningName: "glassCommandBridge"
        })), this._deferredEnvelopes = new Map, this._deferredEvents = new Map;
    }
    emit(t) {
        if (bVf(t.type)) {
            const e = this._resolveTargetEnvelope();
            this._deferredEnvelopes.set(t.type, e), this._onEmitted.fire({
                event: t,
                envelope: e
            });
            return;
        }
        yVf(t) && this._addDeferredEvent(t), this._onEmitted.fire({
            event: t
        });
    }
    onEmitted(t, e) {
        return this._onEmitted.event(({ event: n })=>{
            this._isEventOfType(n, t) && e(n.payload);
        });
    }
    getDeferredEnvelope(t) {
        return this._deferredEnvelopes.get(t);
    }
    clearDeferred(t) {
        this._deferredEnvelopes.delete(t);
    }
    getDeferredEvent(t, e) {
        const n = this._deferredEvents.get(t);
        if (!(n === void 0 || n.length === 0)) return e === void 0 ? n[0] : n.find(e);
    }
    clearDeferredEvent(t, e) {
        if (e === void 0) {
            this._deferredEvents.delete(t);
            return;
        }
        const n = this._deferredEvents.get(t);
        if (n === void 0) return;
        const i = n.filter((r)=>r !== e);
        if (i.length === 0) {
            this._deferredEvents.delete(t);
            return;
        }
        this._deferredEvents.set(t, i);
    }
    onEmittedInternal(t) {
        return this._onEmitted.event(t);
    }
    _resolveTargetEnvelope() {
        const e = this._activeAgentService.getActiveAgentId() ?? void 0, n = wVf(this._activeAgentService, this._agentRepositoryService, this._workspaceContextService);
        return {
            requestId: $t.crypto.randomUUID(),
            targetWorkspaceId: n,
            targetAgentId: e
        };
    }
    _isEventOfType(t, e) {
        return t.type === e;
    }
    _addDeferredEvent(t) {
        const e = this._deferredEvents.get(t.type) ?? [];
        if (e.push(t), e.length > CVf) {
            const n = e.shift();
            this._resolveDeferredEventAsUnhandled(n);
        }
        this._deferredEvents.set(t.type, e);
    }
    _resolveDeferredEventAsUnhandled(t) {
        t?.type === "sidebarActionRequested" && t.payload.actionId === "automations" && t.payload.onAutomationsNavigationHandled?.(!1);
    }
}, fCs = Re([
    F(0, vm),
    F(1, ma),
    F(2, F_)
], fCs), bn(tl, fCs, 1, 1);

}
