import { GSs, v3n } from "./stateAttributesMapping.mjs";
import { E } from "./tslib.es6.js";
var r1s, s1s, dPf, hPf, pPf, mPf, gPf, fPf, vPf, T3i;
export { T3i, dPf, fPf, gPf, hPf, mPf, pPf, r1s, s1s, vPf };
var __wakaru_E3i_initialized = false;
export function E3i() {
if (__wakaru_E3i_initialized) return;
__wakaru_E3i_initialized = true;
E(), GSs(), r1s = (function(t) {
    return t.open = "data-open", t.closed = "data-closed", t[t.startingStyle = v3n.startingStyle] = "startingStyle", t[t.endingStyle = v3n.endingStyle] = "endingStyle", t.anchorHidden = "data-anchor-hidden", t.side = "data-side", t.align = "data-align", t;
})({}), s1s = (function(t) {
    return t.popupOpen = "data-popup-open", t.pressed = "data-pressed", t;
})({}), dPf = {
    [s1s.popupOpen]: ""
}, hPf = {
    [s1s.popupOpen]: "",
    [s1s.pressed]: ""
}, pPf = {
    [r1s.open]: ""
}, mPf = {
    [r1s.closed]: ""
}, gPf = {
    [r1s.anchorHidden]: ""
}, fPf = {
    open (t) {
        return t ? dPf : null;
    }
}, vPf = {
    open (t) {
        return t ? hPf : null;
    }
}, T3i = {
    open (t) {
        return t ? pPf : mPf;
    },
    anchorHidden (t) {
        return t ? gPf : null;
    }
};

}
