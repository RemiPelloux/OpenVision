Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.iif = void 0;
const s = require("./module-3737.js");
exports.iif = function(e, a, n) {
    return (0, s.defer)(()=>e() ? a : n);
};
