Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Mixin = exports.Method = exports.Api = void 0;
const s = require("./module-4193.js"), o = require("./module-3469.js"), r = require("./module-7206.js"), t = require("./module-7599.js");
class i extends s.Message {
    constructor(e){
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = o.Syntax.PROTO2, t.proto3.util.initPartial(e, this);
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
exports.Api = i, i.runtime = t.proto3, i.typeName = "google.protobuf.Api", i.fields = t.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "methods",
            kind: "message",
            T: m,
            repeated: !0
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: o.Option,
            repeated: !0
        },
        {
            no: 4,
            name: "version",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "source_context",
            kind: "message",
            T: r.SourceContext
        },
        {
            no: 6,
            name: "mixins",
            kind: "message",
            T: l,
            repeated: !0
        },
        {
            no: 7,
            name: "syntax",
            kind: "enum",
            T: t.proto3.getEnumType(o.Syntax)
        }
    ]);
class m extends s.Message {
    constructor(e){
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = !1, this.responseTypeUrl = "", this.responseStreaming = !1, this.options = [], this.syntax = o.Syntax.PROTO2, t.proto3.util.initPartial(e, this);
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
        return t.proto3.util.equals(m, e, a);
    }
}
exports.Method = m, m.runtime = t.proto3, m.typeName = "google.protobuf.Method", m.fields = t.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "request_type_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "request_streaming",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "response_type_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "response_streaming",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "options",
            kind: "message",
            T: o.Option,
            repeated: !0
        },
        {
            no: 7,
            name: "syntax",
            kind: "enum",
            T: t.proto3.getEnumType(o.Syntax)
        }
    ]);
class l extends s.Message {
    constructor(e){
        super(), this.name = "", this.root = "", t.proto3.util.initPartial(e, this);
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
exports.Mixin = l, l.runtime = t.proto3, l.typeName = "google.protobuf.Mixin", l.fields = t.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "root",
            kind: "scalar",
            T: 9
        }
    ]);
