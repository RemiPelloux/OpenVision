"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.proto3 = void 0;
const n = require("./module-6829.js"), s = require("./module-4331.js"), i = require("./module-1455.js"), o = require("./module-6228.js");
exports.proto3 = (0, n.makeProtoRuntime)("proto3", (t)=>new s.InternalFieldList(t, (t)=>(0, o.normalizeFieldInfos)(t, !0)), (t)=>{
    for (const e of t.getType().fields.byMember()){
        if (e.opt) continue;
        const r = e.localName, n = t;
        if (e.repeated) n[r] = [];
        else switch(e.kind){
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
                n[r] = (0, i.scalarZeroValue)(e.T, e.L);
        }
    }
});
