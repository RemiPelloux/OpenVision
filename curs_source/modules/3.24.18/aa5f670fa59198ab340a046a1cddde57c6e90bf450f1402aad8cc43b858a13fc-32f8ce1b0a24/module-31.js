require.r(exports);
require.d(exports, {
    proto2: ()=>proto2
});
var _private_proto_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-8.js");
var _private_field_list_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-27.js");
var _private_field_normalize_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-28.js");
const proto2 = (0, _private_proto_runtime_js__WEBPACK_IMPORTED_MODULE_0__.makeProtoRuntime)("proto2", (fields)=>{
    return new _private_field_list_js__WEBPACK_IMPORTED_MODULE_1__.InternalFieldList(fields, (source)=>(0, _private_field_normalize_js__WEBPACK_IMPORTED_MODULE_2__.normalizeFieldInfos)(source, false));
}, (target)=>{
    for (const member of target.getType().fields.byMember()){
        const name = member.localName, t = target;
        if (member.repeated) {
            t[name] = [];
            continue;
        }
        switch(member.kind){
            case "oneof":
                t[name] = {
                    case: void 0
                };
                break;
            case "map":
                t[name] = {};
                break;
            case "scalar":
            case "enum":
            case "message":
                break;
        }
    }
});
