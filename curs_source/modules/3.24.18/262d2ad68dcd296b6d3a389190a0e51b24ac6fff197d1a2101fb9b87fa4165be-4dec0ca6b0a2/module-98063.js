"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.validateAdditionalItems = void 0;
const n = require("./module-95183.js"), o = require("./module-79657.js"), s = {
    keyword: "additionalItems",
    type: "array",
    schemaType: [
        "boolean",
        "object"
    ],
    before: "uniqueItems",
    error: {
        message: ({ params: { len: e } })=>n.str`must NOT have more than ${e} items`,
        params: ({ params: { len: e } })=>n._`{limit: ${e}}`
    },
    code (e) {
        const { parentSchema: t, it: r } = e, { items: n } = t;
        Array.isArray(n) ? i(e, n) : (0, o.checkStrictMode)(r, '"additionalItems" is ignored when "items" is not an array of schemas');
    }
};
function i(e, t) {
    const { gen: r, schema: s, data: i, keyword: a, it: l } = e;
    l.items = !0;
    const c = r.const("len", n._`${i}.length`);
    if (!1 === s) e.setParams({
        len: t.length
    }), e.pass(n._`${c} <= ${t.length}`);
    else if ("object" == typeof s && !(0, o.alwaysValidSchema)(l, s)) {
        const s = r.var("valid", n._`${c} <= ${t.length}`);
        r.if((0, n.not)(s), ()=>(function(s) {
                r.forRange("i", t.length, c, (t)=>{
                    e.subschema({
                        keyword: a,
                        dataProp: t,
                        dataPropType: o.Type.Num
                    }, s), l.allErrors || r.if((0, n.not)(s), ()=>r.break());
                });
            })(s)), e.ok(s);
    }
}
exports.validateAdditionalItems = i, exports.default = s;
