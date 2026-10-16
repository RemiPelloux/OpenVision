var __wakaru_require_ipChangeMonitor_cache;
export function require_ipChangeMonitor() {
if (__wakaru_require_ipChangeMonitor_cache) return __wakaru_require_ipChangeMonitor_cache;
var exports2 = {};
__wakaru_require_ipChangeMonitor_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createAbortErrorAndTimeoutInterceptor = createAbortErrorAndTimeoutInterceptor;
exports2.wrapCallbackInTryCatch = wrapCallbackInTryCatch;
var PREPARE_LOCAL_FSD_RUN_NETWORK_CHECK_TIMEOUT_MS = 12e4;
function resolveNetworkCheckTimeoutMs(req, defaultTimeoutMs) {
    const methodName = req.method.name;
    const url2 = req.url;
    if (methodName === "PrepareLocalFullSelfDrivingRun" || url2.includes("PrepareLocalFullSelfDrivingRun")) {
        return Math.max(defaultTimeoutMs, PREPARE_LOCAL_FSD_RUN_NETWORK_CHECK_TIMEOUT_MS);
    }
    return defaultTimeoutMs;
}
function createAbortErrorAndTimeoutInterceptor(getNetworkId, callbackFn, timeoutMs) {
    return (next)=>async (req)=>{
            const effectiveTimeoutMs = resolveNetworkCheckTimeoutMs(req, timeoutMs);
            let timeoutId;
            let finished2 = false;
            const networkErroredFuture = new Promise((_resolve, reject2)=>{
                const startingNetworkId = getNetworkId();
                timeoutId = setTimeout(()=>{
                    if (!finished2) {
                        wrapCallbackInTryCatch(()=>callbackFn(startingNetworkId).then((didNetworkChange)=>{
                                if (didNetworkChange) {
                                    reject2(new Error("Network disconnected"));
                                }
                            }));
                    }
                }, effectiveTimeoutMs);
                if (req.signal) {
                    req.signal.addEventListener("abort", ()=>{
                        clearTimeout(timeoutId);
                        if (!finished2) {
                            wrapCallbackInTryCatch(callbackFn);
                        }
                    });
                }
            });
            try {
                const result = await Promise.race([
                    next(req),
                    networkErroredFuture
                ]);
                if (result === void 0) {
                    throw new Error("Network timeout");
                }
                finished2 = true;
                clearTimeout(timeoutId);
                return result;
            } catch (error3) {
                clearTimeout(timeoutId);
                wrapCallbackInTryCatch(callbackFn);
                throw error3;
            }
        };
}
function wrapCallbackInTryCatch(callbackFn) {
    try {
        const result = callbackFn();
        return result;
    } catch (error3) {
        return false;
    }
}

return exports2;
}
