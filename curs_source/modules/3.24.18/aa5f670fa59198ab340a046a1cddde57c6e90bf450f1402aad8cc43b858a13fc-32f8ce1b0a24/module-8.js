require.r(exports);
require.d(exports, {
    makeProtoRuntime: ()=>makeProtoRuntime
});
var _enum_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-9.js");
var _message_type_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-11.js");
var _extensions_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-13.js");
var _json_format_js__WEBPACK_IMPORTED_MODULE_3__ = require("./module-18.js");
var _binary_format_js__WEBPACK_IMPORTED_MODULE_4__ = require("./module-24.js");
var _util_common_js__WEBPACK_IMPORTED_MODULE_5__ = require("./module-26.js");
function makeProtoRuntime(syntax, newFieldList, initFields) {
    return {
        syntax,
        json: (0, _json_format_js__WEBPACK_IMPORTED_MODULE_3__.makeJsonFormat)(),
        bin: (0, _binary_format_js__WEBPACK_IMPORTED_MODULE_4__.makeBinaryFormat)(),
        util: {
            ...(0, _util_common_js__WEBPACK_IMPORTED_MODULE_5__.makeUtilCommon)(),
            newFieldList,
            initFields
        },
        makeMessageType (typeName, fields, opt) {
            return (0, _message_type_js__WEBPACK_IMPORTED_MODULE_1__.makeMessageType)(this, typeName, fields, opt);
        },
        makeEnum: _enum_js__WEBPACK_IMPORTED_MODULE_0__.makeEnum,
        makeEnumType: _enum_js__WEBPACK_IMPORTED_MODULE_0__.makeEnumType,
        getEnumType: _enum_js__WEBPACK_IMPORTED_MODULE_0__.getEnumType,
        makeExtension (typeName, extendee, field) {
            return (0, _extensions_js__WEBPACK_IMPORTED_MODULE_2__.makeExtension)(this, typeName, extendee, field);
        }
    };
}
