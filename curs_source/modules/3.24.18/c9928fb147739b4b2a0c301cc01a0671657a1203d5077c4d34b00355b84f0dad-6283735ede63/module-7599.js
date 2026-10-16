Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.proto3 = void 0;
const s = require("./module-6829.js"), o = require("./module-4331.js"), r = require("./module-1455.js"), t = require("./module-6228.js");
exports.proto3 = (0, s.makeProtoRuntime)("proto3", (e)=>new o.InternalFieldList(e, (e)=>(0, t.normalizeFieldInfos)(e, !0)), (e)=>{
    for (const a of e.getType().fields.byMember()){
        if (a.opt) continue;
        const n = a.localName, s = e;
        if (a.repeated) s[n] = [];
        else switch(a.kind){
            case "oneof":
                s[n] = {
                    case: void 0
                };
                break;
            case "enum":
                s[n] = 0;
                break;
            case "map":
                s[n] = {};
                break;
            case "scalar":
                s[n] = (0, r.scalarZeroValue)(a.T, a.L);
        }
    }
});
