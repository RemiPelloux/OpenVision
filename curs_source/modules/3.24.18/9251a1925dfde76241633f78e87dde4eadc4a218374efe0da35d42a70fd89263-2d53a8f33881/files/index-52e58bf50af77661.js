import { require_binary_encoding } from "./binary-encoding.js";
import { require_codegen_info } from "./codegen-info.js";
import { require_create_descriptor_set } from "./create-descriptor-set.js";
import { require_create_registry_from_desc } from "./create-registry-from-desc.js";
import { require_create_registry } from "./create-registry.js";
import { require_extension_accessor } from "./extension-accessor.js";
import { require_any_pb } from "./google/protobuf/any_pb.js";
import { require_api_pb } from "./google/protobuf/api_pb.js";
import { require_plugin_pb } from "./google/protobuf/compiler/plugin_pb.js";
import { require_descriptor_pb } from "./google/protobuf/descriptor_pb.js";
import { require_duration_pb } from "./google/protobuf/duration_pb.js";
import { require_empty_pb } from "./google/protobuf/empty_pb.js";
import { require_field_mask_pb } from "./google/protobuf/field_mask_pb.js";
import { require_source_context_pb } from "./google/protobuf/source_context_pb.js";
import { require_struct_pb } from "./google/protobuf/struct_pb.js";
import { require_timestamp_pb } from "./google/protobuf/timestamp_pb.js";
import { require_type_pb } from "./google/protobuf/type_pb.js";
import { require_wrappers_pb } from "./google/protobuf/wrappers_pb.js";
import { require_is_message } from "./is-message.js";
import { require_message } from "./message.js";
import { require_proto_base64 } from "./proto-base64.js";
import { require_proto_delimited } from "./proto-delimited.js";
import { require_proto_double } from "./proto-double.js";
import { require_proto_int64 } from "./proto-int64.js";
import { require_proto2 } from "./proto2.js";
import { require_proto3 } from "./proto3.js";
import { require_scalar } from "./scalar.js";
import { require_service_type } from "./service-type.js";
import { require_to_plain_message } from "./to-plain-message.js";
var __wakaru_require_cjs2_cache;
export function require_cjs2() {
if (__wakaru_require_cjs2_cache) return __wakaru_require_cjs2_cache;
var exports2 = {};
__wakaru_require_cjs2_cache = exports2;
"use strict";
var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m2, k2, k22) {
    if (k22 === void 0) k22 = k2;
    var desc = Object.getOwnPropertyDescriptor(m2, k2);
    if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m2[k2];
            }
        };
    }
    Object.defineProperty(o, k22, desc);
}) : (function(o, m2, k2, k22) {
    if (k22 === void 0) k22 = k2;
    o[k22] = m2[k2];
}));
var __exportStar = exports2 && exports2.__exportStar || function(m2, exports3) {
    for(var p2 in m2)if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p2)) __createBinding(exports3, m2, p2);
};
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.toPlainMessage = exports2.createRegistryFromDescriptors = exports2.createMutableRegistry = exports2.createRegistry = exports2.createDescriptorSet = exports2.BinaryReader = exports2.BinaryWriter = exports2.WireType = exports2.MethodIdempotency = exports2.MethodKind = exports2.clearExtension = exports2.hasExtension = exports2.setExtension = exports2.getExtension = exports2.ScalarType = exports2.LongType = exports2.isMessage = exports2.Message = exports2.codegenInfo = exports2.protoDelimited = exports2.protoBase64 = exports2.protoInt64 = exports2.protoDouble = exports2.proto2 = exports2.proto3 = void 0;
var proto3_js_1 = require_proto3();
Object.defineProperty(exports2, "proto3", {
    enumerable: true,
    get: function() {
        return proto3_js_1.proto3;
    }
});
var proto2_js_1 = require_proto2();
Object.defineProperty(exports2, "proto2", {
    enumerable: true,
    get: function() {
        return proto2_js_1.proto2;
    }
});
var proto_double_js_1 = require_proto_double();
Object.defineProperty(exports2, "protoDouble", {
    enumerable: true,
    get: function() {
        return proto_double_js_1.protoDouble;
    }
});
var proto_int64_js_1 = require_proto_int64();
Object.defineProperty(exports2, "protoInt64", {
    enumerable: true,
    get: function() {
        return proto_int64_js_1.protoInt64;
    }
});
var proto_base64_js_1 = require_proto_base64();
Object.defineProperty(exports2, "protoBase64", {
    enumerable: true,
    get: function() {
        return proto_base64_js_1.protoBase64;
    }
});
var proto_delimited_js_1 = require_proto_delimited();
Object.defineProperty(exports2, "protoDelimited", {
    enumerable: true,
    get: function() {
        return proto_delimited_js_1.protoDelimited;
    }
});
var codegen_info_js_1 = require_codegen_info();
Object.defineProperty(exports2, "codegenInfo", {
    enumerable: true,
    get: function() {
        return codegen_info_js_1.codegenInfo;
    }
});
var message_js_1 = require_message();
Object.defineProperty(exports2, "Message", {
    enumerable: true,
    get: function() {
        return message_js_1.Message;
    }
});
var is_message_js_1 = require_is_message();
Object.defineProperty(exports2, "isMessage", {
    enumerable: true,
    get: function() {
        return is_message_js_1.isMessage;
    }
});
var scalar_js_1 = require_scalar();
Object.defineProperty(exports2, "LongType", {
    enumerable: true,
    get: function() {
        return scalar_js_1.LongType;
    }
});
Object.defineProperty(exports2, "ScalarType", {
    enumerable: true,
    get: function() {
        return scalar_js_1.ScalarType;
    }
});
var extension_accessor_js_1 = require_extension_accessor();
Object.defineProperty(exports2, "getExtension", {
    enumerable: true,
    get: function() {
        return extension_accessor_js_1.getExtension;
    }
});
Object.defineProperty(exports2, "setExtension", {
    enumerable: true,
    get: function() {
        return extension_accessor_js_1.setExtension;
    }
});
Object.defineProperty(exports2, "hasExtension", {
    enumerable: true,
    get: function() {
        return extension_accessor_js_1.hasExtension;
    }
});
Object.defineProperty(exports2, "clearExtension", {
    enumerable: true,
    get: function() {
        return extension_accessor_js_1.clearExtension;
    }
});
var service_type_js_1 = require_service_type();
Object.defineProperty(exports2, "MethodKind", {
    enumerable: true,
    get: function() {
        return service_type_js_1.MethodKind;
    }
});
Object.defineProperty(exports2, "MethodIdempotency", {
    enumerable: true,
    get: function() {
        return service_type_js_1.MethodIdempotency;
    }
});
var binary_encoding_js_1 = require_binary_encoding();
Object.defineProperty(exports2, "WireType", {
    enumerable: true,
    get: function() {
        return binary_encoding_js_1.WireType;
    }
});
Object.defineProperty(exports2, "BinaryWriter", {
    enumerable: true,
    get: function() {
        return binary_encoding_js_1.BinaryWriter;
    }
});
Object.defineProperty(exports2, "BinaryReader", {
    enumerable: true,
    get: function() {
        return binary_encoding_js_1.BinaryReader;
    }
});
var create_descriptor_set_js_1 = require_create_descriptor_set();
Object.defineProperty(exports2, "createDescriptorSet", {
    enumerable: true,
    get: function() {
        return create_descriptor_set_js_1.createDescriptorSet;
    }
});
var create_registry_js_1 = require_create_registry();
Object.defineProperty(exports2, "createRegistry", {
    enumerable: true,
    get: function() {
        return create_registry_js_1.createRegistry;
    }
});
Object.defineProperty(exports2, "createMutableRegistry", {
    enumerable: true,
    get: function() {
        return create_registry_js_1.createMutableRegistry;
    }
});
var create_registry_from_desc_js_1 = require_create_registry_from_desc();
Object.defineProperty(exports2, "createRegistryFromDescriptors", {
    enumerable: true,
    get: function() {
        return create_registry_from_desc_js_1.createRegistryFromDescriptors;
    }
});
var to_plain_message_js_1 = require_to_plain_message();
Object.defineProperty(exports2, "toPlainMessage", {
    enumerable: true,
    get: function() {
        return to_plain_message_js_1.toPlainMessage;
    }
});
__exportStar(require_plugin_pb(), exports2);
__exportStar(require_api_pb(), exports2);
__exportStar(require_any_pb(), exports2);
__exportStar(require_descriptor_pb(), exports2);
__exportStar(require_duration_pb(), exports2);
__exportStar(require_empty_pb(), exports2);
__exportStar(require_field_mask_pb(), exports2);
__exportStar(require_source_context_pb(), exports2);
__exportStar(require_struct_pb(), exports2);
__exportStar(require_timestamp_pb(), exports2);
__exportStar(require_type_pb(), exports2);
__exportStar(require_wrappers_pb(), exports2);

return exports2;
}
