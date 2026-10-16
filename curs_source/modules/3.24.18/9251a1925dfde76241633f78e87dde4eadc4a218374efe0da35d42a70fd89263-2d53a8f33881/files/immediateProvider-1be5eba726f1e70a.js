import { require_Immediate } from "../util/Immediate.js";
var __wakaru_require_immediateProvider_cache;
export function require_immediateProvider() {
if (__wakaru_require_immediateProvider_cache) return __wakaru_require_immediateProvider_cache;
var exports2 = {};
__wakaru_require_immediateProvider_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.immediateProvider = void 0;
var Immediate_js_1 = require_Immediate();
var { setImmediate: setImmediate2, clearImmediate: clearImmediate2 } = Immediate_js_1.Immediate;
exports2.immediateProvider = {
    setImmediate (...args) {
        const { delegate } = exports2.immediateProvider;
        return (delegate?.setImmediate || setImmediate2)(...args);
    },
    clearImmediate (handle) {
        const { delegate } = exports2.immediateProvider;
        return (delegate?.clearImmediate || clearImmediate2)(handle);
    },
    delegate: void 0
};

return exports2;
}
