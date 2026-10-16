import { require_resolve } from "./resolve.js";
var __wakaru_require_ref_error_cache;
export function require_ref_error() {
if (__wakaru_require_ref_error_cache) return __wakaru_require_ref_error_cache;
var exports2 = {};
__wakaru_require_ref_error_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var resolve_1 = require_resolve();
var MissingRefError = class extends Error {
    constructor(resolver, baseId, ref, msg){
        super(msg || `can't resolve reference ${ref} from id ${baseId}`);
        this.missingRef = (0, resolve_1.resolveUrl)(resolver, baseId, ref);
        this.missingSchema = (0, resolve_1.normalizeId)((0, resolve_1.getFullPath)(resolver, this.missingRef));
    }
};
exports2.default = MissingRefError;

return exports2;
}
