"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.arrRemove = void 0, exports.arrRemove = function(e, t) {
    if (e) {
        const r = e.indexOf(t);
        0 <= r && e.splice(r, 1);
    }
};
