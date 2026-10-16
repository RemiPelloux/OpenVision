Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ok = function(e, t) {
    if (!e) throw new Error(t ? `Assertion failed (${t})` : "Assertion Failed");
}, exports.assertNever = function(e, t = "Unreachable") {
    throw new Error(t);
}, exports.assert = function(e, t = "unexpected state") {
    if (!e) {
        throw "string" == typeof t ? new i.BugIndicatingError(`Assertion Failed: ${t}`) : t;
    }
}, exports.softAssert = function(e, t = "Soft Assertion Failed") {
    e || (0, i.onUnexpectedError)(new i.BugIndicatingError(t));
}, exports.assertFn = function(e) {
    e() || (e(), (0, i.onUnexpectedError)(new i.BugIndicatingError("Assertion Failed")));
}, exports.checkAdjacentItems = function(e, t) {
    let n = 0;
    for(; n < e.length - 1;){
        if (!t(e[n], e[n + 1])) return !1;
        n++;
    }
    return !0;
};
const i = require("./module-976.js");
