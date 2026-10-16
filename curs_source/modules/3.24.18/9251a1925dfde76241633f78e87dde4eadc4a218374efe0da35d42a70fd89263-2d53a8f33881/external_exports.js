import { WireType } from "./node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/binary-encoding.js";
import { TWO_PWR_32_DBL, decimalFrom1e7WithLeadingZeros } from "./node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/varint.js";
import { Message } from "./node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/message.js";
import { FLOAT32_MAX, FLOAT32_MIN, INT32_MAX, INT32_MIN, UINT32_MAX } from "./node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/private/assert.js";
import { readDefaults, unknownFieldsSymbol, writeDefaults } from "./node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/private/binary-format.js";
import { enumTypeSymbol, pendingEnumType } from "./node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/private/enum.js";
import { InternalOneofInfo } from "./node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/private/field.js";
import { jsonReadDefaults, jsonWriteDefaults, tokenIgnoredUnknownEnum, tokenNull } from "./node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/private/json-format.js";
import { fieldJsonName, safeMessageProperty, safeObjectProperty } from "./node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/private/names.js";
import { protoBase64 } from "./node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-base64.js";
import { protoInt64 } from "./node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js";
import { LongType, ScalarType } from "./node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/scalar.js";
import { ZodError, ZodIssueCode, quotelessJson } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js";
import { DIRTY, EMPTY_PATH, INVALID, OK, ParseStatus, isAborted, isAsync, isDirty, isValid, makeIssue } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/parseUtil.js";
import { ZodParsedType, getParsedType, objectUtil, util } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js";
import { en_default } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js";
import { BRAND, NEVER, ZodAny, ZodArray, ZodBigInt, ZodBoolean, ZodBranded, ZodCatch, ZodDate, ZodDefault, ZodDiscriminatedUnion, ZodEffects, ZodEnum, ZodFirstPartyTypeKind, ZodFunction, ZodIntersection, ZodLazy, ZodLiteral, ZodMap, ZodNaN, ZodNativeEnum, ZodNever, ZodNull, ZodNullable, ZodNumber, ZodObject, ZodOptional, ZodPipeline, ZodPromise, ZodReadonly, ZodRecord, ZodSet, ZodString, ZodSymbol, ZodTuple, ZodType, ZodUndefined, ZodUnion, ZodUnknown, ZodVoid, anyType, arrayType, bigIntType, booleanType, coerce, dateType, discriminatedUnionType, effectsType, enumType, functionType, instanceOfType, intersectionType, late, lazyType, literalType, mapType, nanType, nativeEnumType, neverType, nullType, nullableType, numberType, objectType, oboolean, onumber, optionalType, ostring, pipelineType, preprocessType, promiseType, recordType, setType, strictObjectType, stringType, symbolType, tupleType, undefinedType, unionType, unknownType, voidType } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js";
export function setErrorMap(map4) {
    overrideErrorMap = map4;
}
export function assert(condition, msg) {
    if (!condition) {
        throw new Error(msg);
    }
}
export function assertInt32(arg) {
    if (typeof arg !== "number") throw new Error("invalid int 32: " + typeof arg);
    if (!Number.isInteger(arg) || arg > INT32_MAX || arg < INT32_MIN) throw new Error("invalid int 32: " + arg);
}
export function assertUInt32(arg) {
    if (typeof arg !== "number") throw new Error("invalid uint 32: " + typeof arg);
    if (!Number.isInteger(arg) || arg > UINT32_MAX || arg < 0) throw new Error("invalid uint 32: " + arg);
}
export function assertFloat32(arg) {
    if (typeof arg !== "number") throw new Error("invalid float 32: " + typeof arg);
    if (!Number.isFinite(arg)) return;
    if (arg > FLOAT32_MAX || arg < FLOAT32_MIN) throw new Error("invalid float 32: " + arg);
}
function enumTypeInfo(enumObject) {
    const attached = enumObject[enumTypeSymbol];
    if (attached) {
        return attached;
    }
    const pending = pendingEnumType.get(enumObject);
    if (!pending) {
        return void 0;
    }
    const built = makeEnumType(pending.typeName, pending.values.map((v2)=>({
            no: v2.no,
            name: v2.name,
            localName: enumObject[v2.no]
        })), pending.opt);
    enumObject[enumTypeSymbol] = built;
    pendingEnumType.delete(enumObject);
    return built;
}
function getEnumType(enumObject) {
    const t = enumTypeInfo(enumObject);
    assert(t, "missing enum type on enum object");
    return t;
}
function setEnumType(enumObject, typeName, values, opt) {
    pendingEnumType.set(enumObject, {
        typeName,
        values,
        opt
    });
    if (enumObject[enumTypeSymbol] !== void 0) {
        delete enumObject[enumTypeSymbol];
    }
}
function makeEnumType(typeName, values, _opt) {
    const names3 = Object.create(null);
    const numbers = Object.create(null);
    const normalValues = [];
    for (const value of values){
        const n = normalizeEnumValue(value);
        normalValues.push(n);
        names3[value.name] = n;
        numbers[value.no] = n;
    }
    return {
        typeName,
        values: normalValues,
        findName (name17) {
            return names3[name17];
        },
        findNumber (no2) {
            return numbers[no2];
        }
    };
}
function makeEnum(typeName, values, opt) {
    const enumObject = {};
    for (const value of values){
        const n = normalizeEnumValue(value);
        enumObject[n.localName] = n.no;
        enumObject[n.no] = n.localName;
    }
    setEnumType(enumObject, typeName, values, opt);
    return enumObject;
}
function normalizeEnumValue(value) {
    if ("localName" in value) {
        return value;
    }
    return Object.assign(Object.assign({}, value), {
        localName: value.name
    });
}
function makeMessageType(runtime, typeName, fields, opt) {
    var _a18;
    const localName = (_a18 = opt === null || opt === void 0 ? void 0 : opt.localName) !== null && _a18 !== void 0 ? _a18 : typeName.substring(typeName.lastIndexOf(".") + 1);
    const type2 = {
        [localName]: function(data) {
            runtime.util.initFields(this);
            runtime.util.initPartial(data, this);
        }
    }[localName];
    Object.setPrototypeOf(type2.prototype, new Message());
    Object.assign(type2, {
        runtime,
        typeName,
        fields: runtime.util.newFieldList(fields),
        fromBinary (bytes, options2) {
            return new type2().fromBinary(bytes, options2);
        },
        fromJson (jsonValue, options2) {
            return new type2().fromJson(jsonValue, options2);
        },
        fromJsonString (jsonString, options2) {
            return new type2().fromJsonString(jsonString, options2);
        },
        equals (a, b2) {
            return runtime.util.equals(type2, a, b2);
        }
    });
    return type2;
}
export function varint64read() {
    let lowBits = 0;
    let highBits = 0;
    for(let shift = 0; shift < 28; shift += 7){
        let b2 = this.buf[this.pos++];
        lowBits |= (b2 & 127) << shift;
        if ((b2 & 128) == 0) {
            this.assertBounds();
            return [
                lowBits,
                highBits
            ];
        }
    }
    let middleByte = this.buf[this.pos++];
    lowBits |= (middleByte & 15) << 28;
    highBits = (middleByte & 112) >> 4;
    if ((middleByte & 128) == 0) {
        this.assertBounds();
        return [
            lowBits,
            highBits
        ];
    }
    for(let shift = 3; shift <= 31; shift += 7){
        let b2 = this.buf[this.pos++];
        highBits |= (b2 & 127) << shift;
        if ((b2 & 128) == 0) {
            this.assertBounds();
            return [
                lowBits,
                highBits
            ];
        }
    }
    throw new Error("invalid varint");
}
export function varint64write(lo2, hi2, bytes) {
    for(let i = 0; i < 28; i = i + 7){
        const shift = lo2 >>> i;
        const hasNext = !(shift >>> 7 == 0 && hi2 == 0);
        const byte = (hasNext ? shift | 128 : shift) & 255;
        bytes.push(byte);
        if (!hasNext) {
            return;
        }
    }
    const splitBits = lo2 >>> 28 & 15 | (hi2 & 7) << 4;
    const hasMoreBits = !(hi2 >> 3 == 0);
    bytes.push((hasMoreBits ? splitBits | 128 : splitBits) & 255);
    if (!hasMoreBits) {
        return;
    }
    for(let i = 3; i < 31; i = i + 7){
        const shift = hi2 >>> i;
        const hasNext = !(shift >>> 7 == 0);
        const byte = (hasNext ? shift | 128 : shift) & 255;
        bytes.push(byte);
        if (!hasNext) {
            return;
        }
    }
    bytes.push(hi2 >>> 31 & 1);
}
function int64FromString(dec) {
    const minus = dec[0] === "-";
    if (minus) {
        dec = dec.slice(1);
    }
    const base = 1e6;
    let lowBits = 0;
    let highBits = 0;
    function add1e6digit(begin, end) {
        const digit1e6 = Number(dec.slice(begin, end));
        highBits *= base;
        lowBits = lowBits * base + digit1e6;
        if (lowBits >= TWO_PWR_32_DBL) {
            highBits = highBits + (lowBits / TWO_PWR_32_DBL | 0);
            lowBits = lowBits % TWO_PWR_32_DBL;
        }
    }
    add1e6digit(-24, -18);
    add1e6digit(-18, -12);
    add1e6digit(-12, -6);
    add1e6digit(-6);
    return minus ? negate(lowBits, highBits) : newBits(lowBits, highBits);
}
function int64ToString(lo2, hi2) {
    let bits = newBits(lo2, hi2);
    const negative = bits.hi & 2147483648;
    if (negative) {
        bits = negate(bits.lo, bits.hi);
    }
    const result = uInt64ToString(bits.lo, bits.hi);
    return negative ? "-" + result : result;
}
function uInt64ToString(lo2, hi2) {
    ({ lo: lo2, hi: hi2 } = toUnsigned(lo2, hi2));
    if (hi2 <= 2097151) {
        return String(TWO_PWR_32_DBL * hi2 + lo2);
    }
    const low = lo2 & 16777215;
    const mid = (lo2 >>> 24 | hi2 << 8) & 16777215;
    const high = hi2 >> 16 & 65535;
    let digitA = low + mid * 6777216 + high * 6710656;
    let digitB = mid + high * 8147497;
    let digitC = high * 2;
    const base = 1e7;
    if (digitA >= base) {
        digitB += Math.floor(digitA / base);
        digitA %= base;
    }
    if (digitB >= base) {
        digitC += Math.floor(digitB / base);
        digitB %= base;
    }
    return digitC.toString() + decimalFrom1e7WithLeadingZeros(digitB) + decimalFrom1e7WithLeadingZeros(digitA);
}
function toUnsigned(lo2, hi2) {
    return {
        lo: lo2 >>> 0,
        hi: hi2 >>> 0
    };
}
function newBits(lo2, hi2) {
    return {
        lo: lo2 | 0,
        hi: hi2 | 0
    };
}
function negate(lowBits, highBits) {
    highBits = ~highBits;
    if (lowBits) {
        lowBits = ~lowBits + 1;
    } else {
        highBits += 1;
    }
    return newBits(lowBits, highBits);
}
export function varint32write(value, bytes) {
    if (value >= 0) {
        while(value > 127){
            bytes.push(value & 127 | 128);
            value = value >>> 7;
        }
        bytes.push(value);
    } else {
        for(let i = 0; i < 9; i++){
            bytes.push(value & 127 | 128);
            value = value >> 7;
        }
        bytes.push(1);
    }
}
export function varint32read() {
    let b2 = this.buf[this.pos++];
    let result = b2 & 127;
    if ((b2 & 128) == 0) {
        this.assertBounds();
        return result;
    }
    b2 = this.buf[this.pos++];
    result |= (b2 & 127) << 7;
    if ((b2 & 128) == 0) {
        this.assertBounds();
        return result;
    }
    b2 = this.buf[this.pos++];
    result |= (b2 & 127) << 14;
    if ((b2 & 128) == 0) {
        this.assertBounds();
        return result;
    }
    b2 = this.buf[this.pos++];
    result |= (b2 & 127) << 21;
    if ((b2 & 128) == 0) {
        this.assertBounds();
        return result;
    }
    b2 = this.buf[this.pos++];
    result |= (b2 & 15) << 28;
    for(let readBytes = 5; (b2 & 128) !== 0 && readBytes < 10; readBytes++)b2 = this.buf[this.pos++];
    if ((b2 & 128) != 0) throw new Error("invalid varint");
    this.assertBounds();
    return result >>> 0;
}
export function makeInt64Support() {
    const dv = new DataView(new ArrayBuffer(8));
    const ok = typeof BigInt === "function" && typeof dv.getBigInt64 === "function" && typeof dv.getBigUint64 === "function" && typeof dv.setBigInt64 === "function" && typeof dv.setBigUint64 === "function" && (typeof process != "object" || typeof process.env != "object" || process.env.BUF_BIGINT_DISABLE !== "1");
    if (ok) {
        const MIN = BigInt("-9223372036854775808"), MAX = BigInt("9223372036854775807"), UMIN = BigInt("0"), UMAX = BigInt("18446744073709551615");
        return {
            zero: BigInt(0),
            supported: true,
            parse (value) {
                const bi2 = typeof value == "bigint" ? value : BigInt(value);
                if (bi2 > MAX || bi2 < MIN) {
                    throw new Error(`int64 invalid: ${value}`);
                }
                return bi2;
            },
            uParse (value) {
                const bi2 = typeof value == "bigint" ? value : BigInt(value);
                if (bi2 > UMAX || bi2 < UMIN) {
                    throw new Error(`uint64 invalid: ${value}`);
                }
                return bi2;
            },
            enc (value) {
                dv.setBigInt64(0, this.parse(value), true);
                return {
                    lo: dv.getInt32(0, true),
                    hi: dv.getInt32(4, true)
                };
            },
            uEnc (value) {
                dv.setBigInt64(0, this.uParse(value), true);
                return {
                    lo: dv.getInt32(0, true),
                    hi: dv.getInt32(4, true)
                };
            },
            dec (lo2, hi2) {
                dv.setInt32(0, lo2, true);
                dv.setInt32(4, hi2, true);
                return dv.getBigInt64(0, true);
            },
            uDec (lo2, hi2) {
                dv.setInt32(0, lo2, true);
                dv.setInt32(4, hi2, true);
                return dv.getBigUint64(0, true);
            }
        };
    }
    const assertInt64String = (value)=>assert(/^-?[0-9]+$/.test(value), `int64 invalid: ${value}`);
    const assertUInt64String = (value)=>assert(/^[0-9]+$/.test(value), `uint64 invalid: ${value}`);
    return {
        zero: "0",
        supported: false,
        parse (value) {
            if (typeof value != "string") {
                value = value.toString();
            }
            assertInt64String(value);
            return value;
        },
        uParse (value) {
            if (typeof value != "string") {
                value = value.toString();
            }
            assertUInt64String(value);
            return value;
        },
        enc (value) {
            if (typeof value != "string") {
                value = value.toString();
            }
            assertInt64String(value);
            return int64FromString(value);
        },
        uEnc (value) {
            if (typeof value != "string") {
                value = value.toString();
            }
            assertUInt64String(value);
            return int64FromString(value);
        },
        dec (lo2, hi2) {
            return int64ToString(lo2, hi2);
        },
        uDec (lo2, hi2) {
            return uInt64ToString(lo2, hi2);
        }
    };
}
function scalarEquals(type2, a, b2) {
    if (a === b2) {
        return true;
    }
    if (type2 == ScalarType.BYTES) {
        if (!(a instanceof Uint8Array) || !(b2 instanceof Uint8Array)) {
            return false;
        }
        if (a.length !== b2.length) {
            return false;
        }
        for(let i = 0; i < a.length; i++){
            if (a[i] !== b2[i]) {
                return false;
            }
        }
        return true;
    }
    switch(type2){
        case ScalarType.UINT64:
        case ScalarType.FIXED64:
        case ScalarType.INT64:
        case ScalarType.SFIXED64:
        case ScalarType.SINT64:
            return a == b2;
    }
    return false;
}
export function scalarZeroValue(type2, longType) {
    switch(type2){
        case ScalarType.BOOL:
            return false;
        case ScalarType.UINT64:
        case ScalarType.FIXED64:
        case ScalarType.INT64:
        case ScalarType.SFIXED64:
        case ScalarType.SINT64:
            return longType == 0 ? protoInt64.zero : "0";
        case ScalarType.DOUBLE:
        case ScalarType.FLOAT:
            return 0;
        case ScalarType.BYTES:
            return new Uint8Array(0);
        case ScalarType.STRING:
            return "";
        default:
            return 0;
    }
}
function isScalarZeroValue(type2, value) {
    switch(type2){
        case ScalarType.BOOL:
            return value === false;
        case ScalarType.STRING:
            return value === "";
        case ScalarType.BYTES:
            return value instanceof Uint8Array && !value.byteLength;
        default:
            return value == 0;
    }
}
function makeExtension(runtime, typeName, extendee, field4) {
    let fi2;
    return {
        typeName,
        extendee,
        get field () {
            if (!fi2) {
                const i = typeof field4 == "function" ? field4() : field4;
                i.name = typeName.split(".").pop();
                i.jsonName = `[${typeName}]`;
                fi2 = runtime.util.newFieldList([
                    i
                ]).list()[0];
            }
            return fi2;
        },
        runtime
    };
}
function createExtensionContainer(extension3) {
    const localName = extension3.field.localName;
    const container = Object.create(null);
    container[localName] = initExtensionField(extension3);
    return [
        container,
        ()=>container[localName]
    ];
}
function initExtensionField(ext2) {
    const field4 = ext2.field;
    if (field4.repeated) {
        return [];
    }
    if (field4.default !== void 0) {
        return field4.default;
    }
    switch(field4.kind){
        case "enum":
            return field4.T.values[0].no;
        case "scalar":
            return scalarZeroValue(field4.T, field4.L);
        case "message":
            const T = field4.T, value = new T();
            return T.fieldWrapper ? T.fieldWrapper.unwrapField(value) : value;
        case "map":
            throw "map fields are not allowed to be extensions";
    }
}
function filterUnknownFields(unknownFields, field4) {
    if (!field4.repeated && (field4.kind == "enum" || field4.kind == "scalar")) {
        for(let i = unknownFields.length - 1; i >= 0; --i){
            if (unknownFields[i].no == field4.no) {
                return [
                    unknownFields[i]
                ];
            }
        }
        return [];
    }
    return unknownFields.filter((uf)=>uf.no === field4.no);
}
function getExtension(message, extension3, options2) {
    assertExtendee(extension3, message);
    const opt = extension3.runtime.bin.makeReadOptions(options2);
    const ufs = filterUnknownFields(message.getType().runtime.bin.listUnknownFields(message), extension3.field);
    const [container, get] = createExtensionContainer(extension3);
    for (const uf of ufs){
        extension3.runtime.bin.readField(container, opt.readerFactory(uf.data), extension3.field, uf.wireType, opt);
    }
    return get();
}
function setExtension(message, extension3, value, options2) {
    assertExtendee(extension3, message);
    const readOpt = extension3.runtime.bin.makeReadOptions(options2);
    const writeOpt = extension3.runtime.bin.makeWriteOptions(options2);
    if (hasExtension(message, extension3)) {
        const ufs = message.getType().runtime.bin.listUnknownFields(message).filter((uf)=>uf.no != extension3.field.no);
        message.getType().runtime.bin.discardUnknownFields(message);
        for (const uf of ufs){
            message.getType().runtime.bin.onUnknownField(message, uf.no, uf.wireType, uf.data);
        }
    }
    const writer = writeOpt.writerFactory();
    let f2 = extension3.field;
    if (!f2.opt && !f2.repeated && (f2.kind == "enum" || f2.kind == "scalar")) {
        f2 = Object.assign(Object.assign({}, extension3.field), {
            opt: true
        });
    }
    extension3.runtime.bin.writeField(f2, value, writer, writeOpt);
    const reader = readOpt.readerFactory(writer.finish());
    while(reader.pos < reader.len){
        const [no2, wireType] = reader.tag();
        const data = reader.skip(wireType, no2);
        message.getType().runtime.bin.onUnknownField(message, no2, wireType, data);
    }
}
function hasExtension(message, extension3) {
    const messageType = message.getType();
    return extension3.extendee.typeName === messageType.typeName && !!messageType.runtime.bin.listUnknownFields(message).find((uf)=>uf.no == extension3.field.no);
}
function assertExtendee(extension3, message) {
    assert(extension3.extendee.typeName == message.getType().typeName, `extension ${extension3.typeName} can only be applied to message ${extension3.extendee.typeName}`);
}
function isFieldSet(field4, target) {
    const localName = field4.localName;
    if (field4.repeated) {
        return target[localName].length > 0;
    }
    if (field4.oneof) {
        return target[field4.oneof.localName].case === localName;
    }
    switch(field4.kind){
        case "enum":
        case "scalar":
            if (field4.opt || field4.req) {
                return target[localName] !== void 0;
            }
            if (field4.kind == "enum") {
                return target[localName] !== field4.T.values[0].no;
            }
            return !isScalarZeroValue(field4.T, target[localName]);
        case "message":
            return target[localName] !== void 0;
        case "map":
            return Object.keys(target[localName]).length > 0;
    }
}
function clearField(field4, target) {
    const localName = field4.localName;
    const implicitPresence = !field4.opt && !field4.req;
    if (field4.repeated) {
        target[localName] = [];
    } else if (field4.oneof) {
        target[field4.oneof.localName] = {
            case: void 0
        };
    } else {
        switch(field4.kind){
            case "map":
                target[localName] = {};
                break;
            case "enum":
                target[localName] = implicitPresence ? field4.T.values[0].no : void 0;
                break;
            case "scalar":
                target[localName] = implicitPresence ? scalarZeroValue(field4.T, field4.L) : void 0;
                break;
            case "message":
                target[localName] = void 0;
                break;
        }
    }
}
export function isMessage(arg, type2) {
    if (arg === null || typeof arg != "object") {
        return false;
    }
    if (!Object.getOwnPropertyNames(Message.prototype).every((m2)=>m2 in arg && typeof arg[m2] == "function")) {
        return false;
    }
    const actualType = arg.getType();
    if (actualType === null || typeof actualType != "function" || !("typeName" in actualType) || typeof actualType.typeName != "string") {
        return false;
    }
    return type2 === void 0 ? true : actualType.typeName == type2.typeName;
}
function wrapField(type2, value) {
    if (isMessage(value) || !type2.fieldWrapper) {
        return value;
    }
    return type2.fieldWrapper.wrapField(value);
}
function makeReadOptions(options2) {
    return options2 ? Object.assign(Object.assign({}, jsonReadDefaults), options2) : jsonReadDefaults;
}
function makeWriteOptions(options2) {
    return options2 ? Object.assign(Object.assign({}, jsonWriteDefaults), options2) : jsonWriteDefaults;
}
function makeJsonFormat() {
    return {
        makeReadOptions,
        makeWriteOptions,
        readMessage (type2, json2, options2, message) {
            if (json2 == null || Array.isArray(json2) || typeof json2 != "object") {
                throw new Error(`cannot decode message ${type2.typeName} from JSON: ${debugJsonValue(json2)}`);
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
                    readField(message, jsonValue, field4, options2, type2);
                } else {
                    let found = false;
                    if ((registry2 === null || registry2 === void 0 ? void 0 : registry2.findExtension) && jsonKey.startsWith("[") && jsonKey.endsWith("]")) {
                        const ext2 = registry2.findExtension(jsonKey.substring(1, jsonKey.length - 1));
                        if (ext2 && ext2.extendee.typeName == type2.typeName) {
                            found = true;
                            const [container, get] = createExtensionContainer(ext2);
                            readField(container, jsonValue, ext2.field, options2, ext2);
                            setExtension(message, ext2, get(), options2);
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
                    if (!isFieldSet(field4, message)) {
                        if (field4.req) {
                            throw `required field not set`;
                        }
                        if (!options2.emitDefaultValues) {
                            continue;
                        }
                        if (!canEmitFieldDefaultValue(field4)) {
                            continue;
                        }
                    }
                    const value = field4.oneof ? message[field4.oneof.localName].value : message[field4.localName];
                    const jsonValue = writeField(field4, value, options2);
                    if (jsonValue !== void 0) {
                        json2[options2.useProtoFieldName ? field4.name : field4.jsonName] = jsonValue;
                    }
                }
                const registry2 = options2.typeRegistry;
                if (registry2 === null || registry2 === void 0 ? void 0 : registry2.findExtensionFor) {
                    for (const uf of type2.runtime.bin.listUnknownFields(message)){
                        const ext2 = registry2.findExtensionFor(type2.typeName, uf.no);
                        if (ext2 && hasExtension(message, ext2)) {
                            const value = getExtension(message, ext2, options2);
                            const jsonValue = writeField(ext2.field, value, options2);
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
            return readScalar(type2, json2, longType !== null && longType !== void 0 ? longType : LongType.BIGINT, true);
        },
        writeScalar (type2, value, emitDefaultValues) {
            if (value === void 0) {
                return void 0;
            }
            if (emitDefaultValues || isScalarZeroValue(type2, value)) {
                return writeScalar(type2, value);
            }
            return void 0;
        },
        debug: debugJsonValue
    };
}
function debugJsonValue(json2) {
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
function readField(target, jsonValue, field4, options2, parentType) {
    let localName = field4.localName;
    if (field4.repeated) {
        assert(field4.kind != "map");
        if (jsonValue === null) {
            return;
        }
        if (!Array.isArray(jsonValue)) {
            throw new Error(`cannot decode field ${parentType.typeName}.${field4.name} from JSON: ${debugJsonValue(jsonValue)}`);
        }
        const targetArray = target[localName];
        for (const jsonItem of jsonValue){
            if (jsonItem === null) {
                throw new Error(`cannot decode field ${parentType.typeName}.${field4.name} from JSON: ${debugJsonValue(jsonItem)}`);
            }
            switch(field4.kind){
                case "message":
                    targetArray.push(field4.T.fromJson(jsonItem, options2));
                    break;
                case "enum":
                    const enumValue = readEnum(field4.T, jsonItem, options2.ignoreUnknownFields, true);
                    if (enumValue !== tokenIgnoredUnknownEnum) {
                        targetArray.push(enumValue);
                    }
                    break;
                case "scalar":
                    try {
                        targetArray.push(readScalar(field4.T, jsonItem, field4.L, true));
                    } catch (e) {
                        let m2 = `cannot decode field ${parentType.typeName}.${field4.name} from JSON: ${debugJsonValue(jsonItem)}`;
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
            throw new Error(`cannot decode field ${parentType.typeName}.${field4.name} from JSON: ${debugJsonValue(jsonValue)}`);
        }
        const targetMap = target[localName];
        for (const [jsonMapKey, jsonMapValue] of Object.entries(jsonValue)){
            if (jsonMapValue === null) {
                throw new Error(`cannot decode field ${parentType.typeName}.${field4.name} from JSON: map value null`);
            }
            let key;
            try {
                key = readMapKey(field4.K, jsonMapKey);
            } catch (e) {
                let m2 = `cannot decode map key for field ${parentType.typeName}.${field4.name} from JSON: ${debugJsonValue(jsonValue)}`;
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
                    const enumValue = readEnum(field4.V.T, jsonMapValue, options2.ignoreUnknownFields, true);
                    if (enumValue !== tokenIgnoredUnknownEnum) {
                        targetMap[key] = enumValue;
                    }
                    break;
                case "scalar":
                    try {
                        targetMap[key] = readScalar(field4.V.T, jsonMapValue, LongType.BIGINT, true);
                    } catch (e) {
                        let m2 = `cannot decode map value for field ${parentType.typeName}.${field4.name} from JSON: ${debugJsonValue(jsonValue)}`;
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
                if (isMessage(currentValue)) {
                    currentValue.fromJson(jsonValue, options2);
                } else {
                    target[localName] = currentValue = messageType.fromJson(jsonValue, options2);
                    if (messageType.fieldWrapper && !field4.oneof) {
                        target[localName] = messageType.fieldWrapper.unwrapField(currentValue);
                    }
                }
                break;
            case "enum":
                const enumValue = readEnum(field4.T, jsonValue, options2.ignoreUnknownFields, false);
                switch(enumValue){
                    case tokenNull:
                        clearField(field4, target);
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
                    const scalarValue = readScalar(field4.T, jsonValue, field4.L, false);
                    switch(scalarValue){
                        case tokenNull:
                            clearField(field4, target);
                            break;
                        default:
                            target[localName] = scalarValue;
                            break;
                    }
                } catch (e) {
                    let m2 = `cannot decode field ${parentType.typeName}.${field4.name} from JSON: ${debugJsonValue(jsonValue)}`;
                    if (e instanceof Error && e.message.length > 0) {
                        m2 += `: ${e.message}`;
                    }
                    throw new Error(m2);
                }
                break;
        }
    }
}
function readMapKey(type2, json2) {
    if (type2 === ScalarType.BOOL) {
        switch(json2){
            case "true":
                json2 = true;
                break;
            case "false":
                json2 = false;
                break;
        }
    }
    return readScalar(type2, json2, LongType.BIGINT, true).toString();
}
function readScalar(type2, json2, longType, nullAsZeroValue) {
    if (json2 === null) {
        if (nullAsZeroValue) {
            return scalarZeroValue(type2, longType);
        }
        return tokenNull;
    }
    switch(type2){
        case ScalarType.DOUBLE:
        case ScalarType.FLOAT:
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
            if (type2 == ScalarType.FLOAT) assertFloat32(float2);
            return float2;
        case ScalarType.INT32:
        case ScalarType.FIXED32:
        case ScalarType.SFIXED32:
        case ScalarType.SINT32:
        case ScalarType.UINT32:
            let int32;
            if (typeof json2 == "number") int32 = json2;
            else if (typeof json2 == "string" && json2.length > 0) {
                if (json2.trim().length === json2.length) int32 = Number(json2);
            }
            if (int32 === void 0) break;
            if (type2 == ScalarType.UINT32 || type2 == ScalarType.FIXED32) assertUInt32(int32);
            else assertInt32(int32);
            return int32;
        case ScalarType.INT64:
        case ScalarType.SFIXED64:
        case ScalarType.SINT64:
            if (typeof json2 != "number" && typeof json2 != "string") break;
            const long = protoInt64.parse(json2);
            return longType ? long.toString() : long;
        case ScalarType.FIXED64:
        case ScalarType.UINT64:
            if (typeof json2 != "number" && typeof json2 != "string") break;
            const uLong = protoInt64.uParse(json2);
            return longType ? uLong.toString() : uLong;
        case ScalarType.BOOL:
            if (typeof json2 !== "boolean") break;
            return json2;
        case ScalarType.STRING:
            if (typeof json2 !== "string") {
                break;
            }
            try {
                encodeURIComponent(json2);
            } catch (e) {
                throw new Error("invalid UTF8");
            }
            return json2;
        case ScalarType.BYTES:
            if (json2 === "") return new Uint8Array(0);
            if (typeof json2 !== "string") break;
            return protoBase64.dec(json2);
    }
    throw new Error();
}
function readEnum(type2, json2, ignoreUnknownFields, nullAsZeroValue) {
    if (json2 === null) {
        if (type2.typeName == "google.protobuf.NullValue") {
            return 0;
        }
        return nullAsZeroValue ? type2.values[0].no : tokenNull;
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
                return tokenIgnoredUnknownEnum;
            }
            break;
    }
    throw new Error(`cannot decode enum ${type2.typeName} from JSON: ${debugJsonValue(json2)}`);
}
function canEmitFieldDefaultValue(field4) {
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
function writeField(field4, value, options2) {
    if (field4.kind == "map") {
        assert(typeof value == "object" && value != null);
        const jsonObj = {};
        const entries = Object.entries(value);
        switch(field4.V.kind){
            case "scalar":
                for (const [entryKey, entryValue] of entries){
                    jsonObj[entryKey.toString()] = writeScalar(field4.V.T, entryValue);
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
                    jsonObj[entryKey.toString()] = writeEnum(enumType3, entryValue, options2.enumAsInteger);
                }
                break;
        }
        return options2.emitDefaultValues || entries.length > 0 ? jsonObj : void 0;
    }
    if (field4.repeated) {
        assert(Array.isArray(value));
        const jsonArr = [];
        switch(field4.kind){
            case "scalar":
                for(let i = 0; i < value.length; i++){
                    jsonArr.push(writeScalar(field4.T, value[i]));
                }
                break;
            case "enum":
                for(let i = 0; i < value.length; i++){
                    jsonArr.push(writeEnum(field4.T, value[i], options2.enumAsInteger));
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
            return writeScalar(field4.T, value);
        case "enum":
            return writeEnum(field4.T, value, options2.enumAsInteger);
        case "message":
            return wrapField(field4.T, value).toJson(options2);
    }
}
function writeEnum(type2, value, enumAsInteger) {
    var _a18;
    assert(typeof value == "number");
    if (type2.typeName == "google.protobuf.NullValue") {
        return null;
    }
    if (enumAsInteger) {
        return value;
    }
    const val = type2.findNumber(value);
    return (_a18 = val === null || val === void 0 ? void 0 : val.name) !== null && _a18 !== void 0 ? _a18 : value;
}
function writeScalar(type2, value) {
    switch(type2){
        case ScalarType.INT32:
        case ScalarType.SFIXED32:
        case ScalarType.SINT32:
        case ScalarType.FIXED32:
        case ScalarType.UINT32:
            assert(typeof value == "number");
            return value;
        case ScalarType.FLOAT:
        case ScalarType.DOUBLE:
            assert(typeof value == "number");
            if (Number.isNaN(value)) return "NaN";
            if (value === Number.POSITIVE_INFINITY) return "Infinity";
            if (value === Number.NEGATIVE_INFINITY) return "-Infinity";
            return value;
        case ScalarType.STRING:
            assert(typeof value == "string");
            return value;
        case ScalarType.BOOL:
            assert(typeof value == "boolean");
            return value;
        case ScalarType.UINT64:
        case ScalarType.FIXED64:
        case ScalarType.INT64:
        case ScalarType.SFIXED64:
        case ScalarType.SINT64:
            assert(typeof value == "bigint" || typeof value == "string" || typeof value == "number");
            return value.toString();
        case ScalarType.BYTES:
            assert(value instanceof Uint8Array);
            return protoBase64.enc(value);
    }
}
function makeReadOptions2(options2) {
    return options2 ? Object.assign(Object.assign({}, readDefaults), options2) : readDefaults;
}
function makeWriteOptions2(options2) {
    return options2 ? Object.assign(Object.assign({}, writeDefaults), options2) : writeDefaults;
}
function makeBinaryFormat() {
    return {
        makeReadOptions: makeReadOptions2,
        makeWriteOptions: makeWriteOptions2,
        listUnknownFields (message) {
            var _a18;
            return (_a18 = message[unknownFieldsSymbol]) !== null && _a18 !== void 0 ? _a18 : [];
        },
        discardUnknownFields (message) {
            delete message[unknownFieldsSymbol];
        },
        writeUnknownFields (message, writer) {
            const m2 = message;
            const c = m2[unknownFieldsSymbol];
            if (c) {
                for (const f2 of c){
                    writer.tag(f2.no, f2.wireType).raw(f2.data);
                }
            }
        },
        onUnknownField (message, no2, wireType, data) {
            const m2 = message;
            if (!Array.isArray(m2[unknownFieldsSymbol])) {
                m2[unknownFieldsSymbol] = [];
            }
            m2[unknownFieldsSymbol].push({
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
                if (delimitedMessageEncoding === true && wireType == WireType.EndGroup) {
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
                readField2(message, reader, field4, wireType, options2);
            }
            if (delimitedMessageEncoding && (wireType != WireType.EndGroup || fieldNo !== lengthOrEndTagFieldNo)) {
                throw new Error(`invalid end group tag`);
            }
        },
        readField: readField2,
        writeMessage (message, writer, options2) {
            const type2 = message.getType();
            for (const field4 of type2.fields.byNumber()){
                if (!isFieldSet(field4, message)) {
                    if (field4.req) {
                        throw new Error(`cannot encode field ${type2.typeName}.${field4.name} to binary: required field not set`);
                    }
                    continue;
                }
                const value = field4.oneof ? message[field4.oneof.localName].value : message[field4.localName];
                writeField2(field4, value, writer, options2);
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
            writeField2(field4, value, writer, options2);
        }
    };
}
function readField2(target, reader, field4, wireType, options2) {
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
            const scalarType = field4.kind == "enum" ? ScalarType.INT32 : field4.T;
            let read = readScalar2;
            if (field4.kind == "scalar" && field4.L > 0) {
                read = readScalarLTString;
            }
            if (repeated) {
                let arr = target[localName];
                const isPacked = wireType == WireType.LengthDelimited && scalarType != ScalarType.STRING && scalarType != ScalarType.BYTES;
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
                target[localName].push(readMessageField(reader, new messageType(), options2, field4));
            } else {
                if (isMessage(target[localName])) {
                    readMessageField(reader, target[localName], options2, field4);
                } else {
                    target[localName] = readMessageField(reader, new messageType(), options2, field4);
                    if (messageType.fieldWrapper && !field4.oneof && !field4.repeated) {
                        target[localName] = messageType.fieldWrapper.unwrapField(target[localName]);
                    }
                }
            }
            break;
        case "map":
            let [mapKey, mapVal] = readMapEntry(field4, reader, options2);
            target[localName][mapKey] = mapVal;
            break;
    }
}
function readMessageField(reader, message, options2, field4) {
    const format2 = message.getType().runtime.bin;
    const delimited = field4 === null || field4 === void 0 ? void 0 : field4.delimited;
    format2.readMessage(message, reader, delimited ? field4.no : reader.uint32(), options2, delimited);
    return message;
}
function readMapEntry(field4, reader, options2) {
    const length = reader.uint32(), end = reader.pos + length;
    let key, val;
    while(reader.pos < end){
        const [fieldNo] = reader.tag();
        switch(fieldNo){
            case 1:
                key = readScalar2(reader, field4.K);
                break;
            case 2:
                switch(field4.V.kind){
                    case "scalar":
                        val = readScalar2(reader, field4.V.T);
                        break;
                    case "enum":
                        val = reader.int32();
                        break;
                    case "message":
                        val = readMessageField(reader, new field4.V.T(), options2, void 0);
                        break;
                }
                break;
        }
    }
    if (key === void 0) {
        key = scalarZeroValue(field4.K, LongType.BIGINT);
    }
    if (typeof key != "string" && typeof key != "number") {
        key = key.toString();
    }
    if (val === void 0) {
        switch(field4.V.kind){
            case "scalar":
                val = scalarZeroValue(field4.V.T, LongType.BIGINT);
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
function readScalarLTString(reader, type2) {
    const v2 = readScalar2(reader, type2);
    return typeof v2 == "bigint" ? v2.toString() : v2;
}
function readScalar2(reader, type2) {
    switch(type2){
        case ScalarType.STRING:
            return reader.string();
        case ScalarType.BOOL:
            return reader.bool();
        case ScalarType.DOUBLE:
            return reader.double();
        case ScalarType.FLOAT:
            return reader.float();
        case ScalarType.INT32:
            return reader.int32();
        case ScalarType.INT64:
            return reader.int64();
        case ScalarType.UINT64:
            return reader.uint64();
        case ScalarType.FIXED64:
            return reader.fixed64();
        case ScalarType.BYTES:
            return reader.bytes();
        case ScalarType.FIXED32:
            return reader.fixed32();
        case ScalarType.SFIXED32:
            return reader.sfixed32();
        case ScalarType.SFIXED64:
            return reader.sfixed64();
        case ScalarType.SINT64:
            return reader.sint64();
        case ScalarType.UINT32:
            return reader.uint32();
        case ScalarType.SINT32:
            return reader.sint32();
    }
}
function writeField2(field4, value, writer, options2) {
    assert(value !== void 0);
    const repeated = field4.repeated;
    switch(field4.kind){
        case "scalar":
        case "enum":
            let scalarType = field4.kind == "enum" ? ScalarType.INT32 : field4.T;
            if (repeated) {
                assert(Array.isArray(value));
                if (field4.packed) {
                    writePacked(writer, scalarType, field4.no, value);
                } else {
                    for (const item of value){
                        writeScalar2(writer, scalarType, field4.no, item);
                    }
                }
            } else {
                writeScalar2(writer, scalarType, field4.no, value);
            }
            break;
        case "message":
            if (repeated) {
                assert(Array.isArray(value));
                for (const item of value){
                    writeMessageField(writer, options2, field4, item);
                }
            } else {
                writeMessageField(writer, options2, field4, value);
            }
            break;
        case "map":
            assert(typeof value == "object" && value != null);
            for (const [key, val] of Object.entries(value)){
                writeMapEntry(writer, options2, field4, key, val);
            }
            break;
    }
}
function writeMapEntry(writer, options2, field4, key, value) {
    writer.tag(field4.no, WireType.LengthDelimited);
    writer.fork();
    let keyValue = key;
    switch(field4.K){
        case ScalarType.INT32:
        case ScalarType.FIXED32:
        case ScalarType.UINT32:
        case ScalarType.SFIXED32:
        case ScalarType.SINT32:
            keyValue = Number.parseInt(key);
            break;
        case ScalarType.BOOL:
            assert(key == "true" || key == "false");
            keyValue = key == "true";
            break;
    }
    writeScalar2(writer, field4.K, 1, keyValue);
    switch(field4.V.kind){
        case "scalar":
            writeScalar2(writer, field4.V.T, 2, value);
            break;
        case "enum":
            writeScalar2(writer, ScalarType.INT32, 2, value);
            break;
        case "message":
            assert(value !== void 0);
            writer.tag(2, WireType.LengthDelimited).bytes(value.toBinary(options2));
            break;
    }
    writer.join();
}
function writeMessageField(writer, options2, field4, value) {
    const message = wrapField(field4.T, value);
    if (field4.delimited) writer.tag(field4.no, WireType.StartGroup).raw(message.toBinary(options2)).tag(field4.no, WireType.EndGroup);
    else writer.tag(field4.no, WireType.LengthDelimited).bytes(message.toBinary(options2));
}
function writeScalar2(writer, type2, fieldNo, value) {
    assert(value !== void 0);
    let [wireType, method] = scalarTypeInfo(type2);
    writer.tag(fieldNo, wireType)[method](value);
}
function writePacked(writer, type2, fieldNo, value) {
    if (!value.length) {
        return;
    }
    writer.tag(fieldNo, WireType.LengthDelimited).fork();
    let [, method] = scalarTypeInfo(type2);
    for(let i = 0; i < value.length; i++){
        writer[method](value[i]);
    }
    writer.join();
}
function scalarTypeInfo(type2) {
    let wireType = WireType.Varint;
    switch(type2){
        case ScalarType.BYTES:
        case ScalarType.STRING:
            wireType = WireType.LengthDelimited;
            break;
        case ScalarType.DOUBLE:
        case ScalarType.FIXED64:
        case ScalarType.SFIXED64:
            wireType = WireType.Bit64;
            break;
        case ScalarType.FIXED32:
        case ScalarType.SFIXED32:
        case ScalarType.FLOAT:
            wireType = WireType.Bit32;
            break;
    }
    const method = ScalarType[type2].toLowerCase();
    return [
        wireType,
        method
    ];
}
function makeUtilCommon() {
    return {
        setEnumType,
        initPartial (source, target) {
            if (source === void 0) {
                return;
            }
            const type2 = target.getType();
            for (const member of type2.fields.byMember()){
                const localName = member.localName, t = target, s3 = source;
                if (s3[localName] == null) {
                    continue;
                }
                switch(member.kind){
                    case "oneof":
                        const sk = s3[localName].case;
                        if (sk === void 0) {
                            continue;
                        }
                        const sourceField = member.findField(sk);
                        let val = s3[localName].value;
                        if (sourceField && sourceField.kind == "message" && !isMessage(val, sourceField.T)) {
                            val = new sourceField.T(val);
                        } else if (sourceField && sourceField.kind === "scalar" && sourceField.T === ScalarType.BYTES) {
                            val = toU8Arr(val);
                        }
                        t[localName] = {
                            case: sk,
                            value: val
                        };
                        break;
                    case "scalar":
                    case "enum":
                        let copy = s3[localName];
                        if (member.T === ScalarType.BYTES) {
                            copy = member.repeated ? copy.map(toU8Arr) : toU8Arr(copy);
                        }
                        t[localName] = copy;
                        break;
                    case "map":
                        switch(member.V.kind){
                            case "scalar":
                            case "enum":
                                if (member.V.T === ScalarType.BYTES) {
                                    for (const [k2, v2] of Object.entries(s3[localName])){
                                        t[localName][k2] = toU8Arr(v2);
                                    }
                                } else {
                                    Object.assign(t[localName], s3[localName]);
                                }
                                break;
                            case "message":
                                const messageType = member.V.T;
                                for (const k2 of Object.keys(s3[localName])){
                                    let val2 = s3[localName][k2];
                                    if (!messageType.fieldWrapper) {
                                        val2 = new messageType(val2);
                                    }
                                    t[localName][k2] = val2;
                                }
                                break;
                        }
                        break;
                    case "message":
                        const mt2 = member.T;
                        if (member.repeated) {
                            t[localName] = s3[localName].map((val2)=>isMessage(val2, mt2) ? val2 : new mt2(val2));
                        } else {
                            const val2 = s3[localName];
                            if (mt2.fieldWrapper) {
                                if (mt2.typeName === "google.protobuf.BytesValue") {
                                    t[localName] = toU8Arr(val2);
                                } else {
                                    t[localName] = val2;
                                }
                            } else {
                                t[localName] = isMessage(val2, mt2) ? val2 : new mt2(val2);
                            }
                        }
                        break;
                }
            }
        },
        equals (type2, a, b2) {
            if (a === b2) {
                return true;
            }
            if (!a || !b2) {
                return false;
            }
            return type2.fields.byMember().every((m2)=>{
                const va = a[m2.localName];
                const vb = b2[m2.localName];
                if (m2.repeated) {
                    if (va.length !== vb.length) {
                        return false;
                    }
                    switch(m2.kind){
                        case "message":
                            return va.every((a2, i)=>m2.T.equals(a2, vb[i]));
                        case "scalar":
                            return va.every((a2, i)=>scalarEquals(m2.T, a2, vb[i]));
                        case "enum":
                            return va.every((a2, i)=>scalarEquals(ScalarType.INT32, a2, vb[i]));
                    }
                    throw new Error(`repeated cannot contain ${m2.kind}`);
                }
                switch(m2.kind){
                    case "message":
                        let a2 = va;
                        let b3 = vb;
                        if (m2.T.fieldWrapper) {
                            if (a2 !== void 0 && !isMessage(a2)) {
                                a2 = m2.T.fieldWrapper.wrapField(a2);
                            }
                            if (b3 !== void 0 && !isMessage(b3)) {
                                b3 = m2.T.fieldWrapper.wrapField(b3);
                            }
                        }
                        return m2.T.equals(a2, b3);
                    case "enum":
                        return scalarEquals(ScalarType.INT32, va, vb);
                    case "scalar":
                        return scalarEquals(m2.T, va, vb);
                    case "oneof":
                        if (va.case !== vb.case) {
                            return false;
                        }
                        const s3 = m2.findField(va.case);
                        if (s3 === void 0) {
                            return true;
                        }
                        switch(s3.kind){
                            case "message":
                                return s3.T.equals(va.value, vb.value);
                            case "enum":
                                return scalarEquals(ScalarType.INT32, va.value, vb.value);
                            case "scalar":
                                return scalarEquals(s3.T, va.value, vb.value);
                        }
                        throw new Error(`oneof cannot contain ${s3.kind}`);
                    case "map":
                        const keys = Object.keys(va).concat(Object.keys(vb));
                        switch(m2.V.kind){
                            case "message":
                                const messageType = m2.V.T;
                                return keys.every((k2)=>messageType.equals(va[k2], vb[k2]));
                            case "enum":
                                return keys.every((k2)=>scalarEquals(ScalarType.INT32, va[k2], vb[k2]));
                            case "scalar":
                                const scalarType = m2.V.T;
                                return keys.every((k2)=>scalarEquals(scalarType, va[k2], vb[k2]));
                        }
                        break;
                }
            });
        },
        clone (message) {
            const type2 = message.getType(), target = new type2(), any2 = target;
            for (const member of type2.fields.byMember()){
                const source = message[member.localName];
                let copy;
                if (member.repeated) {
                    copy = source.map(cloneSingularField);
                } else if (member.kind == "map") {
                    copy = any2[member.localName];
                    for (const [key, v2] of Object.entries(source)){
                        copy[key] = cloneSingularField(v2);
                    }
                } else if (member.kind == "oneof") {
                    const f2 = member.findField(source.case);
                    copy = f2 ? {
                        case: source.case,
                        value: cloneSingularField(source.value)
                    } : {
                        case: void 0
                    };
                } else {
                    copy = cloneSingularField(source);
                }
                any2[member.localName] = copy;
            }
            for (const uf of type2.runtime.bin.listUnknownFields(message)){
                type2.runtime.bin.onUnknownField(any2, uf.no, uf.wireType, uf.data);
            }
            return target;
        }
    };
}
function cloneSingularField(value) {
    if (value === void 0) {
        return value;
    }
    if (isMessage(value)) {
        return value.clone();
    }
    if (value instanceof Uint8Array) {
        const c = new Uint8Array(value.byteLength);
        c.set(value);
        return c;
    }
    return value;
}
function toU8Arr(input) {
    return input instanceof Uint8Array ? input : new Uint8Array(input);
}
export function makeProtoRuntime(syntax, newFieldList, initFields) {
    return {
        syntax,
        json: makeJsonFormat(),
        bin: makeBinaryFormat(),
        util: Object.assign(Object.assign({}, makeUtilCommon()), {
            newFieldList,
            initFields
        }),
        makeMessageType (typeName, fields, opt) {
            return makeMessageType(this, typeName, fields, opt);
        },
        makeEnum,
        makeEnumType,
        getEnumType,
        makeExtension (typeName, extendee, field4) {
            return makeExtension(this, typeName, extendee, field4);
        }
    };
}
function localFieldName(protoName, inOneof) {
    const name17 = protoCamelCase(protoName);
    if (inOneof) {
        return name17;
    }
    return safeObjectProperty(safeMessageProperty(name17));
}
export function localOneofName(protoName) {
    return localFieldName(protoName, false);
}
export function protoCamelCase(snakeCase) {
    let capNext = false;
    const b2 = [];
    for(let i = 0; i < snakeCase.length; i++){
        let c = snakeCase.charAt(i);
        switch(c){
            case "_":
                capNext = true;
                break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                b2.push(c);
                capNext = false;
                break;
            default:
                if (capNext) {
                    capNext = false;
                    c = c.toUpperCase();
                }
                b2.push(c);
                break;
        }
    }
    return b2.join("");
}
export function normalizeFieldInfos(fieldInfos, packedByDefault) {
    var _a18, _b2, _c, _d, _e2, _f;
    const r = [];
    let o;
    for (const field4 of typeof fieldInfos == "function" ? fieldInfos() : fieldInfos){
        const f2 = field4;
        f2.localName = localFieldName(field4.name, field4.oneof !== void 0);
        f2.jsonName = (_a18 = field4.jsonName) !== null && _a18 !== void 0 ? _a18 : fieldJsonName(field4.name);
        f2.repeated = (_b2 = field4.repeated) !== null && _b2 !== void 0 ? _b2 : false;
        if (field4.kind == "scalar") {
            f2.L = (_c = field4.L) !== null && _c !== void 0 ? _c : LongType.BIGINT;
        }
        f2.delimited = (_d = field4.delimited) !== null && _d !== void 0 ? _d : false;
        f2.req = (_e2 = field4.req) !== null && _e2 !== void 0 ? _e2 : false;
        f2.opt = (_f = field4.opt) !== null && _f !== void 0 ? _f : false;
        if (field4.packed === void 0) {
            if (packedByDefault) {
                f2.packed = field4.kind == "enum" || field4.kind == "scalar" && field4.T != ScalarType.BYTES && field4.T != ScalarType.STRING;
            } else {
                f2.packed = false;
            }
        }
        if (field4.oneof !== void 0) {
            const ooname = typeof field4.oneof == "string" ? field4.oneof : field4.oneof.name;
            if (!o || o.name != ooname) {
                o = new InternalOneofInfo(ooname);
            }
            f2.oneof = o;
            o.addField(f2);
        }
        r.push(f2);
    }
    return r;
}
export function defineOwn(target, key, value) {
    Object.defineProperty(target, key, {
        value,
        writable: true,
        enumerable: true,
        configurable: true
    });
    return value;
}
function fieldType(runtime, refs, token) {
    if (token.charAt(0) !== "#") {
        return {
            kind: "scalar",
            T: Number(token)
        };
    }
    const ref = refs[Number(token.slice(1))];
    return typeof ref === "function" ? {
        kind: "message",
        T: ref
    } : {
        kind: "enum",
        T: runtime.getEnumType(ref)
    };
}
export function fieldsFromDescriptor(runtime, descriptor) {
    const entries = descriptor[0].split("|");
    const refs = descriptor.slice(1);
    const fields = [];
    for(let i = 1; i < entries.length; i++){
        const tokens = entries[i].split(" ");
        const no2 = Number(tokens[0]);
        const name17 = tokens[1];
        let type2 = tokens[2];
        let mod2 = tokens[3];
        const last = type2.charAt(type2.length - 1);
        if (last === "?" || last === "*") {
            mod2 = last;
            type2 = type2.slice(0, -1);
        }
        const comma = type2.indexOf(",");
        if (comma !== -1) {
            fields.push({
                no: no2,
                name: name17,
                kind: "map",
                K: Number(type2.slice(0, comma)),
                V: fieldType(runtime, refs, type2.slice(comma + 1))
            });
            continue;
        }
        const field4 = Object.assign({
            no: no2,
            name: name17
        }, fieldType(runtime, refs, type2));
        if (mod2 === "?") {
            field4.opt = true;
        } else if (mod2 === "*") {
            field4.repeated = true;
        } else if (mod2 !== void 0) {
            field4.oneof = mod2;
        }
        fields.push(field4);
    }
    return fields;
}
export function nameFromDescriptor(descriptor) {
    const text4 = descriptor[0];
    const bar = text4.indexOf("|");
    return bar === -1 ? text4 : text4.slice(0, bar);
}
function enumLocalNames(enumName, names3) {
    const prefix = (enumName.charAt(0) + enumName.slice(1).replace(/[A-Z]/g, (c)=>"_" + c)).toLowerCase() + "_";
    const stripped = [];
    for (const name17 of names3){
        if (!name17.toLowerCase().startsWith(prefix)) {
            return names3.slice();
        }
        const local = name17.slice(prefix.length);
        if (local === "" || /^[0-9]/.test(local)) {
            return names3.slice();
        }
        stripped.push(local);
    }
    return stripped;
}
function enumValuePrefix(enumName) {
    return (enumName.charAt(0) + enumName.slice(1).replace(/[A-Z]/g, (c)=>"_" + c)).toUpperCase() + "_";
}
export function enumType2(runtime, packagePrefix, enumName, values, names3) {
    const simpleName = enumName.slice(enumName.lastIndexOf(".") + 1);
    let protoNames;
    let localNames;
    if (names3 === 1) {
        const prefix = enumValuePrefix(simpleName);
        localNames = values.map((v2)=>v2[1]);
        protoNames = localNames.map((local)=>prefix + local);
    } else {
        protoNames = values.map((v2)=>v2[1]);
        localNames = names3 === void 0 ? enumLocalNames(simpleName, protoNames) : names3;
    }
    const enumObject = {};
    const infos = [];
    for(let i = 0; i < values.length; i++){
        const no2 = values[i][0];
        enumObject[localNames[i]] = no2;
        enumObject[no2] = localNames[i];
        infos.push({
            no: no2,
            name: protoNames[i]
        });
    }
    runtime.util.setEnumType(enumObject, packagePrefix + enumName, infos);
    return enumObject;
}
export { BRAND, DIRTY, EMPTY_PATH, INVALID, NEVER, OK, ParseStatus, ZodAny, ZodArray, ZodBigInt, ZodBoolean, ZodBranded, ZodCatch, ZodDate, ZodDefault, ZodDiscriminatedUnion, ZodEffects, ZodEnum, ZodError, ZodFirstPartyTypeKind, ZodFunction, ZodIntersection, ZodIssueCode, ZodLazy, ZodLiteral, ZodMap, ZodNaN, ZodNativeEnum, ZodNever, ZodNull, ZodNullable, ZodNumber, ZodObject, ZodOptional, ZodParsedType, ZodPipeline, ZodPromise, ZodReadonly, ZodRecord, ZodSet, ZodString, ZodSymbol, ZodTuple, ZodType, ZodUndefined, ZodUnion, ZodUnknown, ZodVoid, anyType, arrayType, bigIntType, booleanType, coerce, dateType, discriminatedUnionType, effectsType, en_default, enumType, functionType, getParsedType, instanceOfType, intersectionType, isAborted, isAsync, isDirty, isValid, late, lazyType, literalType, makeIssue, mapType, nanType, nativeEnumType, neverType, nullType, nullableType, numberType, objectType, objectUtil, oboolean, onumber, optionalType, ostring, pipelineType, preprocessType, promiseType, quotelessJson, recordType, setType, strictObjectType, stringType, symbolType, tupleType, undefinedType, unionType, unknownType, util, voidType };

export var external_exports = {};
Object.defineProperty(external_exports, "BRAND", {
    enumerable: true,
    get: ()=>BRAND
});
Object.defineProperty(external_exports, "DIRTY", {
    enumerable: true,
    get: ()=>DIRTY
});
Object.defineProperty(external_exports, "EMPTY_PATH", {
    enumerable: true,
    get: ()=>EMPTY_PATH
});
Object.defineProperty(external_exports, "INVALID", {
    enumerable: true,
    get: ()=>INVALID
});
Object.defineProperty(external_exports, "NEVER", {
    enumerable: true,
    get: ()=>NEVER
});
Object.defineProperty(external_exports, "OK", {
    enumerable: true,
    get: ()=>OK
});
Object.defineProperty(external_exports, "ParseStatus", {
    enumerable: true,
    get: ()=>ParseStatus
});
Object.defineProperty(external_exports, "Schema", {
    enumerable: true,
    get: ()=>ZodType
});
Object.defineProperty(external_exports, "ZodAny", {
    enumerable: true,
    get: ()=>ZodAny
});
Object.defineProperty(external_exports, "ZodArray", {
    enumerable: true,
    get: ()=>ZodArray
});
Object.defineProperty(external_exports, "ZodBigInt", {
    enumerable: true,
    get: ()=>ZodBigInt
});
Object.defineProperty(external_exports, "ZodBoolean", {
    enumerable: true,
    get: ()=>ZodBoolean
});
Object.defineProperty(external_exports, "ZodBranded", {
    enumerable: true,
    get: ()=>ZodBranded
});
Object.defineProperty(external_exports, "ZodCatch", {
    enumerable: true,
    get: ()=>ZodCatch
});
Object.defineProperty(external_exports, "ZodDate", {
    enumerable: true,
    get: ()=>ZodDate
});
Object.defineProperty(external_exports, "ZodDefault", {
    enumerable: true,
    get: ()=>ZodDefault
});
Object.defineProperty(external_exports, "ZodDiscriminatedUnion", {
    enumerable: true,
    get: ()=>ZodDiscriminatedUnion
});
Object.defineProperty(external_exports, "ZodEffects", {
    enumerable: true,
    get: ()=>ZodEffects
});
Object.defineProperty(external_exports, "ZodEnum", {
    enumerable: true,
    get: ()=>ZodEnum
});
Object.defineProperty(external_exports, "ZodError", {
    enumerable: true,
    get: ()=>ZodError
});
Object.defineProperty(external_exports, "ZodFirstPartyTypeKind", {
    enumerable: true,
    get: ()=>ZodFirstPartyTypeKind
});
Object.defineProperty(external_exports, "ZodFunction", {
    enumerable: true,
    get: ()=>ZodFunction
});
Object.defineProperty(external_exports, "ZodIntersection", {
    enumerable: true,
    get: ()=>ZodIntersection
});
Object.defineProperty(external_exports, "ZodIssueCode", {
    enumerable: true,
    get: ()=>ZodIssueCode
});
Object.defineProperty(external_exports, "ZodLazy", {
    enumerable: true,
    get: ()=>ZodLazy
});
Object.defineProperty(external_exports, "ZodLiteral", {
    enumerable: true,
    get: ()=>ZodLiteral
});
Object.defineProperty(external_exports, "ZodMap", {
    enumerable: true,
    get: ()=>ZodMap
});
Object.defineProperty(external_exports, "ZodNaN", {
    enumerable: true,
    get: ()=>ZodNaN
});
Object.defineProperty(external_exports, "ZodNativeEnum", {
    enumerable: true,
    get: ()=>ZodNativeEnum
});
Object.defineProperty(external_exports, "ZodNever", {
    enumerable: true,
    get: ()=>ZodNever
});
Object.defineProperty(external_exports, "ZodNull", {
    enumerable: true,
    get: ()=>ZodNull
});
Object.defineProperty(external_exports, "ZodNullable", {
    enumerable: true,
    get: ()=>ZodNullable
});
Object.defineProperty(external_exports, "ZodNumber", {
    enumerable: true,
    get: ()=>ZodNumber
});
Object.defineProperty(external_exports, "ZodObject", {
    enumerable: true,
    get: ()=>ZodObject
});
Object.defineProperty(external_exports, "ZodOptional", {
    enumerable: true,
    get: ()=>ZodOptional
});
Object.defineProperty(external_exports, "ZodParsedType", {
    enumerable: true,
    get: ()=>ZodParsedType
});
Object.defineProperty(external_exports, "ZodPipeline", {
    enumerable: true,
    get: ()=>ZodPipeline
});
Object.defineProperty(external_exports, "ZodPromise", {
    enumerable: true,
    get: ()=>ZodPromise
});
Object.defineProperty(external_exports, "ZodReadonly", {
    enumerable: true,
    get: ()=>ZodReadonly
});
Object.defineProperty(external_exports, "ZodRecord", {
    enumerable: true,
    get: ()=>ZodRecord
});
Object.defineProperty(external_exports, "ZodSchema", {
    enumerable: true,
    get: ()=>ZodType
});
Object.defineProperty(external_exports, "ZodSet", {
    enumerable: true,
    get: ()=>ZodSet
});
Object.defineProperty(external_exports, "ZodString", {
    enumerable: true,
    get: ()=>ZodString
});
Object.defineProperty(external_exports, "ZodSymbol", {
    enumerable: true,
    get: ()=>ZodSymbol
});
Object.defineProperty(external_exports, "ZodTransformer", {
    enumerable: true,
    get: ()=>ZodEffects
});
Object.defineProperty(external_exports, "ZodTuple", {
    enumerable: true,
    get: ()=>ZodTuple
});
Object.defineProperty(external_exports, "ZodType", {
    enumerable: true,
    get: ()=>ZodType
});
Object.defineProperty(external_exports, "ZodUndefined", {
    enumerable: true,
    get: ()=>ZodUndefined
});
Object.defineProperty(external_exports, "ZodUnion", {
    enumerable: true,
    get: ()=>ZodUnion
});
Object.defineProperty(external_exports, "ZodUnknown", {
    enumerable: true,
    get: ()=>ZodUnknown
});
Object.defineProperty(external_exports, "ZodVoid", {
    enumerable: true,
    get: ()=>ZodVoid
});
Object.defineProperty(external_exports, "addIssueToContext", {
    enumerable: true,
    get: ()=>addIssueToContext
});
Object.defineProperty(external_exports, "any", {
    enumerable: true,
    get: ()=>anyType
});
Object.defineProperty(external_exports, "array", {
    enumerable: true,
    get: ()=>arrayType
});
Object.defineProperty(external_exports, "bigint", {
    enumerable: true,
    get: ()=>bigIntType
});
Object.defineProperty(external_exports, "boolean", {
    enumerable: true,
    get: ()=>booleanType
});
Object.defineProperty(external_exports, "coerce", {
    enumerable: true,
    get: ()=>coerce
});
Object.defineProperty(external_exports, "custom", {
    enumerable: true,
    get: ()=>custom
});
Object.defineProperty(external_exports, "date", {
    enumerable: true,
    get: ()=>dateType
});
Object.defineProperty(external_exports, "datetimeRegex", {
    enumerable: true,
    get: ()=>datetimeRegex
});
Object.defineProperty(external_exports, "defaultErrorMap", {
    enumerable: true,
    get: ()=>en_default
});
Object.defineProperty(external_exports, "discriminatedUnion", {
    enumerable: true,
    get: ()=>discriminatedUnionType
});
Object.defineProperty(external_exports, "effect", {
    enumerable: true,
    get: ()=>effectsType
});
Object.defineProperty(external_exports, "enum", {
    enumerable: true,
    get: ()=>enumType
});
Object.defineProperty(external_exports, "function", {
    enumerable: true,
    get: ()=>functionType
});
Object.defineProperty(external_exports, "getErrorMap", {
    enumerable: true,
    get: ()=>getErrorMap
});
Object.defineProperty(external_exports, "getParsedType", {
    enumerable: true,
    get: ()=>getParsedType
});
Object.defineProperty(external_exports, "instanceof", {
    enumerable: true,
    get: ()=>instanceOfType
});
Object.defineProperty(external_exports, "intersection", {
    enumerable: true,
    get: ()=>intersectionType
});
Object.defineProperty(external_exports, "isAborted", {
    enumerable: true,
    get: ()=>isAborted
});
Object.defineProperty(external_exports, "isAsync", {
    enumerable: true,
    get: ()=>isAsync
});
Object.defineProperty(external_exports, "isDirty", {
    enumerable: true,
    get: ()=>isDirty
});
Object.defineProperty(external_exports, "isValid", {
    enumerable: true,
    get: ()=>isValid
});
Object.defineProperty(external_exports, "late", {
    enumerable: true,
    get: ()=>late
});
Object.defineProperty(external_exports, "lazy", {
    enumerable: true,
    get: ()=>lazyType
});
Object.defineProperty(external_exports, "literal", {
    enumerable: true,
    get: ()=>literalType
});
Object.defineProperty(external_exports, "makeIssue", {
    enumerable: true,
    get: ()=>makeIssue
});
Object.defineProperty(external_exports, "map", {
    enumerable: true,
    get: ()=>mapType
});
Object.defineProperty(external_exports, "nan", {
    enumerable: true,
    get: ()=>nanType
});
Object.defineProperty(external_exports, "nativeEnum", {
    enumerable: true,
    get: ()=>nativeEnumType
});
Object.defineProperty(external_exports, "never", {
    enumerable: true,
    get: ()=>neverType
});
Object.defineProperty(external_exports, "null", {
    enumerable: true,
    get: ()=>nullType
});
Object.defineProperty(external_exports, "nullable", {
    enumerable: true,
    get: ()=>nullableType
});
Object.defineProperty(external_exports, "number", {
    enumerable: true,
    get: ()=>numberType
});
Object.defineProperty(external_exports, "object", {
    enumerable: true,
    get: ()=>objectType
});
Object.defineProperty(external_exports, "objectUtil", {
    enumerable: true,
    get: ()=>objectUtil
});
Object.defineProperty(external_exports, "oboolean", {
    enumerable: true,
    get: ()=>oboolean
});
Object.defineProperty(external_exports, "onumber", {
    enumerable: true,
    get: ()=>onumber
});
Object.defineProperty(external_exports, "optional", {
    enumerable: true,
    get: ()=>optionalType
});
Object.defineProperty(external_exports, "ostring", {
    enumerable: true,
    get: ()=>ostring
});
Object.defineProperty(external_exports, "pipeline", {
    enumerable: true,
    get: ()=>pipelineType
});
Object.defineProperty(external_exports, "preprocess", {
    enumerable: true,
    get: ()=>preprocessType
});
Object.defineProperty(external_exports, "promise", {
    enumerable: true,
    get: ()=>promiseType
});
Object.defineProperty(external_exports, "quotelessJson", {
    enumerable: true,
    get: ()=>quotelessJson
});
Object.defineProperty(external_exports, "record", {
    enumerable: true,
    get: ()=>recordType
});
Object.defineProperty(external_exports, "set", {
    enumerable: true,
    get: ()=>setType
});
Object.defineProperty(external_exports, "setErrorMap", {
    enumerable: true,
    get: ()=>setErrorMap
});
Object.defineProperty(external_exports, "strictObject", {
    enumerable: true,
    get: ()=>strictObjectType
});
Object.defineProperty(external_exports, "string", {
    enumerable: true,
    get: ()=>stringType
});
Object.defineProperty(external_exports, "symbol", {
    enumerable: true,
    get: ()=>symbolType
});
Object.defineProperty(external_exports, "transformer", {
    enumerable: true,
    get: ()=>effectsType
});
Object.defineProperty(external_exports, "tuple", {
    enumerable: true,
    get: ()=>tupleType
});
Object.defineProperty(external_exports, "undefined", {
    enumerable: true,
    get: ()=>undefinedType
});
Object.defineProperty(external_exports, "union", {
    enumerable: true,
    get: ()=>unionType
});
Object.defineProperty(external_exports, "unknown", {
    enumerable: true,
    get: ()=>unknownType
});
Object.defineProperty(external_exports, "util", {
    enumerable: true,
    get: ()=>util
});
Object.defineProperty(external_exports, "void", {
    enumerable: true,
    get: ()=>voidType
});

import { init_en } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js";
var overrideErrorMap;
export { overrideErrorMap };
var __wakaru_init_errors_initialized = false;
export function init_errors() {
if (__wakaru_init_errors_initialized) return;
__wakaru_init_errors_initialized = true;
init_en();
overrideErrorMap = en_default;

}
