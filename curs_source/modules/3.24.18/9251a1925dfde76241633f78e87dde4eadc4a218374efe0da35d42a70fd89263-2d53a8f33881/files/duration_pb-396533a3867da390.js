import { require_message } from "../../message.js";
import { require_proto_int64 } from "../../proto-int64.js";
import { require_proto3 } from "../../proto3.js";
var __wakaru_require_duration_pb_cache;
export function require_duration_pb() {
if (__wakaru_require_duration_pb_cache) return __wakaru_require_duration_pb_cache;
var exports2 = {};
__wakaru_require_duration_pb_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.Duration = void 0;
var message_js_1 = require_message();
var proto_int64_js_1 = require_proto_int64();
var proto3_js_1 = require_proto3();
var Duration2 = class _Duration extends message_js_1.Message {
    constructor(data){
        super();
        this.seconds = proto_int64_js_1.protoInt64.zero;
        this.nanos = 0;
        proto3_js_1.proto3.util.initPartial(data, this);
    }
    fromJson(json2, options2) {
        if (typeof json2 !== "string") {
            throw new Error(`cannot decode google.protobuf.Duration from JSON: ${proto3_js_1.proto3.json.debug(json2)}`);
        }
        const match2 = json2.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (match2 === null) {
            throw new Error(`cannot decode google.protobuf.Duration from JSON: ${proto3_js_1.proto3.json.debug(json2)}`);
        }
        const longSeconds = Number(match2[1]);
        if (longSeconds > 315576e6 || longSeconds < -315576e6) {
            throw new Error(`cannot decode google.protobuf.Duration from JSON: ${proto3_js_1.proto3.json.debug(json2)}`);
        }
        this.seconds = proto_int64_js_1.protoInt64.parse(longSeconds);
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
        return proto3_js_1.proto3.util.equals(_Duration, a, b2);
    }
};
exports2.Duration = Duration2;
Duration2.runtime = proto3_js_1.proto3;
Duration2.typeName = "google.protobuf.Duration";
Duration2.fields = proto3_js_1.proto3.util.newFieldList(()=>[
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

return exports2;
}
