"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-5183.js"), o = require("./module-9657.js"), s = require("./module-9244.js"), i = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
        message: "must be equal to one of the allowed values",
        params: ({ schemaCode: e })=>n._`{allowedValues: ${e}}`
    },
    code (e) {
        const { gen: t, data: r, $data: i, schema: a, schemaCode: c, it: u } = e;
        if (!i && 0 === a.length) throw new Error("enum must have non-empty array");
        const l = a.length >= u.opts.loopEnum;
        let d;
        const p = ()=>null != d ? d : d = (0, o.useFunc)(t, s.default);
        let f;
        if (l || i) f = t.let("valid"), e.block$data(f, function() {
            t.assign(f, !1), t.forOf("v", c, (e)=>t.if(n._`${p()}(${r}, ${e})`, ()=>t.assign(f, !0).break()));
        });
        else {
            if (!Array.isArray(a)) throw new Error("ajv implementation error");
            const e = t.const("vSchema", c);
            f = (0, n.or)(...a.map((t, o)=>(function(e, t) {
                    const o = a[t];
                    return "object" == typeof o && null !== o ? n._`${p()}(${r}, ${e}[${t}])` : n._`${r} === ${o}`;
                })(e, o)));
        }
        e.pass(f);
    }
};
exports.default = i;
