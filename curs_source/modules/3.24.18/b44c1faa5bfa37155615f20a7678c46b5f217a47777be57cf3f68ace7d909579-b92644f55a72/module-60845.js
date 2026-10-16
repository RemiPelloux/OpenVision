"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createObject = void 0, exports.createObject = function(e, t) {
    return e.reduce((e, r, n)=>(e[r] = t[n], e), {});
};
