import { IJ, yg } from "./message.js";
import { AKe, _5 } from "./proto-int64.js";
import { hfe, k } from "./proto3.js";
import { x } from "./tslib.es6.js";
var abn, f3t;
export { abn, f3t };
var __wakaru_bss_initialized = false;
export function bss() {
if (__wakaru_bss_initialized) return;
__wakaru_bss_initialized = true;
"use strict";
x(), IJ(), AKe(), hfe(), abn = class AZn extends yg {
    constructor(t){
        super(), this.seconds = _5.zero, this.nanos = 0, k.util.initPartial(t, this);
    }
    fromJson(t, n) {
        if (typeof t != "string") throw new Error(`cannot decode google.protobuf.Duration from JSON: ${k.json.debug(t)}`);
        const i = t.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (i === null) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${k.json.debug(t)}`);
        const r = Number(i[1]);
        if (r > 315576e6 || r < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${k.json.debug(t)}`);
        if (this.seconds = _5.parse(r), typeof i[2] == "string") {
            const s = i[2] + "0".repeat(9 - i[2].length);
            this.nanos = parseInt(s), (r < 0 || Object.is(r, -0)) && (this.nanos = -this.nanos);
        }
        return this;
    }
    toJson(t) {
        if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
        let n = this.seconds.toString();
        if (this.nanos !== 0) {
            let i = Math.abs(this.nanos).toString();
            i = "0".repeat(9 - i.length) + i, i.substring(3) === "000000" ? i = i.substring(0, 3) : i.substring(6) === "000" && (i = i.substring(0, 6)), n += "." + i, this.nanos < 0 && Number(this.seconds) == 0 && (n = "-" + n);
        }
        return n + "s";
    }
    static fromBinary(t, n) {
        return new AZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new AZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new AZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(AZn, t, n);
    }
}, abn.runtime = k, abn.typeName = "google.protobuf.Duration", abn.fields = k.util.newFieldList(()=>[
        {
            no: 1,
            name: "seconds",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "nanos",
            kind: "scalar",
            T: 5
        }
    ]), f3t = abn;

}
