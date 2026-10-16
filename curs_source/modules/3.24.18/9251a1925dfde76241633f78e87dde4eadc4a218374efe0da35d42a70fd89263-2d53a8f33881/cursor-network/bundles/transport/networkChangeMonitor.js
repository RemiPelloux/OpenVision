var __wakaru_require_networkChangeMonitor_cache;
export function require_networkChangeMonitor() {
if (__wakaru_require_networkChangeMonitor_cache) return __wakaru_require_networkChangeMonitor_cache;
var exports2 = {};
__wakaru_require_networkChangeMonitor_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.NetworkChangeMonitor = void 0;
var NetworkChangeMonitor = class {
    constructor(_host, _throttleIntervalInMillis, _callbackFn){
        this._networkId = 0;
    }
    get networkId() {
        return this._networkId;
    }
    async triggerCallbackIfDisconnected(_backendUrl, _accessToken) {
        return {
            isDisconnected: false
        };
    }
    dispose() {}
};
exports2.NetworkChangeMonitor = NetworkChangeMonitor;

return exports2;
}
