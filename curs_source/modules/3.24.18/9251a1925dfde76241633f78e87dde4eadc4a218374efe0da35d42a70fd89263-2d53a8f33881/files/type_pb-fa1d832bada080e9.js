import { Any, init_any_pb } from "./any_pb.js";
import { SourceContext, init_source_context_pb } from "./source_context_pb.js";
import { Message, init_message } from "../../message.js";
import { init_proto3, proto3 } from "../../proto3.js";
var Syntax, Type, Field, Field_Kind, Field_Cardinality, Enum, EnumValue, Option;
export { Enum, EnumValue, Field, Field_Cardinality, Field_Kind, Option, Syntax, Type };
var __wakaru_init_type_pb_initialized = false;
export function init_type_pb() {
if (__wakaru_init_type_pb_initialized) return;
__wakaru_init_type_pb_initialized = true;
init_proto3();
init_message();
init_source_context_pb();
init_any_pb();
(function(Syntax2) {
    Syntax2[Syntax2["PROTO2"] = 0] = "PROTO2";
    Syntax2[Syntax2["PROTO3"] = 1] = "PROTO3";
    Syntax2[Syntax2["EDITIONS"] = 2] = "EDITIONS";
})(Syntax || (Syntax = {}));
proto3.util.setEnumType(Syntax, "google.protobuf.Syntax", [
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
Type = class _Type extends Message {
    constructor(data){
        super();
        this.name = "";
        this.fields = [];
        this.oneofs = [];
        this.options = [];
        this.syntax = Syntax.PROTO2;
        this.edition = "";
        proto3.util.initPartial(data, this);
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
        return proto3.util.equals(_Type, a, b2);
    }
};
Type.runtime = proto3;
Type.typeName = "google.protobuf.Type";
Type.fields = proto3.util.newFieldList(()=>[
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
            T: Field,
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
            T: Option,
            repeated: true
        },
        {
            no: 5,
            name: "source_context",
            kind: "message",
            T: SourceContext
        },
        {
            no: 6,
            name: "syntax",
            kind: "enum",
            T: proto3.getEnumType(Syntax)
        },
        {
            no: 7,
            name: "edition",
            kind: "scalar",
            T: 9
        }
    ]);
Field = class _Field extends Message {
    constructor(data){
        super();
        this.kind = Field_Kind.TYPE_UNKNOWN;
        this.cardinality = Field_Cardinality.UNKNOWN;
        this.number = 0;
        this.name = "";
        this.typeUrl = "";
        this.oneofIndex = 0;
        this.packed = false;
        this.options = [];
        this.jsonName = "";
        this.defaultValue = "";
        proto3.util.initPartial(data, this);
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
        return proto3.util.equals(_Field, a, b2);
    }
};
Field.runtime = proto3;
Field.typeName = "google.protobuf.Field";
Field.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: proto3.getEnumType(Field_Kind)
        },
        {
            no: 2,
            name: "cardinality",
            kind: "enum",
            T: proto3.getEnumType(Field_Cardinality)
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
            T: Option,
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
(function(Field_Kind2) {
    Field_Kind2[Field_Kind2["TYPE_UNKNOWN"] = 0] = "TYPE_UNKNOWN";
    Field_Kind2[Field_Kind2["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
    Field_Kind2[Field_Kind2["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
    Field_Kind2[Field_Kind2["TYPE_INT64"] = 3] = "TYPE_INT64";
    Field_Kind2[Field_Kind2["TYPE_UINT64"] = 4] = "TYPE_UINT64";
    Field_Kind2[Field_Kind2["TYPE_INT32"] = 5] = "TYPE_INT32";
    Field_Kind2[Field_Kind2["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
    Field_Kind2[Field_Kind2["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
    Field_Kind2[Field_Kind2["TYPE_BOOL"] = 8] = "TYPE_BOOL";
    Field_Kind2[Field_Kind2["TYPE_STRING"] = 9] = "TYPE_STRING";
    Field_Kind2[Field_Kind2["TYPE_GROUP"] = 10] = "TYPE_GROUP";
    Field_Kind2[Field_Kind2["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
    Field_Kind2[Field_Kind2["TYPE_BYTES"] = 12] = "TYPE_BYTES";
    Field_Kind2[Field_Kind2["TYPE_UINT32"] = 13] = "TYPE_UINT32";
    Field_Kind2[Field_Kind2["TYPE_ENUM"] = 14] = "TYPE_ENUM";
    Field_Kind2[Field_Kind2["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
    Field_Kind2[Field_Kind2["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
    Field_Kind2[Field_Kind2["TYPE_SINT32"] = 17] = "TYPE_SINT32";
    Field_Kind2[Field_Kind2["TYPE_SINT64"] = 18] = "TYPE_SINT64";
})(Field_Kind || (Field_Kind = {}));
proto3.util.setEnumType(Field_Kind, "google.protobuf.Field.Kind", [
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
(function(Field_Cardinality2) {
    Field_Cardinality2[Field_Cardinality2["UNKNOWN"] = 0] = "UNKNOWN";
    Field_Cardinality2[Field_Cardinality2["OPTIONAL"] = 1] = "OPTIONAL";
    Field_Cardinality2[Field_Cardinality2["REQUIRED"] = 2] = "REQUIRED";
    Field_Cardinality2[Field_Cardinality2["REPEATED"] = 3] = "REPEATED";
})(Field_Cardinality || (Field_Cardinality = {}));
proto3.util.setEnumType(Field_Cardinality, "google.protobuf.Field.Cardinality", [
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
Enum = class _Enum extends Message {
    constructor(data){
        super();
        this.name = "";
        this.enumvalue = [];
        this.options = [];
        this.syntax = Syntax.PROTO2;
        this.edition = "";
        proto3.util.initPartial(data, this);
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
        return proto3.util.equals(_Enum, a, b2);
    }
};
Enum.runtime = proto3;
Enum.typeName = "google.protobuf.Enum";
Enum.fields = proto3.util.newFieldList(()=>[
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
            T: EnumValue,
            repeated: true
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: Option,
            repeated: true
        },
        {
            no: 4,
            name: "source_context",
            kind: "message",
            T: SourceContext
        },
        {
            no: 5,
            name: "syntax",
            kind: "enum",
            T: proto3.getEnumType(Syntax)
        },
        {
            no: 6,
            name: "edition",
            kind: "scalar",
            T: 9
        }
    ]);
EnumValue = class _EnumValue extends Message {
    constructor(data){
        super();
        this.name = "";
        this.number = 0;
        this.options = [];
        proto3.util.initPartial(data, this);
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
        return proto3.util.equals(_EnumValue, a, b2);
    }
};
EnumValue.runtime = proto3;
EnumValue.typeName = "google.protobuf.EnumValue";
EnumValue.fields = proto3.util.newFieldList(()=>[
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
            T: Option,
            repeated: true
        }
    ]);
Option = class _Option extends Message {
    constructor(data){
        super();
        this.name = "";
        proto3.util.initPartial(data, this);
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
        return proto3.util.equals(_Option, a, b2);
    }
};
Option.runtime = proto3;
Option.typeName = "google.protobuf.Option";
Option.fields = proto3.util.newFieldList(()=>[
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
            T: Any
        }
    ]);

}
