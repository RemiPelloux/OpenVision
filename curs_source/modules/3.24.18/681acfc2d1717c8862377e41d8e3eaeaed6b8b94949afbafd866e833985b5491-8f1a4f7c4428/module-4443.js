"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Mixin = exports.Method = exports.Api = void 0;
const n = require("./module-4193.js"), r = require("./module-3469.js"), o = require("./module-7206.js"), s = require("./module-7599.js");
class i extends n.Message {
    constructor(e){
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = r.Syntax.PROTO2, s.proto3.util.initPartial(e, this);
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
            T: a,
            repeated: !0
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: r.Option,
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
            T: o.SourceContext
        },
        {
            no: 6,
            name: "mixins",
            kind: "message",
            T: c,
            repeated: !0
        },
        {
            no: 7,
            name: "syntax",
            kind: "enum",
            T: s.proto3.getEnumType(r.Syntax)
        }
    ]);
class a extends n.Message {
    constructor(e){
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = !1, this.responseTypeUrl = "", this.responseStreaming = !1, this.options = [], this.syntax = r.Syntax.PROTO2, s.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new a).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new a).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new a).fromJsonString(e, t);
    }
    static equals(e, t) {
        return s.proto3.util.equals(a, e, t);
    }
}
exports.Method = a, a.runtime = s.proto3, a.typeName = "google.protobuf.Method", a.fields = s.proto3.util.newFieldList(()=>[
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
            T: r.Option,
            repeated: !0
        },
        {
            no: 7,
            name: "syntax",
            kind: "enum",
            T: s.proto3.getEnumType(r.Syntax)
        }
    ]);
class c extends n.Message {
    constructor(e){
        super(), this.name = "", this.root = "", s.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new c).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new c).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new c).fromJsonString(e, t);
    }
    static equals(e, t) {
        return s.proto3.util.equals(c, e, t);
    }
}
exports.Mixin = c, c.runtime = s.proto3, c.typeName = "google.protobuf.Mixin", c.fields = s.proto3.util.newFieldList(()=>[
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
