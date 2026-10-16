Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Option = exports.EnumValue = exports.Enum = exports.Field_Cardinality = exports.Field_Kind = exports.Field = exports.Type = exports.Syntax = void 0;
const o = require("./module-599.js"), s = require("./module-193.js"), t = require("./module-206.js"), r = require("./module-245.js");
var i, m, l;
!function(e) {
    e[e.PROTO2 = 0] = "PROTO2", e[e.PROTO3 = 1] = "PROTO3", e[e.EDITIONS = 2] = "EDITIONS";
}(i || (exports.Syntax = i = {})), o.proto3.util.setEnumType(i, "google.protobuf.Syntax", [
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
class d extends s.Message {
    constructor(e){
        super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = i.PROTO2, this.edition = "", o.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new d).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new d).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new d).fromJsonString(e, a);
    }
    static equals(e, a) {
        return o.proto3.util.equals(d, e, a);
    }
}
exports.Type = d, d.runtime = o.proto3, d.typeName = "google.protobuf.Type", d.fields = o.proto3.util.newFieldList(()=>[
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
            T: c,
            repeated: !0
        },
        {
            no: 3,
            name: "oneofs",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "options",
            kind: "message",
            T: p,
            repeated: !0
        },
        {
            no: 5,
            name: "source_context",
            kind: "message",
            T: t.SourceContext
        },
        {
            no: 6,
            name: "syntax",
            kind: "enum",
            T: o.proto3.getEnumType(i)
        },
        {
            no: 7,
            name: "edition",
            kind: "scalar",
            T: 9
        }
    ]);
class c extends s.Message {
    constructor(e){
        super(), this.kind = m.TYPE_UNKNOWN, this.cardinality = l.UNKNOWN, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = !1, this.options = [], this.jsonName = "", this.defaultValue = "", o.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new c).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new c).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new c).fromJsonString(e, a);
    }
    static equals(e, a) {
        return o.proto3.util.equals(c, e, a);
    }
}
exports.Field = c, c.runtime = o.proto3, c.typeName = "google.protobuf.Field", c.fields = o.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: o.proto3.getEnumType(m)
        },
        {
            no: 2,
            name: "cardinality",
            kind: "enum",
            T: o.proto3.getEnumType(l)
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
            T: p,
            repeated: !0
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
    ]), function(e) {
    e[e.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", e[e.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", e[e.TYPE_FLOAT = 2] = "TYPE_FLOAT", e[e.TYPE_INT64 = 3] = "TYPE_INT64", e[e.TYPE_UINT64 = 4] = "TYPE_UINT64", e[e.TYPE_INT32 = 5] = "TYPE_INT32", e[e.TYPE_FIXED64 = 6] = "TYPE_FIXED64", e[e.TYPE_FIXED32 = 7] = "TYPE_FIXED32", e[e.TYPE_BOOL = 8] = "TYPE_BOOL", e[e.TYPE_STRING = 9] = "TYPE_STRING", e[e.TYPE_GROUP = 10] = "TYPE_GROUP", e[e.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", e[e.TYPE_BYTES = 12] = "TYPE_BYTES", e[e.TYPE_UINT32 = 13] = "TYPE_UINT32", e[e.TYPE_ENUM = 14] = "TYPE_ENUM", e[e.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", e[e.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", e[e.TYPE_SINT32 = 17] = "TYPE_SINT32", e[e.TYPE_SINT64 = 18] = "TYPE_SINT64";
}(m || (exports.Field_Kind = m = {})), o.proto3.util.setEnumType(m, "google.protobuf.Field.Kind", [
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
]), function(e) {
    e[e.UNKNOWN = 0] = "UNKNOWN", e[e.OPTIONAL = 1] = "OPTIONAL", e[e.REQUIRED = 2] = "REQUIRED", e[e.REPEATED = 3] = "REPEATED";
}(l || (exports.Field_Cardinality = l = {})), o.proto3.util.setEnumType(l, "google.protobuf.Field.Cardinality", [
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
class T extends s.Message {
    constructor(e){
        super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = i.PROTO2, this.edition = "", o.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new T).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new T).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new T).fromJsonString(e, a);
    }
    static equals(e, a) {
        return o.proto3.util.equals(T, e, a);
    }
}
exports.Enum = T, T.runtime = o.proto3, T.typeName = "google.protobuf.Enum", T.fields = o.proto3.util.newFieldList(()=>[
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
            T: _,
            repeated: !0
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: p,
            repeated: !0
        },
        {
            no: 4,
            name: "source_context",
            kind: "message",
            T: t.SourceContext
        },
        {
            no: 5,
            name: "syntax",
            kind: "enum",
            T: o.proto3.getEnumType(i)
        },
        {
            no: 6,
            name: "edition",
            kind: "scalar",
            T: 9
        }
    ]);
class _ extends s.Message {
    constructor(e){
        super(), this.name = "", this.number = 0, this.options = [], o.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new _).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new _).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new _).fromJsonString(e, a);
    }
    static equals(e, a) {
        return o.proto3.util.equals(_, e, a);
    }
}
exports.EnumValue = _, _.runtime = o.proto3, _.typeName = "google.protobuf.EnumValue", _.fields = o.proto3.util.newFieldList(()=>[
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
            T: p,
            repeated: !0
        }
    ]);
class p extends s.Message {
    constructor(e){
        super(), this.name = "", o.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, a) {
        return (new p).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new p).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new p).fromJsonString(e, a);
    }
    static equals(e, a) {
        return o.proto3.util.equals(p, e, a);
    }
}
exports.Option = p, p.runtime = o.proto3, p.typeName = "google.protobuf.Option", p.fields = o.proto3.util.newFieldList(()=>[
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
            T: r.Any
        }
    ]);
