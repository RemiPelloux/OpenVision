import { require_field } from "./field.js";
import { require_names } from "./names.js";
import { require_scalar } from "../scalar.js";
var __wakaru_require_field_normalize_cache;
export function require_field_normalize() {
if (__wakaru_require_field_normalize_cache) return __wakaru_require_field_normalize_cache;
var exports2 = {};
__wakaru_require_field_normalize_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.normalizeFieldInfos = void 0;
var field_js_1 = require_field();
var names_js_1 = require_names();
var scalar_js_1 = require_scalar();
function normalizeFieldInfos2(fieldInfos, packedByDefault) {
    var _a18, _b2, _c, _d, _e2, _f;
    const r = [];
    let o;
    for (const field4 of typeof fieldInfos == "function" ? fieldInfos() : fieldInfos){
        const f2 = field4;
        f2.localName = (0, names_js_1.localFieldName)(field4.name, field4.oneof !== void 0);
        f2.jsonName = (_a18 = field4.jsonName) !== null && _a18 !== void 0 ? _a18 : (0, names_js_1.fieldJsonName)(field4.name);
        f2.repeated = (_b2 = field4.repeated) !== null && _b2 !== void 0 ? _b2 : false;
        if (field4.kind == "scalar") {
            f2.L = (_c = field4.L) !== null && _c !== void 0 ? _c : scalar_js_1.LongType.BIGINT;
        }
        f2.delimited = (_d = field4.delimited) !== null && _d !== void 0 ? _d : false;
        f2.req = (_e2 = field4.req) !== null && _e2 !== void 0 ? _e2 : false;
        f2.opt = (_f = field4.opt) !== null && _f !== void 0 ? _f : false;
        if (field4.packed === void 0) {
            if (packedByDefault) {
                f2.packed = field4.kind == "enum" || field4.kind == "scalar" && field4.T != scalar_js_1.ScalarType.BYTES && field4.T != scalar_js_1.ScalarType.STRING;
            } else {
                f2.packed = false;
            }
        }
        if (field4.oneof !== void 0) {
            const ooname = typeof field4.oneof == "string" ? field4.oneof : field4.oneof.name;
            if (!o || o.name != ooname) {
                o = new field_js_1.InternalOneofInfo(ooname);
            }
            f2.oneof = o;
            o.addField(f2);
        }
        r.push(f2);
    }
    return r;
}
exports2.normalizeFieldInfos = normalizeFieldInfos2;

return exports2;
}
