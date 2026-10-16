import { yss } from "./any_pb.js";
import { yg } from "./message.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var E7i;
export { E7i };
var __wakaru_wbv_initialized = false;
export function wbv() {
if (__wakaru_wbv_initialized) return;
__wakaru_wbv_initialized = true;
"use strict";
x(), bi(), E7i = class hQn extends yg {
    constructor(t){
        super(), this.code = 0, this.message = "", this.details = [], k.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new hQn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new hQn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new hQn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(hQn, t, n);
    }
}, E7i.runtime = k, E7i.typeName = "google.rpc.Status", E7i.fields = k.util.newFieldList(()=>[
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
            T: yss,
            repeated: !0
        }
    ]);

}
