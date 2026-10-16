var BIGINT_ZERO, BIGINT_EIGHT, BIGINT_SIXTEEN, IPV4_LOW_HEXTET_MASK;
export { BIGINT_EIGHT, BIGINT_SIXTEEN, BIGINT_ZERO, IPV4_LOW_HEXTET_MASK };
var __wakaru_init_domain_utils_initialized = false;
export function init_domain_utils() {
if (__wakaru_init_domain_utils_initialized) return;
__wakaru_init_domain_utils_initialized = true;
"use strict";
BIGINT_ZERO = BigInt(0);
BIGINT_EIGHT = BigInt(8);
BIGINT_SIXTEEN = BigInt(16);
IPV4_LOW_HEXTET_MASK = BigInt(65535);

}
