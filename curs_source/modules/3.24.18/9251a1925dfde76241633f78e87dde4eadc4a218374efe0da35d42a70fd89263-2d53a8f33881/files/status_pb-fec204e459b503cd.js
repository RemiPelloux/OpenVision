import { require_cjs2 } from "../../../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/cjs/index.js";
var __wakaru_require_status_pb_cache;
export function require_status_pb() {
if (__wakaru_require_status_pb_cache) return __wakaru_require_status_pb_cache;
var exports2 = {};
__wakaru_require_status_pb_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.Status = void 0;
var protobuf_1 = require_cjs2();
var Status3 = class _Status extends protobuf_1.Message {
    constructor(data){
        super();
        this.code = 0;
        this.message = "";
        this.details = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _Status().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _Status().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _Status().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return protobuf_1.proto3.util.equals(_Status, a, b2);
    }
};
exports2.Status = Status3;
Status3.runtime = protobuf_1.proto3;
Status3.typeName = "google.rpc.Status";
Status3.fields = protobuf_1.proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "code",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "details",
            kind: "message",
            T: protobuf_1.Any,
            repeated: true
        }
    ]);

return exports2;
}
