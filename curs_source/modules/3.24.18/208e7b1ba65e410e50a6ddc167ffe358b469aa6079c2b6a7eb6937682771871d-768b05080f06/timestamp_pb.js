import { $r, fe } from "./message.js";
import { In, ho } from "./proto-int64.js";
import { $s, c } from "./proto3.js";
import { h } from "./tslib.es6.js";
var cg, Bc;
export { Bc, cg };
var __wakaru_vH_initialized = false;
export function vH() {
if (__wakaru_vH_initialized) return;
__wakaru_vH_initialized = true;
"use strict";
h(), $r(), ho(), $s(), cg = class Sl extends fe {
    constructor(t){
        super(), this.seconds = In.zero, this.nanos = 0, c.util.initPartial(t, this);
    }
    fromJson(t, n) {
        if (typeof t != "string") throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${c.json.debug(t)}`);
        const r = t.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!r) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const s = Date.parse(r[1] + "-" + r[2] + "-" + r[3] + "T" + r[4] + ":" + r[5] + ":" + r[6] + (r[8] ? r[8] : "Z"));
        if (Number.isNaN(s)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (s < Date.parse("0001-01-01T00:00:00Z") || s > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = In.parse(s / 1e3), this.nanos = 0, r[7] && (this.nanos = parseInt("1" + r[7] + "0".repeat(9 - r[7].length)) - 1e9), this;
    }
    toJson(t) {
        const n = Number(this.seconds) * 1e3;
        if (n < Date.parse("0001-01-01T00:00:00Z") || n > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let r = "Z";
        if (this.nanos > 0) {
            const s = (this.nanos + 1e9).toString().substring(1);
            s.substring(3) === "000000" ? r = "." + s.substring(0, 3) + "Z" : s.substring(6) === "000" ? r = "." + s.substring(0, 6) + "Z" : r = "." + s + "Z";
        }
        return new Date(n).toISOString().replace(".000Z", r);
    }
    toDate() {
        return new Date(Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6));
    }
    static now() {
        return Sl.fromDate(new Date);
    }
    static fromDate(t) {
        const n = t.getTime();
        return new Sl({
            seconds: In.parse(Math.floor(n / 1e3)),
            nanos: n % 1e3 * 1e6
        });
    }
    static fromBinary(t, n) {
        return new Sl().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new Sl().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new Sl().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(Sl, t, n);
    }
}, cg.runtime = c, cg.typeName = "google.protobuf.Timestamp", cg.fields = c.util.newFieldList(()=>[
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
    ]), Bc = cg;

}
