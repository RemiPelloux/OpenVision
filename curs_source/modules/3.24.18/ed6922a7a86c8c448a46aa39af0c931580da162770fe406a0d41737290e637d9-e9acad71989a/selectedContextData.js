import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
var ALu, eJe, Hj, RLu, DLu, MLu;
export { ALu, DLu, Hj, MLu, RLu, eJe };
var __wakaru_iL_initialized = false;
export function iL() {
if (__wakaru_iL_initialized) return;
__wakaru_iL_initialized = true;
"use strict";
x(), Qt(), ALu = [
    "composers",
    "selectedCommits",
    "selectedPullRequests",
    "gitDiff",
    "gitDiffFromBranchToMain",
    "selectedImages",
    "selectedDocuments",
    "selectedVideos",
    "folderSelections",
    "fileSelections",
    "terminalFiles",
    "selections",
    "terminalSelections",
    "selectedDocs",
    "externalLinks",
    "diffHistory",
    "cursorRules",
    "cursorCommands",
    "uiElementSelections",
    "consoleLogs",
    "ideEditorsState",
    "gitPRDiffSelections",
    "subagentSelections",
    "browserSelections"
], eJe = ALu, Hj = (e)=>[
        "selections",
        "fileSelections",
        "folderSelections",
        "selectedDocs",
        "selectedCommits",
        "selectedPullRequests",
        "terminalSelections",
        "terminalFiles",
        "externalLinks",
        "selectedImages",
        "selectedDocuments",
        "selectedVideos",
        "composers",
        "cursorRules",
        "cursorCommands",
        "gitPRDiffSelections",
        "subagentSelections",
        "browserSelections"
    ].includes(e), RLu = (e)=>JSON.stringify({
        uri: Ee.revive(e.uri).toString(),
        range: e.range,
        text: e.text
    }), DLu = [
    "selections",
    "fileSelections",
    "folderSelections",
    "terminalSelections",
    "terminalFiles",
    "cursorRules",
    "cursorCommands",
    "selectedCommits",
    "selectedPullRequests",
    "selectedDocs",
    "externalLinks",
    "selectedImages",
    "selectedDocuments",
    "selectedVideos",
    "composers",
    "symbols",
    "gitPRDiffSelections",
    "uiElementSelections",
    "consoleLogs",
    "workflows",
    "subagentSelections",
    "browserSelections",
    "extraContext"
], MLu = [
    "gitDiff",
    "gitDiffFromBranchToMain",
    "ideEditorsState"
];

}
