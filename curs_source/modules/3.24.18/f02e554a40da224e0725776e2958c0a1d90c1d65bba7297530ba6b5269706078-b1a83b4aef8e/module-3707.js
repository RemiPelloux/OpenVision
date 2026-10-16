"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.defaultPath = function(t) {
    if (!t || "/" !== t.slice(0, 1)) return "/";
    if ("/" === t) return t;
    const e = t.lastIndexOf("/");
    if (0 === e) return "/";
    return t.slice(0, e);
};
