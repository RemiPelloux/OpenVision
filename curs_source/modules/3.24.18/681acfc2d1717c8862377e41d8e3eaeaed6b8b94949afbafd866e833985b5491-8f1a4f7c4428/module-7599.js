"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.proto3 = void 0;
const n = require("./module-6829.js"), r = require("./module-4331.js"), o = require("./module-1455.js"), s = require("./module-6228.js");
exports.proto3 = (0, n.makeProtoRuntime)("proto3", (e)=>new r.InternalFieldList(e, (e)=>(0, s.normalizeFieldInfos)(e, !0)), (e)=>{
    for (const t of e.getType().fields.byMember()){
        if (t.opt) continue;
        const A = t.localName, n = e;
        if (t.repeated) n[A] = [];
        else switch(t.kind){
            case "oneof":
                n[A] = {
                    case: void 0
                };
                break;
            case "enum":
                n[A] = 0;
                break;
            case "map":
                n[A] = {};
                break;
            case "scalar":
                n[A] = (0, o.scalarZeroValue)(t.T, t.L);
        }
    }
});
