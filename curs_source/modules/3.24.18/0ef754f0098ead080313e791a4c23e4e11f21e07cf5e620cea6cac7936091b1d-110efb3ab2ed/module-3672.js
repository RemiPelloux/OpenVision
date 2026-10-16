"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.proto2 = void 0;
const t = require("./module-6829.js"), s = require("./module-4331.js"), o = require("./module-6228.js");
exports.proto2 = (0, t.makeProtoRuntime)("proto2", (e)=>new s.InternalFieldList(e, (e)=>(0, o.normalizeFieldInfos)(e, !1)), (e)=>{
    for (const a of e.getType().fields.byMember()){
        const n = a.localName, t = e;
        if (a.repeated) t[n] = [];
        else switch(a.kind){
            case "oneof":
                t[n] = {
                    case: void 0
                };
                break;
            case "map":
                t[n] = {};
        }
    }
});
