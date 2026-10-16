import { jt, k_ } from "./editor-panel-tab-kind.js";
import { E } from "./tslib.es6.js";
var f__, v__;
export { f__, v__ };
var __wakaru_IUC_initialized = false;
export function IUC() {
if (__wakaru_IUC_initialized) return;
__wakaru_IUC_initialized = true;
"use strict";
E(), k_(), f__ = {
    openSideChat: {
        action: "open_side_chat",
        section: "sideChats"
    },
    openChanges: {
        action: "open_changes",
        section: "changes"
    },
    showPr: {
        action: "open_pr",
        section: "prs"
    },
    openDesktop: {
        action: "open_desktop",
        section: "desktop"
    },
    openEnvironmentSetup: {
        action: "open_environment",
        section: "environment"
    },
    openMachine: {
        action: "open_machine",
        section: "machine"
    },
    openWeb: {
        action: "open_browser",
        section: "browsers"
    },
    openFiles: {
        action: "open_file",
        section: "files"
    },
    openTerminalApp: {
        action: "open_terminal",
        section: "terminals"
    },
    openTerminal: {
        action: "open_terminal",
        section: "terminals"
    }
}, v__ = {
    [jt.File]: {
        action: "open_file",
        section: "files"
    },
    [jt.Browser]: {
        action: "open_browser",
        section: "browsers"
    },
    [jt.Terminal]: {
        action: "open_terminal",
        section: "terminals"
    },
    [jt.Canvas]: {
        action: "open_canvas",
        section: "canvases"
    },
    [jt.Plan]: {
        action: "open_plan",
        section: "plans"
    },
    [jt.SideChat]: {
        action: "open_side_chat",
        section: "sideChats"
    },
    [jt.Vnc]: {
        action: "open_desktop",
        section: "desktop"
    },
    [jt.AgentVnc]: {
        action: "open_desktop",
        section: "desktop"
    }
};

}
