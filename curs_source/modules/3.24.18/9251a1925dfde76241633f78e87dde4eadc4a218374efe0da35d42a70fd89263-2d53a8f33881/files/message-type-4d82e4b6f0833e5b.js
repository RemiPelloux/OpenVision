import { require_message } from "../message.js";
var __wakaru_require_message_type_cache;
export function require_message_type() {
if (__wakaru_require_message_type_cache) return __wakaru_require_message_type_cache;
var exports2 = {};
__wakaru_require_message_type_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.makeMessageType = void 0;
var message_js_1 = require_message();
function makeMessageType2(runtime, typeName, fields, opt) {
    var _a18;
    const localName = (_a18 = opt === null || opt === void 0 ? void 0 : opt.localName) !== null && _a18 !== void 0 ? _a18 : typeName.substring(typeName.lastIndexOf(".") + 1);
    const type2 = {
        [localName]: function(data) {
            runtime.util.initFields(this);
            runtime.util.initPartial(data, this);
        }
    }[localName];
    Object.setPrototypeOf(type2.prototype, new message_js_1.Message());
    Object.assign(type2, {
        runtime,
        typeName,
        fields: runtime.util.newFieldList(fields),
        fromBinary (bytes, options2) {
            return new type2().fromBinary(bytes, options2);
        },
        fromJson (jsonValue, options2) {
            return new type2().fromJson(jsonValue, options2);
        },
        fromJsonString (jsonString, options2) {
            return new type2().fromJsonString(jsonString, options2);
        },
        equals (a, b2) {
            return runtime.util.equals(type2, a, b2);
        }
    });
    return type2;
}
exports2.makeMessageType = makeMessageType2;

return exports2;
}
