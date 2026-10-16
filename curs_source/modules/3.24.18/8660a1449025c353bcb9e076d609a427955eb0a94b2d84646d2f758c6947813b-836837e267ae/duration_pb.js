import { Dm, Ude } from "./message.js";
import { R_t, X9 } from "./proto-int64.js";
import { bAe, x } from "./proto3.js";
import { E } from "./tslib.es6.js";
var vei, vpn;
export { vei, vpn };
var __wakaru_nDo_initialized = false;
export function nDo() {
if (__wakaru_nDo_initialized) return;
__wakaru_nDo_initialized = true;
"use strict";
E(), Ude(), R_t(), bAe(), vei = class HXi extends Dm {
    constructor(e){
        super(), this.seconds = X9.zero, this.nanos = 0, x.util.initPartial(e, this);
    }
    fromJson(e, n) {
        if (typeof e != "string") throw new Error(`cannot decode google.protobuf.Duration from JSON: ${x.json.debug(e)}`);
        const i = e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (i === null) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${x.json.debug(e)}`);
        const r = Number(i[1]);
        if (r > 315576e6 || r < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${x.json.debug(e)}`);
        if (this.seconds = X9.parse(r), typeof i[2] == "string") {
            const s = i[2] + "0".repeat(9 - i[2].length);
            this.nanos = parseInt(s), (r < 0 || Object.is(r, -0)) && (this.nanos = -this.nanos);
        }
        return this;
    }
    toJson(e) {
        if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
        let n = this.seconds.toString();
        if (this.nanos !== 0) {
            let i = Math.abs(this.nanos).toString();
            i = "0".repeat(9 - i.length) + i, i.substring(3) === "000000" ? i = i.substring(0, 3) : i.substring(6) === "000" && (i = i.substring(0, 6)), n += "." + i, this.nanos < 0 && Number(this.seconds) == 0 && (n = "-" + n);
        }
        return n + "s";
    }
    static fromBinary(e, n) {
        return new HXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new HXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new HXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(HXi, e, n);
    }
}, vei.runtime = x, vei.typeName = "google.protobuf.Duration", vei.fields = x.util.newFieldList(()=>[
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
    ]), vpn = vei;

}
