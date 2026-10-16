Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.proto2 = void 0;
const o = require("./module-829.js"), s = require("./module-331.js"), t = require("./module-228.js");
exports.proto2 = (0, o.makeProtoRuntime)("proto2", (e)=>new s.InternalFieldList(e, (e)=>(0, t.normalizeFieldInfos)(e, !1)), (e)=>{
    for (const a of e.getType().fields.byMember()){
        const n = a.localName, o = e;
        if (a.repeated) o[n] = [];
        else switch(a.kind){
            case "oneof":
                o[n] = {
                    case: void 0
                };
                break;
            case "map":
                o[n] = {};
        }
    }
});
