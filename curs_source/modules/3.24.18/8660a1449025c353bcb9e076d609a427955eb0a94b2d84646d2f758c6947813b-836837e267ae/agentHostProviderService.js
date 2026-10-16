import { Gt, Pn, Qe, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Uh, ip } from "./metricsService.js";
import { Yz, cCe } from "./observableValue.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { D_ } from "./yBp.js";
var TX, zis;
export { TX, zis };
var __wakaru_fle_initialized = false;
export function fle() {
if (__wakaru_fle_initialized) return;
__wakaru_fle_initialized = true;
"use strict";
E(), Gt(), Qe(), cCe(), Rn(), It(), ip(), TX = jn("agentHostProviderService"), zis = class extends st {
    constructor(t){
        super(), this._metricsService = t, this._handler = new Yz, this._onDidChangeRegistration = this._register(new tt), this.onDidChangeRegistration = this._onDidChangeRegistration.event, this._onDidChangePrivateInferenceCatalog = this._register(new tt), this.onDidChangePrivateInferenceCatalog = this._onDidChangePrivateInferenceCatalog.event, this._registrations = 0;
    }
    registerHandler(t) {
        const e = Date.now(), n = e - (this._lastRegistrationChangeAtMs ?? performance.timeOrigin), i = this._registrations === 0 ? "first" : "reregister", r = this._handler.set(t), s = t.onDidChangePrivateInferenceCatalog?.(()=>{
            this._onDidChangePrivateInferenceCatalog.fire();
        });
        return this._registrations++, this._lastRegistrationChangeAtMs = e, this._metricsService.distribution({
            stat: "cursor.agent_host.provider_registered_gap_ms",
            value: n,
            tags: {
                kind: i
            }
        }), this._onDidChangeRegistration.fire(), Pn(()=>{
            s?.dispose(), r.dispose(), this._lastRegistrationChangeAtMs = Date.now(), this._metricsService.increment({
                stat: "cursor.agent_host.provider_unregistered"
            }), this._onDidChangeRegistration.fire();
        });
    }
    hasProvider() {
        return this._handler.getState().state === "fulfilled";
    }
    providerLoop() {
        const t = this._handler.getState();
        return t.state === "fulfilled" ? t.value.loop : void 0;
    }
    getRegistrationDiagnostics() {
        const t = this._handler.getState().state;
        return {
            state: t,
            generation: this._handler.peekWriteVersion(),
            msSinceLastChange: this._lastRegistrationChangeAtMs === void 0 ? -1 : Date.now() - this._lastRegistrationChangeAtMs,
            registrations: this._registrations,
            reason: t === "fulfilled" ? "registered" : this._registrations === 0 ? "never_registered" : "unregistered"
        };
    }
    async waitForProviderRegistration(t) {
        await D_(this._handler, t);
    }
    async createSession(t, e) {
        await (await D_(this._handler)).createSession(t, e);
    }
    async ensureLoaded(t) {
        return (await D_(this._handler)).ensureLoaded(t);
    }
    async forkSession(t, e) {
        return (await D_(this._handler)).forkSession(t, e);
    }
    async listSessions(t) {
        return (await D_(this._handler)).listSessions(t);
    }
    async *watchSessions(t, e) {
        yield* (await D_(this._handler)).watchSessions(t, e);
    }
    async sendMessage(t, e) {
        return (await D_(this._handler)).sendMessage(t, e);
    }
    async sendAction(t, e) {
        return (await D_(this._handler)).sendAction(t, e);
    }
    async offerRequestContextOverlay(t, e) {
        await (await D_(this._handler)).offerRequestContextOverlay?.(t, e);
    }
    async deleteSession(t) {
        return (await D_(this._handler)).deleteSession(t);
    }
    async interruptTurn(t) {
        return (await D_(this._handler)).interruptTurn(t);
    }
    async cancelQueuedTurn(t) {
        return (await D_(this._handler)).cancelQueuedTurn(t);
    }
    async respondToInteraction(t) {
        return (await D_(this._handler)).respondToInteraction(t);
    }
    async *watchSessionInteractions(t) {
        yield* (await D_(this._handler)).watchSessionInteractions(t);
    }
    async *watchSessionBackgroundWork(t) {
        yield* (await D_(this._handler)).watchSessionBackgroundWork(t);
    }
    async *watchSessionTurnLifecycle(t) {
        yield* (await D_(this._handler)).watchSessionTurnLifecycle(t);
    }
    async abortBackgroundWork(t) {
        return (await D_(this._handler)).abortBackgroundWork(t);
    }
    async abortAllBackgroundWork(t) {
        return (await D_(this._handler)).abortAllBackgroundWork(t);
    }
    async *attachSession(t, e) {
        yield* (await D_(this._handler)).attachSession(t, e);
    }
    async getSessionBlobs(t) {
        return (await D_(this._handler)).getSessionBlobs(t);
    }
    async *readFile(t, e) {
        yield* (await D_(this._handler)).readFile(t, e);
    }
    async listWorkspaces(t) {
        return (await D_(this._handler)).listWorkspaces(t);
    }
    async setSessionTitle(t) {
        return (await D_(this._handler)).setSessionTitle(t);
    }
    async fetchPrivateInferenceCatalog() {
        return (await D_(this._handler)).fetchPrivateInferenceCatalog();
    }
    async fetchPromptQualityReport(t) {
        return (await D_(this._handler)).fetchPromptQualityReport(t);
    }
    async generatePrivateInferenceChatTitle(t, e) {
        return (await D_(this._handler)).generatePrivateInferenceChatTitle(t, e);
    }
}, zis = Re([
    F(0, Uh)
], zis), bn(TX, zis, 1);

}
