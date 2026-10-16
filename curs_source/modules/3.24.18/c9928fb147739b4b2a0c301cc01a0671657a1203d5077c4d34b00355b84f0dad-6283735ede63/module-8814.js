Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ListValue = exports.Value = exports.Struct = exports.NullValue = void 0;
const s = require("./module-7599.js"), o = require("./module-4193.js");
var r;
!function(e) {
    e[e.NULL_VALUE = 0] = "NULL_VALUE";
}(r || (exports.NullValue = r = {})), s.proto3.util.setEnumType(r, "google.protobuf.NullValue", [
    {
        no: 0,
        name: "NULL_VALUE"
    }
]);
class t extends o.Message {
    constructor(e){
        super(), this.fields = {}, s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        const a = {};
        for (const [n, s] of Object.entries(this.fields))a[n] = s.toJson(e);
        return a;
    }
    fromJson(e, a) {
        if ("object" != typeof e || null == e || Array.isArray(e)) throw new Error("cannot decode google.protobuf.Struct from JSON " + s.proto3.json.debug(e));
        for (const [a, n] of Object.entries(e))this.fields[a] = i.fromJson(n);
        return this;
    }
    static fromBinary(e, a) {
        return (new t).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new t).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new t).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto3.util.equals(t, e, a);
    }
}
exports.Struct = t, t.runtime = s.proto3, t.typeName = "google.protobuf.Struct", t.fields = s.proto3.util.newFieldList(()=>[
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
class i extends o.Message {
    constructor(e){
        super(), this.kind = {
            case: void 0
        }, s.proto3.util.initPartial(e, this);
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
                    value: r.NULL_VALUE
                } : Array.isArray(e) ? this.kind = {
                    case: "listValue",
                    value: m.fromJson(e)
                } : this.kind = {
                    case: "structValue",
                    value: t.fromJson(e)
                };
                break;
            default:
                throw new Error("cannot decode google.protobuf.Value from JSON " + s.proto3.json.debug(e));
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
        return s.proto3.util.equals(i, e, a);
    }
}
exports.Value = i, i.runtime = s.proto3, i.typeName = "google.protobuf.Value", i.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "null_value",
            kind: "enum",
            T: s.proto3.getEnumType(r),
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
            T: t,
            oneof: "kind"
        },
        {
            no: 6,
            name: "list_value",
            kind: "message",
            T: m,
            oneof: "kind"
        }
    ]);
class m extends o.Message {
    constructor(e){
        super(), this.values = [], s.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return this.values.map((e)=>e.toJson());
    }
    fromJson(e, a) {
        if (!Array.isArray(e)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + s.proto3.json.debug(e));
        for (let a of e)this.values.push(i.fromJson(a));
        return this;
    }
    static fromBinary(e, a) {
        return (new m).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new m).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new m).fromJsonString(e, a);
    }
    static equals(e, a) {
        return s.proto3.util.equals(m, e, a);
    }
}
exports.ListValue = m, m.runtime = s.proto3, m.typeName = "google.protobuf.ListValue", m.fields = s.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "values",
            kind: "message",
            T: i,
            repeated: !0
        }
    ]);
