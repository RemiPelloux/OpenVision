import { require_errors } from "../core/errors.js";
var __wakaru_require_mock_errors_cache;
export function require_mock_errors() {
if (__wakaru_require_mock_errors_cache) return __wakaru_require_mock_errors_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_mock_errors_cache = module2;
"use strict";
var { UndiciError } = require_errors();
var MockNotMatchedError = class _MockNotMatchedError extends UndiciError {
    constructor(message){
        super(message);
        Error.captureStackTrace(this, _MockNotMatchedError);
        this.name = "MockNotMatchedError";
        this.message = message || "The request does not match any registered mock dispatches";
        this.code = "UND_MOCK_ERR_MOCK_NOT_MATCHED";
    }
};
module2.exports = {
    MockNotMatchedError
};

return module2.exports;
}
