import { dr } from "./arrays.js";
import { Tc, en } from "./dom_2.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { Qo_ } from "./verifier.js";
var tbe, r0t, Xb;
export { Xb, r0t, tbe };
var __wakaru_uTe_initialized = false;
export function uTe() {
if (__wakaru_uTe_initialized) return;
__wakaru_uTe_initialized = true;
"use strict";
x(), en(), gr(), Qo_(), dr(), tbe = new Tc(220, 70), r0t = new Tc(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), Xb = {
    showTabs: "multiple",
    highlightModifiedTabs: !1,
    tabActionLocation: "right",
    tabActionCloseVisibility: !0,
    tabActionUnpinVisibility: !0,
    alwaysShowEditorActions: !1,
    tabSizing: "fit",
    tabSizingFixedMinWidth: 50,
    tabSizingFixedMaxWidth: 160,
    pinnedTabSizing: "normal",
    pinnedTabsOnSeparateRow: !1,
    tabHeight: "default",
    preventPinnedEditorClose: "keyboardAndMouse",
    titleScrollbarSizing: "default",
    focusRecentEditorAfterClose: !0,
    showIcons: !0,
    hasIcons: !0,
    enablePreview: !0,
    openPositioning: "right",
    openSideBySideDirection: "right",
    closeEmptyGroups: !0,
    labelFormat: "default",
    splitSizing: "auto",
    splitOnDragAndDrop: !0,
    dragToOpenWindow: !0,
    centeredLayoutFixedWidth: !1,
    doubleClickTabToToggleEditorGroupSizes: "expand",
    editorActionsLocation: "default",
    wrapTabs: !1,
    enablePreviewFromQuickOpen: !1,
    scrollToSwitchTabs: !1,
    enablePreviewFromCodeNavigation: !1,
    closeOnFileDelete: !1,
    mouseBackForwardToNavigate: !0,
    restoreViewState: !0,
    splitInGroupLayout: "horizontal",
    revealIfOpen: !1,
    get limit () {
        return {
            enabled: !1,
            value: 10,
            perEditorGroup: !1,
            excludeDirty: !1
        };
    },
    get decorations () {
        return {
            badges: !0,
            colors: !0
        };
    },
    get autoLockGroups () {
        return new Set;
    }
};

}
