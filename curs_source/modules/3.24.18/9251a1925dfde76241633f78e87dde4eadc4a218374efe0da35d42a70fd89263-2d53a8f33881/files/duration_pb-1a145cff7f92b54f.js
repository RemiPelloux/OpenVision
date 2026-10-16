import { Message, init_message } from "../../message.js";
import { init_proto_int64, protoInt64 } from "../../proto-int64.js";
import { init_proto3, proto3 } from "../../proto3.js";
var Duration;
export { Duration };
var __wakaru_init_duration_pb_initialized = false;
export function init_duration_pb() {
if (__wakaru_init_duration_pb_initialized) return;
__wakaru_init_duration_pb_initialized = true;
init_message();
init_proto_int64();
init_proto3();
Duration = class _Duration extends Message {
    constructor(data){
        super();
        this.seconds = protoInt64.zero;
        this.nanos = 0;
        proto3.util.initPartial(data, this);
    }
    fromJson(json2, options2) {
        if (typeof json2 !== "string") {
            throw new Error(`cannot decode google.protobuf.Duration from JSON: ${proto3.json.debug(json2)}`);
        }
        const match2 = json2.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (match2 === null) {
            throw new Error(`cannot decode google.protobuf.Duration from JSON: ${proto3.json.debug(json2)}`);
        }
        const longSeconds = Number(match2[1]);
        if (longSeconds > 315576e6 || longSeconds < -315576e6) {
            throw new Error(`cannot decode google.protobuf.Duration from JSON: ${proto3.json.debug(json2)}`);
        }
        this.seconds = protoInt64.parse(longSeconds);
        if (typeof match2[2] == "string") {
            const nanosStr = match2[2] + "0".repeat(9 - match2[2].length);
            this.nanos = parseInt(nanosStr);
            if (longSeconds < 0 || Object.is(longSeconds, -0)) {
                this.nanos = -this.nanos;
            }
        }
        return this;
    }
    toJson(options2) {
        if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) {
            throw new Error(`cannot encode google.protobuf.Duration to JSON: value out of range`);
        }
        let text4 = this.seconds.toString();
        if (this.nanos !== 0) {
            let nanosStr = Math.abs(this.nanos).toString();
            nanosStr = "0".repeat(9 - nanosStr.length) + nanosStr;
            if (nanosStr.substring(3) === "000000") {
                nanosStr = nanosStr.substring(0, 3);
            } else if (nanosStr.substring(6) === "000") {
                nanosStr = nanosStr.substring(0, 6);
            }
            text4 += "." + nanosStr;
            if (this.nanos < 0 && Number(this.seconds) == 0) {
                text4 = "-" + text4;
            }
        }
        return text4 + "s";
    }
    static fromBinary(bytes, options2) {
        return new _Duration().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _Duration().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _Duration().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_Duration, a, b2);
    }
};
Duration.runtime = proto3;
Duration.typeName = "google.protobuf.Duration";
Duration.fields = proto3.util.newFieldList(()=>[
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

}
