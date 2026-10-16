import { U2d } from "./A3u.js";
import { Kqr, Ul, hp, jn } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Vr, Yi } from "./environmentService.js";
import { vI } from "./extpath.js";
import { Ze } from "./instantiation.js";
import { gt, li } from "./network.js";
import { Cw, Eu, ba } from "./path_2.js";
import { vn } from "./qIc.js";
import { Ip, Kd } from "./remoteAgentService.js";
import { Li, fo } from "./resources.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Ede } from "./virtualWorkspace.js";
import { Jn, ci } from "./workspace.js";
var zl, aNn;
export { aNn, zl };
var __wakaru_fu_initialized = false;
export function fu() {
if (__wakaru_fu_initialized) return;
__wakaru_fu_initialized = true;
"use strict";
x(), vI(), li(), ba(), jn(), Li(), Qt(), Ze(), Ede(), ci(), Vr(), Ip(), zl = vn("pathService"), aNn = class {
    constructor(e, t, n, i){
        this.localUserHome = e, this.remoteAgentService = t, this.environmentService = n, this.contextService = i, this.resolveOS = (async ()=>(await this.remoteAgentService.getEnvironment())?.os || hp)(), this.resolveUserHome = (async ()=>{
            const r = await this.remoteAgentService.getEnvironment();
            return this.maybeUnresolvedUserHome = r?.userHome ?? e;
        })();
    }
    hasValidBasename(e, t, n) {
        return typeof t == "string" || typeof t > "u" ? this.resolveOS.then((i)=>this.doHasValidBasename(e, i, t)) : this.doHasValidBasename(e, t, n);
    }
    doHasValidBasename(e, t, n) {
        return e.scheme === gt.file || e.scheme === gt.vscodeRemote ? Kqr(n ?? fo(e), t === Ul.Windows) : !0;
    }
    get defaultUriScheme() {
        return aNn.findDefaultUriScheme(this.environmentService, this.contextService);
    }
    static findDefaultUriScheme(e, t) {
        if (e.remoteAuthority) return gt.vscodeRemote;
        const n = U2d(t.getWorkspace());
        if (n) return n;
        const i = t.getWorkspace().folders[0];
        if (i) return i.uri.scheme;
        const r = t.getWorkspace().configuration;
        return r ? r.scheme : gt.file;
    }
    userHome(e) {
        return e?.preferLocal ? this.localUserHome : this.resolveUserHome;
    }
    get resolvedUserHome() {
        return this.maybeUnresolvedUserHome;
    }
    get path() {
        return this.resolveOS.then((e)=>e === Ul.Windows ? Cw : Eu);
    }
    async fileURI(e) {
        let t = "";
        if (await this.resolveOS === Ul.Windows && (e = e.replace(/\\/g, "/")), e[0] === "/" && e[1] === "/") {
            const i = e.indexOf("/", 2);
            i === -1 ? (t = e.substring(2), e = "/") : (t = e.substring(2, i), e = e.substring(i) || "/");
        }
        return Ee.from({
            scheme: gt.file,
            authority: t,
            path: e,
            query: "",
            fragment: ""
        });
    }
}, aNn = ie([
    C(1, Kd),
    C(2, Yi),
    C(3, Jn)
], aNn);

}
