"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.enumToMap = void 0, exports.enumToMap = function(A) {
    const e = {};
    return Object.keys(A).forEach((t)=>{
        const r = A[t];
        "number" == typeof r && (e[t] = r);
    }), e;
};
