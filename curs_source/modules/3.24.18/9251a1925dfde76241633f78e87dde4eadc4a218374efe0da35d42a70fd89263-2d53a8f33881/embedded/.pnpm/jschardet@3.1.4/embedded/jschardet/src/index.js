import { require_logger } from "./logger.js";
import { require_universaldetector } from "./universaldetector.js";
var __wakaru_require_src_cache;
export function require_src() {
if (__wakaru_require_src_cache) return __wakaru_require_src_cache;
var exports2 = {};
__wakaru_require_src_cache = exports2;
var UniversalDetector = require_universaldetector();
var setLogger = require_logger().setLogger;
exports2.detect = function(buffer, options2) {
    var u2 = runUniversalDetector(buffer, options2);
    return u2.result;
};
exports2.detectAll = function(buffer, options2) {
    var u2 = runUniversalDetector(buffer, options2);
    return u2.results;
};
exports2.UniversalDetector = UniversalDetector;
exports2.enableDebug = function() {
    setLogger(console.log.bind(console));
};
function runUniversalDetector(buffer, options2) {
    var u2 = new UniversalDetector(options2);
    u2.reset();
    if (typeof Buffer == "function" && buffer instanceof Buffer) {
        u2.feed(buffer.toString("binary"));
    } else {
        u2.feed(buffer);
    }
    u2.close();
    return u2;
}

return exports2;
}
