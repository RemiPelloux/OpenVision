import { Ei, Gt, Pn, Qe, tt, xr } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var N5v, ure;
export { N5v, ure };
var __wakaru_L5v_initialized = false;
export function L5v() {
if (__wakaru_L5v_initialized) return;
__wakaru_L5v_initialized = true;
"use strict";
E(), Ei(), Gt(), Qe(), N5v = class {
    constructor(){
        this._onDidChange = new tt, this.onDidChange = this._onDidChange.event, this._onDidChangePending = new tt, this.onDidChangePending = this._onDidChangePending.event, this._controllers = [], this._generation = 0, this._pending = [];
    }
    get controllers() {
        return this._controllers;
    }
    get generation() {
        return this._generation;
    }
    get hasControllersListener() {
        return this._onDidChange.hasListeners();
    }
    set(t, e = this._generation) {
        this._controllers = t, this._generation = e, this._onDidChange.fire(t);
    }
    get pending() {
        return this._pending;
    }
    setPending(t) {
        this._pending = t, this._onDidChangePending.fire(t);
    }
    setHandler(t) {
        return this._handler = t, Pn(()=>{
            this._handler === t && (this._handler = void 0);
        });
    }
    async requestRefresh() {
        await this._request((t)=>t.refresh());
    }
    async requestUnpair(t, e) {
        await this._request((n)=>n.unpair(t, e));
    }
    async requestRevoke(t, e) {
        await this._request((n)=>n.revoke(t, e));
    }
    async requestApprove(t) {
        await this._request((e)=>e.approve(t));
    }
    async requestReject(t) {
        await this._request((e)=>e.reject(t));
    }
    async _request(t) {
        const e = this._handler;
        if (e !== void 0) try {
            await t(e);
        } catch (n) {
            xr(n);
        }
    }
}, ure = new N5v;

}
