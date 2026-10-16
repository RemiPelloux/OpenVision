import { E } from "./tslib.es6.js";
var xbi;
export { xbi };
var __wakaru_UE1_initialized = false;
export function UE1() {
if (__wakaru_UE1_initialized) return;
__wakaru_UE1_initialized = true;
"use strict";
E(), xbi = class yXs {
    static isCollapsed(e) {
        const { anchorNode: n, focusNode: i } = e;
        return n === null || i === null ? !0 : n === i && e.anchorOffset === e.focusOffset;
    }
    static isWithin(e, n) {
        const { anchorNode: i, focusNode: r } = e;
        return i !== null && r !== null && n.contains(i) && n.contains(r);
    }
    static isNonEmptyWithin(e, n) {
        return !yXs.isCollapsed(e) && yXs.isWithin(e, n);
    }
    static buildRange(e, n) {
        const i = e.ownerDocument.createRange();
        return n && n.isConnected && e.contains(n) ? (i.setStartBefore(n), i.setEndAfter(n), i) : e.isConnected ? (i.selectNodeContents(e), i) : null;
    }
    static scopeToElement(e, n, i) {
        const r = yXs.buildRange(n, i);
        return r ? (e.removeAllRanges(), e.addRange(r), !0) : !1;
    }
};

}
