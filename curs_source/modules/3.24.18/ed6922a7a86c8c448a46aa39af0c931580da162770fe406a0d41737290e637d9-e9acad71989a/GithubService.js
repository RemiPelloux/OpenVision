import { Se, bt, ja, si, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Cq, Jde } from "./authentication.js";
import { Pn } from "./extensions.js";
import { Ml } from "./index.ts";
import { Ze } from "./instantiation.js";
import { mn, pd } from "./qIc.js";
import { x } from "./tslib.es6.js";
var fer, ver, _xo, _er;
export { _er, _xo, fer, ver };
var __wakaru_VMh_initialized = false;
export function VMh() {
if (__wakaru_VMh_initialized) return;
__wakaru_VMh_initialized = true;
"use strict";
x(), Ml(), si(), bt(), Se(), Pn(), Ze(), Jde(), fer = [
    "repo"
], ver = "github", _xo = pd("githubService"), _er = class extends we {
    constructor(e){
        super(), this.authenticationService = e, this._onDidChangeGitHubConnection = this._register(new ve), this.onDidChangeGitHubConnection = this._onDidChangeGitHubConnection.event, this._onDidFinishGitHubLogin = this._register(new ve), this.onDidFinishGitHubLogin = this._onDidFinishGitHubLogin.event, this._refreshInFlight = !1, this._refreshPending = !1, this._register(this.authenticationService.onDidChangeSessions((t)=>{
            t.providerId !== "github" && t.providerId !== "cursor-github" || this._scheduleRefresh();
        })), this._register(this.authenticationService.onDidRegisterAuthenticationProvider((t)=>{
            t.id !== "github" && t.id !== "cursor-github" || this._scheduleRefresh();
        })), this._register(this.authenticationService.onDidUnregisterAuthenticationProvider((t)=>{
            t.id !== "github" && t.id !== "cursor-github" || this._scheduleRefresh();
        })), this._scheduleRefresh();
    }
    async hasGitHubConnection() {
        try {
            return (await this.authenticationService.getSessions(ver, fer, void 0, !0)).length > 0;
        } catch  {
            return !1;
        }
    }
    async triggerGitHubLogin() {
        try {
            return (await this.authenticationService.createSession(ver, fer, {
                activateImmediate: !0
            }))?.accessToken ? (this._onDidChangeGitHubConnection.fire(!0), this._onDidFinishGitHubLogin.fire("success"), !0) : (this._onDidFinishGitHubLogin.fire("failed"), !1);
        } catch (e) {
            const t = ja(e) ? "cancelled" : "failed";
            return this._onDidFinishGitHubLogin.fire(t), !1;
        }
    }
    async getGitHubAccessToken() {
        try {
            return (await this.authenticationService.getSessions(ver, fer, void 0, !0))[0]?.accessToken;
        } catch  {
            return;
        }
    }
    _scheduleRefresh() {
        if (this._refreshInFlight) {
            this._refreshPending = !0;
            return;
        }
        this._doRefresh();
    }
    async _doRefresh() {
        this._refreshInFlight = !0, this._refreshPending = !1;
        try {
            const e = await this.hasGitHubConnection();
            this._store.isDisposed || this._onDidChangeGitHubConnection.fire(e);
        } finally{
            this._refreshInFlight = !1, this._refreshPending && !this._store.isDisposed && (this._refreshPending = !1, clearTimeout(this._refreshDebounceTimer), this._refreshDebounceTimer = setTimeout(()=>this._scheduleRefresh(), 200));
        }
    }
    dispose() {
        clearTimeout(this._refreshDebounceTimer), super.dispose();
    }
}, _er = ie([
    C(0, Cq)
], _er), mn(_xo, _er, 1, 1);

}
