"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.enumToMap = void 0, exports.enumToMap = function(e) {
    const t = {};
    return Object.keys(e).forEach((r)=>{
        const n = e[r];
        "number" == typeof n && (t[r] = n);
    }), t;
};
