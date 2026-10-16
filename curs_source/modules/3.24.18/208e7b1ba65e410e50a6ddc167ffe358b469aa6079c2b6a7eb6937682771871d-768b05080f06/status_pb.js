import { VM } from "./any_pb.js";
import { fe } from "./message.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Ly;
export { Ly };
var __wakaru_qHe_initialized = false;
export function qHe() {
if (__wakaru_qHe_initialized) return;
__wakaru_qHe_initialized = true;
"use strict";
h(), F(), Ly = class _v extends fe {
    constructor(t){
        super(), this.code = 0, this.message = "", this.details = [], c.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new _v().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new _v().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new _v().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(_v, t, n);
    }
}, Ly.runtime = c, Ly.typeName = "google.rpc.Status", Ly.fields = c.util.newFieldList(()=>[
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
            T: VM,
            repeated: !0
        }
    ]);

}
