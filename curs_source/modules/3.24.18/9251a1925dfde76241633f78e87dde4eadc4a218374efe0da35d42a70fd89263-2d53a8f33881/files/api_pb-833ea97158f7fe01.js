import { require_source_context_pb } from "./source_context_pb.js";
import { require_type_pb } from "./type_pb.js";
import { require_message } from "../../message.js";
import { require_proto3 } from "../../proto3.js";
var __wakaru_require_api_pb_cache;
export function require_api_pb() {
if (__wakaru_require_api_pb_cache) return __wakaru_require_api_pb_cache;
var exports2 = {};
__wakaru_require_api_pb_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.Mixin = exports2.Method = exports2.Api = void 0;
var message_js_1 = require_message();
var type_pb_js_1 = require_type_pb();
var source_context_pb_js_1 = require_source_context_pb();
var proto3_js_1 = require_proto3();
var Api2 = class _Api extends message_js_1.Message {
    constructor(data){
        super();
        this.name = "";
        this.methods = [];
        this.options = [];
        this.version = "";
        this.mixins = [];
        this.syntax = type_pb_js_1.Syntax.PROTO2;
        proto3_js_1.proto3.util.initPartial(data, this);
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
        return proto3_js_1.proto3.util.equals(_Api, a, b2);
    }
};
exports2.Api = Api2;
Api2.runtime = proto3_js_1.proto3;
Api2.typeName = "google.protobuf.Api";
Api2.fields = proto3_js_1.proto3.util.newFieldList(()=>[
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
            T: Method2,
            repeated: true
        },
        {
            no: 3,
            name: "options",
            kind: "message",
            T: type_pb_js_1.Option,
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
            T: source_context_pb_js_1.SourceContext
        },
        {
            no: 6,
            name: "mixins",
            kind: "message",
            T: Mixin2,
            repeated: true
        },
        {
            no: 7,
            name: "syntax",
            kind: "enum",
            T: proto3_js_1.proto3.getEnumType(type_pb_js_1.Syntax)
        }
    ]);
var Method2 = class _Method extends message_js_1.Message {
    constructor(data){
        super();
        this.name = "";
        this.requestTypeUrl = "";
        this.requestStreaming = false;
        this.responseTypeUrl = "";
        this.responseStreaming = false;
        this.options = [];
        this.syntax = type_pb_js_1.Syntax.PROTO2;
        proto3_js_1.proto3.util.initPartial(data, this);
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
        return proto3_js_1.proto3.util.equals(_Method, a, b2);
    }
};
exports2.Method = Method2;
Method2.runtime = proto3_js_1.proto3;
Method2.typeName = "google.protobuf.Method";
Method2.fields = proto3_js_1.proto3.util.newFieldList(()=>[
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
            T: type_pb_js_1.Option,
            repeated: true
        },
        {
            no: 7,
            name: "syntax",
            kind: "enum",
            T: proto3_js_1.proto3.getEnumType(type_pb_js_1.Syntax)
        }
    ]);
var Mixin2 = class _Mixin extends message_js_1.Message {
    constructor(data){
        super();
        this.name = "";
        this.root = "";
        proto3_js_1.proto3.util.initPartial(data, this);
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
        return proto3_js_1.proto3.util.equals(_Mixin, a, b2);
    }
};
exports2.Mixin = Mixin2;
Mixin2.runtime = proto3_js_1.proto3;
Mixin2.typeName = "google.protobuf.Mixin";
Mixin2.fields = proto3_js_1.proto3.util.newFieldList(()=>[
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

return exports2;
}
