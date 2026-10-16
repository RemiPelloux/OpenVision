require.r(exports);
require.d(exports, {
    normalizeFieldInfos: ()=>normalizeFieldInfos
});
var _field_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-29.js");
var _names_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-30.js");
var _scalar_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-17.js");
function normalizeFieldInfos(fieldInfos, packedByDefault) {
    const r = [];
    let o;
    for (const field of typeof fieldInfos == "function" ? fieldInfos() : fieldInfos){
        const f = field;
        f.localName = (0, _names_js__WEBPACK_IMPORTED_MODULE_1__.localFieldName)(field.name, field.oneof !== void 0);
        f.jsonName = field.jsonName ?? (0, _names_js__WEBPACK_IMPORTED_MODULE_1__.fieldJsonName)(field.name);
        f.repeated = field.repeated ?? false;
        if (field.kind == "scalar") {
            f.L = field.L ?? _scalar_js__WEBPACK_IMPORTED_MODULE_2__.LongType.BIGINT;
        }
        f.delimited = field.delimited ?? false;
        f.req = field.req ?? false;
        f.opt = field.opt ?? false;
        if (field.packed === void 0) {
            if (packedByDefault) {
                f.packed = field.kind == "enum" || field.kind == "scalar" && field.T != _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.BYTES && field.T != _scalar_js__WEBPACK_IMPORTED_MODULE_2__.ScalarType.STRING;
            } else {
                f.packed = false;
            }
        }
        if (field.oneof !== void 0) {
            const ooname = typeof field.oneof == "string" ? field.oneof : field.oneof.name;
            if (!o || o.name != ooname) {
                o = new _field_js__WEBPACK_IMPORTED_MODULE_0__.InternalOneofInfo(ooname);
            }
            f.oneof = o;
            o.addField(f);
        }
        r.push(f);
    }
    return r;
}
