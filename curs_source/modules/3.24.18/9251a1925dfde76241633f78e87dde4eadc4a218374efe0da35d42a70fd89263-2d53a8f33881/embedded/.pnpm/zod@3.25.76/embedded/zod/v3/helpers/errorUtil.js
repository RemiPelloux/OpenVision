var errorUtil;
export { errorUtil };
var __wakaru_init_errorUtil_initialized = false;
export function init_errorUtil() {
if (__wakaru_init_errorUtil_initialized) return;
__wakaru_init_errorUtil_initialized = true;
(function(errorUtil2) {
    errorUtil2.errToObj = (message)=>typeof message === "string" ? {
            message
        } : message || {};
    errorUtil2.toString = (message)=>typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

}
