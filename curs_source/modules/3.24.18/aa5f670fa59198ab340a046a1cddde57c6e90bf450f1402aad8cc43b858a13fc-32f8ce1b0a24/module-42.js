require.r(exports);
require.d(exports, {
    createRegistryFromDescriptors: ()=>createRegistryFromDescriptors
});
var _private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-10.js");
var _proto3_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-7.js");
var _proto2_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-31.js");
var _private_names_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-30.js");
var _google_protobuf_timestamp_pb_js__WEBPACK_IMPORTED_MODULE_4__ = require("./module-43.js");
var _google_protobuf_duration_pb_js__WEBPACK_IMPORTED_MODULE_5__ = require("./module-44.js");
var _google_protobuf_any_pb_js__WEBPACK_IMPORTED_MODULE_6__ = require("./module-45.js");
var _google_protobuf_empty_pb_js__WEBPACK_IMPORTED_MODULE_7__ = require("./module-46.js");
var _google_protobuf_field_mask_pb_js__WEBPACK_IMPORTED_MODULE_8__ = require("./module-47.js");
var _google_protobuf_struct_pb_js__WEBPACK_IMPORTED_MODULE_9__ = require("./module-48.js");
var _private_enum_js__WEBPACK_IMPORTED_MODULE_10__ = require("./module-9.js");
var _google_protobuf_wrappers_pb_js__WEBPACK_IMPORTED_MODULE_11__ = require("./module-49.js");
var _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_12__ = require("./module-38.js");
var _create_descriptor_set_js__WEBPACK_IMPORTED_MODULE_13__ = require("./module-37.js");
var _is_message_js__WEBPACK_IMPORTED_MODULE_14__ = require("./module-23.js");
const wkMessages = [
    _google_protobuf_any_pb_js__WEBPACK_IMPORTED_MODULE_6__.Any,
    _google_protobuf_duration_pb_js__WEBPACK_IMPORTED_MODULE_5__.Duration,
    _google_protobuf_empty_pb_js__WEBPACK_IMPORTED_MODULE_7__.Empty,
    _google_protobuf_field_mask_pb_js__WEBPACK_IMPORTED_MODULE_8__.FieldMask,
    _google_protobuf_struct_pb_js__WEBPACK_IMPORTED_MODULE_9__.Struct,
    _google_protobuf_struct_pb_js__WEBPACK_IMPORTED_MODULE_9__.Value,
    _google_protobuf_struct_pb_js__WEBPACK_IMPORTED_MODULE_9__.ListValue,
    _google_protobuf_timestamp_pb_js__WEBPACK_IMPORTED_MODULE_4__.Timestamp,
    _google_protobuf_duration_pb_js__WEBPACK_IMPORTED_MODULE_5__.Duration,
    _google_protobuf_wrappers_pb_js__WEBPACK_IMPORTED_MODULE_11__.DoubleValue,
    _google_protobuf_wrappers_pb_js__WEBPACK_IMPORTED_MODULE_11__.FloatValue,
    _google_protobuf_wrappers_pb_js__WEBPACK_IMPORTED_MODULE_11__.Int64Value,
    _google_protobuf_wrappers_pb_js__WEBPACK_IMPORTED_MODULE_11__.Int32Value,
    _google_protobuf_wrappers_pb_js__WEBPACK_IMPORTED_MODULE_11__.UInt32Value,
    _google_protobuf_wrappers_pb_js__WEBPACK_IMPORTED_MODULE_11__.UInt64Value,
    _google_protobuf_wrappers_pb_js__WEBPACK_IMPORTED_MODULE_11__.BoolValue,
    _google_protobuf_wrappers_pb_js__WEBPACK_IMPORTED_MODULE_11__.StringValue,
    _google_protobuf_wrappers_pb_js__WEBPACK_IMPORTED_MODULE_11__.BytesValue
];
const wkEnums = [
    (0, _private_enum_js__WEBPACK_IMPORTED_MODULE_10__.getEnumType)(_google_protobuf_struct_pb_js__WEBPACK_IMPORTED_MODULE_9__.NullValue)
];
function createRegistryFromDescriptors(input, replaceWkt = true) {
    const set = input instanceof Uint8Array || (0, _is_message_js__WEBPACK_IMPORTED_MODULE_14__.isMessage)(input, _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_12__.FileDescriptorSet) ? (0, _create_descriptor_set_js__WEBPACK_IMPORTED_MODULE_13__.createDescriptorSet)(input) : input;
    const enums = new Map();
    const messages = new Map();
    const extensions = new Map();
    const extensionsByExtendee = new Map();
    const services = {};
    if (replaceWkt) {
        for (const mt of wkMessages){
            messages.set(mt.typeName, mt);
        }
        for (const et of wkEnums){
            enums.set(et.typeName, et);
        }
    }
    return {
        findEnum (typeName) {
            const existing = enums.get(typeName);
            if (existing) {
                return existing;
            }
            const desc = set.enums.get(typeName);
            if (!desc) {
                return void 0;
            }
            const runtime = desc.file.syntax == "proto3" ? _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3 : _proto2_js__WEBPACK_IMPORTED_MODULE_2__.proto2;
            const type = runtime.makeEnumType(typeName, desc.values.map((u)=>({
                    no: u.number,
                    name: u.name,
                    localName: (0, _private_names_js__WEBPACK_IMPORTED_MODULE_3__.localName)(u)
                })), {});
            enums.set(typeName, type);
            return type;
        },
        findMessage (typeName) {
            const existing = messages.get(typeName);
            if (existing) {
                return existing;
            }
            const desc = set.messages.get(typeName);
            if (!desc) {
                return void 0;
            }
            const runtime = desc.file.syntax == "proto3" ? _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3 : _proto2_js__WEBPACK_IMPORTED_MODULE_2__.proto2;
            const fields = [];
            const type = runtime.makeMessageType(typeName, ()=>fields, {
                localName: (0, _private_names_js__WEBPACK_IMPORTED_MODULE_3__.localName)(desc)
            });
            messages.set(typeName, type);
            for (const field of desc.fields){
                fields.push(makeFieldInfo(field, this));
            }
            return type;
        },
        findService (typeName) {
            const existing = services[typeName];
            if (existing) {
                return existing;
            }
            const desc = set.services.get(typeName);
            if (!desc) {
                return void 0;
            }
            const methods = {};
            for (const method of desc.methods){
                const I = resolve(method.input, this, method);
                const O = resolve(method.output, this, method);
                methods[(0, _private_names_js__WEBPACK_IMPORTED_MODULE_3__.localName)(method)] = {
                    name: method.name,
                    I,
                    O,
                    kind: method.methodKind,
                    idempotency: method.idempotency
                };
            }
            return services[typeName] = {
                typeName: desc.typeName,
                methods
            };
        },
        findExtensionFor (typeName, no) {
            if (!set.messages.has(typeName)) {
                return void 0;
            }
            let extensionsByNo = extensionsByExtendee.get(typeName);
            if (!extensionsByNo) {
                extensionsByNo = new Map();
                extensionsByExtendee.set(typeName, extensionsByNo);
                for (const desc2 of set.extensions.values()){
                    if (desc2.extendee.typeName == typeName) {
                        extensionsByNo.set(desc2.number, desc2);
                    }
                }
            }
            const desc = extensionsByExtendee.get(typeName)?.get(no);
            return desc ? this.findExtension(desc.typeName) : void 0;
        },
        findExtension (typeName) {
            const existing = extensions.get(typeName);
            if (existing) {
                return existing;
            }
            const desc = set.extensions.get(typeName);
            if (!desc) {
                return void 0;
            }
            const extendee = resolve(desc.extendee, this, desc);
            const runtime = desc.file.syntax == "proto3" ? _proto3_js__WEBPACK_IMPORTED_MODULE_1__.proto3 : _proto2_js__WEBPACK_IMPORTED_MODULE_2__.proto2;
            const ext = runtime.makeExtension(typeName, extendee, makeFieldInfo(desc, this));
            extensions.set(typeName, ext);
            return ext;
        }
    };
}
function makeFieldInfo(desc, registry) {
    const f = {
        kind: desc.fieldKind,
        no: desc.number,
        name: desc.name,
        jsonName: desc.jsonName,
        delimited: desc.proto.type == _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_12__.FieldDescriptorProto_Type.GROUP,
        repeated: desc.repeated,
        packed: desc.packed,
        oneof: desc.oneof?.name,
        opt: desc.optional,
        req: desc.proto.label === _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_12__.FieldDescriptorProto_Label.REQUIRED
    };
    switch(desc.fieldKind){
        case "map":
            {
                (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(desc.kind == "field");
                let T;
                switch(desc.mapValue.kind){
                    case "scalar":
                        T = desc.mapValue.scalar;
                        break;
                    case "enum":
                        {
                            T = resolve(desc.mapValue.enum, registry, desc);
                            break;
                        }
                    case "message":
                        {
                            T = resolve(desc.mapValue.message, registry, desc);
                            break;
                        }
                }
                f.K = desc.mapKey;
                f.V = {
                    kind: desc.mapValue.kind,
                    T
                };
                break;
            }
        case "message":
            {
                f.T = resolve(desc.message, registry, desc);
                break;
            }
        case "enum":
            {
                f.T = resolve(desc.enum, registry, desc);
                f.default = desc.getDefaultValue();
                break;
            }
        case "scalar":
            {
                f.L = desc.longType;
                f.T = desc.scalar;
                f.default = desc.getDefaultValue();
                break;
            }
    }
    return f;
}
function resolve(desc, registry, context) {
    const type = desc.kind == "message" ? registry.findMessage(desc.typeName) : registry.findEnum(desc.typeName);
    (0, _private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(type, `${desc.toString()}" for ${context.toString()} not found`);
    return type;
}
