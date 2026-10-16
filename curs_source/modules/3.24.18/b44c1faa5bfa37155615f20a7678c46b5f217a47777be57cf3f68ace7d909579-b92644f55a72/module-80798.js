"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.pathMatch = function(e, t) {
    if (t === e) return !0;
    if (0 === e.indexOf(t)) {
        if ("/" === t[t.length - 1]) return !0;
        if (e.startsWith(t) && "/" === e[t.length]) return !0;
    }
    return !1;
};
