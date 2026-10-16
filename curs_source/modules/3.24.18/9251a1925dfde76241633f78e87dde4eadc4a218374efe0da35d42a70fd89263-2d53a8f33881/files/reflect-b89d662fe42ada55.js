import { require_scalars } from "./scalars.js";
var __wakaru_require_reflect_cache;
export function require_reflect() {
if (__wakaru_require_reflect_cache) return __wakaru_require_reflect_cache;
var exports2 = {};
__wakaru_require_reflect_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.clearField = exports2.isFieldSet = void 0;
var scalars_js_1 = require_scalars();
function isFieldSet2(field4, target) {
    const localName = field4.localName;
    if (field4.repeated) {
        return target[localName].length > 0;
    }
    if (field4.oneof) {
        return target[field4.oneof.localName].case === localName;
    }
    switch(field4.kind){
        case "enum":
        case "scalar":
            if (field4.opt || field4.req) {
                return target[localName] !== void 0;
            }
            if (field4.kind == "enum") {
                return target[localName] !== field4.T.values[0].no;
            }
            return !(0, scalars_js_1.isScalarZeroValue)(field4.T, target[localName]);
        case "message":
            return target[localName] !== void 0;
        case "map":
            return Object.keys(target[localName]).length > 0;
    }
}
exports2.isFieldSet = isFieldSet2;
function clearField2(field4, target) {
    const localName = field4.localName;
    const implicitPresence = !field4.opt && !field4.req;
    if (field4.repeated) {
        target[localName] = [];
    } else if (field4.oneof) {
        target[field4.oneof.localName] = {
            case: void 0
        };
    } else {
        switch(field4.kind){
            case "map":
                target[localName] = {};
                break;
            case "enum":
                target[localName] = implicitPresence ? field4.T.values[0].no : void 0;
                break;
            case "scalar":
                target[localName] = implicitPresence ? (0, scalars_js_1.scalarZeroValue)(field4.T, field4.L) : void 0;
                break;
            case "message":
                target[localName] = void 0;
                break;
        }
    }
}
exports2.clearField = clearField2;

return exports2;
}
