Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.proto3 = void 0;
const o = require("./module-829.js"), s = require("./module-331.js"), t = require("./module-455.js"), r = require("./module-228.js");
exports.proto3 = (0, o.makeProtoRuntime)("proto3", (e)=>new s.InternalFieldList(e, (e)=>(0, r.normalizeFieldInfos)(e, !0)), (e)=>{
    for (const a of e.getType().fields.byMember()){
        if (a.opt) continue;
        const n = a.localName, o = e;
        if (a.repeated) o[n] = [];
        else switch(a.kind){
            case "oneof":
                o[n] = {
                    case: void 0
                };
                break;
            case "enum":
                o[n] = 0;
                break;
            case "map":
                o[n] = {};
                break;
            case "scalar":
                o[n] = (0, t.scalarZeroValue)(a.T, a.L);
        }
    }
});
