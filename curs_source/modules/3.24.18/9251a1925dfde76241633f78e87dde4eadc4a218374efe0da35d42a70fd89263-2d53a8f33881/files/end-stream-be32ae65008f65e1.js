import { require_code } from "../code.js";
import { require_connect_error } from "../connect-error.js";
import { require_http_headers } from "../http-headers.js";
import { require_error_json } from "./error-json.js";
var __wakaru_require_end_stream_cache;
export function require_end_stream() {
if (__wakaru_require_end_stream_cache) return __wakaru_require_end_stream_cache;
var exports2 = {};
__wakaru_require_end_stream_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.endStreamFlag = void 0;
exports2.endStreamFromJson = endStreamFromJson2;
exports2.endStreamToJson = endStreamToJson2;
exports2.createEndStreamSerialization = createEndStreamSerialization2;
var error_json_js_1 = require_error_json();
var http_headers_js_1 = require_http_headers();
var connect_error_js_1 = require_connect_error();
var code_js_1 = require_code();
exports2.endStreamFlag = 2;
function endStreamFromJson2(data) {
    const parseErr = new connect_error_js_1.ConnectError("invalid end stream", code_js_1.Code.Unknown);
    let jsonValue;
    try {
        jsonValue = JSON.parse(typeof data == "string" ? data : new TextDecoder().decode(data));
    } catch (e) {
        throw parseErr;
    }
    if (typeof jsonValue != "object" || jsonValue == null || Array.isArray(jsonValue)) {
        throw parseErr;
    }
    const metadata = new Headers();
    if ("metadata" in jsonValue) {
        if (typeof jsonValue.metadata != "object" || jsonValue.metadata == null || Array.isArray(jsonValue.metadata)) {
            throw parseErr;
        }
        for (const [key, values] of Object.entries(jsonValue.metadata)){
            if (!Array.isArray(values) || values.some((value)=>typeof value != "string")) {
                throw parseErr;
            }
            for (const value of values){
                metadata.append(key, value);
            }
        }
    }
    const error3 = "error" in jsonValue && jsonValue.error != null ? (0, error_json_js_1.errorFromJson)(jsonValue.error, metadata, parseErr) : void 0;
    return {
        metadata,
        error: error3
    };
}
function endStreamToJson2(metadata, error3, jsonWriteOptions) {
    const es2 = {};
    if (error3 !== void 0) {
        es2.error = (0, error_json_js_1.errorToJson)(error3, jsonWriteOptions);
        metadata = (0, http_headers_js_1.appendHeaders)(metadata, error3.metadata);
    }
    let hasMetadata = false;
    const md = {};
    metadata.forEach((value, key)=>{
        hasMetadata = true;
        md[key] = [
            value
        ];
    });
    if (hasMetadata) {
        es2.metadata = md;
    }
    return es2;
}
function createEndStreamSerialization2(options2) {
    const textEncoder2 = new TextEncoder();
    return {
        serialize (data) {
            try {
                const jsonObject = endStreamToJson2(data.metadata, data.error, options2);
                const jsonString = JSON.stringify(jsonObject);
                return textEncoder2.encode(jsonString);
            } catch (e) {
                const m2 = e instanceof Error ? e.message : String(e);
                throw new connect_error_js_1.ConnectError(`failed to serialize EndStreamResponse: ${m2}`, code_js_1.Code.Internal);
            }
        },
        parse (data) {
            try {
                return endStreamFromJson2(data);
            } catch (e) {
                const m2 = e instanceof Error ? e.message : String(e);
                throw new connect_error_js_1.ConnectError(`failed to parse EndStreamResponse: ${m2}`, code_js_1.Code.InvalidArgument);
            }
        }
    };
}

return exports2;
}
