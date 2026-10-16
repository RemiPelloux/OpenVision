"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Mixin = exports.Method = exports.Api = void 0;
const n = require("./module-24193.js"), o = require("./module-73469.js"), s = require("./module-77206.js"), i = require("./module-27599.js");
class a extends n.Message {
    constructor(e){
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = o.Syntax.PROTO2, i.proto3.util.initPartial(e, this);
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
        return i.proto3.util.equals(a, e, t);
    }
}
exports.Api = a, a.runtime = i.proto3, a.typeName = "google.protobuf.Api", a.fields = i.proto3.util.newFieldList(()=>[
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
            T: s.SourceContext
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
            T: i.proto3.getEnumType(o.Syntax)
        }
    ]);
class l extends n.Message {
    constructor(e){
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = !1, this.responseTypeUrl = "", this.responseStreaming = !1, this.options = [], this.syntax = o.Syntax.PROTO2, i.proto3.util.initPartial(e, this);
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
        return i.proto3.util.equals(l, e, t);
    }
}
exports.Method = l, l.runtime = i.proto3, l.typeName = "google.protobuf.Method", l.fields = i.proto3.util.newFieldList(()=>[
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
            T: i.proto3.getEnumType(o.Syntax)
        }
    ]);
class c extends n.Message {
    constructor(e){
        super(), this.name = "", this.root = "", i.proto3.util.initPartial(e, this);
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
        return i.proto3.util.equals(c, e, t);
    }
}
exports.Mixin = c, c.runtime = i.proto3, c.typeName = "google.protobuf.Mixin", c.fields = i.proto3.util.newFieldList(()=>[
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
