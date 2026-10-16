import { Ei, Qe } from "./Iwo.js";
import { qn } from "./async.js";
import { Rs } from "./authenticationService.js";
import { JUl } from "./browser-tab-privacy.js";
import { yo } from "./cancellation.js";
import { Sx } from "./files.js";
import { hC } from "./glass-environment-service.js";
import { hv } from "./glass-file-service.js";
import { Jye } from "./glass-language-service.js";
import { Zu } from "./glass-log-service.js";
import { zc } from "./glass-notification-service.js";
import { vT } from "./glass-tab-persistence-service.contract.js";
import { Hv } from "./glassActiveAgentService.js";
import { Xy } from "./hash.js";
import { Ki, Ot } from "./network.js";
import { Bt } from "./nls.js";
import { Lr } from "./resources.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { l3 } from "./workspace-services_2.js";
import { Lpe } from "./workspaceConnectionService.js";
var nMv, iMv, rMv, sMv;
export { iMv, nMv, rMv, sMv };
var __wakaru_oMv_initialized = false;
export function oMv() {
if (__wakaru_oMv_initialized) return;
__wakaru_oMv_initialized = true;
"use strict";
E(), hC(), hv(), Jye(), Zu(), zc(), qn(), yo(), Ei(), Xy(), Qe(), Ki(), Lr(), fn(), Bt(), Hv(), Rs(), Lpe(), JUl(), l3(), vT(), nMv = new Set([
    Ot.file,
    Ot.vscodeRemote,
    Ot.cursorWorker
]), iMv = "HtmlBrowserSnapshots", rMv = 15e3, sMv = 50 * Sx.MB;

}
