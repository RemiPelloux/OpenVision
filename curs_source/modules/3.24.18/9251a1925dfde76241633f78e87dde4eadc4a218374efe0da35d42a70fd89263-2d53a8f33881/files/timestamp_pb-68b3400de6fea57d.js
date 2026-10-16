import { Message, init_message } from "../../message.js";
import { init_proto_int64, protoInt64 } from "../../proto-int64.js";
import { init_proto3, proto3 } from "../../proto3.js";
var Timestamp;
export { Timestamp };
var __wakaru_init_timestamp_pb_initialized = false;
export function init_timestamp_pb() {
if (__wakaru_init_timestamp_pb_initialized) return;
__wakaru_init_timestamp_pb_initialized = true;
init_message();
init_proto_int64();
init_proto3();
Timestamp = class _Timestamp extends Message {
    constructor(data){
        super();
        this.seconds = protoInt64.zero;
        this.nanos = 0;
        proto3.util.initPartial(data, this);
    }
    fromJson(json2, options2) {
        if (typeof json2 !== "string") {
            throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${proto3.json.debug(json2)}`);
        }
        const matches = json2.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!matches) {
            throw new Error(`cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string`);
        }
        const ms2 = Date.parse(matches[1] + "-" + matches[2] + "-" + matches[3] + "T" + matches[4] + ":" + matches[5] + ":" + matches[6] + (matches[8] ? matches[8] : "Z"));
        if (Number.isNaN(ms2)) {
            throw new Error(`cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string`);
        }
        if (ms2 < Date.parse("0001-01-01T00:00:00Z") || ms2 > Date.parse("9999-12-31T23:59:59Z")) {
            throw new Error(`cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive`);
        }
        this.seconds = protoInt64.parse(ms2 / 1e3);
        this.nanos = 0;
        if (matches[7]) {
            this.nanos = parseInt("1" + matches[7] + "0".repeat(9 - matches[7].length)) - 1e9;
        }
        return this;
    }
    toJson(options2) {
        const ms2 = Number(this.seconds) * 1e3;
        if (ms2 < Date.parse("0001-01-01T00:00:00Z") || ms2 > Date.parse("9999-12-31T23:59:59Z")) {
            throw new Error(`cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive`);
        }
        if (this.nanos < 0) {
            throw new Error(`cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative`);
        }
        let z2 = "Z";
        if (this.nanos > 0) {
            const nanosStr = (this.nanos + 1e9).toString().substring(1);
            if (nanosStr.substring(3) === "000000") {
                z2 = "." + nanosStr.substring(0, 3) + "Z";
            } else if (nanosStr.substring(6) === "000") {
                z2 = "." + nanosStr.substring(0, 6) + "Z";
            } else {
                z2 = "." + nanosStr + "Z";
            }
        }
        return new Date(ms2).toISOString().replace(".000Z", z2);
    }
    toDate() {
        return new Date(Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6));
    }
    static now() {
        return _Timestamp.fromDate(new Date());
    }
    static fromDate(date4) {
        const ms2 = date4.getTime();
        return new _Timestamp({
            seconds: protoInt64.parse(Math.floor(ms2 / 1e3)),
            nanos: ms2 % 1e3 * 1e6
        });
    }
    static fromBinary(bytes, options2) {
        return new _Timestamp().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _Timestamp().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _Timestamp().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_Timestamp, a, b2);
    }
};
Timestamp.runtime = proto3;
Timestamp.typeName = "google.protobuf.Timestamp";
Timestamp.fields = proto3.util.newFieldList(()=>[
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
