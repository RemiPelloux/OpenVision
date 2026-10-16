"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-68255.js"), o = require("./module-95183.js"), s = require("./module-79657.js"), i = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
        message: ({ params: { missingProperty: e } })=>o.str`must have required property '${e}'`,
        params: ({ params: { missingProperty: e } })=>o._`{missingProperty: ${e}}`
    },
    code (e) {
        const { gen: t, schema: r, schemaCode: i, data: a, $data: l, it: c } = e, { opts: u } = c;
        if (!l && 0 === r.length) return;
        const d = r.length >= u.loopRequired;
        if (c.allErrors ? function() {
            if (d || l) e.block$data(o.nil, p);
            else for (const t of r)(0, n.checkReportMissingProp)(e, t);
        }() : function() {
            const s = t.let("missing");
            if (d || l) {
                const r = t.let("valid", !0);
                e.block$data(r, ()=>(function(r, s) {
                        e.setParams({
                            missingProperty: r
                        }), t.forOf(r, i, ()=>{
                            t.assign(s, (0, n.propertyInData)(t, a, r, u.ownProperties)), t.if((0, o.not)(s), ()=>{
                                e.error(), t.break();
                            });
                        }, o.nil);
                    })(s, r)), e.ok(r);
            } else t.if((0, n.checkMissingProp)(e, r, s)), (0, n.reportMissingProp)(e, s), t.else();
        }(), u.strictRequired) {
            const t = e.parentSchema.properties, { definedProperties: n } = e.it;
            for (const e of r)if (void 0 === (null == t ? void 0 : t[e]) && !n.has(e)) {
                const t = `required property "${e}" is not defined at "${c.schemaEnv.baseId + c.errSchemaPath}" (strictRequired)`;
                (0, s.checkStrictMode)(c, t, c.opts.strictRequired);
            }
        }
        function p() {
            t.forOf("prop", i, (r)=>{
                e.setParams({
                    missingProperty: r
                }), t.if((0, n.noPropertyInData)(t, a, r, u.ownProperties), ()=>e.error());
            });
        }
    }
};
exports.default = i;
