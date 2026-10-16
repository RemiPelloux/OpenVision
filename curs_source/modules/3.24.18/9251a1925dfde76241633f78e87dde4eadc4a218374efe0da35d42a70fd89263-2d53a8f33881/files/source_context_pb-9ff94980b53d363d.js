import { require_message } from "../../message.js";
import { require_proto3 } from "../../proto3.js";
var __wakaru_require_source_context_pb_cache;
export function require_source_context_pb() {
if (__wakaru_require_source_context_pb_cache) return __wakaru_require_source_context_pb_cache;
var exports2 = {};
__wakaru_require_source_context_pb_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.SourceContext = void 0;
var message_js_1 = require_message();
var proto3_js_1 = require_proto3();
var SourceContext2 = class _SourceContext extends message_js_1.Message {
    constructor(data){
        super();
        this.fileName = "";
        proto3_js_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SourceContext().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SourceContext().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SourceContext().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3_js_1.proto3.util.equals(_SourceContext, a, b2);
    }
};
exports2.SourceContext = SourceContext2;
SourceContext2.runtime = proto3_js_1.proto3;
SourceContext2.typeName = "google.protobuf.SourceContext";
SourceContext2.fields = proto3_js_1.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        }
    ]);

return exports2;
}
