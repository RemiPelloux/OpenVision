"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.defaultPath = function(e) {
    if (!e || "/" !== e.slice(0, 1)) return "/";
    if ("/" === e) return e;
    const t = e.lastIndexOf("/");
    if (0 === t) return "/";
    return e.slice(0, t);
};
