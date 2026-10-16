import { Pdl } from "./cursorDebugHint.js";
import { B0k, lyg } from "./terminal.accessibility.js";
import { $0k, myg } from "./terminal.find.js";
import { H0k, fyg, gyg } from "./terminal.history.js";
import { byg, q0k } from "./terminal.suggest.js";
import { kyg, z0k } from "./terminal.zoom.js";
import { U0k, cyg } from "./terminalAccessibilityConfiguration.js";
import { j0k, uyg } from "./terminalAutoRepliesConfiguration.js";
import { hyg, pyg } from "./terminalCommandGuideConfiguration.js";
import { W0k, vyg } from "./terminalNotificationConfiguration.js";
import { G0k, _yg } from "./terminalStickyScrollConfiguration.js";
import { Gas, Syg } from "./terminalSuggestConfiguration.js";
import { E } from "./tslib.es6.js";
var qas, GAn, wyg, Cyg;
export { Cyg, GAn, qas, wyg };
var __wakaru_Nat_initialized = false;
export function Nat() {
if (__wakaru_Nat_initialized) return;
__wakaru_Nat_initialized = true;
"use strict";
E(), B0k(), U0k(), j0k(), pyg(), $0k(), H0k(), W0k(), G0k(), q0k(), Gas(), z0k(), Pdl(), qas = ((t)=>(t.A11yFocusAccessibleBuffer = "workbench.action.terminal.focusAccessibleBuffer", t.DeveloperRestartPtyHost = "workbench.action.terminal.restartPtyHost", t))(qas || {}), GAn = ((t)=>(t.StickyScrollEnabled = "terminal.integrated.stickyScroll.enabled", t.SuggestEnabled = "terminal.integrated.suggest.enabled", t))(GAn || {}), wyg = {
    ...cyg,
    ...uyg,
    ...hyg,
    ...fyg,
    ...vyg,
    ..._yg,
    ...Syg,
    ...kyg
}, Cyg = [
    ...lyg,
    ...myg,
    ...gyg,
    ...byg
];

}
