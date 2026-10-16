import { require_binary_format } from "./binary-format.js";
import { require_enum } from "./enum.js";
import { require_extensions } from "./extensions.js";
import { require_json_format } from "./json-format.js";
import { require_message_type } from "./message-type.js";
import { require_util_common } from "./util-common.js";
var __wakaru_require_proto_runtime_cache;
export function require_proto_runtime() {
if (__wakaru_require_proto_runtime_cache) return __wakaru_require_proto_runtime_cache;
var exports2 = {};
__wakaru_require_proto_runtime_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.makeProtoRuntime = void 0;
var enum_js_1 = require_enum();
var message_type_js_1 = require_message_type();
var extensions_js_1 = require_extensions();
var json_format_js_1 = require_json_format();
var binary_format_js_1 = require_binary_format();
var util_common_js_1 = require_util_common();
function makeProtoRuntime2(syntax, newFieldList, initFields) {
    return {
        syntax,
        json: (0, json_format_js_1.makeJsonFormat)(),
        bin: (0, binary_format_js_1.makeBinaryFormat)(),
        util: Object.assign(Object.assign({}, (0, util_common_js_1.makeUtilCommon)()), {
            newFieldList,
            initFields
        }),
        makeMessageType (typeName, fields, opt) {
            return (0, message_type_js_1.makeMessageType)(this, typeName, fields, opt);
        },
        makeEnum: enum_js_1.makeEnum,
        makeEnumType: enum_js_1.makeEnumType,
        getEnumType: enum_js_1.getEnumType,
        makeExtension (typeName, extendee, field4) {
            return (0, extensions_js_1.makeExtension)(this, typeName, extendee, field4);
        }
    };
}
exports2.makeProtoRuntime = makeProtoRuntime2;

return exports2;
}
