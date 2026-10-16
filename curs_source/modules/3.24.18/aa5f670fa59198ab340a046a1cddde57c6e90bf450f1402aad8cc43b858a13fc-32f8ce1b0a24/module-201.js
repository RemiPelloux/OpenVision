require.r(exports);
require.d(exports, {
    codeFromString: ()=>codeFromString,
    codeToString: ()=>codeToString
});
var _code_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-200.js");
function codeToString(value) {
    const name = _code_js__WEBPACK_IMPORTED_MODULE_0__.Code[value];
    if (typeof name != "string") {
        return value.toString();
    }
    return name[0].toLowerCase() + name.substring(1).replace(/[A-Z]/g, (c)=>"_" + c.toLowerCase());
}
let stringToCode;
function codeFromString(value) {
    if (!stringToCode) {
        stringToCode = {};
        for (const value of Object.values(_code_js__WEBPACK_IMPORTED_MODULE_0__.Code)){
            if (typeof value == "string") {
                continue;
            }
            stringToCode[codeToString(value)] = value;
        }
    }
    return stringToCode[value];
}
