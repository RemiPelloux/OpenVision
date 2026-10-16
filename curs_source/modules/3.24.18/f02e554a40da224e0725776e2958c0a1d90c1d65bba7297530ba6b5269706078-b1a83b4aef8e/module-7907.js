"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Timestamp = void 0;
const n = require("./module-4193.js"), s = require("./module-1498.js"), i = require("./module-7599.js");
class o extends n.Message {
    constructor(t){
        super(), this.seconds = s.protoInt64.zero, this.nanos = 0, i.proto3.util.initPartial(t, this);
    }
    fromJson(t, e) {
        if ("string" != typeof t) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${i.proto3.json.debug(t)}`);
        const r = t.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!r) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const n = Date.parse(r[1] + "-" + r[2] + "-" + r[3] + "T" + r[4] + ":" + r[5] + ":" + r[6] + (r[8] ? r[8] : "Z"));
        if (Number.isNaN(n)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (n < Date.parse("0001-01-01T00:00:00Z") || n > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = s.protoInt64.parse(n / 1e3), this.nanos = 0, r[7] && (this.nanos = parseInt("1" + r[7] + "0".repeat(9 - r[7].length)) - 1e9), this;
    }
    toJson(t) {
        const e = 1e3 * Number(this.seconds);
        if (e < Date.parse("0001-01-01T00:00:00Z") || e > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let r = "Z";
        if (this.nanos > 0) {
            const t = (this.nanos + 1e9).toString().substring(1);
            r = "000000" === t.substring(3) ? "." + t.substring(0, 3) + "Z" : "000" === t.substring(6) ? "." + t.substring(0, 6) + "Z" : "." + t + "Z";
        }
        return new Date(e).toISOString().replace(".000Z", r);
    }
    toDate() {
        return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
    }
    static now() {
        return o.fromDate(new Date);
    }
    static fromDate(t) {
        const e = t.getTime();
        return new o({
            seconds: s.protoInt64.parse(Math.floor(e / 1e3)),
            nanos: e % 1e3 * 1e6
        });
    }
    static fromBinary(t, e) {
        return (new o).fromBinary(t, e);
    }
    static fromJson(t, e) {
        return (new o).fromJson(t, e);
    }
    static fromJsonString(t, e) {
        return (new o).fromJsonString(t, e);
    }
    static equals(t, e) {
        return i.proto3.util.equals(o, t, e);
    }
}
exports.Timestamp = o, o.runtime = i.proto3, o.typeName = "google.protobuf.Timestamp", o.fields = i.proto3.util.newFieldList(()=>[
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
