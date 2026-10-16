"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.proto2 = void 0;
const n = require("./module-6829.js"), s = require("./module-4331.js"), i = require("./module-6228.js");
exports.proto2 = (0, n.makeProtoRuntime)("proto2", (t)=>new s.InternalFieldList(t, (t)=>(0, i.normalizeFieldInfos)(t, !1)), (t)=>{
    for (const e of t.getType().fields.byMember()){
        const r = e.localName, n = t;
        if (e.repeated) n[r] = [];
        else switch(e.kind){
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
