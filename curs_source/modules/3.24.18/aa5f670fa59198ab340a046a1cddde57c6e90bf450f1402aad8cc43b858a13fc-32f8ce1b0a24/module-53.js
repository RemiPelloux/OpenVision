require.r(exports);
require.d(exports, {
    Enum: ()=>Enum,
    EnumValue: ()=>EnumValue,
    Field: ()=>Field,
    Field_Cardinality: ()=>Field_Cardinality,
    Field_Kind: ()=>Field_Kind,
    Option: ()=>Option,
    Syntax: ()=>Syntax,
    Type: ()=>Type
});
var _proto3_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-7.js");
var _message_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-12.js");
var _source_context_pb_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-54.js");
var _any_pb_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-45.js");
var Syntax = ((Syntax2)=>{
    Syntax2[Syntax2["PROTO2"] = 0] = "PROTO2";
    Syntax2[Syntax2["PROTO3"] = 1] = "PROTO3";
    Syntax2[Syntax2["EDITIONS"] = 2] = "EDITIONS";
    return Syntax2;
})(Syntax || {});
_proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.setEnumType(Syntax, "google.protobuf.Syntax", [
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
const _Type = class _Type extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.name = "";
        this.fields = [];
        this.oneofs = [];
        this.options = [];
        this.syntax = 0;
        this.edition = "";
        _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Type().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Type().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Type().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_Type, a, b);
    }
};
_Type.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3;
_Type.typeName = "google.protobuf.Type";
_Type.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(()=>[
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
            T: _source_context_pb_js__WEBPACK_IMPORTED_MODULE_2__.SourceContext
        },
        {
            no: 6,
            name: "syntax",
            kind: "enum",
            T: _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(Syntax)
        },
        {
            no: 7,
            name: "edition",
            kind: "scalar",
            T: 9
        }
    ]);
let Type = _Type;
const _Field = class _Field extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.kind = 0;
        this.cardinality = 0;
        this.number = 0;
        this.name = "";
        this.typeUrl = "";
        this.oneofIndex = 0;
        this.packed = false;
        this.options = [];
        this.jsonName = "";
        this.defaultValue = "";
        _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Field().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Field().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Field().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_Field, a, b);
    }
};
_Field.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3;
_Field.typeName = "google.protobuf.Field";
_Field.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(Field_Kind)
        },
        {
            no: 2,
            name: "cardinality",
            kind: "enum",
            T: _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(Field_Cardinality)
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
let Field = _Field;
var Field_Kind = ((Field_Kind2)=>{
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
    return Field_Kind2;
})(Field_Kind || {});
_proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.setEnumType(Field_Kind, "google.protobuf.Field.Kind", [
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
var Field_Cardinality = ((Field_Cardinality2)=>{
    Field_Cardinality2[Field_Cardinality2["UNKNOWN"] = 0] = "UNKNOWN";
    Field_Cardinality2[Field_Cardinality2["OPTIONAL"] = 1] = "OPTIONAL";
    Field_Cardinality2[Field_Cardinality2["REQUIRED"] = 2] = "REQUIRED";
    Field_Cardinality2[Field_Cardinality2["REPEATED"] = 3] = "REPEATED";
    return Field_Cardinality2;
})(Field_Cardinality || {});
_proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.setEnumType(Field_Cardinality, "google.protobuf.Field.Cardinality", [
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
const _Enum = class _Enum extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.name = "";
        this.enumvalue = [];
        this.options = [];
        this.syntax = 0;
        this.edition = "";
        _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Enum().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Enum().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Enum().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_Enum, a, b);
    }
};
_Enum.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3;
_Enum.typeName = "google.protobuf.Enum";
_Enum.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(()=>[
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
            T: _source_context_pb_js__WEBPACK_IMPORTED_MODULE_2__.SourceContext
        },
        {
            no: 5,
            name: "syntax",
            kind: "enum",
            T: _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(Syntax)
        },
        {
            no: 6,
            name: "edition",
            kind: "scalar",
            T: 9
        }
    ]);
let Enum = _Enum;
const _EnumValue = class _EnumValue extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.name = "";
        this.number = 0;
        this.options = [];
        _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _EnumValue().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _EnumValue().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _EnumValue().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_EnumValue, a, b);
    }
};
_EnumValue.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3;
_EnumValue.typeName = "google.protobuf.EnumValue";
_EnumValue.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(()=>[
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
let EnumValue = _EnumValue;
const _Option = class _Option extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.name = "";
        _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Option().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Option().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Option().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_Option, a, b);
    }
};
_Option.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3;
_Option.typeName = "google.protobuf.Option";
_Option.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(()=>[
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
            T: _any_pb_js__WEBPACK_IMPORTED_MODULE_3__.Any
        }
    ]);
let Option = _Option;
