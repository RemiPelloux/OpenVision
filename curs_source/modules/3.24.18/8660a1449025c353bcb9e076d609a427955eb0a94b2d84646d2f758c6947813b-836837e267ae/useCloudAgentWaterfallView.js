import { pd } from "./background_composer_pb.js";
import { E } from "./tslib.es6.js";
import { hwf } from "./useCloudEnvironmentLogState.js";
import { mvg } from "./waterfallTaxonomy.js";
import { kvg } from "./waterfallViewModel.js";
import { pi } from "./ze.js";
var fwf, vwf;
export { fwf, vwf };
var __wakaru_UMl_initialized = false;
export function UMl() {
if (__wakaru_UMl_initialized) return;
__wakaru_UMl_initialized = true;
"use strict";
E(), pi(), pd(), mvg(), kvg(), hwf(), fwf = [
    {
        phaseKey: "hydration",
        categoryKey: "restoreWorkspaceFiles"
    },
    {
        phaseKey: "imagePull",
        categoryKey: "pullDockerImages"
    },
    {
        phaseKey: "build",
        categoryKey: "dockerBuild"
    },
    {
        phaseKey: "extensionInstall",
        categoryKey: "installExtensions"
    },
    {
        phaseKey: "waitingForWorker",
        categoryKey: "waitForWorker"
    }
], vwf = {
    installDependencies: [
        "installDependencies",
        "install"
    ],
    runWorkspaceSetup: [
        "prepare",
        "verify"
    ],
    startAgentServices: [
        "start"
    ]
};

}
