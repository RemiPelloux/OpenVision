"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Mixin = exports.Method = exports.Api = void 0;
const a = require("./module-4193.js"), s = require("./module-3469.js"), o = require("./module-7206.js"), r = require("./module-7599.js");
class i extends a.Message {
    constructor(e){
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = s.Syntax.PROTO2, r.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return (new i).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new i).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new i).fromJsonString(e, n);
    }
    static equals(e, n) {
        return r.proto3.util.equals(i, e, n);
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
            T: A,
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
            T: r.proto3.getEnumType(s.Syntax)
        }
    ]);
class A extends a.Message {
    constructor(e){
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = !1, this.responseTypeUrl = "", this.responseStreaming = !1, this.options = [], this.syntax = s.Syntax.PROTO2, r.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return (new A).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new A).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new A).fromJsonString(e, n);
    }
    static equals(e, n) {
        return r.proto3.util.equals(A, e, n);
    }
}
exports.Method = A, A.runtime = r.proto3, A.typeName = "google.protobuf.Method", A.fields = r.proto3.util.newFieldList(()=>[
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
class c extends a.Message {
    constructor(e){
        super(), this.name = "", this.root = "", r.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return (new c).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new c).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new c).fromJsonString(e, n);
    }
    static equals(e, n) {
        return r.proto3.util.equals(c, e, n);
    }
}
exports.Mixin = c, c.runtime = r.proto3, c.typeName = "google.protobuf.Mixin", c.fields = r.proto3.util.newFieldList(()=>[
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
