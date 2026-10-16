"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Timestamp = void 0;
const n = require("./module-4193.js"), r = require("./module-1498.js"), o = require("./module-7599.js");
class s extends n.Message {
    constructor(e){
        super(), this.seconds = r.protoInt64.zero, this.nanos = 0, o.proto3.util.initPartial(e, this);
    }
    fromJson(e, t) {
        if ("string" != typeof e) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${o.proto3.json.debug(e)}`);
        const A = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!A) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const n = Date.parse(A[1] + "-" + A[2] + "-" + A[3] + "T" + A[4] + ":" + A[5] + ":" + A[6] + (A[8] ? A[8] : "Z"));
        if (Number.isNaN(n)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (n < Date.parse("0001-01-01T00:00:00Z") || n > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = r.protoInt64.parse(n / 1e3), this.nanos = 0, A[7] && (this.nanos = parseInt("1" + A[7] + "0".repeat(9 - A[7].length)) - 1e9), this;
    }
    toJson(e) {
        const t = 1e3 * Number(this.seconds);
        if (t < Date.parse("0001-01-01T00:00:00Z") || t > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let A = "Z";
        if (this.nanos > 0) {
            const e = (this.nanos + 1e9).toString().substring(1);
            A = "000000" === e.substring(3) ? "." + e.substring(0, 3) + "Z" : "000" === e.substring(6) ? "." + e.substring(0, 6) + "Z" : "." + e + "Z";
        }
        return new Date(t).toISOString().replace(".000Z", A);
    }
    toDate() {
        return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
    }
    static now() {
        return s.fromDate(new Date);
    }
    static fromDate(e) {
        const t = e.getTime();
        return new s({
            seconds: r.protoInt64.parse(Math.floor(t / 1e3)),
            nanos: t % 1e3 * 1e6
        });
    }
    static fromBinary(e, t) {
        return (new s).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new s).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new s).fromJsonString(e, t);
    }
    static equals(e, t) {
        return o.proto3.util.equals(s, e, t);
    }
}
exports.Timestamp = s, s.runtime = o.proto3, s.typeName = "google.protobuf.Timestamp", s.fields = o.proto3.util.newFieldList(()=>[
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
