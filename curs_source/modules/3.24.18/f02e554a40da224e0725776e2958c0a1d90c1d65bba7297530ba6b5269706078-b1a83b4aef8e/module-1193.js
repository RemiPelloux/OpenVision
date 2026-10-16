"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Duration = void 0;
const n = require("./module-4193.js"), s = require("./module-1498.js"), i = require("./module-7599.js");
class o extends n.Message {
    constructor(t){
        super(), this.seconds = s.protoInt64.zero, this.nanos = 0, i.proto3.util.initPartial(t, this);
    }
    fromJson(t, e) {
        if ("string" != typeof t) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${i.proto3.json.debug(t)}`);
        const r = t.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (null === r) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${i.proto3.json.debug(t)}`);
        const n = Number(r[1]);
        if (n > 315576e6 || n < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${i.proto3.json.debug(t)}`);
        if (this.seconds = s.protoInt64.parse(n), "string" == typeof r[2]) {
            const t = r[2] + "0".repeat(9 - r[2].length);
            this.nanos = parseInt(t), (n < 0 || Object.is(n, -0)) && (this.nanos = -this.nanos);
        }
        return this;
    }
    toJson(t) {
        if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
        let e = this.seconds.toString();
        if (0 !== this.nanos) {
            let t = Math.abs(this.nanos).toString();
            t = "0".repeat(9 - t.length) + t, "000000" === t.substring(3) ? t = t.substring(0, 3) : "000" === t.substring(6) && (t = t.substring(0, 6)), e += "." + t, this.nanos < 0 && 0 == Number(this.seconds) && (e = "-" + e);
        }
        return e + "s";
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
exports.Duration = o, o.runtime = i.proto3, o.typeName = "google.protobuf.Duration", o.fields = i.proto3.util.newFieldList(()=>[
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
