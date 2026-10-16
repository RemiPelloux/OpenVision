require.r(exports);
require.d(exports, {
    makeBinaryFormat: ()=>makeBinaryFormat,
    writeMapEntry: ()=>writeMapEntry
});
var _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-25.js");
var _field_wrapper_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-22.js");
var _scalars_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-14.js");
var _assert_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-10.js");
var _reflect_js__WEBPACK_IMPORTED_MODULE_4__ = require("./module-21.js");
var _scalar_js__WEBPACK_IMPORTED_MODULE_5__ = require("./module-17.js");
var _is_message_js__WEBPACK_IMPORTED_MODULE_6__ = require("./module-23.js");
const unknownFieldsSymbol = Symbol("@bufbuild/protobuf/unknown-fields");
const readDefaults = {
    readUnknownFields: true,
    readerFactory: (bytes)=>new _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReader(bytes)
};
const writeDefaults = {
    writeUnknownFields: true,
    writerFactory: ()=>new _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.BinaryWriter()
};
function makeReadOptions(options) {
    return options ? {
        ...readDefaults,
        ...options
    } : readDefaults;
}
function makeWriteOptions(options) {
    return options ? {
        ...writeDefaults,
        ...options
    } : writeDefaults;
}
function makeBinaryFormat() {
    return {
        makeReadOptions,
        makeWriteOptions,
        listUnknownFields (message) {
            return message[unknownFieldsSymbol] ?? [];
        },
        discardUnknownFields (message) {
            delete message[unknownFieldsSymbol];
        },
        writeUnknownFields (message, writer) {
            const m = message;
            const c = m[unknownFieldsSymbol];
            if (c) {
                for (const f of c){
                    writer.tag(f.no, f.wireType).raw(f.data);
                }
            }
        },
        onUnknownField (message, no, wireType, data) {
            const m = message;
            if (!Array.isArray(m[unknownFieldsSymbol])) {
                m[unknownFieldsSymbol] = [];
            }
            m[unknownFieldsSymbol].push({
                no,
                wireType,
                data: new Uint8Array(data)
            });
        },
        readMessage (message, reader, lengthOrEndTagFieldNo, options, delimitedMessageEncoding) {
            const type = message.getType();
            const end = delimitedMessageEncoding ? reader.len : reader.pos + lengthOrEndTagFieldNo;
            let fieldNo, wireType;
            while(reader.pos < end){
                [fieldNo, wireType] = reader.tag();
                if (delimitedMessageEncoding === true && wireType == _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.EndGroup) {
                    break;
                }
                const field = type.fields.find(fieldNo);
                if (!field) {
                    const data = reader.skip(wireType, fieldNo);
                    if (options.readUnknownFields) {
                        this.onUnknownField(message, fieldNo, wireType, data);
                    }
                    continue;
                }
                readField(message, reader, field, wireType, options);
            }
            if (delimitedMessageEncoding && (wireType != _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.EndGroup || fieldNo !== lengthOrEndTagFieldNo)) {
                throw new Error(`invalid end group tag`);
            }
        },
        readField,
        writeMessage (message, writer, options) {
            const type = message.getType();
            for (const field of type.fields.byNumber()){
                if (!(0, _reflect_js__WEBPACK_IMPORTED_MODULE_4__.isFieldSet)(field, message)) {
                    if (field.req) {
                        throw new Error(`cannot encode field ${type.typeName}.${field.name} to binary: required field not set`);
                    }
                    continue;
                }
                const value = field.oneof ? message[field.oneof.localName].value : message[field.localName];
                writeField(field, value, writer, options);
            }
            if (options.writeUnknownFields) {
                this.writeUnknownFields(message, writer);
            }
            return writer;
        },
        writeField (field, value, writer, options) {
            if (value === void 0) {
                return void 0;
            }
            writeField(field, value, writer, options);
        }
    };
}
function readField(target, reader, field, wireType, options) {
    let { repeated, localName } = field;
    if (field.oneof) {
        target = target[field.oneof.localName];
        if (target.case != localName) {
            delete target.value;
        }
        target.case = localName;
        localName = "value";
    }
    switch(field.kind){
        case "scalar":
        case "enum":
            const scalarType = field.kind == "enum" ? _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.INT32 : field.T;
            let read = readScalar;
            if (field.kind == "scalar" && field.L > 0) {
                read = readScalarLTString;
            }
            if (repeated) {
                let arr = target[localName];
                const isPacked = wireType == _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.LengthDelimited && scalarType != _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.STRING && scalarType != _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.BYTES;
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
            const messageType = field.T;
            if (repeated) {
                target[localName].push(readMessageField(reader, new messageType(), options, field));
            } else {
                if ((0, _is_message_js__WEBPACK_IMPORTED_MODULE_6__.isMessage)(target[localName])) {
                    readMessageField(reader, target[localName], options, field);
                } else {
                    target[localName] = readMessageField(reader, new messageType(), options, field);
                    if (messageType.fieldWrapper && !field.oneof && !field.repeated) {
                        target[localName] = messageType.fieldWrapper.unwrapField(target[localName]);
                    }
                }
            }
            break;
        case "map":
            let [mapKey, mapVal] = readMapEntry(field, reader, options);
            target[localName][mapKey] = mapVal;
            break;
    }
}
function readMessageField(reader, message, options, field) {
    const format = message.getType().runtime.bin;
    const delimited = field?.delimited;
    format.readMessage(message, reader, delimited ? field.no : reader.uint32(), options, delimited);
    return message;
}
function readMapEntry(field, reader, options) {
    const length = reader.uint32(), end = reader.pos + length;
    let key, val;
    while(reader.pos < end){
        const [fieldNo] = reader.tag();
        switch(fieldNo){
            case 1:
                key = readScalar(reader, field.K);
                break;
            case 2:
                switch(field.V.kind){
                    case "scalar":
                        val = readScalar(reader, field.V.T);
                        break;
                    case "enum":
                        val = reader.int32();
                        break;
                    case "message":
                        val = readMessageField(reader, new field.V.T(), options, void 0);
                        break;
                }
                break;
        }
    }
    if (key === void 0) {
        key = (0, _scalars_js__WEBPACK_IMPORTED_MODULE_2__.scalarZeroValue)(field.K, _scalar_js__WEBPACK_IMPORTED_MODULE_5__.LongType.BIGINT);
    }
    if (typeof key != "string" && typeof key != "number") {
        key = key.toString();
    }
    if (val === void 0) {
        switch(field.V.kind){
            case "scalar":
                val = (0, _scalars_js__WEBPACK_IMPORTED_MODULE_2__.scalarZeroValue)(field.V.T, _scalar_js__WEBPACK_IMPORTED_MODULE_5__.LongType.BIGINT);
                break;
            case "enum":
                val = field.V.T.values[0].no;
                break;
            case "message":
                val = new field.V.T();
                break;
        }
    }
    return [
        key,
        val
    ];
}
function readScalarLTString(reader, type) {
    const v = readScalar(reader, type);
    return typeof v == "bigint" ? v.toString() : v;
}
function readScalar(reader, type) {
    switch(type){
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.STRING:
            return reader.string();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.BOOL:
            return reader.bool();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.DOUBLE:
            return reader.double();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.FLOAT:
            return reader.float();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.INT32:
            return reader.int32();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.INT64:
            return reader.int64();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.UINT64:
            return reader.uint64();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.FIXED64:
            return reader.fixed64();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.BYTES:
            return reader.bytes();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.FIXED32:
            return reader.fixed32();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.SFIXED32:
            return reader.sfixed32();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.SFIXED64:
            return reader.sfixed64();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.SINT64:
            return reader.sint64();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.UINT32:
            return reader.uint32();
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.SINT32:
            return reader.sint32();
    }
}
function writeField(field, value, writer, options) {
    (0, _assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(value !== void 0);
    const repeated = field.repeated;
    switch(field.kind){
        case "scalar":
        case "enum":
            let scalarType = field.kind == "enum" ? _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.INT32 : field.T;
            if (repeated) {
                (0, _assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(Array.isArray(value));
                if (field.packed) {
                    writePacked(writer, scalarType, field.no, value);
                } else {
                    for (const item of value){
                        writeScalar(writer, scalarType, field.no, item);
                    }
                }
            } else {
                writeScalar(writer, scalarType, field.no, value);
            }
            break;
        case "message":
            if (repeated) {
                (0, _assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(Array.isArray(value));
                for (const item of value){
                    writeMessageField(writer, options, field, item);
                }
            } else {
                writeMessageField(writer, options, field, value);
            }
            break;
        case "map":
            (0, _assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(typeof value == "object" && value != null);
            for (const [key, val] of Object.entries(value)){
                writeMapEntry(writer, options, field, key, val);
            }
            break;
    }
}
function writeMapEntry(writer, options, field, key, value) {
    writer.tag(field.no, _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.LengthDelimited);
    writer.fork();
    let keyValue = key;
    switch(field.K){
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.INT32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.FIXED32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.UINT32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.SFIXED32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.SINT32:
            keyValue = Number.parseInt(key);
            break;
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.BOOL:
            (0, _assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(key == "true" || key == "false");
            keyValue = key == "true";
            break;
    }
    writeScalar(writer, field.K, 1, keyValue);
    switch(field.V.kind){
        case "scalar":
            writeScalar(writer, field.V.T, 2, value);
            break;
        case "enum":
            writeScalar(writer, _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.INT32, 2, value);
            break;
        case "message":
            (0, _assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(value !== void 0);
            writer.tag(2, _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.LengthDelimited).bytes(value.toBinary(options));
            break;
    }
    writer.join();
}
function writeMessageField(writer, options, field, value) {
    const message = (0, _field_wrapper_js__WEBPACK_IMPORTED_MODULE_1__.wrapField)(field.T, value);
    if (field.delimited) writer.tag(field.no, _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.StartGroup).raw(message.toBinary(options)).tag(field.no, _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.EndGroup);
    else writer.tag(field.no, _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.LengthDelimited).bytes(message.toBinary(options));
}
function writeScalar(writer, type, fieldNo, value) {
    (0, _assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(value !== void 0);
    let [wireType, method] = scalarTypeInfo(type);
    writer.tag(fieldNo, wireType)[method](value);
}
function writePacked(writer, type, fieldNo, value) {
    if (!value.length) {
        return;
    }
    writer.tag(fieldNo, _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.LengthDelimited).fork();
    let [, method] = scalarTypeInfo(type);
    for(let i = 0; i < value.length; i++){
        writer[method](value[i]);
    }
    writer.join();
}
function scalarTypeInfo(type) {
    let wireType = _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.Varint;
    switch(type){
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.BYTES:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.STRING:
            wireType = _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.LengthDelimited;
            break;
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.DOUBLE:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.FIXED64:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.SFIXED64:
            wireType = _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.Bit64;
            break;
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.FIXED32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.SFIXED32:
        case _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType.FLOAT:
            wireType = _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.WireType.Bit32;
            break;
    }
    const method = _scalar_js__WEBPACK_IMPORTED_MODULE_5__.ScalarType[type].toLowerCase();
    return [
        wireType,
        method
    ];
}
