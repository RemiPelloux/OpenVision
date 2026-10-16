import { mce } from "./PullRequestRepositoryService.js";
import { iS } from "./adminSettingsService.js";
import { wl } from "./agentRepositoryServiceTypes.js";
import { Dc } from "./aiService.js";
import { Rs } from "./authenticationService.js";
import { JUl } from "./browser-tab-privacy.js";
import { Rme } from "./cloudAgentPullRequestUtils.js";
import { Nw } from "./cloudEnvironmentTemplateService.js";
import { py } from "./cursorCredsService.js";
import { Du } from "./dashboard_pb.js";
import { dCs } from "./draftAgentConstants.js";
import { k_ } from "./editor-panel-tab-kind.js";
import { _s } from "./experimentService.js";
import { mC } from "./glass-command-bridge-service.js";
import { yp } from "./glass-command-service.js";
import { Nme } from "./glass-layout-service.contract.js";
import { Xf } from "./glass-opener-service.js";
import { VXt } from "./glass-reveal-file-in-os.js";
import { xc } from "./glass-storage-service.js";
import { NE } from "./glass-tab-persistence-constants.js";
import { vT } from "./glass-tab-persistence-service.contract.js";
import { WX } from "./glass-tab-scope.js";
import { xd } from "./glass-workspace-context-service.js";
import { OG } from "./glass-workspaces-management-service.js";
import { Hv } from "./glassActiveAgentService.js";
import { Ki, Ot } from "./network.js";
import { gCs } from "./openFileInStableTabRouting.js";
import { tZ } from "./per-branch-pr-tabs.js";
import { ijl } from "./pr-link-intercept-query.js";
import { o4w } from "./pr-query-prefetch.js";
import { INn } from "./pr-tab-identity.js";
import { sMe } from "./prLifecycleStore.js";
import { bE } from "./privacy_mode_pb.js";
import { Mk } from "./pullRequestIdentity.js";
import { PLi } from "./temporary-tabs.js";
import { E } from "./tslib.es6.js";
import { tF } from "./tunnel.js";
import { fn } from "./uri.js";
import { wu } from "./utilities_3.js";
import { l3 } from "./workspace-services_2.js";
var ojl, ajl, DVf, NVf, ljl, LVf, OVf;
export { DVf, LVf, NVf, OVf, ajl, ljl, ojl };
var __wakaru_DLi_initialized = false;
export function DLi() {
if (__wakaru_DLi_initialized) return;
__wakaru_DLi_initialized = true;
"use strict";
E(), OG(), Du(), bE(), Ki(), fn(), wu(), tF(), xd(), Nw(), wl(), Rme(), mce(), sMe(), dCs(), Hv(), Mk(), Dc(), py(), iS(), Rs(), _s(), tZ(), gCs(), yp(), mC(), VXt(), Nme(), Xf(), o4w(), xc(), NE(), vT(), k_(), JUl(), WX(), ijl(), INn(), PLi(), l3(), gCs(), ojl = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), ajl = (t)=>{
    throw TypeError(t);
}, DVf = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && ajl("Object expected");
        var i, r;
        n && (i = e[ojl("asyncDispose")]), i === void 0 && (i = e[ojl("dispose")], n && (r = i)), typeof i != "function" && ajl("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), t.push([
            n,
            i,
            e
        ]);
    } else n && t.push([
        n
    ]);
    return e;
}, NVf = (t, e, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, l, c) {
        return c = Error(l), c.name = "SuppressedError", c.error = o, c.suppressed = a, c;
    }, r = (o)=>e = n ? new i(o, e, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = t.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (l)=>(r(l), s()));
        } catch (l) {
            r(l);
        }
        if (n) throw e;
    };
    return s();
}, ljl = new Set([
    Ot.file,
    Ot.untitled,
    Ot.vscodeFileResource,
    Ot.vscodeRemote,
    Ot.vscodeRemoteResource
]), LVf = new Set([
    ...ljl,
    Ot.vscodeTerminal
]), OVf = new Set([
    Ot.http,
    Ot.https
]);

}
