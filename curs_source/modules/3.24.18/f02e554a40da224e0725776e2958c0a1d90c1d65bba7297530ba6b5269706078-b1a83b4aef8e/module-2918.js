"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var n = require("./module-4209.js"), s = require("./module-2247.js");
exports.DelayFactory = function(t, e) {
    var r = function(t) {
        if (!t.delayFirstAttempt) return new n.SkipFirstDelay(t);
        return new s.AlwaysDelay(t);
    }(t);
    return r.setAttemptNumber(e), r;
};
