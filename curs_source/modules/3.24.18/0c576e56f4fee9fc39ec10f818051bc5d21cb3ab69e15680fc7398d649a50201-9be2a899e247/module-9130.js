"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.formatLimitDefinition = void 0;
const n = require("./module-7712.js"), o = require("./module-5183.js"), s = o.operators, i = {
    formatMaximum: {
        okStr: "<=",
        ok: s.LTE,
        fail: s.GT
    },
    formatMinimum: {
        okStr: ">=",
        ok: s.GTE,
        fail: s.LT
    },
    formatExclusiveMaximum: {
        okStr: "<",
        ok: s.LT,
        fail: s.GTE
    },
    formatExclusiveMinimum: {
        okStr: ">",
        ok: s.GT,
        fail: s.LTE
    }
}, a = {
    message: ({ keyword: e, schemaCode: t })=>o.str`should be ${i[e].okStr} ${t}`,
    params: ({ keyword: e, schemaCode: t })=>o._`{comparison: ${i[e].okStr}, limit: ${t}}`
};
exports.formatLimitDefinition = {
    keyword: Object.keys(i),
    type: "string",
    schemaType: "string",
    $data: !0,
    error: a,
    code (e) {
        const { gen: t, data: r, schemaCode: s, keyword: a, it: c } = e, { opts: u, self: l } = c;
        if (!u.validateFormats) return;
        const d = new n.KeywordCxt(c, l.RULES.all.format.definition, "format");
        function p(e) {
            return o._`${e}.compare(${r}, ${s}) ${i[a].fail} 0`;
        }
        d.$data ? function() {
            const r = t.scopeValue("formats", {
                ref: l.formats,
                code: u.code.formats
            }), n = t.const("fmt", o._`${r}[${d.schemaCode}]`);
            e.fail$data((0, o.or)(o._`typeof ${n} != "object"`, o._`${n} instanceof RegExp`, o._`typeof ${n}.compare != "function"`, p(n)));
        }() : function() {
            const r = d.schema, n = l.formats[r];
            if (!n || !0 === n) return;
            if ("object" != typeof n || n instanceof RegExp || "function" != typeof n.compare) throw new Error(`"${a}": format "${r}" does not define "compare" function`);
            const s = t.scopeValue("formats", {
                key: r,
                ref: n,
                code: u.code.formats ? o._`${u.code.formats}${(0, o.getProperty)(r)}` : void 0
            });
            e.fail$data(p(s));
        }();
    },
    dependencies: [
        "format"
    ]
};
exports.default = (e)=>(e.addKeyword(exports.formatLimitDefinition), e);
