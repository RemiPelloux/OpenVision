"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.proto2 = void 0;
const n = require("./module-86829.js"), o = require("./module-94331.js"), s = require("./module-66228.js");
exports.proto2 = (0, n.makeProtoRuntime)("proto2", (e)=>new o.InternalFieldList(e, (e)=>(0, s.normalizeFieldInfos)(e, !1)), (e)=>{
    for (const t of e.getType().fields.byMember()){
        const r = t.localName, n = e;
        if (t.repeated) n[r] = [];
        else switch(t.kind){
            case "oneof":
                n[r] = {
                    case: void 0
                };
                break;
            case "map":
                n[r] = {};
        }
    }
});
