Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.partition = void 0;
const s = require("./module-7029.js"), o = require("./module-4591.js"), r = require("./module-1078.js");
exports.partition = function(e, a, n) {
    return [
        (0, o.filter)(a, n)((0, r.from)(e)),
        (0, o.filter)((0, s.not)(a, n))((0, r.from)(e))
    ];
};
