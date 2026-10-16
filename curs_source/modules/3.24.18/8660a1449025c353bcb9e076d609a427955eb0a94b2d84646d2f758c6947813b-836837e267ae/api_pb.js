import { Dm, Ude } from "./message.js";
import { bAe, x } from "./proto3.js";
import { aDo, kbr } from "./source_context_pb.js";
import { E } from "./tslib.es6.js";
import { Bet, Vdd, d4t } from "./type_pb.js";
var Ibr, Pei, Kdd, Mei, Ydd;
export { Ibr, Kdd, Mei, Pei, Ydd };
var __wakaru_sIy_initialized = false;
export function sIy() {
if (__wakaru_sIy_initialized) return;
__wakaru_sIy_initialized = true;
"use strict";
E(), Ude(), Vdd(), aDo(), bAe(), Ibr = class pZi extends Dm {
    constructor(e){
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = Bet.PROTO2, x.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new pZi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new pZi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new pZi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(pZi, e, n);
    }
}, Ibr.runtime = x, Ibr.typeName = "google.protobuf.Api", Ibr.fields = x.util.newFieldList(()=>[
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
            T: Kdd,
            repeated: !0
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: d4t,
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
            T: kbr
        },
        {
            no: 6,
            name: "mixins",
            kind: "message",
            T: Ydd,
            repeated: !0
        },
        {
            no: 7,
            name: "syntax",
            kind: "enum",
            T: x.getEnumType(Bet)
        }
    ]), Pei = class mZi extends Dm {
    constructor(e){
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = !1, this.responseTypeUrl = "", this.responseStreaming = !1, this.options = [], this.syntax = Bet.PROTO2, x.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new mZi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new mZi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new mZi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(mZi, e, n);
    }
}, Pei.runtime = x, Pei.typeName = "google.protobuf.Method", Pei.fields = x.util.newFieldList(()=>[
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
            T: d4t,
            repeated: !0
        },
        {
            no: 7,
            name: "syntax",
            kind: "enum",
            T: x.getEnumType(Bet)
        }
    ]), Kdd = Pei, Mei = class gZi extends Dm {
    constructor(e){
        super(), this.name = "", this.root = "", x.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new gZi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new gZi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new gZi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(gZi, e, n);
    }
}, Mei.runtime = x, Mei.typeName = "google.protobuf.Mixin", Mei.fields = x.util.newFieldList(()=>[
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
    ]), Ydd = Mei;

}
