"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.enumToMap = void 0, exports.enumToMap = function(e) {
    const a = {};
    return Object.keys(e).forEach((n)=>{
        const t = e[n];
        "number" == typeof t && (a[n] = t);
    }), a;
};
