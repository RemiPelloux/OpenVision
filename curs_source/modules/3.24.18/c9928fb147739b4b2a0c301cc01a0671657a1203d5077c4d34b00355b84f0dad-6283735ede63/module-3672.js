Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.proto2 = void 0;
const s = require("./module-6829.js"), o = require("./module-4331.js"), r = require("./module-6228.js");
exports.proto2 = (0, s.makeProtoRuntime)("proto2", (e)=>new o.InternalFieldList(e, (e)=>(0, r.normalizeFieldInfos)(e, !1)), (e)=>{
    for (const a of e.getType().fields.byMember()){
        const n = a.localName, s = e;
        if (a.repeated) s[n] = [];
        else switch(a.kind){
            case "oneof":
                s[n] = {
                    case: void 0
                };
                break;
            case "map":
                s[n] = {};
        }
    }
});
