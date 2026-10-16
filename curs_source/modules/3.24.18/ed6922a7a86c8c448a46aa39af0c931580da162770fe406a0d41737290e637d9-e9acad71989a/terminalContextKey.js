import { S } from "./HVr.js";
import { At, dn, he } from "./contextkey.js";
import { rt } from "./nls.js";
import { F1, hT } from "./terminal_3.js";
import { x } from "./tslib.es6.js";
var Er;
export { Er };
var __wakaru_Gx_initialized = false;
export function Gx() {
if (__wakaru_Gx_initialized) return;
__wakaru_Gx_initialized = true;
"use strict";
x(), rt(), dn(), hT(), ((e)=>{
    e.isOpen = new At("terminalIsOpen", !1, !0), e.focus = new At("terminalFocus", !1, S(10601, null)), e.focusInAny = new At("terminalFocusInAny", !1, S(10602, null)), e.editorFocus = new At("terminalEditorFocus", !1, S(10603, null)), e.count = new At("terminalCount", 0, S(10604, null)), e.groupCount = new At("terminalGroupCount", 0, !0), e.tabsNarrow = new At("isTerminalTabsNarrow", !1, !0), e.terminalHasFixedWidth = new At("terminalHasFixedWidth", !1, !0), e.tabsFocus = new At("terminalTabsFocus", !1, S(10605, null)), e.webExtensionContributedProfile = new At("terminalWebExtensionContributedProfile", !1, !0), e.terminalHasBeenCreated = new At("terminalHasBeenCreated", !1, !0), e.terminalEditorActive = new At("terminalEditorActive", !1, !0), e.tabsMouse = new At("terminalTabsMouse", !1, !0), e.shellType = new At("terminalShellType", void 0, {
        type: "string",
        description: S(10606, null)
    }), e.altBufferActive = new At("terminalAltBufferActive", !1, S(10607, null)), e.suggestWidgetVisible = new At("terminalSuggestWidgetVisible", !1, S(10608, null)), e.notFocus = e.focus.toNegated(), e.viewShowing = new At("terminalViewShowing", !1, S(10609, null)), e.textSelected = new At("terminalTextSelected", !1, S(10610, null)), e.textSelectedInFocused = new At("terminalTextSelectedInFocused", !1, S(10611, null)), e.notTextSelected = e.textSelected.toNegated(), e.findVisible = new At("terminalFindVisible", !1, !0), e.notFindVisible = e.findVisible.toNegated(), e.findInputFocus = new At("terminalFindInputFocused", !1, !0), e.findFocus = new At("terminalFindFocused", !1, !0), e.notFindFocus = e.findInputFocus.toNegated(), e.processSupported = new At("terminalProcessSupported", !1, S(10612, null)), e.tabsSingularSelection = new At("terminalTabsSingularSelection", !1, S(10613, null)), e.splitTerminalTabFocused = new At("terminalSplitTerminal", !1, S(10614, null)), e.splitTerminalActive = new At("terminalSplitPaneActive", !1, S(10615, null)), e.inTerminalRunCommandPicker = new At("inTerminalRunCommandPicker", !1, S(10616, null)), e.terminalShellIntegrationEnabled = new At("terminalShellIntegrationEnabled", !1, S(10617, null)), e.hasContributionActions = new At("terminalHasContributionActions", !1, S(10618, null)), e.shouldShowViewInlineActions = he.and(he.equals("view", F1), he.notEquals("config.terminal.integrated.tabs.hideCondition", "never"), he.or(he.not("config.terminal.integrated.tabs.enabled"), he.and(he.equals("config.terminal.integrated.tabs.showActions", "singleTerminal"), he.equals("terminalGroupCount", 1)), he.and(he.equals("config.terminal.integrated.tabs.showActions", "singleTerminalOrNarrow"), he.or(he.equals("terminalGroupCount", 1), he.has("isTerminalTabsNarrow"))), he.and(he.equals("config.terminal.integrated.tabs.showActions", "singleGroup"), he.equals("terminalGroupCount", 1)), he.equals("config.terminal.integrated.tabs.showActions", "always")));
})(Er || (Er = {}));

}
