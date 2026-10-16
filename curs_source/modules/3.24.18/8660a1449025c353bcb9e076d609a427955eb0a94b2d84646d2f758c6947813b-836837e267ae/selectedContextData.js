import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
var e6p, R0t, nie, t6p, n6p, i6p;
export { R0t, e6p, i6p, n6p, nie, t6p };
var __wakaru_LM_initialized = false;
export function LM() {
if (__wakaru_LM_initialized) return;
__wakaru_LM_initialized = true;
"use strict";
E(), fn(), e6p = [
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
], R0t = e6p, nie = (t)=>[
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
    ].includes(t), t6p = (t)=>JSON.stringify({
        uri: rt.revive(t.uri).toString(),
        range: t.range,
        text: t.text
    }), n6p = [
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
], i6p = [
    "gitDiff",
    "gitDiffFromBranchToMain",
    "ideEditorsState"
];

}
