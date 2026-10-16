"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Duration = void 0;
const n = require("./module-4193.js"), r = require("./module-1498.js"), o = require("./module-7599.js");
class s extends n.Message {
    constructor(e){
        super(), this.seconds = r.protoInt64.zero, this.nanos = 0, o.proto3.util.initPartial(e, this);
    }
    fromJson(e, t) {
        if ("string" != typeof e) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${o.proto3.json.debug(e)}`);
        const A = e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (null === A) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${o.proto3.json.debug(e)}`);
        const n = Number(A[1]);
        if (n > 315576e6 || n < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${o.proto3.json.debug(e)}`);
        if (this.seconds = r.protoInt64.parse(n), "string" == typeof A[2]) {
            const e = A[2] + "0".repeat(9 - A[2].length);
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
exports.Duration = s, s.runtime = o.proto3, s.typeName = "google.protobuf.Duration", s.fields = o.proto3.util.newFieldList(()=>[
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
