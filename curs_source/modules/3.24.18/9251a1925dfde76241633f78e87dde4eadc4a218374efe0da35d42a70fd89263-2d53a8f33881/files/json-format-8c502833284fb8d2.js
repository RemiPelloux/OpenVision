import { require_extension_accessor } from "../extension-accessor.js";
import { require_is_message } from "../is-message.js";
import { require_assert } from "./assert.js";
import { require_extensions } from "./extensions.js";
import { require_field_wrapper } from "./field-wrapper.js";
import { require_reflect } from "./reflect.js";
import { require_scalars } from "./scalars.js";
import { require_proto_base64 } from "../proto-base64.js";
import { require_proto_int64 } from "../proto-int64.js";
import { require_scalar } from "../scalar.js";
var __wakaru_require_json_format_cache;
export function require_json_format() {
if (__wakaru_require_json_format_cache) return __wakaru_require_json_format_cache;
var exports2 = {};
__wakaru_require_json_format_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.makeJsonFormat = void 0;
var assert_js_1 = require_assert();
var proto_int64_js_1 = require_proto_int64();
var proto_base64_js_1 = require_proto_base64();
var extensions_js_1 = require_extensions();
var extension_accessor_js_1 = require_extension_accessor();
var reflect_js_1 = require_reflect();
var field_wrapper_js_1 = require_field_wrapper();
var scalars_js_1 = require_scalars();
var scalars_js_2 = require_scalars();
var scalar_js_1 = require_scalar();
var is_message_js_1 = require_is_message();
var jsonReadDefaults2 = {
    ignoreUnknownFields: false
};
var jsonWriteDefaults2 = {
    emitDefaultValues: false,
    enumAsInteger: false,
    useProtoFieldName: false,
    prettySpaces: 0
};
function makeReadOptions3(options2) {
    return options2 ? Object.assign(Object.assign({}, jsonReadDefaults2), options2) : jsonReadDefaults2;
}
function makeWriteOptions3(options2) {
    return options2 ? Object.assign(Object.assign({}, jsonWriteDefaults2), options2) : jsonWriteDefaults2;
}
var tokenNull2 = Symbol();
var tokenIgnoredUnknownEnum2 = Symbol();
function makeJsonFormat2() {
    return {
        makeReadOptions: makeReadOptions3,
        makeWriteOptions: makeWriteOptions3,
        readMessage (type2, json2, options2, message) {
            if (json2 == null || Array.isArray(json2) || typeof json2 != "object") {
                throw new Error(`cannot decode message ${type2.typeName} from JSON: ${debugJsonValue2(json2)}`);
            }
            message = message !== null && message !== void 0 ? message : new type2();
            const oneofSeen = new Map();
            const registry2 = options2.typeRegistry;
            for (const [jsonKey, jsonValue] of Object.entries(json2)){
                const field4 = type2.fields.findJsonName(jsonKey);
                if (field4) {
                    if (field4.oneof) {
                        if (jsonValue === null && field4.kind == "scalar") {
                            continue;
                        }
                        const seen = oneofSeen.get(field4.oneof);
                        if (seen !== void 0) {
                            throw new Error(`cannot decode message ${type2.typeName} from JSON: multiple keys for oneof "${field4.oneof.name}" present: "${seen}", "${jsonKey}"`);
                        }
                        oneofSeen.set(field4.oneof, jsonKey);
                    }
                    readField3(message, jsonValue, field4, options2, type2);
                } else {
                    let found = false;
                    if ((registry2 === null || registry2 === void 0 ? void 0 : registry2.findExtension) && jsonKey.startsWith("[") && jsonKey.endsWith("]")) {
                        const ext2 = registry2.findExtension(jsonKey.substring(1, jsonKey.length - 1));
                        if (ext2 && ext2.extendee.typeName == type2.typeName) {
                            found = true;
                            const [container, get] = (0, extensions_js_1.createExtensionContainer)(ext2);
                            readField3(container, jsonValue, ext2.field, options2, ext2);
                            (0, extension_accessor_js_1.setExtension)(message, ext2, get(), options2);
                        }
                    }
                    if (!found && !options2.ignoreUnknownFields) {
                        throw new Error(`cannot decode message ${type2.typeName} from JSON: key "${jsonKey}" is unknown`);
                    }
                }
            }
            return message;
        },
        writeMessage (message, options2) {
            const type2 = message.getType();
            const json2 = {};
            let field4;
            try {
                for (field4 of type2.fields.byNumber()){
                    if (!(0, reflect_js_1.isFieldSet)(field4, message)) {
                        if (field4.req) {
                            throw `required field not set`;
                        }
                        if (!options2.emitDefaultValues) {
                            continue;
                        }
                        if (!canEmitFieldDefaultValue2(field4)) {
                            continue;
                        }
                    }
                    const value = field4.oneof ? message[field4.oneof.localName].value : message[field4.localName];
                    const jsonValue = writeField3(field4, value, options2);
                    if (jsonValue !== void 0) {
                        json2[options2.useProtoFieldName ? field4.name : field4.jsonName] = jsonValue;
                    }
                }
                const registry2 = options2.typeRegistry;
                if (registry2 === null || registry2 === void 0 ? void 0 : registry2.findExtensionFor) {
                    for (const uf of type2.runtime.bin.listUnknownFields(message)){
                        const ext2 = registry2.findExtensionFor(type2.typeName, uf.no);
                        if (ext2 && (0, extension_accessor_js_1.hasExtension)(message, ext2)) {
                            const value = (0, extension_accessor_js_1.getExtension)(message, ext2, options2);
                            const jsonValue = writeField3(ext2.field, value, options2);
                            if (jsonValue !== void 0) {
                                json2[ext2.field.jsonName] = jsonValue;
                            }
                        }
                    }
                }
            } catch (e) {
                const m2 = field4 ? `cannot encode field ${type2.typeName}.${field4.name} to JSON` : `cannot encode message ${type2.typeName} to JSON`;
                const r = e instanceof Error ? e.message : String(e);
                throw new Error(m2 + (r.length > 0 ? `: ${r}` : ""));
            }
            return json2;
        },
        readScalar (type2, json2, longType) {
            return readScalar3(type2, json2, longType !== null && longType !== void 0 ? longType : scalar_js_1.LongType.BIGINT, true);
        },
        writeScalar (type2, value, emitDefaultValues) {
            if (value === void 0) {
                return void 0;
            }
            if (emitDefaultValues || (0, scalars_js_2.isScalarZeroValue)(type2, value)) {
                return writeScalar3(type2, value);
            }
            return void 0;
        },
        debug: debugJsonValue2
    };
}
exports2.makeJsonFormat = makeJsonFormat2;
function debugJsonValue2(json2) {
    if (json2 === null) {
        return "null";
    }
    switch(typeof json2){
        case "object":
            return Array.isArray(json2) ? "array" : "object";
        case "string":
            return json2.length > 100 ? "string" : `"${json2.split('"').join('\\"')}"`;
        default:
            return String(json2);
    }
}
function readField3(target, jsonValue, field4, options2, parentType) {
    let localName = field4.localName;
    if (field4.repeated) {
        (0, assert_js_1.assert)(field4.kind != "map");
        if (jsonValue === null) {
            return;
        }
        if (!Array.isArray(jsonValue)) {
            throw new Error(`cannot decode field ${parentType.typeName}.${field4.name} from JSON: ${debugJsonValue2(jsonValue)}`);
        }
        const targetArray = target[localName];
        for (const jsonItem of jsonValue){
            if (jsonItem === null) {
                throw new Error(`cannot decode field ${parentType.typeName}.${field4.name} from JSON: ${debugJsonValue2(jsonItem)}`);
            }
            switch(field4.kind){
                case "message":
                    targetArray.push(field4.T.fromJson(jsonItem, options2));
                    break;
                case "enum":
                    const enumValue = readEnum2(field4.T, jsonItem, options2.ignoreUnknownFields, true);
                    if (enumValue !== tokenIgnoredUnknownEnum2) {
                        targetArray.push(enumValue);
                    }
                    break;
                case "scalar":
                    try {
                        targetArray.push(readScalar3(field4.T, jsonItem, field4.L, true));
                    } catch (e) {
                        let m2 = `cannot decode field ${parentType.typeName}.${field4.name} from JSON: ${debugJsonValue2(jsonItem)}`;
                        if (e instanceof Error && e.message.length > 0) {
                            m2 += `: ${e.message}`;
                        }
                        throw new Error(m2);
                    }
                    break;
            }
        }
    } else if (field4.kind == "map") {
        if (jsonValue === null) {
            return;
        }
        if (typeof jsonValue != "object" || Array.isArray(jsonValue)) {
            throw new Error(`cannot decode field ${parentType.typeName}.${field4.name} from JSON: ${debugJsonValue2(jsonValue)}`);
        }
        const targetMap = target[localName];
        for (const [jsonMapKey, jsonMapValue] of Object.entries(jsonValue)){
            if (jsonMapValue === null) {
                throw new Error(`cannot decode field ${parentType.typeName}.${field4.name} from JSON: map value null`);
            }
            let key;
            try {
                key = readMapKey2(field4.K, jsonMapKey);
            } catch (e) {
                let m2 = `cannot decode map key for field ${parentType.typeName}.${field4.name} from JSON: ${debugJsonValue2(jsonValue)}`;
                if (e instanceof Error && e.message.length > 0) {
                    m2 += `: ${e.message}`;
                }
                throw new Error(m2);
            }
            switch(field4.V.kind){
                case "message":
                    targetMap[key] = field4.V.T.fromJson(jsonMapValue, options2);
                    break;
                case "enum":
                    const enumValue = readEnum2(field4.V.T, jsonMapValue, options2.ignoreUnknownFields, true);
                    if (enumValue !== tokenIgnoredUnknownEnum2) {
                        targetMap[key] = enumValue;
                    }
                    break;
                case "scalar":
                    try {
                        targetMap[key] = readScalar3(field4.V.T, jsonMapValue, scalar_js_1.LongType.BIGINT, true);
                    } catch (e) {
                        let m2 = `cannot decode map value for field ${parentType.typeName}.${field4.name} from JSON: ${debugJsonValue2(jsonValue)}`;
                        if (e instanceof Error && e.message.length > 0) {
                            m2 += `: ${e.message}`;
                        }
                        throw new Error(m2);
                    }
                    break;
            }
        }
    } else {
        if (field4.oneof) {
            target = target[field4.oneof.localName] = {
                case: localName
            };
            localName = "value";
        }
        switch(field4.kind){
            case "message":
                const messageType = field4.T;
                if (jsonValue === null && messageType.typeName != "google.protobuf.Value") {
                    return;
                }
                let currentValue = target[localName];
                if ((0, is_message_js_1.isMessage)(currentValue)) {
                    currentValue.fromJson(jsonValue, options2);
                } else {
                    target[localName] = currentValue = messageType.fromJson(jsonValue, options2);
                    if (messageType.fieldWrapper && !field4.oneof) {
                        target[localName] = messageType.fieldWrapper.unwrapField(currentValue);
                    }
                }
                break;
            case "enum":
                const enumValue = readEnum2(field4.T, jsonValue, options2.ignoreUnknownFields, false);
                switch(enumValue){
                    case tokenNull2:
                        (0, reflect_js_1.clearField)(field4, target);
                        break;
                    case tokenIgnoredUnknownEnum2:
                        break;
                    default:
                        target[localName] = enumValue;
                        break;
                }
                break;
            case "scalar":
                try {
                    const scalarValue = readScalar3(field4.T, jsonValue, field4.L, false);
                    switch(scalarValue){
                        case tokenNull2:
                            (0, reflect_js_1.clearField)(field4, target);
                            break;
                        default:
                            target[localName] = scalarValue;
                            break;
                    }
                } catch (e) {
                    let m2 = `cannot decode field ${parentType.typeName}.${field4.name} from JSON: ${debugJsonValue2(jsonValue)}`;
                    if (e instanceof Error && e.message.length > 0) {
                        m2 += `: ${e.message}`;
                    }
                    throw new Error(m2);
                }
                break;
        }
    }
}
function readMapKey2(type2, json2) {
    if (type2 === scalar_js_1.ScalarType.BOOL) {
        switch(json2){
            case "true":
                json2 = true;
                break;
            case "false":
                json2 = false;
                break;
        }
    }
    return readScalar3(type2, json2, scalar_js_1.LongType.BIGINT, true).toString();
}
function readScalar3(type2, json2, longType, nullAsZeroValue) {
    if (json2 === null) {
        if (nullAsZeroValue) {
            return (0, scalars_js_1.scalarZeroValue)(type2, longType);
        }
        return tokenNull2;
    }
    switch(type2){
        case scalar_js_1.ScalarType.DOUBLE:
        case scalar_js_1.ScalarType.FLOAT:
            if (json2 === "NaN") return Number.NaN;
            if (json2 === "Infinity") return Number.POSITIVE_INFINITY;
            if (json2 === "-Infinity") return Number.NEGATIVE_INFINITY;
            if (json2 === "") {
                break;
            }
            if (typeof json2 == "string" && json2.trim().length !== json2.length) {
                break;
            }
            if (typeof json2 != "string" && typeof json2 != "number") {
                break;
            }
            const float2 = Number(json2);
            if (Number.isNaN(float2)) {
                break;
            }
            if (!Number.isFinite(float2)) {
                break;
            }
            if (type2 == scalar_js_1.ScalarType.FLOAT) (0, assert_js_1.assertFloat32)(float2);
            return float2;
        case scalar_js_1.ScalarType.INT32:
        case scalar_js_1.ScalarType.FIXED32:
        case scalar_js_1.ScalarType.SFIXED32:
        case scalar_js_1.ScalarType.SINT32:
        case scalar_js_1.ScalarType.UINT32:
            let int32;
            if (typeof json2 == "number") int32 = json2;
            else if (typeof json2 == "string" && json2.length > 0) {
                if (json2.trim().length === json2.length) int32 = Number(json2);
            }
            if (int32 === void 0) break;
            if (type2 == scalar_js_1.ScalarType.UINT32 || type2 == scalar_js_1.ScalarType.FIXED32) (0, assert_js_1.assertUInt32)(int32);
            else (0, assert_js_1.assertInt32)(int32);
            return int32;
        case scalar_js_1.ScalarType.INT64:
        case scalar_js_1.ScalarType.SFIXED64:
        case scalar_js_1.ScalarType.SINT64:
            if (typeof json2 != "number" && typeof json2 != "string") break;
            const long = proto_int64_js_1.protoInt64.parse(json2);
            return longType ? long.toString() : long;
        case scalar_js_1.ScalarType.FIXED64:
        case scalar_js_1.ScalarType.UINT64:
            if (typeof json2 != "number" && typeof json2 != "string") break;
            const uLong = proto_int64_js_1.protoInt64.uParse(json2);
            return longType ? uLong.toString() : uLong;
        case scalar_js_1.ScalarType.BOOL:
            if (typeof json2 !== "boolean") break;
            return json2;
        case scalar_js_1.ScalarType.STRING:
            if (typeof json2 !== "string") {
                break;
            }
            try {
                encodeURIComponent(json2);
            } catch (e) {
                throw new Error("invalid UTF8");
            }
            return json2;
        case scalar_js_1.ScalarType.BYTES:
            if (json2 === "") return new Uint8Array(0);
            if (typeof json2 !== "string") break;
            return proto_base64_js_1.protoBase64.dec(json2);
    }
    throw new Error();
}
function readEnum2(type2, json2, ignoreUnknownFields, nullAsZeroValue) {
    if (json2 === null) {
        if (type2.typeName == "google.protobuf.NullValue") {
            return 0;
        }
        return nullAsZeroValue ? type2.values[0].no : tokenNull2;
    }
    switch(typeof json2){
        case "number":
            if (Number.isInteger(json2)) {
                return json2;
            }
            break;
        case "string":
            const value = type2.findName(json2);
            if (value !== void 0) {
                return value.no;
            }
            if (ignoreUnknownFields) {
                return tokenIgnoredUnknownEnum2;
            }
            break;
    }
    throw new Error(`cannot decode enum ${type2.typeName} from JSON: ${debugJsonValue2(json2)}`);
}
function canEmitFieldDefaultValue2(field4) {
    if (field4.repeated || field4.kind == "map") {
        return true;
    }
    if (field4.oneof) {
        return false;
    }
    if (field4.kind == "message") {
        return false;
    }
    if (field4.opt || field4.req) {
        return false;
    }
    return true;
}
function writeField3(field4, value, options2) {
    if (field4.kind == "map") {
        (0, assert_js_1.assert)(typeof value == "object" && value != null);
        const jsonObj = {};
        const entries = Object.entries(value);
        switch(field4.V.kind){
            case "scalar":
                for (const [entryKey, entryValue] of entries){
                    jsonObj[entryKey.toString()] = writeScalar3(field4.V.T, entryValue);
                }
                break;
            case "message":
                for (const [entryKey, entryValue] of entries){
                    jsonObj[entryKey.toString()] = entryValue.toJson(options2);
                }
                break;
            case "enum":
                const enumType3 = field4.V.T;
                for (const [entryKey, entryValue] of entries){
                    jsonObj[entryKey.toString()] = writeEnum2(enumType3, entryValue, options2.enumAsInteger);
                }
                break;
        }
        return options2.emitDefaultValues || entries.length > 0 ? jsonObj : void 0;
    }
    if (field4.repeated) {
        (0, assert_js_1.assert)(Array.isArray(value));
        const jsonArr = [];
        switch(field4.kind){
            case "scalar":
                for(let i = 0; i < value.length; i++){
                    jsonArr.push(writeScalar3(field4.T, value[i]));
                }
                break;
            case "enum":
                for(let i = 0; i < value.length; i++){
                    jsonArr.push(writeEnum2(field4.T, value[i], options2.enumAsInteger));
                }
                break;
            case "message":
                for(let i = 0; i < value.length; i++){
                    jsonArr.push(value[i].toJson(options2));
                }
                break;
        }
        return options2.emitDefaultValues || jsonArr.length > 0 ? jsonArr : void 0;
    }
    switch(field4.kind){
        case "scalar":
            return writeScalar3(field4.T, value);
        case "enum":
            return writeEnum2(field4.T, value, options2.enumAsInteger);
        case "message":
            return (0, field_wrapper_js_1.wrapField)(field4.T, value).toJson(options2);
    }
}
function writeEnum2(type2, value, enumAsInteger) {
    var _a18;
    (0, assert_js_1.assert)(typeof value == "number");
    if (type2.typeName == "google.protobuf.NullValue") {
        return null;
    }
    if (enumAsInteger) {
        return value;
    }
    const val = type2.findNumber(value);
    return (_a18 = val === null || val === void 0 ? void 0 : val.name) !== null && _a18 !== void 0 ? _a18 : value;
}
function writeScalar3(type2, value) {
    switch(type2){
        case scalar_js_1.ScalarType.INT32:
        case scalar_js_1.ScalarType.SFIXED32:
        case scalar_js_1.ScalarType.SINT32:
        case scalar_js_1.ScalarType.FIXED32:
        case scalar_js_1.ScalarType.UINT32:
            (0, assert_js_1.assert)(typeof value == "number");
            return value;
        case scalar_js_1.ScalarType.FLOAT:
        case scalar_js_1.ScalarType.DOUBLE:
            (0, assert_js_1.assert)(typeof value == "number");
            if (Number.isNaN(value)) return "NaN";
            if (value === Number.POSITIVE_INFINITY) return "Infinity";
            if (value === Number.NEGATIVE_INFINITY) return "-Infinity";
            return value;
        case scalar_js_1.ScalarType.STRING:
            (0, assert_js_1.assert)(typeof value == "string");
            return value;
        case scalar_js_1.ScalarType.BOOL:
            (0, assert_js_1.assert)(typeof value == "boolean");
            return value;
        case scalar_js_1.ScalarType.UINT64:
        case scalar_js_1.ScalarType.FIXED64:
        case scalar_js_1.ScalarType.INT64:
        case scalar_js_1.ScalarType.SFIXED64:
        case scalar_js_1.ScalarType.SINT64:
            (0, assert_js_1.assert)(typeof value == "bigint" || typeof value == "string" || typeof value == "number");
            return value.toString();
        case scalar_js_1.ScalarType.BYTES:
            (0, assert_js_1.assert)(value instanceof Uint8Array);
            return proto_base64_js_1.protoBase64.enc(value);
    }
}

return exports2;
}
