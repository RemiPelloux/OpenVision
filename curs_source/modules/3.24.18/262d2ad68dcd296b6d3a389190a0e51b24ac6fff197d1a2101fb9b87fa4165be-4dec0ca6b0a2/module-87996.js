"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.rx = void 0;
const n = require("./module-51078.js");
function o(e, t) {
    return t(e);
}
exports.rx = function(e, ...t) {
    return t.reduce(o, (0, n.from)(e));
};
