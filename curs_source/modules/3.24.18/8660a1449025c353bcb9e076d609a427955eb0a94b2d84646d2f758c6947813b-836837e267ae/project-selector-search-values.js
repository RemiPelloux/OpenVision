import { bF } from "./multi-repo-cloud-targets.js";
import { WT } from "./project-selector-utils.js";
import { E } from "./tslib.es6.js";
var dge;
export { dge };
var __wakaru_qJt_initialized = false;
export function qJt() {
if (__wakaru_qJt_initialized) return;
__wakaru_qJt_initialized = true;
"use strict";
E(), bF(), WT(), dge = {
    connectGithub: "footer:connect-github",
    cloudMultiSelectDone: "footer:cloud-multi-select-done",
    localMultiSelectDone: "footer:local-multi-select-done",
    createFolder: (t)=>`create-folder:${t}`,
    emptyWindow: "action:empty-window",
    gitClone: (t)=>`git-clone:${t}`,
    localFolder: (t)=>`local-folder:${t}`,
    newFolder: "footer:new-folder",
    newProject: "footer:new-project",
    noRepo: "action:no-repo",
    openFolder: "flyout-action:open-folder",
    openSshFolder: "flyout-action:open-ssh-folder",
    selectedEmpty: "action:selected-empty",
    selectMultiple: "action:select-multiple",
    useExisting: "footer:use-existing"
};

}
