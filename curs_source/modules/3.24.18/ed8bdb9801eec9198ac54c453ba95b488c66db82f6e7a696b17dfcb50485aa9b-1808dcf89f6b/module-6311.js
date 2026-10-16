"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.fromBuffer = exports.fromStream = exports.EndOfStreamError = void 0;
const a = require("./module-8563.js"), n = require("./module-2457.js");
var r = require("./module-690.js");
Object.defineProperty(exports, "EndOfStreamError", {
    enumerable: !0,
    get: function() {
        return r.EndOfStreamError;
    }
}), exports.fromStream = function(e, t) {
    return t = t || {}, new a.ReadStreamTokenizer(e, t);
}, exports.fromBuffer = function(e, t) {
    return new n.BufferTokenizer(e, t);
};
