"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var n = require("./module-1727.js"), s = require("./module-8915.js");
exports.JitterFactory = function(t) {
    return "full" === t.jitter ? n.fullJitter : s.noJitter;
};
