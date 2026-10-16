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
        const a = {};
        for (const [n, t] of Object.entries(this.fields))a[n] = t.toJson(e);
        return a;
    }
    fromJson(e, a) {
        if ("object" != typeof e || null == e || Array.isArray(e)) throw new Error("cannot decode google.protobuf.Struct from JSON " + t.proto3.json.debug(e));
        for (const [a, n] of Object.entries(e))this.fields[a] = i.fromJson(n);
        return this;
    }
    static fromBinary(e, a) {
        return (new r).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new r).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new r).fromJsonString(e, a);
    }
    static equals(e, a) {
        return t.proto3.util.equals(r, e, a);
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
    fromJson(e, a) {
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
                    value: l.fromJson(e)
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
    static fromBinary(e, a) {
        return (new i).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new i).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new i).fromJsonString(e, a);
    }
    static equals(e, a) {
        return t.proto3.util.equals(i, e, a);
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
            T: l,
            oneof: "kind"
        }
    ]);
class l extends s.Message {
    constructor(e){
        super(), this.values = [], t.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return this.values.map((e)=>e.toJson());
    }
    fromJson(e, a) {
        if (!Array.isArray(e)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + t.proto3.json.debug(e));
        for (let a of e)this.values.push(i.fromJson(a));
        return this;
    }
    static fromBinary(e, a) {
        return (new l).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new l).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new l).fromJsonString(e, a);
    }
    static equals(e, a) {
        return t.proto3.util.equals(l, e, a);
    }
}
exports.ListValue = l, l.runtime = t.proto3, l.typeName = "google.protobuf.ListValue", l.fields = t.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "values",
            kind: "message",
            T: i,
            repeated: !0
        }
    ]);
