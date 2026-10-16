import { JDc, OYr } from "./codiconsLibrary.js";
import { jgi } from "./codiconsUtil.js";
import { Et } from "./qIc.js";
import { x } from "./tslib.es6.js";
var eMc, Pe;
export { Pe, eMc };
var __wakaru__i_initialized = false;
export function _i() {
if (__wakaru__i_initialized) return;
__wakaru__i_initialized = true;
"use strict";
x(), jgi(), JDc(), eMc = {
    dialogError: Et("dialog-error", "error"),
    dialogWarning: Et("dialog-warning", "warning"),
    dialogInfo: Et("dialog-info", "info"),
    dialogClose: Et("dialog-close", "close"),
    treeItemExpanded: Et("tree-item-expanded", "chevron-down"),
    treeFilterOnTypeOn: Et("tree-filter-on-type-on", "list-filter"),
    treeFilterOnTypeOff: Et("tree-filter-on-type-off", "list-selection"),
    treeFilterClear: Et("tree-filter-clear", "close"),
    treeItemLoading: Et("tree-item-loading", "loading"),
    menuSelection: Et("menu-selection", "check"),
    menuSubmenu: Et("menu-submenu", "chevron-right"),
    menuBarMore: Et("menubar-more", "more"),
    scrollbarButtonLeft: Et("scrollbar-button-left", "triangle-left"),
    scrollbarButtonRight: Et("scrollbar-button-right", "triangle-right"),
    scrollbarButtonUp: Et("scrollbar-button-up", "triangle-up"),
    scrollbarButtonDown: Et("scrollbar-button-down", "triangle-down"),
    toolBarMore: Et("toolbar-more", "more"),
    quickInputBack: Et("quick-input-back", "arrow-left"),
    dropDownButton: Et("drop-down-button", 60084),
    symbolCustomColor: Et("symbol-customcolor", 60252),
    exportIcon: Et("export", 60332),
    workspaceUnspecified: Et("workspace-unspecified", 60355),
    newLine: Et("newline", 60394),
    gitFetch: Et("git-fetch", 60445),
    lightbulbSparkleAutofix: Et("lightbulb-sparkle-autofix", 60447),
    debugBreakpointPending: Et("debug-breakpoint-pending", 60377),
    circles: Et("circles", 62352)
}, Pe = {
    ...OYr,
    ...eMc
};

}
