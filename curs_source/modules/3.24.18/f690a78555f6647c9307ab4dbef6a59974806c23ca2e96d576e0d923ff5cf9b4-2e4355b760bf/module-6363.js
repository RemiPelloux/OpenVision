"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.enumToMap = void 0, exports.enumToMap = function(e) {
    const A = {};
    return Object.keys(e).forEach((t)=>{
        const n = e[t];
        "number" == typeof n && (A[t] = n);
    }), A;
};
