import { S } from "./HVr.js";
import { rt } from "./nls.js";
import { xSg } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Gvn, amt, pis, L7c, hyi;
export { Gvn, L7c, amt, hyi, pis };
var __wakaru_cmt_initialized = false;
export function cmt() {
if (__wakaru_cmt_initialized) return;
__wakaru_cmt_initialized = true;
"use strict";
x(), rt(), Gvn = class {
    constructor(e, t, n = t){
        this.modifierLabels = [
            null
        ], this.modifierLabels[2] = e, this.modifierLabels[1] = t, this.modifierLabels[3] = n;
    }
    toLabel(e, t, n) {
        if (t.length === 0) return null;
        const i = [];
        for(let r = 0, s = t.length; r < s; r++){
            const o = t[r], a = n(o);
            if (a === null) return null;
            i[r] = xSg(o, a, this.modifierLabels[e]);
        }
        return i.join(" ");
    }
}, amt = new Gvn({
    ctrlKey: "\u2303",
    shiftKey: "\u21E7",
    altKey: "\u2325",
    metaKey: "\u2318",
    separator: ""
}, {
    ctrlKey: S(123, null),
    shiftKey: S(124, null),
    altKey: S(125, null),
    metaKey: S(126, null),
    separator: "+"
}, {
    ctrlKey: S(127, null),
    shiftKey: S(128, null),
    altKey: S(129, null),
    metaKey: S(130, null),
    separator: "+"
}), pis = new Gvn({
    ctrlKey: S(131, null),
    shiftKey: S(132, null),
    altKey: S(133, null),
    metaKey: S(134, null),
    separator: "+"
}, {
    ctrlKey: S(135, null),
    shiftKey: S(136, null),
    altKey: S(137, null),
    metaKey: S(138, null),
    separator: "+"
}, {
    ctrlKey: S(139, null),
    shiftKey: S(140, null),
    altKey: S(141, null),
    metaKey: S(142, null),
    separator: "+"
}), L7c = new Gvn({
    ctrlKey: "Ctrl",
    shiftKey: "Shift",
    altKey: "Alt",
    metaKey: "Cmd",
    separator: "+"
}, {
    ctrlKey: "Ctrl",
    shiftKey: "Shift",
    altKey: "Alt",
    metaKey: "Super",
    separator: "+"
}), hyi = new Gvn({
    ctrlKey: "ctrl",
    shiftKey: "shift",
    altKey: "alt",
    metaKey: "cmd",
    separator: "+"
}, {
    ctrlKey: "ctrl",
    shiftKey: "shift",
    altKey: "alt",
    metaKey: "win",
    separator: "+"
}, {
    ctrlKey: "ctrl",
    shiftKey: "shift",
    altKey: "alt",
    metaKey: "meta",
    separator: "+"
});

}
