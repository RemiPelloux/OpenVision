Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.rx = void 0;
const s = require("./module-1078.js");
function o(e, a) {
    return a(e);
}
exports.rx = function(e, ...a) {
    return a.reduce(o, (0, s.from)(e));
};
