"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.proto3 = void 0;
const t = require("./module-6829.js"), s = require("./module-4331.js"), o = require("./module-1455.js"), r = require("./module-6228.js");
exports.proto3 = (0, t.makeProtoRuntime)("proto3", (e)=>new s.InternalFieldList(e, (e)=>(0, r.normalizeFieldInfos)(e, !0)), (e)=>{
    for (const a of e.getType().fields.byMember()){
        if (a.opt) continue;
        const n = a.localName, t = e;
        if (a.repeated) t[n] = [];
        else switch(a.kind){
            case "oneof":
                t[n] = {
                    case: void 0
                };
                break;
            case "enum":
                t[n] = 0;
                break;
            case "map":
                t[n] = {};
                break;
            case "scalar":
                t[n] = (0, o.scalarZeroValue)(a.T, a.L);
        }
    }
});
