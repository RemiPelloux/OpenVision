import { require_message } from "./message.js";
var __wakaru_require_is_message_cache;
export function require_is_message() {
if (__wakaru_require_is_message_cache) return __wakaru_require_is_message_cache;
var exports2 = {};
__wakaru_require_is_message_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.isMessage = void 0;
var message_js_1 = require_message();
function isMessage3(arg, type2) {
    if (arg === null || typeof arg != "object") {
        return false;
    }
    if (!Object.getOwnPropertyNames(message_js_1.Message.prototype).every((m2)=>m2 in arg && typeof arg[m2] == "function")) {
        return false;
    }
    const actualType = arg.getType();
    if (actualType === null || typeof actualType != "function" || !("typeName" in actualType) || typeof actualType.typeName != "string") {
        return false;
    }
    return type2 === void 0 ? true : actualType.typeName == type2.typeName;
}
exports2.isMessage = isMessage3;

return exports2;
}
