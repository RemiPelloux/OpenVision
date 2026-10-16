require.r(exports);
require.d(exports, {
    Duration: ()=>Duration
});
var _message_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-12.js");
var _proto_int64_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-15.js");
var _proto3_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-7.js");
const _Duration = class _Duration extends _message_js__WEBPACK_IMPORTED_MODULE_0__.Message {
    constructor(data){
        super();
        this.seconds = _proto_int64_js__WEBPACK_IMPORTED_MODULE_1__.protoInt64.zero;
        this.nanos = 0;
        _proto3_js__WEBPACK_IMPORTED_MODULE_2__.proto3.util.initPartial(data, this);
    }
    fromJson(json, options) {
        if (typeof json !== "string") {
            throw new Error(`cannot decode google.protobuf.Duration from JSON: ${_proto3_js__WEBPACK_IMPORTED_MODULE_2__.proto3.json.debug(json)}`);
        }
        const match = json.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (match === null) {
            throw new Error(`cannot decode google.protobuf.Duration from JSON: ${_proto3_js__WEBPACK_IMPORTED_MODULE_2__.proto3.json.debug(json)}`);
        }
        const longSeconds = Number(match[1]);
        if (longSeconds > 315576e6 || longSeconds < -315576e6) {
            throw new Error(`cannot decode google.protobuf.Duration from JSON: ${_proto3_js__WEBPACK_IMPORTED_MODULE_2__.proto3.json.debug(json)}`);
        }
        this.seconds = _proto_int64_js__WEBPACK_IMPORTED_MODULE_1__.protoInt64.parse(longSeconds);
        if (typeof match[2] == "string") {
            const nanosStr = match[2] + "0".repeat(9 - match[2].length);
            this.nanos = parseInt(nanosStr);
            if (longSeconds < 0 || Object.is(longSeconds, -0)) {
                this.nanos = -this.nanos;
            }
        }
        return this;
    }
    toJson(options) {
        if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) {
            throw new Error(`cannot encode google.protobuf.Duration to JSON: value out of range`);
        }
        let text = this.seconds.toString();
        if (this.nanos !== 0) {
            let nanosStr = Math.abs(this.nanos).toString();
            nanosStr = "0".repeat(9 - nanosStr.length) + nanosStr;
            if (nanosStr.substring(3) === "000000") {
                nanosStr = nanosStr.substring(0, 3);
            } else if (nanosStr.substring(6) === "000") {
                nanosStr = nanosStr.substring(0, 6);
            }
            text += "." + nanosStr;
            if (this.nanos < 0 && Number(this.seconds) == 0) {
                text = "-" + text;
            }
        }
        return text + "s";
    }
    static fromBinary(bytes, options) {
        return new _Duration().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Duration().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Duration().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return _proto3_js__WEBPACK_IMPORTED_MODULE_2__.proto3.util.equals(_Duration, a, b);
    }
};
_Duration.runtime = _proto3_js__WEBPACK_IMPORTED_MODULE_2__.proto3;
_Duration.typeName = "google.protobuf.Duration";
_Duration.fields = _proto3_js__WEBPACK_IMPORTED_MODULE_2__.proto3.util.newFieldList(()=>[
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
let Duration = _Duration;
