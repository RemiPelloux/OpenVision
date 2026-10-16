import { require_cjs2 } from "../../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/cjs/index.js";
import { require_code } from "../code.js";
import { require_connect_error } from "../connect-error.js";
import { require_code_string } from "./code-string.js";
var __wakaru_require_error_json_cache;
export function require_error_json() {
if (__wakaru_require_error_json_cache) return __wakaru_require_error_json_cache;
var exports2 = {};
__wakaru_require_error_json_cache = exports2;
"use strict";
var __rest2 = exports2 && exports2.__rest || function(s3, e) {
    var t = {};
    for(var p2 in s3)if (Object.prototype.hasOwnProperty.call(s3, p2) && e.indexOf(p2) < 0) t[p2] = s3[p2];
    if (s3 != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p2 = Object.getOwnPropertySymbols(s3); i < p2.length; i++){
        if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p2[i])) t[p2[i]] = s3[p2[i]];
    }
    return t;
};
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.errorFromJson = errorFromJson2;
exports2.errorFromJsonBytes = errorFromJsonBytes2;
exports2.errorToJson = errorToJson2;
exports2.errorToJsonBytes = errorToJsonBytes2;
var protobuf_1 = require_cjs2();
var code_js_1 = require_code();
var connect_error_js_1 = require_connect_error();
var code_string_js_1 = require_code_string();
function errorFromJson2(jsonValue, metadata, fallback3) {
    var _a18;
    if (metadata) {
        new Headers(metadata).forEach((value, key)=>fallback3.metadata.append(key, value));
    }
    if (typeof jsonValue !== "object" || jsonValue == null || Array.isArray(jsonValue)) {
        throw fallback3;
    }
    let code = fallback3.code;
    if ("code" in jsonValue && typeof jsonValue.code === "string") {
        code = (_a18 = (0, code_string_js_1.codeFromString)(jsonValue.code)) !== null && _a18 !== void 0 ? _a18 : code;
    }
    const message = jsonValue.message;
    if (message != null && typeof message !== "string") {
        throw fallback3;
    }
    const error3 = new connect_error_js_1.ConnectError(message !== null && message !== void 0 ? message : "", code, metadata);
    if ("details" in jsonValue && Array.isArray(jsonValue.details)) {
        for (const detail of jsonValue.details){
            if (detail === null || typeof detail != "object" || Array.isArray(detail) || typeof detail.type != "string" || typeof detail.value != "string") {
                throw fallback3;
            }
            try {
                error3.details.push({
                    type: detail.type,
                    value: protobuf_1.protoBase64.dec(detail.value),
                    debug: detail.debug
                });
            } catch (e) {
                throw fallback3;
            }
        }
    }
    return error3;
}
function errorFromJsonBytes2(bytes, metadata, fallback3) {
    let jsonValue;
    try {
        jsonValue = JSON.parse(new TextDecoder().decode(bytes));
    } catch (e) {
        throw fallback3;
    }
    return errorFromJson2(jsonValue, metadata, fallback3);
}
function errorToJson2(error3, jsonWriteOptions) {
    const o = {
        code: (0, code_string_js_1.codeToString)(error3.code)
    };
    if (error3.rawMessage.length > 0) {
        o.message = error3.rawMessage;
    }
    if (error3.details.length > 0) {
        o.details = error3.details.map((value)=>{
            if ("getType" in value) {
                const i = {
                    type: value.getType().typeName,
                    value: value.toBinary()
                };
                try {
                    i.debug = value.toJson(jsonWriteOptions);
                } catch (e) {}
                return i;
            }
            return value;
        }).map((_a18)=>{
            var { value } = _a18, rest = __rest2(_a18, [
                "value"
            ]);
            return Object.assign(Object.assign({}, rest), {
                value: protobuf_1.protoBase64.enc(value).replace(/=+$/, "")
            });
        });
    }
    return o;
}
function errorToJsonBytes2(error3, jsonWriteOptions) {
    const textEncoder2 = new TextEncoder();
    try {
        const jsonObject = errorToJson2(error3, jsonWriteOptions);
        const jsonString = JSON.stringify(jsonObject);
        return textEncoder2.encode(jsonString);
    } catch (e) {
        const m2 = e instanceof Error ? e.message : String(e);
        throw new connect_error_js_1.ConnectError(`failed to serialize Connect Error: ${m2}`, code_js_1.Code.Internal);
    }
}

return exports2;
}
