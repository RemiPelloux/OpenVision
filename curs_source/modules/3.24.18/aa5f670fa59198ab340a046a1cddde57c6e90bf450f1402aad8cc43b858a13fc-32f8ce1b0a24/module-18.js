require.r(exports);
require.d(exports, {
    makeJsonFormat: ()=>makeJsonFormat
});
var _assert_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-10.js");
var _proto_int64_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-15.js");
var _proto_base64_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-19.js");
var _extensions_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-13.js");
var _extension_accessor_js__WEBPACK_IMPORTED_MODULE_4__ = require("./module-20.js");
var _reflect_js__WEBPACK_IMPORTED_MODULE_5__ = require("./module-21.js");
var _field_wrapper_js__WEBPACK_IMPORTED_MODULE_6__ = require("./module-22.js");
var _scalars_js__WEBPACK_IMPORTED_MODULE_7__ = require("./module-14.js");
var _scalar_js__WEBPACK_IMPORTED_MODULE_8__ = require("./module-17.js");
var _is_message_js__WEBPACK_IMPORTED_MODULE_9__ = require("./module-23.js");
const jsonReadDefaults = {
    ignoreUnknownFields: false
};
const jsonWriteDefaults = {
    emitDefaultValues: false,
    enumAsInteger: false,
    useProtoFieldName: false,
    prettySpaces: 0
};
function makeReadOptions(options) {
    return options ? {
        ...jsonReadDefaults,
        ...options
    } : jsonReadDefaults;
}
function makeWriteOptions(options) {
    return options ? {
        ...jsonWriteDefaults,
        ...options
    } : jsonWriteDefaults;
}
const tokenNull = Symbol();
const tokenIgnoredUnknownEnum = Symbol();
function makeJsonFormat() {
    return {
        makeReadOptions,
        makeWriteOptions,
        readMessage (type, json, options, message) {
            if (json == null || Array.isArray(json) || typeof json != "object") {
                throw new Error(`cannot decode message ${type.typeName} from JSON: ${debugJsonValue(json)}`);
            }
            message = message ?? new type();
            const oneofSeen = new Map();
            const registry = options.typeRegistry;
            for (const [jsonKey, jsonValue] of Object.entries(json)){
                const field = type.fields.findJsonName(jsonKey);
                if (field) {
                    if (field.oneof) {
                        if (jsonValue === null && field.kind == "scalar") {
                            continue;
                        }
                        const seen = oneofSeen.get(field.oneof);
                        if (seen !== void 0) {
                            throw new Error(`cannot decode message ${type.typeName} from JSON: multiple keys for oneof "${field.oneof.name}" present: "${seen}", "${jsonKey}"`);
                        }
                        oneofSeen.set(field.oneof, jsonKey);
                    }
                    readField(message, jsonValue, field, options, type);
                } else {
                    let found = false;
                    if (registry?.findExtension && jsonKey.startsWith("[") && jsonKey.endsWith("]")) {
                        const ext = registry.findExtension(jsonKey.substring(1, jsonKey.length - 1));
                        if (ext && ext.extendee.typeName == type.typeName) {
                            found = true;
                            const [container, get] = (0, _extensions_js__WEBPACK_IMPORTED_MODULE_3__.createExtensionContainer)(ext);
                            readField(container, jsonValue, ext.field, options, ext);
                            (0, _extension_accessor_js__WEBPACK_IMPORTED_MODULE_4__.setExtension)(message, ext, get(), options);
                        }
                    }
                    if (!found && !options.ignoreUnknownFields) {
                        throw new Error(`cannot decode message ${type.typeName} from JSON: key "${jsonKey}" is unknown`);
                    }
                }
            }
            return message;
        },
        writeMessage (message, options) {
            const type = message.getType();
            const json = {};
            let field;
            try {
                for (field of type.fields.byNumber()){
                    if (!(0, _reflect_js__WEBPACK_IMPORTED_MODULE_5__.isFieldSet)(field, message)) {
                        if (field.req) {
                            throw `required field not set`;
                        }
                        if (!options.emitDefaultValues) {
                            continue;
                        }
                        if (!canEmitFieldDefaultValue(field)) {
                            continue;
                        }
                    }
                    const value = field.oneof ? message[field.oneof.localName].value : message[field.localName];
                    const jsonValue = writeField(field, value, options);
                    if (jsonValue !== void 0) {
                        json[options.useProtoFieldName ? field.name : field.jsonName] = jsonValue;
                    }
                }
                const registry = options.typeRegistry;
                if (registry?.findExtensionFor) {
                    for (const uf of type.runtime.bin.listUnknownFields(message)){
                        const ext = registry.findExtensionFor(type.typeName, uf.no);
                        if (ext && (0, _extension_accessor_js__WEBPACK_IMPORTED_MODULE_4__.hasExtension)(message, ext)) {
                            const value = (0, _extension_accessor_js__WEBPACK_IMPORTED_MODULE_4__.getExtension)(message, ext, options);
                            const jsonValue = writeField(ext.field, value, options);
                            if (jsonValue !== void 0) {
                                json[ext.field.jsonName] = jsonValue;
                            }
                        }
                    }
                }
            } catch (e) {
                const m = field ? `cannot encode field ${type.typeName}.${field.name} to JSON` : `cannot encode message ${type.typeName} to JSON`;
                const r = e instanceof Error ? e.message : String(e);
                throw new Error(m + (r.length > 0 ? `: ${r}` : ""));
            }
            return json;
        },
        readScalar (type, json, longType) {
            return readScalar(type, json, longType ?? _scalar_js__WEBPACK_IMPORTED_MODULE_8__.LongType.BIGINT, true);
        },
        writeScalar (type, value, emitDefaultValues) {
            if (value === void 0) {
                return void 0;
            }
            if (emitDefaultValues || (0, _scalars_js__WEBPACK_IMPORTED_MODULE_7__.isScalarZeroValue)(type, value)) {
                return writeScalar(type, value);
            }
            return void 0;
        },
        debug: debugJsonValue
    };
}
function debugJsonValue(json) {
    if (json === null) {
        return "null";
    }
    switch(typeof json){
        case "object":
            return Array.isArray(json) ? "array" : "object";
        case "string":
            return json.length > 100 ? "string" : `"${json.split('"').join('\\"')}"`;
        default:
            return String(json);
    }
}
function readField(target, jsonValue, field, options, parentType) {
    let localName = field.localName;
    if (field.repeated) {
        (0, _assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(field.kind != "map");
        if (jsonValue === null) {
            return;
        }
        if (!Array.isArray(jsonValue)) {
            throw new Error(`cannot decode field ${parentType.typeName}.${field.name} from JSON: ${debugJsonValue(jsonValue)}`);
        }
        const targetArray = target[localName];
        for (const jsonItem of jsonValue){
            if (jsonItem === null) {
                throw new Error(`cannot decode field ${parentType.typeName}.${field.name} from JSON: ${debugJsonValue(jsonItem)}`);
            }
            switch(field.kind){
                case "message":
                    targetArray.push(field.T.fromJson(jsonItem, options));
                    break;
                case "enum":
                    const enumValue = readEnum(field.T, jsonItem, options.ignoreUnknownFields, true);
                    if (enumValue !== tokenIgnoredUnknownEnum) {
                        targetArray.push(enumValue);
                    }
                    break;
                case "scalar":
                    try {
                        targetArray.push(readScalar(field.T, jsonItem, field.L, true));
                    } catch (e) {
                        let m = `cannot decode field ${parentType.typeName}.${field.name} from JSON: ${debugJsonValue(jsonItem)}`;
                        if (e instanceof Error && e.message.length > 0) {
                            m += `: ${e.message}`;
                        }
                        throw new Error(m);
                    }
                    break;
            }
        }
    } else if (field.kind == "map") {
        if (jsonValue === null) {
            return;
        }
        if (typeof jsonValue != "object" || Array.isArray(jsonValue)) {
            throw new Error(`cannot decode field ${parentType.typeName}.${field.name} from JSON: ${debugJsonValue(jsonValue)}`);
        }
        const targetMap = target[localName];
        for (const [jsonMapKey, jsonMapValue] of Object.entries(jsonValue)){
            if (jsonMapValue === null) {
                throw new Error(`cannot decode field ${parentType.typeName}.${field.name} from JSON: map value null`);
            }
            let key;
            try {
                key = readMapKey(field.K, jsonMapKey);
            } catch (e) {
                let m = `cannot decode map key for field ${parentType.typeName}.${field.name} from JSON: ${debugJsonValue(jsonValue)}`;
                if (e instanceof Error && e.message.length > 0) {
                    m += `: ${e.message}`;
                }
                throw new Error(m);
            }
            switch(field.V.kind){
                case "message":
                    targetMap[key] = field.V.T.fromJson(jsonMapValue, options);
                    break;
                case "enum":
                    const enumValue = readEnum(field.V.T, jsonMapValue, options.ignoreUnknownFields, true);
                    if (enumValue !== tokenIgnoredUnknownEnum) {
                        targetMap[key] = enumValue;
                    }
                    break;
                case "scalar":
                    try {
                        targetMap[key] = readScalar(field.V.T, jsonMapValue, _scalar_js__WEBPACK_IMPORTED_MODULE_8__.LongType.BIGINT, true);
                    } catch (e) {
                        let m = `cannot decode map value for field ${parentType.typeName}.${field.name} from JSON: ${debugJsonValue(jsonValue)}`;
                        if (e instanceof Error && e.message.length > 0) {
                            m += `: ${e.message}`;
                        }
                        throw new Error(m);
                    }
                    break;
            }
        }
    } else {
        if (field.oneof) {
            target = target[field.oneof.localName] = {
                case: localName
            };
            localName = "value";
        }
        switch(field.kind){
            case "message":
                const messageType = field.T;
                if (jsonValue === null && messageType.typeName != "google.protobuf.Value") {
                    return;
                }
                let currentValue = target[localName];
                if ((0, _is_message_js__WEBPACK_IMPORTED_MODULE_9__.isMessage)(currentValue)) {
                    currentValue.fromJson(jsonValue, options);
                } else {
                    target[localName] = currentValue = messageType.fromJson(jsonValue, options);
                    if (messageType.fieldWrapper && !field.oneof) {
                        target[localName] = messageType.fieldWrapper.unwrapField(currentValue);
                    }
                }
                break;
            case "enum":
                const enumValue = readEnum(field.T, jsonValue, options.ignoreUnknownFields, false);
                switch(enumValue){
                    case tokenNull:
                        (0, _reflect_js__WEBPACK_IMPORTED_MODULE_5__.clearField)(field, target);
                        break;
                    case tokenIgnoredUnknownEnum:
                        break;
                    default:
                        target[localName] = enumValue;
                        break;
                }
                break;
            case "scalar":
                try {
                    const scalarValue = readScalar(field.T, jsonValue, field.L, false);
                    switch(scalarValue){
                        case tokenNull:
                            (0, _reflect_js__WEBPACK_IMPORTED_MODULE_5__.clearField)(field, target);
                            break;
                        default:
                            target[localName] = scalarValue;
                            break;
                    }
                } catch (e) {
                    let m = `cannot decode field ${parentType.typeName}.${field.name} from JSON: ${debugJsonValue(jsonValue)}`;
                    if (e instanceof Error && e.message.length > 0) {
                        m += `: ${e.message}`;
                    }
                    throw new Error(m);
                }
                break;
        }
    }
}
function readMapKey(type, json) {
    if (type === _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.BOOL) {
        switch(json){
            case "true":
                json = true;
                break;
            case "false":
                json = false;
                break;
        }
    }
    return readScalar(type, json, _scalar_js__WEBPACK_IMPORTED_MODULE_8__.LongType.BIGINT, true).toString();
}
function readScalar(type, json, longType, nullAsZeroValue) {
    if (json === null) {
        if (nullAsZeroValue) {
            return (0, _scalars_js__WEBPACK_IMPORTED_MODULE_7__.scalarZeroValue)(type, longType);
        }
        return tokenNull;
    }
    switch(type){
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.DOUBLE:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.FLOAT:
            if (json === "NaN") return Number.NaN;
            if (json === "Infinity") return Number.POSITIVE_INFINITY;
            if (json === "-Infinity") return Number.NEGATIVE_INFINITY;
            if (json === "") {
                break;
            }
            if (typeof json == "string" && json.trim().length !== json.length) {
                break;
            }
            if (typeof json != "string" && typeof json != "number") {
                break;
            }
            const float = Number(json);
            if (Number.isNaN(float)) {
                break;
            }
            if (!Number.isFinite(float)) {
                break;
            }
            if (type == _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.FLOAT) (0, _assert_js__WEBPACK_IMPORTED_MODULE_0__.assertFloat32)(float);
            return float;
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.INT32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.FIXED32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.SFIXED32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.SINT32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.UINT32:
            let int32;
            if (typeof json == "number") int32 = json;
            else if (typeof json == "string" && json.length > 0) {
                if (json.trim().length === json.length) int32 = Number(json);
            }
            if (int32 === void 0) break;
            if (type == _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.UINT32 || type == _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.FIXED32) (0, _assert_js__WEBPACK_IMPORTED_MODULE_0__.assertUInt32)(int32);
            else (0, _assert_js__WEBPACK_IMPORTED_MODULE_0__.assertInt32)(int32);
            return int32;
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.INT64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.SFIXED64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.SINT64:
            if (typeof json != "number" && typeof json != "string") break;
            const long = _proto_int64_js__WEBPACK_IMPORTED_MODULE_1__.protoInt64.parse(json);
            return longType ? long.toString() : long;
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.FIXED64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.UINT64:
            if (typeof json != "number" && typeof json != "string") break;
            const uLong = _proto_int64_js__WEBPACK_IMPORTED_MODULE_1__.protoInt64.uParse(json);
            return longType ? uLong.toString() : uLong;
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.BOOL:
            if (typeof json !== "boolean") break;
            return json;
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.STRING:
            if (typeof json !== "string") {
                break;
            }
            try {
                encodeURIComponent(json);
            } catch (e) {
                throw new Error("invalid UTF8");
            }
            return json;
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.BYTES:
            if (json === "") return new Uint8Array(0);
            if (typeof json !== "string") break;
            return _proto_base64_js__WEBPACK_IMPORTED_MODULE_2__.protoBase64.dec(json);
    }
    throw new Error();
}
function readEnum(type, json, ignoreUnknownFields, nullAsZeroValue) {
    if (json === null) {
        if (type.typeName == "google.protobuf.NullValue") {
            return 0;
        }
        return nullAsZeroValue ? type.values[0].no : tokenNull;
    }
    switch(typeof json){
        case "number":
            if (Number.isInteger(json)) {
                return json;
            }
            break;
        case "string":
            const value = type.findName(json);
            if (value !== void 0) {
                return value.no;
            }
            if (ignoreUnknownFields) {
                return tokenIgnoredUnknownEnum;
            }
            break;
    }
    throw new Error(`cannot decode enum ${type.typeName} from JSON: ${debugJsonValue(json)}`);
}
function canEmitFieldDefaultValue(field) {
    if (field.repeated || field.kind == "map") {
        return true;
    }
    if (field.oneof) {
        return false;
    }
    if (field.kind == "message") {
        return false;
    }
    if (field.opt || field.req) {
        return false;
    }
    return true;
}
function writeField(field, value, options) {
    if (field.kind == "map") {
        (0, _assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(typeof value == "object" && value != null);
        const jsonObj = {};
        const entries = Object.entries(value);
        switch(field.V.kind){
            case "scalar":
                for (const [entryKey, entryValue] of entries){
                    jsonObj[entryKey.toString()] = writeScalar(field.V.T, entryValue);
                }
                break;
            case "message":
                for (const [entryKey, entryValue] of entries){
                    jsonObj[entryKey.toString()] = entryValue.toJson(options);
                }
                break;
            case "enum":
                const enumType = field.V.T;
                for (const [entryKey, entryValue] of entries){
                    jsonObj[entryKey.toString()] = writeEnum(enumType, entryValue, options.enumAsInteger);
                }
                break;
        }
        return options.emitDefaultValues || entries.length > 0 ? jsonObj : void 0;
    }
    if (field.repeated) {
        (0, _assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(Array.isArray(value));
        const jsonArr = [];
        switch(field.kind){
            case "scalar":
                for(let i = 0; i < value.length; i++){
                    jsonArr.push(writeScalar(field.T, value[i]));
                }
                break;
            case "enum":
                for(let i = 0; i < value.length; i++){
                    jsonArr.push(writeEnum(field.T, value[i], options.enumAsInteger));
                }
                break;
            case "message":
                for(let i = 0; i < value.length; i++){
                    jsonArr.push(value[i].toJson(options));
                }
                break;
        }
        return options.emitDefaultValues || jsonArr.length > 0 ? jsonArr : void 0;
    }
    switch(field.kind){
        case "scalar":
            return writeScalar(field.T, value);
        case "enum":
            return writeEnum(field.T, value, options.enumAsInteger);
        case "message":
            return (0, _field_wrapper_js__WEBPACK_IMPORTED_MODULE_6__.wrapField)(field.T, value).toJson(options);
    }
}
function writeEnum(type, value, enumAsInteger) {
    (0, _assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(typeof value == "number");
    if (type.typeName == "google.protobuf.NullValue") {
        return null;
    }
    if (enumAsInteger) {
        return value;
    }
    const val = type.findNumber(value);
    return val?.name ?? value;
}
function writeScalar(type, value) {
    switch(type){
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.INT32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.SFIXED32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.SINT32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.FIXED32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.UINT32:
            (0, _assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(typeof value == "number");
            return value;
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.FLOAT:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.DOUBLE:
            (0, _assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(typeof value == "number");
            if (Number.isNaN(value)) return "NaN";
            if (value === Number.POSITIVE_INFINITY) return "Infinity";
            if (value === Number.NEGATIVE_INFINITY) return "-Infinity";
            return value;
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.STRING:
            (0, _assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(typeof value == "string");
            return value;
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.BOOL:
            (0, _assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(typeof value == "boolean");
            return value;
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.UINT64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.FIXED64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.INT64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.SFIXED64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.SINT64:
            (0, _assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(typeof value == "bigint" || typeof value == "string" || typeof value == "number");
            return value.toString();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_8__.ScalarType.BYTES:
            (0, _assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(value instanceof Uint8Array);
            return _proto_base64_js__WEBPACK_IMPORTED_MODULE_2__.protoBase64.enc(value);
    }
}
