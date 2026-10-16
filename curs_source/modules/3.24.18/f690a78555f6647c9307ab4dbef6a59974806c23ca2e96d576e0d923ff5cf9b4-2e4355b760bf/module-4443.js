"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Mixin = exports.Method = exports.Api = void 0;
const n = require("./module-4193.js"), r = require("./module-3469.js"), o = require("./module-7206.js"), s = require("./module-7599.js");
class a extends n.Message {
    constructor(e){
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = r.Syntax.PROTO2, s.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, A) {
        return (new a).fromBinary(e, A);
    }
    static fromJson(e, A) {
        return (new a).fromJson(e, A);
    }
    static fromJsonString(e, A) {
        return (new a).fromJsonString(e, A);
    }
    static equals(e, A) {
        return s.proto3.util.equals(a, e, A);
    }
}
exports.Api = a, a.runtime = s.proto3, a.typeName = "google.protobuf.Api", a.fields = s.proto3.util.newFieldList(()=>[
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
            T: i,
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
class i extends n.Message {
    constructor(e){
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = !1, this.responseTypeUrl = "", this.responseStreaming = !1, this.options = [], this.syntax = r.Syntax.PROTO2, s.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, A) {
        return (new i).fromBinary(e, A);
    }
    static fromJson(e, A) {
        return (new i).fromJson(e, A);
    }
    static fromJsonString(e, A) {
        return (new i).fromJsonString(e, A);
    }
    static equals(e, A) {
        return s.proto3.util.equals(i, e, A);
    }
}
exports.Method = i, i.runtime = s.proto3, i.typeName = "google.protobuf.Method", i.fields = s.proto3.util.newFieldList(()=>[
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
    static fromBinary(e, A) {
        return (new c).fromBinary(e, A);
    }
    static fromJson(e, A) {
        return (new c).fromJson(e, A);
    }
    static fromJsonString(e, A) {
        return (new c).fromJsonString(e, A);
    }
    static equals(e, A) {
        return s.proto3.util.equals(c, e, A);
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
