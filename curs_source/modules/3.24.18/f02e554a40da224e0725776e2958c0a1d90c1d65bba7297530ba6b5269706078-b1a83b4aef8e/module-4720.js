"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.normalizeMetricsProviderTags = function(t) {
    if (void 0 === t) return {};
    if (Array.isArray(t)) return t.reduce((t, e)=>{
        const r = e.indexOf(":");
        return -1 === r ? t[e] = "" : t[e.substring(0, r)] = e.substring(r + 1), t;
    }, {});
    return t;
};
