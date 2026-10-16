var __wakaru_require_authInit_cache;
export function require_authInit() {
if (__wakaru_require_authInit_cache) return __wakaru_require_authInit_cache;
var exports2 = {};
__wakaru_require_authInit_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.AUTH_INIT_POLL_MS = exports2.AUTH_INIT_TIMEOUT_MS = void 0;
exports2.pollForAuthValues = pollForAuthValues;
exports2.AUTH_INIT_TIMEOUT_MS = 2e3;
exports2.AUTH_INIT_POLL_MS = 200;
async function pollForAuthValues(getters, logger146, debugLog) {
    const startTime = Date.now();
    let pollCount = 0;
    let credsReadyAtPoll;
    let tokenReadyAtPoll;
    let creds;
    let token;
    while(creds === void 0 || token === void 0){
        try {
            creds = getters.getCreds();
            token = getters.getToken();
        } catch (e) {
            debugLog?.error("Failed to get auth values", e);
        }
        pollCount++;
        if (credsReadyAtPoll === void 0 && creds !== void 0) {
            credsReadyAtPoll = pollCount;
        }
        if (tokenReadyAtPoll === void 0 && token !== void 0) {
            tokenReadyAtPoll = pollCount;
        }
        const elapsed = Date.now() - startTime;
        if (elapsed > exports2.AUTH_INIT_TIMEOUT_MS) {
            logger146.onTimeout({
                hasCreds: creds !== void 0,
                hasToken: token !== void 0,
                pollCount,
                elapsedMs: elapsed
            });
            break;
        }
        if (creds === void 0 || token === void 0) {
            await new Promise((resolve36)=>setTimeout(resolve36, exports2.AUTH_INIT_POLL_MS));
        }
    }
    const elapsedMs2 = Date.now() - startTime;
    if (credsReadyAtPoll !== void 0 && tokenReadyAtPoll !== void 0 && credsReadyAtPoll < tokenReadyAtPoll) {
        logger146.onRaceConditionPrevented({
            credsReadyAtPoll,
            tokenReadyAtPoll,
            pollCount,
            elapsedMs: elapsedMs2
        });
    }
    return {
        creds,
        token
    };
}

return exports2;
}
