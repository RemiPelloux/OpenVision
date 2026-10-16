import { require_binary_encoding } from "../binary-encoding.js";
import { require_is_message } from "../is-message.js";
import { require_assert } from "./assert.js";
import { require_field_wrapper } from "./field-wrapper.js";
import { require_reflect } from "./reflect.js";
import { require_scalars } from "./scalars.js";
import { require_scalar } from "../scalar.js";
var __wakaru_require_binary_format_cache;
export function require_binary_format() {
if (__wakaru_require_binary_format_cache) return __wakaru_require_binary_format_cache;
var exports2 = {};
__wakaru_require_binary_format_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.writeMapEntry = exports2.makeBinaryFormat = void 0;
var binary_encoding_js_1 = require_binary_encoding();
var field_wrapper_js_1 = require_field_wrapper();
var scalars_js_1 = require_scalars();
var assert_js_1 = require_assert();
var reflect_js_1 = require_reflect();
var scalar_js_1 = require_scalar();
var is_message_js_1 = require_is_message();
var unknownFieldsSymbol2 = Symbol("@bufbuild/protobuf/unknown-fields");
var readDefaults2 = {
    readUnknownFields: true,
    readerFactory: (bytes)=>new binary_encoding_js_1.BinaryReader(bytes)
};
var writeDefaults2 = {
    writeUnknownFields: true,
    writerFactory: ()=>new binary_encoding_js_1.BinaryWriter()
};
function makeReadOptions3(options2) {
    return options2 ? Object.assign(Object.assign({}, readDefaults2), options2) : readDefaults2;
}
function makeWriteOptions3(options2) {
    return options2 ? Object.assign(Object.assign({}, writeDefaults2), options2) : writeDefaults2;
}
function makeBinaryFormat2() {
    return {
        makeReadOptions: makeReadOptions3,
        makeWriteOptions: makeWriteOptions3,
        listUnknownFields (message) {
            var _a18;
            return (_a18 = message[unknownFieldsSymbol2]) !== null && _a18 !== void 0 ? _a18 : [];
        },
        discardUnknownFields (message) {
            delete message[unknownFieldsSymbol2];
        },
        writeUnknownFields (message, writer) {
            const m2 = message;
            const c = m2[unknownFieldsSymbol2];
            if (c) {
                for (const f2 of c){
                    writer.tag(f2.no, f2.wireType).raw(f2.data);
                }
            }
        },
        onUnknownField (message, no2, wireType, data) {
            const m2 = message;
            if (!Array.isArray(m2[unknownFieldsSymbol2])) {
                m2[unknownFieldsSymbol2] = [];
            }
            m2[unknownFieldsSymbol2].push({
                no: no2,
                wireType,
                data
            });
        },
        readMessage (message, reader, lengthOrEndTagFieldNo, options2, delimitedMessageEncoding) {
            const type2 = message.getType();
            const end = delimitedMessageEncoding ? reader.len : reader.pos + lengthOrEndTagFieldNo;
            let fieldNo, wireType;
            while(reader.pos < end){
                [fieldNo, wireType] = reader.tag();
                if (delimitedMessageEncoding === true && wireType == binary_encoding_js_1.WireType.EndGroup) {
                    break;
                }
                const field4 = type2.fields.find(fieldNo);
                if (!field4) {
                    const data = reader.skip(wireType, fieldNo);
                    if (options2.readUnknownFields) {
                        this.onUnknownField(message, fieldNo, wireType, data);
                    }
                    continue;
                }
                readField3(message, reader, field4, wireType, options2);
            }
            if (delimitedMessageEncoding && (wireType != binary_encoding_js_1.WireType.EndGroup || fieldNo !== lengthOrEndTagFieldNo)) {
                throw new Error(`invalid end group tag`);
            }
        },
        readField: readField3,
        writeMessage (message, writer, options2) {
            const type2 = message.getType();
            for (const field4 of type2.fields.byNumber()){
                if (!(0, reflect_js_1.isFieldSet)(field4, message)) {
                    if (field4.req) {
                        throw new Error(`cannot encode field ${type2.typeName}.${field4.name} to binary: required field not set`);
                    }
                    continue;
                }
                const value = field4.oneof ? message[field4.oneof.localName].value : message[field4.localName];
                writeField3(field4, value, writer, options2);
            }
            if (options2.writeUnknownFields) {
                this.writeUnknownFields(message, writer);
            }
            return writer;
        },
        writeField (field4, value, writer, options2) {
            if (value === void 0) {
                return void 0;
            }
            writeField3(field4, value, writer, options2);
        }
    };
}
exports2.makeBinaryFormat = makeBinaryFormat2;
function readField3(target, reader, field4, wireType, options2) {
    let { repeated, localName } = field4;
    if (field4.oneof) {
        target = target[field4.oneof.localName];
        if (target.case != localName) {
            delete target.value;
        }
        target.case = localName;
        localName = "value";
    }
    switch(field4.kind){
        case "scalar":
        case "enum":
            const scalarType = field4.kind == "enum" ? scalar_js_1.ScalarType.INT32 : field4.T;
            let read = readScalar3;
            if (field4.kind == "scalar" && field4.L > 0) {
                read = readScalarLTString2;
            }
            if (repeated) {
                let arr = target[localName];
                const isPacked = wireType == binary_encoding_js_1.WireType.LengthDelimited && scalarType != scalar_js_1.ScalarType.STRING && scalarType != scalar_js_1.ScalarType.BYTES;
                if (isPacked) {
                    let e = reader.uint32() + reader.pos;
                    while(reader.pos < e){
                        arr.push(read(reader, scalarType));
                    }
                } else {
                    arr.push(read(reader, scalarType));
                }
            } else {
                target[localName] = read(reader, scalarType);
            }
            break;
        case "message":
            const messageType = field4.T;
            if (repeated) {
                target[localName].push(readMessageField2(reader, new messageType(), options2, field4));
            } else {
                if ((0, is_message_js_1.isMessage)(target[localName])) {
                    readMessageField2(reader, target[localName], options2, field4);
                } else {
                    target[localName] = readMessageField2(reader, new messageType(), options2, field4);
                    if (messageType.fieldWrapper && !field4.oneof && !field4.repeated) {
                        target[localName] = messageType.fieldWrapper.unwrapField(target[localName]);
                    }
                }
            }
            break;
        case "map":
            let [mapKey, mapVal] = readMapEntry2(field4, reader, options2);
            target[localName][mapKey] = mapVal;
            break;
    }
}
function readMessageField2(reader, message, options2, field4) {
    const format2 = message.getType().runtime.bin;
    const delimited = field4 === null || field4 === void 0 ? void 0 : field4.delimited;
    format2.readMessage(message, reader, delimited ? field4.no : reader.uint32(), options2, delimited);
    return message;
}
function readMapEntry2(field4, reader, options2) {
    const length = reader.uint32(), end = reader.pos + length;
    let key, val;
    while(reader.pos < end){
        const [fieldNo] = reader.tag();
        switch(fieldNo){
            case 1:
                key = readScalar3(reader, field4.K);
                break;
            case 2:
                switch(field4.V.kind){
                    case "scalar":
                        val = readScalar3(reader, field4.V.T);
                        break;
                    case "enum":
                        val = reader.int32();
                        break;
                    case "message":
                        val = readMessageField2(reader, new field4.V.T(), options2, void 0);
                        break;
                }
                break;
        }
    }
    if (key === void 0) {
        key = (0, scalars_js_1.scalarZeroValue)(field4.K, scalar_js_1.LongType.BIGINT);
    }
    if (typeof key != "string" && typeof key != "number") {
        key = key.toString();
    }
    if (val === void 0) {
        switch(field4.V.kind){
            case "scalar":
                val = (0, scalars_js_1.scalarZeroValue)(field4.V.T, scalar_js_1.LongType.BIGINT);
                break;
            case "enum":
                val = field4.V.T.values[0].no;
                break;
            case "message":
                val = new field4.V.T();
                break;
        }
    }
    return [
        key,
        val
    ];
}
function readScalarLTString2(reader, type2) {
    const v2 = readScalar3(reader, type2);
    return typeof v2 == "bigint" ? v2.toString() : v2;
}
function readScalar3(reader, type2) {
    switch(type2){
        case scalar_js_1.ScalarType.STRING:
            return reader.string();
        case scalar_js_1.ScalarType.BOOL:
            return reader.bool();
        case scalar_js_1.ScalarType.DOUBLE:
            return reader.double();
        case scalar_js_1.ScalarType.FLOAT:
            return reader.float();
        case scalar_js_1.ScalarType.INT32:
            return reader.int32();
        case scalar_js_1.ScalarType.INT64:
            return reader.int64();
        case scalar_js_1.ScalarType.UINT64:
            return reader.uint64();
        case scalar_js_1.ScalarType.FIXED64:
            return reader.fixed64();
        case scalar_js_1.ScalarType.BYTES:
            return reader.bytes();
        case scalar_js_1.ScalarType.FIXED32:
            return reader.fixed32();
        case scalar_js_1.ScalarType.SFIXED32:
            return reader.sfixed32();
        case scalar_js_1.ScalarType.SFIXED64:
            return reader.sfixed64();
        case scalar_js_1.ScalarType.SINT64:
            return reader.sint64();
        case scalar_js_1.ScalarType.UINT32:
            return reader.uint32();
        case scalar_js_1.ScalarType.SINT32:
            return reader.sint32();
    }
}
function writeField3(field4, value, writer, options2) {
    (0, assert_js_1.assert)(value !== void 0);
    const repeated = field4.repeated;
    switch(field4.kind){
        case "scalar":
        case "enum":
            let scalarType = field4.kind == "enum" ? scalar_js_1.ScalarType.INT32 : field4.T;
            if (repeated) {
                (0, assert_js_1.assert)(Array.isArray(value));
                if (field4.packed) {
                    writePacked2(writer, scalarType, field4.no, value);
                } else {
                    for (const item of value){
                        writeScalar3(writer, scalarType, field4.no, item);
                    }
                }
            } else {
                writeScalar3(writer, scalarType, field4.no, value);
            }
            break;
        case "message":
            if (repeated) {
                (0, assert_js_1.assert)(Array.isArray(value));
                for (const item of value){
                    writeMessageField2(writer, options2, field4, item);
                }
            } else {
                writeMessageField2(writer, options2, field4, value);
            }
            break;
        case "map":
            (0, assert_js_1.assert)(typeof value == "object" && value != null);
            for (const [key, val] of Object.entries(value)){
                writeMapEntry2(writer, options2, field4, key, val);
            }
            break;
    }
}
function writeMapEntry2(writer, options2, field4, key, value) {
    writer.tag(field4.no, binary_encoding_js_1.WireType.LengthDelimited);
    writer.fork();
    let keyValue = key;
    switch(field4.K){
        case scalar_js_1.ScalarType.INT32:
        case scalar_js_1.ScalarType.FIXED32:
        case scalar_js_1.ScalarType.UINT32:
        case scalar_js_1.ScalarType.SFIXED32:
        case scalar_js_1.ScalarType.SINT32:
            keyValue = Number.parseInt(key);
            break;
        case scalar_js_1.ScalarType.BOOL:
            (0, assert_js_1.assert)(key == "true" || key == "false");
            keyValue = key == "true";
            break;
    }
    writeScalar3(writer, field4.K, 1, keyValue);
    switch(field4.V.kind){
        case "scalar":
            writeScalar3(writer, field4.V.T, 2, value);
            break;
        case "enum":
            writeScalar3(writer, scalar_js_1.ScalarType.INT32, 2, value);
            break;
        case "message":
            (0, assert_js_1.assert)(value !== void 0);
            writer.tag(2, binary_encoding_js_1.WireType.LengthDelimited).bytes(value.toBinary(options2));
            break;
    }
    writer.join();
}
exports2.writeMapEntry = writeMapEntry2;
function writeMessageField2(writer, options2, field4, value) {
    const message = (0, field_wrapper_js_1.wrapField)(field4.T, value);
    if (field4.delimited) writer.tag(field4.no, binary_encoding_js_1.WireType.StartGroup).raw(message.toBinary(options2)).tag(field4.no, binary_encoding_js_1.WireType.EndGroup);
    else writer.tag(field4.no, binary_encoding_js_1.WireType.LengthDelimited).bytes(message.toBinary(options2));
}
function writeScalar3(writer, type2, fieldNo, value) {
    (0, assert_js_1.assert)(value !== void 0);
    let [wireType, method] = scalarTypeInfo2(type2);
    writer.tag(fieldNo, wireType)[method](value);
}
function writePacked2(writer, type2, fieldNo, value) {
    if (!value.length) {
        return;
    }
    writer.tag(fieldNo, binary_encoding_js_1.WireType.LengthDelimited).fork();
    let [, method] = scalarTypeInfo2(type2);
    for(let i = 0; i < value.length; i++){
        writer[method](value[i]);
    }
    writer.join();
}
function scalarTypeInfo2(type2) {
    let wireType = binary_encoding_js_1.WireType.Varint;
    switch(type2){
        case scalar_js_1.ScalarType.BYTES:
        case scalar_js_1.ScalarType.STRING:
            wireType = binary_encoding_js_1.WireType.LengthDelimited;
            break;
        case scalar_js_1.ScalarType.DOUBLE:
        case scalar_js_1.ScalarType.FIXED64:
        case scalar_js_1.ScalarType.SFIXED64:
            wireType = binary_encoding_js_1.WireType.Bit64;
            break;
        case scalar_js_1.ScalarType.FIXED32:
        case scalar_js_1.ScalarType.SFIXED32:
        case scalar_js_1.ScalarType.FLOAT:
            wireType = binary_encoding_js_1.WireType.Bit32;
            break;
    }
    const method = scalar_js_1.ScalarType[type2].toLowerCase();
    return [
        wireType,
        method
    ];
}

return exports2;
}
