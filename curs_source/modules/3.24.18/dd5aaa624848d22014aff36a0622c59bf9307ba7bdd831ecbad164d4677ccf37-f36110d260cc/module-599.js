Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.proto3 = void 0;
const r = require("./module-829.js"), o = require("./module-331.js"), a = require("./module-455.js"), s = require("./module-228.js");
exports.proto3 = (0, r.makeProtoRuntime)("proto3", (e)=>new o.InternalFieldList(e, (e)=>(0, s.normalizeFieldInfos)(e, !0)), (e)=>{
    for (const t of e.getType().fields.byMember()){
        if (t.opt) continue;
        const n = t.localName, r = e;
        if (t.repeated) r[n] = [];
        else switch(t.kind){
            case "oneof":
                r[n] = {
                    case: void 0
                };
                break;
            case "enum":
                r[n] = 0;
                break;
            case "map":
                r[n] = {};
                break;
            case "scalar":
                r[n] = (0, a.scalarZeroValue)(t.T, t.L);
        }
    }
});
