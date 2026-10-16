import { Message, init_message } from "../../message.js";
import { init_proto3, proto3 } from "../../proto3.js";
var Empty;
export { Empty };
var __wakaru_init_empty_pb_initialized = false;
export function init_empty_pb() {
if (__wakaru_init_empty_pb_initialized) return;
__wakaru_init_empty_pb_initialized = true;
init_message();
init_proto3();
Empty = class _Empty extends Message {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
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
        return proto3.util.equals(_Empty, a, b2);
    }
};
Empty.runtime = proto3;
Empty.typeName = "google.protobuf.Empty";
Empty.fields = proto3.util.newFieldList(()=>[]);

}
