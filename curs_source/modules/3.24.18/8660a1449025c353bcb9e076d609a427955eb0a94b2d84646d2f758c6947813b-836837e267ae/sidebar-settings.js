import { xc } from "./glass-storage-service.js";
import { zMs } from "./section-order.js";
import { E } from "./tslib.es6.js";
import { o9 } from "./types_12.js";
import { o4i } from "./utils_38.js";
var O5n, grc, frc, vrc, _rc, bOv;
export { O5n, _rc, bOv, frc, grc, vrc };
var __wakaru_mEe_initialized = false;
export function mEe() {
if (__wakaru_mEe_initialized) return;
__wakaru_mEe_initialized = true;
"use strict";
E(), xc(), o9(), zMs(), o4i(), O5n = "cursor/glassSidebarSettings", grc = "cursor/glass.claudeCodeImportFilterSurfaced", frc = "cursor/glass.mobileSourceFilterSurfaced", vrc = "cursor/glass.grokBotSourceFilterDefaultOn", _rc = "cursor/glass.errorShowValueDefaultOn", bOv = new Set([
    "archived_only",
    "recency:within_day",
    "recency:within_week",
    "recency:within_month"
]);

}
