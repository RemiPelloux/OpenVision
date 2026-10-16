import { Di, _r, xa } from "./Iwo.js";
import { Kte, Sbt } from "./canIUse.js";
import { KAe, aBt } from "./tabFocus.js";
import { E } from "./tslib.es6.js";
var Ypc;
export { Ypc };
var __wakaru_qfC_initialized = false;
export function qfC() {
if (__wakaru_qfC_initialized) return;
__wakaru_qfC_initialized = true;
"use strict";
E(), Sbt(), Di(), aBt(), Ypc = class hD {
    static shouldSkipTerminal(e, n) {
        return n && !_r && e.altKey || KAe.getTabFocusMode() && e.key === "Tab" || xa && e.altKey && e.key === "F4" && !e.ctrlKey || !Kte.clipboard.readText && e.key === "v" && e.ctrlKey;
    }
    static handles(e, n) {
        return hD._classify(e, n) !== 0;
    }
    static shouldPreventDefault(e, n) {
        const i = hD._classify(e, n);
        return i === 3 ? !0 : i === 0 || i === 2 ? !1 : !e.options.screenReaderMode || n.altKey || n.ctrlKey;
    }
    static _classify(e, n) {
        return hD._isMacSelectAll(n) ? 2 : hD._isForcedPreventDefault(e, n) ? 3 : hD._isNavigationKey(n) || hD._isEditingKey(n) || hD._isFunctionKey(n) || hD._isPlainTextInput(n) || hD._isCtrlInput(n) || hD._isAltInput(e, n) ? 1 : 0;
    }
    static _matchesKey(e, n, i) {
        return e.key === n || i !== void 0 && e.keyCode === i;
    }
    static _matchesAnyKey(e, n, i = []) {
        return n.includes(e.key) || i.includes(e.keyCode);
    }
    static _isLetterKey(e) {
        return /^[a-z]$/i.test(e.key) || e.keyCode >= 65 && e.keyCode <= 90;
    }
    static _isFunctionKey(e) {
        return /^F\d{1,2}$/.test(e.key) || e.keyCode >= 112 && e.keyCode <= 123;
    }
    static _isSingleCharKey(e) {
        return !!e.key && e.key.length === 1;
    }
    static _isShiftTab(e) {
        return hD._matchesKey(e, "Tab", 9) && e.shiftKey;
    }
    static _isShiftPageNav(e) {
        return e.shiftKey && hD._matchesAnyKey(e, [
            "PageUp",
            "PageDown"
        ], [
            33,
            34
        ]);
    }
    static _isMacSelectAll(e) {
        return _r && e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey && (hD._matchesKey(e, "a", 65) || hD._matchesKey(e, "A", 65));
    }
    static _isForcedPreventDefault(e, n) {
        return hD._isShiftTab(n) || hD._isShiftPageNav(n) || hD._matchesKey(n, "Tab", 9) || hD._matchesKey(n, "Enter", 13) || hD._matchesAnyKey(n, [
            "Escape",
            "Esc"
        ], [
            27
        ]) ? !0 : (!_r || !!e.options.macOptionIsMeta) && n.altKey && !n.metaKey && n.key === "Dead" && n.code.startsWith("Key");
    }
    static _isNavigationKey(e) {
        return hD._matchesAnyKey(e, [
            "UIKeyInputUpArrow",
            "UIKeyInputLeftArrow",
            "UIKeyInputRightArrow",
            "UIKeyInputDownArrow"
        ]) || !e.metaKey && hD._matchesAnyKey(e, [
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown"
        ], [
            37,
            39,
            38,
            40
        ]) ? !0 : hD._matchesAnyKey(e, [
            "Home",
            "End",
            "PageUp",
            "PageDown"
        ], [
            36,
            35,
            33,
            34
        ]);
    }
    static _isEditingKey(e) {
        return hD._matchesKey(e, "Backspace", 8) || hD._matchesKey(e, "Delete", 46) ? !0 : hD._matchesKey(e, "Insert", 45) && !e.shiftKey && !e.ctrlKey;
    }
    static _isPlainTextInput(e) {
        return !e.ctrlKey && !e.altKey && !e.metaKey && hD._isSingleCharKey(e);
    }
    static _isCtrlInput(e) {
        return !e.ctrlKey || e.altKey || e.metaKey ? !1 : !e.shiftKey && (hD._isLetterKey(e) || hD._matchesKey(e, " ", 32) || hD._matchesAnyKey(e, [
            "3",
            "4",
            "5",
            "6",
            "7",
            "8"
        ], [
            51,
            52,
            53,
            54,
            55,
            56
        ]) || hD._matchesAnyKey(e, [
            "[",
            "\\",
            "]"
        ], [
            219,
            220,
            221
        ])) ? !0 : e.key === "_" || e.key === "@";
    }
    static _isAltInput(e, n) {
        return _r && !e.options.macOptionIsMeta || !n.altKey || n.metaKey ? !1 : hD._isSingleCharKey(n) || n.key === "Dead" && n.code.startsWith("Key");
    }
};

}
