import { rp } from "./bcIdFromAuthority.js";
import { cxt } from "./subagent-tray-utils.js";
import { GFs } from "./subagent-tray.topology.js";
import { E } from "./tslib.es6.js";
import { oee } from "./use-stable-sync-external-store.react.js";
var Vbc, lf_;
export { Vbc, lf_ };
var __wakaru_cf__initialized = false;
export function cf_() {
if (__wakaru_cf__initialized) return;
__wakaru_cf__initialized = true;
"use strict";
E(), rp(), oee(), cxt(), GFs(), Vbc = {
    cloudChildIds: [],
    pendingTaskAgentIds: [],
    placeholderLabelsByAgentId: {},
    legacyIdsByCanonicalId: {}
}, lf_ = Vbc;

}
