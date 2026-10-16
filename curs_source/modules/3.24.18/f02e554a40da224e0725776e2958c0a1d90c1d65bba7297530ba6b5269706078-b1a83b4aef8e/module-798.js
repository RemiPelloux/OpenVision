"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.pathMatch = function(t, e) {
    if (e === t) return !0;
    if (0 === t.indexOf(e)) {
        if ("/" === e[e.length - 1]) return !0;
        if (t.startsWith(e) && "/" === t[e.length]) return !0;
    }
    return !1;
};
