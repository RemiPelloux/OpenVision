import { $O, mYe } from "./stateAttributesMapping.js";
import { x } from "./tslib.es6.js";
var Ffe, BSn, wsl, Csl, Tsl, Esl, xsl, ZBt, Qgt, Ure;
export { BSn, Csl, Esl, Ffe, Qgt, Tsl, Ure, ZBt, wsl, xsl };
var __wakaru_g2_initialized = false;
export function g2() {
if (__wakaru_g2_initialized) return;
__wakaru_g2_initialized = true;
x(), $O(), Ffe = (function(e) {
    return e.open = "data-open", e.closed = "data-closed", e[e.startingStyle = mYe.startingStyle] = "startingStyle", e[e.endingStyle = mYe.endingStyle] = "endingStyle", e.anchorHidden = "data-anchor-hidden", e.side = "data-side", e.align = "data-align", e;
})({}), BSn = (function(e) {
    return e.popupOpen = "data-popup-open", e.pressed = "data-pressed", e;
})({}), wsl = {
    [BSn.popupOpen]: ""
}, Csl = {
    [BSn.popupOpen]: "",
    [BSn.pressed]: ""
}, Tsl = {
    [Ffe.open]: ""
}, Esl = {
    [Ffe.closed]: ""
}, xsl = {
    [Ffe.anchorHidden]: ""
}, ZBt = {
    open (e) {
        return e ? wsl : null;
    }
}, Qgt = {
    open (e) {
        return e ? Csl : null;
    }
}, Ure = {
    open (e) {
        return e ? Tsl : Esl;
    },
    anchorHidden (e) {
        return e ? xsl : null;
    }
};

}
