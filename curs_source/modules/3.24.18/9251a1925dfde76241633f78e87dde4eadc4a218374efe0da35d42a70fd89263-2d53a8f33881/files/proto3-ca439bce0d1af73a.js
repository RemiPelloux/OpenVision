import { require_field_list } from "./private/field-list.js";
import { require_field_normalize } from "./private/field-normalize.js";
import { require_proto_runtime } from "./private/proto-runtime.js";
import { require_scalars } from "./private/scalars.js";
var __wakaru_require_proto3_cache;
export function require_proto3() {
if (__wakaru_require_proto3_cache) return __wakaru_require_proto3_cache;
var exports2 = {};
__wakaru_require_proto3_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.proto3 = void 0;
var proto_runtime_js_1 = require_proto_runtime();
var field_list_js_1 = require_field_list();
var scalars_js_1 = require_scalars();
var field_normalize_js_1 = require_field_normalize();
exports2.proto3 = (0, proto_runtime_js_1.makeProtoRuntime)("proto3", (fields)=>{
    return new field_list_js_1.InternalFieldList(fields, (source)=>(0, field_normalize_js_1.normalizeFieldInfos)(source, true));
}, (target)=>{
    for (const member of target.getType().fields.byMember()){
        if (member.opt) {
            continue;
        }
        const name17 = member.localName, t = target;
        if (member.repeated) {
            t[name17] = [];
            continue;
        }
        switch(member.kind){
            case "oneof":
                t[name17] = {
                    case: void 0
                };
                break;
            case "enum":
                t[name17] = 0;
                break;
            case "map":
                t[name17] = {};
                break;
            case "scalar":
                t[name17] = (0, scalars_js_1.scalarZeroValue)(member.T, member.L);
                break;
            case "message":
                break;
        }
    }
});

return exports2;
}
