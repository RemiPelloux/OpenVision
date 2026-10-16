"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.normalizeMetricsProviderTags = function(e) {
    if (void 0 === e) return {};
    if (Array.isArray(e)) return e.reduce((e, t)=>{
        const r = t.indexOf(":");
        return -1 === r ? e[t] = "" : e[t.substring(0, r)] = t.substring(r + 1), e;
    }, {});
    return e;
};
