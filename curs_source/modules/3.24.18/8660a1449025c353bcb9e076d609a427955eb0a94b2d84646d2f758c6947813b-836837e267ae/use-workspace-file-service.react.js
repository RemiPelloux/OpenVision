import { s$l } from "./folderPickerWorkspace.js";
import { hv } from "./glass-file-service.js";
import { F$ } from "./glass-path-service.js";
import { OG } from "./glass-workspaces-management-service.js";
import { Sg } from "./remoteAgentService.js";
import { UM } from "./remoteAuthorityResolver.js";
import { E } from "./tslib.es6.js";
import { In } from "./use-service.react_2.js";
import { Cu } from "./workspaceCollectionService.js";
var iic, ric;
export { iic, ric };
var __wakaru_TO0_initialized = false;
export function TO0() {
if (__wakaru_TO0_initialized) return;
__wakaru_TO0_initialized = true;
"use strict";
E(), OG(), F$(), hv(), UM(), Sg(), s$l(), Cu(), In(), iic = {
    phase: "idle"
}, ric = {
    phase: "connecting"
};

}
