import { Gt, Qe, st, tt } from "./Iwo.js";
import { Il, bn, mP, ud } from "./SZu.js";
import { RF1 } from "./communicationProfileTransport.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Yz, cCe } from "./observableValue.js";
import { Cm, wh } from "./structuredLog.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { AF1, D_, PF1 } from "./yBp.js";
var xbm, Abm, $Kr, oki, fqe, HKr;
export { $Kr, Abm, HKr, fqe, oki, xbm };
var __wakaru_uot_initialized = false;
export function uot() {
if (__wakaru_uot_initialized) return;
__wakaru_uot_initialized = true;
"use strict";
E(), cCe(), Gt(), Qe(), mP(), Rn(), It(), Cm(), RF1(), xbm = 3e4, Abm = 100, $Kr = 12e4, oki = {
    didSignalAuthReady: "code/cursor/didSignalAuthReady",
    didRegisterConnectTransport: "code/cursor/didRegisterConnectTransport",
    willSendFirstConnectRequest: "code/cursor/willSendFirstConnectRequest",
    didReceiveFirstConnectResponse: "code/cursor/didReceiveFirstConnectResponse"
}, fqe = Il("aiConnectRequestService"), HKr = class extends st {
    constructor(t){
        super(), this.structuredLogService = t, this._onDidChangeTransport = this._register(new tt), this.onDidChangeTransport = this._onDidChangeTransport.event, this._provider = new Yz, this._extensionHostProvider = new Yz, this._authReady = new Yz, this._authHasToken = !1, this._transportGeneration = 0, this._sentFirstRequest = !1, this._receivedFirstResponse = !1;
    }
    registerConnectTransportProvider(t) {
        const e = this._markFirstResponse(t);
        return this._extensionHostProvider.set(e), this._setProvider(e);
    }
    registerStartupConnectTransportProvider(t) {
        this._transportGeneration === 0 && this._setProvider(t);
    }
    _setProvider(t) {
        this._transportGeneration === 0 && ud(oki.didRegisterConnectTransport), this._provider.set(this._markFirstRequest(AF1(t))), this._transportRegisteredTime = Date.now();
        const e = ++this._transportGeneration;
        return this._liveTransportGeneration = e, this._onDidChangeTransport.fire(), e;
    }
    markTransportUnavailable(t) {
        this._liveTransportGeneration === t && (this._liveTransportGeneration = void 0, this._provider.clear(), this._extensionHostProvider.clear(), this._onDidChangeTransport.fire());
    }
    isTransportLive() {
        return this._liveTransportGeneration !== void 0;
    }
    _markFirstRequest(t) {
        const e = ()=>{
            this._sentFirstRequest || (this._sentFirstRequest = !0, ud(oki.willSendFirstConnectRequest));
        };
        return {
            unary: (n, i, r, s, o, a, l)=>(e(), t.unary(n, i, r, s, o, a, l)),
            stream: (n, i, r, s, o, a, l)=>(e(), t.stream(n, i, r, s, o, a, l))
        };
    }
    _markFirstResponse(t) {
        const e = ()=>{
            this._receivedFirstResponse || (this._receivedFirstResponse = !0, ud(oki.didReceiveFirstConnectResponse));
        };
        return {
            unary: async (n, i, r, s, o, a, l)=>{
                const c = await t.unary(n, i, r, s, o, a, l);
                return e(), c;
            },
            stream: async (n, i, r, s, o, a, l)=>{
                const c = await t.stream(n, i, r, s, o, a, l);
                return this._receivedFirstResponse ? c : {
                    ...c,
                    message: PF1(c.message, e)
                };
            }
        };
    }
    signalAuthReady(t) {
        this._authReadyTime === void 0 && ud(oki.didSignalAuthReady), this._authHasToken = t, this._authReady.set(!0), this._authReadyTime = Date.now();
        const e = this._transportRegisteredTime !== void 0 && this._authReadyTime > this._transportRegisteredTime, n = {
            isReady: !0,
            hasToken: t,
            raceConditionPrevented: e,
            waitedMs: this._transportRegisteredTime ? this._authReadyTime - this._transportRegisteredTime : void 0
        };
        e && this.structuredLogService.info("auth", "Auth ready signal received - race condition would have been prevented", {
            subkey: "auth_ready_race_prevented",
            hasToken: String(t),
            waitedMs: String(n.waitedMs ?? 0)
        });
    }
    async waitForAuthReady() {
        const t = Date.now();
        try {
            await D_(this._authReady, AbortSignal.timeout(xbm));
            const e = this._authHasToken, n = Date.now() - t;
            return {
                isReady: !0,
                hasToken: e,
                waitedMs: n,
                raceConditionPrevented: n > Abm
            };
        } catch  {
            const e = Date.now() - t;
            return this._authReady.getState().state === "pending" && this.structuredLogService.warn("auth", "Timeout waiting for auth ready signal", {
                subkey: "auth_ready_timeout",
                waitedMs: String(e)
            }), {
                isReady: !1,
                hasToken: !1,
                waitedMs: e
            };
        }
    }
    async transport() {
        try {
            return await D_(this._provider, AbortSignal.timeout($Kr));
        } catch  {
            throw this.structuredLogService.warn("transport", "Connect transport did not register within the wait budget", {
                subkey: "connect_transport_wait_timeout",
                waitedMs: String($Kr),
                registrations: String(this._transportGeneration)
            }), new Error("No Connect transport provider registered.");
        }
    }
    async extensionHostTransport() {
        try {
            return await D_(this._extensionHostProvider, AbortSignal.timeout($Kr));
        } catch  {
            throw new Error("No extension-host Connect transport registered.");
        }
    }
}, HKr = Re([
    F(0, wh)
], HKr), bn(fqe, HKr, 1, 1);

}
