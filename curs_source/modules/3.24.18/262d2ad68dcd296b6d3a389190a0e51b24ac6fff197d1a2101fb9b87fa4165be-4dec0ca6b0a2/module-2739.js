"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-95183.js"), o = {
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
        const { gen: r, data: o, $data: s, schema: i, schemaCode: a, it: l } = e, { opts: c, errSchemaPath: u, schemaEnv: d, self: p } = l;
        c.validateFormats && (s ? function() {
            const s = r.scopeValue("formats", {
                ref: p.formats,
                code: c.code.formats
            }), i = r.const("fDef", n._`${s}[${a}]`), l = r.let("fType"), u = r.let("format");
            r.if(n._`typeof ${i} == "object" && !(${i} instanceof RegExp)`, ()=>r.assign(l, n._`${i}.type || "string"`).assign(u, n._`${i}.validate`), ()=>r.assign(l, n._`"string"`).assign(u, i)), e.fail$data((0, n.or)(!1 === c.strictSchema ? n.nil : n._`${a} && !${u}`, function() {
                const e = d.$async ? n._`(${i}.async ? await ${u}(${o}) : ${u}(${o}))` : n._`${u}(${o})`, r = n._`(typeof ${u} == "function" ? ${e} : ${u}.test(${o}))`;
                return n._`${u} && ${u} !== true && ${l} === ${t} && !${r}`;
            }()));
        }() : function() {
            const s = p.formats[i];
            if (!s) return void function() {
                if (!1 === c.strictSchema) return void p.logger.warn(e());
                throw new Error(e());
                function e() {
                    return `unknown format "${i}" ignored in schema at path "${u}"`;
                }
            }();
            if (!0 === s) return;
            const [a, l, h] = function(e) {
                const t = e instanceof RegExp ? (0, n.regexpCode)(e) : c.code.formats ? n._`${c.code.formats}${(0, n.getProperty)(i)}` : void 0, o = r.scopeValue("formats", {
                    key: i,
                    ref: e,
                    code: t
                });
                if ("object" == typeof e && !(e instanceof RegExp)) return [
                    e.type || "string",
                    e.validate,
                    n._`${o}.validate`
                ];
                return [
                    "string",
                    e,
                    o
                ];
            }(s);
            a === t && e.pass(function() {
                if ("object" == typeof s && !(s instanceof RegExp) && s.async) {
                    if (!d.$async) throw new Error("async format in sync schema");
                    return n._`await ${h}(${o})`;
                }
                return "function" == typeof l ? n._`${h}(${o})` : n._`${h}.test(${o})`;
            }());
        }());
    }
};
exports.default = o;
