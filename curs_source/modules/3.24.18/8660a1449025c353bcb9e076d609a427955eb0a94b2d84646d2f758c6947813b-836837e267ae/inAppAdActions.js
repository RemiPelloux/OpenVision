import { Rs, ss } from "./authenticationService.js";
import { LP, uC } from "./backgroundComposer.js";
import { hs, rs } from "./commands.js";
import { Frl, Orl, QTi, RA, tme } from "./glassModeConstants.js";
import { D0c, YpT } from "./mE_.js";
import { kc, qc } from "./opener.js";
import { L0c } from "./scmConnectAdUtils.js";
import { PAe, zde } from "./server_config_pb.js";
import { E } from "./tslib.es6.js";
var B0c, U0c, xR_, AR_, RR_, j0c;
export { AR_, B0c, RR_, U0c, j0c, xR_ };
var __wakaru_$0c_initialized = false;
export function $0c() {
if (__wakaru_$0c_initialized) return;
__wakaru_$0c_initialized = true;
"use strict";
E(), zde(), rs(), qc(), LP(), Rs(), zde(), L0c(), RA(), B0c = "cursorai.action.switchToModelSlug", U0c = "cursor.connectSourceControlFromInAppAd", xR_ = "cursor.reviewBugbotFromAd", AR_ = new Set([
    B0c,
    U0c
]), RR_ = new Set([
    tme,
    Orl,
    QTi,
    Frl
]), j0c = new WeakMap, hs.registerCommand(U0c, async (t, e)=>{
    const n = t.get(uC), i = t.get(kc), r = t.get(ss), s = n.getAvailableRemotes(), o = YpT(e, s);
    if (o === void 0) return {
        shouldDismiss: !1
    };
    const a = D0c(e?.remoteUrl ?? o.url), l = await n.hasGithubAccess({
        poll: !1,
        selectedRemote: o,
        skipCache: !0
    });
    return l.hasAccess ? {
        shouldDismiss: !0
    } : l.githubRedirectUrl ? (await i.open(l.githubRedirectUrl, {
        fromUserGesture: !0
    }), {
        shouldDismiss: !0
    }) : a === PAe.GITLAB ? (await r.integrations(), {
        shouldDismiss: !0
    }) : (await n.openGithubConnectUrl(o), {
        shouldDismiss: !0
    });
});

}
