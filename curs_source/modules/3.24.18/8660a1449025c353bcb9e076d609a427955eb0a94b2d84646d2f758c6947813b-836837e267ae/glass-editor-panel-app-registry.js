import { jt, k_ } from "./editor-panel-tab-kind.js";
import { NE, mIl, qMe } from "./glass-tab-persistence-constants.js";
import { E } from "./tslib.es6.js";
var bee, eEe, zlv;
export { bee, eEe, zlv };
var __wakaru_oQt_initialized = false;
export function oQt() {
if (__wakaru_oQt_initialized) return;
__wakaru_oQt_initialized = true;
"use strict";
E(), k_(), NE(), bee = {
    appId: "project",
    tabId: qMe,
    tabKind: jt.Context,
    label: "Project",
    icon: "board-kanban",
    closable: !0
}, eEe = {
    appId: "mainBotTasks",
    tabId: mIl,
    tabKind: jt.MainBotTasks,
    label: "Tasks",
    icon: "list-checks",
    closable: !0
}, zlv = {
    project: bee,
    mainBotTasks: eEe
};

}
