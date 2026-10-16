import { $r, fe } from "./message.js";
import { $s, c } from "./proto3.js";
import { Ey, qM } from "./source_context_pb.js";
import { h } from "./tslib.es6.js";
import { Gc, IH, Ra } from "./type_pb.js";
var Ay, Sg, AH, yg, MH;
export { AH, Ay, MH, Sg, yg };
var __wakaru_hHe_initialized = false;
export function hHe() {
if (__wakaru_hHe_initialized) return;
__wakaru_hHe_initialized = true;
"use strict";
h(), $r(), IH(), qM(), $s(), Ay = class hv extends fe {
    constructor(t){
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = Ra.PROTO2, c.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new hv().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new hv().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new hv().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(hv, t, n);
    }
}, Ay.runtime = c, Ay.typeName = "google.protobuf.Api", Ay.fields = c.util.newFieldList(()=>[
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
            T: AH,
            repeated: !0
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: Gc,
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
            T: Ey
        },
        {
            no: 6,
            name: "mixins",
            kind: "message",
            T: MH,
            repeated: !0
        },
        {
            no: 7,
            name: "syntax",
            kind: "enum",
            T: c.getEnumType(Ra)
        }
    ]), Sg = class gv extends fe {
    constructor(t){
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = !1, this.responseTypeUrl = "", this.responseStreaming = !1, this.options = [], this.syntax = Ra.PROTO2, c.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new gv().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new gv().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new gv().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(gv, t, n);
    }
}, Sg.runtime = c, Sg.typeName = "google.protobuf.Method", Sg.fields = c.util.newFieldList(()=>[
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
            T: Gc,
            repeated: !0
        },
        {
            no: 7,
            name: "syntax",
            kind: "enum",
            T: c.getEnumType(Ra)
        }
    ]), AH = Sg, yg = class fv extends fe {
    constructor(t){
        super(), this.name = "", this.root = "", c.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new fv().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new fv().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new fv().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(fv, t, n);
    }
}, yg.runtime = c, yg.typeName = "google.protobuf.Mixin", yg.fields = c.util.newFieldList(()=>[
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
    ]), MH = yg;

}
