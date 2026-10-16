import { IJ, yg } from "./message.js";
import { AKe, _5 } from "./proto-int64.js";
import { hfe, k } from "./proto3.js";
import { x } from "./tslib.es6.js";
var obn, Nr;
export { Nr, obn };
var __wakaru_g3t_initialized = false;
export function g3t() {
if (__wakaru_g3t_initialized) return;
__wakaru_g3t_initialized = true;
"use strict";
x(), IJ(), AKe(), hfe(), obn = class DAt extends yg {
    constructor(t){
        super(), this.seconds = _5.zero, this.nanos = 0, k.util.initPartial(t, this);
    }
    fromJson(t, n) {
        if (typeof t != "string") throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${k.json.debug(t)}`);
        const i = t.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!i) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const r = Date.parse(i[1] + "-" + i[2] + "-" + i[3] + "T" + i[4] + ":" + i[5] + ":" + i[6] + (i[8] ? i[8] : "Z"));
        if (Number.isNaN(r)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (r < Date.parse("0001-01-01T00:00:00Z") || r > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = _5.parse(r / 1e3), this.nanos = 0, i[7] && (this.nanos = parseInt("1" + i[7] + "0".repeat(9 - i[7].length)) - 1e9), this;
    }
    toJson(t) {
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
        return DAt.fromDate(new Date);
    }
    static fromDate(t) {
        const n = t.getTime();
        return new DAt({
            seconds: _5.parse(Math.floor(n / 1e3)),
            nanos: n % 1e3 * 1e6
        });
    }
    static fromBinary(t, n) {
        return new DAt().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new DAt().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new DAt().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(DAt, t, n);
    }
}, obn.runtime = k, obn.typeName = "google.protobuf.Timestamp", obn.fields = k.util.newFieldList(()=>[
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
    ]), Nr = obn;

}
