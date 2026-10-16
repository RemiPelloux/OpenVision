"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.enumToMap = void 0, exports.enumToMap = function(e) {
    const n = {};
    return Object.keys(e).forEach((t)=>{
        const a = e[t];
        "number" == typeof a && (n[t] = a);
    }), n;
};
