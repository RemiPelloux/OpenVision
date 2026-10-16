import { require_is_message } from "./is-message.js";
var __wakaru_require_to_plain_message_cache;
export function require_to_plain_message() {
if (__wakaru_require_to_plain_message_cache) return __wakaru_require_to_plain_message_cache;
var exports2 = {};
__wakaru_require_to_plain_message_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.toPlainMessage = void 0;
var is_message_js_1 = require_is_message();
function toPlainMessage(message) {
    if (!(0, is_message_js_1.isMessage)(message)) {
        return message;
    }
    const type2 = message.getType();
    const target = {};
    for (const member of type2.fields.byMember()){
        const source = message[member.localName];
        let copy;
        if (member.repeated) {
            copy = source.map((e)=>toPlainValue(e));
        } else if (member.kind == "map") {
            copy = {};
            for (const [key, v2] of Object.entries(source)){
                copy[key] = toPlainValue(v2);
            }
        } else if (member.kind == "oneof") {
            const f2 = member.findField(source.case);
            copy = f2 ? {
                case: source.case,
                value: toPlainValue(source.value)
            } : {
                case: void 0
            };
        } else {
            copy = toPlainValue(source);
        }
        target[member.localName] = copy;
    }
    return target;
}
exports2.toPlainMessage = toPlainMessage;
function toPlainValue(value) {
    if (value === void 0) {
        return value;
    }
    if ((0, is_message_js_1.isMessage)(value)) {
        return toPlainMessage(value);
    }
    if (value instanceof Uint8Array) {
        const c = new Uint8Array(value.byteLength);
        c.set(value);
        return c;
    }
    return value;
}

return exports2;
}
