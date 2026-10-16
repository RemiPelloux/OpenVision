import { MS } from "./default.js";
import { oJ } from "./find.js";
import { Cir } from "./hast-to-react.js";
import { EB, SB, yC } from "./index_10.js";
import { Qmr } from "./index_100.js";
import { kNe, vNe } from "./index_11.js";
import { CNe, xNe } from "./index_14.js";
import { _C } from "./index_30.js";
import { Ife } from "./index_31.js";
import { N$e } from "./index_4.mjs";
import { pPt } from "./index_90.js";
import { fxi } from "./index_91.js";
import { qfe } from "./index_92.js";
import { dMe } from "./index_93.js";
import { _xi } from "./index_96.js";
import { N0 } from "./index_99.js";
import { i } from "./plugin-brand-icon.js";
function efr(r, e) {
    if (!e || e.Fragment === void 0) throw new TypeError("Expected `Fragment` in options");
    const a = e.filePath || void 0;
    let s;
    if (e.development) {
        if (typeof e.jsxDEV != "function") throw new TypeError("Expected `jsxDEV` in options when `development: true`");
        s = cfr(a, e.jsxDEV);
    } else {
        if (typeof e.jsx != "function") throw new TypeError("Expected `jsx` in production options");
        if (typeof e.jsxs != "function") throw new TypeError("Expected `jsxs` in production options");
        s = sfr(a, e.jsx, e.jsxs);
    }
    const l = {
        Fragment: e.Fragment,
        ancestors: [],
        components: e.components || {},
        create: s,
        elementAttributeNameCase: e.elementAttributeNameCase || "react",
        evaluater: e.createEvaluater ? e.createEvaluater() : void 0,
        filePath: a,
        ignoreInvalidStyle: e.ignoreInvalidStyle || !1,
        passKeys: e.passKeys !== !1,
        passNode: e.passNode || !1,
        schema: e.space === "svg" ? yC : SB,
        stylePropertyNameCase: e.stylePropertyNameCase || "dom",
        tableCellAlignToStyle: e.tableCellAlignToStyle !== !1
    }, u = yPt(l, r, void 0);
    return u && typeof u != "string" ? u : l.create(r, l.Fragment, {
        children: u || void 0
    }, void 0);
}
function yPt(r, e, a) {
    if (e.type === "element") return tfr(r, e, a);
    if (e.type === "mdxFlowExpression" || e.type === "mdxTextExpression") return nfr(r, e);
    if (e.type === "mdxJsxFlowElement" || e.type === "mdxJsxTextElement") return ifr(r, e, a);
    if (e.type === "mdxjsEsm") return rfr(r, e);
    if (e.type === "root") return afr(r, e, a);
    if (e.type === "text") return ofr(r, e);
}
function tfr(r, e, a) {
    const s = r.schema;
    let l = s;
    e.tagName.toLowerCase() === "svg" && s.space === "html" && (l = yC, r.schema = l), r.ancestors.push(e);
    const u = _Pt(r, e.tagName, !1), p = lfr(r, e);
    let m = fMe(r, e);
    return wfr.has(e.tagName) && (m = m.filter(function(b) {
        return typeof b == "string" ? !qfe(b) : !0;
    })), wPt(r, p, u, e), mMe(p, m), r.ancestors.pop(), r.schema = s, r.create(e, u, p, a);
}
function nfr(r, e) {
    if (e.data && e.data.estree && r.evaluater) {
        const s = e.data.estree.body[0];
        return s.type, r.evaluater.evaluateExpression(s.expression);
    }
    $J(r, e.position);
}
function rfr(r, e) {
    if (e.data && e.data.estree && r.evaluater) return r.evaluater.evaluateProgram(e.data.estree);
    $J(r, e.position);
}
function ifr(r, e, a) {
    const s = r.schema;
    let l = s;
    e.name === "svg" && s.space === "html" && (l = yC, r.schema = l), r.ancestors.push(e);
    const u = e.name === null ? r.Fragment : _Pt(r, e.name, !0), p = ufr(r, e), m = fMe(r, e);
    return wPt(r, p, u, e), mMe(p, m), r.ancestors.pop(), r.schema = s, r.create(e, u, p, a);
}
function afr(r, e, a) {
    const s = {};
    return mMe(s, fMe(r, e)), r.create(e, r.Fragment, s, a);
}
function ofr(r, e) {
    return e.value;
}
function wPt(r, e, a, s) {
    typeof a != "string" && a !== r.Fragment && r.passNode && (e.node = s);
}
function mMe(r, e) {
    if (e.length > 0) {
        const a = e.length > 1 ? e : e[0];
        a && (r.children = a);
    }
}
function sfr(r, e, a) {
    return s;
    function s(l, u, p, m) {
        const g = Array.isArray(p.children) ? a : e;
        return m ? g(u, p, m) : g(u, p);
    }
}
function cfr(r, e) {
    return a;
    function a(s, l, u, p) {
        const m = Array.isArray(u.children), b = _C(s);
        return e(l, u, p, m, {
            columnNumber: b ? b.column - 1 : void 0,
            fileName: r,
            lineNumber: b ? b.line : void 0
        }, void 0);
    }
}
function lfr(r, e) {
    const a = {};
    let s, l;
    for(l in e.properties)if (l !== "children" && hMe.call(e.properties, l)) {
        const u = dfr(r, l, e.properties[l]);
        if (u) {
            const [p, m] = u;
            r.tableCellAlignToStyle && p === "align" && typeof m == "string" && _fr.has(e.tagName) ? s = m : a[p] = m;
        }
    }
    if (s) {
        const u = a.style || (a.style = {});
        u[r.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = s;
    }
    return a;
}
function ufr(r, e) {
    const a = {};
    for (const s of e.attributes)if (s.type === "mdxJsxExpressionAttribute") if (s.data && s.data.estree && r.evaluater) {
        const u = s.data.estree.body[0];
        u.type;
        const p = u.expression;
        p.type;
        const m = p.properties[0];
        m.type, Object.assign(a, r.evaluater.evaluateExpression(m.argument));
    } else $J(r, e.position);
    else {
        const l = s.name;
        let u;
        if (s.value && typeof s.value == "object") if (s.value.data && s.value.data.estree && r.evaluater) {
            const m = s.value.data.estree.body[0];
            m.type, u = r.evaluater.evaluateExpression(m.expression);
        } else $J(r, e.position);
        else u = s.value === null ? !0 : s.value;
        a[l] = u;
    }
    return a;
}
function fMe(r, e) {
    const a = [];
    let s = -1;
    const l = r.passKeys ? new Map : bfr;
    for(; ++s < e.children.length;){
        const u = e.children[s];
        let p;
        if (r.passKeys) {
            const b = u.type === "element" ? u.tagName : u.type === "mdxJsxFlowElement" || u.type === "mdxJsxTextElement" ? u.name : void 0;
            if (b) {
                const g = l.get(b) || 0;
                p = b + "-" + g, l.set(b, g + 1);
            }
        }
        const m = yPt(r, u, p);
        m !== void 0 && a.push(m);
    }
    return a;
}
function dfr(r, e, a) {
    const s = oJ(r.schema, e);
    if (!(a == null || typeof a == "number" && Number.isNaN(a))) {
        if (Array.isArray(a) && (a = s.commaSeparated ? kNe(a) : xNe(a)), s.property === "style") {
            let l = typeof a == "object" ? a : pfr(r, String(a));
            return r.stylePropertyNameCase === "css" && (l = mfr(l)), [
                "style",
                l
            ];
        }
        return [
            r.elementAttributeNameCase === "react" && s.space ? Cir[s.property] || s.property : s.attribute,
            a
        ];
    }
}
function pfr(r, e) {
    try {
        return (0, gfr.default)(e, {
            reactCompat: !0
        });
    } catch (a) {
        if (r.ignoreInvalidStyle) return {};
        const s = a, l = new N0("Cannot parse `style` attribute", {
            ancestors: r.ancestors,
            cause: s,
            ruleId: "style",
            source: "hast-util-to-jsx-runtime"
        });
        throw l.file = r.filePath || void 0, l.url = kPt + "#cannot-parse-style-attribute", l;
    }
}
function _Pt(r, e, a) {
    let s;
    if (!a) s = {
        type: "Literal",
        value: e
    };
    else if (e.includes(".")) {
        const l = e.split(".");
        let u = -1, p;
        for(; ++u < l.length;){
            const m = pPt(l[u]) ? {
                type: "Identifier",
                name: l[u]
            } : {
                type: "Literal",
                value: l[u]
            };
            p = p ? {
                type: "MemberExpression",
                object: p,
                property: m,
                computed: !!(u && m.type === "Literal"),
                optional: !1
            } : m;
        }
        s = p;
    } else s = pPt(e) && !/^[a-z]/.test(e) ? {
        type: "Identifier",
        name: e
    } : {
        type: "Literal",
        value: e
    };
    if (s.type === "Literal") {
        const l = s.value;
        return hMe.call(r.components, l) ? r.components[l] : l;
    }
    if (r.evaluater) return r.evaluater.evaluateExpression(s);
    $J(r);
}
function $J(r, e) {
    const a = new N0("Cannot handle MDX estrees without `createEvaluater`", {
        ancestors: r.ancestors,
        place: e,
        ruleId: "mdx-estree",
        source: "hast-util-to-jsx-runtime"
    });
    throw a.file = r.filePath || void 0, a.url = kPt + "#cannot-handle-mdx-estrees-without-createevaluater", a;
}
function mfr(r) {
    const e = {};
    let a;
    for(a in r)hMe.call(r, a) && (e[ffr(a)] = r[a]);
    return e;
}
function ffr(r) {
    let e = r.replace(yfr, hfr);
    return e.slice(0, 3) === "ms-" && (e = "-" + e), e;
}
function hfr(r) {
    return "-" + r.toLowerCase();
}
var gfr, hMe, bfr, yfr, wfr, _fr, kPt;
export { $J, _Pt, _fr, afr, bfr, cfr, dfr, efr, fMe, ffr, gfr, hMe, hfr, ifr, kPt, lfr, mMe, mfr, nfr, ofr, pfr, rfr, sfr, tfr, ufr, wPt, wfr, yPt, yfr };
var __wakaru_xxi_initialized = false;
export function xxi() {
if (__wakaru_xxi_initialized) return;
__wakaru_xxi_initialized = true;
vNe(), MS(), fxi(), dMe(), EB(), CNe(), gfr = N$e(_xi(), 1), Ife(), Qmr(), hMe = {}.hasOwnProperty, bfr = new Map, yfr = /[A-Z]/g, wfr = new Set([
    "table",
    "tbody",
    "thead",
    "tfoot",
    "tr"
]), _fr = new Set([
    "td",
    "th"
]), kPt = "https://github.com/syntax-tree/hast-util-to-jsx-runtime", i(efr, "toJsxRuntime"), i(yPt, "one"), i(tfr, "element"), i(nfr, "mdxExpression"), i(rfr, "mdxEsm"), i(ifr, "mdxJsxElement"), i(afr, "root"), i(ofr, "text"), i(wPt, "addNode"), i(mMe, "addChildren"), i(sfr, "productionCreate"), i(cfr, "developmentCreate"), i(lfr, "createElementProps"), i(ufr, "createJsxElementProps"), i(fMe, "createChildren"), i(dfr, "createProperty"), i(pfr, "parseStyle"), i(_Pt, "findComponentFromName"), i($J, "crashEstree"), i(mfr, "transformStylesToCssCasing"), i(ffr, "transformStyleToCssCasing"), i(hfr, "toDash");

}
