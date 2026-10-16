"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-95183.js"), s = require("./module-79657.js"), o = require("./module-79244.js"), i = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
        message: "must be equal to one of the allowed values",
        params: ({ schemaCode: e })=>n._`{allowedValues: ${e}}`
    },
    code (e) {
        const { gen: t, data: r, $data: i, schema: a, schemaCode: c, it: l } = e;
        if (!i && 0 === a.length) throw new Error("enum must have non-empty array");
        const u = a.length >= l.opts.loopEnum;
        let d;
        const p = ()=>null != d ? d : d = (0, s.useFunc)(t, o.default);
        let m;
        if (u || i) m = t.let("valid"), e.block$data(m, function() {
            t.assign(m, !1), t.forOf("v", c, (e)=>t.if(n._`${p()}(${r}, ${e})`, ()=>t.assign(m, !0).break()));
        });
        else {
            if (!Array.isArray(a)) throw new Error("ajv implementation error");
            const e = t.const("vSchema", c);
            m = (0, n.or)(...a.map((t, s)=>(function(e, t) {
                    const s = a[t];
                    return "object" == typeof s && null !== s ? n._`${p()}(${r}, ${e}[${t}])` : n._`${r} === ${s}`;
                })(e, s)));
        }
        e.pass(m);
    }
};
exports.default = i;
