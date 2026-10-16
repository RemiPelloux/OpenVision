"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.boolOrEmptySchema = exports.topBoolOrEmptySchema = void 0;
const n = require("./module-34006.js"), s = require("./module-95183.js"), o = require("./module-44489.js"), i = {
    message: "boolean schema is false"
};
function a(e, t) {
    const { gen: r, data: s } = e, o = {
        gen: r,
        keyword: "false schema",
        data: s,
        schema: !1,
        schemaCode: !1,
        schemaValue: !1,
        params: {},
        it: e
    };
    (0, n.reportError)(o, i, void 0, t);
}
exports.topBoolOrEmptySchema = function(e) {
    const { gen: t, schema: r, validateName: n } = e;
    !1 === r ? a(e, !1) : "object" == typeof r && !0 === r.$async ? t.return(o.default.data) : (t.assign(s._`${n}.errors`, null), t.return(!0));
}, exports.boolOrEmptySchema = function(e, t) {
    const { gen: r, schema: n } = e;
    !1 === n ? (r.var(t, !1), a(e)) : r.var(t, !0);
};
