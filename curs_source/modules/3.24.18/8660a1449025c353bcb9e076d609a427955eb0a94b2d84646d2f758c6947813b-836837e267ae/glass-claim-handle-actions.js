import { gU0 } from "./BPv.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { hs } from "./commands.js";
import { Ub, py } from "./cursorCredsService.js";
import { Cr, _s } from "./experimentService.js";
import { yp } from "./glass-command-service.js";
import { hC, ow } from "./glass-environment-service.js";
import { Xf, xf } from "./glass-opener-service.js";
import { tsc, uDs } from "./profile-handle-utils.js";
import { E } from "./tslib.es6.js";
var SDs, xFv;
export { SDs, xFv };
var __wakaru_Isc_initialized = false;
export function Isc() {
if (__wakaru_Isc_initialized) return;
__wakaru_Isc_initialized = true;
"use strict";
E(), hC(), Ss(), py(), _s(), tsc(), yp(), Xf(), SDs = "glass.openClaimHandleModal", xFv = {
    account_menu: "glass_account_menu",
    settings: "glass_settings"
}, hs.registerCommand(SDs, (t, e)=>{
    const i = t.get(Cr).checkFeatureGate(uDs, {
        disableExposureLog: !1
    }), r = t.get(ow).isBuilt;
    if (!i && r) return;
    const s = t.get(Ub).getWebsiteUrl().replace(/\/+$/, "");
    let o = "";
    gU0(e) && (t.get(Qr).trackEvent("glass.claim_handle_clicked", {
        source: e
    }), o = `?${new URLSearchParams({
        source: xFv[e]
    })}`), t.get(xf).open(`${s}/profile${o}`, {
        openExternal: !0
    });
});

}
