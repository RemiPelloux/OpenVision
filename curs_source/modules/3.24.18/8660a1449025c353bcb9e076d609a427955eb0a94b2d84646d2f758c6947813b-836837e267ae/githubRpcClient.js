import { Dyg, Udl } from "./GithubService.js";
import { Qe, st } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Dc, jl } from "./aiService.js";
import { lGa, pd } from "./background_composer_pb.js";
import { pr } from "./code_3.js";
import { Us } from "./connect-error.js";
import { dp } from "./connect.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var jdl, Nyg, els, tls, nls;
export { Nyg, els, jdl, nls, tls };
var __wakaru_Lyg_initialized = false;
export function Lyg() {
if (__wakaru_Lyg_initialized) return;
__wakaru_Lyg_initialized = true;
"use strict";
E(), pd(), dp(), Qe(), Rn(), It(), Dc(), _s(), Dyg(), jdl = Il("githubRpcClient"), Nyg = class extends Error {
    constructor(){
        super("No GitHub OAuth session available for the current user"), this.name = "NoGithubSessionError";
    }
}, els = class extends Error {
    constructor(){
        super("GithubRpcClient.request called while ide_make_github_request_enabled gate is off"), this.name = "GithubRpcClientGateOffError";
    }
}, tls = class extends Error {
    constructor(t){
        super(`GithubRpc backend rejected MakeGithubRequest (code: ${pr[t]})`), this.code = t, this.name = "GithubRpcBackendDisabledError";
    }
}, nls = class extends st {
    constructor(t, e, n){
        super(), this._aiService = t, this._githubService = e, this._experimentService = n;
    }
    isEnabled() {
        return this._experimentService.checkFeatureGate("ide_make_github_request_enabled", {
            disableExposureLog: !1
        });
    }
    async request(t) {
        if (!this._experimentService.checkFeatureGate("ide_make_github_request_enabled", {
            disableExposureLog: !0
        })) throw new els;
        const i = t.tokenOverride !== void 0 && t.tokenOverride !== "" ? t.tokenOverride : await this._githubService.getGitHubAccessToken();
        if (i === void 0 || i === "") throw new Nyg;
        const r = await this._aiService.backgroundComposerClient();
        let s;
        try {
            s = await r.makeGithubRequest(new lGa({
                method: t.method.toUpperCase(),
                path: t.path,
                bodyJson: t.body !== void 0 ? JSON.stringify(t.body) : void 0,
                githubUserToken: i,
                caller: t.caller,
                host: t.host,
                pathTemplate: t.pathTemplate,
                acceptHeader: t.acceptHeader
            }));
        } catch (o) {
            throw o instanceof Us && (o.code === pr.Unimplemented || o.code === pr.Unavailable) ? new tls(o.code) : o;
        }
        return {
            status: s.status,
            statusText: s.statusText,
            headers: {
                ...s.headers
            },
            body: s.body
        };
    }
}, nls = Re([
    F(0, jl),
    F(1, Udl),
    F(2, Cr)
], nls), bn(jdl, nls, 1, 1);

}
