import { Sa } from "./Iwo.js";
import { BMr, LiS, Maa, OiS, Sia, Tit, aui, bia, liS, sDr } from "./LYd.js";
import { Zla } from "./CodeTokenizerProvider.js";
import { dUt } from "./_anysphere-ui-esm_shiki-worker.js";
import { Ala, W3r, xla } from "./atomic.js";
import { x3r } from "./closing.js";
import { Exh, Ixh, Txh } from "./comment.js";
import { _xh, bxh, fxh, hla, vxh } from "./core_2.js";
import { Paa } from "./css-variables-theme.js";
import { wxh } from "./dangerous.js";
import { Jla, Mit, eca } from "./default-code-tokenization.js";
import { mdi } from "./element_2.js";
import { R4 } from "./index_123.js";
import { FIh, GIh, OIh, Qaa, Rne, UIh, VIh, WIh, YIh, b3r, ddi, ela, exh, f3r, g3r, jIh, nUt, nla, qIh, rla, sla, txh, udi, wyn, zIh } from "./index_124.js";
import { kxh } from "./index_126.js";
import { $xh } from "./index_129.js";
import { Gxh, Hxh, Wxh } from "./index_130.js";
import { D3r, Jxh, N3r, Qxh, Xxh, Yxh, Zxh, g1t } from "./index_131.js";
import { Vwe } from "./index_132.js";
import { G3r, Kwe, Rla, _di, f1t, q3r } from "./index_133.js";
import { Hla, JAh, Pz, Y3r, ZAh, aRh, cRh, dRh, eRh, hRh, jla, lRh, nRh, oRh, pRh, rRh, sRh, tRh, uRh, wWe } from "./index_134.js";
import { U7t, oFe } from "./index_47.js";
import { Mia } from "./index_57.js";
import { Tdi, WRh, tca } from "./line-window.js";
import { XTh } from "./mdx.js";
import { JTh } from "./nginx.js";
import { nEh } from "./nim.js";
import { pAh } from "./node-utils.js";
import { sEh } from "./objective-c.js";
import { lEh } from "./objective-cpp.js";
import { dEh } from "./ocaml.js";
import { Mxh } from "./omission.js";
import { Fxh } from "./opening.js";
import { mEh } from "./perl.js";
import { vEh } from "./php.js";
import { yEh } from "./powershell.js";
import { wEh } from "./prisma.js";
import { EEh } from "./proto.js";
import { PEh } from "./rst.js";
import { NEh } from "./rust.js";
import { FEh } from "./sass.js";
import { jEh } from "./scala.js";
import { iAh } from "./scanner-BFcBmQR1.js";
import { WEh } from "./scss.js";
import { Syn, _Ih, vIh } from "./shiki-grammars.js";
import { Axh, Rz, gla } from "./siblings.js";
import { zEh } from "./svelte.js";
import { YEh } from "./swift.js";
import { QEh } from "./terraform.js";
import { Uxh } from "./text_5.js";
import { Sxh } from "./to-decimal.js";
import { yxh } from "./to-hexadecimal.js";
import { Cxh, E3r, pla } from "./to-named.js";
import { F3r, O3r, dAh, gdi, wla } from "./tokenize.js";
import { tIh } from "./toml.js";
import { HY, L3r } from "./utils_18.js";
import { hIh } from "./vue.js";
import { gIh } from "./zig.js";
export var ZTh = {};
Sa(ZTh, {
    default: ()=>JTh
});
export var eEh = {};
Sa(eEh, {
    default: ()=>nEh
});
export var iEh = {};
Sa(iEh, {
    default: ()=>sEh
});
export var oEh = {};
Sa(oEh, {
    default: ()=>lEh
});
export var cEh = {};
Sa(cEh, {
    default: ()=>dEh
});
export var hEh = {};
Sa(hEh, {
    default: ()=>mEh
});
export var gEh = {};
Sa(gEh, {
    default: ()=>vEh
});
export var _Eh = {};
Sa(_Eh, {
    default: ()=>yEh
});
export var SEh = {};
Sa(SEh, {
    default: ()=>wEh
});
export var CEh = {};
Sa(CEh, {
    default: ()=>EEh
});
export var AEh = {};
Sa(AEh, {
    default: ()=>PEh
});
export var MEh = {};
Sa(MEh, {
    default: ()=>NEh
});
export var LEh = {};
Sa(LEh, {
    default: ()=>FEh
});
export var BEh = {};
Sa(BEh, {
    default: ()=>jEh
});
export var $Eh = {};
Sa($Eh, {
    default: ()=>WEh
});
export var GEh = {};
Sa(GEh, {
    default: ()=>zEh
});
export var VEh = {};
Sa(VEh, {
    default: ()=>YEh
});
export var XEh = {};
Sa(XEh, {
    default: ()=>QEh
});
export var JEh = {};
Sa(JEh, {
    default: ()=>tIh
});
export var uIh = {};
Sa(uIh, {
    default: ()=>hIh
});
export var pIh = {};
Sa(pIh, {
    default: ()=>gIh
});
export function WrS(t) {
    const e = new Map, n = new Map, i = new Set;
    async function r(a) {
        for(let l = 1;; l++)try {
            return await a();
        } catch (c) {
            if (l >= vIh) throw c;
            await liS(_Ih);
        }
    }
    function s(a) {
        const l = Maa(a);
        return Object.hasOwn(t, l) ? l : void 0;
    }
    function o(a) {
        const l = e.get(a);
        if (l !== void 0) return Promise.resolve(l);
        const c = n.get(a);
        if (c !== void 0) return c;
        const u = t[a];
        if (u === void 0) return Promise.reject(new Error(`No shiki grammar for "${a}"`));
        const d = r(u).then((h)=>{
            e.set(a, h.default);
            for (const p of i)p();
            return h.default;
        }).finally(()=>{
            n.delete(a);
        });
        return n.set(a, d), d;
    }
    return {
        grammarIdFor: s,
        getLoadedGrammar: (a)=>e.get(a),
        loadedGrammarIds: ()=>e.keys(),
        subscribeToGrammarLoads (a) {
            return i.add(a), ()=>{
                i.delete(a);
            };
        },
        loadGrammar: o,
        ensureGrammar (a) {
            const l = s(a);
            return l === void 0 ? Promise.resolve(!0) : o(l).then(()=>!0, (c)=>(console.warn(`Shiki grammar "${l}" failed to load:`, c), !1));
        }
    };
}
export function xit(t) {
    return Syn.grammarIdFor(t);
}
export function l3r(t) {
    return Syn.getLoadedGrammar(t);
}
export function GrS() {
    return Syn.loadedGrammarIds();
}
export function fIh(t) {
    return Syn.subscribeToGrammarLoads(t);
}
export function eUt(t) {
    return Syn.ensureGrammar(t);
}
function zrS(t) {
    return Yaa(t);
}
function Yaa(t) {
    return Array.isArray(t) ? VrS(t) : t instanceof RegExp ? t : typeof t == "object" ? KrS(t) : t;
}
function VrS(t) {
    let e = [];
    for(let n = 0, i = t.length; n < i; n++)e[n] = Yaa(t[n]);
    return e;
}
function KrS(t) {
    let e = {};
    for(let n in t)e[n] = Yaa(t[n]);
    return e;
}
export function yIh(t, ...e) {
    return e.forEach((n)=>{
        for(let i in n)t[i] = n[i];
    }), t;
}
export function SIh(t) {
    const e = ~t.lastIndexOf("/") || ~t.lastIndexOf("\\");
    return e === 0 ? t : ~e === t.length - 1 ? SIh(t.substring(0, t.length - 1)) : t.substr(~e + 1);
}
function kIh(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
}
export function wIh(t, e) {
    if (t === null && e === null) return 0;
    if (!t) return -1;
    if (!e) return 1;
    let n = t.length, i = e.length;
    if (n === i) {
        for(let r = 0; r < n; r++){
            let s = kIh(t[r], e[r]);
            if (s !== 0) return s;
        }
        return 0;
    }
    return n - i;
}
function CIh(t) {
    return !!(/^#[0-9a-f]{6}$/i.test(t) || /^#[0-9a-f]{8}$/i.test(t) || /^#[0-9a-f]{3}$/i.test(t) || /^#[0-9a-f]{4}$/i.test(t));
}
export function TIh(t) {
    return t.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&");
}
export function YrS(t, e) {
    if (e.length === 0) return !0;
    for(let n = 0; n < e.length; n++){
        let i = e[n], r = !1;
        if (i === ">") {
            if (n === e.length - 1) return !1;
            i = e[++n], r = !0;
        }
        for(; t && !XrS(t.scopeName, i);){
            if (r) return !1;
            t = t.parent;
        }
        if (!t) return !1;
        t = t.parent;
    }
    return !0;
}
function XrS(t, e) {
    return e === t || t.startsWith(e) && t[e.length] === ".";
}
export function ZrS(t) {
    if (!t) return [];
    if (!t.settings || !Array.isArray(t.settings)) return [];
    let e = t.settings, n = [], i = 0;
    for(let r = 0, s = e.length; r < s; r++){
        let o = e[r];
        if (!o.settings) continue;
        let a;
        if (typeof o.scope == "string") {
            let d = o.scope;
            d = d.replace(/^[,]+/, ""), d = d.replace(/[,]+$/, ""), a = d.split(",");
        } else Array.isArray(o.scope) ? a = o.scope : a = [
            ""
        ];
        let l = -1;
        if (typeof o.settings.fontStyle == "string") {
            l = 0;
            let d = o.settings.fontStyle.split(" ");
            for(let h = 0, p = d.length; h < p; h++)switch(d[h]){
                case "italic":
                    l = l | 1;
                    break;
                case "bold":
                    l = l | 2;
                    break;
                case "underline":
                    l = l | 4;
                    break;
                case "strikethrough":
                    l = l | 8;
                    break;
            }
        }
        let c = null;
        typeof o.settings.foreground == "string" && CIh(o.settings.foreground) && (c = o.settings.foreground);
        let u = null;
        typeof o.settings.background == "string" && CIh(o.settings.background) && (u = o.settings.background);
        for(let d = 0, h = a.length; d < h; d++){
            let g = a[d].trim().split(" "), f = g[g.length - 1], _ = null;
            g.length > 1 && (_ = g.slice(0, g.length - 1), _.reverse()), n[i++] = new OIh(f, _, r, l, c, u);
        }
    }
    return n;
}
export function QrS(t, e) {
    t.sort((l, c)=>{
        let u = kIh(l.scope, c.scope);
        return u !== 0 || (u = wIh(l.parentScopes, c.parentScopes), u !== 0) ? u : l.index - c.index;
    });
    let n = 0, i = "#000000", r = "#ffffff";
    for(; t.length >= 1 && t[0].scope === "";){
        let l = t.shift();
        l.fontStyle !== -1 && (n = l.fontStyle), l.foreground !== null && (i = l.foreground), l.background !== null && (r = l.background);
    }
    let s = new FIh(e), o = new Qaa(n, s.getId(i), s.getId(r)), a = new UIh(new g3r(0, null, -1, 0, 0), []);
    for(let l = 0, c = t.length; l < c; l++){
        let u = t[l];
        a.insert(0, u.scope, u.parentScopes, u.fontStyle, s.getId(u.foreground), s.getId(u.background));
    }
    return new udi(s, o, a);
}
function VIx(t) {
    return t;
}
function KIx(t) {
    return t;
}
export function c3r(t, e) {
    const n = [], i = JrS(t);
    let r = i.next();
    for(; r !== null;){
        let l = 0;
        if (r.length === 2 && r.charAt(1) === ":") {
            switch(r.charAt(0)){
                case "R":
                    l = 1;
                    break;
                case "L":
                    l = -1;
                    break;
                default:
                    console.log(`Unknown priority ${r} in scope selector`);
            }
            r = i.next();
        }
        let c = o();
        if (n.push({
            matcher: c,
            priority: l
        }), r !== ",") break;
        r = i.next();
    }
    return n;
    function s() {
        if (r === "-") {
            r = i.next();
            const l = s();
            return (c)=>!!l && !l(c);
        }
        if (r === "(") {
            r = i.next();
            const l = a();
            return r === ")" && (r = i.next()), l;
        }
        if (EIh(r)) {
            const l = [];
            do l.push(r), r = i.next();
            while (EIh(r))
            return (c)=>e(l, c);
        }
        return null;
    }
    function o() {
        const l = [];
        let c = s();
        for(; c;)l.push(c), c = s();
        return (u)=>l.every((d)=>d(u));
    }
    function a() {
        const l = [];
        let c = o();
        for(; c && (l.push(c), r === "|" || r === ",");){
            do r = i.next();
            while (r === "|" || r === ",")
            c = o();
        }
        return (u)=>l.some((d)=>d(u));
    }
}
function EIh(t) {
    return !!t && !!t.match(/[\w\.:]+/);
}
function JrS(t) {
    let e = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g, n = e.exec(t);
    return {
        next: ()=>{
            if (!n) return null;
            const i = n[0];
            return n = e.exec(t), i;
        }
    };
}
export function IIh(t) {
    typeof t.dispose == "function" && t.dispose();
}
export function esS(t, e, n, i) {
    const r = n.lookup(t.scopeName);
    if (!r) {
        if (t.scopeName === e) throw new Error(`No grammar provided for <${e}>`);
        return;
    }
    const s = n.lookup(e);
    t instanceof wyn ? u3r({
        baseGrammar: s,
        selfGrammar: r
    }, i) : Xaa(t.ruleName, {
        baseGrammar: s,
        selfGrammar: r,
        repository: r.repository
    }, i);
    const o = n.injections(t.scopeName);
    if (o) for (const a of o)i.add(new wyn(a));
}
function Xaa(t, e, n) {
    if (e.repository && e.repository[t]) {
        const i = e.repository[t];
        d3r([
            i
        ], e, n);
    }
}
function u3r(t, e) {
    t.selfGrammar.patterns && Array.isArray(t.selfGrammar.patterns) && d3r(t.selfGrammar.patterns, {
        ...t,
        repository: t.selfGrammar.repository
    }, e), t.selfGrammar.injections && d3r(Object.values(t.selfGrammar.injections), {
        ...t,
        repository: t.selfGrammar.repository
    }, e);
}
function d3r(t, e, n) {
    for (const i of t){
        if (n.visitedRule.has(i)) continue;
        n.visitedRule.add(i);
        const r = i.repository ? yIh({}, e.repository, i.repository) : e.repository;
        Array.isArray(i.patterns) && d3r(i.patterns, {
            ...e,
            repository: r
        }, n);
        const s = i.include;
        if (!s) continue;
        const o = xIh(s);
        switch(o.kind){
            case 0:
                u3r({
                    ...e,
                    selfGrammar: e.baseGrammar
                }, n);
                break;
            case 1:
                u3r(e, n);
                break;
            case 2:
                Xaa(o.ruleName, {
                    ...e,
                    repository: r
                }, n);
                break;
            case 3:
            case 4:
                const a = o.scopeName === e.selfGrammar.scopeName ? e.selfGrammar : o.scopeName === e.baseGrammar.scopeName ? e.baseGrammar : void 0;
                if (a) {
                    const l = {
                        baseGrammar: e.baseGrammar,
                        selfGrammar: a,
                        repository: r
                    };
                    o.kind === 4 ? Xaa(o.ruleName, l, n) : u3r(l, n);
                } else o.kind === 4 ? n.add(new jIh(o.scopeName, o.ruleName)) : n.add(new wyn(o.scopeName));
                break;
        }
    }
}
export function xIh(t) {
    if (t === "$base") return new WIh;
    if (t === "$self") return new GIh;
    const e = t.indexOf("#");
    if (e === -1) return new zIh(t);
    if (e === 0) return new qIh(t.substring(1));
    {
        const n = t.substring(0, e), i = t.substring(e + 1);
        return new VIh(n, i);
    }
}
function YIx(t) {
    return t;
}
function XIx(t) {
    return t;
}
export function AIh(t, e, n, i, r, s, o, a) {
    const l = e.content.length;
    let c = !1, u = -1;
    if (o) {
        const p = tsS(t, e, n, i, r, s);
        r = p.stack, i = p.linePos, n = p.isFirstLine, u = p.anchorPosition;
    }
    const d = Date.now();
    for(; !c;){
        if (a !== 0 && Date.now() - d > a) return new sla(r, !0);
        h();
    }
    return new sla(r, !1);
    function h() {
        const p = nsS(t, e, n, i, r, u);
        if (!p) {
            s.produce(r, l), c = !0;
            return;
        }
        const g = p.captureIndices, f = p.matchedRuleId, _ = g && g.length > 0 ? g[0].end > i : !1;
        if (f === YIh) {
            const b = r.getRule(t);
            s.produce(r, g[0].start), r = r.withContentNameScopesList(r.nameScopesList), ldi(t, e, n, r, s, b.endCaptures, g), s.produce(r, g[0].end);
            const y = r;
            if (r = r.parent, u = y.getAnchorPos(), !_ && y.getEnterPos() === i) {
                r = y, s.produce(r, l), c = !0;
                return;
            }
        } else {
            const b = t.getRule(f);
            s.produce(r, g[0].start);
            const y = r, S = b.getName(e.content, g), k = r.contentNameScopesList.pushAttributed(S, t);
            if (r = r.push(f, i, u, g[0].end === l, null, k, k), b instanceof f3r) {
                const C = b;
                ldi(t, e, n, r, s, C.beginCaptures, g), s.produce(r, g[0].end), u = g[0].end;
                const T = C.getContentName(e.content, g), I = k.pushAttributed(T, t);
                if (r = r.withContentNameScopesList(I), C.endHasBackReferences && (r = r.withEndRule(C.getEndWithResolvedBackReferences(e.content, g))), !_ && y.hasSameRuleAs(r)) {
                    r = r.pop(), s.produce(r, l), c = !0;
                    return;
                }
            } else if (b instanceof ddi) {
                const C = b;
                ldi(t, e, n, r, s, C.beginCaptures, g), s.produce(r, g[0].end), u = g[0].end;
                const T = C.getContentName(e.content, g), I = k.pushAttributed(T, t);
                if (r = r.withContentNameScopesList(I), C.whileHasBackReferences && (r = r.withEndRule(C.getWhileWithResolvedBackReferences(e.content, g))), !_ && y.hasSameRuleAs(r)) {
                    r = r.pop(), s.produce(r, l), c = !0;
                    return;
                }
            } else if (ldi(t, e, n, r, s, b.captures, g), s.produce(r, g[0].end), r = r.pop(), !_) {
                r = r.safePop(), s.produce(r, l), c = !0;
                return;
            }
        }
        g[0].end > i && (i = g[0].end, n = !1);
    }
}
function tsS(t, e, n, i, r, s) {
    let o = r.beginRuleCapturedEOL ? 0 : -1;
    const a = [];
    for(let l = r; l; l = l.pop()){
        const c = l.getRule(t);
        c instanceof ddi && a.push({
            rule: c,
            stack: l
        });
    }
    for(let l = a.pop(); l; l = a.pop()){
        const { ruleScanner: c, findOptions: u } = ssS(l.rule, t, l.stack.endRule, n, i === o), d = c.findNextMatchSync(e, i, u);
        if (d) {
            if (d.ruleId !== ela) {
                r = l.stack.pop();
                break;
            }
            d.captureIndices && d.captureIndices.length && (s.produce(l.stack, d.captureIndices[0].start), ldi(t, e, n, l.stack, s, l.rule.whileCaptures, d.captureIndices), s.produce(l.stack, d.captureIndices[0].end), o = d.captureIndices[0].end, d.captureIndices[0].end > i && (i = d.captureIndices[0].end, n = !1));
        } else {
            r = l.stack.pop();
            break;
        }
    }
    return {
        stack: r,
        linePos: i,
        anchorPosition: o,
        isFirstLine: n
    };
}
function nsS(t, e, n, i, r, s) {
    const o = isS(t, e, n, i, r, s), a = t.getInjections();
    if (a.length === 0) return o;
    const l = rsS(a, t, e, n, i, r, s);
    if (!l) return o;
    if (!o) return l;
    const c = o.captureIndices[0].start, u = l.captureIndices[0].start;
    return u < c || l.priorityMatch && u === c ? l : o;
}
function isS(t, e, n, i, r, s) {
    const o = r.getRule(t), { ruleScanner: a, findOptions: l } = RIh(o, t, r.endRule, n, i === s), c = a.findNextMatchSync(e, i, l);
    return c ? {
        captureIndices: c.captureIndices,
        matchedRuleId: c.ruleId
    } : null;
}
function rsS(t, e, n, i, r, s, o) {
    let a = Number.MAX_VALUE, l = null, c, u = 0;
    const d = s.contentNameScopesList.getScopeNames();
    for(let h = 0, p = t.length; h < p; h++){
        const g = t[h];
        if (!g.matcher(d)) continue;
        const f = e.getRule(g.ruleId), { ruleScanner: _, findOptions: b } = RIh(f, e, null, i, r === o), y = _.findNextMatchSync(n, r, b);
        if (!y) continue;
        const S = y.captureIndices[0].start;
        if (!(S >= a) && (a = S, l = y.captureIndices, c = y.ruleId, u = g.priority, a === r)) break;
    }
    return l ? {
        priorityMatch: u === -1,
        captureIndices: l,
        matchedRuleId: c
    } : null;
}
function RIh(t, e, n, i, r) {
    if (rla) {
        const o = t.compile(e, n), a = PIh(i, r);
        return {
            ruleScanner: o,
            findOptions: a
        };
    }
    return {
        ruleScanner: t.compileAG(e, n, i, r),
        findOptions: 0
    };
}
function ssS(t, e, n, i, r) {
    if (rla) {
        const o = t.compileWhile(e, n), a = PIh(i, r);
        return {
            ruleScanner: o,
            findOptions: a
        };
    }
    return {
        ruleScanner: t.compileWhileAG(e, n, i, r),
        findOptions: 0
    };
}
function PIh(t, e) {
    let n = 0;
    return t || (n |= 1), e || (n |= 4), n;
}
function ldi(t, e, n, i, r, s, o) {
    if (s.length === 0) return;
    const a = e.content, l = Math.min(s.length, o.length), c = [], u = o[0].end;
    for(let d = 0; d < l; d++){
        const h = s[d];
        if (h === null) continue;
        const p = o[d];
        if (p.length === 0) continue;
        if (p.start > u) break;
        for(; c.length > 0 && c[c.length - 1].endPos <= p.start;)r.produceFromScopes(c[c.length - 1].scopes, c[c.length - 1].endPos), c.pop();
        if (c.length > 0 ? r.produceFromScopes(c[c.length - 1].scopes, p.start) : r.produce(i, p.start), h.retokenizeCapturedWithRuleId) {
            const f = h.getName(a, o), _ = i.contentNameScopesList.pushAttributed(f, t), b = h.getContentName(a, o), y = _.pushAttributed(b, t), S = i.push(h.retokenizeCapturedWithRuleId, p.start, -1, !1, null, _, y), k = t.createOnigString(a.substring(0, p.end));
            AIh(t, k, n && p.start === 0, p.start, S, r, !1, 0), IIh(k);
            continue;
        }
        const g = h.getName(a, o);
        if (g !== null) {
            const _ = (c.length > 0 ? c[c.length - 1].scopes : i.contentNameScopesList).pushAttributed(g, t);
            c.push(new exh(_, p.end));
        }
    }
    for(; c.length > 0;)r.produceFromScopes(c[c.length - 1].scopes, c[c.length - 1].endPos), c.pop();
}
export function osS(t, e, n, i, r, s, o, a) {
    return new txh(t, e, n, i, r, s, o, a);
}
export function MIh(t, e, n, i, r) {
    const s = c3r(e, h3r), o = nla.getCompiledRuleId(n, i, r.repository);
    for (const a of s)t.push({
        debugSelector: e,
        matcher: a.matcher,
        ruleId: o,
        grammar: r,
        priority: a.priority
    });
}
export function h3r(t, e) {
    if (e.length < t.length) return !1;
    let n = 0;
    return t.every((i)=>{
        for(let r = n; r < e.length; r++)if (asS(e[r], i)) return n = r + 1, !0;
        return !1;
    });
}
function asS(t, e) {
    if (!t) return !1;
    if (t === e) return !0;
    const n = e.length;
    return t.length > n && t.substr(0, n) === e && t[n] === ".";
}
export function DIh(t, e) {
    return t = zrS(t), t.repository = t.repository || {}, t.repository.$self = {
        $vscodeTextmateLocation: t.$vscodeTextmateLocation,
        patterns: t.patterns,
        name: t.scopeName
    }, t.repository.$base = e || t.repository.$self, t;
}
function y3r(t, e) {
    const n = typeof t == "string" ? {} : {
        ...t.colorReplacements
    }, i = typeof t == "string" ? t : t.name;
    for (const [r, s] of Object.entries(e?.colorReplacements || {}))typeof s == "string" ? n[r] = s : r === i && Object.assign(n, s);
    return n;
}
function m1t(t, e) {
    return t && (e?.[t?.toLowerCase()] || t);
}
export function usS(t) {
    return Array.isArray(t) ? t : [
        t
    ];
}
async function axh(t) {
    return Promise.resolve(typeof t == "function" ? t() : t).then((e)=>e.default || e);
}
function S3r(t) {
    return !t || [
        "plaintext",
        "txt",
        "text",
        "plain"
    ].includes(t);
}
function dsS(t) {
    return t === "ansi" || S3r(t);
}
function k3r(t) {
    return t === "none";
}
function hsS(t) {
    return k3r(t);
}
function w3r(t, e = !1) {
    if (t.length === 0) return [
        [
            "",
            0
        ]
    ];
    const n = t.split(/(\r?\n)/g);
    let i = 0;
    const r = [];
    for(let s = 0; s < n.length; s += 2){
        const o = e ? n[s] + (n[s + 1] || "") : n[s];
        r.push([
            o,
            i
        ]), i += n[s].length, i += n[s + 1]?.length || 0;
    }
    return r;
}
export function ola(t) {
    if (t?.[ula]) return t;
    const e = {
        ...t
    };
    e.tokenColors && !e.settings && (e.settings = e.tokenColors, delete e.tokenColors), e.type || (e.type = "dark"), e.colorReplacements = {
        ...e.colorReplacements
    }, e.settings || (e.settings = []);
    let { bg: n, fg: i } = e;
    if (!n || !i) {
        const a = e.settings ? e.settings.find((l)=>!l.name && !l.scope) : void 0;
        a?.settings?.foreground && (i = a.settings.foreground), a?.settings?.background && (n = a.settings.background), !i && e?.colors?.["editor.foreground"] && (i = e.colors["editor.foreground"]), !n && e?.colors?.["editor.background"] && (n = e.colors["editor.background"]), i || (i = e.type === "light" ? lla.light : lla.dark), n || (n = e.type === "light" ? cla.light : cla.dark), e.fg = i, e.bg = n;
    }
    e.settings[0] && e.settings[0].settings && !e.settings[0].scope || e.settings.unshift({
        settings: {
            foreground: e.fg,
            background: e.bg
        }
    });
    let r = 0;
    const s = new Map;
    function o(a) {
        if (s.has(a)) return s.get(a);
        r += 1;
        const l = `#${r.toString(16).padStart(8, "0").toLowerCase()}`;
        return e.colorReplacements?.[`#${l}`] ? o(a) : (s.set(a, l), l);
    }
    e.settings = e.settings.map((a)=>{
        const l = a.settings?.foreground && !a.settings.foreground.startsWith("#"), c = a.settings?.background && !a.settings.background.startsWith("#");
        if (!l && !c) return a;
        const u = {
            ...a,
            settings: {
                ...a.settings
            }
        };
        if (l) {
            const d = o(a.settings.foreground);
            e.colorReplacements[d] = a.settings.foreground, u.settings.foreground = d;
        }
        if (c) {
            const d = o(a.settings.background);
            e.colorReplacements[d] = a.settings.background, u.settings.background = d;
        }
        return u;
    });
    for (const a of Object.keys(e.colors || {}))if ((a === "editor.foreground" || a === "editor.background" || a.startsWith("terminal.ansi")) && !e.colors[a]?.startsWith("#")) {
        const l = o(e.colors[a]);
        e.colorReplacements[l] = e.colors[a], e.colors[a] = l;
    }
    return Object.defineProperty(e, ula, {
        enumerable: !1,
        writable: !1,
        value: !0
    }), e;
}
async function psS(t) {
    return Array.from(new Set((await Promise.all(t.filter((e)=>!dsS(e)).map(async (e)=>await axh(e).then((n)=>Array.isArray(n) ? n : [
                n
            ])))).flat()));
}
async function msS(t) {
    return (await Promise.all(t.map(async (e)=>hsS(e) ? null : ola(await axh(e))))).filter((e)=>!!e);
}
export function lxh(t, e) {
    if (!e) return t;
    if (e[t]) {
        const n = new Set([
            t
        ]);
        for(; e[t];){
            if (t = e[t], n.has(t)) throw new R4(`Circular alias \`${Array.from(n).join(" -> ")} -> ${t}\``);
            n.add(t);
        }
    }
    return t;
}
function gsS(t) {
    xyn += 1, t.warnings !== !1 && xyn >= 10 && xyn % 10 === 0 && console.warn(`[Shiki] ${xyn} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);
    let e = !1;
    if (!t.engine) throw new R4("`engine` option is required for synchronous mode");
    const n = (t.langs || []).flat(1), i = (t.themes || []).flat(1).map(ola), r = new mxh(new gxh(t.engine, n), i, n, t.langAlias);
    let s;
    function o(y) {
        return lxh(y, t.langAlias);
    }
    function a(y) {
        _();
        const S = r.getGrammar(typeof y == "string" ? y : y.name);
        if (!S) throw new R4(`Language \`${y}\` not found, you may need to load it first`);
        return S;
    }
    function l(y) {
        if (y === "none") return {
            bg: "",
            fg: "",
            name: "none",
            settings: [],
            type: "dark"
        };
        _();
        const S = r.getTheme(y);
        if (!S) throw new R4(`Theme \`${y}\` not found, you may need to load it first`);
        return S;
    }
    function c(y) {
        _();
        const S = l(y);
        return s !== y && (r.setTheme(S), s = y), {
            theme: S,
            colorMap: r.getColorMap()
        };
    }
    function u() {
        return _(), r.getLoadedThemes();
    }
    function d() {
        return _(), r.getLoadedLanguages();
    }
    function h(...y) {
        _(), r.loadLanguages(y.flat(1));
    }
    async function p(...y) {
        return h(await psS(y));
    }
    function g(...y) {
        _();
        for (const S of y.flat(1))r.loadTheme(S);
    }
    async function f(...y) {
        return _(), g(await msS(y));
    }
    function _() {
        if (e) throw new R4("Shiki instance has been disposed");
    }
    function b() {
        e || (e = !0, r.dispose(), xyn -= 1);
    }
    return {
        setTheme: c,
        getTheme: l,
        getLanguage: a,
        getLoadedThemes: u,
        getLoadedLanguages: d,
        resolveLangAlias: o,
        loadLanguage: p,
        loadLanguageSync: h,
        loadTheme: f,
        loadThemeSync: g,
        dispose: b,
        [Symbol.dispose]: b
    };
}
function C3r(t, e) {
    dla.set(t, e);
}
function hdi(t) {
    return dla.get(t);
}
export function fsS(t) {
    const e = [], n = new Set;
    function i(r) {
        if (n.has(r)) return;
        n.add(r);
        const s = r?.nameScopesList?.scopeName;
        s && e.push(s), r.parent && i(r.parent);
    }
    return i(t), e;
}
function vsS(t, e) {
    if (!(t instanceof pdi)) throw new R4("Invalid grammar state");
    return t.getInternalStack(e);
}
function cxh(t, e, n = {}) {
    const { theme: i = t.getLoadedThemes()[0] } = n;
    if (S3r(t.resolveLangAlias(n.lang || "text")) || k3r(i)) return w3r(e).map((a)=>[
            {
                content: a[0],
                offset: a[1]
            }
        ]);
    const { theme: r, colorMap: s } = t.setTheme(i), o = t.getLanguage(n.lang || "text");
    if (n.grammarState) {
        if (n.grammarState.lang !== o.name) throw new R4(`Grammar state language "${n.grammarState.lang}" does not match highlight language "${o.name}"`);
        if (!n.grammarState.themes.includes(r.name)) throw new R4(`Grammar state themes "${n.grammarState.themes}" do not contain highlight theme "${r.name}"`);
    }
    return bsS(e, o, r, s, n);
}
function _sS(...t) {
    if (t.length === 2) return hdi(t[1]);
    const [e, n, i = {}] = t, { lang: r = "text", theme: s = e.getLoadedThemes()[0] } = i;
    if (S3r(r) || k3r(s)) throw new R4("Plain language does not have grammar state");
    if (r === "ansi") throw new R4("ANSI language does not have grammar state");
    const { theme: o, colorMap: a } = e.setTheme(s), l = e.getLanguage(r);
    return new pdi(ala(n, l, o, a, i).stateStack, l.name, o.name);
}
function bsS(t, e, n, i, r) {
    const s = ala(t, e, n, i, r), o = new pdi(s.stateStack, e.name, n.name);
    return C3r(s.tokens, o), s.tokens;
}
function ala(t, e, n, i, r) {
    const s = y3r(n, r), { tokenizeMaxLineLength: o = 0, tokenizeTimeLimit: a = 500 } = r, l = w3r(t);
    let c = r.grammarState ? vsS(r.grammarState, n.name) ?? b3r : r.grammarContextCode != null ? ala(r.grammarContextCode, e, n, i, {
        ...r,
        grammarState: void 0,
        grammarContextCode: void 0
    }).stateStack : b3r, u = [];
    const d = [];
    for(let h = 0, p = l.length; h < p; h++){
        const [g, f] = l[h];
        if (g === "") {
            u = [], d.push([]);
            continue;
        }
        if (o > 0 && g.length >= o) {
            u = [], d.push([
                {
                    content: g,
                    offset: f,
                    color: "",
                    fontStyle: 0
                }
            ]);
            continue;
        }
        let _, b, y;
        r.includeExplanation && (_ = e.tokenizeLine(g, c, a), b = _.tokens, y = 0);
        const S = e.tokenizeLine2(g, c, a), k = S.tokens.length / 2;
        for(let C = 0; C < k; C++){
            const T = S.tokens[2 * C], I = C + 1 < k ? S.tokens[2 * C + 2] : g.length;
            if (T === I) continue;
            const A = S.tokens[2 * C + 1], P = m1t(i[nUt.getForeground(A)], s), M = nUt.getFontStyle(A), O = {
                content: g.substring(T, I),
                offset: f + T,
                color: P,
                fontStyle: M
            };
            if (r.includeExplanation) {
                const N = [];
                if (r.includeExplanation !== "scopeName") for (const j of n.settings){
                    let $;
                    switch(typeof j.scope){
                        case "string":
                            $ = j.scope.split(/,/).map((H)=>H.trim());
                            break;
                        case "object":
                            $ = j.scope;
                            break;
                        default:
                            continue;
                    }
                    N.push({
                        settings: j,
                        selectors: $.map((H)=>H.split(/ /))
                    });
                }
                O.explanation = [];
                let U = 0;
                for(; T + U < I;){
                    const j = b[y], $ = g.substring(j.startIndex, j.endIndex);
                    U += $.length, O.explanation.push({
                        content: $,
                        scopes: r.includeExplanation === "scopeName" ? ysS(j.scopes) : SsS(N, j.scopes)
                    }), y += 1;
                }
            }
            u.push(O);
        }
        d.push(u), u = [], c = S.ruleStack;
    }
    return {
        tokens: d,
        stateStack: c
    };
}
function ysS(t) {
    return t.map((e)=>({
            scopeName: e
        }));
}
function SsS(t, e) {
    const n = [];
    for(let i = 0, r = e.length; i < r; i++){
        const s = e[i];
        n[i] = {
            scopeName: s,
            themeMatches: wsS(t, s, e.slice(0, i))
        };
    }
    return n;
}
function uxh(t, e) {
    return t === e || e.substring(0, t.length) === t && e[t.length] === ".";
}
function ksS(t, e, n) {
    if (!uxh(t[t.length - 1], e)) return !1;
    let i = t.length - 2, r = n.length - 1;
    for(; i >= 0 && r >= 0;)uxh(t[i], n[r]) && (i -= 1), r -= 1;
    return i === -1;
}
function wsS(t, e, n) {
    const i = [];
    for (const { selectors: r, settings: s } of t)for (const o of r)if (ksS(o, e, n)) {
        i.push(s);
        break;
    }
    return i;
}
function dxh(t, e, n, i = cxh) {
    const r = Object.entries(n.themes).filter((c)=>c[1]).map((c)=>({
            color: c[0],
            theme: c[1]
        })), s = r.map((c)=>{
        const u = i(t, e, {
            ...n,
            theme: c.theme
        });
        return {
            tokens: u,
            state: hdi(u),
            theme: typeof c.theme == "string" ? c.theme : c.theme.name
        };
    }), o = CsS(...s.map((c)=>c.tokens)), a = o[0].map((c, u)=>c.map((d, h)=>{
            const p = {
                content: d.content,
                variants: {},
                offset: d.offset
            };
            return "includeExplanation" in n && n.includeExplanation && (p.explanation = d.explanation), o.forEach((g, f)=>{
                const { content: _, explanation: b, offset: y, ...S } = g[u][h];
                p.variants[r[f].color] = S;
            }), p;
        })), l = s[0].state ? new pdi(Object.fromEntries(s.map((c)=>[
            c.theme,
            c.state?.getInternalStack(c.theme)
        ])), s[0].state.lang) : void 0;
    return l && C3r(a, l), a;
}
function CsS(...t) {
    const e = t.map(()=>[]), n = t.length;
    for(let i = 0; i < t[0].length; i++){
        const r = t.map((l)=>l[i]), s = e.map(()=>[]);
        e.forEach((l, c)=>l.push(s[c]));
        const o = r.map(()=>0), a = r.map((l)=>l[0]);
        for(; a.every((l)=>l);){
            const l = Math.min(...a.map((c)=>c.content.length));
            for(let c = 0; c < n; c++){
                const u = a[c];
                u.content.length === l ? (s[c].push(u), o[c] += 1, a[c] = r[c][o[c]]) : (s[c].push({
                    ...u,
                    content: u.content.slice(0, l)
                }), a[c] = {
                    ...u,
                    content: u.content.slice(l),
                    offset: u.offset + l
                });
            }
        }
    }
    return e;
}
function EsS(t, e) {
    if (t = t.replace(e.subset ? IsS(e.subset) : fxh, i), e.subset || e.escapeOnly) return t;
    return t.replace(vxh, n).replace(_xh, i);
    function n(r, s, o) {
        return e.format((r.charCodeAt(0) - 55296) * 1024 + r.charCodeAt(1) - 56320 + 65536, o.charCodeAt(s + 2), e);
    }
    function i(r, s, o) {
        return e.format(r.charCodeAt(0), o.charCodeAt(s + 1), e);
    }
}
function IsS(t) {
    let e = hla.get(t);
    return e || (e = xsS(t), hla.set(t, e)), e;
}
function xsS(t) {
    const e = [];
    let n = -1;
    for(; ++n < t.length;)e.push(t[n].replace(bxh, "\\$&"));
    return new RegExp("(?:" + e.join("|") + ")", "g");
}
function RsS(t, e, n) {
    const i = "&#x" + t.toString(16).toUpperCase();
    return n && e && !yxh.test(String.fromCharCode(e)) ? i : i + ";";
}
function MsS(t, e, n) {
    const i = "&#" + String(t);
    return n && e && !Sxh.test(String.fromCharCode(e)) ? i : i + ";";
}
function FsS(t, e, n, i) {
    const r = String.fromCharCode(t);
    if (pla.call(E3r, r)) {
        const s = E3r[r], o = "&" + s;
        return n && kxh.includes(s) && !wxh.includes(s) && (!i || e && e !== 61 && Cxh.test(String.fromCharCode(e))) ? o : o + ";";
    }
    return "";
}
function UsS(t, e, n) {
    let i = RsS(t, e, n.omitOptionalSemicolons), r;
    if ((n.useNamedReferences || n.useShortestReferences) && (r = FsS(t, e, n.omitOptionalSemicolons, n.attribute)), (n.useShortestReferences || !r) && n.useShortestReferences) {
        const s = MsS(t, e, n.omitOptionalSemicolons);
        s.length < i.length && (i = s);
    }
    return r && (!n.useShortestReferences || r.length < i.length) ? r : i;
}
function Ayn(t, e) {
    return EsS(t, Object.assign({
        format: UsS
    }, e));
}
export function $sS(t, e, n, i) {
    return i.settings.bogusComments ? "<?" + Ayn(t.value, Object.assign({}, i.settings.characterReferences, {
        subset: Exh
    })) + ">" : "<!--" + t.value.replace(Txh, r) + "-->";
    function r(s) {
        return Ayn(s, Object.assign({}, i.settings.characterReferences, {
            subset: Ixh
        }));
    }
}
export function WsS(t, e, n, i) {
    return "<!" + (i.settings.upperDoctype ? "DOCTYPE" : "doctype") + (i.settings.tightDoctype ? "" : " ") + "html>";
}
export function xxh(t) {
    return e;
    function e(n, i, r) {
        const s = n ? n.children : Axh;
        let o = (i || 0) + t, a = s[o];
        if (!r) for(; a && sDr(a);)o += t, a = s[o];
        return a;
    }
}
export function Pxh(t) {
    return e;
    function e(n, i, r) {
        return Mxh.call(t, n.tagName) && t[n.tagName](n, i, r);
    }
}
export function fla(t, e, n) {
    const i = Rz(n, e, !0);
    return !i || i.type !== "comment" && !(i.type === "text" && sDr(i.value.charAt(0)));
}
export function qsS(t, e, n) {
    const i = Rz(n, e);
    return !i || i.type !== "comment";
}
export function zsS(t, e, n) {
    const i = Rz(n, e);
    return !i || i.type !== "comment";
}
export function VsS(t, e, n) {
    const i = Rz(n, e);
    return i ? i.type === "element" && (i.tagName === "address" || i.tagName === "article" || i.tagName === "aside" || i.tagName === "blockquote" || i.tagName === "details" || i.tagName === "div" || i.tagName === "dl" || i.tagName === "fieldset" || i.tagName === "figcaption" || i.tagName === "figure" || i.tagName === "footer" || i.tagName === "form" || i.tagName === "h1" || i.tagName === "h2" || i.tagName === "h3" || i.tagName === "h4" || i.tagName === "h5" || i.tagName === "h6" || i.tagName === "header" || i.tagName === "hgroup" || i.tagName === "hr" || i.tagName === "main" || i.tagName === "menu" || i.tagName === "nav" || i.tagName === "ol" || i.tagName === "p" || i.tagName === "pre" || i.tagName === "section" || i.tagName === "table" || i.tagName === "ul") : !n || !(n.type === "element" && (n.tagName === "a" || n.tagName === "audio" || n.tagName === "del" || n.tagName === "ins" || n.tagName === "map" || n.tagName === "noscript" || n.tagName === "video"));
}
export function KsS(t, e, n) {
    const i = Rz(n, e);
    return !i || i.type === "element" && i.tagName === "li";
}
export function YsS(t, e, n) {
    const i = Rz(n, e);
    return !!(i && i.type === "element" && (i.tagName === "dt" || i.tagName === "dd"));
}
export function XsS(t, e, n) {
    const i = Rz(n, e);
    return !i || i.type === "element" && (i.tagName === "dt" || i.tagName === "dd");
}
export function Nxh(t, e, n) {
    const i = Rz(n, e);
    return !i || i.type === "element" && (i.tagName === "rp" || i.tagName === "rt");
}
export function ZsS(t, e, n) {
    const i = Rz(n, e);
    return !i || i.type === "element" && i.tagName === "optgroup";
}
export function QsS(t, e, n) {
    const i = Rz(n, e);
    return !i || i.type === "element" && (i.tagName === "option" || i.tagName === "optgroup");
}
export function JsS(t, e, n) {
    const i = Rz(n, e);
    return !!(i && i.type === "element" && (i.tagName === "tbody" || i.tagName === "tfoot"));
}
export function eoS(t, e, n) {
    const i = Rz(n, e);
    return !i || i.type === "element" && (i.tagName === "tbody" || i.tagName === "tfoot");
}
export function toS(t, e, n) {
    return !Rz(n, e);
}
export function noS(t, e, n) {
    const i = Rz(n, e);
    return !i || i.type === "element" && i.tagName === "tr";
}
export function Lxh(t, e, n) {
    const i = Rz(n, e);
    return !i || i.type === "element" && (i.tagName === "td" || i.tagName === "th");
}
export function ioS(t) {
    const e = Rz(t, -1);
    return !e || e.type !== "comment";
}
export function roS(t) {
    const e = new Set;
    for (const i of t.children)if (i.type === "element" && (i.tagName === "base" || i.tagName === "title")) {
        if (e.has(i.tagName)) return !1;
        e.add(i.tagName);
    }
    const n = t.children[0];
    return !n || n.type === "element";
}
export function soS(t) {
    const e = Rz(t, -1, !0);
    return !e || e.type !== "comment" && !(e.type === "text" && sDr(e.value.charAt(0))) && !(e.type === "element" && (e.tagName === "meta" || e.tagName === "link" || e.tagName === "script" || e.tagName === "style" || e.tagName === "template"));
}
export function ooS(t, e, n) {
    const i = gla(n, e), r = Rz(t, -1, !0);
    return n && i && i.type === "element" && i.tagName === "colgroup" && x3r(i, n.children.indexOf(i), n) ? !1 : !!(r && r.type === "element" && r.tagName === "col");
}
export function aoS(t, e, n) {
    const i = gla(n, e), r = Rz(t, -1);
    return n && i && i.type === "element" && (i.tagName === "thead" || i.tagName === "tbody") && x3r(i, n.children.indexOf(i), n) ? !1 : !!(r && r.type === "element" && r.tagName === "tr");
}
export function coS(t, e, n, i) {
    const r = i.schema, s = r.space === "svg" ? !1 : i.settings.omitOptionalTags;
    let o = r.space === "svg" ? i.settings.closeEmptyElements : i.settings.voids.includes(t.tagName.toLowerCase());
    const a = [];
    let l;
    r.space === "html" && t.tagName === "svg" && (i.schema = oFe);
    const c = uoS(i, t.properties), u = i.all(r.space === "html" && t.tagName === "template" ? t.content : t);
    return i.schema = r, u && (o = !1), (c || !s || !Fxh(t, e, n)) && (a.push("<", t.tagName, c ? " " + c : ""), o && (r.space === "svg" || i.settings.closeSelfClosing) && (l = c.charAt(c.length - 1), (!i.settings.tightSelfClosing || l === "/" || l && l !== '"' && l !== "'") && a.push(" "), a.push("/")), a.push(">")), a.push(u), !o && (!s || !x3r(t, e, n)) && a.push("</" + t.tagName + ">"), a.join("");
}
function uoS(t, e) {
    const n = [];
    let i = -1, r;
    if (e) {
        for(r in e)if (e[r] !== null && e[r] !== void 0) {
            const s = doS(t, r, e[r]);
            s && n.push(s);
        }
    }
    for(; ++i < n.length;){
        const s = t.settings.tightAttributes ? n[i].charAt(n[i].length - 1) : void 0;
        i !== n.length - 1 && s !== '"' && s !== "'" && (n[i] += " ");
    }
    return n.join("");
}
function doS(t, e, n) {
    const i = aui(t.schema, e), r = t.settings.allowParseErrors && t.schema.space === "html" ? 0 : 1, s = t.settings.allowDangerousCharacters ? 0 : 1;
    let o = t.quote, a;
    if (i.overloadedBoolean && (n === i.attribute || n === "") ? n = !0 : (i.boolean || i.overloadedBoolean) && (typeof n != "string" || n === i.attribute || n === "") && (n = !!n), n == null || n === !1 || typeof n == "number" && Number.isNaN(n)) return "";
    const l = Ayn(i.attribute, Object.assign({}, t.settings.characterReferences, {
        subset: mdi.name[r][s]
    }));
    return n === !0 || (n = Array.isArray(n) ? (i.commaSeparated ? bia : Sia)(n, {
        padLeft: !t.settings.tightCommaSeparatedLists
    }) : String(n), t.settings.collapseEmptyAttributes && !n) ? l : (t.settings.preferUnquoted && (a = Ayn(n, Object.assign({}, t.settings.characterReferences, {
        attribute: !0,
        subset: mdi.unquoted[r][s]
    }))), a !== n && (t.settings.quoteSmart && BMr(n, o) > BMr(n, t.alternative) && (o = t.alternative), a = o + Ayn(n, Object.assign({}, t.settings.characterReferences, {
        subset: (o === "'" ? mdi.single : mdi.double)[r][s],
        attribute: !0
    })) + o), l + (a && "=" + a));
}
export function Bxh(t, e, n, i) {
    return n && n.type === "element" && (n.tagName === "script" || n.tagName === "style") ? t.value : Ayn(t.value, Object.assign({}, i.settings.characterReferences, {
        subset: Uxh
    }));
}
export function poS(t, e, n, i) {
    return i.settings.allowDangerousHtml ? t.value : Bxh(t, e, n, i);
}
export function goS(t, e, n, i) {
    return i.all(t);
}
export function voS(t) {
    throw new Error("Expected node, not `" + t + "`");
}
export function _oS(t) {
    const e = t;
    throw new Error("Cannot compile unknown node `" + e.type + "`");
}
export function yoS(t, e) {
    const n = e || Hxh, i = n.quote || '"', r = i === '"' ? "'" : '"';
    if (i !== '"' && i !== "'") throw new Error("Invalid quote `" + i + "`, expected `'` or `\"`");
    return {
        one: SoS,
        all: koS,
        settings: {
            omitOptionalTags: n.omitOptionalTags || !1,
            allowParseErrors: n.allowParseErrors || !1,
            allowDangerousCharacters: n.allowDangerousCharacters || !1,
            quoteSmart: n.quoteSmart || !1,
            preferUnquoted: n.preferUnquoted || !1,
            tightAttributes: n.tightAttributes || !1,
            upperDoctype: n.upperDoctype || !1,
            tightDoctype: n.tightDoctype || !1,
            bogusComments: n.bogusComments || !1,
            tightCommaSeparatedLists: n.tightCommaSeparatedLists || !1,
            tightSelfClosing: n.tightSelfClosing || !1,
            collapseEmptyAttributes: n.collapseEmptyAttributes || !1,
            allowDangerousHtml: n.allowDangerousHtml || !1,
            voids: n.voids || Mia,
            characterReferences: n.characterReferences || Wxh,
            closeSelfClosing: n.closeSelfClosing || !1,
            closeEmptyElements: n.closeEmptyElements || !1
        },
        schema: n.space === "svg" ? oFe : U7t,
        quote: i,
        alternative: r
    }.one(Array.isArray(t) ? {
        type: "root",
        children: t
    } : t, void 0, void 0);
}
function SoS(t, e, n) {
    return $xh(t, e, n, this);
}
function koS(t) {
    const e = [], n = t && t.children || Gxh;
    let i = -1;
    for(; ++i < n.length;)e[i] = this.one(n[i], i, t);
    return e.join("");
}
function qxh(t, e) {
    var n;
    if (!e) return t;
    t.properties || (t.properties = {}), (n = t.properties).class || (n.class = []), typeof t.properties.class == "string" && (t.properties.class = t.properties.class.split(/\s+/g)), Array.isArray(t.properties.class) || (t.properties.class = []);
    const i = Array.isArray(e) ? e : e.split(/\s+/g);
    for (const r of i)r && !t.properties.class.includes(r) && t.properties.class.push(r);
    return t;
}
function CoS(t) {
    const e = w3r(t, !0).map(([r])=>r);
    function n(r) {
        if (r === t.length) return {
            line: e.length - 1,
            character: e[e.length - 1].length
        };
        let s = r, o = 0;
        for (const a of e){
            if (s < a.length) break;
            s -= a.length, o++;
        }
        return {
            line: o,
            character: s
        };
    }
    function i(r, s) {
        let o = 0;
        for(let a = 0; a < r; a++)o += e[a].length;
        return o += s, o;
    }
    return {
        lines: e,
        indexToPos: n,
        posToIndex: i
    };
}
function ToS(t, e) {
    let n = 0;
    const i = [];
    for (const r of e)r > n && i.push({
        ...t,
        content: t.content.slice(n, r),
        offset: t.offset + n
    }), n = r;
    return n < t.content.length && i.push({
        ...t,
        content: t.content.slice(n),
        offset: t.offset + n
    }), i;
}
function EoS(t, e) {
    const n = Array.from(e instanceof Set ? e : new Set(e)).sort((i, r)=>i - r);
    return n.length ? t.map((i)=>i.flatMap((r)=>{
            const s = n.filter((o)=>r.offset < o && o < r.offset + r.content.length).map((o)=>o - r.offset).sort((o, a)=>o - a);
            return s.length ? ToS(r, s) : r;
        })) : t;
}
function IoS(t, e, n, i, r = "css-vars") {
    const s = {
        content: t.content,
        explanation: t.explanation,
        offset: t.offset
    }, o = e.map((u)=>A3r(t.variants[u])), a = new Set(o.flatMap((u)=>Object.keys(u))), l = {}, c = (u, d)=>{
        const h = d === "color" ? "" : d === "background-color" ? "-bg" : `-${d}`;
        return n + e[u] + (d === "color" ? "" : h);
    };
    return o.forEach((u, d)=>{
        for (const h of a){
            const p = u[h] || "inherit";
            if (d === 0 && i && Yxh.includes(h)) if (i === D3r && o.length > 1) {
                const g = e.findIndex((_)=>_ === "light"), f = e.findIndex((_)=>_ === "dark");
                if (g === -1 || f === -1) throw new R4('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
                l[h] = `light-dark(${o[g][h] || "inherit"}, ${o[f][h] || "inherit"})`, r === "css-vars" && (l[c(d, h)] = p);
            } else l[h] = p;
            else r === "css-vars" && (l[c(d, h)] = p);
        }
    }), s.htmlStyle = l, s;
}
function A3r(t) {
    const e = {};
    if (t.color && (e.color = t.color), t.bgColor && (e["background-color"] = t.bgColor), t.fontStyle) {
        t.fontStyle & Rne.Italic && (e["font-style"] = "italic"), t.fontStyle & Rne.Bold && (e["font-weight"] = "bold");
        const n = [];
        t.fontStyle & Rne.Underline && n.push("underline"), t.fontStyle & Rne.Strikethrough && n.push("line-through"), n.length && (e["text-decoration"] = n.join(" "));
    }
    return e;
}
function vla(t) {
    return typeof t == "string" ? t : Object.entries(t).map(([e, n])=>`${e}:${n}`).join(";");
}
export function xoS() {
    const t = new WeakMap;
    function e(n) {
        if (!t.has(n.meta)) {
            let i = function(o) {
                if (typeof o == "number") {
                    if (o < 0 || o > n.source.length) throw new R4(`Invalid decoration offset: ${o}. Code length: ${n.source.length}`);
                    return {
                        ...r.indexToPos(o),
                        offset: o
                    };
                } else {
                    const a = r.lines[o.line];
                    if (a === void 0) throw new R4(`Invalid decoration position ${JSON.stringify(o)}. Lines length: ${r.lines.length}`);
                    let l = o.character;
                    if (l < 0 && (l = a.length + l), l < 0 || l > a.length) throw new R4(`Invalid decoration position ${JSON.stringify(o)}. Line ${o.line} length: ${a.length}`);
                    return {
                        ...o,
                        character: l,
                        offset: r.posToIndex(o.line, l)
                    };
                }
            };
            const r = CoS(n.source), s = (n.options.decorations || []).map((o)=>({
                    ...o,
                    start: i(o.start),
                    end: i(o.end)
                }));
            AoS(s), t.set(n.meta, {
                decorations: s,
                converter: r,
                source: n.source
            });
        }
        return t.get(n.meta);
    }
    return {
        name: "shiki:decorations",
        tokens (n) {
            if (this.options.decorations?.length) return EoS(n, e(this).decorations.flatMap((i)=>[
                    i.start.offset,
                    i.end.offset
                ]));
        },
        code (n) {
            if (!this.options.decorations?.length) return;
            const i = e(this), r = Array.from(n.children).filter((u)=>u.type === "element" && u.tagName === "span");
            if (r.length !== i.converter.lines.length) throw new R4(`Number of lines in code element (${r.length}) does not match the number of lines in the source (${i.converter.lines.length}). Failed to apply decorations.`);
            function s(u, d, h, p) {
                const g = r[u];
                let f = "", _ = -1, b = -1;
                if (d === 0 && (_ = 0), h === 0 && (b = 0), h === Number.POSITIVE_INFINITY && (b = g.children.length), _ === -1 || b === -1) for(let S = 0; S < g.children.length; S++)f += zxh(g.children[S]), _ === -1 && f.length === d && (_ = S + 1), b === -1 && f.length === h && (b = S + 1);
                if (_ === -1) throw new R4(`Failed to find start index for decoration ${JSON.stringify(p.start)}`);
                if (b === -1) throw new R4(`Failed to find end index for decoration ${JSON.stringify(p.end)}`);
                const y = g.children.slice(_, b);
                if (!p.alwaysWrap && y.length === g.children.length) a(g, p, "line");
                else if (!p.alwaysWrap && y.length === 1 && y[0].type === "element") a(y[0], p, "token");
                else {
                    const S = {
                        type: "element",
                        tagName: "span",
                        properties: {},
                        children: y
                    };
                    a(S, p, "wrapper"), g.children.splice(_, y.length, S);
                }
            }
            function o(u, d) {
                r[u] = a(r[u], d, "line");
            }
            function a(u, d, h) {
                const p = d.properties || {}, g = d.transform || ((f)=>f);
                return u.tagName = d.tagName || "span", u.properties = {
                    ...u.properties,
                    ...p,
                    class: u.properties.class
                }, d.properties?.class && qxh(u, d.properties.class), u = g(u, h) || u, u;
            }
            const l = [], c = i.decorations.sort((u, d)=>d.start.offset - u.start.offset || u.end.offset - d.end.offset);
            for (const u of c){
                const { start: d, end: h } = u;
                if (d.line === h.line) s(d.line, d.character, h.character, u);
                else if (d.line < h.line) {
                    s(d.line, d.character, Number.POSITIVE_INFINITY, u);
                    for(let p = d.line + 1; p < h.line; p++)l.unshift(()=>o(p, u));
                    s(h.line, 0, h.character, u);
                }
            }
            l.forEach((u)=>u());
        }
    };
}
function AoS(t) {
    for(let e = 0; e < t.length; e++){
        const n = t[e];
        if (n.start.offset > n.end.offset) throw new R4(`Invalid decoration range: ${JSON.stringify(n.start)} - ${JSON.stringify(n.end)}`);
        for(let i = e + 1; i < t.length; i++){
            const r = t[i], s = n.start.offset <= r.start.offset && r.start.offset < n.end.offset, o = n.start.offset < r.end.offset && r.end.offset <= n.end.offset, a = r.start.offset <= n.start.offset && n.start.offset < r.end.offset, l = r.start.offset < n.end.offset && n.end.offset <= r.end.offset;
            if (s || o || a || l) {
                if (s && o || a && l || a && n.start.offset === n.end.offset || o && r.start.offset === r.end.offset) continue;
                throw new R4(`Decorations ${JSON.stringify(n.start)} and ${JSON.stringify(r.start)} intersect.`);
            }
        }
    }
}
function zxh(t) {
    return t.type === "text" ? t.value : t.type === "element" ? t.children.map(zxh).join("") : "";
}
function R3r(t) {
    const e = RoS(t.transformers || []);
    return [
        ...e.pre,
        ...e.normal,
        ...e.post,
        ...Xxh
    ];
}
function RoS(t) {
    const e = [], n = [], i = [];
    for (const r of t)switch(r.enforce){
        case "pre":
            e.push(r);
            break;
        case "post":
            n.push(r);
            break;
        default:
            i.push(r);
    }
    return {
        pre: e,
        post: n,
        normal: i
    };
}
function PoS(t, e) {
    const n = t.indexOf("\x1B", e);
    if (n !== -1 && t[n + 1] === "[") {
        const i = t.indexOf("m", n);
        if (i !== -1) return {
            sequence: t.substring(n + 2, i).split(";"),
            startPosition: n,
            position: i + 1
        };
    }
    return {
        position: t.length
    };
}
function Vxh(t) {
    const e = t.shift();
    if (e === "2") {
        const n = t.splice(0, 3).map((i)=>Number.parseInt(i));
        return n.length !== 3 || n.some((i)=>Number.isNaN(i)) ? void 0 : {
            type: "rgb",
            rgb: n
        };
    } else if (e === "5") {
        const n = t.shift();
        if (n) return {
            type: "table",
            index: Number(n)
        };
    }
}
function MoS(t) {
    const e = [];
    for(; t.length > 0;){
        const n = t.shift();
        if (!n) continue;
        const i = Number.parseInt(n);
        if (!Number.isNaN(i)) if (i === 0) e.push({
            type: "resetAll"
        });
        else if (i <= 9) N3r[i] && e.push({
            type: "setDecoration",
            value: N3r[i]
        });
        else if (i <= 29) {
            const r = N3r[i - 20];
            r && (e.push({
                type: "resetDecoration",
                value: r
            }), r === "dim" && e.push({
                type: "resetDecoration",
                value: "bold"
            }));
        } else if (i <= 37) e.push({
            type: "setForegroundColor",
            value: {
                type: "named",
                name: g1t[i - 30]
            }
        });
        else if (i === 38) {
            const r = Vxh(t);
            r && e.push({
                type: "setForegroundColor",
                value: r
            });
        } else if (i === 39) e.push({
            type: "resetForegroundColor"
        });
        else if (i <= 47) e.push({
            type: "setBackgroundColor",
            value: {
                type: "named",
                name: g1t[i - 40]
            }
        });
        else if (i === 48) {
            const r = Vxh(t);
            r && e.push({
                type: "setBackgroundColor",
                value: r
            });
        } else i === 49 ? e.push({
            type: "resetBackgroundColor"
        }) : i === 53 ? e.push({
            type: "setDecoration",
            value: "overline"
        }) : i === 55 ? e.push({
            type: "resetDecoration",
            value: "overline"
        }) : i >= 90 && i <= 97 ? e.push({
            type: "setForegroundColor",
            value: {
                type: "named",
                name: g1t[i - 90 + 8]
            }
        }) : i >= 100 && i <= 107 && e.push({
            type: "setBackgroundColor",
            value: {
                type: "named",
                name: g1t[i - 100 + 8]
            }
        });
    }
    return e;
}
function DoS() {
    let t = null, e = null, n = new Set;
    return {
        parse (i) {
            const r = [];
            let s = 0;
            do {
                const o = PoS(i, s), a = o.sequence ? i.substring(s, o.startPosition) : i.substring(s);
                if (a.length > 0 && r.push({
                    value: a,
                    foreground: t,
                    background: e,
                    decorations: new Set(n)
                }), o.sequence) {
                    const l = MoS(o.sequence);
                    for (const c of l)c.type === "resetAll" ? (t = null, e = null, n.clear()) : c.type === "resetForegroundColor" ? t = null : c.type === "resetBackgroundColor" ? e = null : c.type === "resetDecoration" && n.delete(c.value);
                    for (const c of l)c.type === "setForegroundColor" ? t = c.value : c.type === "setBackgroundColor" ? e = c.value : c.type === "setDecoration" && n.add(c.value);
                }
                s = o.position;
            }while (s < i.length)
            return r;
        }
    };
}
function NoS(t = Zxh) {
    function e(a) {
        return t[a];
    }
    function n(a) {
        return `#${a.map((l)=>Math.max(0, Math.min(l, 255)).toString(16).padStart(2, "0")).join("")}`;
    }
    let i;
    function r() {
        if (i) return i;
        i = [];
        for(let c = 0; c < g1t.length; c++)i.push(e(g1t[c]));
        let a = [
            0,
            95,
            135,
            175,
            215,
            255
        ];
        for(let c = 0; c < 6; c++)for(let u = 0; u < 6; u++)for(let d = 0; d < 6; d++)i.push(n([
            a[c],
            a[u],
            a[d]
        ]));
        let l = 8;
        for(let c = 0; c < 24; c++, l += 10)i.push(n([
            l,
            l,
            l
        ]));
        return i;
    }
    function s(a) {
        return r()[a];
    }
    function o(a) {
        switch(a.type){
            case "named":
                return e(a.name);
            case "rgb":
                return n(a.rgb);
            case "table":
                return s(a.index);
        }
    }
    return {
        value: o
    };
}
function LoS(t, e, n) {
    const i = y3r(t, n), r = w3r(e), s = NoS(Object.fromEntries(g1t.map((a)=>{
        const l = `terminal.ansi${a[0].toUpperCase()}${a.substring(1)}`;
        return [
            a,
            t.colors?.[l] || Qxh[a]
        ];
    }))), o = DoS();
    return r.map((a)=>o.parse(a[0]).map((l)=>{
            let c, u;
            l.decorations.has("reverse") ? (c = l.background ? s.value(l.background) : t.bg, u = l.foreground ? s.value(l.foreground) : t.fg) : (c = l.foreground ? s.value(l.foreground) : t.fg, u = l.background ? s.value(l.background) : void 0), c = m1t(c, i), u = m1t(u, i), l.decorations.has("dim") && (c = OoS(c));
            let d = Rne.None;
            return l.decorations.has("bold") && (d |= Rne.Bold), l.decorations.has("italic") && (d |= Rne.Italic), l.decorations.has("underline") && (d |= Rne.Underline), l.decorations.has("strikethrough") && (d |= Rne.Strikethrough), {
                content: l.value,
                offset: a[1],
                color: c,
                bgColor: u,
                fontStyle: d
            };
        }));
}
function OoS(t) {
    const e = t.match(/#([0-9a-f]{3,8})/i);
    if (e) {
        const i = e[1];
        if (i.length === 8) {
            const r = Math.round(Number.parseInt(i.slice(6, 8), 16) / 2).toString(16).padStart(2, "0");
            return `#${i.slice(0, 6)}${r}`;
        } else {
            if (i.length === 6) return `#${i}80`;
            if (i.length === 4) {
                const r = i[0], s = i[1], o = i[2], a = i[3];
                return `#${r}${r}${s}${s}${o}${o}${Math.round(Number.parseInt(`${a}${a}`, 16) / 2).toString(16).padStart(2, "0")}`;
            } else if (i.length === 3) {
                const r = i[0], s = i[1], o = i[2];
                return `#${r}${r}${s}${s}${o}${o}80`;
            }
        }
    }
    const n = t.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);
    return n ? `var(${n[1]}-dim)` : t;
}
function _la(t, e, n = {}) {
    const i = t.resolveLangAlias(n.lang || "text"), { theme: r = t.getLoadedThemes()[0] } = n;
    if (!S3r(i) && !k3r(r) && i === "ansi") {
        const { theme: s } = t.setTheme(r);
        return LoS(s, e, n);
    }
    return cxh(t, e, n);
}
function P3r(t, e, n) {
    let i, r, s, o, a, l;
    if ("themes" in n) {
        const { defaultColor: c = "light", cssVariablePrefix: u = "--shiki-", colorsRendering: d = "css-vars" } = n, h = Object.entries(n.themes).filter((b)=>b[1]).map((b)=>({
                color: b[0],
                theme: b[1]
            })).sort((b, y)=>b.color === c ? -1 : y.color === c ? 1 : 0);
        if (h.length === 0) throw new R4("`themes` option must not be empty");
        const p = dxh(t, e, n, _la);
        if (l = hdi(p), c && D3r !== c && !h.find((b)=>b.color === c)) throw new R4(`\`themes\` option must contain the defaultColor key \`${c}\``);
        const g = h.map((b)=>t.getTheme(b.theme)), f = h.map((b)=>b.color);
        s = p.map((b)=>b.map((y)=>IoS(y, f, u, c, d))), l && C3r(s, l);
        const _ = h.map((b)=>y3r(b.theme, n));
        r = Kxh(h, g, _, u, c, "fg", d), i = Kxh(h, g, _, u, c, "bg", d), o = `shiki-themes ${g.map((b)=>b.name).join(" ")}`, a = c ? void 0 : [
            r,
            i
        ].join(";");
    } else if ("theme" in n) {
        const c = y3r(n.theme, n);
        s = _la(t, e, n);
        const u = t.getTheme(n.theme);
        i = m1t(u.bg, c), r = m1t(u.fg, c), o = u.name, l = hdi(s);
    } else throw new R4("Invalid options, either `theme` or `themes` must be provided");
    return {
        tokens: s,
        fg: r,
        bg: i,
        themeName: o,
        rootStyle: a,
        grammarState: l
    };
}
function Kxh(t, e, n, i, r, s, o) {
    return t.map((a, l)=>{
        const c = m1t(e[l][s], n[l]) || "inherit", u = `${i + a.color}${s === "bg" ? "-bg" : ""}:${c}`;
        if (l === 0 && r) {
            if (r === D3r && t.length > 1) {
                const d = t.findIndex((p)=>p.color === "light"), h = t.findIndex((p)=>p.color === "dark");
                if (d === -1 || h === -1) throw new R4('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
                return `light-dark(${m1t(e[d][s], n[d]) || "inherit"}, ${m1t(e[h][s], n[h]) || "inherit"});${u}`;
            }
            return c;
        }
        return o === "css-vars" ? u : null;
    }).filter((a)=>!!a).join(";");
}
function M3r(t, e, n, i = {
    meta: {},
    options: n,
    codeToHast: (r, s)=>M3r(t, r, s),
    codeToTokens: (r, s)=>P3r(t, r, s)
}) {
    let r = e;
    for (const g of R3r(n))r = g.preprocess?.call(i, r, n) || r;
    let { tokens: s, fg: o, bg: a, themeName: l, rootStyle: c, grammarState: u } = P3r(t, r, n);
    const { mergeWhitespaces: d = !0, mergeSameStyleTokens: h = !1 } = n;
    d === !0 ? s = BoS(s) : d === "never" && (s = UoS(s)), h && (s = joS(s));
    const p = {
        ...i,
        get source () {
            return r;
        }
    };
    for (const g of R3r(n))s = g.tokens?.call(p, s) || s;
    return FoS(s, {
        ...n,
        fg: o,
        bg: a,
        themeName: l,
        rootStyle: n.rootStyle === !1 ? !1 : n.rootStyle ?? c
    }, p, u);
}
function FoS(t, e, n, i = hdi(t)) {
    const r = R3r(e), s = [], o = {
        type: "root",
        children: []
    }, { structure: a = "classic", tabindex: l = "0" } = e, c = {
        class: `shiki ${e.themeName || ""}`
    };
    e.rootStyle !== !1 && (e.rootStyle != null ? c.style = e.rootStyle : c.style = `background-color:${e.bg};color:${e.fg}`), l !== !1 && l != null && (c.tabindex = l.toString());
    for (const [f, _] of Object.entries(e.meta || {}))f.startsWith("_") || (c[f] = _);
    let u = {
        type: "element",
        tagName: "pre",
        properties: c,
        children: [],
        data: e.data
    }, d = {
        type: "element",
        tagName: "code",
        properties: {},
        children: s
    };
    const h = [], p = {
        ...n,
        structure: a,
        addClassToHast: qxh,
        get source () {
            return n.source;
        },
        get tokens () {
            return t;
        },
        get options () {
            return e;
        },
        get root () {
            return o;
        },
        get pre () {
            return u;
        },
        get code () {
            return d;
        },
        get lines () {
            return h;
        }
    };
    if (t.forEach((f, _)=>{
        _ && (a === "inline" ? o.children.push({
            type: "element",
            tagName: "br",
            properties: {},
            children: []
        }) : a === "classic" && s.push({
            type: "text",
            value: `
`
        }));
        let b = {
            type: "element",
            tagName: "span",
            properties: {
                class: "line"
            },
            children: []
        }, y = 0;
        for (const S of f){
            let k = {
                type: "element",
                tagName: "span",
                properties: {
                    ...S.htmlAttrs
                },
                children: [
                    {
                        type: "text",
                        value: S.content
                    }
                ]
            };
            const C = vla(S.htmlStyle || A3r(S));
            C && (k.properties.style = C);
            for (const T of r)k = T?.span?.call(p, k, _ + 1, y, b, S) || k;
            a === "inline" ? o.children.push(k) : a === "classic" && b.children.push(k), y += S.content.length;
        }
        if (a === "classic") {
            for (const S of r)b = S?.line?.call(p, b, _ + 1) || b;
            h.push(b), s.push(b);
        } else a === "inline" && h.push(b);
    }), a === "classic") {
        for (const f of r)d = f?.code?.call(p, d) || d;
        u.children.push(d);
        for (const f of r)u = f?.pre?.call(p, u) || u;
        o.children.push(u);
    } else if (a === "inline") {
        const f = [];
        let _ = {
            type: "element",
            tagName: "span",
            properties: {
                class: "line"
            },
            children: []
        };
        for (const y of o.children)y.type === "element" && y.tagName === "br" ? (f.push(_), _ = {
            type: "element",
            tagName: "span",
            properties: {
                class: "line"
            },
            children: []
        }) : (y.type === "element" || y.type === "text") && _.children.push(y);
        f.push(_);
        let b = {
            type: "element",
            tagName: "code",
            properties: {},
            children: f
        };
        for (const y of r)b = y?.code?.call(p, b) || b;
        o.children = [];
        for(let y = 0; y < b.children.length; y++){
            y > 0 && o.children.push({
                type: "element",
                tagName: "br",
                properties: {},
                children: []
            });
            const S = b.children[y];
            S.type === "element" && o.children.push(...S.children);
        }
    }
    let g = o;
    for (const f of r)g = f?.root?.call(p, g) || g;
    return i && C3r(g, i), g;
}
function BoS(t) {
    return t.map((e)=>{
        const n = [];
        let i = "", r;
        return e.forEach((s, o)=>{
            const a = !(s.fontStyle && (s.fontStyle & Rne.Underline || s.fontStyle & Rne.Strikethrough));
            a && s.content.match(/^\s+$/) && e[o + 1] ? (r === void 0 && (r = s.offset), i += s.content) : i ? (a ? n.push({
                ...s,
                offset: r,
                content: i + s.content
            }) : n.push({
                content: i,
                offset: r
            }, s), r = void 0, i = "") : n.push(s);
        }), n;
    });
}
function UoS(t) {
    return t.map((e)=>e.flatMap((n)=>{
            if (n.content.match(/^\s+$/)) return n;
            const i = n.content.match(/^(\s*)(.*?)(\s*)$/);
            if (!i) return n;
            const [, r, s, o] = i;
            if (!r && !o) return n;
            const a = [
                {
                    ...n,
                    offset: n.offset + r.length,
                    content: s
                }
            ];
            return r && a.unshift({
                content: r,
                offset: n.offset
            }), o && a.push({
                content: o,
                offset: n.offset + r.length + s.length
            }), a;
        }));
}
function joS(t) {
    return t.map((e)=>{
        const n = [];
        for (const i of e){
            if (n.length === 0) {
                n.push({
                    ...i
                });
                continue;
            }
            const r = n[n.length - 1], s = vla(r.htmlStyle || A3r(r)), o = vla(i.htmlStyle || A3r(i)), a = r.fontStyle && (r.fontStyle & Rne.Underline || r.fontStyle & Rne.Strikethrough), l = i.fontStyle && (i.fontStyle & Rne.Underline || i.fontStyle & Rne.Strikethrough);
            !a && !l && s === o ? r.content += i.content : n.push({
                ...i
            });
        }
        return n;
    });
}
function $oS(t, e, n) {
    const i = {
        meta: {},
        options: n,
        codeToHast: (s, o)=>M3r(t, s, o),
        codeToTokens: (s, o)=>P3r(t, s, o)
    };
    let r = Jxh(M3r(t, e, n, i));
    for (const s of R3r(n))r = s.postprocess?.call(i, r, n) || r;
    return r;
}
function HoS(t) {
    const e = gsS(t);
    return {
        getLastGrammarState: (...n)=>_sS(e, ...n),
        codeToTokensBase: (n, i)=>_la(e, n, i),
        codeToTokensWithThemes: (n, i)=>dxh(e, n, i),
        codeToTokens: (n, i)=>P3r(e, n, i),
        codeToHast: (n, i)=>M3r(e, n, i),
        codeToHtml: (n, i)=>$oS(e, n, i),
        getBundledLanguages: ()=>({}),
        getBundledThemes: ()=>({}),
        ...e,
        getInternalContext: ()=>e
    };
}
function Ryn(t) {
    if ([
        ...t
    ].length !== 1) throw new Error(`Expected "${t}" to be a single code point`);
    return t.codePointAt(0);
}
function qoS(t, e, n) {
    return t.has(e) || t.set(e, n), t.get(e);
}
function Pyn(t, e) {
    if (t == null) throw new Error(e ?? "Value expected");
    return t;
}
function zoS(t, e = {}) {
    const n = {
        flags: "",
        ...e,
        rules: {
            captureGroup: !1,
            singleline: !1,
            ...e.rules
        }
    };
    if (typeof t != "string") throw new Error("String expected as pattern");
    const i = uaS(n.flags), r = [
        i.extended
    ], s = {
        captureGroup: n.rules.captureGroup,
        getCurrentModX () {
            return r.at(-1);
        },
        numOpenGroups: 0,
        popModX () {
            r.pop();
        },
        pushModX (d) {
            r.push(d);
        },
        replaceCurrentModX (d) {
            r[r.length - 1] = d;
        },
        singleline: n.rules.singleline
    };
    let o = [], a;
    for(gdi.lastIndex = 0; a = gdi.exec(t);){
        const d = VoS(s, t, a[0], gdi.lastIndex);
        d.tokens ? o.push(...d.tokens) : d.token && o.push(d.token), d.lastIndex !== void 0 && (gdi.lastIndex = d.lastIndex);
    }
    const l = [];
    let c = 0;
    o.filter((d)=>d.type === "GroupOpen").forEach((d)=>{
        d.kind === "capturing" ? d.number = ++c : d.raw === "(" && l.push(d);
    }), c || l.forEach((d, h)=>{
        d.kind = "capturing", d.number = h + 1;
    });
    const u = c || l.length;
    return {
        tokens: o.map((d)=>d.type === "EscapedNumber" ? haS(d, u) : d).flat(),
        flags: i
    };
}
function VoS(t, e, n, i) {
    const [r, s] = n;
    if (n === "[" || n === "[^") {
        const o = KoS(e, n, i);
        return {
            tokens: o.tokens,
            lastIndex: o.lastIndex
        };
    }
    if (r === "\\") {
        if ("AbBGyYzZ".includes(s)) return {
            token: sAh(n, n)
        };
        if (/^\\g[<']/.test(n)) {
            if (!/^\\g(?:<[^>]+>|'[^']+')$/.test(n)) throw new Error(`Invalid group name "${n}"`);
            return {
                token: raS(n)
            };
        }
        if (/^\\k[<']/.test(n)) {
            if (!/^\\k(?:<[^>]+>|'[^']+')$/.test(n)) throw new Error(`Invalid group name "${n}"`);
            return {
                token: oAh(n)
            };
        }
        if (s === "K") return {
            token: lAh("keep", n)
        };
        if (s === "N" || s === "R") return {
            token: iUt("newline", n, {
                negate: s === "N"
            })
        };
        if (s === "O") return {
            token: iUt("any", n)
        };
        if (s === "X") return {
            token: iUt("text_segment", n)
        };
        const o = rAh(n, {
            inCharClass: !1
        });
        return Array.isArray(o) ? {
            tokens: o
        } : {
            token: o
        };
    }
    if (r === "(") {
        if (s === "*") return {
            token: aaS(n)
        };
        if (n === "(?{") throw new Error(`Unsupported callout "${n}"`);
        if (n.startsWith("(?#")) {
            if (e[i] !== ")") throw new Error('Unclosed comment group "(?#"');
            return {
                lastIndex: i + 1
            };
        }
        if (/^\(\?[-imx]+[:)]$/.test(n)) return {
            token: oaS(n, t)
        };
        if (t.pushModX(t.getCurrentModX()), t.numOpenGroups++, n === "(" && !t.captureGroup || n === "(?:") return {
            token: Myn("group", n)
        };
        if (n === "(?>") return {
            token: Myn("atomic", n)
        };
        if (n === "(?=" || n === "(?!" || n === "(?<=" || n === "(?<!") return {
            token: Myn(n[2] === "<" ? "lookbehind" : "lookahead", n, {
                negate: n.endsWith("!")
            })
        };
        if (n === "(" && t.captureGroup || n.startsWith("(?<") && n.endsWith(">") || n.startsWith("(?'") && n.endsWith("'")) return {
            token: Myn("capturing", n, {
                ...n !== "(" && {
                    name: n.slice(3, -1)
                }
            })
        };
        if (n.startsWith("(?~")) {
            if (n === "(?~|") throw new Error(`Unsupported absence function kind "${n}"`);
            return {
                token: Myn("absence_repeater", n)
            };
        }
        throw n === "(?(" ? new Error(`Unsupported conditional "${n}"`) : new Error(`Invalid or unsupported group option "${n}"`);
    }
    if (n === ")") {
        if (t.popModX(), t.numOpenGroups--, t.numOpenGroups < 0) throw new Error('Unmatched ")"');
        return {
            token: taS(n)
        };
    }
    if (t.getCurrentModX()) {
        if (n === "#") {
            const o = e.indexOf(`
`, i);
            return {
                lastIndex: o === -1 ? e.length : o
            };
        }
        if (/^\s$/.test(n)) {
            const o = /\s+/y;
            return o.lastIndex = i, {
                lastIndex: o.exec(e) ? o.lastIndex : i
            };
        }
    }
    if (n === ".") return {
        token: iUt("dot", n)
    };
    if (n === "^" || n === "$") {
        const o = t.singleline ? {
            "^": HY`\A`,
            $: HY`\Z`
        }[n] : n;
        return {
            token: sAh(o, n)
        };
    }
    return n === "|" ? {
        token: XoS(n)
    } : O3r.test(n) ? {
        tokens: paS(n)
    } : {
        token: Rit(Ryn(n), n)
    };
}
function KoS(t, e, n) {
    const i = [
        aAh(e[1] === "^", e)
    ];
    let r = 1, s;
    for(F3r.lastIndex = n; s = F3r.exec(t);){
        const o = s[0];
        if (o[0] === "[" && o[1] !== ":") r++, i.push(aAh(o[1] === "^", o));
        else if (o === "]") {
            if (i.at(-1).type === "CharacterClassOpen") i.push(Rit(93, o));
            else if (r--, i.push(ZoS(o)), !r) break;
        } else {
            const a = YoS(o);
            Array.isArray(a) ? i.push(...a) : i.push(a);
        }
    }
    return {
        tokens: i,
        lastIndex: F3r.lastIndex || t.length
    };
}
function YoS(t) {
    if (t[0] === "\\") return rAh(t, {
        inCharClass: !0
    });
    if (t[0] === "[") {
        const e = /\[:(?<negate>\^?)(?<name>[a-z]+):\]/.exec(t);
        if (!e || !L3r.has(e.groups.name)) throw new Error(`Invalid POSIX class "${t}"`);
        return iUt("posix", t, {
            value: e.groups.name,
            negate: !!e.groups.negate
        });
    }
    return t === "-" ? QoS(t) : t === "&&" ? JoS(t) : Rit(Ryn(t), t);
}
function rAh(t, { inCharClass: e }) {
    const n = t[1];
    if (n === "c" || n === "C") return saS(t);
    if ("dDhHsSwW".includes(n)) return laS(t);
    if (t.startsWith(HY`\o{`)) throw new Error(`Incomplete, invalid, or unsupported octal code point "${t}"`);
    if (/^\\[pP]\{/.test(t)) {
        if (t.length === 3) throw new Error(`Incomplete or invalid Unicode property "${t}"`);
        return caS(t);
    }
    if (/^\\x[89A-Fa-f]\p{AHex}/u.test(t)) try {
        const i = t.split(/\\x/).slice(1).map((o)=>parseInt(o, 16)), r = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }).decode(new Uint8Array(i)), s = new TextEncoder;
        return [
            ...r
        ].map((o)=>{
            const a = [
                ...s.encode(o)
            ].map((l)=>`\\x${l.toString(16)}`).join("");
            return Rit(Ryn(o), a);
        });
    } catch  {
        throw new Error(`Multibyte code "${t}" incomplete or invalid in Oniguruma`);
    }
    if (n === "u" || n === "x") return Rit(daS(t), t);
    if (wla.has(n)) return Rit(wla.get(n), t);
    if (/\d/.test(n)) return eaS(e, t);
    if (t === "\\") throw new Error(HY`Incomplete escape "\"`);
    if (n === "M") throw new Error(`Unsupported meta "${t}"`);
    if ([
        ...t
    ].length === 2) return Rit(t.codePointAt(1), t);
    throw new Error(`Unexpected escape "${t}"`);
}
function XoS(t) {
    return {
        type: "Alternator",
        raw: t
    };
}
function sAh(t, e) {
    return {
        type: "Assertion",
        kind: t,
        raw: e
    };
}
function oAh(t) {
    return {
        type: "Backreference",
        raw: t
    };
}
function Rit(t, e) {
    return {
        type: "Character",
        value: t,
        raw: e
    };
}
function ZoS(t) {
    return {
        type: "CharacterClassClose",
        raw: t
    };
}
function QoS(t) {
    return {
        type: "CharacterClassHyphen",
        raw: t
    };
}
function JoS(t) {
    return {
        type: "CharacterClassIntersector",
        raw: t
    };
}
function aAh(t, e) {
    return {
        type: "CharacterClassOpen",
        negate: t,
        raw: e
    };
}
function iUt(t, e, n = {}) {
    return {
        type: "CharacterSet",
        kind: t,
        ...n,
        raw: e
    };
}
function lAh(t, e, n = {}) {
    return t === "keep" ? {
        type: "Directive",
        kind: t,
        raw: e
    } : {
        type: "Directive",
        kind: t,
        flags: Pyn(n.flags),
        raw: e
    };
}
function eaS(t, e) {
    return {
        type: "EscapedNumber",
        inCharClass: t,
        raw: e
    };
}
function taS(t) {
    return {
        type: "GroupClose",
        raw: t
    };
}
function Myn(t, e, n = {}) {
    return {
        type: "GroupOpen",
        kind: t,
        ...n,
        raw: e
    };
}
function naS(t, e, n, i) {
    return {
        type: "NamedCallout",
        kind: t,
        tag: e,
        arguments: n,
        raw: i
    };
}
function iaS(t, e, n, i) {
    return {
        type: "Quantifier",
        kind: t,
        min: e,
        max: n,
        raw: i
    };
}
function raS(t) {
    return {
        type: "Subroutine",
        raw: t
    };
}
function saS(t) {
    const e = t[1] === "c" ? t[2] : t[3];
    if (!e || !/[A-Za-z]/.test(e)) throw new Error(`Unsupported control character "${t}"`);
    return Rit(Ryn(e.toUpperCase()) - 64, t);
}
function oaS(t, e) {
    let { on: n, off: i } = /^\(\?(?<on>[imx]*)(?:-(?<off>[-imx]*))?/.exec(t).groups;
    i ?? (i = "");
    const r = (e.getCurrentModX() || n.includes("x")) && !i.includes("x"), s = uAh(n), o = uAh(i), a = {};
    if (s && (a.enable = s), o && (a.disable = o), t.endsWith(")")) return e.replaceCurrentModX(r), lAh("flags", t, {
        flags: a
    });
    if (t.endsWith(":")) return e.pushModX(r), e.numOpenGroups++, Myn("group", t, {
        ...(s || o) && {
            flags: a
        }
    });
    throw new Error(`Unexpected flag modifier "${t}"`);
}
function aaS(t) {
    const e = /\(\*(?<name>[A-Za-z_]\w*)?(?:\[(?<tag>(?:[A-Za-z_]\w*)?)\])?(?:\{(?<args>[^}]*)\})?\)/.exec(t);
    if (!e) throw new Error(`Incomplete or invalid named callout "${t}"`);
    const { name: n, tag: i, args: r } = e.groups;
    if (!n) throw new Error(`Invalid named callout "${t}"`);
    if (i === "") throw new Error(`Named callout tag with empty value not allowed "${t}"`);
    const s = r ? r.split(",").filter((u)=>u !== "").map((u)=>/^[+-]?\d+$/.test(u) ? +u : u) : [], [o, a, l] = s, c = dAh.has(n) ? n.toLowerCase() : "custom";
    switch(c){
        case "fail":
        case "mismatch":
        case "skip":
            if (s.length > 0) throw new Error(`Named callout arguments not allowed "${s}"`);
            break;
        case "error":
            if (s.length > 1) throw new Error(`Named callout allows only one argument "${s}"`);
            if (typeof o == "string") throw new Error(`Named callout argument must be a number "${o}"`);
            break;
        case "max":
            if (!s.length || s.length > 2) throw new Error(`Named callout must have one or two arguments "${s}"`);
            if (typeof o == "string" && !/^[A-Za-z_]\w*$/.test(o)) throw new Error(`Named callout argument one must be a tag or number "${o}"`);
            if (s.length === 2 && (typeof a == "number" || !/^[<>X]$/.test(a))) throw new Error(`Named callout optional argument two must be '<', '>', or 'X' "${a}"`);
            break;
        case "count":
        case "total_count":
            if (s.length > 1) throw new Error(`Named callout allows only one argument "${s}"`);
            if (s.length === 1 && (typeof o == "number" || !/^[<>X]$/.test(o))) throw new Error(`Named callout optional argument must be '<', '>', or 'X' "${o}"`);
            break;
        case "cmp":
            if (s.length !== 3) throw new Error(`Named callout must have three arguments "${s}"`);
            if (typeof o == "string" && !/^[A-Za-z_]\w*$/.test(o)) throw new Error(`Named callout argument one must be a tag or number "${o}"`);
            if (typeof a == "number" || !/^(?:[<>!=]=|[<>])$/.test(a)) throw new Error(`Named callout argument two must be '==', '!=', '>', '<', '>=', or '<=' "${a}"`);
            if (typeof l == "string" && !/^[A-Za-z_]\w*$/.test(l)) throw new Error(`Named callout argument three must be a tag or number "${l}"`);
            break;
        case "custom":
            throw new Error(`Undefined callout name "${n}"`);
        default:
            throw new Error(`Unexpected named callout kind "${c}"`);
    }
    return naS(c, i ?? null, r?.split(",") ?? null, t);
}
function cAh(t) {
    let e = null, n, i;
    if (t[0] === "{") {
        const { minStr: r, maxStr: s } = /^\{(?<minStr>\d*)(?:,(?<maxStr>\d*))?/.exec(t).groups, o = 1e5;
        if (+r > o || s && +s > o) throw new Error("Quantifier value unsupported in Oniguruma");
        if (n = +r, i = s === void 0 ? +r : s === "" ? 1 / 0 : +s, n > i && (e = "possessive", [n, i] = [
            i,
            n
        ]), t.endsWith("?")) {
            if (e === "possessive") throw new Error('Unsupported possessive interval quantifier chain with "?"');
            e = "lazy";
        } else e || (e = "greedy");
    } else n = t[0] === "+" ? 1 : 0, i = t[0] === "?" ? 1 : 1 / 0, e = t[1] === "+" ? "possessive" : t[1] === "?" ? "lazy" : "greedy";
    return iaS(e, n, i, t);
}
function laS(t) {
    const e = t[1].toLowerCase();
    return iUt({
        d: "digit",
        h: "hex",
        s: "space",
        w: "word"
    }[e], t, {
        negate: t[1] !== e
    });
}
function caS(t) {
    const { p: e, neg: n, value: i } = /^\\(?<p>[pP])\{(?<neg>\^?)(?<value>[^}]+)/.exec(t).groups;
    return iUt("property", t, {
        value: i,
        negate: e === "P" && !n || e === "p" && !!n
    });
}
function uAh(t) {
    const e = {};
    return t.includes("i") && (e.ignoreCase = !0), t.includes("m") && (e.dotAll = !0), t.includes("x") && (e.extended = !0), Object.keys(e).length ? e : null;
}
function uaS(t) {
    const e = {
        ignoreCase: !1,
        dotAll: !1,
        extended: !1,
        digitIsAscii: !1,
        posixIsAscii: !1,
        spaceIsAscii: !1,
        wordIsAscii: !1,
        textSegmentMode: null
    };
    for(let n = 0; n < t.length; n++){
        const i = t[n];
        if (!"imxDPSWy".includes(i)) throw new Error(`Invalid flag "${i}"`);
        if (i === "y") {
            if (!/^y{[gw]}/.test(t.slice(n))) throw new Error('Invalid or unspecified flag "y" mode');
            e.textSegmentMode = t[n + 2] === "g" ? "grapheme" : "word", n += 3;
            continue;
        }
        e[{
            i: "ignoreCase",
            m: "dotAll",
            x: "extended",
            D: "digitIsAscii",
            P: "posixIsAscii",
            S: "spaceIsAscii",
            W: "wordIsAscii"
        }[i]] = !0;
    }
    return e;
}
function daS(t) {
    if (/^(?:\\u(?!\p{AHex}{4})|\\x(?!\p{AHex}{1,2}|\{\p{AHex}{1,8}\}))/u.test(t)) throw new Error(`Incomplete or invalid escape "${t}"`);
    const e = t[2] === "{" ? /^\\x\{\s*(?<hex>\p{AHex}+)/u.exec(t).groups.hex : t.slice(2);
    return parseInt(e, 16);
}
function haS(t, e) {
    const { raw: n, inCharClass: i } = t, r = n.slice(1);
    if (!i && (r !== "0" && r.length === 1 || r[0] !== "0" && +r <= e)) return [
        oAh(n)
    ];
    const s = [], o = r.match(/^[0-7]+|\d/g);
    for(let a = 0; a < o.length; a++){
        const l = o[a];
        let c;
        if (a === 0 && l !== "8" && l !== "9") {
            if (c = parseInt(l, 8), c > 127) throw new Error(HY`Octal encoded byte above 177 unsupported "${n}"`);
        } else c = Ryn(l);
        s.push(Rit(c, (a === 0 ? "\\" : "") + l));
    }
    return s;
}
function paS(t) {
    const e = [], n = new RegExp(O3r, "gy");
    let i;
    for(; i = n.exec(t);){
        const r = i[0];
        if (r[0] === "{") {
            const s = /^\{(?<min>\d+),(?<max>\d+)\}\??$/.exec(r);
            if (s) {
                const { min: o, max: a } = s.groups;
                if (+o > +a && r.endsWith("?")) {
                    n.lastIndex--, e.push(cAh(r.slice(0, -1)));
                    continue;
                }
            }
        }
        e.push(cAh(r));
    }
    return e;
}
export function hAh(t, e) {
    if (!Array.isArray(t.body)) throw new Error("Expected node with body array");
    if (t.body.length !== 1) return !1;
    const n = t.body[0];
    return !e || Object.keys(e).every((i)=>e[i] === n[i]);
}
function gaS(t) {
    return pAh.has(t.type);
}
function gAh(t, e = {}) {
    const n = {
        flags: "",
        normalizeUnknownPropertyNames: !1,
        skipBackrefValidation: !1,
        skipLookbehindValidation: !1,
        skipPropertyNameValidation: !1,
        unicodePropertyMap: null,
        ...e,
        rules: {
            captureGroup: !1,
            singleline: !1,
            ...e.rules
        }
    }, i = zoS(t, {
        flags: n.flags,
        rules: {
            captureGroup: n.rules.captureGroup,
            singleline: n.rules.singleline
        }
    }), r = (h, p)=>{
        const g = i.tokens[s.nextIndex];
        switch(s.parent = h, s.nextIndex++, g.type){
            case "Alternator":
                return rUt();
            case "Assertion":
                return faS(g);
            case "Backreference":
                return vaS(g, s);
            case "Character":
                return B3r(g.value, {
                    useLastValid: !!p.isCheckingRangeEnd
                });
            case "CharacterClassHyphen":
                return _aS(g, s, p);
            case "CharacterClassOpen":
                return baS(g, s, p);
            case "CharacterSet":
                return yaS(g, s);
            case "Directive":
                return EaS(g.kind, {
                    flags: g.flags
                });
            case "GroupOpen":
                return SaS(g, s, p);
            case "NamedCallout":
                return xaS(g.kind, g.tag, g.arguments);
            case "Quantifier":
                return kaS(g, s);
            case "Subroutine":
                return waS(g, s);
            default:
                throw new Error(`Unexpected token type "${g.type}"`);
        }
    }, s = {
        capturingGroups: [],
        hasNumberedRef: !1,
        namedGroupsByName: new Map,
        nextIndex: 0,
        normalizeUnknownPropertyNames: n.normalizeUnknownPropertyNames,
        parent: null,
        skipBackrefValidation: n.skipBackrefValidation,
        skipLookbehindValidation: n.skipLookbehindValidation,
        skipPropertyNameValidation: n.skipPropertyNameValidation,
        subroutines: [],
        tokens: i.tokens,
        unicodePropertyMap: n.unicodePropertyMap,
        walk: r
    }, o = RaS(IaS(i.flags));
    let a = o.body[0];
    for(; s.nextIndex < i.tokens.length;){
        const h = r(a, {});
        h.type === "Alternative" ? (o.body.push(h), a = h) : a.body.push(h);
    }
    const { capturingGroups: l, hasNumberedRef: c, namedGroupsByName: u, subroutines: d } = s;
    if (c && u.size && !n.rules.captureGroup) throw new Error("Numbered backref/subroutine not allowed when using named capture");
    for (const { ref: h } of d)if (typeof h == "number") {
        if (h > l.length) throw new Error("Subroutine uses a group number that's not defined");
        h && (l[h - 1].isSubroutined = !0);
    } else if (u.has(h)) {
        if (u.get(h).length > 1) throw new Error(HY`Subroutine uses a duplicate group name "\g<${h}>"`);
        u.get(h)[0].isSubroutined = !0;
    } else throw new Error(HY`Subroutine uses a group name that's not defined "\g<${h}>"`);
    return o;
}
function faS({ kind: t }) {
    return Cla(Pyn({
        "^": "line_start",
        $: "line_end",
        "\\A": "string_start",
        "\\b": "word_boundary",
        "\\B": "word_boundary",
        "\\G": "search_start",
        "\\y": "text_segment_boundary",
        "\\Y": "text_segment_boundary",
        "\\z": "string_end",
        "\\Z": "string_end_newline"
    }[t], `Unexpected assertion kind "${t}"`), {
        negate: t === HY`\B` || t === HY`\Y`
    });
}
function vaS({ raw: t }, e) {
    const n = /^\\k[<']/.test(t), i = n ? t.slice(3, -1) : t.slice(1), r = (s, o = !1)=>{
        const a = e.capturingGroups.length;
        let l = !1;
        if (s > a) if (e.skipBackrefValidation) l = !0;
        else throw new Error(`Not enough capturing groups defined to the left "${t}"`);
        return e.hasNumberedRef = !0, Tla(o ? a + 1 - s : s, {
            orphan: l
        });
    };
    if (n) {
        const s = /^(?<sign>-?)0*(?<num>[1-9]\d*)$/.exec(i);
        if (s) return r(+s.groups.num, !!s.groups.sign);
        if (/[-+]/.test(i)) throw new Error(`Invalid backref name "${t}"`);
        if (!e.namedGroupsByName.has(i)) throw new Error(`Group name not defined to the left "${t}"`);
        return Tla(i);
    }
    return r(+i);
}
function _aS(t, e, n) {
    const { tokens: i, walk: r } = e, s = e.parent, o = s.body.at(-1), a = i[e.nextIndex];
    if (!n.isCheckingRangeEnd && o && o.type !== "CharacterClass" && o.type !== "CharacterClassRange" && a && a.type !== "CharacterClassOpen" && a.type !== "CharacterClassClose" && a.type !== "CharacterClassIntersector") {
        const l = r(s, {
            ...n,
            isCheckingRangeEnd: !0
        });
        if (o.type === "Character" && l.type === "Character") return s.body.pop(), TaS(o, l);
        throw new Error("Invalid character class range");
    }
    return B3r(Ryn("-"));
}
function baS({ negate: t }, e, n) {
    const { tokens: i, walk: r } = e, s = i[e.nextIndex], o = [
        U3r()
    ];
    let a = kAh(s);
    for(; a.type !== "CharacterClassClose";){
        if (a.type === "CharacterClassIntersector") o.push(U3r()), e.nextIndex++;
        else {
            const c = o.at(-1);
            c.body.push(r(c, n));
        }
        a = kAh(i[e.nextIndex], s);
    }
    const l = U3r({
        negate: t
    });
    return o.length === 1 ? l.body = o[0].body : (l.kind = "intersection", l.body = o.map((c)=>c.body.length === 1 ? c.body[0] : c)), e.nextIndex++, l;
}
function yaS({ kind: t, negate: e, value: n }, i) {
    const { normalizeUnknownPropertyNames: r, skipPropertyNameValidation: s, unicodePropertyMap: o } = i;
    if (t === "property") {
        const a = j3r(n);
        if (L3r.has(a) && !o?.has(a)) t = "posix", n = a;
        else return Dyn(n, {
            negate: e,
            normalizeUnknownPropertyNames: r,
            skipPropertyNameValidation: s,
            unicodePropertyMap: o
        });
    }
    return t === "posix" ? AaS(n, {
        negate: e
    }) : Ela(t, {
        negate: e
    });
}
function SaS(t, e, n) {
    const { tokens: i, capturingGroups: r, namedGroupsByName: s, skipLookbehindValidation: o, walk: a } = e, l = PaS(t), c = l.type === "AbsenceFunction", u = SAh(l), d = u && l.negate;
    if (l.type === "CapturingGroup" && (r.push(l), l.name && qoS(s, l.name, []).push(l)), c && n.isInAbsenceFunction) throw new Error("Nested absence function not supported by Oniguruma");
    let h = wAh(i[e.nextIndex]);
    for(; h.type !== "GroupClose";){
        if (h.type === "Alternator") l.body.push(rUt()), e.nextIndex++;
        else {
            const p = l.body.at(-1), g = a(p, {
                ...n,
                isInAbsenceFunction: n.isInAbsenceFunction || c,
                isInLookbehind: n.isInLookbehind || u,
                isInNegLookbehind: n.isInNegLookbehind || d
            });
            if (p.body.push(g), (u || n.isInLookbehind) && !o) {
                const f = "Lookbehind includes a pattern not allowed by Oniguruma";
                if (d || n.isInNegLookbehind) {
                    if (yAh(g) || g.type === "CapturingGroup") throw new Error(f);
                } else if (yAh(g) || SAh(g) && g.negate) throw new Error(f);
            }
        }
        h = wAh(i[e.nextIndex]);
    }
    return e.nextIndex++, l;
}
function kaS({ kind: t, min: e, max: n }, i) {
    const r = i.parent, s = r.body.at(-1);
    if (!s || !gaS(s)) throw new Error("Quantifier requires a repeatable token");
    const o = vAh(t, e, n, s);
    return r.body.pop(), o;
}
function waS({ raw: t }, e) {
    const { capturingGroups: n, subroutines: i } = e;
    let r = t.slice(3, -1);
    const s = /^(?<sign>[-+]?)0*(?<num>[1-9]\d*)$/.exec(r);
    if (s) {
        const a = +s.groups.num, l = n.length;
        if (e.hasNumberedRef = !0, r = {
            "": a,
            "+": l + a,
            "-": l + 1 - a
        }[s.groups.sign], r < 1) throw new Error("Invalid subroutine number");
    } else r === "0" && (r = 0);
    const o = _Ah(r);
    return i.push(o), o;
}
function CaS(t, e) {
    if (t !== "repeater") throw new Error(`Unexpected absence function kind "${t}"`);
    return {
        type: "AbsenceFunction",
        kind: t,
        body: fdi(e?.body)
    };
}
export function rUt(t) {
    return {
        type: "Alternative",
        body: bAh(t?.body)
    };
}
export function Cla(t, e) {
    const n = {
        type: "Assertion",
        kind: t
    };
    return (t === "word_boundary" || t === "text_segment_boundary") && (n.negate = !!e?.negate), n;
}
export function Tla(t, e) {
    const n = !!e?.orphan;
    return {
        type: "Backreference",
        ref: t,
        ...n && {
            orphan: n
        }
    };
}
export function fAh(t, e) {
    const n = {
        name: void 0,
        isSubroutined: !1,
        ...e
    };
    if (n.name !== void 0 && !MaS(n.name)) throw new Error(`Group name "${n.name}" invalid in Oniguruma`);
    return {
        type: "CapturingGroup",
        number: t,
        ...n.name && {
            name: n.name
        },
        ...n.isSubroutined && {
            isSubroutined: n.isSubroutined
        },
        body: fdi(e?.body)
    };
}
export function B3r(t, e) {
    const n = {
        useLastValid: !1,
        ...e
    };
    if (t > 1114111) {
        const i = t.toString(16);
        if (n.useLastValid) t = 1114111;
        else throw t > 1310719 ? new Error(`Invalid code point out of range "\\x{${i}}"`) : new Error(`Invalid code point out of range in JS "\\x{${i}}"`);
    }
    return {
        type: "Character",
        value: t
    };
}
export function U3r(t) {
    const e = {
        kind: "union",
        negate: !1,
        ...t
    };
    return {
        type: "CharacterClass",
        kind: e.kind,
        negate: e.negate,
        body: bAh(t?.body)
    };
}
function TaS(t, e) {
    if (e.value < t.value) throw new Error("Character class range out of order");
    return {
        type: "CharacterClassRange",
        min: t,
        max: e
    };
}
export function Ela(t, e) {
    const n = !!e?.negate, i = {
        type: "CharacterSet",
        kind: t
    };
    return (t === "digit" || t === "hex" || t === "newline" || t === "space" || t === "word") && (i.negate = n), (t === "text_segment" || t === "newline" && !n) && (i.variableLength = !0), i;
}
function EaS(t, e = {}) {
    if (t === "keep") return {
        type: "Directive",
        kind: t
    };
    if (t === "flags") return {
        type: "Directive",
        kind: t,
        flags: Pyn(e.flags)
    };
    throw new Error(`Unexpected directive kind "${t}"`);
}
function IaS(t) {
    return {
        type: "Flags",
        ...t
    };
}
export function vFe(t) {
    const e = t?.atomic, n = t?.flags;
    if (e && n) throw new Error("Atomic group cannot have flags");
    return {
        type: "Group",
        ...e && {
            atomic: e
        },
        ...n && {
            flags: n
        },
        body: fdi(t?.body)
    };
}
export function sUt(t) {
    const e = {
        behind: !1,
        negate: !1,
        ...t
    };
    return {
        type: "LookaroundAssertion",
        kind: e.behind ? "lookbehind" : "lookahead",
        negate: e.negate,
        body: fdi(t?.body)
    };
}
function xaS(t, e, n) {
    return {
        type: "NamedCallout",
        kind: t,
        tag: e,
        arguments: n
    };
}
function AaS(t, e) {
    const n = !!e?.negate;
    if (!L3r.has(t)) throw new Error(`Invalid POSIX class "${t}"`);
    return {
        type: "CharacterSet",
        kind: "posix",
        value: t,
        negate: n
    };
}
export function vAh(t, e, n, i) {
    if (e > n) throw new Error("Invalid reversed quantifier range");
    return {
        type: "Quantifier",
        kind: t,
        min: e,
        max: n,
        body: i
    };
}
function RaS(t, e) {
    return {
        type: "Regex",
        body: fdi(e?.body),
        flags: t
    };
}
function _Ah(t) {
    return {
        type: "Subroutine",
        ref: t
    };
}
export function Dyn(t, e) {
    const n = {
        negate: !1,
        normalizeUnknownPropertyNames: !1,
        skipPropertyNameValidation: !1,
        unicodePropertyMap: null,
        ...e
    };
    let i = n.unicodePropertyMap?.get(j3r(t));
    if (!i) {
        if (n.normalizeUnknownPropertyNames) i = DaS(t);
        else if (n.unicodePropertyMap && !n.skipPropertyNameValidation) throw new Error(HY`Invalid Unicode property "\p{${t}}"`);
    }
    return {
        type: "CharacterSet",
        kind: "property",
        value: i ?? t,
        negate: n.negate
    };
}
function PaS({ flags: t, kind: e, name: n, negate: i, number: r }) {
    switch(e){
        case "absence_repeater":
            return CaS("repeater");
        case "atomic":
            return vFe({
                atomic: !0
            });
        case "capturing":
            return fAh(r, {
                name: n
            });
        case "group":
            return vFe({
                flags: t
            });
        case "lookahead":
        case "lookbehind":
            return sUt({
                behind: e === "lookbehind",
                negate: i
            });
        default:
            throw new Error(`Unexpected group kind "${e}"`);
    }
}
function fdi(t) {
    if (t === void 0) t = [
        rUt()
    ];
    else if (!Array.isArray(t) || !t.length || !t.every((e)=>e.type === "Alternative")) throw new Error("Invalid body; expected array of one or more Alternative nodes");
    return t;
}
function bAh(t) {
    if (t === void 0) t = [];
    else if (!Array.isArray(t) || !t.every((e)=>!!e.type)) throw new Error("Invalid body; expected array of nodes");
    return t;
}
function yAh(t) {
    return t.type === "LookaroundAssertion" && t.kind === "lookahead";
}
function SAh(t) {
    return t.type === "LookaroundAssertion" && t.kind === "lookbehind";
}
function MaS(t) {
    return /^[\p{Alpha}\p{Pc}][^)]*$/u.test(t);
}
function DaS(t) {
    return t.trim().replace(/[- _]+/g, "_").replace(/[A-Z][a-z]+(?=[A-Z])/g, "$&_").replace(/[A-Za-z]+/g, (e)=>e[0].toUpperCase() + e.slice(1).toLowerCase());
}
export function j3r(t) {
    return t.replace(/[- _]+/g, "").toLowerCase();
}
function kAh(t, e) {
    return Pyn(t, `${e?.type === "Character" && e.value === 93 ? "Empty" : "Unclosed"} character class`);
}
function wAh(t) {
    return Pyn(t, "Unclosed group");
}
function vdi(t, e, n = null) {
    function i(s, o) {
        for(let a = 0; a < s.length; a++){
            const l = r(s[a], o, a, s);
            a = Math.max(-1, a + l);
        }
    }
    function r(s, o = null, a = null, l = null) {
        let c = 0, u = !1;
        const d = {
            node: s,
            parent: o,
            key: a,
            container: l,
            root: t,
            remove () {
                $3r(l).splice(Math.max(0, Nyn(a) + c), 1), c--, u = !0;
            },
            removeAllNextSiblings () {
                return $3r(l).splice(Nyn(a) + 1);
            },
            removeAllPrevSiblings () {
                const b = Nyn(a) + c;
                return c -= b, $3r(l).splice(0, Math.max(0, b));
            },
            replaceWith (b, y = {}) {
                const S = !!y.traverse;
                l ? l[Math.max(0, Nyn(a) + c)] = b : Pyn(o, "Can't replace root node")[a] = b, S && r(b, o, a, l), u = !0;
            },
            replaceWithMultiple (b, y = {}) {
                const S = !!y.traverse;
                if ($3r(l).splice(Math.max(0, Nyn(a) + c), 1, ...b), c += b.length - 1, S) {
                    let k = 0;
                    for(let C = 0; C < b.length; C++)k += r(b[C], o, Nyn(a) + C + k, l);
                }
                u = !0;
            },
            skip () {
                u = !0;
            }
        }, { type: h } = s, p = e["*"], g = e[h], f = typeof p == "function" ? p : p?.enter, _ = typeof g == "function" ? g : g?.enter;
        if (f?.(d, n), _?.(d, n), !u) switch(h){
            case "AbsenceFunction":
            case "CapturingGroup":
            case "Group":
                i(s.body, s);
                break;
            case "Alternative":
            case "CharacterClass":
                i(s.body, s);
                break;
            case "Assertion":
            case "Backreference":
            case "Character":
            case "CharacterSet":
            case "Directive":
            case "Flags":
            case "NamedCallout":
            case "Subroutine":
                break;
            case "CharacterClassRange":
                r(s.min, s, "min"), r(s.max, s, "max");
                break;
            case "LookaroundAssertion":
                i(s.body, s);
                break;
            case "Quantifier":
                r(s.body, s, "body");
                break;
            case "Regex":
                i(s.body, s), r(s.flags, s, "flags");
                break;
            default:
                throw new Error(`Unexpected node type "${h}"`);
        }
        return g?.exit?.(d, n), p?.exit?.(d, n), c;
    }
    return r(t), t;
}
function $3r(t) {
    if (!Array.isArray(t)) throw new Error("Container expected");
    return t;
}
function Nyn(t) {
    if (typeof t != "number") throw new Error("Numeric key expected");
    return t;
}
function OaS(t, e) {
    for(let n = 0; n < t.length; n++)t[n] >= e && t[n]++;
}
function FaS(t, e, n, i) {
    return t.slice(0, e) + i + t.slice(e + n.length);
}
function Ila(t, e, n, i) {
    const r = new RegExp(String.raw`${e}|(?<$skip>\[\^?|\\?.)`, "gsu"), s = [
        !1
    ];
    let o = 0, a = "";
    for (const l of t.matchAll(r)){
        const { 0: c, groups: { $skip: u } } = l;
        if (!u && (!i || i === Vwe.DEFAULT == !o)) {
            n instanceof Function ? a += n(l, {
                context: o ? Vwe.CHAR_CLASS : Vwe.DEFAULT,
                negated: s[s.length - 1]
            }) : a += n;
            continue;
        }
        c[0] === "[" ? (o++, s.push(c[1] === "^")) : c === "]" && o && (o--, s.pop()), a += c;
    }
    return a;
}
function TAh(t, e, n, i) {
    Ila(t, e, n, i);
}
function UaS(t, e, n = 0, i) {
    if (!new RegExp(e, "su").test(t)) return null;
    const r = new RegExp(`${e}|(?<$skip>\\\\?.)`, "gsu");
    r.lastIndex = n;
    let s = 0, o;
    for(; o = r.exec(t);){
        const { 0: a, groups: { $skip: l } } = o;
        if (!l && (!i || i === Vwe.DEFAULT == !s)) return o;
        a === "[" ? s++ : a === "]" && s && s--, r.lastIndex == o.index && r.lastIndex++;
    }
    return null;
}
function H3r(t, e, n) {
    return !!UaS(t, e, 0, n);
}
function jaS(t, e) {
    const n = /\\?./gsu;
    n.lastIndex = e;
    let i = t.length, r = 0, s = 1, o;
    for(; o = n.exec(t);){
        const [a] = o;
        if (a === "[") r++;
        else if (r) a === "]" && r--;
        else if (a === "(") s++;
        else if (a === ")" && (s--, !s)) {
            i = o.index;
            break;
        }
    }
    return t.slice(e, i);
}
function $aS(t, e) {
    const n = e?.hiddenCaptures ?? [];
    let i = e?.captureTransfers ?? new Map;
    if (!/\(\?>/.test(t)) return {
        pattern: t,
        captureTransfers: i,
        hiddenCaptures: n
    };
    const r = "(?>", s = "(?:(?=(", o = [
        0
    ], a = [];
    let l = 0, c = 0, u = NaN, d;
    do {
        d = !1;
        let h = 0, p = 0, g = !1, f;
        for(xla.lastIndex = Number.isNaN(u) ? 0 : u + s.length; f = xla.exec(t);){
            const { 0: _, index: b, groups: { capturingStart: y, noncapturingStart: S } } = f;
            if (_ === "[") h++;
            else if (h) _ === "]" && h--;
            else if (_ === r && !g) u = b, g = !0;
            else if (g && S) p++;
            else if (y) g ? p++ : (l++, o.push(l + c));
            else if (_ === ")" && g) {
                if (!p) {
                    c++;
                    const k = l + c;
                    if (t = `${t.slice(0, u)}${s}${t.slice(u + r.length, b)}))<$$${k}>)${t.slice(b + 1)}`, d = !0, a.push(k), OaS(n, k), i.size) {
                        const C = new Map;
                        i.forEach((T, I)=>{
                            C.set(I >= k ? I + 1 : I, T.map((A)=>A >= k ? A + 1 : A));
                        }), i = C;
                    }
                    break;
                }
                p--;
            }
        }
    }while (d)
    return n.push(...a), t = Ila(t, String.raw`\\(?<backrefNum>[1-9]\d*)|<\$\$(?<wrappedBackrefNum>\d+)>`, ({ 0: h, groups: { backrefNum: p, wrappedBackrefNum: g } })=>{
        if (p) {
            const f = +p;
            if (f > o.length - 1) throw new Error(`Backref "${h}" greater than number of captures`);
            return `\\${o[f]}`;
        }
        return `\\${g}`;
    }, Vwe.DEFAULT), {
        pattern: t,
        captureTransfers: i,
        hiddenCaptures: n
    };
}
function HaS(t) {
    if (!new RegExp(`${Ala}\\+`).test(t)) return {
        pattern: t
    };
    const e = [];
    let n = null, i = null, r = "", s = 0, o;
    for(W3r.lastIndex = 0; o = W3r.exec(t);){
        const { 0: a, index: l, groups: { qBase: c, qMod: u, invalidQ: d } } = o;
        if (a === "[") s || (i = l), s++;
        else if (a === "]") s ? s-- : i = null;
        else if (!s) if (u === "+" && r && !r.startsWith("(")) {
            if (d) throw new Error(`Invalid quantifier "${a}"`);
            let h = -1;
            if (/^\{\d+\}$/.test(c)) t = FaS(t, l + c.length, u, "");
            else {
                if (r === ")" || r === "]") {
                    const p = r === ")" ? n : i;
                    if (p === null) throw new Error(`Invalid unmatched "${r}"`);
                    t = `${t.slice(0, p)}(?>${t.slice(p, l)}${c})${t.slice(l + a.length)}`;
                } else t = `${t.slice(0, l - r.length)}(?>${r}${c})${t.slice(l + a.length)}`;
                h += 4;
            }
            W3r.lastIndex += h;
        } else a[0] === "(" ? e.push(l) : a === ")" && (n = e.length ? e.pop() : null);
        r = a;
    }
    return {
        pattern: t
    };
}
function qaS(t, e) {
    const { hiddenCaptures: n, mode: i } = {
        hiddenCaptures: [],
        mode: "plugin",
        ...e
    };
    let r = e?.captureTransfers ?? new Map;
    if (!new RegExp(G3r, "su").test(t)) return {
        pattern: t,
        captureTransfers: r,
        hiddenCaptures: n
    };
    if (i === "plugin" && H3r(t, Kwe`\(\?\(DEFINE\)`, Vwe.DEFAULT)) throw new Error("DEFINE groups cannot be used with recursion");
    const s = [], o = H3r(t, Kwe`\\[1-9]`, Vwe.DEFAULT), a = new Map, l = [];
    let c = !1, u = 0, d = 0, h;
    for(f1t.lastIndex = 0; h = f1t.exec(t);){
        const { 0: p, groups: { captureName: g, rDepth: f, gRNameOrNum: _, gRDepth: b } } = h;
        if (p === "[") u++;
        else if (u) p === "]" && u--;
        else if (f) {
            if (xAh(f), c) throw new Error(q3r);
            if (o) throw new Error(`${i === "external" ? "Backrefs" : "Numbered backrefs"} cannot be used with global recursion`);
            const y = t.slice(0, h.index), S = t.slice(f1t.lastIndex);
            if (H3r(S, G3r, Vwe.DEFAULT)) throw new Error(q3r);
            const k = +f - 1;
            t = AAh(y, S, k, !1, n, s, d), r = PAh(r, y, k, s.length, 0, d);
            break;
        } else if (_) {
            xAh(b);
            let y = !1;
            for (const N of l)if (N.name === _ || N.num === +_) {
                if (y = !0, N.hasRecursedWithin) throw new Error(q3r);
                break;
            }
            if (!y) throw new Error(Kwe`Recursive \g cannot be used outside the referenced group "${i === "external" ? _ : Kwe`\g<${_}&R=${b}>`}"`);
            const S = a.get(_), k = jaS(t, S);
            if (o && H3r(k, Kwe`${_di}|\((?!\?)`, Vwe.DEFAULT)) throw new Error(`${i === "external" ? "Backrefs" : "Numbered backrefs"} cannot be used with recursion of capturing groups`);
            const C = t.slice(S, h.index), T = k.slice(C.length + p.length), I = s.length, A = +b - 1, P = AAh(C, T, A, !0, n, s, d);
            r = PAh(r, C, A, s.length - I, I, d);
            const M = t.slice(0, S), O = t.slice(S + k.length);
            t = `${M}${P}${O}`, f1t.lastIndex += P.length - p.length - C.length - T.length, l.forEach((N)=>N.hasRecursedWithin = !0), c = !0;
        } else if (g) d++, a.set(String(d), f1t.lastIndex), a.set(g, f1t.lastIndex), l.push({
            num: d,
            name: g
        });
        else if (p[0] === "(") {
            const y = p === "(";
            y && (d++, a.set(String(d), f1t.lastIndex)), l.push(y ? {
                num: d
            } : {});
        } else p === ")" && l.pop();
    }
    return n.push(...s), {
        pattern: t,
        captureTransfers: r,
        hiddenCaptures: n
    };
}
function xAh(t) {
    const e = `Max depth must be integer between 2 and 100; used ${t}`;
    if (!/^[1-9]\d*$/.test(t)) throw new Error(e);
    if (t = +t, t < 2 || t > 100) throw new Error(e);
}
function AAh(t, e, n, i, r, s, o) {
    const a = new Set;
    i && TAh(t + e, _di, ({ groups: { captureName: c } })=>{
        a.add(c);
    }, Vwe.DEFAULT);
    const l = [
        n,
        i ? a : null,
        r,
        s,
        o
    ];
    return `${t}${RAh(`(?:${t}`, "forward", ...l)}(?:)${RAh(`${e})`, "backward", ...l)}${e}`;
}
function RAh(t, e, n, i, r, s, o) {
    const l = (u)=>e === "forward" ? u + 2 : n - u + 2 - 1;
    let c = "";
    for(let u = 0; u < n; u++){
        const d = l(u);
        c += Ila(t, Kwe`${Rla}|\\k<(?<backref>[^>]+)>`, ({ 0: h, groups: { captureName: p, unnamed: g, backref: f } })=>{
            if (f && i && !i.has(f)) return h;
            const _ = `_$${d}`;
            if (g || p) {
                const b = o + s.length + 1;
                return s.push(b), zaS(r, b), g ? h : `(?<${p}${_}>`;
            }
            return Kwe`\k<${f}${_}>`;
        }, Vwe.DEFAULT);
    }
    return c;
}
function zaS(t, e) {
    for(let n = 0; n < t.length; n++)t[n] >= e && t[n]++;
}
function PAh(t, e, n, i, r, s) {
    if (t.size && i) {
        let o = 0;
        TAh(e, Rla, ()=>o++, Vwe.DEFAULT);
        const a = s - o + r, l = new Map;
        return t.forEach((c, u)=>{
            const d = (i - o * n) / n, h = o * n, p = u > a + o ? u + i : u, g = [];
            for (const f of c)if (f <= a) g.push(f);
            else if (f > a + o + d) g.push(f + i);
            else if (f <= a + o) for(let _ = 0; _ <= n; _++)g.push(f + o * _);
            else for(let _ = 0; _ <= n; _++)g.push(f + h + d * _);
            l.set(p, g);
        }), l;
    }
    return t;
}
export function z3r(t, { enable: e, disable: n }) {
    return {
        dotAll: !n?.dotAll && !!(e?.dotAll || t.dotAll),
        ignoreCase: !n?.ignoreCase && !!(e?.ignoreCase || t.ignoreCase)
    };
}
export function bdi(t, e, n) {
    return t.has(e) || t.set(e, n), t.get(e);
}
function Pla(t, e) {
    return jla[t] >= jla[e];
}
function KaS(t, e) {
    if (t == null) throw new Error(e ?? "Value expected");
    return t;
}
function DAh(t = {}) {
    if ({}.toString.call(t) !== "[object Object]") throw new Error("Unexpected options");
    if (t.target !== void 0 && !ZAh[t.target]) throw new Error(`Unexpected target "${t.target}"`);
    const e = {
        accuracy: "default",
        avoidSubclass: !1,
        flags: "",
        global: !1,
        hasIndices: !1,
        lazyCompileLength: 1 / 0,
        target: "auto",
        verbose: !1,
        ...t,
        rules: {
            allowOrphanBackrefs: !1,
            asciiWordBoundaries: !1,
            captureGroup: !1,
            recursionLimit: 20,
            singleline: !1,
            ...t.rules
        }
    };
    return e.target === "auto" && (e.target = wWe.flagGroups ? "ES2025" : wWe.unicodeSets ? "ES2024" : "ES2018"), e;
}
export function NAh(t) {
    if (JAh.has(t)) return [
        t
    ];
    const e = new Set, n = t.toLowerCase(), i = n.toUpperCase(), r = nRh.get(n), s = eRh.get(n), o = tRh.get(n);
    return [
        ...i
    ].length === 1 && e.add(i), o && e.add(o), r && e.add(r), e.add(n), s && e.add(s), [
        ...e
    ];
}
function YaS(t, e) {
    const n = [];
    for(let i = t; i <= e; i++)n.push(i);
    return n;
}
export function v1t(t) {
    const e = Pz(t);
    return [
        e.toLowerCase(),
        e
    ];
}
export function Mla(t, e) {
    return YaS(t, e).map((n)=>v1t(n));
}
function XaS(t, e) {
    const n = {
        accuracy: "default",
        asciiWordBoundaries: !1,
        avoidSubclass: !1,
        bestEffortTarget: "ES2025",
        ...e
    };
    LAh(t);
    const i = {
        accuracy: n.accuracy,
        asciiWordBoundaries: n.asciiWordBoundaries,
        avoidSubclass: n.avoidSubclass,
        flagDirectivesByAlt: new Map,
        jsGroupNameMap: new Map,
        minTargetEs2024: Pla(n.bestEffortTarget, "ES2024"),
        passedLookbehind: !1,
        strategy: null,
        subroutineRefMap: new Map,
        supportedGNodes: new Set,
        digitIsAscii: t.flags.digitIsAscii,
        spaceIsAscii: t.flags.spaceIsAscii,
        wordIsAscii: t.flags.wordIsAscii
    };
    vdi(t, rRh, i);
    const r = {
        dotAll: t.flags.dotAll,
        ignoreCase: t.flags.ignoreCase
    }, s = {
        currentFlags: r,
        prevFlags: null,
        globalFlags: r,
        groupOriginByCopy: new Map,
        groupsByName: new Map,
        multiplexCapturesToLeftByRef: new Map,
        openRefs: new Map,
        reffedNodesByReferencer: new Map,
        subroutineRefMap: i.subroutineRefMap
    };
    vdi(t, sRh, s);
    const o = {
        groupsByName: s.groupsByName,
        highestOrphanBackref: 0,
        numCapturesToLeft: 0,
        reffedNodesByReferencer: s.reffedNodesByReferencer
    };
    return vdi(t, oRh, o), t._originMap = s.groupOriginByCopy, t._strategy = i.strategy, t;
}
function LAh(t) {
    vdi(t, {
        "*" ({ node: e, parent: n }) {
            e.parent = n;
        }
    });
}
export function ZaS(t, e) {
    return t.dotAll === e.dotAll && t.ignoreCase === e.ignoreCase;
}
export function QaS(t, e) {
    let n = e;
    do {
        if (n.type === "Regex") return !1;
        if (n.type === "Alternative") continue;
        if (n === t) return !1;
        const i = UAh(n.parent);
        for (const r of i){
            if (r === n) break;
            if (r === t || $Ah(r, t)) return !0;
        }
    }while (n = n.parent)
    throw new Error("Unexpected path");
}
export function OAh(t, e, n, i) {
    const r = Array.isArray(t) ? [] : {};
    for (const [s, o] of Object.entries(t))s === "parent" ? r.parent = Array.isArray(n) ? i : n : o && typeof o == "object" ? r[s] = OAh(o, e, r, n) : (s === "type" && o === "CapturingGroup" && e.set(r, e.get(t) ?? t), r[s] = o);
    return r;
}
export function FAh(t) {
    const e = _Ah(t);
    return e.isRecursive = !0, e;
}
export function JaS(t, e) {
    const n = [];
    for(; t = t.parent;)(!e || e(t)) && n.push(t);
    return n;
}
export function Dla(t, e) {
    if (e.has(t)) return e.get(t);
    const n = `$${e.size}_${t.replace(/^[^$_\p{IDS}]|[^$\u200C\u200D\p{IDC}]/ug, "_")}`;
    return e.set(t, n), n;
}
export function BAh(t) {
    const e = [
        "dotAll",
        "ignoreCase"
    ], n = {
        enable: {},
        disable: {}
    };
    return t.forEach(({ flags: i })=>{
        e.forEach((r)=>{
            i.enable?.[r] && (delete n.disable[r], n.enable[r] = !0), i.disable?.[r] && (n.disable[r] = !0);
        });
    }), Object.keys(n.enable).length || delete n.enable, Object.keys(n.disable).length || delete n.disable, n.enable || n.disable ? n : null;
}
export function elS({ dotAll: t, ignoreCase: e }) {
    const n = {};
    return (t || e) && (n.enable = {}, t && (n.enable.dotAll = !0), e && (n.enable.ignoreCase = !0)), (!t || !e) && (n.disable = {}, !t && (n.disable.dotAll = !0), !e && (n.disable.ignoreCase = !0)), n;
}
function UAh(t) {
    if (!t) throw new Error("Node expected");
    const { body: e } = t;
    return Array.isArray(e) ? e : e ? [
        e
    ] : null;
}
export function jAh(t) {
    const e = t.find((n)=>n.kind === "search_start" || ilS(n, {
            negate: !1
        }) || !tlS(n));
    if (!e) return null;
    if (e.kind === "search_start") return e;
    if (e.type === "LookaroundAssertion") return e.body[0].body[0];
    if (e.type === "CapturingGroup" || e.type === "Group") {
        const n = [];
        for (const i of e.body){
            const r = jAh(i.body);
            if (!r) return null;
            Array.isArray(r) ? n.push(...r) : n.push(r);
        }
        return n;
    }
    return null;
}
function $Ah(t, e) {
    const n = UAh(t) ?? [];
    for (const i of n)if (i === e || $Ah(i, e)) return !0;
    return !1;
}
function tlS({ type: t }) {
    return t === "Assertion" || t === "Directive" || t === "LookaroundAssertion";
}
export function nlS(t) {
    const e = [
        "Character",
        "CharacterClass",
        "CharacterSet"
    ];
    return e.includes(t.type) || t.type === "Quantifier" && t.min && e.includes(t.body.type);
}
function ilS(t, e) {
    const n = {
        negate: null,
        ...e
    };
    return t.type === "LookaroundAssertion" && (n.negate === null || t.negate === n.negate) && t.body.length === 1 && hAh(t.body[0], {
        type: "Assertion",
        kind: "search_start"
    });
}
export function Nla(t) {
    return /^[$_\p{IDS}][$\u200C\u200D\p{IDC}]*$/u.test(t);
}
export function Pit(t, e) {
    const i = gAh(t, {
        ...e,
        unicodePropertyMap: Y3r
    }).body;
    return i.length > 1 || i[0].body.length > 1 ? vFe({
        body: i
    }) : i[0].body[0];
}
export function Lla(t, e) {
    return t.negate = e, t;
}
export function _1t(t, e) {
    return t.parent = e, t;
}
export function MW(t, e) {
    return LAh(t), t.parent = e, t;
}
function rlS(t, e) {
    const n = DAh(e), i = Pla(n.target, "ES2024"), r = Pla(n.target, "ES2025"), s = n.rules.recursionLimit;
    if (!Number.isInteger(s) || s < 2 || s > 20) throw new Error("Invalid recursionLimit; use 2-20");
    let o = null, a = null;
    if (!r) {
        const p = [
            t.flags.ignoreCase
        ];
        vdi(t, aRh, {
            getCurrentModI: ()=>p.at(-1),
            popModI () {
                p.pop();
            },
            pushModI (g) {
                p.push(g);
            },
            setHasCasedChar () {
                p.at(-1) ? o = !0 : a = !0;
            }
        });
    }
    const l = {
        dotAll: t.flags.dotAll,
        ignoreCase: !!((t.flags.ignoreCase || o) && !a)
    };
    let c = t;
    const u = {
        accuracy: n.accuracy,
        appliedGlobalFlags: l,
        captureMap: new Map,
        currentFlags: {
            dotAll: t.flags.dotAll,
            ignoreCase: t.flags.ignoreCase
        },
        inCharClass: !1,
        lastNode: c,
        originMap: t._originMap,
        recursionLimit: s,
        useAppliedIgnoreCase: !!(!r && o && a),
        useFlagMods: r,
        useFlagV: i,
        verbose: n.verbose
    };
    function d(p) {
        return u.lastNode = c, c = p, KaS(lRh[p.type], `Unexpected node type "${p.type}"`)(p, u, d);
    }
    const h = {
        pattern: t.body.map(d).join("|"),
        flags: d(t.flags),
        options: {
            ...t.options
        }
    };
    return i || (delete h.options.force.v, h.options.disable.v = !0, h.options.unicodeSetsPlugin = null), h._captureTransfers = new Map, h._hiddenCaptures = [], u.captureMap.forEach((p, g)=>{
        p.hidden && h._hiddenCaptures.push(g), p.transferTo && bdi(h._captureTransfers, p.transferTo, []).push(g);
    }), h;
}
export function Ola(t) {
    return hRh.test(t);
}
export function HAh(t, e) {
    const n = !!e?.firstOnly, i = t.min.value, r = t.max.value, s = [];
    if (i < 65 && (r === 65535 || r >= 131071) || i === 65536 && r >= 131071) return s;
    for(let o = i; o <= r; o++){
        const a = Pz(o);
        if (!Ola(a)) continue;
        const l = NAh(a).filter((c)=>{
            const u = c.codePointAt(0);
            return u < i || u > r;
        });
        if (l.length && (s.push(...l), n)) break;
    }
    return s;
}
export function Lyn(t, { escDigit: e, inCharClass: n, useFlagV: i }) {
    if (Hla.has(t)) return Hla.get(t);
    if (t < 32 || t > 126 && t < 160 || t > 262143 || e && llS(t)) return t > 255 ? `\\u{${t.toString(16).toUpperCase()}}` : `\\x${t.toString(16).toUpperCase().padStart(2, "0")}`;
    const r = n ? i ? dRh : uRh : cRh, s = Pz(t);
    return (r.has(s) ? "\\" : "") + s;
}
export function slS(t) {
    const e = t.map((r)=>r.codePointAt(0)).sort((r, s)=>r - s), n = [];
    let i = null;
    for(let r = 0; r < e.length; r++)e[r + 1] === e[r] + 1 ? i ?? (i = e[r]) : i === null ? n.push(e[r]) : (n.push([
        i,
        e[r]
    ]), i = null);
    return n;
}
export function olS(t, e, n) {
    if (t) return ">";
    let i = "";
    if (e && n) {
        const { enable: r, disable: s } = e;
        i = (r?.ignoreCase ? "i" : "") + (r?.dotAll ? "s" : "") + (s ? "-" : "") + (s?.ignoreCase ? "i" : "") + (s?.dotAll ? "s" : "");
    }
    return `${i}:`;
}
export function alS({ kind: t, max: e, min: n }) {
    let i;
    return !n && e === 1 ? i = "?" : !n && e === 1 / 0 ? i = "*" : n === 1 && e === 1 / 0 ? i = "+" : n === e ? i = `{${n}}` : i = `{${n},${e === 1 / 0 ? "" : e}}`, i + {
        greedy: "",
        lazy: "?",
        possessive: "+"
    }[t];
}
export function WAh({ type: t }) {
    return t === "CapturingGroup" || t === "Group" || t === "LookaroundAssertion";
}
function llS(t) {
    return t > 47 && t < 58;
}
export function GAh({ type: t, value: e }) {
    return t === "Character" && e === 45;
}
export function clS(t, e, n, i) {
    if (t.index += e, t.input = n, i) {
        const r = t.indices;
        for(let o = 0; o < r.length; o++){
            const a = r[o];
            a && (r[o] = [
                a[0] + e,
                a[1] + e
            ]);
        }
        const s = r.groups;
        s && Object.keys(s).forEach((o)=>{
            const a = s[o];
            a && (s[o] = [
                a[0] + e,
                a[1] + e
            ]);
        });
    }
}
export function ulS(t, e) {
    const n = new Map;
    for (const i of t)n.set(i, {
        hidden: !0
    });
    for (const [i, r] of e)for (const s of r)bdi(n, s, {}).transferTo = i;
    return n;
}
export function dlS(t) {
    const e = /(?<capture>\((?:\?<(?![=!])(?<name>[^>]+)>|(?!\?)))|\\?./gsu, n = new Map;
    let i = 0, r = 0, s;
    for(; s = e.exec(t);){
        const { 0: o, groups: { capture: a, name: l } } = s;
        o === "[" ? i++ : i ? o === "]" && i-- : a && (r++, l && n.set(r, l));
    }
    return n;
}
function hlS(t, e) {
    const n = plS(t, e);
    return n.options ? new pRh(n.pattern, n.flags, n.options) : new RegExp(n.pattern, n.flags);
}
function plS(t, e) {
    const n = DAh(e), i = gAh(t, {
        flags: n.flags,
        normalizeUnknownPropertyNames: !0,
        rules: {
            captureGroup: n.rules.captureGroup,
            singleline: n.rules.singleline
        },
        skipBackrefValidation: n.rules.allowOrphanBackrefs,
        unicodePropertyMap: Y3r
    }), r = XaS(i, {
        accuracy: n.accuracy,
        asciiWordBoundaries: n.rules.asciiWordBoundaries,
        avoidSubclass: n.avoidSubclass,
        bestEffortTarget: n.target
    }), s = rlS(r, n), o = qaS(s.pattern, {
        captureTransfers: s._captureTransfers,
        hiddenCaptures: s._hiddenCaptures,
        mode: "external"
    }), a = HaS(o.pattern), l = $aS(a.pattern, {
        captureTransfers: o.captureTransfers,
        hiddenCaptures: o.hiddenCaptures
    }), c = {
        pattern: l.pattern,
        flags: `${n.hasIndices ? "d" : ""}${n.global ? "g" : ""}${s.flags}${s.options.disable.v ? "u" : "v"}`
    };
    if (n.avoidSubclass) {
        if (n.lazyCompileLength !== 1 / 0) throw new Error("Lazy compilation requires subclass");
    } else {
        const u = l.hiddenCaptures.sort((g, f)=>g - f), d = Array.from(l.captureTransfers), h = r._strategy, p = c.pattern.length >= n.lazyCompileLength;
        (u.length || d.length || h || p) && (c.options = {
            ...u.length && {
                hiddenCaptures: u
            },
            ...d.length && {
                transfers: d
            },
            ...h && {
                strategy: h
            },
            ...p && {
                lazyCompile: p
            }
        });
    }
    return c;
}
function glS(t, e) {
    return hlS(t, {
        global: !0,
        hasIndices: !0,
        lazyCompileLength: 3e3,
        rules: {
            allowOrphanBackrefs: !0,
            asciiWordBoundaries: !0,
            captureGroup: !0,
            recursionLimit: 5,
            singleline: !0
        },
        ...e
    });
}
function flS(t = {}) {
    const e = Object.assign({
        target: "auto",
        cache: new Map
    }, t);
    return e.regexConstructor || (e.regexConstructor = (n)=>glS(n, {
            target: e.target
        })), {
        createScanner (n) {
            return new iAh(n, e);
        },
        createString (n) {
            return {
                content: n
            };
        }
    };
}
function mRh() {
    return X3r || (X3r = HoS({
        themes: [
            Paa
        ],
        langs: [],
        engine: flS()
    })), X3r;
}
function gRh(t, e) {
    const n = xit(e);
    if (n === void 0 || t.getLoadedLanguages().includes(n)) return !0;
    const i = l3r(n);
    return i === void 0 ? (eUt(n), !1) : (t.loadLanguageSync(i), !0);
}
function _lS() {
    return typeof navigator > "u" ? !1 : navigator.scheduling?.isInputPending?.() === !0;
}
function blS(t) {
    const e = globalThis;
    let n = !1, i, r;
    const s = ()=>{
        if (!n) {
            if (_lS()) {
                o();
                return;
            }
            t();
        }
    }, o = ()=>{
        e.requestIdleCallback ? i = e.requestIdleCallback(s, {
            timeout: fRh
        }) : r = setTimeout(s, 0);
    };
    return o(), ()=>{
        n = !0, i !== void 0 && e.cancelIdleCallback?.(i), r !== void 0 && clearTimeout(r);
    };
}
export function cUt(t, e) {
    const n = mRh();
    if (!gRh(n, e)) return Tit(t);
    const i = LiS(n, t, e);
    return Byn.add(xit(e) ?? e), i;
}
export function ylS(t) {
    const e = xit(t);
    return e === void 0 || Byn.has(e);
}
export function SlS(t, e, n = blS) {
    if (n === null) return Z3r;
    const i = xit(e) ?? e;
    if (Byn.has(i)) return Z3r;
    let r = uUt.get(i);
    if (r === void 0) {
        const a = {
            holders: 0,
            cancelRun: Z3r
        };
        uUt.set(i, a), a.cancelRun = n(()=>{
            uUt.get(i) === a && uUt.delete(i), Byn.has(i) || cUt(t, e);
        }), r = a;
    }
    const s = r;
    s.holders += 1;
    let o = !1;
    return ()=>{
        o || (o = !0, s.holders -= 1, !(s.holders > 0 || uUt.get(i) !== s) && (uUt.delete(i), s.cancelRun()));
    };
}
export function klS(t, e, n) {
    const i = mRh();
    if (!gRh(i, e)) return;
    const r = OiS(i, t, e, n);
    return Byn.add(xit(e) ?? e), r;
}
export function wlS(t) {
    return t.split(/\r?\n/);
}
export function ClS(t, e, n) {
    const i = t.nextLineIndex;
    let r = i, s = 0;
    for(; r < e;){
        const o = t.lines[r]?.length ?? 0, a = r === i ? o : o + 1;
        if (r > i && s + a > n) break;
        s += a, r++;
    }
    return r;
}
export function vRh(t, e) {
    return `${t}\0${e}`;
}
function SRh(t, e) {
    return `${Paa.name}\0${xit(e) ?? e}\0${t}`;
}
export function kRh(t, e) {
    const n = SRh(t, e), i = bFe.get(n);
    if (i !== void 0) return bFe.delete(n), bFe.set(n, i), i.tokens;
}
export function TlS(t, e, n) {
    const i = t.length;
    if (i > Gla) return;
    const r = SRh(t, e), s = bFe.get(r);
    for(s !== void 0 && (bFe.delete(r), Uyn -= s.chars), bFe.set(r, {
        tokens: n,
        chars: i
    }), Uyn += i; bFe.size > wRh || Uyn > Gla;){
        const o = bFe.entries().next().value;
        if (o === void 0) break;
        bFe.delete(o[0]), Uyn -= o[1].chars;
    }
}
export function ElS() {
    bFe.clear(), Uyn = 0;
}
function IlS() {
    if (zla) return Cdi;
    zla = !0;
    try {
        const t = globalThis.trustedTypes;
        t?.createPolicy && (Cdi = t.createPolicy("shikiWorkerFactory", {
            createScriptURL: (e)=>e
        }));
    } catch  {
        Cdi = null;
    }
    return Cdi;
}
function xlS() {
    if (wdi !== null) return wdi;
    if (!dUt || dUt === qla) return null;
    try {
        const t = new Blob([
            dUt
        ], {
            type: "application/javascript"
        });
        return wdi = URL.createObjectURL(t), wdi;
    } catch (t) {
        return console.error("[@anysphere/ui] Failed to create Shiki worker blob URL:", t), null;
    }
}
export function ERh() {
    const t = xlS();
    return t ? ()=>{
        try {
            const e = IlS(), n = e ? e.createScriptURL(t) : t;
            return new Worker(n, {
                type: "module"
            });
        } catch (e) {
            throw new Error(`[@anysphere/ui] Failed to create Shiki worker: ${e instanceof Error ? e.message : String(e)}`);
        }
    } : null;
}
export function kdi() {
    return !!dUt && dUt !== qla;
}
export function IRh() {
    return Vla === void 0 && (Vla = ERh()), Vla;
}
var Vla;
export function eNr(t) {
    return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
export function AlS(t) {
    return `<span>${eNr(t)}</span>`;
}
export function RlS(t) {
    const e = t.match(/<code[^>]*>([\s\S]*)<\/code>/);
    if (!e) return t;
    const n = e[1], i = n.match(/<span class="line"[^>]*>/);
    if (!i) return n;
    const r = i.index + i[0].length, s = n.lastIndexOf("</span>");
    return s === -1 || s <= r ? n : n.slice(r, s);
}
export function ARh(t) {
    return kdi() ? t.length > DRh ? {
        kind: "unsupported",
        reason: "code-over-limit"
    } : NRh : {
        kind: "unsupported",
        reason: "worker-unavailable"
    };
}
export function hUt() {
    return pUt || (pUt = new Yla), pUt;
}
export function PlS() {
    pUt && (pUt.dispose(), pUt = null);
}
import { jsx as DlS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as BRh } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as NlS, useContext as LlS, useSyncExternalStore as OlS } from "./react-runtime/react/esm-index-production.js";
export function URh(t) {
    const e = BRh(3), { tokenizer: n, children: i } = t;
    let r;
    return e[0] !== i || e[1] !== n ? (r = DlS(Zla, {
        value: n,
        children: i
    }), e[0] = i, e[1] = n, e[2] = r) : r = e[2], r;
}
export function Xla() {
    return LlS(Zla);
}
export function jRh(t, e, n) {
    const i = BRh(16), r = n === void 0 ? !0 : n;
    let s;
    i[0] !== r || i[1] !== e || i[2] !== t ? (s = (p)=>{
        if (!r) return FlS;
        const g = t.onDidLoadLanguage(p);
        return t.loadLanguage(e), g;
    }, i[0] = r, i[1] = e, i[2] = t, i[3] = s) : s = i[3];
    const o = s;
    let a;
    i[4] !== r || i[5] !== e || i[6] !== t ? (a = ()=>r && t.languageStatus(e) !== "unloaded", i[4] = r, i[5] = e, i[6] = t, i[7] = a) : a = i[7];
    const l = a;
    let c;
    i[8] !== r || i[9] !== e || i[10] !== t ? (c = ()=>r && t.languageStatus(e) === "no-grammar", i[8] = r, i[9] = e, i[10] = t, i[11] = c) : c = i[11];
    const d = OlS(o, l, c);
    let h;
    return i[12] !== e || i[13] !== d || i[14] !== t ? (h = d ? (p)=>t.tokenizeSync(p, e) : Tit, i[12] = e, i[13] = d, i[14] = t, i[15] = h) : h = i[15], h;
}
function FlS() {}
export function BlS({ tokenization: t, sync: e, asyncDebounceMs: n }) {
    return t || (e === !1 ? {
        kind: "worker",
        debounceMs: n ?? 0,
        onRefusal: "plain"
    } : Mit);
}
export function nNr(t, e) {
    return t !== null && t.code === e.code && t.language === e.language;
}
export function UlS({ requested: t, support: e, rejected: n, coldRequest: i, tokenizerWarm: r, cached: s, request: o }) {
    if (t.kind === "inline") return Mit;
    if (t.kind === "inline-when-warm") {
        const a = t.scheduleWarmup === null;
        return s !== void 0 ? {
            kind: "cached",
            tokens: s
        } : eca(n, o) ? Mit : nNr(i, o) ? Jla : e.kind === "unsupported" || r && !a ? Mit : Jla;
    }
    return e.kind === "unsupported" && e.reason === "worker-unavailable" ? Mit : t.onRefusal === "plain" ? t : e.kind === "unsupported" || eca(n, o) ? Mit : t;
}
function $Rh(t, e, n) {
    return Math.min(Math.max(t, e), n);
}
function $lS({ lineCount: t, linePitchPx: e, blockTopPx: n, viewportTopPx: i, viewportBottomPx: r }) {
    if (!(e > 0) || t <= 0) return {
        start: 0,
        end: Math.max(t, 0)
    };
    const s = Math.floor((i - n) / e), o = Math.ceil((r - n) / e), a = WRh, l = $Rh(Math.floor((s - tca) / a) * a, 0, t), c = $Rh(Math.ceil((o + tca) / a) * a, 0, t);
    return l < c ? {
        start: l,
        end: c
    } : Tdi;
}
function HlS(t, e) {
    return t.start === e.start && t.end === e.end;
}
import { flushSync as WlS } from "./react-runtime/react-dom/esm-index-production.js";
function GlS(t) {
    if (typeof document < "u" && document.visibilityState === "hidden" || typeof requestAnimationFrame != "function") {
        const i = setTimeout(t, 0);
        return ()=>clearTimeout(i);
    }
    const n = requestAnimationFrame(()=>t());
    return ()=>cancelAnimationFrame(n);
}
export function qRh(t) {
    let e = !1, n = ()=>{};
    const i = ()=>{
        n = GlS(()=>{
            e || t() && i();
        });
    };
    return i(), ()=>{
        e = !0, n();
    };
}
function qlS(t) {
    let e = zRh;
    const n = [];
    for(; Dit.length > 0;){
        const r = Dit[0];
        if (n.length > 0 && r.lines > e) break;
        Dit.shift(), e -= r.lines, n.push(r);
    }
    WlS(()=>{
        for (const r of n)r.apply();
    });
    const i = Dit.length > 0;
    return i || (t.drained = !0, y1t === t && (y1t = null)), i;
}
function zlS(t) {
    const e = {
        cancel: ()=>{},
        drained: !1
    };
    y1t = e;
    const n = t(()=>qlS(e));
    e.drained || (e.cancel = n);
}
export function VlS(t, e = qRh) {
    return Dit.push(t), y1t === null && zlS(e), ()=>{
        const n = Dit.indexOf(t);
        n < 0 || (Dit.splice(n, 1), Dit.length === 0 && y1t !== null && (y1t.cancel(), y1t = null));
    };
}
import { c as YlS } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as XlS, useLayoutEffect as ZlS } from "./react-runtime/react/esm-index-production.js";
import { flushSync as QlS } from "./react-runtime/react-dom/esm-index-production.js";
export function JlS(t) {
    const e = YlS(11), { contentRef: n, viewport: i, lineCount: r, enabled: s } = t, [o, a] = XlS(Tdi);
    let l, c;
    if (e[0] !== n || e[1] !== s || e[2] !== r || e[3] !== i ? (l = ()=>{
        if (!s || i == null) return;
        const p = n.current;
        if (p == null) return;
        const g = ()=>{
            const y = p.getBoundingClientRect(), S = i.getBoundingClientRect();
            return $lS({
                lineCount: r,
                linePitchPx: y.height / r,
                blockTopPx: y.top,
                viewportTopPx: S.top,
                viewportBottomPx: S.bottom
            });
        }, f = (y)=>{
            a((S)=>HlS(S, y) ? S : y);
        };
        f(g());
        const _ = ()=>{
            QlS(()=>f(g()));
        };
        i.addEventListener("scroll", _, {
            passive: !0
        });
        const b = typeof ResizeObserver == "function" ? new ResizeObserver(_) : null;
        b?.observe(i);
        for (const y of i.children)b?.observe(y);
        return ()=>{
            i.removeEventListener("scroll", _), b?.disconnect();
        };
    }, c = [
        n,
        s,
        i,
        r
    ], e[0] = n, e[1] = s, e[2] = r, e[3] = i, e[4] = l, e[5] = c) : (l = e[4], c = e[5]), ZlS(l, c), !s) {
        let p;
        return e[6] !== r ? (p = {
            start: 0,
            end: r
        }, e[6] = r, e[7] = p) : p = e[7], p;
    }
    if (i == null) return Tdi;
    const u = Math.min(o.start, r), d = Math.min(o.end, r);
    let h;
    return e[8] !== d || e[9] !== u ? (h = u < d ? {
        start: u,
        end: d
    } : Tdi, e[8] = d, e[9] = u, e[10] = h) : h = e[10], h;
}
export { XTh };

export var KTh = {};
Object.defineProperty(KTh, "default", {
    enumerable: true,
    get: ()=>XTh
});

import { TRh } from "./_anysphere-ui-esm_shiki-worker.js";
import { Eit } from "./code-token.js";
import { i0h } from "./css-variables-theme.js";
import { vlS } from "./engine-compile.js";
import { xRh } from "./html-utils.js";
import { bIh } from "./index_123.js";
import { oxh, sxh } from "./index_124.js";
import { WoS } from "./index_131.js";
import { Daa } from "./shiki-core.js";
import { tUt } from "./shiki-grammars.js";
import { E } from "./tslib.es6.js";
var hxh, pxh, A_e, lla, cla, ula, mxh, gxh, xyn, dla, pdi;
var X3r, Byn, uUt, fRh, Z3r;
var wRh, Gla, bFe, Uyn;
var qla, wdi, Cdi, zla;
var RRh, PRh, Ahe, MRh, DRh, NRh, LRh, Yla, pUt;
var zRh, Dit, y1t;
export { A_e, Ahe, Byn, Cdi, DRh, Dit, Gla, LRh, MRh, NRh, PRh, RRh, Uyn, X3r, Yla, Z3r, bFe, cla, dla, fRh, gxh, hxh, lla, mxh, pUt, pdi, pxh, qla, uUt, ula, wRh, wdi, xyn, y1t, zRh, zla };
var __wakaru_TsS_initialized = false;
export function TsS() {
if (__wakaru_TsS_initialized) return;
__wakaru_TsS_initialized = true;
E(), bIh(), oxh(), hxh = Object.defineProperty, pxh = (t, e, n)=>e in t ? hxh(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, A_e = (t, e, n)=>pxh(t, typeof e != "symbol" ? e + "" : e, n), lla = {
    light: "#333333",
    dark: "#bbbbbb"
}, cla = {
    light: "#fffffe",
    dark: "#1e1e1e"
}, ula = "__shiki_resolved", mxh = class extends sxh {
    constructor(t, e, n, i = {}){
        super(t), A_e(this, "_resolvedThemes", new Map), A_e(this, "_resolvedGrammars", new Map), A_e(this, "_langMap", new Map), A_e(this, "_langGraph", new Map), A_e(this, "_textmateThemeCache", new WeakMap), A_e(this, "_loadedThemesCache", null), A_e(this, "_loadedLanguagesCache", null), this._resolver = t, this._themes = e, this._langs = n, this._alias = i, this._themes.map((r)=>this.loadTheme(r)), this.loadLanguages(this._langs);
    }
    getTheme(t) {
        return typeof t == "string" ? this._resolvedThemes.get(t) : this.loadTheme(t);
    }
    loadTheme(t) {
        const e = ola(t);
        return e.name && (this._resolvedThemes.set(e.name, e), this._loadedThemesCache = null), e;
    }
    getLoadedThemes() {
        return this._loadedThemesCache || (this._loadedThemesCache = [
            ...this._resolvedThemes.keys()
        ]), this._loadedThemesCache;
    }
    setTheme(t) {
        let e = this._textmateThemeCache.get(t);
        e || (e = udi.createFromRawTheme(t), this._textmateThemeCache.set(t, e)), this._syncRegistry.setTheme(e);
    }
    getGrammar(t) {
        return t = lxh(t, this._alias), this._resolvedGrammars.get(t);
    }
    loadLanguage(t) {
        if (this.getGrammar(t.name)) return;
        const e = new Set([
            ...this._langMap.values()
        ].filter((r)=>r.embeddedLangsLazy?.includes(t.name)));
        this._resolver.addLanguage(t);
        const n = {
            balancedBracketSelectors: t.balancedBracketSelectors || [
                "*"
            ],
            unbalancedBracketSelectors: t.unbalancedBracketSelectors || []
        };
        this._syncRegistry._rawGrammars.set(t.scopeName, t);
        const i = this.loadGrammarWithConfiguration(t.scopeName, 1, n);
        if (i.name = t.name, this._resolvedGrammars.set(t.name, i), t.aliases && t.aliases.forEach((r)=>{
            this._alias[r] = t.name;
        }), this._loadedLanguagesCache = null, e.size) for (const r of e)this._resolvedGrammars.delete(r.name), this._loadedLanguagesCache = null, this._syncRegistry?._injectionGrammars?.delete(r.scopeName), this._syncRegistry?._grammars?.delete(r.scopeName), this.loadLanguage(this._langMap.get(r.name));
    }
    dispose() {
        super.dispose(), this._resolvedThemes.clear(), this._resolvedGrammars.clear(), this._langMap.clear(), this._langGraph.clear(), this._loadedThemesCache = null;
    }
    loadLanguages(t) {
        for (const i of t)this.resolveEmbeddedLanguages(i);
        const e = Array.from(this._langGraph.entries()), n = e.filter(([i, r])=>!r);
        if (n.length) {
            const i = e.filter(([r, s])=>s ? (s.embeddedLanguages || s.embeddedLangs)?.some((o)=>n.map(([a])=>a).includes(o)) : !1).filter((r)=>!n.includes(r));
            throw new R4(`Missing languages ${n.map(([r])=>`\`${r}\``).join(", ")}, required by ${i.map(([r])=>`\`${r}\``).join(", ")}`);
        }
        for (const [i, r] of e)this._resolver.addLanguage(r);
        for (const [i, r] of e)this.loadLanguage(r);
    }
    getLoadedLanguages() {
        return this._loadedLanguagesCache || (this._loadedLanguagesCache = [
            ...new Set([
                ...this._resolvedGrammars.keys(),
                ...Object.keys(this._alias)
            ])
        ]), this._loadedLanguagesCache;
    }
    resolveEmbeddedLanguages(t) {
        this._langMap.set(t.name, t), this._langGraph.set(t.name, t);
        const e = t.embeddedLanguages ?? t.embeddedLangs;
        if (e) for (const n of e)this._langGraph.set(n, this._langMap.get(n));
    }
}, gxh = class {
    constructor(t, e){
        A_e(this, "_langs", new Map), A_e(this, "_scopeToLang", new Map), A_e(this, "_injections", new Map), A_e(this, "_onigLib"), this._onigLib = {
            createOnigScanner: (n)=>t.createScanner(n),
            createOnigString: (n)=>t.createString(n)
        }, e.forEach((n)=>this.addLanguage(n));
    }
    get onigLib() {
        return this._onigLib;
    }
    getLangRegistration(t) {
        return this._langs.get(t);
    }
    loadGrammar(t) {
        return this._scopeToLang.get(t);
    }
    addLanguage(t) {
        this._langs.set(t.name, t), t.aliases && t.aliases.forEach((e)=>{
            this._langs.set(e, t);
        }), this._scopeToLang.set(t.scopeName, t), t.injectTo && t.injectTo.forEach((e)=>{
            this._injections.get(e) || this._injections.set(e, []), this._injections.get(e).push(t.scopeName);
        });
    }
    getInjections(t) {
        const e = t.split(".");
        let n = [];
        for(let i = 1; i <= e.length; i++){
            const r = e.slice(0, i).join(".");
            n = [
                ...n,
                ...this._injections.get(r) || []
            ];
        }
        return n;
    }
}, xyn = 0, dla = new WeakMap, pdi = class v2b {
    constructor(...e){
        if (A_e(this, "_stacks", {}), A_e(this, "lang"), e.length === 2) {
            const [n, i] = e;
            this.lang = i, this._stacks = n;
        } else {
            const [n, i, r] = e;
            this.lang = i, this._stacks = {
                [r]: n
            };
        }
    }
    get themes() {
        return Object.keys(this._stacks);
    }
    get theme() {
        return this.themes[0];
    }
    get _stack() {
        return this._stacks[this.theme];
    }
    static initial(e, n) {
        return new v2b(Object.fromEntries(usS(n).map((i)=>[
                i,
                b3r
            ])), e);
    }
    getInternalStack(e = this.theme) {
        return this._stacks[e];
    }
    getScopes(e = this.theme) {
        return fsS(this._stacks[e]);
    }
    toJSON() {
        return {
            lang: this.lang,
            theme: this.theme,
            themes: this.themes,
            scopes: this.getScopes()
        };
    }
};

}
var __wakaru_Q3r_initialized = false;
export function Q3r() {
if (__wakaru_Q3r_initialized) return;
__wakaru_Q3r_initialized = true;
"use strict";
E(), Eit(), Daa(), tUt(), WoS(), vlS(), i0h(), X3r = null, Byn = new Set, uUt = new Map, fRh = 2e3, Z3r = ()=>{};

}
var __wakaru_CRh_initialized = false;
export function CRh() {
if (__wakaru_CRh_initialized) return;
__wakaru_CRh_initialized = true;
"use strict";
E(), i0h(), tUt(), wRh = 256, Gla = 512 * 1024, bFe = new Map, Uyn = 0;

}
var __wakaru_Kla_initialized = false;
export function Kla() {
if (__wakaru_Kla_initialized) return;
__wakaru_Kla_initialized = true;
"use strict";
E(), TRh(), qla = "__SHIKI_WORKER_CODE_PLACEHOLDER__", wdi = null, Cdi = null, zla = !1;

}
var __wakaru_tNr_initialized = false;
export function tNr() {
if (__wakaru_tNr_initialized) return;
__wakaru_tNr_initialized = true;
"use strict";
E(), Eit(), xRh(), tUt(), Kla(), RRh = Object.defineProperty, PRh = (t, e, n)=>e in t ? RRh(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, Ahe = (t, e, n)=>PRh(t, typeof e != "symbol" ? e + "" : e, n), MRh = 1e4, DRh = 3e4, NRh = {
    kind: "supported"
}, LRh = class {
    constructor(t, e){
        Ahe(this, "worker"), Ahe(this, "pending", new Map), Ahe(this, "grammars", new Set), Ahe(this, "tokenizedLanguages", new Set), Ahe(this, "_busy", !1), Ahe(this, "_disposed", !1), Ahe(this, "deadline", null), Ahe(this, "onIdle"), Ahe(this, "onError"), this.worker = t, this.onIdle = e.onIdle, this.onError = e.onError, this.worker.onmessage = (n)=>{
            this.handleMessage(n.data);
        }, this.worker.onerror = (n)=>{
            console.error("Shiki worker error:", n), this.rejectAll(new Error("Worker error")), this.onError(this);
        };
    }
    get busy() {
        return this._busy;
    }
    hasTokenized(t) {
        return this.tokenizedLanguages.has(t);
    }
    dispatch({ request: t, ...e }) {
        this._busy = !0, this.pending.set(t.id, e), this.mirrorLoadedGrammars(), this.worker.postMessage(t), this.deadline = setTimeout(()=>{
            this.deadline = null, this.rejectAll(new Error("Shiki worker unresponsive")), this.onError(this);
        }, MRh);
    }
    mirrorLoadedGrammars() {
        for (const t of GrS()){
            if (this.grammars.has(t)) continue;
            const e = l3r(t);
            if (e === void 0) continue;
            this.grammars.add(t);
            const n = {
                type: "loadGrammar",
                grammar: e
            };
            this.worker.postMessage(n);
        }
    }
    dispose() {
        this._disposed || (this._disposed = !0, this.rejectAll(new Error("Worker disposed")), this.worker.terminate());
    }
    rejectAll(t) {
        this.clearDeadline();
        for (const [, e] of this.pending)e.reject(t);
        this.pending.clear(), this._busy = !1;
    }
    clearDeadline() {
        this.deadline !== null && (clearTimeout(this.deadline), this.deadline = null);
    }
    handleMessage(t) {
        if (!this._disposed) switch(t.type){
            case "tokenized":
                this.resolvePending(t.id, t.html);
                break;
            case "tokenizedLines":
                this.resolvePending(t.id, t.htmlLines);
                break;
            case "tokenizedStructured":
                this.resolvePending(t.id, t.tokens);
                break;
            case "error":
                {
                    const e = this.pending.get(t.id);
                    e && (e.reject(new Error(t.message)), this.pending.delete(t.id)), this.markIdle();
                    break;
                }
        }
    }
    resolvePending(t, e) {
        const n = this.pending.get(t);
        n && (this.tokenizedLanguages.add(n.language), n.resolve(e), this.pending.delete(t)), this.markIdle();
    }
    markIdle() {
        this.clearDeadline(), this._busy = !1, this.onIdle();
    }
}, Yla = class {
    constructor(t = {}){
        Ahe(this, "workers", []), Ahe(this, "requestQueue", []), Ahe(this, "requestIdCounter", 0), Ahe(this, "maxWorkers"), Ahe(this, "disposed", !1), this.maxWorkers = t.maxWorkers ?? Math.min(navigator.hardwareConcurrency ?? 4, 2), this.initFirstWorker();
    }
    initFirstWorker() {
        if (!kdi()) return;
        const t = this.createManagedWorker();
        t && this.workers.push(t);
    }
    createManagedWorker() {
        const t = IRh();
        if (!t) return null;
        const e = t();
        return new LRh(e, {
            onIdle: ()=>this.processQueue(),
            onError: (n)=>this.handleManagedWorkerError(n)
        });
    }
    handleManagedWorkerError(t) {
        const e = this.workers.indexOf(t);
        e !== -1 && this.workers.splice(e, 1), t.dispose(), this.processQueue();
    }
    workerFor(t) {
        const e = this.workers.filter((i)=>i.hasTokenized(t));
        if (e.length > 0) return e.find((i)=>!i.busy) ?? null;
        const n = this.workers.find((i)=>!i.busy);
        if (n) return n;
        if (this.workers.length < this.maxWorkers) {
            const i = this.createManagedWorker();
            if (i) return this.workers.push(i), i;
        }
        return null;
    }
    processQueue() {
        if (this.disposed) return;
        const t = [];
        for (const e of this.requestQueue){
            const n = this.workerFor(e.language);
            n ? n.dispatch(e) : t.push(e);
        }
        this.requestQueue = t;
    }
    get available() {
        return kdi();
    }
    get workerCount() {
        return this.workers.length;
    }
    async enqueue(t, e) {
        if (await eUt(t), this.disposed) throw new Error("Pool disposed");
        return new Promise((n, i)=>{
            this.requestQueue.push({
                request: e(++this.requestIdCounter),
                language: xit(t) ?? t,
                resolve: (r)=>n(r),
                reject: i
            }), this.processQueue();
        });
    }
    async tokenize(t, e) {
        if (this.disposed) throw new Error("Pool disposed");
        return this.available ? this.enqueue(e, (n)=>({
                type: "tokenize",
                id: n,
                code: t,
                lang: e
            })) : eNr(t);
    }
    async tokenizeLines(t, e) {
        if (this.disposed) throw new Error("Pool disposed");
        return this.available ? this.enqueue(e, (n)=>({
                type: "tokenizeLines",
                id: n,
                lines: t,
                lang: e
            })) : t.map(eNr);
    }
    async tokenizeStructured(t, e) {
        if (this.disposed) throw new Error("Pool disposed");
        return ARh(t).kind === "unsupported" ? Tit(t) : this.enqueue(e, (n)=>({
                type: "tokenizeStructured",
                id: n,
                code: t,
                lang: e
            }));
    }
    dispose() {
        this.disposed = !0;
        for (const { reject: t } of this.requestQueue)t(new Error("Pool disposed"));
        this.requestQueue = [];
        for (const t of this.workers)t.dispose();
        this.workers = [];
    }
}, pUt = null;

}
var __wakaru_KlS_initialized = false;
export function KlS() {
if (__wakaru_KlS_initialized) return;
__wakaru_KlS_initialized = true;
"use strict";
E(), zRh = 400, Dit = [], y1t = null;

}
