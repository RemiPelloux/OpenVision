require.r(exports);
require.d(exports, {
    ConnectError: ()=>ConnectError
});
var _code_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-200.js");
var _protocol_connect_code_string_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-201.js");
class ConnectError extends Error {
    constructor(message, code = _code_js__WEBPACK_IMPORTED_MODULE_0__.Code.Unknown, metadata, outgoingDetails, cause){
        super(createMessage(message, code));
        this.name = "ConnectError";
        Object.setPrototypeOf(this, new.target.prototype);
        this.rawMessage = message;
        this.code = code;
        this.metadata = new Headers(metadata !== null && metadata !== void 0 ? metadata : {});
        this.details = outgoingDetails !== null && outgoingDetails !== void 0 ? outgoingDetails : [];
        this.cause = cause;
    }
    static from(reason, code = _code_js__WEBPACK_IMPORTED_MODULE_0__.Code.Unknown) {
        if (reason instanceof ConnectError) {
            return reason;
        }
        if (reason instanceof Error) {
            if (reason.name == "AbortError") {
                return new ConnectError(reason.message, _code_js__WEBPACK_IMPORTED_MODULE_0__.Code.Canceled);
            }
            return new ConnectError(reason.message, code, undefined, undefined, reason);
        }
        return new ConnectError(String(reason), code, undefined, undefined, reason);
    }
    static [Symbol.hasInstance](v) {
        if (!(v instanceof Error)) {
            return false;
        }
        if (Object.getPrototypeOf(v) === ConnectError.prototype) {
            return true;
        }
        return v.name === "ConnectError" && "code" in v && typeof v.code === "number" && "metadata" in v && "details" in v && Array.isArray(v.details) && "rawMessage" in v && typeof v.rawMessage == "string" && "cause" in v;
    }
    findDetails(typeOrRegistry) {
        const registry = "typeName" in typeOrRegistry ? {
            findMessage: (typeName)=>typeName === typeOrRegistry.typeName ? typeOrRegistry : undefined
        } : typeOrRegistry;
        const details = [];
        for (const data of this.details){
            if ("getType" in data) {
                if (registry.findMessage(data.getType().typeName)) {
                    details.push(data);
                }
                continue;
            }
            const type = registry.findMessage(data.type);
            if (type) {
                try {
                    details.push(type.fromBinary(data.value));
                } catch (_) {}
            }
        }
        return details;
    }
}
function createMessage(message, code) {
    return message.length ? `[${(0, _protocol_connect_code_string_js__WEBPACK_IMPORTED_MODULE_1__.codeToString)(code)}] ${message}` : `[${(0, _protocol_connect_code_string_js__WEBPACK_IMPORTED_MODULE_1__.codeToString)(code)}]`;
}
