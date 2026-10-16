"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.proto3 = void 0;
const n = require("./module-86829.js"), o = require("./module-94331.js"), s = require("./module-31455.js"), i = require("./module-66228.js");
exports.proto3 = (0, n.makeProtoRuntime)("proto3", (e)=>new o.InternalFieldList(e, (e)=>(0, i.normalizeFieldInfos)(e, !0)), (e)=>{
    for (const t of e.getType().fields.byMember()){
        if (t.opt) continue;
        const r = t.localName, n = e;
        if (t.repeated) n[r] = [];
        else switch(t.kind){
            case "oneof":
                n[r] = {
                    case: void 0
                };
                break;
            case "enum":
                n[r] = 0;
                break;
            case "map":
                n[r] = {};
                break;
            case "scalar":
                n[r] = (0, s.scalarZeroValue)(t.T, t.L);
        }
    }
});
