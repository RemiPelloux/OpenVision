"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.proto3 = void 0;
const t = require("./module-6829.js"), s = require("./module-4331.js"), o = require("./module-1455.js"), r = require("./module-6228.js");
exports.proto3 = (0, t.makeProtoRuntime)("proto3", (e)=>new s.InternalFieldList(e, (e)=>(0, r.normalizeFieldInfos)(e, !0)), (e)=>{
    for (const n of e.getType().fields.byMember()){
        if (n.opt) continue;
        const a = n.localName, t = e;
        if (n.repeated) t[a] = [];
        else switch(n.kind){
            case "oneof":
                t[a] = {
                    case: void 0
                };
                break;
            case "enum":
                t[a] = 0;
                break;
            case "map":
                t[a] = {};
                break;
            case "scalar":
                t[a] = (0, o.scalarZeroValue)(n.T, n.L);
        }
    }
});
