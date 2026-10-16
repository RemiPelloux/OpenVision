"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Mixin = exports.Method = exports.Api = void 0;
const n = require("./module-4193.js"), s = require("./module-3469.js"), i = require("./module-7206.js"), o = require("./module-7599.js");
class a extends n.Message {
    constructor(t){
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = s.Syntax.PROTO2, o.proto3.util.initPartial(t, this);
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
        return o.proto3.util.equals(a, t, e);
    }
}
exports.Api = a, a.runtime = o.proto3, a.typeName = "google.protobuf.Api", a.fields = o.proto3.util.newFieldList(()=>[
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
            T: u,
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
            T: i.SourceContext
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
            T: o.proto3.getEnumType(s.Syntax)
        }
    ]);
class u extends n.Message {
    constructor(t){
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = !1, this.responseTypeUrl = "", this.responseStreaming = !1, this.options = [], this.syntax = s.Syntax.PROTO2, o.proto3.util.initPartial(t, this);
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
        return o.proto3.util.equals(u, t, e);
    }
}
exports.Method = u, u.runtime = o.proto3, u.typeName = "google.protobuf.Method", u.fields = o.proto3.util.newFieldList(()=>[
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
            T: o.proto3.getEnumType(s.Syntax)
        }
    ]);
class c extends n.Message {
    constructor(t){
        super(), this.name = "", this.root = "", o.proto3.util.initPartial(t, this);
    }
    static fromBinary(t, e) {
        return (new c).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new c).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new c).fromJsonString(t, e);
    }
    static equals(t, e) {
        return o.proto3.util.equals(c, t, e);
    }
}
exports.Mixin = c, c.runtime = o.proto3, c.typeName = "google.protobuf.Mixin", c.fields = o.proto3.util.newFieldList(()=>[
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
