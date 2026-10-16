"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ListValue = exports.Value = exports.Struct = exports.NullValue = void 0;
const n = require("./module-7599.js"), r = require("./module-4193.js");
var o;
!function(e) {
    e[e.NULL_VALUE = 0] = "NULL_VALUE";
}(o || (exports.NullValue = o = {})), n.proto3.util.setEnumType(o, "google.protobuf.NullValue", [
    {
        no: 0,
        name: "NULL_VALUE"
    }
]);
class s extends r.Message {
    constructor(e){
        super(), this.fields = {}, n.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        const A = {};
        for (const [t, n] of Object.entries(this.fields))A[t] = n.toJson(e);
        return A;
    }
    fromJson(e, A) {
        if ("object" != typeof e || null == e || Array.isArray(e)) throw new Error("cannot decode google.protobuf.Struct from JSON " + n.proto3.json.debug(e));
        for (const [A, t] of Object.entries(e))this.fields[A] = a.fromJson(t);
        return this;
    }
    static fromBinary(e, A) {
        return (new s).fromBinary(e, A);
    }
    static fromJson(e, A) {
        return (new s).fromJson(e, A);
    }
    static fromJsonString(e, A) {
        return (new s).fromJsonString(e, A);
    }
    static equals(e, A) {
        return n.proto3.util.equals(s, e, A);
    }
}
exports.Struct = s, s.runtime = n.proto3, s.typeName = "google.protobuf.Struct", s.fields = n.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "fields",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: a
            }
        }
    ]);
class a extends r.Message {
    constructor(e){
        super(), this.kind = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        switch(this.kind.case){
            case "nullValue":
                return null;
            case "numberValue":
                if (!Number.isFinite(this.kind.value)) throw new Error("google.protobuf.Value cannot be NaN or Infinity");
                return this.kind.value;
            case "boolValue":
            case "stringValue":
                return this.kind.value;
            case "structValue":
            case "listValue":
                return this.kind.value.toJson(Object.assign(Object.assign({}, e), {
                    emitDefaultValues: !0
                }));
        }
        throw new Error("google.protobuf.Value must have a value");
    }
    fromJson(e, A) {
        switch(typeof e){
            case "number":
                this.kind = {
                    case: "numberValue",
                    value: e
                };
                break;
            case "string":
                this.kind = {
                    case: "stringValue",
                    value: e
                };
                break;
            case "boolean":
                this.kind = {
                    case: "boolValue",
                    value: e
                };
                break;
            case "object":
                null === e ? this.kind = {
                    case: "nullValue",
                    value: o.NULL_VALUE
                } : Array.isArray(e) ? this.kind = {
                    case: "listValue",
                    value: i.fromJson(e)
                } : this.kind = {
                    case: "structValue",
                    value: s.fromJson(e)
                };
                break;
            default:
                throw new Error("cannot decode google.protobuf.Value from JSON " + n.proto3.json.debug(e));
        }
        return this;
    }
    static fromBinary(e, A) {
        return (new a).fromBinary(e, A);
    }
    static fromJson(e, A) {
        return (new a).fromJson(e, A);
    }
    static fromJsonString(e, A) {
        return (new a).fromJsonString(e, A);
    }
    static equals(e, A) {
        return n.proto3.util.equals(a, e, A);
    }
}
exports.Value = a, a.runtime = n.proto3, a.typeName = "google.protobuf.Value", a.fields = n.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "null_value",
            kind: "enum",
            T: n.proto3.getEnumType(o),
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
            T: s,
            oneof: "kind"
        },
        {
            no: 6,
            name: "list_value",
            kind: "message",
            T: i,
            oneof: "kind"
        }
    ]);
class i extends r.Message {
    constructor(e){
        super(), this.values = [], n.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return this.values.map((e)=>e.toJson());
    }
    fromJson(e, A) {
        if (!Array.isArray(e)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + n.proto3.json.debug(e));
        for (let A of e)this.values.push(a.fromJson(A));
        return this;
    }
    static fromBinary(e, A) {
        return (new i).fromBinary(e, A);
    }
    static fromJson(e, A) {
        return (new i).fromJson(e, A);
    }
    static fromJsonString(e, A) {
        return (new i).fromJsonString(e, A);
    }
    static equals(e, A) {
        return n.proto3.util.equals(i, e, A);
    }
}
exports.ListValue = i, i.runtime = n.proto3, i.typeName = "google.protobuf.ListValue", i.fields = n.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "values",
            kind: "message",
            T: a,
            repeated: !0
        }
    ]);
