import { Ae, S } from "./HVr.js";
import { rt } from "./nls.js";
import { x } from "./tslib.es6.js";
var Lm;
export { Lm };
var __wakaru_mhe_initialized = false;
export function mhe() {
if (__wakaru_mhe_initialized) return;
__wakaru_mhe_initialized = true;
"use strict";
x(), rt(), Lm = {
    terminal: S(10619, null),
    new: S(10620, null),
    doNotShowAgain: S(10621, null),
    currentSessionCategory: S(10622, null),
    previousSessionCategory: S(10623, null),
    typeTask: S(10624, null),
    typeLocal: S(10625, null),
    actionCategory: Ae(10628, "Terminal"),
    focus: Ae(10629, "Focus Terminal"),
    focusAndHideAccessibleBuffer: Ae(10630, "Focus Terminal and Hide Accessible Buffer"),
    kill: {
        ...Ae(10631, "Kill Terminal"),
        short: S(10626, null)
    },
    moveToEditor: Ae(10632, "Move Terminal into Editor Area"),
    moveIntoNewWindow: Ae(10633, "Move Terminal into New Window"),
    moveToTerminalPanel: Ae(10634, "Move Terminal into Panel"),
    changeIcon: Ae(10635, "Change Icon..."),
    changeColor: Ae(10636, "Change Color..."),
    split: {
        ...Ae(10637, "Split Terminal"),
        short: S(10627, null)
    },
    unsplit: Ae(10638, "Unsplit Terminal"),
    rename: Ae(10639, "Rename..."),
    toggleSizeToContentWidth: Ae(10640, "Toggle Size to Content Width"),
    focusHover: Ae(10641, "Focus Hover"),
    newWithCwd: Ae(10642, "Create New Terminal Starting in a Custom Working Directory"),
    renameWithArgs: Ae(10643, "Rename the Currently Active Terminal"),
    scrollToPreviousCommand: Ae(10644, "Scroll to Previous Command"),
    scrollToNextCommand: Ae(10645, "Scroll to Next Command"),
    sendSequence: Ae(10646, "Send Custom Sequence to Terminal")
};

}
