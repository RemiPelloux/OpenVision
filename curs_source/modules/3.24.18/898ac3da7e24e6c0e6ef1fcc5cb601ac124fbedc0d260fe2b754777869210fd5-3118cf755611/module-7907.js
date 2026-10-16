"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Timestamp = void 0;
const t = require("./module-4193.js"), s = require("./module-1498.js"), o = require("./module-7599.js");
class r extends t.Message {
    constructor(e){
        super(), this.seconds = s.protoInt64.zero, this.nanos = 0, o.proto3.util.initPartial(e, this);
    }
    fromJson(e, n) {
        if ("string" != typeof e) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${o.proto3.json.debug(e)}`);
        const a = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!a) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const t = Date.parse(a[1] + "-" + a[2] + "-" + a[3] + "T" + a[4] + ":" + a[5] + ":" + a[6] + (a[8] ? a[8] : "Z"));
        if (Number.isNaN(t)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (t < Date.parse("0001-01-01T00:00:00Z") || t > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = s.protoInt64.parse(t / 1e3), this.nanos = 0, a[7] && (this.nanos = parseInt("1" + a[7] + "0".repeat(9 - a[7].length)) - 1e9), this;
    }
    toJson(e) {
        const n = 1e3 * Number(this.seconds);
        if (n < Date.parse("0001-01-01T00:00:00Z") || n > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let a = "Z";
        if (this.nanos > 0) {
            const e = (this.nanos + 1e9).toString().substring(1);
            a = "000000" === e.substring(3) ? "." + e.substring(0, 3) + "Z" : "000" === e.substring(6) ? "." + e.substring(0, 6) + "Z" : "." + e + "Z";
        }
        return new Date(n).toISOString().replace(".000Z", a);
    }
    toDate() {
        return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
    }
    static now() {
        return r.fromDate(new Date);
    }
    static fromDate(e) {
        const n = e.getTime();
        return new r({
            seconds: s.protoInt64.parse(Math.floor(n / 1e3)),
            nanos: n % 1e3 * 1e6
        });
    }
    static fromBinary(e, n) {
        return (new r).fromBinary(e, n);
    }
    static fromJson(e, n) {
        return (new r).fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return (new r).fromJsonString(e, n);
    }
    static equals(e, n) {
        return o.proto3.util.equals(r, e, n);
    }
}
exports.Timestamp = r, r.runtime = o.proto3, r.typeName = "google.protobuf.Timestamp", r.fields = o.proto3.util.newFieldList(()=>[
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
