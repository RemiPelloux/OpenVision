import { At, D } from "./Iwo.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
var $f;
export { $f };
var __wakaru_dye_initialized = false;
export function dye() {
if (__wakaru_dye_initialized) return;
__wakaru_dye_initialized = true;
"use strict";
E(), Bt(), $f = {
    terminal: D(10619, null),
    new: D(10620, null),
    doNotShowAgain: D(10621, null),
    currentSessionCategory: D(10622, null),
    previousSessionCategory: D(10623, null),
    typeTask: D(10624, null),
    typeLocal: D(10625, null),
    actionCategory: At(10628, "Terminal"),
    focus: At(10629, "Focus Terminal"),
    focusAndHideAccessibleBuffer: At(10630, "Focus Terminal and Hide Accessible Buffer"),
    kill: {
        ...At(10631, "Kill Terminal"),
        short: D(10626, null)
    },
    moveToEditor: At(10632, "Move Terminal into Editor Area"),
    moveIntoNewWindow: At(10633, "Move Terminal into New Window"),
    moveToTerminalPanel: At(10634, "Move Terminal into Panel"),
    changeIcon: At(10635, "Change Icon..."),
    changeColor: At(10636, "Change Color..."),
    split: {
        ...At(10637, "Split Terminal"),
        short: D(10627, null)
    },
    unsplit: At(10638, "Unsplit Terminal"),
    rename: At(10639, "Rename..."),
    toggleSizeToContentWidth: At(10640, "Toggle Size to Content Width"),
    focusHover: At(10641, "Focus Hover"),
    newWithCwd: At(10642, "Create New Terminal Starting in a Custom Working Directory"),
    renameWithArgs: At(10643, "Rename the Currently Active Terminal"),
    scrollToPreviousCommand: At(10644, "Scroll to Previous Command"),
    scrollToNextCommand: At(10645, "Scroll to Next Command"),
    sendSequence: At(10646, "Send Custom Sequence to Terminal")
};

}
