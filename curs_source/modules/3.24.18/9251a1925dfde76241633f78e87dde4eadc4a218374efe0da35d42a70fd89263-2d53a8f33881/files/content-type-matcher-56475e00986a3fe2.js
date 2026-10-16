var __wakaru_require_content_type_matcher_cache;
export function require_content_type_matcher() {
if (__wakaru_require_content_type_matcher_cache) return __wakaru_require_content_type_matcher_cache;
var exports2 = {};
__wakaru_require_content_type_matcher_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.contentTypeMatcher = contentTypeMatcher2;
var contentTypeMatcherCacheSize2 = 1024;
function contentTypeMatcher2(...supported2) {
    const cache2 = new Map();
    const source = supported2.reduce((previousValue, currentValue)=>previousValue.concat("supported" in currentValue ? currentValue.supported : currentValue), []);
    function match2(contentType) {
        if (contentType === null || contentType.length == 0) {
            return false;
        }
        const cached2 = cache2.get(contentType);
        if (cached2 !== void 0) {
            return cached2;
        }
        const ok = source.some((re3)=>re3.test(contentType));
        if (cache2.size < contentTypeMatcherCacheSize2) {
            cache2.set(contentType, ok);
        }
        return ok;
    }
    match2.supported = source;
    return match2;
}

return exports2;
}
