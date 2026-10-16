require.r(exports);
require.d(exports, {
    proto3: ()=>proto3
});
var _private_proto_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-8.js");
var _private_field_list_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-27.js");
var _private_scalars_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-14.js");
var _private_field_normalize_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-28.js");
const proto3 = (0, _private_proto_runtime_js__WEBPACK_IMPORTED_MODULE_0__.makeProtoRuntime)("proto3", (fields)=>{
    return new _private_field_list_js__WEBPACK_IMPORTED_MODULE_1__.InternalFieldList(fields, (source)=>(0, _private_field_normalize_js__WEBPACK_IMPORTED_MODULE_3__.normalizeFieldInfos)(source, true));
}, (target)=>{
    for (const member of target.getType().fields.byMember()){
        if (member.opt) {
            continue;
        }
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
            case "enum":
                t[name] = 0;
                break;
            case "map":
                t[name] = {};
                break;
            case "scalar":
                t[name] = (0, _private_scalars_js__WEBPACK_IMPORTED_MODULE_2__.scalarZeroValue)(member.T, member.L);
                break;
            case "message":
                break;
        }
    }
});
