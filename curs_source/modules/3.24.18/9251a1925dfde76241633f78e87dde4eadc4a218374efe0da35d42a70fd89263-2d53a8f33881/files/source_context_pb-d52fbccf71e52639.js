import { Message, init_message } from "../../message.js";
import { init_proto3, proto3 } from "../../proto3.js";
var SourceContext;
export { SourceContext };
var __wakaru_init_source_context_pb_initialized = false;
export function init_source_context_pb() {
if (__wakaru_init_source_context_pb_initialized) return;
__wakaru_init_source_context_pb_initialized = true;
init_message();
init_proto3();
SourceContext = class _SourceContext extends Message {
    constructor(data){
        super();
        this.fileName = "";
        proto3.util.initPartial(data, this);
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
        return proto3.util.equals(_SourceContext, a, b2);
    }
};
SourceContext.runtime = proto3;
SourceContext.typeName = "google.protobuf.SourceContext";
SourceContext.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        }
    ]);

}
