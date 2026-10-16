import { Tfe, WQe, _ } from "./codiconsLibrary.js";
import { vfe } from "./codiconsUtil.js";
import { h } from "./tslib.es6.js";
var Sfe, dr;
export { Sfe, dr };
var __wakaru_E1_initialized = false;
export function E1() {
if (__wakaru_E1_initialized) return;
__wakaru_E1_initialized = true;
"use strict";
h(), vfe(), WQe(), Sfe = {
    dialogError: _("dialog-error", "error"),
    dialogWarning: _("dialog-warning", "warning"),
    dialogInfo: _("dialog-info", "info"),
    dialogClose: _("dialog-close", "close"),
    treeItemExpanded: _("tree-item-expanded", "chevron-down"),
    treeFilterOnTypeOn: _("tree-filter-on-type-on", "list-filter"),
    treeFilterOnTypeOff: _("tree-filter-on-type-off", "list-selection"),
    treeFilterClear: _("tree-filter-clear", "close"),
    treeItemLoading: _("tree-item-loading", "loading"),
    menuSelection: _("menu-selection", "check"),
    menuSubmenu: _("menu-submenu", "chevron-right"),
    menuBarMore: _("menubar-more", "more"),
    scrollbarButtonLeft: _("scrollbar-button-left", "triangle-left"),
    scrollbarButtonRight: _("scrollbar-button-right", "triangle-right"),
    scrollbarButtonUp: _("scrollbar-button-up", "triangle-up"),
    scrollbarButtonDown: _("scrollbar-button-down", "triangle-down"),
    toolBarMore: _("toolbar-more", "more"),
    quickInputBack: _("quick-input-back", "arrow-left"),
    dropDownButton: _("drop-down-button", 60084),
    symbolCustomColor: _("symbol-customcolor", 60252),
    exportIcon: _("export", 60332),
    workspaceUnspecified: _("workspace-unspecified", 60355),
    newLine: _("newline", 60394),
    gitFetch: _("git-fetch", 60445),
    lightbulbSparkleAutofix: _("lightbulb-sparkle-autofix", 60447),
    debugBreakpointPending: _("debug-breakpoint-pending", 60377),
    circles: _("circles", 62352)
}, dr = {
    ...Tfe,
    ...Sfe
};

}
