var MAX_PATTERN_LENGTH, assertValidPattern;
export { MAX_PATTERN_LENGTH, assertValidPattern };
var __wakaru_init_assert_valid_pattern_initialized = false;
export function init_assert_valid_pattern() {
if (__wakaru_init_assert_valid_pattern_initialized) return;
__wakaru_init_assert_valid_pattern_initialized = true;
MAX_PATTERN_LENGTH = 1024 * 64;
assertValidPattern = (pattern)=>{
    if (typeof pattern !== "string") {
        throw new TypeError("invalid pattern");
    }
    if (pattern.length > MAX_PATTERN_LENGTH) {
        throw new TypeError("pattern is too long");
    }
};

}
