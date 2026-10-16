import { Ga } from "./Iwo.js";
import { Cze } from "./debugLogFileUtils.js";
import { hv } from "./glass-file-service.js";
import { F$ } from "./glass-path-service.js";
import { xd } from "./glass-workspace-context-service.js";
import { E } from "./tslib.es6.js";
import { vDe } from "./use-interval.react.js";
import { In } from "./use-service.react_2.js";
var QSc, wS_, CS_;
export { CS_, QSc, wS_ };
var __wakaru_pVC_initialized = false;
export function pVC() {
if (__wakaru_pVC_initialized) return;
__wakaru_pVC_initialized = true;
"use strict";
E(), F$(), Ga(), hv(), xd(), Cze(), vDe(), In(), QSc = 100, wS_ = 500, CS_ = {
    logLines: [],
    totalCount: 0,
    logFilePath: void 0,
    clearLogs: ()=>{}
};

}
