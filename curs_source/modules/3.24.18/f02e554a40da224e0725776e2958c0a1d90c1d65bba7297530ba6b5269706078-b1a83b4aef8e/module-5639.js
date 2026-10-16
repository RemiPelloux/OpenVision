"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.enumToMap = void 0, exports.enumToMap = function(t) {
    const e = {};
    return Object.keys(t).forEach((r)=>{
        const n = t[r];
        "number" == typeof n && (e[r] = n);
    }), e;
};
