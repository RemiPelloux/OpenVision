"use strict";
var r = this && this.__assign || function() {
    return r = Object.assign || function(t) {
        for(var e, r = 1, n = arguments.length; r < n; r++)for(var s in e = arguments[r])Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
        return t;
    }, r.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var n = {
    delayFirstAttempt: !1,
    jitter: "none",
    maxDelay: 1 / 0,
    numOfAttempts: 10,
    retry: function() {
        return !0;
    },
    startingDelay: 100,
    timeMultiple: 2
};
exports.getSanitizedOptions = function(t) {
    var e = r(r({}, n), t);
    return e.numOfAttempts < 1 && (e.numOfAttempts = 1), e;
};
