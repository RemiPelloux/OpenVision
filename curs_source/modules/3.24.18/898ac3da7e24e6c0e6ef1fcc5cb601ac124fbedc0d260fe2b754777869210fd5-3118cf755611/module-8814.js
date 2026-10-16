"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ListValue = exports.Value = exports.Struct = exports.NullValue = void 0;
const t = require("./module-7599.js"), s = require("./module-4193.js");
var o;
!function(e) {
    e[e.NULL_VALUE = 0] = "NULL_VALUE";
}(o || (exports.NullValue = o = {})), t.proto3.util.setEnumType(o, "google.protobuf.NullValue", [
    {
        no: 0,
        name: "NULL_VALUE"
    }
]);
class r extends s.Message {
    constructor(e){
        super(), this.fields = {}, t.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        const n = {};
        for (const [a, t] of Object.entries(this.fields))n[a] = t.toJson(e);
        return n;
    }
    fromJson(e, n) {
        if ("object" != typeof e || null == e || Array.isArray(e)) throw new Error("cannot decode google.protobuf.Struct from JSON " + t.proto3.json.debug(e));
        for (const [n, a] of Object.entries(e))this.fields[n] = i.fromJson(a);
        return this;
    }
    static fromBinary(e, n) {
        return (new r).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new r).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new r).fromJsonString(e, n);
    }
    static equals(e, n) {
        return t.proto3.util.equals(r, e, n);
    }
}
exports.Struct = r, r.runtime = t.proto3, r.typeName = "google.protobuf.Struct", r.fields = t.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "fields",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: i
            }
        }
    ]);
class i extends s.Message {
    constructor(e){
        super(), this.kind = {
            case: void 0
        }, t.proto3.util.initPartial(e, this);
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
    fromJson(e, n) {
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
                    value: A.fromJson(e)
                } : this.kind = {
                    case: "structValue",
                    value: r.fromJson(e)
                };
                break;
            default:
                throw new Error("cannot decode google.protobuf.Value from JSON " + t.proto3.json.debug(e));
        }
        return this;
    }
    static fromBinary(e, n) {
        return (new i).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new i).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new i).fromJsonString(e, n);
    }
    static equals(e, n) {
        return t.proto3.util.equals(i, e, n);
    }
}
exports.Value = i, i.runtime = t.proto3, i.typeName = "google.protobuf.Value", i.fields = t.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "null_value",
            kind: "enum",
            T: t.proto3.getEnumType(o),
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
            T: r,
            oneof: "kind"
        },
        {
            no: 6,
            name: "list_value",
            kind: "message",
            T: A,
            oneof: "kind"
        }
    ]);
class A extends s.Message {
    constructor(e){
        super(), this.values = [], t.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return this.values.map((e)=>e.toJson());
    }
    fromJson(e, n) {
        if (!Array.isArray(e)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + t.proto3.json.debug(e));
        for (let n of e)this.values.push(i.fromJson(n));
        return this;
    }
    static fromBinary(e, n) {
        return (new A).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new A).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new A).fromJsonString(e, n);
    }
    static equals(e, n) {
        return t.proto3.util.equals(A, e, n);
    }
}
exports.ListValue = A, A.runtime = t.proto3, A.typeName = "google.protobuf.ListValue", A.fields = t.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "values",
            kind: "message",
            T: i,
            repeated: !0
        }
    ]);
