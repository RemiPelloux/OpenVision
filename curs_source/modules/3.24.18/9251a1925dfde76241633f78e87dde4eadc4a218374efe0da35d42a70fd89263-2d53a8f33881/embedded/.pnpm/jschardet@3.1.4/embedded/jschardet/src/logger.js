var __wakaru_require_logger_cache;
export function require_logger() {
if (__wakaru_require_logger_cache) return __wakaru_require_logger_cache;
var exports2 = {};
__wakaru_require_logger_cache = exports2;
exports2.log = function() {};
exports2.setLogger = function setLogger(loggerFunction) {
    exports2.enabled = true;
    exports2.log = loggerFunction;
};

return exports2;
}
