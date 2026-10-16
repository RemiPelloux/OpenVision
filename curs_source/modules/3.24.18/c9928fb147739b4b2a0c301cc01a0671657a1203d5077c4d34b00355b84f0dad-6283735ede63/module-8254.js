Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.count = void 0;
const s = require("./module-8339.js");
exports.count = function(e) {
    return (0, s.reduce)((a, n, s)=>!e || e(n, s) ? a + 1 : a, 0);
};
