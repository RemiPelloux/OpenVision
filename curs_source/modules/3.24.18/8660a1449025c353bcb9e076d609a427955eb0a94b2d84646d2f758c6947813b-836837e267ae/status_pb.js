import { iDo } from "./any_pb.js";
import { Dm } from "./message.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Kzr;
export { Kzr };
var __wakaru_B51_initialized = false;
export function B51() {
if (__wakaru_B51_initialized) return;
__wakaru_B51_initialized = true;
"use strict";
E(), hr(), Kzr = class GZi extends Dm {
    constructor(e){
        super(), this.code = 0, this.message = "", this.details = [], x.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new GZi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new GZi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new GZi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(GZi, e, n);
    }
}, Kzr.runtime = x, Kzr.typeName = "google.rpc.Status", Kzr.fields = x.util.newFieldList(()=>[
        {
            no: 1,
            name: "code",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "details",
            kind: "message",
            T: iDo,
            repeated: !0
        }
    ]);

}
