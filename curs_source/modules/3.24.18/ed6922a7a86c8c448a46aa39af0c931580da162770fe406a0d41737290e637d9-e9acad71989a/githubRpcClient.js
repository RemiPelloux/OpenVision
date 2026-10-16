import { VMh, _xo } from "./GithubService.js";
import { Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Sg, jp } from "./aiService.js";
import { Luo, hm } from "./background_composer_pb.js";
import { Rs } from "./code_3.js";
import { Qo } from "./connect-error.js";
import { hg } from "./connect.js";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, pd } from "./qIc.js";
import { x } from "./tslib.es6.js";
var bxo, jMh, ber, yer, Ser;
export { Ser, ber, bxo, jMh, yer };
var __wakaru_qMh_initialized = false;
export function qMh() {
if (__wakaru_qMh_initialized) return;
__wakaru_qMh_initialized = true;
"use strict";
x(), hm(), hg(), Se(), Pn(), Ze(), Sg(), qs(), VMh(), bxo = pd("githubRpcClient"), jMh = class extends Error {
    constructor(){
        super("No GitHub OAuth session available for the current user"), this.name = "NoGithubSessionError";
    }
}, ber = class extends Error {
    constructor(){
        super("GithubRpcClient.request called while ide_make_github_request_enabled gate is off"), this.name = "GithubRpcClientGateOffError";
    }
}, yer = class extends Error {
    constructor(e){
        super(`GithubRpc backend rejected MakeGithubRequest (code: ${Rs[e]})`), this.code = e, this.name = "GithubRpcBackendDisabledError";
    }
}, Ser = class extends we {
    constructor(e, t, n){
        super(), this._aiService = e, this._githubService = t, this._experimentService = n;
    }
    isEnabled() {
        return this._experimentService.checkFeatureGate("ide_make_github_request_enabled", {
            disableExposureLog: !1
        });
    }
    async request(e) {
        if (!this._experimentService.checkFeatureGate("ide_make_github_request_enabled", {
            disableExposureLog: !0
        })) throw new ber;
        const i = e.tokenOverride !== void 0 && e.tokenOverride !== "" ? e.tokenOverride : await this._githubService.getGitHubAccessToken();
        if (i === void 0 || i === "") throw new jMh;
        const r = await this._aiService.backgroundComposerClient();
        let s;
        try {
            s = await r.makeGithubRequest(new Luo({
                method: e.method.toUpperCase(),
                path: e.path,
                bodyJson: e.body !== void 0 ? JSON.stringify(e.body) : void 0,
                githubUserToken: i,
                caller: e.caller,
                host: e.host,
                pathTemplate: e.pathTemplate,
                acceptHeader: e.acceptHeader
            }));
        } catch (o) {
            throw o instanceof Qo && (o.code === Rs.Unimplemented || o.code === Rs.Unavailable) ? new yer(o.code) : o;
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
}, Ser = ie([
    C(0, jp),
    C(1, _xo),
    C(2, Kr)
], Ser), mn(bxo, Ser, 1, 1);

}
