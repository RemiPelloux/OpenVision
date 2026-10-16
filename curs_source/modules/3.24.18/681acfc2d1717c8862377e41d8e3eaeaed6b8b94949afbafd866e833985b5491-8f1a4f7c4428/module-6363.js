"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.enumToMap = void 0, exports.enumToMap = function(e) {
    const t = {};
    return Object.keys(e).forEach((A)=>{
        const n = e[A];
        "number" == typeof n && (t[A] = n);
    }), t;
};
