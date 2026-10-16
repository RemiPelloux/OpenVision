import { H7o, K5d } from "./codiconsLibrary.js";
import { zkr } from "./codiconsUtil.js";
import { E } from "./tslib.es6.js";
import { Kt } from "./ze.js";
var Y5d, yt;
export { Y5d, yt };
var __wakaru_gs_initialized = false;
export function gs() {
if (__wakaru_gs_initialized) return;
__wakaru_gs_initialized = true;
"use strict";
E(), zkr(), K5d(), Y5d = {
    dialogError: Kt("dialog-error", "error"),
    dialogWarning: Kt("dialog-warning", "warning"),
    dialogInfo: Kt("dialog-info", "info"),
    dialogClose: Kt("dialog-close", "close"),
    treeItemExpanded: Kt("tree-item-expanded", "chevron-down"),
    treeFilterOnTypeOn: Kt("tree-filter-on-type-on", "list-filter"),
    treeFilterOnTypeOff: Kt("tree-filter-on-type-off", "list-selection"),
    treeFilterClear: Kt("tree-filter-clear", "close"),
    treeItemLoading: Kt("tree-item-loading", "loading"),
    menuSelection: Kt("menu-selection", "check"),
    menuSubmenu: Kt("menu-submenu", "chevron-right"),
    menuBarMore: Kt("menubar-more", "more"),
    scrollbarButtonLeft: Kt("scrollbar-button-left", "triangle-left"),
    scrollbarButtonRight: Kt("scrollbar-button-right", "triangle-right"),
    scrollbarButtonUp: Kt("scrollbar-button-up", "triangle-up"),
    scrollbarButtonDown: Kt("scrollbar-button-down", "triangle-down"),
    toolBarMore: Kt("toolbar-more", "more"),
    quickInputBack: Kt("quick-input-back", "arrow-left"),
    dropDownButton: Kt("drop-down-button", 60084),
    symbolCustomColor: Kt("symbol-customcolor", 60252),
    exportIcon: Kt("export", 60332),
    workspaceUnspecified: Kt("workspace-unspecified", 60355),
    newLine: Kt("newline", 60394),
    gitFetch: Kt("git-fetch", 60445),
    lightbulbSparkleAutofix: Kt("lightbulb-sparkle-autofix", 60447),
    debugBreakpointPending: Kt("debug-breakpoint-pending", 60377),
    circles: Kt("circles", 62352)
}, yt = {
    ...H7o,
    ...Y5d
};

}
