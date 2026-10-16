"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.formatLimitDefinition = void 0;
const n = require("./module-97712.js"), s = require("./module-95183.js"), o = s.operators, i = {
    formatMaximum: {
        okStr: "<=",
        ok: o.LTE,
        fail: o.GT
    },
    formatMinimum: {
        okStr: ">=",
        ok: o.GTE,
        fail: o.LT
    },
    formatExclusiveMaximum: {
        okStr: "<",
        ok: o.LT,
        fail: o.GTE
    },
    formatExclusiveMinimum: {
        okStr: ">",
        ok: o.GT,
        fail: o.LTE
    }
}, a = {
    message: ({ keyword: e, schemaCode: t })=>s.str`should be ${i[e].okStr} ${t}`,
    params: ({ keyword: e, schemaCode: t })=>s._`{comparison: ${i[e].okStr}, limit: ${t}}`
};
exports.formatLimitDefinition = {
    keyword: Object.keys(i),
    type: "string",
    schemaType: "string",
    $data: !0,
    error: a,
    code (e) {
        const { gen: t, data: r, schemaCode: o, keyword: a, it: c } = e, { opts: l, self: u } = c;
        if (!l.validateFormats) return;
        const d = new n.KeywordCxt(c, u.RULES.all.format.definition, "format");
        function p(e) {
            return s._`${e}.compare(${r}, ${o}) ${i[a].fail} 0`;
        }
        d.$data ? function() {
            const r = t.scopeValue("formats", {
                ref: u.formats,
                code: l.code.formats
            }), n = t.const("fmt", s._`${r}[${d.schemaCode}]`);
            e.fail$data((0, s.or)(s._`typeof ${n} != "object"`, s._`${n} instanceof RegExp`, s._`typeof ${n}.compare != "function"`, p(n)));
        }() : function() {
            const r = d.schema, n = u.formats[r];
            if (!n || !0 === n) return;
            if ("object" != typeof n || n instanceof RegExp || "function" != typeof n.compare) throw new Error(`"${a}": format "${r}" does not define "compare" function`);
            const o = t.scopeValue("formats", {
                key: r,
                ref: n,
                code: l.code.formats ? s._`${l.code.formats}${(0, s.getProperty)(r)}` : void 0
            });
            e.fail$data(p(o));
        }();
    },
    dependencies: [
        "format"
    ]
};
exports.default = (e)=>(e.addKeyword(exports.formatLimitDefinition), e);
