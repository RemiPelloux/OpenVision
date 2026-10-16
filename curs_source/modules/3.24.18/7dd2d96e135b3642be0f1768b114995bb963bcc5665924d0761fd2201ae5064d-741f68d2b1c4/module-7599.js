"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.proto3 = void 0;
const a = require("./module-6829.js"), s = require("./module-4331.js"), o = require("./module-1455.js"), r = require("./module-6228.js");
exports.proto3 = (0, a.makeProtoRuntime)("proto3", (e)=>new s.InternalFieldList(e, (e)=>(0, r.normalizeFieldInfos)(e, !0)), (e)=>{
    for (const n of e.getType().fields.byMember()){
        if (n.opt) continue;
        const t = n.localName, a = e;
        if (n.repeated) a[t] = [];
        else switch(n.kind){
            case "oneof":
                a[t] = {
                    case: void 0
                };
                break;
            case "enum":
                a[t] = 0;
                break;
            case "map":
                a[t] = {};
                break;
            case "scalar":
                a[t] = (0, o.scalarZeroValue)(n.T, n.L);
        }
    }
});
