import { IJ, yg } from "./message.js";
import { hfe, k } from "./proto3.js";
import { Css, HSi } from "./source_context_pb.js";
import { x } from "./tslib.es6.js";
import { Imt, uVc, w5e } from "./type_pb.js";
var qSi, Sbn, dVc, kbn, hVc;
export { Sbn, dVc, hVc, kbn, qSi };
var __wakaru_Pwg_initialized = false;
export function Pwg() {
if (__wakaru_Pwg_initialized) return;
__wakaru_Pwg_initialized = true;
"use strict";
x(), IJ(), uVc(), Css(), hfe(), qSi = class eQn extends yg {
    constructor(t){
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = w5e.PROTO2, k.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new eQn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new eQn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new eQn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(eQn, t, n);
    }
}, qSi.runtime = k, qSi.typeName = "google.protobuf.Api", qSi.fields = k.util.newFieldList(()=>[
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
            T: dVc,
            repeated: !0
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: Imt,
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
            T: HSi
        },
        {
            no: 6,
            name: "mixins",
            kind: "message",
            T: hVc,
            repeated: !0
        },
        {
            no: 7,
            name: "syntax",
            kind: "enum",
            T: k.getEnumType(w5e)
        }
    ]), Sbn = class tQn extends yg {
    constructor(t){
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = !1, this.responseTypeUrl = "", this.responseStreaming = !1, this.options = [], this.syntax = w5e.PROTO2, k.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new tQn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new tQn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new tQn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(tQn, t, n);
    }
}, Sbn.runtime = k, Sbn.typeName = "google.protobuf.Method", Sbn.fields = k.util.newFieldList(()=>[
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
            T: Imt,
            repeated: !0
        },
        {
            no: 7,
            name: "syntax",
            kind: "enum",
            T: k.getEnumType(w5e)
        }
    ]), dVc = Sbn, kbn = class nQn extends yg {
    constructor(t){
        super(), this.name = "", this.root = "", k.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new nQn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new nQn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new nQn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(nQn, t, n);
    }
}, kbn.runtime = k, kbn.typeName = "google.protobuf.Mixin", kbn.fields = k.util.newFieldList(()=>[
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
    ]), hVc = kbn;

}
