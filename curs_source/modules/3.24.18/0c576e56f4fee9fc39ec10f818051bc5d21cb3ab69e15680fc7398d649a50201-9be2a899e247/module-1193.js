"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Duration = void 0;
const n = require("./module-4193.js"), o = require("./module-1498.js"), s = require("./module-7599.js");
class i extends n.Message {
    constructor(e){
        super(), this.seconds = o.protoInt64.zero, this.nanos = 0, s.proto3.util.initPartial(e, this);
    }
    fromJson(e, t) {
        if ("string" != typeof e) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${s.proto3.json.debug(e)}`);
        const r = e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (null === r) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${s.proto3.json.debug(e)}`);
        const n = Number(r[1]);
        if (n > 315576e6 || n < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${s.proto3.json.debug(e)}`);
        if (this.seconds = o.protoInt64.parse(n), "string" == typeof r[2]) {
            const e = r[2] + "0".repeat(9 - r[2].length);
            this.nanos = parseInt(e), (n < 0 || Object.is(n, -0)) && (this.nanos = -this.nanos);
        }
        return this;
    }
    toJson(e) {
        if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
        let t = this.seconds.toString();
        if (0 !== this.nanos) {
            let e = Math.abs(this.nanos).toString();
            e = "0".repeat(9 - e.length) + e, "000000" === e.substring(3) ? e = e.substring(0, 3) : "000" === e.substring(6) && (e = e.substring(0, 6)), t += "." + e, this.nanos < 0 && 0 == Number(this.seconds) && (t = "-" + t);
        }
        return t + "s";
    }
    static fromBinary(e, t) {
        return (new i).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new i).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new i).fromJsonString(e, t);
    }
    static equals(e, t) {
        return s.proto3.util.equals(i, e, t);
    }
}
exports.Duration = i, i.runtime = s.proto3, i.typeName = "google.protobuf.Duration", i.fields = s.proto3.util.newFieldList(()=>[
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
