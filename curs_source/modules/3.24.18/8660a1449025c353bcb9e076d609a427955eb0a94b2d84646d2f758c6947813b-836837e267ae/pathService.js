import { Di, Hg, fmr, rd } from "./Iwo.js";
import { jn } from "./SZu.js";
import { fo, ps } from "./environmentService.js";
import { pP } from "./extpath.js";
import { It } from "./instantiation.js";
import { Ki, Ot } from "./network.js";
import { EC, Ul, lh } from "./path_2.js";
import { Nh, Sg } from "./remoteAgentService.js";
import { Aa, Lr } from "./resources.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { bqe } from "./virtualWorkspace.js";
import { Sr, yr } from "./workspace.js";
import { l0m } from "./yBp.js";
var Rd, Uki;
export { Rd, Uki };
var __wakaru_ih_initialized = false;
export function ih() {
if (__wakaru_ih_initialized) return;
__wakaru_ih_initialized = true;
"use strict";
E(), pP(), Ki(), Ul(), Di(), Lr(), fn(), It(), bqe(), Sr(), fo(), Sg(), Rd = jn("pathService"), Uki = class {
    constructor(t, e, n, i){
        this.localUserHome = t, this.remoteAgentService = e, this.environmentService = n, this.contextService = i, this.resolveOS = (async ()=>(await this.remoteAgentService.getEnvironment())?.os || Hg)(), this.resolveUserHome = (async ()=>{
            const r = await this.remoteAgentService.getEnvironment();
            return this.maybeUnresolvedUserHome = r?.userHome ?? t;
        })();
    }
    hasValidBasename(t, e, n) {
        return typeof e == "string" || typeof e > "u" ? this.resolveOS.then((i)=>this.doHasValidBasename(t, i, e)) : this.doHasValidBasename(t, e, n);
    }
    doHasValidBasename(t, e, n) {
        return t.scheme === Ot.file || t.scheme === Ot.vscodeRemote ? fmr(n ?? Aa(t), e === rd.Windows) : !0;
    }
    get defaultUriScheme() {
        return Uki.findDefaultUriScheme(this.environmentService, this.contextService);
    }
    static findDefaultUriScheme(t, e) {
        if (t.remoteAuthority) return Ot.vscodeRemote;
        const n = l0m(e.getWorkspace());
        if (n) return n;
        const i = e.getWorkspace().folders[0];
        if (i) return i.uri.scheme;
        const r = e.getWorkspace().configuration;
        return r ? r.scheme : Ot.file;
    }
    userHome(t) {
        return t?.preferLocal ? this.localUserHome : this.resolveUserHome;
    }
    get resolvedUserHome() {
        return this.maybeUnresolvedUserHome;
    }
    get path() {
        return this.resolveOS.then((t)=>t === rd.Windows ? EC : lh);
    }
    async fileURI(t) {
        let e = "";
        if (await this.resolveOS === rd.Windows && (t = t.replace(/\\/g, "/")), t[0] === "/" && t[1] === "/") {
            const i = t.indexOf("/", 2);
            i === -1 ? (e = t.substring(2), t = "/") : (e = t.substring(2, i), t = t.substring(i) || "/");
        }
        return rt.from({
            scheme: Ot.file,
            authority: e,
            path: t,
            query: "",
            fragment: ""
        });
    }
}, Uki = Re([
    F(1, Nh),
    F(2, ps),
    F(3, yr)
], Uki);

}
