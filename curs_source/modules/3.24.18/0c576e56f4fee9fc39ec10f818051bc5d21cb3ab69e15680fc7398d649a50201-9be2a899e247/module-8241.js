"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-8255.js"), o = require("./module-5183.js"), s = require("./module-9657.js"), i = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
        message: ({ params: { missingProperty: e } })=>o.str`must have required property '${e}'`,
        params: ({ params: { missingProperty: e } })=>o._`{missingProperty: ${e}}`
    },
    code (e) {
        const { gen: t, schema: r, schemaCode: i, data: a, $data: c, it: u } = e, { opts: l } = u;
        if (!c && 0 === r.length) return;
        const d = r.length >= l.loopRequired;
        if (u.allErrors ? function() {
            if (d || c) e.block$data(o.nil, p);
            else for (const t of r)(0, n.checkReportMissingProp)(e, t);
        }() : function() {
            const s = t.let("missing");
            if (d || c) {
                const r = t.let("valid", !0);
                e.block$data(r, ()=>(function(r, s) {
                        e.setParams({
                            missingProperty: r
                        }), t.forOf(r, i, ()=>{
                            t.assign(s, (0, n.propertyInData)(t, a, r, l.ownProperties)), t.if((0, o.not)(s), ()=>{
                                e.error(), t.break();
                            });
                        }, o.nil);
                    })(s, r)), e.ok(r);
            } else t.if((0, n.checkMissingProp)(e, r, s)), (0, n.reportMissingProp)(e, s), t.else();
        }(), l.strictRequired) {
            const t = e.parentSchema.properties, { definedProperties: n } = e.it;
            for (const e of r)if (void 0 === (null == t ? void 0 : t[e]) && !n.has(e)) {
                const t = `required property "${e}" is not defined at "${u.schemaEnv.baseId + u.errSchemaPath}" (strictRequired)`;
                (0, s.checkStrictMode)(u, t, u.opts.strictRequired);
            }
        }
        function p() {
            t.forOf("prop", i, (r)=>{
                e.setParams({
                    missingProperty: r
                }), t.if((0, n.noPropertyInData)(t, a, r, l.ownProperties), ()=>e.error());
            });
        }
    }
};
exports.default = i;
