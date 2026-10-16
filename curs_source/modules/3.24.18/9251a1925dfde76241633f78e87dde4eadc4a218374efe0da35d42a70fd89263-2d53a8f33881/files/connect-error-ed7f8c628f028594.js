import { createMessage } from "../../../../../../../../dist_exports.js";
import { Code, init_code } from "./code.js";
import { init_code_string } from "./protocol-connect/code-string.js";
var ConnectError;
export { ConnectError };
var __wakaru_init_connect_error_initialized = false;
export function init_connect_error() {
if (__wakaru_init_connect_error_initialized) return;
__wakaru_init_connect_error_initialized = true;
init_code();
init_code_string();
ConnectError = class _ConnectError extends Error {
    constructor(message, code = Code.Unknown, metadata, outgoingDetails, cause){
        super(createMessage(message, code));
        this.name = "ConnectError";
        Object.setPrototypeOf(this, new.target.prototype);
        this.rawMessage = message;
        this.code = code;
        this.metadata = new Headers(metadata !== null && metadata !== void 0 ? metadata : {});
        this.details = outgoingDetails !== null && outgoingDetails !== void 0 ? outgoingDetails : [];
        this.cause = cause;
    }
    static from(reason, code = Code.Unknown) {
        if (reason instanceof _ConnectError) {
            return reason;
        }
        if (reason instanceof Error) {
            if (reason.name == "AbortError") {
                return new _ConnectError(reason.message, Code.Canceled);
            }
            return new _ConnectError(reason.message, code, void 0, void 0, reason);
        }
        return new _ConnectError(String(reason), code, void 0, void 0, reason);
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

}
