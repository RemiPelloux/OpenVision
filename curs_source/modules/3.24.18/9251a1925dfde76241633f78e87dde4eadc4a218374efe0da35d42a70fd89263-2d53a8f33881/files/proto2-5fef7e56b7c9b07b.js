import { makeProtoRuntime, normalizeFieldInfos } from "../../../../../../../../external_exports.js";
import { InternalFieldList, init_field_list } from "./private/field-list.js";
import { init_field_normalize } from "./private/field-normalize.js";
import { init_proto_runtime } from "./private/proto-runtime.js";
var proto2;
export { proto2 };
var __wakaru_init_proto2_initialized = false;
export function init_proto2() {
if (__wakaru_init_proto2_initialized) return;
__wakaru_init_proto2_initialized = true;
init_proto_runtime();
init_field_list();
init_field_normalize();
proto2 = makeProtoRuntime("proto2", (fields)=>{
    return new InternalFieldList(fields, (source)=>normalizeFieldInfos(source, false));
}, (target)=>{
    for (const member of target.getType().fields.byMember()){
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
            case "map":
                t[name17] = {};
                break;
            case "scalar":
            case "enum":
            case "message":
                break;
        }
    }
});

}
