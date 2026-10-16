require.r(exports);
require.d(exports, {
    Timestamp: ()=>Timestamp
});
var _message_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-12.js");
var _proto_int64_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-15.js");
var _proto3_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-7.js");
const _Timestamp = class _Timestamp extends _message_js__WEBPACK_IMPORTED_MODULE_0__.Message {
    constructor(data){
        super();
        this.seconds = _proto_int64_js__WEBPACK_IMPORTED_MODULE_1__.protoInt64.zero;
        this.nanos = 0;
        _proto3_js__WEBPACK_IMPORTED_MODULE_2__.proto3.util.initPartial(data, this);
    }
    fromJson(json, options) {
        if (typeof json !== "string") {
            throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${_proto3_js__WEBPACK_IMPORTED_MODULE_2__.proto3.json.debug(json)}`);
        }
        const matches = json.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!matches) {
            throw new Error(`cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string`);
        }
        const ms = Date.parse(matches[1] + "-" + matches[2] + "-" + matches[3] + "T" + matches[4] + ":" + matches[5] + ":" + matches[6] + (matches[8] ? matches[8] : "Z"));
        if (Number.isNaN(ms)) {
            throw new Error(`cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string`);
        }
        if (ms < Date.parse("0001-01-01T00:00:00Z") || ms > Date.parse("9999-12-31T23:59:59Z")) {
            throw new Error(`cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive`);
        }
        this.seconds = _proto_int64_js__WEBPACK_IMPORTED_MODULE_1__.protoInt64.parse(ms / 1e3);
        this.nanos = 0;
        if (matches[7]) {
            this.nanos = parseInt("1" + matches[7] + "0".repeat(9 - matches[7].length)) - 1e9;
        }
        return this;
    }
    toJson(options) {
        const ms = Number(this.seconds) * 1e3;
        if (ms < Date.parse("0001-01-01T00:00:00Z") || ms > Date.parse("9999-12-31T23:59:59Z")) {
            throw new Error(`cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive`);
        }
        if (this.nanos < 0) {
            throw new Error(`cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative`);
        }
        let z = "Z";
        if (this.nanos > 0) {
            const nanosStr = (this.nanos + 1e9).toString().substring(1);
            if (nanosStr.substring(3) === "000000") {
                z = "." + nanosStr.substring(0, 3) + "Z";
            } else if (nanosStr.substring(6) === "000") {
                z = "." + nanosStr.substring(0, 6) + "Z";
            } else {
                z = "." + nanosStr + "Z";
            }
        }
        return new Date(ms).toISOString().replace(".000Z", z);
    }
    toDate() {
        return new Date(Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6));
    }
    static now() {
        return _Timestamp.fromDate(new Date());
    }
    static fromDate(date) {
        const ms = date.getTime();
        return new _Timestamp({
            seconds: _proto_int64_js__WEBPACK_IMPORTED_MODULE_1__.protoInt64.parse(Math.floor(ms / 1e3)),
            nanos: ms % 1e3 * 1e6
        });
    }
    static fromBinary(bytes, options) {
        return new _Timestamp().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Timestamp().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Timestamp().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_2__.proto3.util.equals(_Timestamp, a, b);
    }
};
_Timestamp.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_2__.proto3;
_Timestamp.typeName = "google.protobuf.Timestamp";
_Timestamp.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_2__.proto3.util.newFieldList(()=>[
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
let Timestamp = _Timestamp;
