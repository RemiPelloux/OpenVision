import { require_cjs3 } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/cjs/index.js";
var __wakaru_require_failureSimulatorInterceptor_cache;
export function require_failureSimulatorInterceptor() {
if (__wakaru_require_failureSimulatorInterceptor_cache) return __wakaru_require_failureSimulatorInterceptor_cache;
var exports2 = {};
__wakaru_require_failureSimulatorInterceptor_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createFailureSimulatorInterceptor = createFailureSimulatorInterceptor;
var connect_1 = require_cjs3();
function createFailureSimulatorInterceptor(config2 = {}) {
    const { failureCount = 2, errorCode: errorCode3 = connect_1.Code.Unavailable, errorMessage: errorMessage4 = "Simulated connection failure", methodFilter = [], delayMs } = config2;
    const attemptsByMethod = new Map();
    return (next)=>async (req)=>{
            const methodName = req.method.name;
            const retryEnabled = req.header.get("X-Cursor-RetryInterceptor-Enabled");
            if (retryEnabled !== "true") {
                return next(req);
            }
            if (methodFilter.length > 0 && !methodFilter.includes(methodName)) {
                return next(req);
            }
            const attempts = attemptsByMethod.get(methodName) ?? 0;
            attemptsByMethod.set(methodName, attempts + 1);
            if (attempts < failureCount) {
                if (delayMs !== void 0 && delayMs > 0) {
                    await new Promise((resolve36)=>setTimeout(resolve36, delayMs));
                }
                console.error(`=== FAILURE SIMULATOR: REQUEST IS BEING REJECTED ===
Method: ${methodName}
Attempt: ${attempts + 1}/${failureCount + 1}
Error Code: ${errorCode3}
Error Message: ${errorMessage4}`);
                throw new connect_1.ConnectError(`${errorMessage4} (attempt ${attempts + 1}/${failureCount + 1})`, errorCode3);
            }
            return next(req);
        };
}

return exports2;
}
