import { require_code } from "../code.js";
import { require_connect_error } from "../connect-error.js";
import { require_limit_io } from "./limit-io.js";
var __wakaru_require_serialization_cache;
export function require_serialization() {
if (__wakaru_require_serialization_cache) return __wakaru_require_serialization_cache;
var exports2 = {};
__wakaru_require_serialization_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.getJsonOptions = getJsonOptions2;
exports2.createMethodSerializationLookup = createMethodSerializationLookup2;
exports2.createClientMethodSerializers = createClientMethodSerializers;
exports2.limitSerialization = limitSerialization2;
exports2.createBinarySerialization = createBinarySerialization2;
exports2.createJsonSerialization = createJsonSerialization2;
var connect_error_js_1 = require_connect_error();
var code_js_1 = require_code();
var limit_io_js_1 = require_limit_io();
function getJsonOptions2(options2) {
    var _a18;
    const o = Object.assign({}, options2);
    (_a18 = o.ignoreUnknownFields) !== null && _a18 !== void 0 ? _a18 : o.ignoreUnknownFields = true;
    return o;
}
function createMethodSerializationLookup2(method, binaryOptions, jsonOptions, limitOptions) {
    const inputBinary = limitSerialization2(createBinarySerialization2(method.I, binaryOptions), limitOptions);
    const inputJson = limitSerialization2(createJsonSerialization2(method.I, jsonOptions), limitOptions);
    const outputBinary = limitSerialization2(createBinarySerialization2(method.O, binaryOptions), limitOptions);
    const outputJson = limitSerialization2(createJsonSerialization2(method.O, jsonOptions), limitOptions);
    return {
        getI (useBinaryFormat) {
            return useBinaryFormat ? inputBinary : inputJson;
        },
        getO (useBinaryFormat) {
            return useBinaryFormat ? outputBinary : outputJson;
        }
    };
}
function createClientMethodSerializers(method, useBinaryFormat, jsonOptions, binaryOptions) {
    const input = useBinaryFormat ? createBinarySerialization2(method.I, binaryOptions) : createJsonSerialization2(method.I, jsonOptions);
    const output = useBinaryFormat ? createBinarySerialization2(method.O, binaryOptions) : createJsonSerialization2(method.O, jsonOptions);
    return {
        parse: output.parse,
        serialize: input.serialize
    };
}
function limitSerialization2(serialization, limitOptions) {
    return {
        serialize (data) {
            const bytes = serialization.serialize(data);
            (0, limit_io_js_1.assertWriteMaxBytes)(limitOptions.writeMaxBytes, bytes.byteLength);
            return bytes;
        },
        parse (data) {
            (0, limit_io_js_1.assertReadMaxBytes)(limitOptions.readMaxBytes, data.byteLength, true);
            return serialization.parse(data);
        }
    };
}
function createBinarySerialization2(messageType, options2) {
    return {
        parse (data) {
            try {
                return messageType.fromBinary(data, options2);
            } catch (e) {
                const m2 = e instanceof Error ? e.message : String(e);
                throw new connect_error_js_1.ConnectError(`parse binary: ${m2}`, code_js_1.Code.Internal);
            }
        },
        serialize (data) {
            try {
                return data.toBinary(options2);
            } catch (e) {
                const m2 = e instanceof Error ? e.message : String(e);
                throw new connect_error_js_1.ConnectError(`serialize binary: ${m2}`, code_js_1.Code.Internal);
            }
        }
    };
}
function createJsonSerialization2(messageType, options2) {
    var _a18, _b2;
    const textEncoder2 = (_a18 = options2 === null || options2 === void 0 ? void 0 : options2.textEncoder) !== null && _a18 !== void 0 ? _a18 : new TextEncoder();
    const textDecoder3 = (_b2 = options2 === null || options2 === void 0 ? void 0 : options2.textDecoder) !== null && _b2 !== void 0 ? _b2 : new TextDecoder();
    const o = getJsonOptions2(options2);
    return {
        parse (data) {
            try {
                const json2 = textDecoder3.decode(data);
                return messageType.fromJsonString(json2, o);
            } catch (e) {
                throw connect_error_js_1.ConnectError.from(e, code_js_1.Code.InvalidArgument);
            }
        },
        serialize (data) {
            try {
                const json2 = data.toJsonString(o);
                return textEncoder2.encode(json2);
            } catch (e) {
                throw connect_error_js_1.ConnectError.from(e, code_js_1.Code.Internal);
            }
        }
    };
}

return exports2;
}
