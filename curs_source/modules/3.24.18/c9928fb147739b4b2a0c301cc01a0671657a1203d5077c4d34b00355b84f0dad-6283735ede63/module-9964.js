Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.distinctUntilKeyChanged = void 0;
const s = require("./module-7529.js");
exports.distinctUntilKeyChanged = function(e, a) {
    return (0, s.distinctUntilChanged)((n, s)=>a ? a(n[e], s[e]) : n[e] === s[e]);
};
