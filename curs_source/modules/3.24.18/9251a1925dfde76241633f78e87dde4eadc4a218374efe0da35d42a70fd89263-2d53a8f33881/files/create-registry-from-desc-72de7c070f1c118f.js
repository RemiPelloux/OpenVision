import { require_create_descriptor_set } from "./create-descriptor-set.js";
import { require_any_pb } from "./google/protobuf/any_pb.js";
import { require_descriptor_pb } from "./google/protobuf/descriptor_pb.js";
import { require_duration_pb } from "./google/protobuf/duration_pb.js";
import { require_empty_pb } from "./google/protobuf/empty_pb.js";
import { require_field_mask_pb } from "./google/protobuf/field_mask_pb.js";
import { require_struct_pb } from "./google/protobuf/struct_pb.js";
import { require_timestamp_pb } from "./google/protobuf/timestamp_pb.js";
import { require_wrappers_pb } from "./google/protobuf/wrappers_pb.js";
import { require_is_message } from "./is-message.js";
import { require_assert } from "./private/assert.js";
import { require_enum } from "./private/enum.js";
import { require_names } from "./private/names.js";
import { require_proto2 } from "./proto2.js";
import { require_proto3 } from "./proto3.js";
var __wakaru_require_create_registry_from_desc_cache;
export function require_create_registry_from_desc() {
if (__wakaru_require_create_registry_from_desc_cache) return __wakaru_require_create_registry_from_desc_cache;
var exports2 = {};
__wakaru_require_create_registry_from_desc_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createRegistryFromDescriptors = void 0;
var assert_js_1 = require_assert();
var proto3_js_1 = require_proto3();
var proto2_js_1 = require_proto2();
var names_js_1 = require_names();
var timestamp_pb_js_1 = require_timestamp_pb();
var duration_pb_js_1 = require_duration_pb();
var any_pb_js_1 = require_any_pb();
var empty_pb_js_1 = require_empty_pb();
var field_mask_pb_js_1 = require_field_mask_pb();
var struct_pb_js_1 = require_struct_pb();
var enum_js_1 = require_enum();
var wrappers_pb_js_1 = require_wrappers_pb();
var descriptor_pb_js_1 = require_descriptor_pb();
var create_descriptor_set_js_1 = require_create_descriptor_set();
var is_message_js_1 = require_is_message();
var wkMessages = [
    any_pb_js_1.Any,
    duration_pb_js_1.Duration,
    empty_pb_js_1.Empty,
    field_mask_pb_js_1.FieldMask,
    struct_pb_js_1.Struct,
    struct_pb_js_1.Value,
    struct_pb_js_1.ListValue,
    timestamp_pb_js_1.Timestamp,
    duration_pb_js_1.Duration,
    wrappers_pb_js_1.DoubleValue,
    wrappers_pb_js_1.FloatValue,
    wrappers_pb_js_1.Int64Value,
    wrappers_pb_js_1.Int32Value,
    wrappers_pb_js_1.UInt32Value,
    wrappers_pb_js_1.UInt64Value,
    wrappers_pb_js_1.BoolValue,
    wrappers_pb_js_1.StringValue,
    wrappers_pb_js_1.BytesValue
];
var wkEnums = [
    (0, enum_js_1.getEnumType)(struct_pb_js_1.NullValue)
];
function createRegistryFromDescriptors(input, replaceWkt = true) {
    const set2 = input instanceof Uint8Array || (0, is_message_js_1.isMessage)(input, descriptor_pb_js_1.FileDescriptorSet) ? (0, create_descriptor_set_js_1.createDescriptorSet)(input) : input;
    const enums = new Map();
    const messages = new Map();
    const extensions = new Map();
    const extensionsByExtendee = new Map();
    const services = {};
    if (replaceWkt) {
        for (const mt2 of wkMessages){
            messages.set(mt2.typeName, mt2);
        }
        for (const et2 of wkEnums){
            enums.set(et2.typeName, et2);
        }
    }
    return {
        findEnum (typeName) {
            const existing = enums.get(typeName);
            if (existing) {
                return existing;
            }
            const desc = set2.enums.get(typeName);
            if (!desc) {
                return void 0;
            }
            const runtime = desc.file.syntax == "proto3" ? proto3_js_1.proto3 : proto2_js_1.proto2;
            const type2 = runtime.makeEnumType(typeName, desc.values.map((u2)=>({
                    no: u2.number,
                    name: u2.name,
                    localName: (0, names_js_1.localName)(u2)
                })), {});
            enums.set(typeName, type2);
            return type2;
        },
        findMessage (typeName) {
            const existing = messages.get(typeName);
            if (existing) {
                return existing;
            }
            const desc = set2.messages.get(typeName);
            if (!desc) {
                return void 0;
            }
            const runtime = desc.file.syntax == "proto3" ? proto3_js_1.proto3 : proto2_js_1.proto2;
            const fields = [];
            const type2 = runtime.makeMessageType(typeName, ()=>fields, {
                localName: (0, names_js_1.localName)(desc)
            });
            messages.set(typeName, type2);
            for (const field4 of desc.fields){
                fields.push(makeFieldInfo(field4, this));
            }
            return type2;
        },
        findService (typeName) {
            const existing = services[typeName];
            if (existing) {
                return existing;
            }
            const desc = set2.services.get(typeName);
            if (!desc) {
                return void 0;
            }
            const methods2 = {};
            for (const method of desc.methods){
                const I2 = resolve36(method.input, this, method);
                const O2 = resolve36(method.output, this, method);
                methods2[(0, names_js_1.localName)(method)] = {
                    name: method.name,
                    I: I2,
                    O: O2,
                    kind: method.methodKind,
                    idempotency: method.idempotency
                };
            }
            return services[typeName] = {
                typeName: desc.typeName,
                methods: methods2
            };
        },
        findExtensionFor (typeName, no2) {
            var _a18;
            if (!set2.messages.has(typeName)) {
                return void 0;
            }
            let extensionsByNo = extensionsByExtendee.get(typeName);
            if (!extensionsByNo) {
                extensionsByNo = new Map();
                extensionsByExtendee.set(typeName, extensionsByNo);
                for (const desc2 of set2.extensions.values()){
                    if (desc2.extendee.typeName == typeName) {
                        extensionsByNo.set(desc2.number, desc2);
                    }
                }
            }
            const desc = (_a18 = extensionsByExtendee.get(typeName)) === null || _a18 === void 0 ? void 0 : _a18.get(no2);
            return desc ? this.findExtension(desc.typeName) : void 0;
        },
        findExtension (typeName) {
            const existing = extensions.get(typeName);
            if (existing) {
                return existing;
            }
            const desc = set2.extensions.get(typeName);
            if (!desc) {
                return void 0;
            }
            const extendee = resolve36(desc.extendee, this, desc);
            const runtime = desc.file.syntax == "proto3" ? proto3_js_1.proto3 : proto2_js_1.proto2;
            const ext2 = runtime.makeExtension(typeName, extendee, makeFieldInfo(desc, this));
            extensions.set(typeName, ext2);
            return ext2;
        }
    };
}
exports2.createRegistryFromDescriptors = createRegistryFromDescriptors;
function makeFieldInfo(desc, registry2) {
    var _a18;
    const f2 = {
        kind: desc.fieldKind,
        no: desc.number,
        name: desc.name,
        jsonName: desc.jsonName,
        delimited: desc.proto.type == descriptor_pb_js_1.FieldDescriptorProto_Type.GROUP,
        repeated: desc.repeated,
        packed: desc.packed,
        oneof: (_a18 = desc.oneof) === null || _a18 === void 0 ? void 0 : _a18.name,
        opt: desc.optional,
        req: desc.proto.label === descriptor_pb_js_1.FieldDescriptorProto_Label.REQUIRED
    };
    switch(desc.fieldKind){
        case "map":
            {
                (0, assert_js_1.assert)(desc.kind == "field");
                let T;
                switch(desc.mapValue.kind){
                    case "scalar":
                        T = desc.mapValue.scalar;
                        break;
                    case "enum":
                        {
                            T = resolve36(desc.mapValue.enum, registry2, desc);
                            break;
                        }
                    case "message":
                        {
                            T = resolve36(desc.mapValue.message, registry2, desc);
                            break;
                        }
                }
                f2.K = desc.mapKey;
                f2.V = {
                    kind: desc.mapValue.kind,
                    T
                };
                break;
            }
        case "message":
            {
                f2.T = resolve36(desc.message, registry2, desc);
                break;
            }
        case "enum":
            {
                f2.T = resolve36(desc.enum, registry2, desc);
                f2.default = desc.getDefaultValue();
                break;
            }
        case "scalar":
            {
                f2.L = desc.longType;
                f2.T = desc.scalar;
                f2.default = desc.getDefaultValue();
                break;
            }
    }
    return f2;
}
function resolve36(desc, registry2, context2) {
    const type2 = desc.kind == "message" ? registry2.findMessage(desc.typeName) : registry2.findEnum(desc.typeName);
    (0, assert_js_1.assert)(type2, `${desc.toString()}" for ${context2.toString()} not found`);
    return type2;
}

return exports2;
}
