import { zMv } from "./file-tree-workspace-layout.react.js";
import { hv } from "./glass-file-service.js";
import { gJt } from "./glass-file-tree-service.js";
import { yJt } from "./glass-label-service.js";
import { E } from "./tslib.es6.js";
import { qPs } from "./use-active-file-tree-workspace.react.js";
import { zIs } from "./use-file-provider-change-epoch.react.js";
import { M5i } from "./use-remote-workspace-connection.react.js";
import { In } from "./use-service.react_2.js";
var F6i, lMs;
export { F6i, lMs };
var __wakaru_KMv_initialized = false;
export function KMv() {
if (__wakaru_KMv_initialized) return;
__wakaru_KMv_initialized = true;
"use strict";
E(), hv(), zIs(), M5i(), In(), gJt(), yJt(), qPs(), zMv(), F6i = Object.freeze({
    status: "loading"
}), lMs = Object.freeze({
    status: "ready"
});

}
