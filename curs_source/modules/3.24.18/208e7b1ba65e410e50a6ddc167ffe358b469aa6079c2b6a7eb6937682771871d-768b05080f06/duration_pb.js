import { $r, fe } from "./message.js";
import { In, ho } from "./proto-int64.js";
import { $s, c } from "./proto3.js";
import { h } from "./tslib.es6.js";
var ky;
export { ky };
var __wakaru_TH_initialized = false;
export function TH() {
if (__wakaru_TH_initialized) return;
__wakaru_TH_initialized = true;
"use strict";
h(), $r(), ho(), $s(), ky = class $_ extends fe {
    constructor(t){
        super(), this.seconds = In.zero, this.nanos = 0, c.util.initPartial(t, this);
    }
    fromJson(t, n) {
        if (typeof t != "string") throw new Error(`cannot decode google.protobuf.Duration from JSON: ${c.json.debug(t)}`);
        const r = t.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (r === null) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${c.json.debug(t)}`);
        const s = Number(r[1]);
        if (s > 315576e6 || s < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${c.json.debug(t)}`);
        if (this.seconds = In.parse(s), typeof r[2] == "string") {
            const i = r[2] + "0".repeat(9 - r[2].length);
            this.nanos = parseInt(i), (s < 0 || Object.is(s, -0)) && (this.nanos = -this.nanos);
        }
        return this;
    }
    toJson(t) {
        if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
        let n = this.seconds.toString();
        if (this.nanos !== 0) {
            let r = Math.abs(this.nanos).toString();
            r = "0".repeat(9 - r.length) + r, r.substring(3) === "000000" ? r = r.substring(0, 3) : r.substring(6) === "000" && (r = r.substring(0, 6)), n += "." + r, this.nanos < 0 && Number(this.seconds) == 0 && (n = "-" + n);
        }
        return n + "s";
    }
    static fromBinary(t, n) {
        return new $_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new $_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new $_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals($_, t, n);
    }
}, ky.runtime = c, ky.typeName = "google.protobuf.Duration", ky.fields = c.util.newFieldList(()=>[
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
    ]);

}
