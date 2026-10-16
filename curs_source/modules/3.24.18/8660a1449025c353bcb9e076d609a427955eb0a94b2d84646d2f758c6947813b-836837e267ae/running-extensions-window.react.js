import { Qe } from "./Iwo.js";
import { put } from "./constants_25.js";
import { n4t, pa, zPo } from "./constants_8.js";
import { _s } from "./experimentService.js";
import { MA } from "./extensionManagement_2.js";
import { vTs } from "./extensionRunningLocation.js";
import { yTs } from "./extensionRunningLocationTracker.js";
import { ld } from "./extensions_4.js";
import { A$ } from "./extensions_5.js";
import { cS } from "./glass-clipboard-service.js";
import { hC } from "./glass-environment-service.js";
import { N2 } from "./glass-host-service.js";
import { zc } from "./glass-notification-service.js";
import { xc } from "./glass-storage-service.js";
import { bBi } from "./glass-titlebar.react.js";
import { BS } from "./glass-toast.js";
import { vnn } from "./glass-traffic-lights-spacer.react.js";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
import { In } from "./use-service.react_2.js";
import { Cu } from "./workspaceCollectionService.js";
var fP_, wCc, vP_, _P_;
export { _P_, fP_, vP_, wCc };
var __wakaru_DfT_initialized = false;
export function DfT() {
if (__wakaru_DfT_initialized) return;
__wakaru_DfT_initialized = true;
"use strict";
E(), Mt(), pa(), Qe(), A$(), _s(), MA(), vTs(), yTs(), ld(), Cu(), put(), In(), cS(), hC(), N2(), zc(), BS(), xc(), vnn(), bBi(), fP_ = new Set([
    ...zPo,
    ...n4t
].map((t)=>t.toLowerCase())), wCc = {
    running: 0,
    "disabled-workspace-pending-reload": 1,
    "disabled-globally-pending-reload": 1,
    "disabled-workspace": 2,
    "disabled-globally": 2,
    inactive: 3
}, vP_ = 238, _P_ = 158;

}
