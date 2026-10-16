import { lf } from "./A3u.js";
import { Se, bt, rn, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { Cp, vp } from "./metricsService.js";
import { HU, wde } from "./observableValue.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var G_e, CXi;
export { CXi, G_e };
var __wakaru_H1e_initialized = false;
export function H1e() {
if (__wakaru_H1e_initialized) return;
__wakaru_H1e_initialized = true;
"use strict";
x(), bt(), Se(), wde(), Pn(), Ze(), Cp(), G_e = vn("agentHostProviderService"), CXi = class extends we {
    constructor(e){
        super(), this._metricsService = e, this._handler = new HU, this._onDidChangeRegistration = this._register(new ve), this.onDidChangeRegistration = this._onDidChangeRegistration.event, this._onDidChangePrivateInferenceCatalog = this._register(new ve), this.onDidChangePrivateInferenceCatalog = this._onDidChangePrivateInferenceCatalog.event, this._registrations = 0;
    }
    registerHandler(e) {
        const t = Date.now(), n = t - (this._lastRegistrationChangeAtMs ?? performance.timeOrigin), i = this._registrations === 0 ? "first" : "reregister", r = this._handler.set(e), s = e.onDidChangePrivateInferenceCatalog?.(()=>{
            this._onDidChangePrivateInferenceCatalog.fire();
        });
        return this._registrations++, this._lastRegistrationChangeAtMs = t, this._metricsService.distribution({
            stat: "cursor.agent_host.provider_registered_gap_ms",
            value: n,
            tags: {
                kind: i
            }
        }), this._onDidChangeRegistration.fire(), rn(()=>{
            s?.dispose(), r.dispose(), this._lastRegistrationChangeAtMs = Date.now(), this._metricsService.increment({
                stat: "cursor.agent_host.provider_unregistered"
            }), this._onDidChangeRegistration.fire();
        });
    }
    hasProvider() {
        return this._handler.getState().state === "fulfilled";
    }
    providerLoop() {
        const e = this._handler.getState();
        return e.state === "fulfilled" ? e.value.loop : void 0;
    }
    getRegistrationDiagnostics() {
        const e = this._handler.getState().state;
        return {
            state: e,
            generation: this._handler.peekWriteVersion(),
            msSinceLastChange: this._lastRegistrationChangeAtMs === void 0 ? -1 : Date.now() - this._lastRegistrationChangeAtMs,
            registrations: this._registrations,
            reason: e === "fulfilled" ? "registered" : this._registrations === 0 ? "never_registered" : "unregistered"
        };
    }
    async waitForProviderRegistration(e) {
        await lf(this._handler, e);
    }
    async createSession(e, t) {
        await (await lf(this._handler)).createSession(e, t);
    }
    async ensureLoaded(e) {
        return (await lf(this._handler)).ensureLoaded(e);
    }
    async forkSession(e, t) {
        return (await lf(this._handler)).forkSession(e, t);
    }
    async listSessions(e) {
        return (await lf(this._handler)).listSessions(e);
    }
    async *watchSessions(e, t) {
        yield* (await lf(this._handler)).watchSessions(e, t);
    }
    async sendMessage(e, t) {
        return (await lf(this._handler)).sendMessage(e, t);
    }
    async sendAction(e, t) {
        return (await lf(this._handler)).sendAction(e, t);
    }
    async offerRequestContextOverlay(e, t) {
        await (await lf(this._handler)).offerRequestContextOverlay?.(e, t);
    }
    async deleteSession(e) {
        return (await lf(this._handler)).deleteSession(e);
    }
    async interruptTurn(e) {
        return (await lf(this._handler)).interruptTurn(e);
    }
    async cancelQueuedTurn(e) {
        return (await lf(this._handler)).cancelQueuedTurn(e);
    }
    async respondToInteraction(e) {
        return (await lf(this._handler)).respondToInteraction(e);
    }
    async *watchSessionInteractions(e) {
        yield* (await lf(this._handler)).watchSessionInteractions(e);
    }
    async *watchSessionBackgroundWork(e) {
        yield* (await lf(this._handler)).watchSessionBackgroundWork(e);
    }
    async *watchSessionTurnLifecycle(e) {
        yield* (await lf(this._handler)).watchSessionTurnLifecycle(e);
    }
    async abortBackgroundWork(e) {
        return (await lf(this._handler)).abortBackgroundWork(e);
    }
    async abortAllBackgroundWork(e) {
        return (await lf(this._handler)).abortAllBackgroundWork(e);
    }
    async *attachSession(e, t) {
        yield* (await lf(this._handler)).attachSession(e, t);
    }
    async getSessionBlobs(e) {
        return (await lf(this._handler)).getSessionBlobs(e);
    }
    async *readFile(e, t) {
        yield* (await lf(this._handler)).readFile(e, t);
    }
    async listWorkspaces(e) {
        return (await lf(this._handler)).listWorkspaces(e);
    }
    async setSessionTitle(e) {
        return (await lf(this._handler)).setSessionTitle(e);
    }
    async fetchPrivateInferenceCatalog() {
        return (await lf(this._handler)).fetchPrivateInferenceCatalog();
    }
    async fetchPromptQualityReport(e) {
        return (await lf(this._handler)).fetchPromptQualityReport(e);
    }
    async generatePrivateInferenceChatTitle(e, t) {
        return (await lf(this._handler)).generatePrivateInferenceChatTitle(e, t);
    }
}, CXi = ie([
    C(0, vp)
], CXi), mn(G_e, CXi, 1);

}
