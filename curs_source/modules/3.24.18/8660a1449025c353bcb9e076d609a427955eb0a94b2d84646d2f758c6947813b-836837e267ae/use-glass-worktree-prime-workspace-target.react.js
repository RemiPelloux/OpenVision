import { xd } from "./glass-workspace-context-service.js";
import { OG } from "./glass-workspaces-management-service.js";
import { WT } from "./project-selector-utils.js";
import { E } from "./tslib.es6.js";
import { In } from "./use-service.react_2.js";
import { HP } from "./use-workspace.react_2.js";
import { cm } from "./workspace-helpers.js";
var __wakaru_sUv_initialized = false;
export function sUv() {
if (__wakaru_sUv_initialized) return;
__wakaru_sUv_initialized = true;
"use strict";
E(), OG(), xd(), In(), HP(), cm(), WT();

}
