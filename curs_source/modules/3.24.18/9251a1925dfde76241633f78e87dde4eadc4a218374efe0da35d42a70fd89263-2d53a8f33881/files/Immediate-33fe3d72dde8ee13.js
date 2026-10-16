var __wakaru_require_Immediate_cache;
export function require_Immediate() {
if (__wakaru_require_Immediate_cache) return __wakaru_require_Immediate_cache;
var exports2 = {};
__wakaru_require_Immediate_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.TestTools = exports2.Immediate = void 0;
var nextHandle = 1;
var resolved;
var activeHandles = {};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
exports2.Immediate = {
    setImmediate (cb) {
        const handle = nextHandle++;
        activeHandles[handle] = true;
        if (!resolved) {
            resolved = Promise.resolve();
        }
        resolved.then(()=>findAndClearHandle(handle) && cb());
        return handle;
    },
    clearImmediate (handle) {
        findAndClearHandle(handle);
    }
};
exports2.TestTools = {
    pending () {
        return Object.keys(activeHandles).length;
    }
};

return exports2;
}
