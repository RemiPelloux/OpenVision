import { Ei, Gt, Pn, Qe, tt, xr } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var kEs, hsv, gC;
export { gC, hsv, kEs };
var __wakaru_HOi_initialized = false;
export function HOi() {
if (__wakaru_HOi_initialized) return;
__wakaru_HOi_initialized = true;
"use strict";
E(), Ei(), Gt(), Qe(), kEs = "remoteAgentHost.enrolled", hsv = class {
    constructor(){
        this._onDidChange = new tt, this.onDidChange = this._onDidChange.event, this._onDidChangePending = new tt, this.onDidChangePending = this._onDidChangePending.event, this._onDidChangeConnectionState = new tt, this.onDidChangeConnectionState = this._onDidChangeConnectionState.event, this._onDidChangeDisplayName = new tt, this.onDidChangeDisplayName = this._onDidChangeDisplayName.event, this._onDidChangeKeyRefused = new tt, this.onDidChangeKeyRefused = this._onDidChangeKeyRefused.event, this._enrolled = !1, this._pending = !1, this._connectionState = "disconnected", this._displayName = "", this._keyRefused = !1;
    }
    get enrolled() {
        return this._enrolled;
    }
    get keyRefused() {
        return this._keyRefused;
    }
    setKeyRefused(t) {
        this._keyRefused !== t && (this._keyRefused = t, this._onDidChangeKeyRefused.fire(t));
    }
    get displayName() {
        return this._displayName;
    }
    setDisplayName(t) {
        this._displayName !== t && (this._displayName = t, this._onDidChangeDisplayName.fire(t));
    }
    get pending() {
        return this._pending;
    }
    get connectionState() {
        return this._connectionState;
    }
    setConnectionState(t) {
        this._connectionState !== t && (this._connectionState = t, this._onDidChangeConnectionState.fire(t));
    }
    set(t) {
        this._enrolled !== t && (this._enrolled = t, this._onDidChange.fire(t));
    }
    setRequestHandler(t) {
        return this._requestHandler = t, Pn(()=>{
            this._requestHandler === t && (this._requestHandler = void 0);
        });
    }
    async requestEnabled(t, e = "user") {
        const n = this._requestHandler;
        if (n === void 0) return !1;
        if (this._pending) return this._enrolled;
        this._setPending(!0);
        try {
            return await n(t, e);
        } catch (i) {
            return xr(i), this._enrolled;
        } finally{
            this._setPending(!1);
        }
    }
    _setPending(t) {
        this._pending = t, this._onDidChangePending.fire(t);
    }
}, gC = new hsv;

}
