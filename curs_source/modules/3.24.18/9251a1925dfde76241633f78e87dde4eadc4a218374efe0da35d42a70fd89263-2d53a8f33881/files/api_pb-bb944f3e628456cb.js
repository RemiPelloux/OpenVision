import { SourceContext, init_source_context_pb } from "./source_context_pb.js";
import { Option, Syntax, init_type_pb } from "./type_pb.js";
import { Message, init_message } from "../../message.js";
import { init_proto3, proto3 } from "../../proto3.js";
var Api, Method, Mixin;
export { Api, Method, Mixin };
var __wakaru_init_api_pb_initialized = false;
export function init_api_pb() {
if (__wakaru_init_api_pb_initialized) return;
__wakaru_init_api_pb_initialized = true;
init_message();
init_type_pb();
init_source_context_pb();
init_proto3();
Api = class _Api extends Message {
    constructor(data){
        super();
        this.name = "";
        this.methods = [];
        this.options = [];
        this.version = "";
        this.mixins = [];
        this.syntax = Syntax.PROTO2;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _Api().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _Api().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _Api().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_Api, a, b2);
    }
};
Api.runtime = proto3;
Api.typeName = "google.protobuf.Api";
Api.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "methods",
            kind: "message",
            T: Method,
            repeated: true
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: Option,
            repeated: true
        },
        {
            no: 4,
            name: "version",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "source_context",
            kind: "message",
            T: SourceContext
        },
        {
            no: 6,
            name: "mixins",
            kind: "message",
            T: Mixin,
            repeated: true
        },
        {
            no: 7,
            name: "syntax",
            kind: "enum",
            T: proto3.getEnumType(Syntax)
        }
    ]);
Method = class _Method extends Message {
    constructor(data){
        super();
        this.name = "";
        this.requestTypeUrl = "";
        this.requestStreaming = false;
        this.responseTypeUrl = "";
        this.responseStreaming = false;
        this.options = [];
        this.syntax = Syntax.PROTO2;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _Method().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _Method().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _Method().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_Method, a, b2);
    }
};
Method.runtime = proto3;
Method.typeName = "google.protobuf.Method";
Method.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "request_type_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "request_streaming",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "response_type_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "response_streaming",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "options",
            kind: "message",
            T: Option,
            repeated: true
        },
        {
            no: 7,
            name: "syntax",
            kind: "enum",
            T: proto3.getEnumType(Syntax)
        }
    ]);
Mixin = class _Mixin extends Message {
    constructor(data){
        super();
        this.name = "";
        this.root = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _Mixin().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _Mixin().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _Mixin().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_Mixin, a, b2);
    }
};
Mixin.runtime = proto3;
Mixin.typeName = "google.protobuf.Mixin";
Mixin.fields = proto3.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "root",
            kind: "scalar",
            T: 9
        }
    ]);

}
