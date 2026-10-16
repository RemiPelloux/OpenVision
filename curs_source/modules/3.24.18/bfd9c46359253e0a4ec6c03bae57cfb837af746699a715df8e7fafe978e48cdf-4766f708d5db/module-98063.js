"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.validateAdditionalItems = void 0;
const n = require("./module-95183.js"), s = require("./module-79657.js"), o = {
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
        Array.isArray(n) ? i(e, n) : (0, s.checkStrictMode)(r, '"additionalItems" is ignored when "items" is not an array of schemas');
    }
};
function i(e, t) {
    const { gen: r, schema: o, data: i, keyword: a, it: c } = e;
    c.items = !0;
    const l = r.const("len", n._`${i}.length`);
    if (!1 === o) e.setParams({
        len: t.length
    }), e.pass(n._`${l} <= ${t.length}`);
    else if ("object" == typeof o && !(0, s.alwaysValidSchema)(c, o)) {
        const o = r.var("valid", n._`${l} <= ${t.length}`);
        r.if((0, n.not)(o), ()=>(function(o) {
                r.forRange("i", t.length, l, (t)=>{
                    e.subschema({
                        keyword: a,
                        dataProp: t,
                        dataPropType: s.Type.Num
                    }, o), c.allErrors || r.if((0, n.not)(o), ()=>r.break());
                });
            })(o)), e.ok(o);
    }
}
exports.validateAdditionalItems = i, exports.default = o;
