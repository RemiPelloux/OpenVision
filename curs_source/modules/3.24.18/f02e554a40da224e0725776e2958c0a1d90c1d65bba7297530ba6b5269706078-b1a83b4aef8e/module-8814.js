"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ListValue = exports.Value = exports.Struct = exports.NullValue = void 0;
const n = require("./module-7599.js"), s = require("./module-4193.js");
var i;
!function(t) {
    t[t.NULL_VALUE = 0] = "NULL_VALUE";
}(i || (exports.NullValue = i = {})), n.proto3.util.setEnumType(i, "google.protobuf.NullValue", [
    {
        no: 0,
        name: "NULL_VALUE"
    }
]);
class o extends s.Message {
    constructor(t){
        super(), this.fields = {}, n.proto3.util.initPartial(t, this);
    }
    toJson(t) {
        const e = {};
        for (const [r, n] of Object.entries(this.fields))e[r] = n.toJson(t);
        return e;
    }
    fromJson(t, e) {
        if ("object" != typeof t || null == t || Array.isArray(t)) throw new Error("cannot decode google.protobuf.Struct from JSON " + n.proto3.json.debug(t));
        for (const [e, r] of Object.entries(t))this.fields[e] = a.fromJson(r);
        return this;
    }
    static fromBinary(t, e) {
        return (new o).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new o).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new o).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(o, t, e);
    }
}
exports.Struct = o, o.runtime = n.proto3, o.typeName = "google.protobuf.Struct", o.fields = n.proto3.util.newFieldList(()=>[
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
class a extends s.Message {
    constructor(t){
        super(), this.kind = {
            case: void 0
        }, n.proto3.util.initPartial(t, this);
    }
    toJson(t) {
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
                return this.kind.value.toJson(Object.assign(Object.assign({}, t), {
                    emitDefaultValues: !0
                }));
        }
        throw new Error("google.protobuf.Value must have a value");
    }
    fromJson(t, e) {
        switch(typeof t){
            case "number":
                this.kind = {
                    case: "numberValue",
                    value: t
                };
                break;
            case "string":
                this.kind = {
                    case: "stringValue",
                    value: t
                };
                break;
            case "boolean":
                this.kind = {
                    case: "boolValue",
                    value: t
                };
                break;
            case "object":
                null === t ? this.kind = {
                    case: "nullValue",
                    value: i.NULL_VALUE
                } : Array.isArray(t) ? this.kind = {
                    case: "listValue",
                    value: u.fromJson(t)
                } : this.kind = {
                    case: "structValue",
                    value: o.fromJson(t)
                };
                break;
            default:
                throw new Error("cannot decode google.protobuf.Value from JSON " + n.proto3.json.debug(t));
        }
        return this;
    }
    static fromBinary(t, e) {
        return (new a).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new a).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new a).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(a, t, e);
    }
}
exports.Value = a, a.runtime = n.proto3, a.typeName = "google.protobuf.Value", a.fields = n.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "null_value",
            kind: "enum",
            T: n.proto3.getEnumType(i),
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
            T: o,
            oneof: "kind"
        },
        {
            no: 6,
            name: "list_value",
            kind: "message",
            T: u,
            oneof: "kind"
        }
    ]);
class u extends s.Message {
    constructor(t){
        super(), this.values = [], n.proto3.util.initPartial(t, this);
    }
    toJson(t) {
        return this.values.map((t)=>t.toJson());
    }
    fromJson(t, e) {
        if (!Array.isArray(t)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + n.proto3.json.debug(t));
        for (let e of t)this.values.push(a.fromJson(e));
        return this;
    }
    static fromBinary(t, e) {
        return (new u).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new u).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new u).fromJsonString(t, e);
    }
    static equals(t, e) {
        return n.proto3.util.equals(u, t, e);
    }
}
exports.ListValue = u, u.runtime = n.proto3, u.typeName = "google.protobuf.ListValue", u.fields = n.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "values",
            kind: "message",
            T: a,
            repeated: !0
        }
    ]);
