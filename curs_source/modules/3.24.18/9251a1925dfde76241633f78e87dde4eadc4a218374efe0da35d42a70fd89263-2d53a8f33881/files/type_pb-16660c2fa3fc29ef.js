import { require_any_pb } from "./any_pb.js";
import { require_source_context_pb } from "./source_context_pb.js";
import { require_message } from "../../message.js";
import { require_proto3 } from "../../proto3.js";
var __wakaru_require_type_pb_cache;
export function require_type_pb() {
if (__wakaru_require_type_pb_cache) return __wakaru_require_type_pb_cache;
var exports2 = {};
__wakaru_require_type_pb_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.Option = exports2.EnumValue = exports2.Enum = exports2.Field_Cardinality = exports2.Field_Kind = exports2.Field = exports2.Type = exports2.Syntax = void 0;
var proto3_js_1 = require_proto3();
var message_js_1 = require_message();
var source_context_pb_js_1 = require_source_context_pb();
var any_pb_js_1 = require_any_pb();
var Syntax2;
(function(Syntax3) {
    Syntax3[Syntax3["PROTO2"] = 0] = "PROTO2";
    Syntax3[Syntax3["PROTO3"] = 1] = "PROTO3";
    Syntax3[Syntax3["EDITIONS"] = 2] = "EDITIONS";
})(Syntax2 || (exports2.Syntax = Syntax2 = {}));
proto3_js_1.proto3.util.setEnumType(Syntax2, "google.protobuf.Syntax", [
    {
        no: 0,
        name: "SYNTAX_PROTO2"
    },
    {
        no: 1,
        name: "SYNTAX_PROTO3"
    },
    {
        no: 2,
        name: "SYNTAX_EDITIONS"
    }
]);
var Type3 = class _Type extends message_js_1.Message {
    constructor(data){
        super();
        this.name = "";
        this.fields = [];
        this.oneofs = [];
        this.options = [];
        this.syntax = Syntax2.PROTO2;
        this.edition = "";
        proto3_js_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _Type().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _Type().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _Type().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3_js_1.proto3.util.equals(_Type, a, b2);
    }
};
exports2.Type = Type3;
Type3.runtime = proto3_js_1.proto3;
Type3.typeName = "google.protobuf.Type";
Type3.fields = proto3_js_1.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "fields",
            kind: "message",
            T: Field2,
            repeated: true
        },
        {
            no: 3,
            name: "oneofs",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "options",
            kind: "message",
            T: Option2,
            repeated: true
        },
        {
            no: 5,
            name: "source_context",
            kind: "message",
            T: source_context_pb_js_1.SourceContext
        },
        {
            no: 6,
            name: "syntax",
            kind: "enum",
            T: proto3_js_1.proto3.getEnumType(Syntax2)
        },
        {
            no: 7,
            name: "edition",
            kind: "scalar",
            T: 9
        }
    ]);
var Field2 = class _Field extends message_js_1.Message {
    constructor(data){
        super();
        this.kind = Field_Kind2.TYPE_UNKNOWN;
        this.cardinality = Field_Cardinality2.UNKNOWN;
        this.number = 0;
        this.name = "";
        this.typeUrl = "";
        this.oneofIndex = 0;
        this.packed = false;
        this.options = [];
        this.jsonName = "";
        this.defaultValue = "";
        proto3_js_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _Field().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _Field().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _Field().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3_js_1.proto3.util.equals(_Field, a, b2);
    }
};
exports2.Field = Field2;
Field2.runtime = proto3_js_1.proto3;
Field2.typeName = "google.protobuf.Field";
Field2.fields = proto3_js_1.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: proto3_js_1.proto3.getEnumType(Field_Kind2)
        },
        {
            no: 2,
            name: "cardinality",
            kind: "enum",
            T: proto3_js_1.proto3.getEnumType(Field_Cardinality2)
        },
        {
            no: 3,
            name: "number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "type_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "oneof_index",
            kind: "scalar",
            T: 5
        },
        {
            no: 8,
            name: "packed",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "options",
            kind: "message",
            T: Option2,
            repeated: true
        },
        {
            no: 10,
            name: "json_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "default_value",
            kind: "scalar",
            T: 9
        }
    ]);
