import { makeProtoRuntime, normalizeFieldInfos, scalarZeroValue } from "../../../../../../../../external_exports.js";
import { InternalFieldList, init_field_list } from "./private/field-list.js";
import { init_field_normalize } from "./private/field-normalize.js";
import { init_proto_runtime } from "./private/proto-runtime.js";
import { init_scalars } from "./private/scalars.js";
var proto3;
export { proto3 };
var __wakaru_init_proto3_initialized = false;
export function init_proto3() {
if (__wakaru_init_proto3_initialized) return;
__wakaru_init_proto3_initialized = true;
init_proto_runtime();
init_field_list();
init_scalars();
init_field_normalize();
proto3 = makeProtoRuntime("proto3", (fields)=>{
    return new InternalFieldList(fields, (source)=>normalizeFieldInfos(source, true));
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
                t[name17] = scalarZeroValue(member.T, member.L);
                break;
            case "message":
                break;
        }
    }
});

}
