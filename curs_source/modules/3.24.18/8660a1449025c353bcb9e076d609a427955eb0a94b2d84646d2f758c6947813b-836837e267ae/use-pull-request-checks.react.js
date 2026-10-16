import { mce } from "./PullRequestRepositoryService.js";
import { _s } from "./experimentService.js";
import { xc } from "./glass-storage-service.js";
import { uas } from "./glassPrOperationsPollingConfig.js";
import { wo_ } from "./gpc.js";
import { cp } from "./objects.js";
import { E } from "./tslib.es6.js";
import { In } from "./use-service.react_2.js";
import { oee } from "./use-stable-sync-external-store.react.js";
import { HP } from "./use-workspace.react_2.js";
var Xgc, d5s;
export { Xgc, d5s };
var __wakaru_To__initialized = false;
export function To_() {
if (__wakaru_To__initialized) return;
__wakaru_To__initialized = true;
"use strict";
E(), cp(), uas(), mce(), _s(), wo_(), xc(), In(), oee(), HP(), Xgc = {
    checkStatus: void 0,
    isLoading: !1,
    error: void 0,
    ghAvailable: !1,
    ghAvailabilityResolved: !1
}, d5s = new Map;

}
