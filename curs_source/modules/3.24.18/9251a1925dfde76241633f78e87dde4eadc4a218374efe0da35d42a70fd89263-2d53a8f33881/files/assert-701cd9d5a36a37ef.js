var FLOAT32_MAX, FLOAT32_MIN, UINT32_MAX, INT32_MAX, INT32_MIN;
export { FLOAT32_MAX, FLOAT32_MIN, INT32_MAX, INT32_MIN, UINT32_MAX };
var __wakaru_init_assert_initialized = false;
export function init_assert() {
if (__wakaru_init_assert_initialized) return;
__wakaru_init_assert_initialized = true;
FLOAT32_MAX = 34028234663852886e22;
FLOAT32_MIN = -34028234663852886e22;
UINT32_MAX = 4294967295;
INT32_MAX = 2147483647;
INT32_MIN = -2147483648;

}
