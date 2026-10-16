import { require_message } from "../../message.js";
import { require_proto3 } from "../../proto3.js";
var __wakaru_require_empty_pb_cache;
export function require_empty_pb() {
if (__wakaru_require_empty_pb_cache) return __wakaru_require_empty_pb_cache;
var exports2 = {};
__wakaru_require_empty_pb_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.Empty = void 0;
var message_js_1 = require_message();
var proto3_js_1 = require_proto3();
var Empty2 = class _Empty extends message_js_1.Message {
    constructor(data){
        super();
        proto3_js_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _Empty().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _Empty().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _Empty().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3_js_1.proto3.util.equals(_Empty, a, b2);
    }
};
exports2.Empty = Empty2;
Empty2.runtime = proto3_js_1.proto3;
Empty2.typeName = "google.protobuf.Empty";
Empty2.fields = proto3_js_1.proto3.util.newFieldList(()=>[]);

return exports2;
}
