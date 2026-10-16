require.r(exports);
require.d(exports, {
    makeMessageType: ()=>makeMessageType
});
var _message_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-12.js");
function makeMessageType(runtime, typeName, fields, opt) {
    const localName = opt?.localName ?? typeName.substring(typeName.lastIndexOf(".") + 1);
    const type = {
        [localName]: function(data) {
            runtime.util.initFields(this);
            runtime.util.initPartial(data, this);
        }
    }[localName];
    Object.setPrototypeOf(type.prototype, new _message_js__WEBPACK_IMPORTED_MODULE_0__.Message());
    Object.assign(type, {
        runtime,
        typeName,
        fields: runtime.util.newFieldList(fields),
        fromBinary (bytes, options) {
            return new type().fromBinary(bytes, options);
        },
        fromJson (jsonValue, options) {
            return new type().fromJson(jsonValue, options);
        },
        fromJsonString (jsonString, options) {
            return new type().fromJsonString(jsonString, options);
        },
        equals (a, b) {
            return runtime.util.equals(type, a, b);
        }
    });
    return type;
}
