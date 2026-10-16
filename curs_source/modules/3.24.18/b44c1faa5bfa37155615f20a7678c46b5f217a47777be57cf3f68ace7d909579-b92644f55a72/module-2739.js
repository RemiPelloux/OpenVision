"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-95183.js"), s = {
    keyword: "format",
    type: [
        "number",
        "string"
    ],
    schemaType: "string",
    $data: !0,
    error: {
        message: ({ schemaCode: e })=>n.str`must match format "${e}"`,
        params: ({ schemaCode: e })=>n._`{format: ${e}}`
    },
    code (e, t) {
        const { gen: r, data: s, $data: o, schema: i, schemaCode: a, it: c } = e, { opts: l, errSchemaPath: u, schemaEnv: d, self: p } = c;
        l.validateFormats && (o ? function() {
            const o = r.scopeValue("formats", {
                ref: p.formats,
                code: l.code.formats
            }), i = r.const("fDef", n._`${o}[${a}]`), c = r.let("fType"), u = r.let("format");
            r.if(n._`typeof ${i} == "object" && !(${i} instanceof RegExp)`, ()=>r.assign(c, n._`${i}.type || "string"`).assign(u, n._`${i}.validate`), ()=>r.assign(c, n._`"string"`).assign(u, i)), e.fail$data((0, n.or)(!1 === l.strictSchema ? n.nil : n._`${a} && !${u}`, function() {
                const e = d.$async ? n._`(${i}.async ? await ${u}(${s}) : ${u}(${s}))` : n._`${u}(${s})`, r = n._`(typeof ${u} == "function" ? ${e} : ${u}.test(${s}))`;
                return n._`${u} && ${u} !== true && ${c} === ${t} && !${r}`;
            }()));
        }() : function() {
            const o = p.formats[i];
            if (!o) return void function() {
                if (!1 === l.strictSchema) return void p.logger.warn(e());
                throw new Error(e());
                function e() {
                    return `unknown format "${i}" ignored in schema at path "${u}"`;
                }
            }();
            if (!0 === o) return;
            const [a, c, m] = function(e) {
                const t = e instanceof RegExp ? (0, n.regexpCode)(e) : l.code.formats ? n._`${l.code.formats}${(0, n.getProperty)(i)}` : void 0, s = r.scopeValue("formats", {
                    key: i,
                    ref: e,
                    code: t
                });
                if ("object" == typeof e && !(e instanceof RegExp)) return [
                    e.type || "string",
                    e.validate,
                    n._`${s}.validate`
                ];
                return [
                    "string",
                    e,
                    s
                ];
            }(o);
            a === t && e.pass(function() {
                if ("object" == typeof o && !(o instanceof RegExp) && o.async) {
                    if (!d.$async) throw new Error("async format in sync schema");
                    return n._`await ${m}(${s})`;
                }
                return "function" == typeof c ? n._`${m}(${s})` : n._`${m}.test(${s})`;
            }());
        }());
    }
};
exports.default = s;
