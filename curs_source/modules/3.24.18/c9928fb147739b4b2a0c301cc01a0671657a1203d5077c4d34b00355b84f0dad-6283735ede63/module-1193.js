Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Duration = void 0;
const s = require("./module-4193.js"), o = require("./module-1498.js"), r = require("./module-7599.js");
class t extends s.Message {
    constructor(e){
        super(), this.seconds = o.protoInt64.zero, this.nanos = 0, r.proto3.util.initPartial(e, this);
    }
    fromJson(e, a) {
        if ("string" != typeof e) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${r.proto3.json.debug(e)}`);
        const n = e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (null === n) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${r.proto3.json.debug(e)}`);
        const s = Number(n[1]);
        if (s > 315576e6 || s < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${r.proto3.json.debug(e)}`);
        if (this.seconds = o.protoInt64.parse(s), "string" == typeof n[2]) {
            const e = n[2] + "0".repeat(9 - n[2].length);
            this.nanos = parseInt(e), (s < 0 || Object.is(s, -0)) && (this.nanos = -this.nanos);
        }
        return this;
    }
    toJson(e) {
        if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
        let a = this.seconds.toString();
        if (0 !== this.nanos) {
            let e = Math.abs(this.nanos).toString();
            e = "0".repeat(9 - e.length) + e, "000000" === e.substring(3) ? e = e.substring(0, 3) : "000" === e.substring(6) && (e = e.substring(0, 6)), a += "." + e, this.nanos < 0 && 0 == Number(this.seconds) && (a = "-" + a);
        }
        return a + "s";
    }
    static fromBinary(e, a) {
        return (new t).fromBinary(e, a);
    }
    static fromJson(e, a) {
        return (new t).fromJson(e, a);
    }
    static fromJsonString(e, a) {
        return (new t).fromJsonString(e, a);
    }
    static equals(e, a) {
        return r.proto3.util.equals(t, e, a);
    }
}
exports.Duration = t, t.runtime = r.proto3, t.typeName = "google.protobuf.Duration", t.fields = r.proto3.util.newFieldList(()=>[
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
