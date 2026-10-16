import { hOi } from "./agentAppearanceSettings.js";
import { wl } from "./agentRepositoryServiceTypes.js";
import { wm } from "./buildFlags.js";
import { Mze } from "./customizeManageCommandDescriptors.js";
import { _s } from "./experimentService.js";
import { hre } from "./glass-modal-provider.react.js";
import { Cce } from "./glass-modal-service.js";
import { rsc } from "./glass-settings-search-index-mode.react.js";
import { ZDe } from "./glass-theme-service.js";
import { It } from "./instantiation.js";
import { k80 } from "./searchIndex_2.js";
import { lWl } from "./settingsCatalog.js";
import { wDe } from "./settingsPaneShared.js";
import { E } from "./tslib.es6.js";
import { wF } from "./use-agent-repository-service.react.js";
import { In } from "./use-service.react_2.js";
import { ssc } from "./workspace-context.react_2.js";
import { Cu } from "./workspaceCollectionService.js";
var M4i, j4v, $4v;
export { $4v, M4i, j4v };
var __wakaru_GG0_initialized = false;
export function GG0() {
if (__wakaru_GG0_initialized) return;
__wakaru_GG0_initialized = true;
"use strict";
E(), wm(), It(), k80(), hOi(), lWl(), wDe(), Mze(), wl(), _s(), Cu(), hre(), rsc(), ssc(), wF(), In(), Cce(), ZDe(), M4i = new Map, j4v = {
    closeSettings: ()=>{}
}, $4v = {
    plugins: "plugins",
    mcps: "mcp",
    skills: "rules",
    agents: "rules",
    rules: "rules",
    commands: "rules",
    hooks: "hooks"
};

}
