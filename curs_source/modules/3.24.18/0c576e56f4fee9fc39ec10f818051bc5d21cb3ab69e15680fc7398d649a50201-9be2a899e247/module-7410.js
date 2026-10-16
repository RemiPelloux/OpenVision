"use strict";
function r(e, t) {
    return t(e);
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.pipe = void 0, exports.pipe = function(...e) {
    return 1 === e.length ? e[0] : (t)=>e.reduce(r, t);
};
