import { require_errors2 } from "../core/errors.js";
var __wakaru_require_mock_errors2_cache;
export function require_mock_errors2() {
if (__wakaru_require_mock_errors2_cache) return __wakaru_require_mock_errors2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_mock_errors2_cache = module2;
"use strict";
var { UndiciError } = require_errors2();
var kMockNotMatchedError = Symbol.for("undici.error.UND_MOCK_ERR_MOCK_NOT_MATCHED");
var MockNotMatchedError = class _MockNotMatchedError extends UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, _MockNotMatchedError);
        this.name = "MockNotMatchedError";
        this.message = message || "The request does not match any registered mock dispatches";
        this.code = "UND_MOCK_ERR_MOCK_NOT_MATCHED";
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kMockNotMatchedError] === true;
    }
    [kMockNotMatchedError] = true;
};
module2.exports = {
    MockNotMatchedError
};

return module2.exports;
}
