Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Duration = void 0;
const r = require("./module-193.js"), o = require("./module-498.js"), a = require("./module-599.js");
class s extends r.Message {
    constructor(e){
        super(), this.seconds = o.protoInt64.zero, this.nanos = 0, a.proto3.util.initPartial(e, this);
    }
    fromJson(e, t) {
        if ("string" != typeof e) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${a.proto3.json.debug(e)}`);
        const n = e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (null === n) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${a.proto3.json.debug(e)}`);
        const r = Number(n[1]);
        if (r > 315576e6 || r < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${a.proto3.json.debug(e)}`);
        if (this.seconds = o.protoInt64.parse(r), "string" == typeof n[2]) {
            const e = n[2] + "0".repeat(9 - n[2].length);
            this.nanos = parseInt(e), (r < 0 || Object.is(r, -0)) && (this.nanos = -this.nanos);
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
        return a.proto3.util.equals(s, e, t);
    }
}
exports.Duration = s, s.runtime = a.proto3, s.typeName = "google.protobuf.Duration", s.fields = a.proto3.util.newFieldList(()=>[
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
