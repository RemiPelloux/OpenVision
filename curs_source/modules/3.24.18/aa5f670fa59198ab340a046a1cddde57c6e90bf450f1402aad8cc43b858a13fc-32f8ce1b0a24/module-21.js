require.r(exports);
require.d(exports, {
    clearField: ()=>clearField,
    isFieldSet: ()=>isFieldSet
});
var _scalars_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-14.js");
function isFieldSet(field, target) {
    const localName = field.localName;
    if (field.repeated) {
        return target[localName].length > 0;
    }
    if (field.oneof) {
        return target[field.oneof.localName].case === localName;
    }
    switch(field.kind){
        case "enum":
        case "scalar":
            if (field.opt || field.req) {
                return target[localName] !== void 0;
            }
            if (field.kind == "enum") {
                return target[localName] !== field.T.values[0].no;
            }
            return !(0, _scalars_js__WEBPACK_IMPORTED_MODULE_0__.isScalarZeroValue)(field.T, target[localName]);
        case "message":
            return target[localName] !== void 0;
        case "map":
            return Object.keys(target[localName]).length > 0;
    }
}
function clearField(field, target) {
    const localName = field.localName;
    const implicitPresence = !field.opt && !field.req;
    if (field.repeated) {
        target[localName] = [];
    } else if (field.oneof) {
        target[field.oneof.localName] = {
            case: void 0
        };
    } else {
        switch(field.kind){
            case "map":
                target[localName] = {};
                break;
            case "enum":
                target[localName] = implicitPresence ? field.T.values[0].no : void 0;
                break;
            case "scalar":
                target[localName] = implicitPresence ? (0, _scalars_js__WEBPACK_IMPORTED_MODULE_0__.scalarZeroValue)(field.T, field.L) : void 0;
                break;
            case "message":
                target[localName] = void 0;
                break;
        }
    }
}
