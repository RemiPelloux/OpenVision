import { Bkk, Fkk, Ukk } from "./Ycg.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
import { kL, ywi } from "./waterfall_update_pb.js";
var cvg, uvg, oU, dvg;
export { cvg, dvg, oU, uvg };
var __wakaru_$kk_initialized = false;
export function $kk() {
if (__wakaru_$kk_initialized) return;
__wakaru_$kk_initialized = true;
"use strict";
E(), hr(), ywi(), cvg = {
    prepareEnvironment: kL.ENVIRONMENT,
    createCloudWorkspace: kL.CREATE_CLOUD_WORKSPACE,
    provisionSandbox: kL.PROVISION_SANDBOX,
    restoreWorkspaceFiles: kL.RESTORE_WORKSPACE_FILES,
    setUpRepository: kL.SETUP_REPOSITORY,
    installDependencies: kL.INSTALL_DEPENDENCIES,
    runWorkspaceSetup: kL.RUN_WORKSPACE_SETUP,
    startAgentServices: kL.START_AGENT_SERVICES,
    installExtensions: kL.INSTALL_EXTENSIONS,
    completeSetup: kL.COMPLETE
}, uvg = Date.UTC(2026, 5, 2, 5, 0, 0), oU = "prepareEnvironment", dvg = {
    happyPath: Fkk,
    warning: Bkk,
    error: Ukk
};

}
