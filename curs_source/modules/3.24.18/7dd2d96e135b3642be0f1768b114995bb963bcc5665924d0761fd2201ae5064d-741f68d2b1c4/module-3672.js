"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.proto2 = void 0;
const a = require("./module-6829.js"), s = require("./module-4331.js"), o = require("./module-6228.js");
exports.proto2 = (0, a.makeProtoRuntime)("proto2", (e)=>new s.InternalFieldList(e, (e)=>(0, o.normalizeFieldInfos)(e, !1)), (e)=>{
    for (const n of e.getType().fields.byMember()){
        const t = n.localName, a = e;
        if (n.repeated) a[t] = [];
        else switch(n.kind){
            case "oneof":
                a[t] = {
                    case: void 0
                };
                break;
            case "map":
                a[t] = {};
        }
    }
});
