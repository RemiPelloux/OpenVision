import { Dm, Ude } from "./message.js";
import { R_t, X9 } from "./proto-int64.js";
import { bAe, x } from "./proto3.js";
import { E } from "./tslib.es6.js";
var fei, Js;
export { Js, fei };
var __wakaru_fpn_initialized = false;
export function fpn() {
if (__wakaru_fpn_initialized) return;
__wakaru_fpn_initialized = true;
"use strict";
E(), Ude(), R_t(), bAe(), fei = class Dsn extends Dm {
    constructor(e){
        super(), this.seconds = X9.zero, this.nanos = 0, x.util.initPartial(e, this);
    }
    fromJson(e, n) {
        if (typeof e != "string") throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${x.json.debug(e)}`);
        const i = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!i) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const r = Date.parse(i[1] + "-" + i[2] + "-" + i[3] + "T" + i[4] + ":" + i[5] + ":" + i[6] + (i[8] ? i[8] : "Z"));
        if (Number.isNaN(r)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (r < Date.parse("0001-01-01T00:00:00Z") || r > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = X9.parse(r / 1e3), this.nanos = 0, i[7] && (this.nanos = parseInt("1" + i[7] + "0".repeat(9 - i[7].length)) - 1e9), this;
    }
    toJson(e) {
        const n = Number(this.seconds) * 1e3;
        if (n < Date.parse("0001-01-01T00:00:00Z") || n > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let i = "Z";
        if (this.nanos > 0) {
            const r = (this.nanos + 1e9).toString().substring(1);
            r.substring(3) === "000000" ? i = "." + r.substring(0, 3) + "Z" : r.substring(6) === "000" ? i = "." + r.substring(0, 6) + "Z" : i = "." + r + "Z";
        }
        return new Date(n).toISOString().replace(".000Z", i);
    }
    toDate() {
        return new Date(Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6));
    }
    static now() {
        return Dsn.fromDate(new Date);
    }
    static fromDate(e) {
        const n = e.getTime();
        return new Dsn({
            seconds: X9.parse(Math.floor(n / 1e3)),
            nanos: n % 1e3 * 1e6
        });
    }
    static fromBinary(e, n) {
        return new Dsn().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new Dsn().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new Dsn().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(Dsn, e, n);
    }
}, fei.runtime = x, fei.typeName = "google.protobuf.Timestamp", fei.fields = x.util.newFieldList(()=>[
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
    ]), Js = fei;

}
