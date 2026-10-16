"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.enumToMap = void 0, exports.enumToMap = function(e) {
    const n = {};
    return Object.keys(e).forEach((a)=>{
        const t = e[a];
        "number" == typeof t && (n[a] = t);
    }), n;
};
