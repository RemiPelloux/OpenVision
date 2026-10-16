var __wakaru_require_exception_cache;
export function require_exception() {
if (__wakaru_require_exception_cache) return __wakaru_require_exception_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_exception_cache = module2;
"use strict";
function YAMLException2(reason, mark) {
    Error.call(this);
    this.name = "YAMLException";
    this.reason = reason;
    this.mark = mark;
    this.message = (this.reason || "(unknown reason)") + (this.mark ? " " + this.mark.toString() : "");
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    } else {
        this.stack = new Error().stack || "";
    }
}
YAMLException2.prototype = Object.create(Error.prototype);
YAMLException2.prototype.constructor = YAMLException2;
YAMLException2.prototype.toString = function toString2(compact) {
    var result = this.name + ": ";
    result += this.reason || "(unknown reason)";
    if (!compact && this.mark) {
        result += " " + this.mark.toString();
    }
    return result;
};
module2.exports = YAMLException2;

return module2.exports;
}
