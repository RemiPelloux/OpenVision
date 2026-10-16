import { ASv, DSv, lf } from "./A3u.js";
import { Se, bt, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { RSv } from "./communicationProfileTransport.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { HU, wde } from "./observableValue.js";
import { Ol, mn, pd, wI } from "./qIc.js";
import { Xh, im } from "./structuredLog.js";
import { x } from "./tslib.es6.js";
var zRd, KRd, fWi, DLn, iPe, vWi;
export { DLn, KRd, fWi, iPe, vWi, zRd };
var __wakaru_oUe_initialized = false;
export function oUe() {
if (__wakaru_oUe_initialized) return;
__wakaru_oUe_initialized = true;
"use strict";
x(), wde(), bt(), Se(), wI(), Pn(), Ze(), im(), RSv(), zRd = 3e4, KRd = 100, fWi = 12e4, DLn = {
    didSignalAuthReady: "code/cursor/didSignalAuthReady",
    didRegisterConnectTransport: "code/cursor/didRegisterConnectTransport",
    willSendFirstConnectRequest: "code/cursor/willSendFirstConnectRequest",
    didReceiveFirstConnectResponse: "code/cursor/didReceiveFirstConnectResponse"
}, iPe = pd("aiConnectRequestService"), vWi = class extends we {
    constructor(e){
        super(), this.structuredLogService = e, this._onDidChangeTransport = this._register(new ve), this.onDidChangeTransport = this._onDidChangeTransport.event, this._provider = new HU, this._extensionHostProvider = new HU, this._authReady = new HU, this._authHasToken = !1, this._transportGeneration = 0, this._sentFirstRequest = !1, this._receivedFirstResponse = !1;
    }
    registerConnectTransportProvider(e) {
        const t = this._markFirstResponse(e);
        return this._extensionHostProvider.set(t), this._setProvider(t);
    }
    registerStartupConnectTransportProvider(e) {
        this._transportGeneration === 0 && this._setProvider(e);
    }
    _setProvider(e) {
        this._transportGeneration === 0 && Ol(DLn.didRegisterConnectTransport), this._provider.set(this._markFirstRequest(ASv(e))), this._transportRegisteredTime = Date.now();
        const t = ++this._transportGeneration;
        return this._liveTransportGeneration = t, this._onDidChangeTransport.fire(), t;
    }
    markTransportUnavailable(e) {
        this._liveTransportGeneration === e && (this._liveTransportGeneration = void 0, this._provider.clear(), this._extensionHostProvider.clear(), this._onDidChangeTransport.fire());
    }
    isTransportLive() {
        return this._liveTransportGeneration !== void 0;
    }
    _markFirstRequest(e) {
        const t = ()=>{
            this._sentFirstRequest || (this._sentFirstRequest = !0, Ol(DLn.willSendFirstConnectRequest));
        };
        return {
            unary: (n, i, r, s, o, a, c)=>(t(), e.unary(n, i, r, s, o, a, c)),
            stream: (n, i, r, s, o, a, c)=>(t(), e.stream(n, i, r, s, o, a, c))
        };
    }
    _markFirstResponse(e) {
        const t = ()=>{
            this._receivedFirstResponse || (this._receivedFirstResponse = !0, Ol(DLn.didReceiveFirstConnectResponse));
        };
        return {
            unary: async (n, i, r, s, o, a, c)=>{
                const l = await e.unary(n, i, r, s, o, a, c);
                return t(), l;
            },
            stream: async (n, i, r, s, o, a, c)=>{
                const l = await e.stream(n, i, r, s, o, a, c);
                return this._receivedFirstResponse ? l : {
                    ...l,
                    message: DSv(l.message, t)
                };
            }
        };
    }
    signalAuthReady(e) {
        this._authReadyTime === void 0 && Ol(DLn.didSignalAuthReady), this._authHasToken = e, this._authReady.set(!0), this._authReadyTime = Date.now();
        const t = this._transportRegisteredTime !== void 0 && this._authReadyTime > this._transportRegisteredTime, n = {
            isReady: !0,
            hasToken: e,
            raceConditionPrevented: t,
            waitedMs: this._transportRegisteredTime ? this._authReadyTime - this._transportRegisteredTime : void 0
        };
        t && this.structuredLogService.info("auth", "Auth ready signal received - race condition would have been prevented", {
            subkey: "auth_ready_race_prevented",
            hasToken: String(e),
            waitedMs: String(n.waitedMs ?? 0)
        });
    }
    async waitForAuthReady() {
        const e = Date.now();
        try {
            await lf(this._authReady, AbortSignal.timeout(zRd));
            const t = this._authHasToken, n = Date.now() - e;
            return {
                isReady: !0,
                hasToken: t,
                waitedMs: n,
                raceConditionPrevented: n > KRd
            };
        } catch  {
            const t = Date.now() - e;
            return this._authReady.getState().state === "pending" && this.structuredLogService.warn("auth", "Timeout waiting for auth ready signal", {
                subkey: "auth_ready_timeout",
                waitedMs: String(t)
            }), {
                isReady: !1,
                hasToken: !1,
                waitedMs: t
            };
        }
    }
    async transport() {
        try {
            return await lf(this._provider, AbortSignal.timeout(fWi));
        } catch  {
            throw this.structuredLogService.warn("transport", "Connect transport did not register within the wait budget", {
                subkey: "connect_transport_wait_timeout",
                waitedMs: String(fWi),
                registrations: String(this._transportGeneration)
            }), new Error("No Connect transport provider registered.");
        }
    }
    async extensionHostTransport() {
        try {
            return await lf(this._extensionHostProvider, AbortSignal.timeout(fWi));
        } catch  {
            throw new Error("No extension-host Connect transport registered.");
        }
    }
}, vWi = ie([
    C(0, Xh)
], vWi), mn(iPe, vWi, 1, 1);

}
