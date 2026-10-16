var __wakaru_require_validation_error_cache;
export function require_validation_error() {
if (__wakaru_require_validation_error_cache) return __wakaru_require_validation_error_cache;
var exports2 = {};
__wakaru_require_validation_error_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var ValidationError = class extends Error {
    constructor(errors){
        super("validation failed");
        this.errors = errors;
        this.ajv = this.validation = true;
    }
};
exports2.default = ValidationError;

return exports2;
}
