"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.proto2 = void 0;
const n = require("./module-6829.js"), r = require("./module-4331.js"), o = require("./module-6228.js");
exports.proto2 = (0, n.makeProtoRuntime)("proto2", (e)=>new r.InternalFieldList(e, (e)=>(0, o.normalizeFieldInfos)(e, !1)), (e)=>{
    for (const A of e.getType().fields.byMember()){
        const t = A.localName, n = e;
        if (A.repeated) n[t] = [];
        else switch(A.kind){
            case "oneof":
                n[t] = {
                    case: void 0
                };
                break;
            case "map":
                n[t] = {};
        }
    }
});
