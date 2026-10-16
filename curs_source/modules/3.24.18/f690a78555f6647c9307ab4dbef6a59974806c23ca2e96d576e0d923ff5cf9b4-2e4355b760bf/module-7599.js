"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.proto3 = void 0;
const n = require("./module-6829.js"), r = require("./module-4331.js"), o = require("./module-1455.js"), s = require("./module-6228.js");
exports.proto3 = (0, n.makeProtoRuntime)("proto3", (e)=>new r.InternalFieldList(e, (e)=>(0, s.normalizeFieldInfos)(e, !0)), (e)=>{
    for (const A of e.getType().fields.byMember()){
        if (A.opt) continue;
        const t = A.localName, n = e;
        if (A.repeated) n[t] = [];
        else switch(A.kind){
            case "oneof":
                n[t] = {
                    case: void 0
                };
                break;
            case "enum":
                n[t] = 0;
                break;
            case "map":
                n[t] = {};
                break;
            case "scalar":
                n[t] = (0, o.scalarZeroValue)(A.T, A.L);
        }
    }
});
