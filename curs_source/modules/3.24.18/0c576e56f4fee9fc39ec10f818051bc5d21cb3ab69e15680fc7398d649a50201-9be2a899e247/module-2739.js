"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-5183.js"), o = {
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
        const { gen: r, data: o, $data: s, schema: i, schemaCode: a, it: c } = e, { opts: u, errSchemaPath: l, schemaEnv: d, self: p } = c;
        u.validateFormats && (s ? function() {
            const s = r.scopeValue("formats", {
                ref: p.formats,
                code: u.code.formats
            }), i = r.const("fDef", n._`${s}[${a}]`), c = r.let("fType"), l = r.let("format");
            r.if(n._`typeof ${i} == "object" && !(${i} instanceof RegExp)`, ()=>r.assign(c, n._`${i}.type || "string"`).assign(l, n._`${i}.validate`), ()=>r.assign(c, n._`"string"`).assign(l, i)), e.fail$data((0, n.or)(!1 === u.strictSchema ? n.nil : n._`${a} && !${l}`, function() {
                const e = d.$async ? n._`(${i}.async ? await ${l}(${o}) : ${l}(${o}))` : n._`${l}(${o})`, r = n._`(typeof ${l} == "function" ? ${e} : ${l}.test(${o}))`;
                return n._`${l} && ${l} !== true && ${c} === ${t} && !${r}`;
            }()));
        }() : function() {
            const s = p.formats[i];
            if (!s) return void function() {
                if (!1 === u.strictSchema) return void p.logger.warn(e());
                throw new Error(e());
                function e() {
                    return `unknown format "${i}" ignored in schema at path "${l}"`;
                }
            }();
            if (!0 === s) return;
            const [a, c, f] = function(e) {
                const t = e instanceof RegExp ? (0, n.regexpCode)(e) : u.code.formats ? n._`${u.code.formats}${(0, n.getProperty)(i)}` : void 0, o = r.scopeValue("formats", {
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
                    return n._`await ${f}(${o})`;
                }
                return "function" == typeof c ? n._`${f}(${o})` : n._`${f}.test(${o})`;
            }());
        }());
    }
};
exports.default = o;
