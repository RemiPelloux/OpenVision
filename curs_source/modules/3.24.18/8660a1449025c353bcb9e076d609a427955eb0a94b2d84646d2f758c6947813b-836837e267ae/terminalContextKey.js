import { D } from "./Iwo.js";
import { Hi, cn, mt } from "./contextkey.js";
import { Bt } from "./nls.js";
import { PA, bR } from "./terminal_3.js";
import { E } from "./tslib.es6.js";
var ns;
export { ns };
var __wakaru_QI_initialized = false;
export function QI() {
if (__wakaru_QI_initialized) return;
__wakaru_QI_initialized = true;
"use strict";
E(), Bt(), Hi(), bR(), ((t)=>{
    t.isOpen = new cn("terminalIsOpen", !1, !0), t.focus = new cn("terminalFocus", !1, D(10601, null)), t.focusInAny = new cn("terminalFocusInAny", !1, D(10602, null)), t.editorFocus = new cn("terminalEditorFocus", !1, D(10603, null)), t.count = new cn("terminalCount", 0, D(10604, null)), t.groupCount = new cn("terminalGroupCount", 0, !0), t.tabsNarrow = new cn("isTerminalTabsNarrow", !1, !0), t.terminalHasFixedWidth = new cn("terminalHasFixedWidth", !1, !0), t.tabsFocus = new cn("terminalTabsFocus", !1, D(10605, null)), t.webExtensionContributedProfile = new cn("terminalWebExtensionContributedProfile", !1, !0), t.terminalHasBeenCreated = new cn("terminalHasBeenCreated", !1, !0), t.terminalEditorActive = new cn("terminalEditorActive", !1, !0), t.tabsMouse = new cn("terminalTabsMouse", !1, !0), t.shellType = new cn("terminalShellType", void 0, {
        type: "string",
        description: D(10606, null)
    }), t.altBufferActive = new cn("terminalAltBufferActive", !1, D(10607, null)), t.suggestWidgetVisible = new cn("terminalSuggestWidgetVisible", !1, D(10608, null)), t.notFocus = t.focus.toNegated(), t.viewShowing = new cn("terminalViewShowing", !1, D(10609, null)), t.textSelected = new cn("terminalTextSelected", !1, D(10610, null)), t.textSelectedInFocused = new cn("terminalTextSelectedInFocused", !1, D(10611, null)), t.notTextSelected = t.textSelected.toNegated(), t.findVisible = new cn("terminalFindVisible", !1, !0), t.notFindVisible = t.findVisible.toNegated(), t.findInputFocus = new cn("terminalFindInputFocused", !1, !0), t.findFocus = new cn("terminalFindFocused", !1, !0), t.notFindFocus = t.findInputFocus.toNegated(), t.processSupported = new cn("terminalProcessSupported", !1, D(10612, null)), t.tabsSingularSelection = new cn("terminalTabsSingularSelection", !1, D(10613, null)), t.splitTerminalTabFocused = new cn("terminalSplitTerminal", !1, D(10614, null)), t.splitTerminalActive = new cn("terminalSplitPaneActive", !1, D(10615, null)), t.inTerminalRunCommandPicker = new cn("inTerminalRunCommandPicker", !1, D(10616, null)), t.terminalShellIntegrationEnabled = new cn("terminalShellIntegrationEnabled", !1, D(10617, null)), t.hasContributionActions = new cn("terminalHasContributionActions", !1, D(10618, null)), t.shouldShowViewInlineActions = mt.and(mt.equals("view", PA), mt.notEquals("config.terminal.integrated.tabs.hideCondition", "never"), mt.or(mt.not("config.terminal.integrated.tabs.enabled"), mt.and(mt.equals("config.terminal.integrated.tabs.showActions", "singleTerminal"), mt.equals("terminalGroupCount", 1)), mt.and(mt.equals("config.terminal.integrated.tabs.showActions", "singleTerminalOrNarrow"), mt.or(mt.equals("terminalGroupCount", 1), mt.has("isTerminalTabsNarrow"))), mt.and(mt.equals("config.terminal.integrated.tabs.showActions", "singleGroup"), mt.equals("terminalGroupCount", 1)), mt.equals("config.terminal.integrated.tabs.showActions", "always")));
})(ns || (ns = {}));

}
