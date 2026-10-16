Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ListValue = exports.Value = exports.Struct = exports.NullValue = void 0;
const r = require("./module-599.js"), o = require("./module-193.js");
var a;
!function(e) {
    e[e.NULL_VALUE = 0] = "NULL_VALUE";
}(a || (exports.NullValue = a = {})), r.proto3.util.setEnumType(a, "google.protobuf.NullValue", [
    {
        no: 0,
        name: "NULL_VALUE"
    }
]);
class s extends o.Message {
    constructor(e){
        super(), this.fields = {}, r.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        const t = {};
        for (const [n, r] of Object.entries(this.fields))t[n] = r.toJson(e);
        return t;
    }
    fromJson(e, t) {
        if ("object" != typeof e || null == e || Array.isArray(e)) throw new Error("cannot decode google.protobuf.Struct from JSON " + r.proto3.json.debug(e));
        for (const [t, n] of Object.entries(e))this.fields[t] = i.fromJson(n);
        return this;
    }
    static fromBinary(e, t) {
        return (new s).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new s).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new s).fromJsonString(e, t);
    }
    static equals(e, t) {
        return r.proto3.util.equals(s, e, t);
    }
}
exports.Struct = s, s.runtime = r.proto3, s.typeName = "google.protobuf.Struct", s.fields = r.proto3.util.newFieldList(()=>[
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
        }, r.proto3.util.initPartial(e, this);
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
    fromJson(e, t) {
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
                    value: a.NULL_VALUE
                } : Array.isArray(e) ? this.kind = {
                    case: "listValue",
                    value: l.fromJson(e)
                } : this.kind = {
                    case: "structValue",
                    value: s.fromJson(e)
                };
                break;
            default:
                throw new Error("cannot decode google.protobuf.Value from JSON " + r.proto3.json.debug(e));
        }
        return this;
    }
    static fromBinary(e, t) {
        return (new i).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new i).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new i).fromJsonString(e, t);
    }
    static equals(e, t) {
        return r.proto3.util.equals(i, e, t);
    }
}
exports.Value = i, i.runtime = r.proto3, i.typeName = "google.protobuf.Value", i.fields = r.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "null_value",
            kind: "enum",
            T: r.proto3.getEnumType(a),
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
            T: l,
            oneof: "kind"
        }
    ]);
class l extends o.Message {
    constructor(e){
        super(), this.values = [], r.proto3.util.initPartial(e, this);
    }
    toJson(e) {
        return this.values.map((e)=>e.toJson());
    }
    fromJson(e, t) {
        if (!Array.isArray(e)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + r.proto3.json.debug(e));
        for (let t of e)this.values.push(i.fromJson(t));
        return this;
    }
    static fromBinary(e, t) {
        return (new l).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new l).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new l).fromJsonString(e, t);
    }
    static equals(e, t) {
        return r.proto3.util.equals(l, e, t);
    }
}
exports.ListValue = l, l.runtime = r.proto3, l.typeName = "google.protobuf.ListValue", l.fields = r.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "values",
            kind: "message",
            T: i,
            repeated: !0
        }
    ]);
