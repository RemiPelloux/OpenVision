import { Ei, Gt, Qe, Ya, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Ple, oMe } from "./authentication.js";
import { Rn } from "./extensions.js";
import { nl } from "./index.ts";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Zas, Qas, Udl, Jas;
export { Jas, Qas, Udl, Zas };
var __wakaru_Dyg_initialized = false;
export function Dyg() {
if (__wakaru_Dyg_initialized) return;
__wakaru_Dyg_initialized = true;
"use strict";
E(), nl(), Ei(), Gt(), Qe(), Rn(), It(), oMe(), Zas = [
    "repo"
], Qas = "github", Udl = Il("githubService"), Jas = class extends st {
    constructor(t){
        super(), this.authenticationService = t, this._onDidChangeGitHubConnection = this._register(new tt), this.onDidChangeGitHubConnection = this._onDidChangeGitHubConnection.event, this._onDidFinishGitHubLogin = this._register(new tt), this.onDidFinishGitHubLogin = this._onDidFinishGitHubLogin.event, this._refreshInFlight = !1, this._refreshPending = !1, this._register(this.authenticationService.onDidChangeSessions((e)=>{
            e.providerId !== "github" && e.providerId !== "cursor-github" || this._scheduleRefresh();
        })), this._register(this.authenticationService.onDidRegisterAuthenticationProvider((e)=>{
            e.id !== "github" && e.id !== "cursor-github" || this._scheduleRefresh();
        })), this._register(this.authenticationService.onDidUnregisterAuthenticationProvider((e)=>{
            e.id !== "github" && e.id !== "cursor-github" || this._scheduleRefresh();
        })), this._scheduleRefresh();
    }
    async hasGitHubConnection() {
        try {
            return (await this.authenticationService.getSessions(Qas, Zas, void 0, !0)).length > 0;
        } catch  {
            return !1;
        }
    }
    async triggerGitHubLogin() {
        try {
            return (await this.authenticationService.createSession(Qas, Zas, {
                activateImmediate: !0
            }))?.accessToken ? (this._onDidChangeGitHubConnection.fire(!0), this._onDidFinishGitHubLogin.fire("success"), !0) : (this._onDidFinishGitHubLogin.fire("failed"), !1);
        } catch (t) {
            const e = Ya(t) ? "cancelled" : "failed";
            return this._onDidFinishGitHubLogin.fire(e), !1;
        }
    }
    async getGitHubAccessToken() {
        try {
            return (await this.authenticationService.getSessions(Qas, Zas, void 0, !0))[0]?.accessToken;
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
            const t = await this.hasGitHubConnection();
            this._store.isDisposed || this._onDidChangeGitHubConnection.fire(t);
        } finally{
            this._refreshInFlight = !1, this._refreshPending && !this._store.isDisposed && (this._refreshPending = !1, clearTimeout(this._refreshDebounceTimer), this._refreshDebounceTimer = setTimeout(()=>this._scheduleRefresh(), 200));
        }
    }
    dispose() {
        clearTimeout(this._refreshDebounceTimer), super.dispose();
    }
}, Jas = Re([
    F(0, Ple)
], Jas), bn(Udl, Jas, 1, 1);

}
