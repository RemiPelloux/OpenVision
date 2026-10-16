import { D } from "./Iwo.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
import { kLy } from "./ze.js";
var _oi, xBt, vqo, czd, GTr;
export { GTr, _oi, czd, vqo, xBt };
var __wakaru_ABt_initialized = false;
export function ABt() {
if (__wakaru_ABt_initialized) return;
__wakaru_ABt_initialized = true;
"use strict";
E(), Bt(), _oi = class {
    constructor(t, e, n = e){
        this.modifierLabels = [
            null
        ], this.modifierLabels[2] = t, this.modifierLabels[1] = e, this.modifierLabels[3] = n;
    }
    toLabel(t, e, n) {
        if (e.length === 0) return null;
        const i = [];
        for(let r = 0, s = e.length; r < s; r++){
            const o = e[r], a = n(o);
            if (a === null) return null;
            i[r] = kLy(o, a, this.modifierLabels[t]);
        }
        return i.join(" ");
    }
}, xBt = new _oi({
    ctrlKey: "\u2303",
    shiftKey: "\u21E7",
    altKey: "\u2325",
    metaKey: "\u2318",
    separator: ""
}, {
    ctrlKey: D(123, null),
    shiftKey: D(124, null),
    altKey: D(125, null),
    metaKey: D(126, null),
    separator: "+"
}, {
    ctrlKey: D(127, null),
    shiftKey: D(128, null),
    altKey: D(129, null),
    metaKey: D(130, null),
    separator: "+"
}), vqo = new _oi({
    ctrlKey: D(131, null),
    shiftKey: D(132, null),
    altKey: D(133, null),
    metaKey: D(134, null),
    separator: "+"
}, {
    ctrlKey: D(135, null),
    shiftKey: D(136, null),
    altKey: D(137, null),
    metaKey: D(138, null),
    separator: "+"
}, {
    ctrlKey: D(139, null),
    shiftKey: D(140, null),
    altKey: D(141, null),
    metaKey: D(142, null),
    separator: "+"
}), czd = new _oi({
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
}), GTr = new _oi({
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
