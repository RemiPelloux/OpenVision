import { eWe, l6 } from "./stateAttributesMapping.js";
import { E } from "./tslib.es6.js";
var jRe, ici, alh, llh, clh, ulh, dlh, abn, a7t, T_e;
export { T_e, a7t, abn, alh, clh, dlh, ici, jRe, llh, ulh };
var __wakaru_I4_initialized = false;
export function I4() {
if (__wakaru_I4_initialized) return;
__wakaru_I4_initialized = true;
E(), l6(), jRe = (function(t) {
    return t.open = "data-open", t.closed = "data-closed", t[t.startingStyle = eWe.startingStyle] = "startingStyle", t[t.endingStyle = eWe.endingStyle] = "endingStyle", t.anchorHidden = "data-anchor-hidden", t.side = "data-side", t.align = "data-align", t;
})({}), ici = (function(t) {
    return t.popupOpen = "data-popup-open", t.pressed = "data-pressed", t;
})({}), alh = {
    [ici.popupOpen]: ""
}, llh = {
    [ici.popupOpen]: "",
    [ici.pressed]: ""
}, clh = {
    [jRe.open]: ""
}, ulh = {
    [jRe.closed]: ""
}, dlh = {
    [jRe.anchorHidden]: ""
}, abn = {
    open (t) {
        return t ? alh : null;
    }
}, a7t = {
    open (t) {
        return t ? llh : null;
    }
}, T_e = {
    open (t) {
        return t ? clh : ulh;
    },
    anchorHidden (t) {
        return t ? dlh : null;
    }
};

}
