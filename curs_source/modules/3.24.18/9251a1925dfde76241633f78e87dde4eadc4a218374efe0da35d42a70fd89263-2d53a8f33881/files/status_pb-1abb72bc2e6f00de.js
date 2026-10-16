import { Any } from "../../../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/any_pb.js";
import { init_esm2 } from "../../../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { Message } from "../../../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/message.js";
import { proto3 } from "../../../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
var Status;
export { Status };
var __wakaru_init_status_pb_initialized = false;
export function init_status_pb() {
if (__wakaru_init_status_pb_initialized) return;
__wakaru_init_status_pb_initialized = true;
init_esm2();
Status = class _Status extends Message {
    constructor(data){
        super();
        this.code = 0;
        this.message = "";
        this.details = [];
        proto3.util.initPartial(data, this);
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
        return proto3.util.equals(_Status, a, b2);
    }
};
Status.runtime = proto3;
Status.typeName = "google.rpc.Status";
Status.fields = proto3.util.newFieldList(()=>[
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
            T: Any,
            repeated: true
        }
    ]);

}
