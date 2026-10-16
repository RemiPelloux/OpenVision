import { Ry } from "./agentRepositoryService.js";
import { Ize } from "./branchMetadataService.js";
import { XS } from "./githubUtils.js";
import { qV } from "./glass-diff-hooks.js";
import { NE } from "./glass-tab-persistence-constants.js";
import { tZ } from "./per-branch-pr-tabs.js";
import { sU } from "./prLifecycle.js";
import { e9e } from "./pullRequestStateConversion.js";
import { Kf, Qh, ca } from "./reactive.js";
import { E } from "./tslib.es6.js";
import { bMi } from "./use-branch-metadata-service.react.js";
import { RV } from "./use-pr-lifecycle.react.js";
import { $h } from "./use-reactive.react_2.js";
import { Sr_ } from "./use-view-prs-entries.react.js";
import { HSC } from "./view-prs-button.react.js";
var Ar_;
export { Ar_ };
var __wakaru_ZSC_initialized = false;
export function ZSC() {
if (__wakaru_ZSC_initialized) return;
__wakaru_ZSC_initialized = true;
"use strict";
E(), XS(), e9e(), Ry(), Ize(), sU(), Kf(), bMi(), RV(), $h(), qV(), NE(), Sr_(), HSC(), tZ(), Ar_ = new ca(Qh.resolved(void 0));

}
