Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Mixin = exports.Method = exports.Api = void 0;
const r = require("./module-193.js"), o = require("./module-469.js"), a = require("./module-206.js"), s = require("./module-599.js");
class i extends r.Message {
    constructor(e){
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = o.Syntax.PROTO2, s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(i, e, t);
    }
}
exports.Api = i, i.runtime = s.proto3, i.typeName = "google.protobuf.Api", i.fields = s.proto3.util.newFieldList(()=>[
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
            T: l,
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
            T: a.SourceContext
        },
        {
            no: 6,
            name: "mixins",
            kind: "message",
            T: u,
            repeated: !0
        },
        {
            no: 7,
            name: "syntax",
            kind: "enum",
            T: s.proto3.getEnumType(o.Syntax)
        }
    ]);
class l extends r.Message {
    constructor(e){
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = !1, this.responseTypeUrl = "", this.responseStreaming = !1, this.options = [], this.syntax = o.Syntax.PROTO2, s.proto3.util.initPartial(e, this);
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
        return s.proto3.util.equals(l, e, t);
    }
}
exports.Method = l, l.runtime = s.proto3, l.typeName = "google.protobuf.Method", l.fields = s.proto3.util.newFieldList(()=>[
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
            T: s.proto3.getEnumType(o.Syntax)
        }
    ]);
class u extends r.Message {
    constructor(e){
        super(), this.name = "", this.root = "", s.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new u).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new u).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new u).fromJsonString(e, t);
    }
    static equals(e, t) {
        return s.proto3.util.equals(u, e, t);
    }
}
exports.Mixin = u, u.runtime = s.proto3, u.typeName = "google.protobuf.Mixin", u.fields = s.proto3.util.newFieldList(()=>[
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
