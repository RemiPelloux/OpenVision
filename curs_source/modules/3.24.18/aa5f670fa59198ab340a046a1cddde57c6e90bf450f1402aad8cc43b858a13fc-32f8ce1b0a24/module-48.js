require.r(exports);
require.d(exports, {
    ListValue: ()=>ListValue,
    NullValue: ()=>NullValue,
    Struct: ()=>Struct,
    Value: ()=>Value
});
var _proto3_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-7.js");
var _message_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-12.js");
var NullValue = ((NullValue2)=>{
    NullValue2[NullValue2["NULL_VALUE"] = 0] = "NULL_VALUE";
    return NullValue2;
})(NullValue || {});
_proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.setEnumType(NullValue, "google.protobuf.NullValue", [
    {
        no: 0,
        name: "NULL_VALUE"
    }
]);
const _Struct = class _Struct extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.fields = {};
        _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        const json = {};
        for (const [k, v] of Object.entries(this.fields)){
            json[k] = v.toJson(options);
        }
        return json;
    }
    fromJson(json, options) {
        if (typeof json != "object" || json == null || Array.isArray(json)) {
            throw new Error("cannot decode google.protobuf.Struct from JSON " + _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.json.debug(json));
        }
        for (const [k, v] of Object.entries(json)){
            this.fields[k] = Value.fromJson(v);
        }
        return this;
    }
    static fromBinary(bytes, options) {
        return new _Struct().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Struct().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Struct().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_Struct, a, b);
    }
};
_Struct.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3;
_Struct.typeName = "google.protobuf.Struct";
_Struct.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "fields",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: Value
            }
        }
    ]);
let Struct = _Struct;
const _Value = class _Value extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.kind = {
            case: void 0
        };
        _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        switch(this.kind.case){
            case "nullValue":
                return null;
            case "numberValue":
                if (!Number.isFinite(this.kind.value)) {
                    throw new Error("google.protobuf.Value cannot be NaN or Infinity");
                }
                return this.kind.value;
            case "boolValue":
                return this.kind.value;
            case "stringValue":
                return this.kind.value;
            case "structValue":
            case "listValue":
                return this.kind.value.toJson({
                    ...options,
                    emitDefaultValues: true
                });
        }
        throw new Error("google.protobuf.Value must have a value");
    }
    fromJson(json, options) {
        switch(typeof json){
            case "number":
                this.kind = {
                    case: "numberValue",
                    value: json
                };
                break;
            case "string":
                this.kind = {
                    case: "stringValue",
                    value: json
                };
                break;
            case "boolean":
                this.kind = {
                    case: "boolValue",
                    value: json
                };
                break;
            case "object":
                if (json === null) {
                    this.kind = {
                        case: "nullValue",
                        value: 0
                    };
                } else if (Array.isArray(json)) {
                    this.kind = {
                        case: "listValue",
                        value: ListValue.fromJson(json)
                    };
                } else {
                    this.kind = {
                        case: "structValue",
                        value: Struct.fromJson(json)
                    };
                }
                break;
            default:
                throw new Error("cannot decode google.protobuf.Value from JSON " + _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.json.debug(json));
        }
        return this;
    }
    static fromBinary(bytes, options) {
        return new _Value().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Value().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Value().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_Value, a, b);
    }
};
_Value.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3;
_Value.typeName = "google.protobuf.Value";
_Value.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "null_value",
            kind: "enum",
            T: _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(NullValue),
            oneof: "kind"
        },
        {
            no: 2,
            name: "number_value",
            kind: "scalar",
            T: 1,
            oneof: "kind"
        },
        {
            no: 3,
            name: "string_value",
            kind: "scalar",
            T: 9,
            oneof: "kind"
        },
        {
            no: 4,
            name: "bool_value",
            kind: "scalar",
            T: 8,
            oneof: "kind"
        },
        {
            no: 5,
            name: "struct_value",
            kind: "message",
            T: Struct,
            oneof: "kind"
        },
        {
            no: 6,
            name: "list_value",
            kind: "message",
            T: ListValue,
            oneof: "kind"
        }
    ]);
let Value = _Value;
const _ListValue = class _ListValue extends _message_js__WEBPACK_IMPORTED_MODULE_1__.Message {
    constructor(data){
        super();
        this.values = [];
        _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.initPartial(data, this);
    }
    toJson(options) {
        return this.values.map((v)=>v.toJson());
    }
    fromJson(json, options) {
        if (!Array.isArray(json)) {
            throw new Error("cannot decode google.protobuf.ListValue from JSON " + _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.json.debug(json));
        }
        for (let e of json){
            this.values.push(Value.fromJson(e));
        }
        return this;
    }
    static fromBinary(bytes, options) {
        return new _ListValue().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _ListValue().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _ListValue().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.equals(_ListValue, a, b);
    }
};
_ListValue.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3;
_ListValue.typeName = "google.protobuf.ListValue";
_ListValue.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_0__.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "values",
            kind: "message",
            T: Value,
            repeated: true
        }
    ]);
let ListValue = _ListValue;
