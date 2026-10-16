"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Timestamp = void 0;
const n = require("./module-4193.js"), r = require("./module-1498.js"), o = require("./module-7599.js");
class s extends n.Message {
    constructor(e){
        super(), this.seconds = r.protoInt64.zero, this.nanos = 0, o.proto3.util.initPartial(e, this);
    }
    fromJson(e, A) {
        if ("string" != typeof e) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${o.proto3.json.debug(e)}`);
        const t = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!t) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const n = Date.parse(t[1] + "-" + t[2] + "-" + t[3] + "T" + t[4] + ":" + t[5] + ":" + t[6] + (t[8] ? t[8] : "Z"));
        if (Number.isNaN(n)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (n < Date.parse("0001-01-01T00:00:00Z") || n > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = r.protoInt64.parse(n / 1e3), this.nanos = 0, t[7] && (this.nanos = parseInt("1" + t[7] + "0".repeat(9 - t[7].length)) - 1e9), this;
    }
    toJson(e) {
        const A = 1e3 * Number(this.seconds);
        if (A < Date.parse("0001-01-01T00:00:00Z") || A > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let t = "Z";
        if (this.nanos > 0) {
            const e = (this.nanos + 1e9).toString().substring(1);
            t = "000000" === e.substring(3) ? "." + e.substring(0, 3) + "Z" : "000" === e.substring(6) ? "." + e.substring(0, 6) + "Z" : "." + e + "Z";
        }
        return new Date(A).toISOString().replace(".000Z", t);
    }
    toDate() {
        return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
    }
    static now() {
        return s.fromDate(new Date);
    }
    static fromDate(e) {
        const A = e.getTime();
        return new s({
            seconds: r.protoInt64.parse(Math.floor(A / 1e3)),
            nanos: A % 1e3 * 1e6
        });
    }
    static fromBinary(e, A) {
        return (new s).fromBinary(e, A);
    }
    static fromJson(e, A) {
        return (new s).fromJson(e, A);
    }
    static fromJsonString(e, A) {
        return (new s).fromJsonString(e, A);
    }
    static equals(e, A) {
        return o.proto3.util.equals(s, e, A);
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
