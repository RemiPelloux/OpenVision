import { Message, init_message } from "../../message.js";
import { init_proto3, proto3 } from "../../proto3.js";
var NullValue, Struct, Value, ListValue;
export { ListValue, NullValue, Struct, Value };
var __wakaru_init_struct_pb_initialized = false;
export function init_struct_pb() {
if (__wakaru_init_struct_pb_initialized) return;
__wakaru_init_struct_pb_initialized = true;
init_proto3();
init_message();
(function(NullValue2) {
    NullValue2[NullValue2["NULL_VALUE"] = 0] = "NULL_VALUE";
})(NullValue || (NullValue = {}));
proto3.util.setEnumType(NullValue, "google.protobuf.NullValue", [
    {
        no: 0,
        name: "NULL_VALUE"
    }
]);
Struct = class _Struct extends Message {
    constructor(data){
        super();
        this.fields = {};
        proto3.util.initPartial(data, this);
    }
    toJson(options2) {
        const json2 = {};
        for (const [k2, v2] of Object.entries(this.fields)){
            json2[k2] = v2.toJson(options2);
        }
        return json2;
    }
    fromJson(json2, options2) {
        if (typeof json2 != "object" || json2 == null || Array.isArray(json2)) {
            throw new Error("cannot decode google.protobuf.Struct from JSON " + proto3.json.debug(json2));
        }
        for (const [k2, v2] of Object.entries(json2)){
            this.fields[k2] = Value.fromJson(v2);
        }
        return this;
    }
    static fromBinary(bytes, options2) {
        return new _Struct().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _Struct().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _Struct().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_Struct, a, b2);
    }
};
Struct.runtime = proto3;
Struct.typeName = "google.protobuf.Struct";
Struct.fields = proto3.util.newFieldList(()=>[
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
Value = class _Value extends Message {
    constructor(data){
        super();
        this.kind = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    toJson(options2) {
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
                return this.kind.value.toJson(Object.assign(Object.assign({}, options2), {
                    emitDefaultValues: true
                }));
        }
        throw new Error("google.protobuf.Value must have a value");
    }
    fromJson(json2, options2) {
        switch(typeof json2){
            case "number":
                this.kind = {
                    case: "numberValue",
                    value: json2
                };
                break;
            case "string":
                this.kind = {
                    case: "stringValue",
                    value: json2
                };
                break;
            case "boolean":
                this.kind = {
                    case: "boolValue",
                    value: json2
                };
                break;
            case "object":
                if (json2 === null) {
                    this.kind = {
                        case: "nullValue",
                        value: NullValue.NULL_VALUE
                    };
                } else if (Array.isArray(json2)) {
                    this.kind = {
                        case: "listValue",
                        value: ListValue.fromJson(json2)
                    };
                } else {
                    this.kind = {
                        case: "structValue",
                        value: Struct.fromJson(json2)
                    };
                }
                break;
            default:
                throw new Error("cannot decode google.protobuf.Value from JSON " + proto3.json.debug(json2));
        }
        return this;
    }
    static fromBinary(bytes, options2) {
        return new _Value().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _Value().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _Value().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_Value, a, b2);
    }
};
Value.runtime = proto3;
Value.typeName = "google.protobuf.Value";
Value.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "null_value",
            kind: "enum",
            T: proto3.getEnumType(NullValue),
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
ListValue = class _ListValue extends Message {
    constructor(data){
        super();
        this.values = [];
        proto3.util.initPartial(data, this);
    }
    toJson(options2) {
        return this.values.map((v2)=>v2.toJson());
    }
    fromJson(json2, options2) {
        if (!Array.isArray(json2)) {
            throw new Error("cannot decode google.protobuf.ListValue from JSON " + proto3.json.debug(json2));
        }
        for (let e of json2){
            this.values.push(Value.fromJson(e));
        }
        return this;
    }
    static fromBinary(bytes, options2) {
        return new _ListValue().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListValue().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListValue().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListValue, a, b2);
    }
};
ListValue.runtime = proto3;
ListValue.typeName = "google.protobuf.ListValue";
ListValue.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "values",
            kind: "message",
            T: Value,
            repeated: true
        }
    ]);

}