var Field_Kind2;
(function(Field_Kind3) {
    Field_Kind3[Field_Kind3["TYPE_UNKNOWN"] = 0] = "TYPE_UNKNOWN";
    Field_Kind3[Field_Kind3["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
    Field_Kind3[Field_Kind3["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
    Field_Kind3[Field_Kind3["TYPE_INT64"] = 3] = "TYPE_INT64";
    Field_Kind3[Field_Kind3["TYPE_UINT64"] = 4] = "TYPE_UINT64";
    Field_Kind3[Field_Kind3["TYPE_INT32"] = 5] = "TYPE_INT32";
    Field_Kind3[Field_Kind3["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
    Field_Kind3[Field_Kind3["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
    Field_Kind3[Field_Kind3["TYPE_BOOL"] = 8] = "TYPE_BOOL";
    Field_Kind3[Field_Kind3["TYPE_STRING"] = 9] = "TYPE_STRING";
    Field_Kind3[Field_Kind3["TYPE_GROUP"] = 10] = "TYPE_GROUP";
    Field_Kind3[Field_Kind3["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
    Field_Kind3[Field_Kind3["TYPE_BYTES"] = 12] = "TYPE_BYTES";
    Field_Kind3[Field_Kind3["TYPE_UINT32"] = 13] = "TYPE_UINT32";
    Field_Kind3[Field_Kind3["TYPE_ENUM"] = 14] = "TYPE_ENUM";
    Field_Kind3[Field_Kind3["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
    Field_Kind3[Field_Kind3["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
    Field_Kind3[Field_Kind3["TYPE_SINT32"] = 17] = "TYPE_SINT32";
    Field_Kind3[Field_Kind3["TYPE_SINT64"] = 18] = "TYPE_SINT64";
})(Field_Kind2 || (exports2.Field_Kind = Field_Kind2 = {}));
proto3_js_1.proto3.util.setEnumType(Field_Kind2, "google.protobuf.Field.Kind", [
    {
        no: 0,
        name: "TYPE_UNKNOWN"
    },
    {
        no: 1,
        name: "TYPE_DOUBLE"
    },
    {
        no: 2,
        name: "TYPE_FLOAT"
    },
    {
        no: 3,
        name: "TYPE_INT64"
    },
    {
        no: 4,
        name: "TYPE_UINT64"
    },
    {
        no: 5,
        name: "TYPE_INT32"
    },
    {
        no: 6,
        name: "TYPE_FIXED64"
    },
    {
        no: 7,
        name: "TYPE_FIXED32"
    },
    {
        no: 8,
        name: "TYPE_BOOL"
    },
    {
        no: 9,
        name: "TYPE_STRING"
    },
    {
        no: 10,
        name: "TYPE_GROUP"
    },
    {
        no: 11,
        name: "TYPE_MESSAGE"
    },
    {
        no: 12,
        name: "TYPE_BYTES"
    },
    {
        no: 13,
        name: "TYPE_UINT32"
    },
    {
        no: 14,
        name: "TYPE_ENUM"
    },
    {
        no: 15,
        name: "TYPE_SFIXED32"
    },
    {
        no: 16,
        name: "TYPE_SFIXED64"
    },
    {
        no: 17,
        name: "TYPE_SINT32"
    },
    {
        no: 18,
        name: "TYPE_SINT64"
    }
]);
var Field_Cardinality2;
(function(Field_Cardinality3) {
    Field_Cardinality3[Field_Cardinality3["UNKNOWN"] = 0] = "UNKNOWN";
    Field_Cardinality3[Field_Cardinality3["OPTIONAL"] = 1] = "OPTIONAL";
    Field_Cardinality3[Field_Cardinality3["REQUIRED"] = 2] = "REQUIRED";
    Field_Cardinality3[Field_Cardinality3["REPEATED"] = 3] = "REPEATED";
})(Field_Cardinality2 || (exports2.Field_Cardinality = Field_Cardinality2 = {}));
proto3_js_1.proto3.util.setEnumType(Field_Cardinality2, "google.protobuf.Field.Cardinality", [
    {
        no: 0,
        name: "CARDINALITY_UNKNOWN"
    },
    {
        no: 1,
        name: "CARDINALITY_OPTIONAL"
    },
    {
        no: 2,
        name: "CARDINALITY_REQUIRED"
    },
    {
        no: 3,
        name: "CARDINALITY_REPEATED"
    }
]);
var Enum2 = class _Enum extends message_js_1.Message {
    constructor(data){
        super();
        this.name = "";
        this.enumvalue = [];
        this.options = [];
        this.syntax = Syntax2.PROTO2;
        this.edition = "";
        proto3_js_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _Enum().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _Enum().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _Enum().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3_js_1.proto3.util.equals(_Enum, a, b2);
    }
};
exports2.Enum = Enum2;
Enum2.runtime = proto3_js_1.proto3;
Enum2.typeName = "google.protobuf.Enum";
Enum2.fields = proto3_js_1.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "enumvalue",
            kind: "message",
            T: EnumValue2,
            repeated: true
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: Option2,
            repeated: true
        },
        {
            no: 4,
            name: "source_context",
            kind: "message",
            T: source_context_pb_js_1.SourceContext
        },
        {
            no: 5,
            name: "syntax",
            kind: "enum",
            T: proto3_js_1.proto3.getEnumType(Syntax2)
        },
        {
            no: 6,
            name: "edition",
            kind: "scalar",
            T: 9
        }
    ]);
var EnumValue2 = class _EnumValue extends message_js_1.Message {
    constructor(data){
        super();
        this.name = "";
        this.number = 0;
        this.options = [];
        proto3_js_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _EnumValue().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _EnumValue().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _EnumValue().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3_js_1.proto3.util.equals(_EnumValue, a, b2);
    }
};
exports2.EnumValue = EnumValue2;
EnumValue2.runtime = proto3_js_1.proto3;
EnumValue2.typeName = "google.protobuf.EnumValue";
EnumValue2.fields = proto3_js_1.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: Option2,
            repeated: true
        }
    ]);
var Option2 = class _Option extends message_js_1.Message {
    constructor(data){
        super();
        this.name = "";
        proto3_js_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _Option().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _Option().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _Option().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3_js_1.proto3.util.equals(_Option, a, b2);
    }
};
exports2.Option = Option2;
Option2.runtime = proto3_js_1.proto3;
Option2.typeName = "google.protobuf.Option";
Option2.fields = proto3_js_1.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "message",
            T: any_pb_js_1.Any
        }
    ]);

return exports2;
}
