import { YX } from "./group-agents.js";
import { It } from "./instantiation.js";
import { mMn } from "./pluginFlowController.js";
import { IA } from "./pluginsProviderService.js";
import { L_ } from "./projectService.js";
import { mwl } from "./refreshPluginComponentsAcrossWorkspaces.js";
import { E } from "./tslib.es6.js";
import { KX } from "./use-recent-projects.react.js";
import { hPn } from "./waitForPluginComponents.js";
import { cm } from "./workspace-helpers.js";
import { l3 } from "./workspace-services_2.js";
import { Cu } from "./workspaceCollectionService.js";
import { Lh } from "./workspaceMetadataService.js";
var Ob_, Fb_;
export { Fb_, Ob_ };
var __wakaru_NHC_initialized = false;
export function NHC() {
if (__wakaru_NHC_initialized) return;
__wakaru_NHC_initialized = true;
"use strict";
E(), It(), mMn(), L_(), IA(), mwl(), hPn(), Cu(), Lh(), KX(), YX(), cm(), l3(), Ob_ = {
    hasMcpServers: !0,
    hasSkillsOrRules: !0,
    hasCommands: !0,
    hasSubagents: !0
}, Fb_ = {
    hasMcpServers: !1,
    hasSkillsOrRules: !1,
    hasCommands: !1,
    hasSubagents: !1
};

}
