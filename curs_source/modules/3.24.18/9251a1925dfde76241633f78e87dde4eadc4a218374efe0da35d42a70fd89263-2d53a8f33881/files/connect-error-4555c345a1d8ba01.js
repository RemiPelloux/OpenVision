import { require_code } from "./code.js";
import { require_code_string } from "./protocol-connect/code-string.js";
var __wakaru_require_connect_error_cache;
export function require_connect_error() {
if (__wakaru_require_connect_error_cache) return __wakaru_require_connect_error_cache;
var exports2 = {};
__wakaru_require_connect_error_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.ConnectError = void 0;
var code_js_1 = require_code();
var code_string_js_1 = require_code_string();
var ConnectError2 = class _ConnectError extends Error {
    constructor(message, code = code_js_1.Code.Unknown, metadata, outgoingDetails, cause){
        super(createMessage2(message, code));
        this.name = "ConnectError";
        Object.setPrototypeOf(this, new.target.prototype);
        this.rawMessage = message;
        this.code = code;
        this.metadata = new Headers(metadata !== null && metadata !== void 0 ? metadata : {});
        this.details = outgoingDetails !== null && outgoingDetails !== void 0 ? outgoingDetails : [];
        this.cause = cause;
    }
    static from(reason, code = code_js_1.Code.Unknown) {
        if (reason instanceof _ConnectError) {
            return reason;
        }
        if (reason instanceof Error) {
            if (reason.name == "AbortError") {
                return new _ConnectError(reason.message, code_js_1.Code.Canceled);
            }
            return new _ConnectError(reason.message, code, void 0, void 0, reason);
        }
        return new _ConnectError(String(reason), code, void 0, void 0, reason);
    }
    static [Symbol.hasInstance](v2) {
        if (!(v2 instanceof Error)) {
            return false;
        }
        if (Object.getPrototypeOf(v2) === _ConnectError.prototype) {
            return true;
        }
        return v2.name === "ConnectError" && "code" in v2 && typeof v2.code === "number" && "metadata" in v2 && "details" in v2 && Array.isArray(v2.details) && "rawMessage" in v2 && typeof v2.rawMessage == "string" && "cause" in v2;
    }
    findDetails(typeOrRegistry) {
        const registry2 = "typeName" in typeOrRegistry ? {
            findMessage: (typeName)=>typeName === typeOrRegistry.typeName ? typeOrRegistry : void 0
        } : typeOrRegistry;
        const details = [];
        for (const data of this.details){
            if ("getType" in data) {
                if (registry2.findMessage(data.getType().typeName)) {
                    details.push(data);
                }
                continue;
            }
            const type2 = registry2.findMessage(data.type);
            if (type2) {
                try {
                    details.push(type2.fromBinary(data.value));
                } catch (_2) {}
            }
        }
        return details;
    }
};
exports2.ConnectError = ConnectError2;
function createMessage2(message, code) {
    return message.length ? `[${(0, code_string_js_1.codeToString)(code)}] ${message}` : `[${(0, code_string_js_1.codeToString)(code)}]`;
}

return exports2;
}
