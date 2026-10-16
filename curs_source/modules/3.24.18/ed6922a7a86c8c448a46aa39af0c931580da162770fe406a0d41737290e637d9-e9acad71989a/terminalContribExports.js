import { dxo } from "./cursorDebugHint.js";
import { Ar_, _Mh } from "./terminal.accessibility.js";
import { CMh, Mr_ } from "./terminal.find.js";
import { EMh, Pr_, TMh } from "./terminal.history.js";
import { AMh, Or_ } from "./terminal.suggest.js";
import { Fr_, MMh } from "./terminal.zoom.js";
import { Rr_, bMh } from "./terminalAccessibilityConfiguration.js";
import { Dr_, yMh } from "./terminalAutoRepliesConfiguration.js";
import { kMh, wMh } from "./terminalCommandGuideConfiguration.js";
import { Lr_, xMh } from "./terminalNotificationConfiguration.js";
import { IMh, Nr_ } from "./terminalStickyScrollConfiguration.js";
import { DMh, aer } from "./terminalSuggestConfiguration.js";
import { x } from "./tslib.es6.js";
var cer, zjt, PMh, LMh;
export { LMh, PMh, cer, zjt };
var __wakaru_C8e_initialized = false;
export function C8e() {
if (__wakaru_C8e_initialized) return;
__wakaru_C8e_initialized = true;
"use strict";
x(), Ar_(), Rr_(), Dr_(), wMh(), Mr_(), Pr_(), Lr_(), Nr_(), Or_(), aer(), Fr_(), dxo(), cer = ((e)=>(e.A11yFocusAccessibleBuffer = "workbench.action.terminal.focusAccessibleBuffer", e.DeveloperRestartPtyHost = "workbench.action.terminal.restartPtyHost", e))(cer || {}), zjt = ((e)=>(e.StickyScrollEnabled = "terminal.integrated.stickyScroll.enabled", e.SuggestEnabled = "terminal.integrated.suggest.enabled", e))(zjt || {}), PMh = {
    ...bMh,
    ...yMh,
    ...kMh,
    ...EMh,
    ...xMh,
    ...IMh,
    ...DMh,
    ...MMh
}, LMh = [
    ..._Mh,
    ...CMh,
    ...TMh,
    ...AMh
];

}
