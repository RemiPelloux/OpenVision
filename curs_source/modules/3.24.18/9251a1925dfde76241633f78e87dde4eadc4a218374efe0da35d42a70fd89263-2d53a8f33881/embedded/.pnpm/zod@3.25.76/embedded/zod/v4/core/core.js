var NEVER2, $ZodAsyncError, globalConfig;
export { $ZodAsyncError, NEVER2, globalConfig };
var __wakaru_init_core3_initialized = false;
export function init_core3() {
if (__wakaru_init_core3_initialized) return;
__wakaru_init_core3_initialized = true;
NEVER2 = Object.freeze({
    status: "aborted"
});
$ZodAsyncError = class extends Error {
    constructor(){
        super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
    }
};
globalConfig = {};

}
