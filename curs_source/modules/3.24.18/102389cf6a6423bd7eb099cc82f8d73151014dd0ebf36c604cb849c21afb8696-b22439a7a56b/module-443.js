Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Mixin = exports.Method = exports.Api = void 0;
const o = require("./module-193.js"), s = require("./module-469.js"), t = require("./module-206.js"), r = require("./module-599.js");
class i extends o.Message {
    constructor(e){
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = s.Syntax.PROTO2, r.proto3.util.initPartial(e, this);
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
        return r.proto3.util.equals(i, e, a);
    }
}
exports.Api = i, i.runtime = r.proto3, i.typeName = "google.protobuf.Api", i.fields = r.proto3.util.newFieldList(()=>[
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
            T: s.Option,
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
            T: t.SourceContext
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
            T: r.proto3.getEnumType(s.Syntax)
        }
    ]);
class m extends o.Message {
    constructor(e){
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = !1, this.responseTypeUrl = "", this.responseStreaming = !1, this.options = [], this.syntax = s.Syntax.PROTO2, r.proto3.util.initPartial(e, this);
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
        return r.proto3.util.equals(m, e, a);
    }
}
exports.Method = m, m.runtime = r.proto3, m.typeName = "google.protobuf.Method", m.fields = r.proto3.util.newFieldList(()=>[
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
            T: s.Option,
            repeated: !0
        },
        {
            no: 7,
            name: "syntax",
            kind: "enum",
            T: r.proto3.getEnumType(s.Syntax)
        }
    ]);
class l extends o.Message {
    constructor(e){
        super(), this.name = "", this.root = "", r.proto3.util.initPartial(e, this);
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
        return r.proto3.util.equals(l, e, a);
    }
}
exports.Mixin = l, l.runtime = r.proto3, l.typeName = "google.protobuf.Mixin", l.fields = r.proto3.util.newFieldList(()=>[
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
