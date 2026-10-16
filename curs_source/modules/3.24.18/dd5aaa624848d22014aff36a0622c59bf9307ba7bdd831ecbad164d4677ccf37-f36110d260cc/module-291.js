Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.proto2 = void 0;
const r = require("./module-829.js"), o = require("./module-331.js"), a = require("./module-228.js");
exports.proto2 = (0, r.makeProtoRuntime)("proto2", (e)=>new o.InternalFieldList(e, (e)=>(0, a.normalizeFieldInfos)(e, !1)), (e)=>{
    for (const t of e.getType().fields.byMember()){
        const n = t.localName, r = e;
        if (t.repeated) r[n] = [];
        else switch(t.kind){
            case "oneof":
                r[n] = {
                    case: void 0
                };
                break;
            case "map":
                r[n] = {};
        }
    }
});
