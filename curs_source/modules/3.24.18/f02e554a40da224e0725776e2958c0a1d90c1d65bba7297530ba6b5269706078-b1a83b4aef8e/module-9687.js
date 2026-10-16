"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var n = require("./module-5760.js"), s = function() {
    function t(t) {
        this.options = t, this.attempt = 0;
    }
    return t.prototype.apply = function() {
        var t = this;
        return new Promise(function(e) {
            return setTimeout(e, t.jitteredDelay);
        });
    }, t.prototype.setAttemptNumber = function(t) {
        this.attempt = t;
    }, Object.defineProperty(t.prototype, "jitteredDelay", {
        get: function() {
            return n.JitterFactory(this.options)(this.delay);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "delay", {
        get: function() {
            var t = this.options.startingDelay, e = this.options.timeMultiple, r = this.numOfDelayedAttempts, n = t * Math.pow(e, r);
            return Math.min(n, this.options.maxDelay);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "numOfDelayedAttempts", {
        get: function() {
            return this.attempt;
        },
        enumerable: !0,
        configurable: !0
    }), t;
}();
exports.Delay = s;
