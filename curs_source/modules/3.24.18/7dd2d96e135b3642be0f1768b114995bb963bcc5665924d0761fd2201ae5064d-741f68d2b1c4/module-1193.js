"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Duration = void 0;
const a = require("./module-4193.js"), s = require("./module-1498.js"), o = require("./module-7599.js");
class r extends a.Message {
    constructor(e){
        super(), this.seconds = s.protoInt64.zero, this.nanos = 0, o.proto3.util.initPartial(e, this);
    }
    fromJson(e, n) {
        if ("string" != typeof e) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${o.proto3.json.debug(e)}`);
        const t = e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (null === t) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${o.proto3.json.debug(e)}`);
        const a = Number(t[1]);
        if (a > 315576e6 || a < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${o.proto3.json.debug(e)}`);
        if (this.seconds = s.protoInt64.parse(a), "string" == typeof t[2]) {
            const e = t[2] + "0".repeat(9 - t[2].length);
            this.nanos = parseInt(e), (a < 0 || Object.is(a, -0)) && (this.nanos = -this.nanos);
        }
        return this;
    }
    toJson(e) {
        if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
        let n = this.seconds.toString();
        if (0 !== this.nanos) {
            let e = Math.abs(this.nanos).toString();
            e = "0".repeat(9 - e.length) + e, "000000" === e.substring(3) ? e = e.substring(0, 3) : "000" === e.substring(6) && (e = e.substring(0, 6)), n += "." + e, this.nanos < 0 && 0 == Number(this.seconds) && (n = "-" + n);
        }
        return n + "s";
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
exports.Duration = r, r.runtime = o.proto3, r.typeName = "google.protobuf.Duration", r.fields = o.proto3.util.newFieldList(()=>[
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
