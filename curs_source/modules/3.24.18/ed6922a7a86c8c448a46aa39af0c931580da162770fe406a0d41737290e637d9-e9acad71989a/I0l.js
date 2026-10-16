import { Cc } from "./HVr.js";
import { AWg, Mft, TEi, aGg, afs, cys, oGg, qEi, sfs, zkn } from "./qIc.js";
import { ESs } from "./CodeTokenizerProvider.js";
import { I9t } from "./_anysphere-ui-esm_shiki-worker.js";
import { IIi, aSs, oSs } from "./atomic.js";
import { pIi } from "./closing.js";
import { oEl, rEl, sEl } from "./comment.js";
import { QTl, Vys, XTl, YTl, ZTl } from "./core.js";
import { ays } from "./css-variables-theme.js";
import { nEl } from "./dangerous.js";
import { ASs, ISs, k9e } from "./default-code-tokenization.js";
import { nCn } from "./element_2.js";
import { _2 } from "./index_118.js";
import { Bft, CTl, ETl, Fys, ITl, Jwn, LTl, Lys, Mys, Oys, PTl, Qwn, Rys, TTl, _Tl, bTl, eIi, fTl, gTl, h9t, kTl, rIi, tIi, wTl, yj } from "./index_119.js";
import { tEl } from "./index_121.js";
import { yEl } from "./index_124.js";
import { SEl, kEl, wEl } from "./index_125.js";
import { AEl, DEl, IEl, MEl, REl, _Ii, bIi, jYe } from "./index_126.js";
import { lue } from "./index_127.js";
import { AIi, RIi, cSs, oCn, qYe, uue } from "./index_128.js";
import { $xl, Bxl, Fxl, Gxl, Hxl, IU, LIi, Lxl, Mxl, Nxl, Pxl, Rxl, Uxl, Vxl, Wxl, _Ss, jxl, qxl, sDe, ySs } from "./index_129.js";
import { SCe, wft } from "./index_42.js";
import { _fs } from "./index_52.js";
import { RSs, kIl, pCn } from "./line-window.js";
import { R0l } from "./mdx.js";
import { P0l } from "./nginx.js";
import { O0l } from "./nim.js";
import { qEl } from "./node-utils.js";
import { U0l } from "./objective-c.js";
import { W0l } from "./objective-cpp.js";
import { j0l } from "./ocaml.js";
import { dEl } from "./omission.js";
import { fEl } from "./opening.js";
import { K0l } from "./perl.js";
import { Z0l } from "./php.js";
import { e1l } from "./powershell.js";
import { i1l } from "./prisma.js";
import { o1l } from "./proto.js";
import { d1l } from "./rst.js";
import { m1l } from "./rust.js";
import { v1l } from "./sass.js";
import { y1l } from "./scala.js";
import { OEl } from "./scanner-BFcBmQR1.js";
import { w1l } from "./scss.js";
import { X1l, Z1l, u9t } from "./shiki-grammars.js";
import { cEl, xU, zys } from "./siblings.js";
import { E1l } from "./svelte.js";
import { A1l } from "./swift.js";
import { M1l } from "./terraform.js";
import { _El } from "./text_5.js";
import { eEl } from "./to-decimal.js";
import { JTl } from "./to-hexadecimal.js";
import { dIi, iEl, jys } from "./to-named.js";
import { SIi, VEl, iCn, kIi, tSs } from "./tokenize.js";
import { N1l } from "./toml.js";
import { a$, yIi } from "./utils_18.js";
import { q1l } from "./vue.js";
import { Y1l } from "./zig.js";
export var D0l = {};
Cc(D0l, {
    default: ()=>P0l
});
export var L0l = {};
Cc(L0l, {
    default: ()=>O0l
});
export var F0l = {};
Cc(F0l, {
    default: ()=>U0l
});
export var $0l = {};
Cc($0l, {
    default: ()=>W0l
});
export var G0l = {};
Cc(G0l, {
    default: ()=>j0l
});
export var q0l = {};
Cc(q0l, {
    default: ()=>K0l
});
export var Y0l = {};
Cc(Y0l, {
    default: ()=>Z0l
});
export var Q0l = {};
Cc(Q0l, {
    default: ()=>e1l
});
export var t1l = {};
Cc(t1l, {
    default: ()=>i1l
});
export var r1l = {};
Cc(r1l, {
    default: ()=>o1l
});
export var l1l = {};
Cc(l1l, {
    default: ()=>d1l
});
export var h1l = {};
Cc(h1l, {
    default: ()=>m1l
});
export var g1l = {};
Cc(g1l, {
    default: ()=>v1l
});
export var _1l = {};
Cc(_1l, {
    default: ()=>y1l
});
export var S1l = {};
Cc(S1l, {
    default: ()=>w1l
});
export var C1l = {};
Cc(C1l, {
    default: ()=>E1l
});
export var x1l = {};
Cc(x1l, {
    default: ()=>A1l
});
export var R1l = {};
Cc(R1l, {
    default: ()=>M1l
});
export var P1l = {};
Cc(P1l, {
    default: ()=>N1l
});
export var V1l = {};
Cc(V1l, {
    default: ()=>q1l
});
export var z1l = {};
Cc(z1l, {
    default: ()=>Y1l
});
export function mVg(e) {
    const t = new Map, n = new Map, i = new Set;
    async function r(a) {
        for(let c = 1;; c++)try {
            return await a();
        } catch (l) {
            if (c >= X1l) throw l;
            await AWg(Z1l);
        }
    }
    function s(a) {
        const c = cys(a);
        return Object.hasOwn(e, c) ? c : void 0;
    }
    function o(a) {
        const c = t.get(a);
        if (c !== void 0) return Promise.resolve(c);
        const l = n.get(a);
        if (l !== void 0) return l;
        const u = e[a];
        if (u === void 0) return Promise.reject(new Error(`No shiki grammar for "${a}"`));
        const h = r(u).then((p)=>{
            t.set(a, p.default);
            for (const g of i)g();
            return p.default;
        }).finally(()=>{
            n.delete(a);
        });
        return n.set(a, h), h;
    }
    return {
        grammarIdFor: s,
        getLoadedGrammar: (a)=>t.get(a),
        loadedGrammarIds: ()=>t.keys(),
        subscribeToGrammarLoads (a) {
            return i.add(a), ()=>{
                i.delete(a);
            };
        },
        loadGrammar: o,
        ensureGrammar (a) {
            const c = s(a);
            return c === void 0 ? Promise.resolve(!0) : o(c).then(()=>!0, (l)=>(console.warn(`Shiki grammar "${c}" failed to load:`, l), !1));
        }
    };
}
export function GYe(e) {
    return u9t.grammarIdFor(e);
}
export function Cys(e) {
    return u9t.getLoadedGrammar(e);
}
export function gVg() {
    return u9t.loadedGrammarIds();
}
export function fVg(e) {
    return u9t.subscribeToGrammarLoads(e);
}
export function Tys(e) {
    return u9t.ensureGrammar(e);
}
function _Vg(e) {
    return xys(e);
}
function xys(e) {
    return Array.isArray(e) ? bVg(e) : e instanceof RegExp ? e : typeof e == "object" ? yVg(e) : e;
}
function bVg(e) {
    let t = [];
    for(let n = 0, i = e.length; n < i; n++)t[n] = xys(e[n]);
    return t;
}
function yVg(e) {
    let t = {};
    for(let n in e)t[n] = xys(e[n]);
    return t;
}
export function J1l(e, ...t) {
    return t.forEach((n)=>{
        for(let i in n)e[i] = n[i];
    }), e;
}
export function eTl(e) {
    const t = ~e.lastIndexOf("/") || ~e.lastIndexOf("\\");
    return t === 0 ? e : ~t === e.length - 1 ? eTl(e.substring(0, e.length - 1)) : e.substr(~t + 1);
}
function tTl(e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
}
export function nTl(e, t) {
    if (e === null && t === null) return 0;
    if (!e) return -1;
    if (!t) return 1;
    let n = e.length, i = t.length;
    if (n === i) {
        for(let r = 0; r < n; r++){
            let s = tTl(e[r], t[r]);
            if (s !== 0) return s;
        }
        return 0;
    }
    return n - i;
}
function iTl(e) {
    return !!(/^#[0-9a-f]{6}$/i.test(e) || /^#[0-9a-f]{8}$/i.test(e) || /^#[0-9a-f]{3}$/i.test(e) || /^#[0-9a-f]{4}$/i.test(e));
}
export function rTl(e) {
    return e.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&");
}
export function SVg(e, t) {
    if (t.length === 0) return !0;
    for(let n = 0; n < t.length; n++){
        let i = t[n], r = !1;
        if (i === ">") {
            if (n === t.length - 1) return !1;
            i = t[++n], r = !0;
        }
        for(; e && !kVg(e.scopeName, i);){
            if (r) return !1;
            e = e.parent;
        }
        if (!e) return !1;
        e = e.parent;
    }
    return !0;
}
function kVg(e, t) {
    return t === e || e.startsWith(t) && e[t.length] === ".";
}
export function wVg(e) {
    if (!e) return [];
    if (!e.settings || !Array.isArray(e.settings)) return [];
    let t = e.settings, n = [], i = 0;
    for(let r = 0, s = t.length; r < s; r++){
        let o = t[r];
        if (!o.settings) continue;
        let a;
        if (typeof o.scope == "string") {
            let h = o.scope;
            h = h.replace(/^[,]+/, ""), h = h.replace(/[,]+$/, ""), a = h.split(",");
        } else Array.isArray(o.scope) ? a = o.scope : a = [
            ""
        ];
        let c = -1;
        if (typeof o.settings.fontStyle == "string") {
            c = 0;
            let h = o.settings.fontStyle.split(" ");
            for(let p = 0, g = h.length; p < g; p++)switch(h[p]){
                case "italic":
                    c = c | 1;
                    break;
                case "bold":
                    c = c | 2;
                    break;
                case "underline":
                    c = c | 4;
                    break;
                case "strikethrough":
                    c = c | 8;
                    break;
            }
        }
        let l = null;
        typeof o.settings.foreground == "string" && iTl(o.settings.foreground) && (l = o.settings.foreground);
        let u = null;
        typeof o.settings.background == "string" && iTl(o.settings.background) && (u = o.settings.background);
        for(let h = 0, p = a.length; h < p; h++){
            let f = a[h].trim().split(" "), v = f[f.length - 1], b = null;
            f.length > 1 && (b = f.slice(0, f.length - 1), b.reverse()), n[i++] = new gTl(v, b, r, c, l, u);
        }
    }
    return n;
}
export function CVg(e, t) {
    e.sort((c, l)=>{
        let u = tTl(c.scope, l.scope);
        return u !== 0 || (u = nTl(c.parentScopes, l.parentScopes), u !== 0) ? u : c.index - l.index;
    });
    let n = 0, i = "#000000", r = "#ffffff";
    for(; e.length >= 1 && e[0].scope === "";){
        let c = e.shift();
        c.fontStyle !== -1 && (n = c.fontStyle), c.foreground !== null && (i = c.foreground), c.background !== null && (r = c.background);
    }
    let s = new fTl(t), o = new Rys(n, s.getId(i), s.getId(r)), a = new _Tl(new eIi(0, null, -1, 0, 0), []);
    for(let c = 0, l = e.length; c < l; c++){
        let u = e[c];
        a.insert(0, u.scope, u.parentScopes, u.fontStyle, s.getId(u.foreground), s.getId(u.background));
    }
    return new Qwn(s, o, a);
}
function fjk(e) {
    return e;
}
function vjk(e) {
    return e;
}
export function Kxi(e, t) {
    const n = [], i = TVg(e);
    let r = i.next();
    for(; r !== null;){
        let c = 0;
        if (r.length === 2 && r.charAt(1) === ":") {
            switch(r.charAt(0)){
                case "R":
                    c = 1;
                    break;
                case "L":
                    c = -1;
                    break;
                default:
                    console.log(`Unknown priority ${r} in scope selector`);
            }
            r = i.next();
        }
        let l = o();
        if (n.push({
            matcher: l,
            priority: c
        }), r !== ",") break;
        r = i.next();
    }
    return n;
    function s() {
        if (r === "-") {
            r = i.next();
            const c = s();
            return (l)=>!!c && !c(l);
        }
        if (r === "(") {
            r = i.next();
            const c = a();
            return r === ")" && (r = i.next()), c;
        }
        if (sTl(r)) {
            const c = [];
            do c.push(r), r = i.next();
            while (sTl(r))
            return (l)=>t(c, l);
        }
        return null;
    }
    function o() {
        const c = [];
        let l = s();
        for(; l;)c.push(l), l = s();
        return (u)=>c.every((h)=>h(u));
    }
    function a() {
        const c = [];
        let l = o();
        for(; l && (c.push(l), r === "|" || r === ",");){
            do r = i.next();
            while (r === "|" || r === ",")
            l = o();
        }
        return (u)=>c.some((h)=>h(u));
    }
}
function sTl(e) {
    return !!e && !!e.match(/[\w\.:]+/);
}
function TVg(e) {
    let t = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g, n = t.exec(e);
    return {
        next: ()=>{
            if (!n) return null;
            const i = n[0];
            return n = t.exec(e), i;
        }
    };
}
export function oTl(e) {
    typeof e.dispose == "function" && e.dispose();
}
export function EVg(e, t, n, i) {
    const r = n.lookup(e.scopeName);
    if (!r) {
        if (e.scopeName === t) throw new Error(`No grammar provided for <${t}>`);
        return;
    }
    const s = n.lookup(t);
    e instanceof h9t ? Yxi({
        baseGrammar: s,
        selfGrammar: r
    }, i) : Iys(e.ruleName, {
        baseGrammar: s,
        selfGrammar: r,
        repository: r.repository
    }, i);
    const o = n.injections(e.scopeName);
    if (o) for (const a of o)i.add(new h9t(a));
}
function Iys(e, t, n) {
    if (t.repository && t.repository[e]) {
        const i = t.repository[e];
        Xxi([
            i
        ], t, n);
    }
}
function Yxi(e, t) {
    e.selfGrammar.patterns && Array.isArray(e.selfGrammar.patterns) && Xxi(e.selfGrammar.patterns, {
        ...e,
        repository: e.selfGrammar.repository
    }, t), e.selfGrammar.injections && Xxi(Object.values(e.selfGrammar.injections), {
        ...e,
        repository: e.selfGrammar.repository
    }, t);
}
function Xxi(e, t, n) {
    for (const i of e){
        if (n.visitedRule.has(i)) continue;
        n.visitedRule.add(i);
        const r = i.repository ? J1l({}, t.repository, i.repository) : t.repository;
        Array.isArray(i.patterns) && Xxi(i.patterns, {
            ...t,
            repository: r
        }, n);
        const s = i.include;
        if (!s) continue;
        const o = aTl(s);
        switch(o.kind){
            case 0:
                Yxi({
                    ...t,
                    selfGrammar: t.baseGrammar
                }, n);
                break;
            case 1:
                Yxi(t, n);
                break;
            case 2:
                Iys(o.ruleName, {
                    ...t,
                    repository: r
                }, n);
                break;
            case 3:
            case 4:
                const a = o.scopeName === t.selfGrammar.scopeName ? t.selfGrammar : o.scopeName === t.baseGrammar.scopeName ? t.baseGrammar : void 0;
                if (a) {
                    const c = {
                        baseGrammar: t.baseGrammar,
                        selfGrammar: a,
                        repository: r
                    };
                    o.kind === 4 ? Iys(o.ruleName, c, n) : Yxi(c, n);
                } else o.kind === 4 ? n.add(new bTl(o.scopeName, o.ruleName)) : n.add(new h9t(o.scopeName));
                break;
        }
    }
}
export function aTl(e) {
    if (e === "$base") return new kTl;
    if (e === "$self") return new wTl;
    const t = e.indexOf("#");
    if (t === -1) return new TTl(e);
    if (t === 0) return new CTl(e.substring(1));
    {
        const n = e.substring(0, t), i = e.substring(t + 1);
        return new ETl(n, i);
    }
}
function _jk(e) {
    return e;
}
function bjk(e) {
    return e;
}
export function cTl(e, t, n, i, r, s, o, a) {
    const c = t.content.length;
    let l = !1, u = -1;
    if (o) {
        const g = xVg(e, t, n, i, r, s);
        r = g.stack, i = g.linePos, n = g.isFirstLine, u = g.anchorPosition;
    }
    const h = Date.now();
    for(; !l;){
        if (a !== 0 && Date.now() - h > a) return new Fys(r, !0);
        p();
    }
    return new Fys(r, !1);
    function p() {
        const g = IVg(e, t, n, i, r, u);
        if (!g) {
            s.produce(r, c), l = !0;
            return;
        }
        const f = g.captureIndices, v = g.matchedRuleId, b = f && f.length > 0 ? f[0].end > i : !1;
        if (v === ITl) {
            const y = r.getRule(e);
            s.produce(r, f[0].start), r = r.withContentNameScopesList(r.nameScopesList), Xwn(e, t, n, r, s, y.endCaptures, f), s.produce(r, f[0].end);
            const T = r;
            if (r = r.parent, u = T.getAnchorPos(), !b && T.getEnterPos() === i) {
                r = T, s.produce(r, c), l = !0;
                return;
            }
        } else {
            const y = e.getRule(v);
            s.produce(r, f[0].start);
            const T = r, E = y.getName(t.content, f), A = r.contentNameScopesList.pushAttributed(E, e);
            if (r = r.push(v, i, u, f[0].end === c, null, A, A), y instanceof tIi) {
                const R = y;
                Xwn(e, t, n, r, s, R.beginCaptures, f), s.produce(r, f[0].end), u = f[0].end;
                const D = R.getContentName(t.content, f), P = A.pushAttributed(D, e);
                if (r = r.withContentNameScopesList(P), R.endHasBackReferences && (r = r.withEndRule(R.getEndWithResolvedBackReferences(t.content, f))), !b && T.hasSameRuleAs(r)) {
                    r = r.pop(), s.produce(r, c), l = !0;
                    return;
                }
            } else if (y instanceof Jwn) {
                const R = y;
                Xwn(e, t, n, r, s, R.beginCaptures, f), s.produce(r, f[0].end), u = f[0].end;
                const D = R.getContentName(t.content, f), P = A.pushAttributed(D, e);
                if (r = r.withContentNameScopesList(P), R.whileHasBackReferences && (r = r.withEndRule(R.getWhileWithResolvedBackReferences(t.content, f))), !b && T.hasSameRuleAs(r)) {
                    r = r.pop(), s.produce(r, c), l = !0;
                    return;
                }
            } else if (Xwn(e, t, n, r, s, y.captures, f), s.produce(r, f[0].end), r = r.pop(), !b) {
                r = r.safePop(), s.produce(r, c), l = !0;
                return;
            }
        }
        f[0].end > i && (i = f[0].end, n = !1);
    }
}
function xVg(e, t, n, i, r, s) {
    let o = r.beginRuleCapturedEOL ? 0 : -1;
    const a = [];
    for(let c = r; c; c = c.pop()){
        const l = c.getRule(e);
        l instanceof Jwn && a.push({
            rule: l,
            stack: c
        });
    }
    for(let c = a.pop(); c; c = a.pop()){
        const { ruleScanner: l, findOptions: u } = DVg(c.rule, e, c.stack.endRule, n, i === o), h = l.findNextMatchSync(t, i, u);
        if (h) {
            if (h.ruleId !== Mys) {
                r = c.stack.pop();
                break;
            }
            h.captureIndices && h.captureIndices.length && (s.produce(c.stack, h.captureIndices[0].start), Xwn(e, t, n, c.stack, s, c.rule.whileCaptures, h.captureIndices), s.produce(c.stack, h.captureIndices[0].end), o = h.captureIndices[0].end, h.captureIndices[0].end > i && (i = h.captureIndices[0].end, n = !1));
        } else {
            r = c.stack.pop();
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
function IVg(e, t, n, i, r, s) {
    const o = AVg(e, t, n, i, r, s), a = e.getInjections();
    if (a.length === 0) return o;
    const c = RVg(a, e, t, n, i, r, s);
    if (!c) return o;
    if (!o) return c;
    const l = o.captureIndices[0].start, u = c.captureIndices[0].start;
    return u < l || c.priorityMatch && u === l ? c : o;
}
function AVg(e, t, n, i, r, s) {
    const o = r.getRule(e), { ruleScanner: a, findOptions: c } = lTl(o, e, r.endRule, n, i === s), l = a.findNextMatchSync(t, i, c);
    return l ? {
        captureIndices: l.captureIndices,
        matchedRuleId: l.ruleId
    } : null;
}
function RVg(e, t, n, i, r, s, o) {
    let a = Number.MAX_VALUE, c = null, l, u = 0;
    const h = s.contentNameScopesList.getScopeNames();
    for(let p = 0, g = e.length; p < g; p++){
        const f = e[p];
        if (!f.matcher(h)) continue;
        const v = t.getRule(f.ruleId), { ruleScanner: b, findOptions: y } = lTl(v, t, null, i, r === o), T = b.findNextMatchSync(n, r, y);
        if (!T) continue;
        const E = T.captureIndices[0].start;
        if (!(E >= a) && (a = E, c = T.captureIndices, l = T.ruleId, u = f.priority, a === r)) break;
    }
    return c ? {
        priorityMatch: u === -1,
        captureIndices: c,
        matchedRuleId: l
    } : null;
}
function lTl(e, t, n, i, r) {
    if (Oys) {
        const o = e.compile(t, n), a = uTl(i, r);
        return {
            ruleScanner: o,
            findOptions: a
        };
    }
    return {
        ruleScanner: e.compileAG(t, n, i, r),
        findOptions: 0
    };
}
function DVg(e, t, n, i, r) {
    if (Oys) {
        const o = e.compileWhile(t, n), a = uTl(i, r);
        return {
            ruleScanner: o,
            findOptions: a
        };
    }
    return {
        ruleScanner: e.compileWhileAG(t, n, i, r),
        findOptions: 0
    };
}
function uTl(e, t) {
    let n = 0;
    return e || (n |= 1), t || (n |= 4), n;
}
function Xwn(e, t, n, i, r, s, o) {
    if (s.length === 0) return;
    const a = t.content, c = Math.min(s.length, o.length), l = [], u = o[0].end;
    for(let h = 0; h < c; h++){
        const p = s[h];
        if (p === null) continue;
        const g = o[h];
        if (g.length === 0) continue;
        if (g.start > u) break;
        for(; l.length > 0 && l[l.length - 1].endPos <= g.start;)r.produceFromScopes(l[l.length - 1].scopes, l[l.length - 1].endPos), l.pop();
        if (l.length > 0 ? r.produceFromScopes(l[l.length - 1].scopes, g.start) : r.produce(i, g.start), p.retokenizeCapturedWithRuleId) {
            const v = p.getName(a, o), b = i.contentNameScopesList.pushAttributed(v, e), y = p.getContentName(a, o), T = b.pushAttributed(y, e), E = i.push(p.retokenizeCapturedWithRuleId, g.start, -1, !1, null, b, T), A = e.createOnigString(a.substring(0, g.end));
            cTl(e, A, n && g.start === 0, g.start, E, r, !1, 0), oTl(A);
            continue;
        }
        const f = p.getName(a, o);
        if (f !== null) {
            const b = (l.length > 0 ? l[l.length - 1].scopes : i.contentNameScopesList).pushAttributed(f, e);
            l.push(new PTl(b, g.end));
        }
    }
    for(; l.length > 0;)r.produceFromScopes(l[l.length - 1].scopes, l[l.length - 1].endPos), l.pop();
}
export function MVg(e, t, n, i, r, s, o, a) {
    return new LTl(e, t, n, i, r, s, o, a);
}
export function dTl(e, t, n, i, r) {
    const s = Kxi(t, Zxi), o = Lys.getCompiledRuleId(n, i, r.repository);
    for (const a of s)e.push({
        debugSelector: t,
        matcher: a.matcher,
        ruleId: o,
        grammar: r,
        priority: a.priority
    });
}
export function Zxi(e, t) {
    if (t.length < e.length) return !1;
    let n = 0;
    return e.every((i)=>{
        for(let r = n; r < t.length; r++)if (PVg(t[r], i)) return n = r + 1, !0;
        return !1;
    });
}
function PVg(e, t) {
    if (!e) return !1;
    if (e === t) return !0;
    const n = t.length;
    return e.length > n && e.substr(0, n) === t && e[n] === ".";
}
export function hTl(e, t) {
    return e = _Vg(e), e.repository = e.repository || {}, e.repository.$self = {
        $vscodeTextmateLocation: e.$vscodeTextmateLocation,
        patterns: e.patterns,
        name: e.scopeName
    }, e.repository.$base = t || e.repository.$self, e;
}
function sIi(e, t) {
    const n = typeof e == "string" ? {} : {
        ...e.colorReplacements
    }, i = typeof e == "string" ? e : e.name;
    for (const [r, s] of Object.entries(t?.colorReplacements || {}))typeof s == "string" ? n[r] = s : r === i && Object.assign(n, s);
    return n;
}
function VYe(e, t) {
    return e && (t?.[e?.toLowerCase()] || e);
}
export function OVg(e) {
    return Array.isArray(e) ? e : [
        e
    ];
}
async function $Tl(e) {
    return Promise.resolve(typeof e == "function" ? e() : e).then((t)=>t.default || t);
}
function oIi(e) {
    return !e || [
        "plaintext",
        "txt",
        "text",
        "plain"
    ].includes(e);
}
function FVg(e) {
    return e === "ansi" || oIi(e);
}
function aIi(e) {
    return e === "none";
}
function BVg(e) {
    return aIi(e);
}
function cIi(e, t = !1) {
    if (e.length === 0) return [
        [
            "",
            0
        ]
    ];
    const n = e.split(/(\r?\n)/g);
    let i = 0;
    const r = [];
    for(let s = 0; s < n.length; s += 2){
        const o = t ? n[s] + (n[s + 1] || "") : n[s];
        r.push([
            o,
            i
        ]), i += n[s].length, i += n[s + 1]?.length || 0;
    }
    return r;
}
export function Bys(e) {
    if (e?.[Wys]) return e;
    const t = {
        ...e
    };
    t.tokenColors && !t.settings && (t.settings = t.tokenColors, delete t.tokenColors), t.type || (t.type = "dark"), t.colorReplacements = {
        ...t.colorReplacements
    }, t.settings || (t.settings = []);
    let { bg: n, fg: i } = t;
    if (!n || !i) {
        const a = t.settings ? t.settings.find((c)=>!c.name && !c.scope) : void 0;
        a?.settings?.foreground && (i = a.settings.foreground), a?.settings?.background && (n = a.settings.background), !i && t?.colors?.["editor.foreground"] && (i = t.colors["editor.foreground"]), !n && t?.colors?.["editor.background"] && (n = t.colors["editor.background"]), i || (i = t.type === "light" ? $ys.light : $ys.dark), n || (n = t.type === "light" ? Hys.light : Hys.dark), t.fg = i, t.bg = n;
    }
    t.settings[0] && t.settings[0].settings && !t.settings[0].scope || t.settings.unshift({
        settings: {
            foreground: t.fg,
            background: t.bg
        }
    });
    let r = 0;
    const s = new Map;
    function o(a) {
        if (s.has(a)) return s.get(a);
        r += 1;
        const c = `#${r.toString(16).padStart(8, "0").toLowerCase()}`;
        return t.colorReplacements?.[`#${c}`] ? o(a) : (s.set(a, c), c);
    }
    t.settings = t.settings.map((a)=>{
        const c = a.settings?.foreground && !a.settings.foreground.startsWith("#"), l = a.settings?.background && !a.settings.background.startsWith("#");
        if (!c && !l) return a;
        const u = {
            ...a,
            settings: {
                ...a.settings
            }
        };
        if (c) {
            const h = o(a.settings.foreground);
            t.colorReplacements[h] = a.settings.foreground, u.settings.foreground = h;
        }
        if (l) {
            const h = o(a.settings.background);
            t.colorReplacements[h] = a.settings.background, u.settings.background = h;
        }
        return u;
    });
    for (const a of Object.keys(t.colors || {}))if ((a === "editor.foreground" || a === "editor.background" || a.startsWith("terminal.ansi")) && !t.colors[a]?.startsWith("#")) {
        const c = o(t.colors[a]);
        t.colorReplacements[c] = t.colors[a], t.colors[a] = c;
    }
    return Object.defineProperty(t, Wys, {
        enumerable: !1,
        writable: !1,
        value: !0
    }), t;
}
async function UVg(e) {
    return Array.from(new Set((await Promise.all(e.filter((t)=>!FVg(t)).map(async (t)=>await $Tl(t).then((n)=>Array.isArray(n) ? n : [
                n
            ])))).flat()));
}
async function $Vg(e) {
    return (await Promise.all(e.map(async (t)=>BVg(t) ? null : Bys(await $Tl(t))))).filter((t)=>!!t);
}
export function HTl(e, t) {
    if (!t) return e;
    if (t[e]) {
        const n = new Set([
            e
        ]);
        for(; t[e];){
            if (e = t[e], n.has(e)) throw new _2(`Circular alias \`${Array.from(n).join(" -> ")} -> ${e}\``);
            n.add(e);
        }
    }
    return e;
}
function HVg(e) {
    v9t += 1, e.warnings !== !1 && v9t >= 10 && v9t % 10 === 0 && console.warn(`[Shiki] ${v9t} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);
    let t = !1;
    if (!e.engine) throw new _2("`engine` option is required for synchronous mode");
    const n = (e.langs || []).flat(1), i = (e.themes || []).flat(1).map(Bys), r = new zTl(new KTl(e.engine, n), i, n, e.langAlias);
    let s;
    function o(T) {
        return HTl(T, e.langAlias);
    }
    function a(T) {
        b();
        const E = r.getGrammar(typeof T == "string" ? T : T.name);
        if (!E) throw new _2(`Language \`${T}\` not found, you may need to load it first`);
        return E;
    }
    function c(T) {
        if (T === "none") return {
            bg: "",
            fg: "",
            name: "none",
            settings: [],
            type: "dark"
        };
        b();
        const E = r.getTheme(T);
        if (!E) throw new _2(`Theme \`${T}\` not found, you may need to load it first`);
        return E;
    }
    function l(T) {
        b();
        const E = c(T);
        return s !== T && (r.setTheme(E), s = T), {
            theme: E,
            colorMap: r.getColorMap()
        };
    }
    function u() {
        return b(), r.getLoadedThemes();
    }
    function h() {
        return b(), r.getLoadedLanguages();
    }
    function p(...T) {
        b(), r.loadLanguages(T.flat(1));
    }
    async function g(...T) {
        return p(await UVg(T));
    }
    function f(...T) {
        b();
        for (const E of T.flat(1))r.loadTheme(E);
    }
    async function v(...T) {
        return b(), f(await $Vg(T));
    }
    function b() {
        if (t) throw new _2("Shiki instance has been disposed");
    }
    function y() {
        t || (t = !0, r.dispose(), v9t -= 1);
    }
    return {
        setTheme: l,
        getTheme: c,
        getLanguage: a,
        getLoadedThemes: u,
        getLoadedLanguages: h,
        resolveLangAlias: o,
        loadLanguage: g,
        loadLanguageSync: p,
        loadTheme: v,
        loadThemeSync: f,
        dispose: y,
        [Symbol.dispose]: y
    };
}
function lIi(e, t) {
    Gys.set(e, t);
}
function eCn(e) {
    return Gys.get(e);
}
export function WVg(e) {
    const t = [], n = new Set;
    function i(r) {
        if (n.has(r)) return;
        n.add(r);
        const s = r?.nameScopesList?.scopeName;
        s && t.push(s), r.parent && i(r.parent);
    }
    return i(e), t;
}
function GVg(e, t) {
    if (!(e instanceof tCn)) throw new _2("Invalid grammar state");
    return e.getInternalStack(t);
}
function WTl(e, t, n = {}) {
    const { theme: i = e.getLoadedThemes()[0] } = n;
    if (oIi(e.resolveLangAlias(n.lang || "text")) || aIi(i)) return cIi(t).map((a)=>[
            {
                content: a[0],
                offset: a[1]
            }
        ]);
    const { theme: r, colorMap: s } = e.setTheme(i), o = e.getLanguage(n.lang || "text");
    if (n.grammarState) {
        if (n.grammarState.lang !== o.name) throw new _2(`Grammar state language "${n.grammarState.lang}" does not match highlight language "${o.name}"`);
        if (!n.grammarState.themes.includes(r.name)) throw new _2(`Grammar state themes "${n.grammarState.themes}" do not contain highlight theme "${r.name}"`);
    }
    return jVg(t, o, r, s, n);
}
function VVg(...e) {
    if (e.length === 2) return eCn(e[1]);
    const [t, n, i = {}] = e, { lang: r = "text", theme: s = t.getLoadedThemes()[0] } = i;
    if (oIi(r) || aIi(s)) throw new _2("Plain language does not have grammar state");
    if (r === "ansi") throw new _2("ANSI language does not have grammar state");
    const { theme: o, colorMap: a } = t.setTheme(s), c = t.getLanguage(r);
    return new tCn(Uys(n, c, o, a, i).stateStack, c.name, o.name);
}
function jVg(e, t, n, i, r) {
    const s = Uys(e, t, n, i, r), o = new tCn(s.stateStack, t.name, n.name);
    return lIi(s.tokens, o), s.tokens;
}
function Uys(e, t, n, i, r) {
    const s = sIi(n, r), { tokenizeMaxLineLength: o = 0, tokenizeTimeLimit: a = 500 } = r, c = cIi(e);
    let l = r.grammarState ? GVg(r.grammarState, n.name) ?? rIi : r.grammarContextCode != null ? Uys(r.grammarContextCode, t, n, i, {
        ...r,
        grammarState: void 0,
        grammarContextCode: void 0
    }).stateStack : rIi, u = [];
    const h = [];
    for(let p = 0, g = c.length; p < g; p++){
        const [f, v] = c[p];
        if (f === "") {
            u = [], h.push([]);
            continue;
        }
        if (o > 0 && f.length >= o) {
            u = [], h.push([
                {
                    content: f,
                    offset: v,
                    color: "",
                    fontStyle: 0
                }
            ]);
            continue;
        }
        let b, y, T;
        r.includeExplanation && (b = t.tokenizeLine(f, l, a), y = b.tokens, T = 0);
        const E = t.tokenizeLine2(f, l, a), A = E.tokens.length / 2;
        for(let R = 0; R < A; R++){
            const D = E.tokens[2 * R], P = R + 1 < A ? E.tokens[2 * R + 2] : f.length;
            if (D === P) continue;
            const N = E.tokens[2 * R + 1], O = VYe(i[Bft.getForeground(N)], s), F = Bft.getFontStyle(N), H = {
                content: f.substring(D, P),
                offset: v + D,
                color: O,
                fontStyle: F
            };
            if (r.includeExplanation) {
                const $ = [];
                if (r.includeExplanation !== "scopeName") for (const G of n.settings){
                    let q;
                    switch(typeof G.scope){
                        case "string":
                            q = G.scope.split(/,/).map((z)=>z.trim());
                            break;
                        case "object":
                            q = G.scope;
                            break;
                        default:
                            continue;
                    }
                    $.push({
                        settings: G,
                        selectors: q.map((z)=>z.split(/ /))
                    });
                }
                H.explanation = [];
                let W = 0;
                for(; D + W < P;){
                    const G = y[T], q = f.substring(G.startIndex, G.endIndex);
                    W += q.length, H.explanation.push({
                        content: q,
                        scopes: r.includeExplanation === "scopeName" ? qVg(G.scopes) : zVg($, G.scopes)
                    }), T += 1;
                }
            }
            u.push(H);
        }
        h.push(u), u = [], l = E.ruleStack;
    }
    return {
        tokens: h,
        stateStack: l
    };
}
function qVg(e) {
    return e.map((t)=>({
            scopeName: t
        }));
}
function zVg(e, t) {
    const n = [];
    for(let i = 0, r = t.length; i < r; i++){
        const s = t[i];
        n[i] = {
            scopeName: s,
            themeMatches: YVg(e, s, t.slice(0, i))
        };
    }
    return n;
}
function GTl(e, t) {
    return e === t || t.substring(0, e.length) === e && t[e.length] === ".";
}
function KVg(e, t, n) {
    if (!GTl(e[e.length - 1], t)) return !1;
    let i = e.length - 2, r = n.length - 1;
    for(; i >= 0 && r >= 0;)GTl(e[i], n[r]) && (i -= 1), r -= 1;
    return i === -1;
}
function YVg(e, t, n) {
    const i = [];
    for (const { selectors: r, settings: s } of e)for (const o of r)if (KVg(o, t, n)) {
        i.push(s);
        break;
    }
    return i;
}
function VTl(e, t, n, i = WTl) {
    const r = Object.entries(n.themes).filter((l)=>l[1]).map((l)=>({
            color: l[0],
            theme: l[1]
        })), s = r.map((l)=>{
        const u = i(e, t, {
            ...n,
            theme: l.theme
        });
        return {
            tokens: u,
            state: eCn(u),
            theme: typeof l.theme == "string" ? l.theme : l.theme.name
        };
    }), o = XVg(...s.map((l)=>l.tokens)), a = o[0].map((l, u)=>l.map((h, p)=>{
            const g = {
                content: h.content,
                variants: {},
                offset: h.offset
            };
            return "includeExplanation" in n && n.includeExplanation && (g.explanation = h.explanation), o.forEach((f, v)=>{
                const { content: b, explanation: y, offset: T, ...E } = f[u][p];
                g.variants[r[v].color] = E;
            }), g;
        })), c = s[0].state ? new tCn(Object.fromEntries(s.map((l)=>[
            l.theme,
            l.state?.getInternalStack(l.theme)
        ])), s[0].state.lang) : void 0;
    return c && lIi(a, c), a;
}
function XVg(...e) {
    const t = e.map(()=>[]), n = e.length;
    for(let i = 0; i < e[0].length; i++){
        const r = e.map((c)=>c[i]), s = t.map(()=>[]);
        t.forEach((c, l)=>c.push(s[l]));
        const o = r.map(()=>0), a = r.map((c)=>c[0]);
        for(; a.every((c)=>c);){
            const c = Math.min(...a.map((l)=>l.content.length));
            for(let l = 0; l < n; l++){
                const u = a[l];
                u.content.length === c ? (s[l].push(u), o[l] += 1, a[l] = r[l][o[l]]) : (s[l].push({
                    ...u,
                    content: u.content.slice(0, c)
                }), a[l] = {
                    ...u,
                    content: u.content.slice(c),
                    offset: u.offset + c
                });
            }
        }
    }
    return t;
}
function QVg(e, t) {
    if (e = e.replace(t.subset ? JVg(t.subset) : YTl, i), t.subset || t.escapeOnly) return e;
    return e.replace(XTl, n).replace(ZTl, i);
    function n(r, s, o) {
        return t.format((r.charCodeAt(0) - 55296) * 1024 + r.charCodeAt(1) - 56320 + 65536, o.charCodeAt(s + 2), t);
    }
    function i(r, s, o) {
        return t.format(r.charCodeAt(0), o.charCodeAt(s + 1), t);
    }
}
function JVg(e) {
    let t = Vys.get(e);
    return t || (t = ejg(e), Vys.set(e, t)), t;
}
function ejg(e) {
    const t = [];
    let n = -1;
    for(; ++n < e.length;)t.push(e[n].replace(QTl, "\\$&"));
    return new RegExp("(?:" + t.join("|") + ")", "g");
}
function njg(e, t, n) {
    const i = "&#x" + e.toString(16).toUpperCase();
    return n && t && !JTl.test(String.fromCharCode(t)) ? i : i + ";";
}
function rjg(e, t, n) {
    const i = "&#" + String(e);
    return n && t && !eEl.test(String.fromCharCode(t)) ? i : i + ";";
}
function ljg(e, t, n, i) {
    const r = String.fromCharCode(e);
    if (jys.call(dIi, r)) {
        const s = dIi[r], o = "&" + s;
        return n && tEl.includes(s) && !nEl.includes(s) && (!i || t && t !== 61 && iEl.test(String.fromCharCode(t))) ? o : o + ";";
    }
    return "";
}
function djg(e, t, n) {
    let i = njg(e, t, n.omitOptionalSemicolons), r;
    if ((n.useNamedReferences || n.useShortestReferences) && (r = ljg(e, t, n.omitOptionalSemicolons, n.attribute)), (n.useShortestReferences || !r) && n.useShortestReferences) {
        const s = rjg(e, t, n.omitOptionalSemicolons);
        s.length < i.length && (i = s);
    }
    return r && (!n.useShortestReferences || r.length < i.length) ? r : i;
}
function _9t(e, t) {
    return QVg(e, Object.assign({
        format: djg
    }, t));
}
export function pjg(e, t, n, i) {
    return i.settings.bogusComments ? "<?" + _9t(e.value, Object.assign({}, i.settings.characterReferences, {
        subset: sEl
    })) + ">" : "<!--" + e.value.replace(rEl, r) + "-->";
    function r(s) {
        return _9t(s, Object.assign({}, i.settings.characterReferences, {
            subset: oEl
        }));
    }
}
export function gjg(e, t, n, i) {
    return "<!" + (i.settings.upperDoctype ? "DOCTYPE" : "doctype") + (i.settings.tightDoctype ? "" : " ") + "html>";
}
export function aEl(e) {
    return t;
    function t(n, i, r) {
        const s = n ? n.children : cEl;
        let o = (i || 0) + e, a = s[o];
        if (!r) for(; a && qEi(a);)o += e, a = s[o];
        return a;
    }
}
export function uEl(e) {
    return t;
    function t(n, i, r) {
        return dEl.call(e, n.tagName) && e[n.tagName](n, i, r);
    }
}
export function Kys(e, t, n) {
    const i = xU(n, t, !0);
    return !i || i.type !== "comment" && !(i.type === "text" && qEi(i.value.charAt(0)));
}
export function vjg(e, t, n) {
    const i = xU(n, t);
    return !i || i.type !== "comment";
}
export function _jg(e, t, n) {
    const i = xU(n, t);
    return !i || i.type !== "comment";
}
export function bjg(e, t, n) {
    const i = xU(n, t);
    return i ? i.type === "element" && (i.tagName === "address" || i.tagName === "article" || i.tagName === "aside" || i.tagName === "blockquote" || i.tagName === "details" || i.tagName === "div" || i.tagName === "dl" || i.tagName === "fieldset" || i.tagName === "figcaption" || i.tagName === "figure" || i.tagName === "footer" || i.tagName === "form" || i.tagName === "h1" || i.tagName === "h2" || i.tagName === "h3" || i.tagName === "h4" || i.tagName === "h5" || i.tagName === "h6" || i.tagName === "header" || i.tagName === "hgroup" || i.tagName === "hr" || i.tagName === "main" || i.tagName === "menu" || i.tagName === "nav" || i.tagName === "ol" || i.tagName === "p" || i.tagName === "pre" || i.tagName === "section" || i.tagName === "table" || i.tagName === "ul") : !n || !(n.type === "element" && (n.tagName === "a" || n.tagName === "audio" || n.tagName === "del" || n.tagName === "ins" || n.tagName === "map" || n.tagName === "noscript" || n.tagName === "video"));
}
export function yjg(e, t, n) {
    const i = xU(n, t);
    return !i || i.type === "element" && i.tagName === "li";
}
export function Sjg(e, t, n) {
    const i = xU(n, t);
    return !!(i && i.type === "element" && (i.tagName === "dt" || i.tagName === "dd"));
}
export function kjg(e, t, n) {
    const i = xU(n, t);
    return !i || i.type === "element" && (i.tagName === "dt" || i.tagName === "dd");
}
export function pEl(e, t, n) {
    const i = xU(n, t);
    return !i || i.type === "element" && (i.tagName === "rp" || i.tagName === "rt");
}
export function wjg(e, t, n) {
    const i = xU(n, t);
    return !i || i.type === "element" && i.tagName === "optgroup";
}
export function Cjg(e, t, n) {
    const i = xU(n, t);
    return !i || i.type === "element" && (i.tagName === "option" || i.tagName === "optgroup");
}
export function Tjg(e, t, n) {
    const i = xU(n, t);
    return !!(i && i.type === "element" && (i.tagName === "tbody" || i.tagName === "tfoot"));
}
export function Ejg(e, t, n) {
    const i = xU(n, t);
    return !i || i.type === "element" && (i.tagName === "tbody" || i.tagName === "tfoot");
}
export function xjg(e, t, n) {
    return !xU(n, t);
}
export function Ijg(e, t, n) {
    const i = xU(n, t);
    return !i || i.type === "element" && i.tagName === "tr";
}
export function mEl(e, t, n) {
    const i = xU(n, t);
    return !i || i.type === "element" && (i.tagName === "td" || i.tagName === "th");
}
export function Ajg(e) {
    const t = xU(e, -1);
    return !t || t.type !== "comment";
}
export function Rjg(e) {
    const t = new Set;
    for (const i of e.children)if (i.type === "element" && (i.tagName === "base" || i.tagName === "title")) {
        if (t.has(i.tagName)) return !1;
        t.add(i.tagName);
    }
    const n = e.children[0];
    return !n || n.type === "element";
}
export function Djg(e) {
    const t = xU(e, -1, !0);
    return !t || t.type !== "comment" && !(t.type === "text" && qEi(t.value.charAt(0))) && !(t.type === "element" && (t.tagName === "meta" || t.tagName === "link" || t.tagName === "script" || t.tagName === "style" || t.tagName === "template"));
}
export function Mjg(e, t, n) {
    const i = zys(n, t), r = xU(e, -1, !0);
    return n && i && i.type === "element" && i.tagName === "colgroup" && pIi(i, n.children.indexOf(i), n) ? !1 : !!(r && r.type === "element" && r.tagName === "col");
}
export function Pjg(e, t, n) {
    const i = zys(n, t), r = xU(e, -1);
    return n && i && i.type === "element" && (i.tagName === "thead" || i.tagName === "tbody") && pIi(i, n.children.indexOf(i), n) ? !1 : !!(r && r.type === "element" && r.tagName === "tr");
}
export function Njg(e, t, n, i) {
    const r = i.schema, s = r.space === "svg" ? !1 : i.settings.omitOptionalTags;
    let o = r.space === "svg" ? i.settings.closeEmptyElements : i.settings.voids.includes(e.tagName.toLowerCase());
    const a = [];
    let c;
    r.space === "html" && e.tagName === "svg" && (i.schema = SCe);
    const l = Ojg(i, e.properties), u = i.all(r.space === "html" && e.tagName === "template" ? e.content : e);
    return i.schema = r, u && (o = !1), (l || !s || !fEl(e, t, n)) && (a.push("<", e.tagName, l ? " " + l : ""), o && (r.space === "svg" || i.settings.closeSelfClosing) && (c = l.charAt(l.length - 1), (!i.settings.tightSelfClosing || c === "/" || c && c !== '"' && c !== "'") && a.push(" "), a.push("/")), a.push(">")), a.push(u), !o && (!s || !pIi(e, t, n)) && a.push("</" + e.tagName + ">"), a.join("");
}
function Ojg(e, t) {
    const n = [];
    let i = -1, r;
    if (t) {
        for(r in t)if (t[r] !== null && t[r] !== void 0) {
            const s = Fjg(e, r, t[r]);
            s && n.push(s);
        }
    }
    for(; ++i < n.length;){
        const s = e.settings.tightAttributes ? n[i].charAt(n[i].length - 1) : void 0;
        i !== n.length - 1 && s !== '"' && s !== "'" && (n[i] += " ");
    }
    return n.join("");
}
function Fjg(e, t, n) {
    const i = zkn(e.schema, t), r = e.settings.allowParseErrors && e.schema.space === "html" ? 0 : 1, s = e.settings.allowDangerousCharacters ? 0 : 1;
    let o = e.quote, a;
    if (i.overloadedBoolean && (n === i.attribute || n === "") ? n = !0 : (i.boolean || i.overloadedBoolean) && (typeof n != "string" || n === i.attribute || n === "") && (n = !!n), n == null || n === !1 || typeof n == "number" && Number.isNaN(n)) return "";
    const c = _9t(i.attribute, Object.assign({}, e.settings.characterReferences, {
        subset: nCn.name[r][s]
    }));
    return n === !0 || (n = Array.isArray(n) ? (i.commaSeparated ? sfs : afs)(n, {
        padLeft: !e.settings.tightCommaSeparatedLists
    }) : String(n), e.settings.collapseEmptyAttributes && !n) ? c : (e.settings.preferUnquoted && (a = _9t(n, Object.assign({}, e.settings.characterReferences, {
        attribute: !0,
        subset: nCn.unquoted[r][s]
    }))), a !== n && (e.settings.quoteSmart && TEi(n, o) > TEi(n, e.alternative) && (o = e.alternative), a = o + _9t(n, Object.assign({}, e.settings.characterReferences, {
        subset: (o === "'" ? nCn.single : nCn.double)[r][s],
        attribute: !0
    })) + o), c + (a && "=" + a));
}
export function vEl(e, t, n, i) {
    return n && n.type === "element" && (n.tagName === "script" || n.tagName === "style") ? e.value : _9t(e.value, Object.assign({}, i.settings.characterReferences, {
        subset: _El
    }));
}
export function Ujg(e, t, n, i) {
    return i.settings.allowDangerousHtml ? e.value : vEl(e, t, n, i);
}
export function Hjg(e, t, n, i) {
    return i.all(e);
}
export function Gjg(e) {
    throw new Error("Expected node, not `" + e + "`");
}
export function Vjg(e) {
    const t = e;
    throw new Error("Cannot compile unknown node `" + t.type + "`");
}
export function qjg(e, t) {
    const n = t || SEl, i = n.quote || '"', r = i === '"' ? "'" : '"';
    if (i !== '"' && i !== "'") throw new Error("Invalid quote `" + i + "`, expected `'` or `\"`");
    return {
        one: zjg,
        all: Kjg,
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
            voids: n.voids || _fs,
            characterReferences: n.characterReferences || kEl,
            closeSelfClosing: n.closeSelfClosing || !1,
            closeEmptyElements: n.closeEmptyElements || !1
        },
        schema: n.space === "svg" ? SCe : wft,
        quote: i,
        alternative: r
    }.one(Array.isArray(e) ? {
        type: "root",
        children: e
    } : e, void 0, void 0);
}
function zjg(e, t, n) {
    return yEl(e, t, n, this);
}
function Kjg(e) {
    const t = [], n = e && e.children || wEl;
    let i = -1;
    for(; ++i < n.length;)t[i] = this.one(n[i], i, e);
    return t.join("");
}
function CEl(e, t) {
    var n;
    if (!t) return e;
    e.properties || (e.properties = {}), (n = e.properties).class || (n.class = []), typeof e.properties.class == "string" && (e.properties.class = e.properties.class.split(/\s+/g)), Array.isArray(e.properties.class) || (e.properties.class = []);
    const i = Array.isArray(t) ? t : t.split(/\s+/g);
    for (const r of i)r && !e.properties.class.includes(r) && e.properties.class.push(r);
    return e;
}
function Xjg(e) {
    const t = cIi(e, !0).map(([r])=>r);
    function n(r) {
        if (r === e.length) return {
            line: t.length - 1,
            character: t[t.length - 1].length
        };
        let s = r, o = 0;
        for (const a of t){
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
        for(let a = 0; a < r; a++)o += t[a].length;
        return o += s, o;
    }
    return {
        lines: t,
        indexToPos: n,
        posToIndex: i
    };
}
function Zjg(e, t) {
    let n = 0;
    const i = [];
    for (const r of t)r > n && i.push({
        ...e,
        content: e.content.slice(n, r),
        offset: e.offset + n
    }), n = r;
    return n < e.content.length && i.push({
        ...e,
        content: e.content.slice(n),
        offset: e.offset + n
    }), i;
}
function Qjg(e, t) {
    const n = Array.from(t instanceof Set ? t : new Set(t)).sort((i, r)=>i - r);
    return n.length ? e.map((i)=>i.flatMap((r)=>{
            const s = n.filter((o)=>r.offset < o && o < r.offset + r.content.length).map((o)=>o - r.offset).sort((o, a)=>o - a);
            return s.length ? Zjg(r, s) : r;
        })) : e;
}
function Jjg(e, t, n, i, r = "css-vars") {
    const s = {
        content: e.content,
        explanation: e.explanation,
        offset: e.offset
    }, o = t.map((u)=>mIi(e.variants[u])), a = new Set(o.flatMap((u)=>Object.keys(u))), c = {}, l = (u, h)=>{
        const p = h === "color" ? "" : h === "background-color" ? "-bg" : `-${h}`;
        return n + t[u] + (h === "color" ? "" : p);
    };
    return o.forEach((u, h)=>{
        for (const p of a){
            const g = u[p] || "inherit";
            if (h === 0 && i && IEl.includes(p)) if (i === _Ii && o.length > 1) {
                const f = t.findIndex((b)=>b === "light"), v = t.findIndex((b)=>b === "dark");
                if (f === -1 || v === -1) throw new _2('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
                c[p] = `light-dark(${o[f][p] || "inherit"}, ${o[v][p] || "inherit"})`, r === "css-vars" && (c[l(h, p)] = g);
            } else c[p] = g;
            else r === "css-vars" && (c[l(h, p)] = g);
        }
    }), s.htmlStyle = c, s;
}
function mIi(e) {
    const t = {};
    if (e.color && (t.color = e.color), e.bgColor && (t["background-color"] = e.bgColor), e.fontStyle) {
        e.fontStyle & yj.Italic && (t["font-style"] = "italic"), e.fontStyle & yj.Bold && (t["font-weight"] = "bold");
        const n = [];
        e.fontStyle & yj.Underline && n.push("underline"), e.fontStyle & yj.Strikethrough && n.push("line-through"), n.length && (t["text-decoration"] = n.join(" "));
    }
    return t;
}
function Yys(e) {
    return typeof e == "string" ? e : Object.entries(e).map(([t, n])=>`${t}:${n}`).join(";");
}
export function eqg() {
    const e = new WeakMap;
    function t(n) {
        if (!e.has(n.meta)) {
            let i = function(o) {
                if (typeof o == "number") {
                    if (o < 0 || o > n.source.length) throw new _2(`Invalid decoration offset: ${o}. Code length: ${n.source.length}`);
                    return {
                        ...r.indexToPos(o),
                        offset: o
                    };
                } else {
                    const a = r.lines[o.line];
                    if (a === void 0) throw new _2(`Invalid decoration position ${JSON.stringify(o)}. Lines length: ${r.lines.length}`);
                    let c = o.character;
                    if (c < 0 && (c = a.length + c), c < 0 || c > a.length) throw new _2(`Invalid decoration position ${JSON.stringify(o)}. Line ${o.line} length: ${a.length}`);
                    return {
                        ...o,
                        character: c,
                        offset: r.posToIndex(o.line, c)
                    };
                }
            };
            const r = Xjg(n.source), s = (n.options.decorations || []).map((o)=>({
                    ...o,
                    start: i(o.start),
                    end: i(o.end)
                }));
            tqg(s), e.set(n.meta, {
                decorations: s,
                converter: r,
                source: n.source
            });
        }
        return e.get(n.meta);
    }
    return {
        name: "shiki:decorations",
        tokens (n) {
            if (this.options.decorations?.length) return Qjg(n, t(this).decorations.flatMap((i)=>[
                    i.start.offset,
                    i.end.offset
                ]));
        },
        code (n) {
            if (!this.options.decorations?.length) return;
            const i = t(this), r = Array.from(n.children).filter((u)=>u.type === "element" && u.tagName === "span");
            if (r.length !== i.converter.lines.length) throw new _2(`Number of lines in code element (${r.length}) does not match the number of lines in the source (${i.converter.lines.length}). Failed to apply decorations.`);
            function s(u, h, p, g) {
                const f = r[u];
                let v = "", b = -1, y = -1;
                if (h === 0 && (b = 0), p === 0 && (y = 0), p === Number.POSITIVE_INFINITY && (y = f.children.length), b === -1 || y === -1) for(let E = 0; E < f.children.length; E++)v += TEl(f.children[E]), b === -1 && v.length === h && (b = E + 1), y === -1 && v.length === p && (y = E + 1);
                if (b === -1) throw new _2(`Failed to find start index for decoration ${JSON.stringify(g.start)}`);
                if (y === -1) throw new _2(`Failed to find end index for decoration ${JSON.stringify(g.end)}`);
                const T = f.children.slice(b, y);
                if (!g.alwaysWrap && T.length === f.children.length) a(f, g, "line");
                else if (!g.alwaysWrap && T.length === 1 && T[0].type === "element") a(T[0], g, "token");
                else {
                    const E = {
                        type: "element",
                        tagName: "span",
                        properties: {},
                        children: T
                    };
                    a(E, g, "wrapper"), f.children.splice(b, T.length, E);
                }
            }
            function o(u, h) {
                r[u] = a(r[u], h, "line");
            }
            function a(u, h, p) {
                const g = h.properties || {}, f = h.transform || ((v)=>v);
                return u.tagName = h.tagName || "span", u.properties = {
                    ...u.properties,
                    ...g,
                    class: u.properties.class
                }, h.properties?.class && CEl(u, h.properties.class), u = f(u, p) || u, u;
            }
            const c = [], l = i.decorations.sort((u, h)=>h.start.offset - u.start.offset || u.end.offset - h.end.offset);
            for (const u of l){
                const { start: h, end: p } = u;
                if (h.line === p.line) s(h.line, h.character, p.character, u);
                else if (h.line < p.line) {
                    s(h.line, h.character, Number.POSITIVE_INFINITY, u);
                    for(let g = h.line + 1; g < p.line; g++)c.unshift(()=>o(g, u));
                    s(p.line, 0, p.character, u);
                }
            }
            c.forEach((u)=>u());
        }
    };
}
function tqg(e) {
    for(let t = 0; t < e.length; t++){
        const n = e[t];
        if (n.start.offset > n.end.offset) throw new _2(`Invalid decoration range: ${JSON.stringify(n.start)} - ${JSON.stringify(n.end)}`);
        for(let i = t + 1; i < e.length; i++){
            const r = e[i], s = n.start.offset <= r.start.offset && r.start.offset < n.end.offset, o = n.start.offset < r.end.offset && r.end.offset <= n.end.offset, a = r.start.offset <= n.start.offset && n.start.offset < r.end.offset, c = r.start.offset < n.end.offset && n.end.offset <= r.end.offset;
            if (s || o || a || c) {
                if (s && o || a && c || a && n.start.offset === n.end.offset || o && r.start.offset === r.end.offset) continue;
                throw new _2(`Decorations ${JSON.stringify(n.start)} and ${JSON.stringify(r.start)} intersect.`);
            }
        }
    }
}
function TEl(e) {
    return e.type === "text" ? e.value : e.type === "element" ? e.children.map(TEl).join("") : "";
}
function gIi(e) {
    const t = nqg(e.transformers || []);
    return [
        ...t.pre,
        ...t.normal,
        ...t.post,
        ...AEl
    ];
}
function nqg(e) {
    const t = [], n = [], i = [];
    for (const r of e)switch(r.enforce){
        case "pre":
            t.push(r);
            break;
        case "post":
            n.push(r);
            break;
        default:
            i.push(r);
    }
    return {
        pre: t,
        post: n,
        normal: i
    };
}
function iqg(e, t) {
    const n = e.indexOf("\x1B", t);
    if (n !== -1 && e[n + 1] === "[") {
        const i = e.indexOf("m", n);
        if (i !== -1) return {
            sequence: e.substring(n + 2, i).split(";"),
            startPosition: n,
            position: i + 1
        };
    }
    return {
        position: e.length
    };
}
function EEl(e) {
    const t = e.shift();
    if (t === "2") {
        const n = e.splice(0, 3).map((i)=>Number.parseInt(i));
        return n.length !== 3 || n.some((i)=>Number.isNaN(i)) ? void 0 : {
            type: "rgb",
            rgb: n
        };
    } else if (t === "5") {
        const n = e.shift();
        if (n) return {
            type: "table",
            index: Number(n)
        };
    }
}
function rqg(e) {
    const t = [];
    for(; e.length > 0;){
        const n = e.shift();
        if (!n) continue;
        const i = Number.parseInt(n);
        if (!Number.isNaN(i)) if (i === 0) t.push({
            type: "resetAll"
        });
        else if (i <= 9) bIi[i] && t.push({
            type: "setDecoration",
            value: bIi[i]
        });
        else if (i <= 29) {
            const r = bIi[i - 20];
            r && (t.push({
                type: "resetDecoration",
                value: r
            }), r === "dim" && t.push({
                type: "resetDecoration",
                value: "bold"
            }));
        } else if (i <= 37) t.push({
            type: "setForegroundColor",
            value: {
                type: "named",
                name: jYe[i - 30]
            }
        });
        else if (i === 38) {
            const r = EEl(e);
            r && t.push({
                type: "setForegroundColor",
                value: r
            });
        } else if (i === 39) t.push({
            type: "resetForegroundColor"
        });
        else if (i <= 47) t.push({
            type: "setBackgroundColor",
            value: {
                type: "named",
                name: jYe[i - 40]
            }
        });
        else if (i === 48) {
            const r = EEl(e);
            r && t.push({
                type: "setBackgroundColor",
                value: r
            });
        } else i === 49 ? t.push({
            type: "resetBackgroundColor"
        }) : i === 53 ? t.push({
            type: "setDecoration",
            value: "overline"
        }) : i === 55 ? t.push({
            type: "resetDecoration",
            value: "overline"
        }) : i >= 90 && i <= 97 ? t.push({
            type: "setForegroundColor",
            value: {
                type: "named",
                name: jYe[i - 90 + 8]
            }
        }) : i >= 100 && i <= 107 && t.push({
            type: "setBackgroundColor",
            value: {
                type: "named",
                name: jYe[i - 100 + 8]
            }
        });
    }
    return t;
}
function sqg() {
    let e = null, t = null, n = new Set;
    return {
        parse (i) {
            const r = [];
            let s = 0;
            do {
                const o = iqg(i, s), a = o.sequence ? i.substring(s, o.startPosition) : i.substring(s);
                if (a.length > 0 && r.push({
                    value: a,
                    foreground: e,
                    background: t,
                    decorations: new Set(n)
                }), o.sequence) {
                    const c = rqg(o.sequence);
                    for (const l of c)l.type === "resetAll" ? (e = null, t = null, n.clear()) : l.type === "resetForegroundColor" ? e = null : l.type === "resetBackgroundColor" ? t = null : l.type === "resetDecoration" && n.delete(l.value);
                    for (const l of c)l.type === "setForegroundColor" ? e = l.value : l.type === "setBackgroundColor" ? t = l.value : l.type === "setDecoration" && n.add(l.value);
                }
                s = o.position;
            }while (s < i.length)
            return r;
        }
    };
}
function oqg(e = REl) {
    function t(a) {
        return e[a];
    }
    function n(a) {
        return `#${a.map((c)=>Math.max(0, Math.min(c, 255)).toString(16).padStart(2, "0")).join("")}`;
    }
    let i;
    function r() {
        if (i) return i;
        i = [];
        for(let l = 0; l < jYe.length; l++)i.push(t(jYe[l]));
        let a = [
            0,
            95,
            135,
            175,
            215,
            255
        ];
        for(let l = 0; l < 6; l++)for(let u = 0; u < 6; u++)for(let h = 0; h < 6; h++)i.push(n([
            a[l],
            a[u],
            a[h]
        ]));
        let c = 8;
        for(let l = 0; l < 24; l++, c += 10)i.push(n([
            c,
            c,
            c
        ]));
        return i;
    }
    function s(a) {
        return r()[a];
    }
    function o(a) {
        switch(a.type){
            case "named":
                return t(a.name);
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
function aqg(e, t, n) {
    const i = sIi(e, n), r = cIi(t), s = oqg(Object.fromEntries(jYe.map((a)=>{
        const c = `terminal.ansi${a[0].toUpperCase()}${a.substring(1)}`;
        return [
            a,
            e.colors?.[c] || DEl[a]
        ];
    }))), o = sqg();
    return r.map((a)=>o.parse(a[0]).map((c)=>{
            let l, u;
            c.decorations.has("reverse") ? (l = c.background ? s.value(c.background) : e.bg, u = c.foreground ? s.value(c.foreground) : e.fg) : (l = c.foreground ? s.value(c.foreground) : e.fg, u = c.background ? s.value(c.background) : void 0), l = VYe(l, i), u = VYe(u, i), c.decorations.has("dim") && (l = cqg(l));
            let h = yj.None;
            return c.decorations.has("bold") && (h |= yj.Bold), c.decorations.has("italic") && (h |= yj.Italic), c.decorations.has("underline") && (h |= yj.Underline), c.decorations.has("strikethrough") && (h |= yj.Strikethrough), {
                content: c.value,
                offset: a[1],
                color: l,
                bgColor: u,
                fontStyle: h
            };
        }));
}
function cqg(e) {
    const t = e.match(/#([0-9a-f]{3,8})/i);
    if (t) {
        const i = t[1];
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
    const n = e.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);
    return n ? `var(${n[1]}-dim)` : e;
}
function Xys(e, t, n = {}) {
    const i = e.resolveLangAlias(n.lang || "text"), { theme: r = e.getLoadedThemes()[0] } = n;
    if (!oIi(i) && !aIi(r) && i === "ansi") {
        const { theme: s } = e.setTheme(r);
        return aqg(s, t, n);
    }
    return WTl(e, t, n);
}
function fIi(e, t, n) {
    let i, r, s, o, a, c;
    if ("themes" in n) {
        const { defaultColor: l = "light", cssVariablePrefix: u = "--shiki-", colorsRendering: h = "css-vars" } = n, p = Object.entries(n.themes).filter((y)=>y[1]).map((y)=>({
                color: y[0],
                theme: y[1]
            })).sort((y, T)=>y.color === l ? -1 : T.color === l ? 1 : 0);
        if (p.length === 0) throw new _2("`themes` option must not be empty");
        const g = VTl(e, t, n, Xys);
        if (c = eCn(g), l && _Ii !== l && !p.find((y)=>y.color === l)) throw new _2(`\`themes\` option must contain the defaultColor key \`${l}\``);
        const f = p.map((y)=>e.getTheme(y.theme)), v = p.map((y)=>y.color);
        s = g.map((y)=>y.map((T)=>Jjg(T, v, u, l, h))), c && lIi(s, c);
        const b = p.map((y)=>sIi(y.theme, n));
        r = xEl(p, f, b, u, l, "fg", h), i = xEl(p, f, b, u, l, "bg", h), o = `shiki-themes ${f.map((y)=>y.name).join(" ")}`, a = l ? void 0 : [
            r,
            i
        ].join(";");
    } else if ("theme" in n) {
        const l = sIi(n.theme, n);
        s = Xys(e, t, n);
        const u = e.getTheme(n.theme);
        i = VYe(u.bg, l), r = VYe(u.fg, l), o = u.name, c = eCn(s);
    } else throw new _2("Invalid options, either `theme` or `themes` must be provided");
    return {
        tokens: s,
        fg: r,
        bg: i,
        themeName: o,
        rootStyle: a,
        grammarState: c
    };
}
function xEl(e, t, n, i, r, s, o) {
    return e.map((a, c)=>{
        const l = VYe(t[c][s], n[c]) || "inherit", u = `${i + a.color}${s === "bg" ? "-bg" : ""}:${l}`;
        if (c === 0 && r) {
            if (r === _Ii && e.length > 1) {
                const h = e.findIndex((g)=>g.color === "light"), p = e.findIndex((g)=>g.color === "dark");
                if (h === -1 || p === -1) throw new _2('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
                return `light-dark(${VYe(t[h][s], n[h]) || "inherit"}, ${VYe(t[p][s], n[p]) || "inherit"});${u}`;
            }
            return l;
        }
        return o === "css-vars" ? u : null;
    }).filter((a)=>!!a).join(";");
}
function vIi(e, t, n, i = {
    meta: {},
    options: n,
    codeToHast: (r, s)=>vIi(e, r, s),
    codeToTokens: (r, s)=>fIi(e, r, s)
}) {
    let r = t;
    for (const f of gIi(n))r = f.preprocess?.call(i, r, n) || r;
    let { tokens: s, fg: o, bg: a, themeName: c, rootStyle: l, grammarState: u } = fIi(e, r, n);
    const { mergeWhitespaces: h = !0, mergeSameStyleTokens: p = !1 } = n;
    h === !0 ? s = uqg(s) : h === "never" && (s = dqg(s)), p && (s = hqg(s));
    const g = {
        ...i,
        get source () {
            return r;
        }
    };
    for (const f of gIi(n))s = f.tokens?.call(g, s) || s;
    return lqg(s, {
        ...n,
        fg: o,
        bg: a,
        themeName: c,
        rootStyle: n.rootStyle === !1 ? !1 : n.rootStyle ?? l
    }, g, u);
}
function lqg(e, t, n, i = eCn(e)) {
    const r = gIi(t), s = [], o = {
        type: "root",
        children: []
    }, { structure: a = "classic", tabindex: c = "0" } = t, l = {
        class: `shiki ${t.themeName || ""}`
    };
    t.rootStyle !== !1 && (t.rootStyle != null ? l.style = t.rootStyle : l.style = `background-color:${t.bg};color:${t.fg}`), c !== !1 && c != null && (l.tabindex = c.toString());
    for (const [v, b] of Object.entries(t.meta || {}))v.startsWith("_") || (l[v] = b);
    let u = {
        type: "element",
        tagName: "pre",
        properties: l,
        children: [],
        data: t.data
    }, h = {
        type: "element",
        tagName: "code",
        properties: {},
        children: s
    };
    const p = [], g = {
        ...n,
        structure: a,
        addClassToHast: CEl,
        get source () {
            return n.source;
        },
        get tokens () {
            return e;
        },
        get options () {
            return t;
        },
        get root () {
            return o;
        },
        get pre () {
            return u;
        },
        get code () {
            return h;
        },
        get lines () {
            return p;
        }
    };
    if (e.forEach((v, b)=>{
        b && (a === "inline" ? o.children.push({
            type: "element",
            tagName: "br",
            properties: {},
            children: []
        }) : a === "classic" && s.push({
            type: "text",
            value: `
`
        }));
        let y = {
            type: "element",
            tagName: "span",
            properties: {
                class: "line"
            },
            children: []
        }, T = 0;
        for (const E of v){
            let A = {
                type: "element",
                tagName: "span",
                properties: {
                    ...E.htmlAttrs
                },
                children: [
                    {
                        type: "text",
                        value: E.content
                    }
                ]
            };
            const R = Yys(E.htmlStyle || mIi(E));
            R && (A.properties.style = R);
            for (const D of r)A = D?.span?.call(g, A, b + 1, T, y, E) || A;
            a === "inline" ? o.children.push(A) : a === "classic" && y.children.push(A), T += E.content.length;
        }
        if (a === "classic") {
            for (const E of r)y = E?.line?.call(g, y, b + 1) || y;
            p.push(y), s.push(y);
        } else a === "inline" && p.push(y);
    }), a === "classic") {
        for (const v of r)h = v?.code?.call(g, h) || h;
        u.children.push(h);
        for (const v of r)u = v?.pre?.call(g, u) || u;
        o.children.push(u);
    } else if (a === "inline") {
        const v = [];
        let b = {
            type: "element",
            tagName: "span",
            properties: {
                class: "line"
            },
            children: []
        };
        for (const T of o.children)T.type === "element" && T.tagName === "br" ? (v.push(b), b = {
            type: "element",
            tagName: "span",
            properties: {
                class: "line"
            },
            children: []
        }) : (T.type === "element" || T.type === "text") && b.children.push(T);
        v.push(b);
        let y = {
            type: "element",
            tagName: "code",
            properties: {},
            children: v
        };
        for (const T of r)y = T?.code?.call(g, y) || y;
        o.children = [];
        for(let T = 0; T < y.children.length; T++){
            T > 0 && o.children.push({
                type: "element",
                tagName: "br",
                properties: {},
                children: []
            });
            const E = y.children[T];
            E.type === "element" && o.children.push(...E.children);
        }
    }
    let f = o;
    for (const v of r)f = v?.root?.call(g, f) || f;
    return i && lIi(f, i), f;
}
function uqg(e) {
    return e.map((t)=>{
        const n = [];
        let i = "", r;
        return t.forEach((s, o)=>{
            const a = !(s.fontStyle && (s.fontStyle & yj.Underline || s.fontStyle & yj.Strikethrough));
            a && s.content.match(/^\s+$/) && t[o + 1] ? (r === void 0 && (r = s.offset), i += s.content) : i ? (a ? n.push({
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
function dqg(e) {
    return e.map((t)=>t.flatMap((n)=>{
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
function hqg(e) {
    return e.map((t)=>{
        const n = [];
        for (const i of t){
            if (n.length === 0) {
                n.push({
                    ...i
                });
                continue;
            }
            const r = n[n.length - 1], s = Yys(r.htmlStyle || mIi(r)), o = Yys(i.htmlStyle || mIi(i)), a = r.fontStyle && (r.fontStyle & yj.Underline || r.fontStyle & yj.Strikethrough), c = i.fontStyle && (i.fontStyle & yj.Underline || i.fontStyle & yj.Strikethrough);
            !a && !c && s === o ? r.content += i.content : n.push({
                ...i
            });
        }
        return n;
    });
}
function pqg(e, t, n) {
    const i = {
        meta: {},
        options: n,
        codeToHast: (s, o)=>vIi(e, s, o),
        codeToTokens: (s, o)=>fIi(e, s, o)
    };
    let r = MEl(vIi(e, t, n, i));
    for (const s of gIi(n))r = s.postprocess?.call(i, r, n) || r;
    return r;
}
function mqg(e) {
    const t = HVg(e);
    return {
        getLastGrammarState: (...n)=>VVg(t, ...n),
        codeToTokensBase: (n, i)=>Xys(t, n, i),
        codeToTokensWithThemes: (n, i)=>VTl(t, n, i),
        codeToTokens: (n, i)=>fIi(t, n, i),
        codeToHast: (n, i)=>vIi(t, n, i),
        codeToHtml: (n, i)=>pqg(t, n, i),
        getBundledLanguages: ()=>({}),
        getBundledThemes: ()=>({}),
        ...t,
        getInternalContext: ()=>t
    };
}
function b9t(e) {
    if ([
        ...e
    ].length !== 1) throw new Error(`Expected "${e}" to be a single code point`);
    return e.codePointAt(0);
}
function vqg(e, t, n) {
    return e.has(t) || e.set(t, n), e.get(t);
}
function y9t(e, t) {
    if (e == null) throw new Error(t ?? "Value expected");
    return e;
}
function _qg(e, t = {}) {
    const n = {
        flags: "",
        ...t,
        rules: {
            captureGroup: !1,
            singleline: !1,
            ...t.rules
        }
    };
    if (typeof e != "string") throw new Error("String expected as pattern");
    const i = Oqg(n.flags), r = [
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
        pushModX (h) {
            r.push(h);
        },
        replaceCurrentModX (h) {
            r[r.length - 1] = h;
        },
        singleline: n.rules.singleline
    };
    let o = [], a;
    for(iCn.lastIndex = 0; a = iCn.exec(e);){
        const h = bqg(s, e, a[0], iCn.lastIndex);
        h.tokens ? o.push(...h.tokens) : h.token && o.push(h.token), h.lastIndex !== void 0 && (iCn.lastIndex = h.lastIndex);
    }
    const c = [];
    let l = 0;
    o.filter((h)=>h.type === "GroupOpen").forEach((h)=>{
        h.kind === "capturing" ? h.number = ++l : h.raw === "(" && c.push(h);
    }), l || c.forEach((h, p)=>{
        h.kind = "capturing", h.number = p + 1;
    });
    const u = l || c.length;
    return {
        tokens: o.map((h)=>h.type === "EscapedNumber" ? Bqg(h, u) : h).flat(),
        flags: i
    };
}
function bqg(e, t, n, i) {
    const [r, s] = n;
    if (n === "[" || n === "[^") {
        const o = yqg(t, n, i);
        return {
            tokens: o.tokens,
            lastIndex: o.lastIndex
        };
    }
    if (r === "\\") {
        if ("AbBGyYzZ".includes(s)) return {
            token: BEl(n, n)
        };
        if (/^\\g[<']/.test(n)) {
            if (!/^\\g(?:<[^>]+>|'[^']+')$/.test(n)) throw new Error(`Invalid group name "${n}"`);
            return {
                token: Rqg(n)
            };
        }
        if (/^\\k[<']/.test(n)) {
            if (!/^\\k(?:<[^>]+>|'[^']+')$/.test(n)) throw new Error(`Invalid group name "${n}"`);
            return {
                token: UEl(n)
            };
        }
        if (s === "K") return {
            token: HEl("keep", n)
        };
        if (s === "N" || s === "R") return {
            token: Uft("newline", n, {
                negate: s === "N"
            })
        };
        if (s === "O") return {
            token: Uft("any", n)
        };
        if (s === "X") return {
            token: Uft("text_segment", n)
        };
        const o = FEl(n, {
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
            token: Pqg(n)
        };
        if (n === "(?{") throw new Error(`Unsupported callout "${n}"`);
        if (n.startsWith("(?#")) {
            if (t[i] !== ")") throw new Error('Unclosed comment group "(?#"');
            return {
                lastIndex: i + 1
            };
        }
        if (/^\(\?[-imx]+[:)]$/.test(n)) return {
            token: Mqg(n, e)
        };
        if (e.pushModX(e.getCurrentModX()), e.numOpenGroups++, n === "(" && !e.captureGroup || n === "(?:") return {
            token: S9t("group", n)
        };
        if (n === "(?>") return {
            token: S9t("atomic", n)
        };
        if (n === "(?=" || n === "(?!" || n === "(?<=" || n === "(?<!") return {
            token: S9t(n[2] === "<" ? "lookbehind" : "lookahead", n, {
                negate: n.endsWith("!")
            })
        };
        if (n === "(" && e.captureGroup || n.startsWith("(?<") && n.endsWith(">") || n.startsWith("(?'") && n.endsWith("'")) return {
            token: S9t("capturing", n, {
                ...n !== "(" && {
                    name: n.slice(3, -1)
                }
            })
        };
        if (n.startsWith("(?~")) {
            if (n === "(?~|") throw new Error(`Unsupported absence function kind "${n}"`);
            return {
                token: S9t("absence_repeater", n)
            };
        }
        throw n === "(?(" ? new Error(`Unsupported conditional "${n}"`) : new Error(`Invalid or unsupported group option "${n}"`);
    }
    if (n === ")") {
        if (e.popModX(), e.numOpenGroups--, e.numOpenGroups < 0) throw new Error('Unmatched ")"');
        return {
            token: xqg(n)
        };
    }
    if (e.getCurrentModX()) {
        if (n === "#") {
            const o = t.indexOf(`
`, i);
            return {
                lastIndex: o === -1 ? t.length : o
            };
        }
        if (/^\s$/.test(n)) {
            const o = /\s+/y;
            return o.lastIndex = i, {
                lastIndex: o.exec(t) ? o.lastIndex : i
            };
        }
    }
    if (n === ".") return {
        token: Uft("dot", n)
    };
    if (n === "^" || n === "$") {
        const o = e.singleline ? {
            "^": a$`\A`,
            $: a$`\Z`
        }[n] : n;
        return {
            token: BEl(o, n)
        };
    }
    return n === "|" ? {
        token: kqg(n)
    } : SIi.test(n) ? {
        tokens: Uqg(n)
    } : {
        token: y9e(b9t(n), n)
    };
}
function yqg(e, t, n) {
    const i = [
        $El(t[1] === "^", t)
    ];
    let r = 1, s;
    for(kIi.lastIndex = n; s = kIi.exec(e);){
        const o = s[0];
        if (o[0] === "[" && o[1] !== ":") r++, i.push($El(o[1] === "^", o));
        else if (o === "]") {
            if (i.at(-1).type === "CharacterClassOpen") i.push(y9e(93, o));
            else if (r--, i.push(wqg(o)), !r) break;
        } else {
            const a = Sqg(o);
            Array.isArray(a) ? i.push(...a) : i.push(a);
        }
    }
    return {
        tokens: i,
        lastIndex: kIi.lastIndex || e.length
    };
}
function Sqg(e) {
    if (e[0] === "\\") return FEl(e, {
        inCharClass: !0
    });
    if (e[0] === "[") {
        const t = /\[:(?<negate>\^?)(?<name>[a-z]+):\]/.exec(e);
        if (!t || !yIi.has(t.groups.name)) throw new Error(`Invalid POSIX class "${e}"`);
        return Uft("posix", e, {
            value: t.groups.name,
            negate: !!t.groups.negate
        });
    }
    return e === "-" ? Cqg(e) : e === "&&" ? Tqg(e) : y9e(b9t(e), e);
}
function FEl(e, { inCharClass: t }) {
    const n = e[1];
    if (n === "c" || n === "C") return Dqg(e);
    if ("dDhHsSwW".includes(n)) return Lqg(e);
    if (e.startsWith(a$`\o{`)) throw new Error(`Incomplete, invalid, or unsupported octal code point "${e}"`);
    if (/^\\[pP]\{/.test(e)) {
        if (e.length === 3) throw new Error(`Incomplete or invalid Unicode property "${e}"`);
        return Nqg(e);
    }
    if (/^\\x[89A-Fa-f]\p{AHex}/u.test(e)) try {
        const i = e.split(/\\x/).slice(1).map((o)=>parseInt(o, 16)), r = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }).decode(new Uint8Array(i)), s = new TextEncoder;
        return [
            ...r
        ].map((o)=>{
            const a = [
                ...s.encode(o)
            ].map((c)=>`\\x${c.toString(16)}`).join("");
            return y9e(b9t(o), a);
        });
    } catch  {
        throw new Error(`Multibyte code "${e}" incomplete or invalid in Oniguruma`);
    }
    if (n === "u" || n === "x") return y9e(Fqg(e), e);
    if (tSs.has(n)) return y9e(tSs.get(n), e);
    if (/\d/.test(n)) return Eqg(t, e);
    if (e === "\\") throw new Error(a$`Incomplete escape "\"`);
    if (n === "M") throw new Error(`Unsupported meta "${e}"`);
    if ([
        ...e
    ].length === 2) return y9e(e.codePointAt(1), e);
    throw new Error(`Unexpected escape "${e}"`);
}
function kqg(e) {
    return {
        type: "Alternator",
        raw: e
    };
}
function BEl(e, t) {
    return {
        type: "Assertion",
        kind: e,
        raw: t
    };
}
function UEl(e) {
    return {
        type: "Backreference",
        raw: e
    };
}
function y9e(e, t) {
    return {
        type: "Character",
        value: e,
        raw: t
    };
}
function wqg(e) {
    return {
        type: "CharacterClassClose",
        raw: e
    };
}
function Cqg(e) {
    return {
        type: "CharacterClassHyphen",
        raw: e
    };
}
function Tqg(e) {
    return {
        type: "CharacterClassIntersector",
        raw: e
    };
}
function $El(e, t) {
    return {
        type: "CharacterClassOpen",
        negate: e,
        raw: t
    };
}
function Uft(e, t, n = {}) {
    return {
        type: "CharacterSet",
        kind: e,
        ...n,
        raw: t
    };
}
function HEl(e, t, n = {}) {
    return e === "keep" ? {
        type: "Directive",
        kind: e,
        raw: t
    } : {
        type: "Directive",
        kind: e,
        flags: y9t(n.flags),
        raw: t
    };
}
function Eqg(e, t) {
    return {
        type: "EscapedNumber",
        inCharClass: e,
        raw: t
    };
}
function xqg(e) {
    return {
        type: "GroupClose",
        raw: e
    };
}
function S9t(e, t, n = {}) {
    return {
        type: "GroupOpen",
        kind: e,
        ...n,
        raw: t
    };
}
function Iqg(e, t, n, i) {
    return {
        type: "NamedCallout",
        kind: e,
        tag: t,
        arguments: n,
        raw: i
    };
}
function Aqg(e, t, n, i) {
    return {
        type: "Quantifier",
        kind: e,
        min: t,
        max: n,
        raw: i
    };
}
function Rqg(e) {
    return {
        type: "Subroutine",
        raw: e
    };
}
function Dqg(e) {
    const t = e[1] === "c" ? e[2] : e[3];
    if (!t || !/[A-Za-z]/.test(t)) throw new Error(`Unsupported control character "${e}"`);
    return y9e(b9t(t.toUpperCase()) - 64, e);
}
function Mqg(e, t) {
    let { on: n, off: i } = /^\(\?(?<on>[imx]*)(?:-(?<off>[-imx]*))?/.exec(e).groups;
    i ?? (i = "");
    const r = (t.getCurrentModX() || n.includes("x")) && !i.includes("x"), s = GEl(n), o = GEl(i), a = {};
    if (s && (a.enable = s), o && (a.disable = o), e.endsWith(")")) return t.replaceCurrentModX(r), HEl("flags", e, {
        flags: a
    });
    if (e.endsWith(":")) return t.pushModX(r), t.numOpenGroups++, S9t("group", e, {
        ...(s || o) && {
            flags: a
        }
    });
    throw new Error(`Unexpected flag modifier "${e}"`);
}
function Pqg(e) {
    const t = /\(\*(?<name>[A-Za-z_]\w*)?(?:\[(?<tag>(?:[A-Za-z_]\w*)?)\])?(?:\{(?<args>[^}]*)\})?\)/.exec(e);
    if (!t) throw new Error(`Incomplete or invalid named callout "${e}"`);
    const { name: n, tag: i, args: r } = t.groups;
    if (!n) throw new Error(`Invalid named callout "${e}"`);
    if (i === "") throw new Error(`Named callout tag with empty value not allowed "${e}"`);
    const s = r ? r.split(",").filter((u)=>u !== "").map((u)=>/^[+-]?\d+$/.test(u) ? +u : u) : [], [o, a, c] = s, l = VEl.has(n) ? n.toLowerCase() : "custom";
    switch(l){
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
            if (typeof c == "string" && !/^[A-Za-z_]\w*$/.test(c)) throw new Error(`Named callout argument three must be a tag or number "${c}"`);
            break;
        case "custom":
            throw new Error(`Undefined callout name "${n}"`);
        default:
            throw new Error(`Unexpected named callout kind "${l}"`);
    }
    return Iqg(l, i ?? null, r?.split(",") ?? null, e);
}
function WEl(e) {
    let t = null, n, i;
    if (e[0] === "{") {
        const { minStr: r, maxStr: s } = /^\{(?<minStr>\d*)(?:,(?<maxStr>\d*))?/.exec(e).groups, o = 1e5;
        if (+r > o || s && +s > o) throw new Error("Quantifier value unsupported in Oniguruma");
        if (n = +r, i = s === void 0 ? +r : s === "" ? 1 / 0 : +s, n > i && (t = "possessive", [n, i] = [
            i,
            n
        ]), e.endsWith("?")) {
            if (t === "possessive") throw new Error('Unsupported possessive interval quantifier chain with "?"');
            t = "lazy";
        } else t || (t = "greedy");
    } else n = e[0] === "+" ? 1 : 0, i = e[0] === "?" ? 1 : 1 / 0, t = e[1] === "+" ? "possessive" : e[1] === "?" ? "lazy" : "greedy";
    return Aqg(t, n, i, e);
}
function Lqg(e) {
    const t = e[1].toLowerCase();
    return Uft({
        d: "digit",
        h: "hex",
        s: "space",
        w: "word"
    }[t], e, {
        negate: e[1] !== t
    });
}
function Nqg(e) {
    const { p: t, neg: n, value: i } = /^\\(?<p>[pP])\{(?<neg>\^?)(?<value>[^}]+)/.exec(e).groups;
    return Uft("property", e, {
        value: i,
        negate: t === "P" && !n || t === "p" && !!n
    });
}
function GEl(e) {
    const t = {};
    return e.includes("i") && (t.ignoreCase = !0), e.includes("m") && (t.dotAll = !0), e.includes("x") && (t.extended = !0), Object.keys(t).length ? t : null;
}
function Oqg(e) {
    const t = {
        ignoreCase: !1,
        dotAll: !1,
        extended: !1,
        digitIsAscii: !1,
        posixIsAscii: !1,
        spaceIsAscii: !1,
        wordIsAscii: !1,
        textSegmentMode: null
    };
    for(let n = 0; n < e.length; n++){
        const i = e[n];
        if (!"imxDPSWy".includes(i)) throw new Error(`Invalid flag "${i}"`);
        if (i === "y") {
            if (!/^y{[gw]}/.test(e.slice(n))) throw new Error('Invalid or unspecified flag "y" mode');
            t.textSegmentMode = e[n + 2] === "g" ? "grapheme" : "word", n += 3;
            continue;
        }
        t[{
            i: "ignoreCase",
            m: "dotAll",
            x: "extended",
            D: "digitIsAscii",
            P: "posixIsAscii",
            S: "spaceIsAscii",
            W: "wordIsAscii"
        }[i]] = !0;
    }
    return t;
}
function Fqg(e) {
    if (/^(?:\\u(?!\p{AHex}{4})|\\x(?!\p{AHex}{1,2}|\{\p{AHex}{1,8}\}))/u.test(e)) throw new Error(`Incomplete or invalid escape "${e}"`);
    const t = e[2] === "{" ? /^\\x\{\s*(?<hex>\p{AHex}+)/u.exec(e).groups.hex : e.slice(2);
    return parseInt(t, 16);
}
function Bqg(e, t) {
    const { raw: n, inCharClass: i } = e, r = n.slice(1);
    if (!i && (r !== "0" && r.length === 1 || r[0] !== "0" && +r <= t)) return [
        UEl(n)
    ];
    const s = [], o = r.match(/^[0-7]+|\d/g);
    for(let a = 0; a < o.length; a++){
        const c = o[a];
        let l;
        if (a === 0 && c !== "8" && c !== "9") {
            if (l = parseInt(c, 8), l > 127) throw new Error(a$`Octal encoded byte above 177 unsupported "${n}"`);
        } else l = b9t(c);
        s.push(y9e(l, (a === 0 ? "\\" : "") + c));
    }
    return s;
}
function Uqg(e) {
    const t = [], n = new RegExp(SIi, "gy");
    let i;
    for(; i = n.exec(e);){
        const r = i[0];
        if (r[0] === "{") {
            const s = /^\{(?<min>\d+),(?<max>\d+)\}\??$/.exec(r);
            if (s) {
                const { min: o, max: a } = s.groups;
                if (+o > +a && r.endsWith("?")) {
                    n.lastIndex--, t.push(WEl(r.slice(0, -1)));
                    continue;
                }
            }
        }
        t.push(WEl(r));
    }
    return t;
}
export function jEl(e, t) {
    if (!Array.isArray(e.body)) throw new Error("Expected node with body array");
    if (e.body.length !== 1) return !1;
    const n = e.body[0];
    return !t || Object.keys(t).every((i)=>t[i] === n[i]);
}
function Hqg(e) {
    return qEl.has(e.type);
}
function KEl(e, t = {}) {
    const n = {
        flags: "",
        normalizeUnknownPropertyNames: !1,
        skipBackrefValidation: !1,
        skipLookbehindValidation: !1,
        skipPropertyNameValidation: !1,
        unicodePropertyMap: null,
        ...t,
        rules: {
            captureGroup: !1,
            singleline: !1,
            ...t.rules
        }
    }, i = _qg(e, {
        flags: n.flags,
        rules: {
            captureGroup: n.rules.captureGroup,
            singleline: n.rules.singleline
        }
    }), r = (p, g)=>{
        const f = i.tokens[s.nextIndex];
        switch(s.parent = p, s.nextIndex++, f.type){
            case "Alternator":
                return $ft();
            case "Assertion":
                return Wqg(f);
            case "Backreference":
                return Gqg(f, s);
            case "Character":
                return wIi(f.value, {
                    useLastValid: !!g.isCheckingRangeEnd
                });
            case "CharacterClassHyphen":
                return Vqg(f, s, g);
            case "CharacterClassOpen":
                return jqg(f, s, g);
            case "CharacterSet":
                return qqg(f, s);
            case "Directive":
                return Qqg(f.kind, {
                    flags: f.flags
                });
            case "GroupOpen":
                return zqg(f, s, g);
            case "NamedCallout":
                return ezg(f.kind, f.tag, f.arguments);
            case "Quantifier":
                return Kqg(f, s);
            case "Subroutine":
                return Yqg(f, s);
            default:
                throw new Error(`Unexpected token type "${f.type}"`);
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
    }, o = nzg(Jqg(i.flags));
    let a = o.body[0];
    for(; s.nextIndex < i.tokens.length;){
        const p = r(a, {});
        p.type === "Alternative" ? (o.body.push(p), a = p) : a.body.push(p);
    }
    const { capturingGroups: c, hasNumberedRef: l, namedGroupsByName: u, subroutines: h } = s;
    if (l && u.size && !n.rules.captureGroup) throw new Error("Numbered backref/subroutine not allowed when using named capture");
    for (const { ref: p } of h)if (typeof p == "number") {
        if (p > c.length) throw new Error("Subroutine uses a group number that's not defined");
        p && (c[p - 1].isSubroutined = !0);
    } else if (u.has(p)) {
        if (u.get(p).length > 1) throw new Error(a$`Subroutine uses a duplicate group name "\g<${p}>"`);
        u.get(p)[0].isSubroutined = !0;
    } else throw new Error(a$`Subroutine uses a group name that's not defined "\g<${p}>"`);
    return o;
}
function Wqg({ kind: e }) {
    return nSs(y9t({
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
    }[e], `Unexpected assertion kind "${e}"`), {
        negate: e === a$`\B` || e === a$`\Y`
    });
}
function Gqg({ raw: e }, t) {
    const n = /^\\k[<']/.test(e), i = n ? e.slice(3, -1) : e.slice(1), r = (s, o = !1)=>{
        const a = t.capturingGroups.length;
        let c = !1;
        if (s > a) if (t.skipBackrefValidation) c = !0;
        else throw new Error(`Not enough capturing groups defined to the left "${e}"`);
        return t.hasNumberedRef = !0, iSs(o ? a + 1 - s : s, {
            orphan: c
        });
    };
    if (n) {
        const s = /^(?<sign>-?)0*(?<num>[1-9]\d*)$/.exec(i);
        if (s) return r(+s.groups.num, !!s.groups.sign);
        if (/[-+]/.test(i)) throw new Error(`Invalid backref name "${e}"`);
        if (!t.namedGroupsByName.has(i)) throw new Error(`Group name not defined to the left "${e}"`);
        return iSs(i);
    }
    return r(+i);
}
function Vqg(e, t, n) {
    const { tokens: i, walk: r } = t, s = t.parent, o = s.body.at(-1), a = i[t.nextIndex];
    if (!n.isCheckingRangeEnd && o && o.type !== "CharacterClass" && o.type !== "CharacterClassRange" && a && a.type !== "CharacterClassOpen" && a.type !== "CharacterClassClose" && a.type !== "CharacterClassIntersector") {
        const c = r(s, {
            ...n,
            isCheckingRangeEnd: !0
        });
        if (o.type === "Character" && c.type === "Character") return s.body.pop(), Zqg(o, c);
        throw new Error("Invalid character class range");
    }
    return wIi(b9t("-"));
}
function jqg({ negate: e }, t, n) {
    const { tokens: i, walk: r } = t, s = i[t.nextIndex], o = [
        CIi()
    ];
    let a = txl(s);
    for(; a.type !== "CharacterClassClose";){
        if (a.type === "CharacterClassIntersector") o.push(CIi()), t.nextIndex++;
        else {
            const l = o.at(-1);
            l.body.push(r(l, n));
        }
        a = txl(i[t.nextIndex], s);
    }
    const c = CIi({
        negate: e
    });
    return o.length === 1 ? c.body = o[0].body : (c.kind = "intersection", c.body = o.map((l)=>l.body.length === 1 ? l.body[0] : l)), t.nextIndex++, c;
}
function qqg({ kind: e, negate: t, value: n }, i) {
    const { normalizeUnknownPropertyNames: r, skipPropertyNameValidation: s, unicodePropertyMap: o } = i;
    if (e === "property") {
        const a = TIi(n);
        if (yIi.has(a) && !o?.has(a)) e = "posix", n = a;
        else return k9t(n, {
            negate: t,
            normalizeUnknownPropertyNames: r,
            skipPropertyNameValidation: s,
            unicodePropertyMap: o
        });
    }
    return e === "posix" ? tzg(n, {
        negate: t
    }) : rSs(e, {
        negate: t
    });
}
function zqg(e, t, n) {
    const { tokens: i, capturingGroups: r, namedGroupsByName: s, skipLookbehindValidation: o, walk: a } = t, c = izg(e), l = c.type === "AbsenceFunction", u = exl(c), h = u && c.negate;
    if (c.type === "CapturingGroup" && (r.push(c), c.name && vqg(s, c.name, []).push(c)), l && n.isInAbsenceFunction) throw new Error("Nested absence function not supported by Oniguruma");
    let p = nxl(i[t.nextIndex]);
    for(; p.type !== "GroupClose";){
        if (p.type === "Alternator") c.body.push($ft()), t.nextIndex++;
        else {
            const g = c.body.at(-1), f = a(g, {
                ...n,
                isInAbsenceFunction: n.isInAbsenceFunction || l,
                isInLookbehind: n.isInLookbehind || u,
                isInNegLookbehind: n.isInNegLookbehind || h
            });
            if (g.body.push(f), (u || n.isInLookbehind) && !o) {
                const v = "Lookbehind includes a pattern not allowed by Oniguruma";
                if (h || n.isInNegLookbehind) {
                    if (JEl(f) || f.type === "CapturingGroup") throw new Error(v);
                } else if (JEl(f) || exl(f) && f.negate) throw new Error(v);
            }
        }
        p = nxl(i[t.nextIndex]);
    }
    return t.nextIndex++, c;
}
function Kqg({ kind: e, min: t, max: n }, i) {
    const r = i.parent, s = r.body.at(-1);
    if (!s || !Hqg(s)) throw new Error("Quantifier requires a repeatable token");
    const o = XEl(e, t, n, s);
    return r.body.pop(), o;
}
function Yqg({ raw: e }, t) {
    const { capturingGroups: n, subroutines: i } = t;
    let r = e.slice(3, -1);
    const s = /^(?<sign>[-+]?)0*(?<num>[1-9]\d*)$/.exec(r);
    if (s) {
        const a = +s.groups.num, c = n.length;
        if (t.hasNumberedRef = !0, r = {
            "": a,
            "+": c + a,
            "-": c + 1 - a
        }[s.groups.sign], r < 1) throw new Error("Invalid subroutine number");
    } else r === "0" && (r = 0);
    const o = ZEl(r);
    return i.push(o), o;
}
function Xqg(e, t) {
    if (e !== "repeater") throw new Error(`Unexpected absence function kind "${e}"`);
    return {
        type: "AbsenceFunction",
        kind: e,
        body: rCn(t?.body)
    };
}
export function $ft(e) {
    return {
        type: "Alternative",
        body: QEl(e?.body)
    };
}
export function nSs(e, t) {
    const n = {
        type: "Assertion",
        kind: e
    };
    return (e === "word_boundary" || e === "text_segment_boundary") && (n.negate = !!t?.negate), n;
}
export function iSs(e, t) {
    const n = !!t?.orphan;
    return {
        type: "Backreference",
        ref: e,
        ...n && {
            orphan: n
        }
    };
}
export function YEl(e, t) {
    const n = {
        name: void 0,
        isSubroutined: !1,
        ...t
    };
    if (n.name !== void 0 && !rzg(n.name)) throw new Error(`Group name "${n.name}" invalid in Oniguruma`);
    return {
        type: "CapturingGroup",
        number: e,
        ...n.name && {
            name: n.name
        },
        ...n.isSubroutined && {
            isSubroutined: n.isSubroutined
        },
        body: rCn(t?.body)
    };
}
export function wIi(e, t) {
    const n = {
        useLastValid: !1,
        ...t
    };
    if (e > 1114111) {
        const i = e.toString(16);
        if (n.useLastValid) e = 1114111;
        else throw e > 1310719 ? new Error(`Invalid code point out of range "\\x{${i}}"`) : new Error(`Invalid code point out of range in JS "\\x{${i}}"`);
    }
    return {
        type: "Character",
        value: e
    };
}
export function CIi(e) {
    const t = {
        kind: "union",
        negate: !1,
        ...e
    };
    return {
        type: "CharacterClass",
        kind: t.kind,
        negate: t.negate,
        body: QEl(e?.body)
    };
}
function Zqg(e, t) {
    if (t.value < e.value) throw new Error("Character class range out of order");
    return {
        type: "CharacterClassRange",
        min: e,
        max: t
    };
}
export function rSs(e, t) {
    const n = !!t?.negate, i = {
        type: "CharacterSet",
        kind: e
    };
    return (e === "digit" || e === "hex" || e === "newline" || e === "space" || e === "word") && (i.negate = n), (e === "text_segment" || e === "newline" && !n) && (i.variableLength = !0), i;
}
function Qqg(e, t = {}) {
    if (e === "keep") return {
        type: "Directive",
        kind: e
    };
    if (e === "flags") return {
        type: "Directive",
        kind: e,
        flags: y9t(t.flags)
    };
    throw new Error(`Unexpected directive kind "${e}"`);
}
function Jqg(e) {
    return {
        type: "Flags",
        ...e
    };
}
export function DCe(e) {
    const t = e?.atomic, n = e?.flags;
    if (t && n) throw new Error("Atomic group cannot have flags");
    return {
        type: "Group",
        ...t && {
            atomic: t
        },
        ...n && {
            flags: n
        },
        body: rCn(e?.body)
    };
}
export function Hft(e) {
    const t = {
        behind: !1,
        negate: !1,
        ...e
    };
    return {
        type: "LookaroundAssertion",
        kind: t.behind ? "lookbehind" : "lookahead",
        negate: t.negate,
        body: rCn(e?.body)
    };
}
function ezg(e, t, n) {
    return {
        type: "NamedCallout",
        kind: e,
        tag: t,
        arguments: n
    };
}
function tzg(e, t) {
    const n = !!t?.negate;
    if (!yIi.has(e)) throw new Error(`Invalid POSIX class "${e}"`);
    return {
        type: "CharacterSet",
        kind: "posix",
        value: e,
        negate: n
    };
}
export function XEl(e, t, n, i) {
    if (t > n) throw new Error("Invalid reversed quantifier range");
    return {
        type: "Quantifier",
        kind: e,
        min: t,
        max: n,
        body: i
    };
}
function nzg(e, t) {
    return {
        type: "Regex",
        body: rCn(t?.body),
        flags: e
    };
}
function ZEl(e) {
    return {
        type: "Subroutine",
        ref: e
    };
}
export function k9t(e, t) {
    const n = {
        negate: !1,
        normalizeUnknownPropertyNames: !1,
        skipPropertyNameValidation: !1,
        unicodePropertyMap: null,
        ...t
    };
    let i = n.unicodePropertyMap?.get(TIi(e));
    if (!i) {
        if (n.normalizeUnknownPropertyNames) i = szg(e);
        else if (n.unicodePropertyMap && !n.skipPropertyNameValidation) throw new Error(a$`Invalid Unicode property "\p{${e}}"`);
    }
    return {
        type: "CharacterSet",
        kind: "property",
        value: i ?? e,
        negate: n.negate
    };
}
function izg({ flags: e, kind: t, name: n, negate: i, number: r }) {
    switch(t){
        case "absence_repeater":
            return Xqg("repeater");
        case "atomic":
            return DCe({
                atomic: !0
            });
        case "capturing":
            return YEl(r, {
                name: n
            });
        case "group":
            return DCe({
                flags: e
            });
        case "lookahead":
        case "lookbehind":
            return Hft({
                behind: t === "lookbehind",
                negate: i
            });
        default:
            throw new Error(`Unexpected group kind "${t}"`);
    }
}
function rCn(e) {
    if (e === void 0) e = [
        $ft()
    ];
    else if (!Array.isArray(e) || !e.length || !e.every((t)=>t.type === "Alternative")) throw new Error("Invalid body; expected array of one or more Alternative nodes");
    return e;
}
function QEl(e) {
    if (e === void 0) e = [];
    else if (!Array.isArray(e) || !e.every((t)=>!!t.type)) throw new Error("Invalid body; expected array of nodes");
    return e;
}
function JEl(e) {
    return e.type === "LookaroundAssertion" && e.kind === "lookahead";
}
function exl(e) {
    return e.type === "LookaroundAssertion" && e.kind === "lookbehind";
}
function rzg(e) {
    return /^[\p{Alpha}\p{Pc}][^)]*$/u.test(e);
}
function szg(e) {
    return e.trim().replace(/[- _]+/g, "_").replace(/[A-Z][a-z]+(?=[A-Z])/g, "$&_").replace(/[A-Za-z]+/g, (t)=>t[0].toUpperCase() + t.slice(1).toLowerCase());
}
export function TIi(e) {
    return e.replace(/[- _]+/g, "").toLowerCase();
}
function txl(e, t) {
    return y9t(e, `${t?.type === "Character" && t.value === 93 ? "Empty" : "Unclosed"} character class`);
}
function nxl(e) {
    return y9t(e, "Unclosed group");
}
function sCn(e, t, n = null) {
    function i(s, o) {
        for(let a = 0; a < s.length; a++){
            const c = r(s[a], o, a, s);
            a = Math.max(-1, a + c);
        }
    }
    function r(s, o = null, a = null, c = null) {
        let l = 0, u = !1;
        const h = {
            node: s,
            parent: o,
            key: a,
            container: c,
            root: e,
            remove () {
                EIi(c).splice(Math.max(0, w9t(a) + l), 1), l--, u = !0;
            },
            removeAllNextSiblings () {
                return EIi(c).splice(w9t(a) + 1);
            },
            removeAllPrevSiblings () {
                const y = w9t(a) + l;
                return l -= y, EIi(c).splice(0, Math.max(0, y));
            },
            replaceWith (y, T = {}) {
                const E = !!T.traverse;
                c ? c[Math.max(0, w9t(a) + l)] = y : y9t(o, "Can't replace root node")[a] = y, E && r(y, o, a, c), u = !0;
            },
            replaceWithMultiple (y, T = {}) {
                const E = !!T.traverse;
                if (EIi(c).splice(Math.max(0, w9t(a) + l), 1, ...y), l += y.length - 1, E) {
                    let A = 0;
                    for(let R = 0; R < y.length; R++)A += r(y[R], o, w9t(a) + R + A, c);
                }
                u = !0;
            },
            skip () {
                u = !0;
            }
        }, { type: p } = s, g = t["*"], f = t[p], v = typeof g == "function" ? g : g?.enter, b = typeof f == "function" ? f : f?.enter;
        if (v?.(h, n), b?.(h, n), !u) switch(p){
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
                throw new Error(`Unexpected node type "${p}"`);
        }
        return f?.exit?.(h, n), g?.exit?.(h, n), l;
    }
    return r(e), e;
}
function EIi(e) {
    if (!Array.isArray(e)) throw new Error("Container expected");
    return e;
}
function w9t(e) {
    if (typeof e != "number") throw new Error("Numeric key expected");
    return e;
}
function czg(e, t) {
    for(let n = 0; n < e.length; n++)e[n] >= t && e[n]++;
}
function lzg(e, t, n, i) {
    return e.slice(0, t) + i + e.slice(t + n.length);
}
function sSs(e, t, n, i) {
    const r = new RegExp(String.raw`${t}|(?<$skip>\[\^?|\\?.)`, "gsu"), s = [
        !1
    ];
    let o = 0, a = "";
    for (const c of e.matchAll(r)){
        const { 0: l, groups: { $skip: u } } = c;
        if (!u && (!i || i === lue.DEFAULT == !o)) {
            n instanceof Function ? a += n(c, {
                context: o ? lue.CHAR_CLASS : lue.DEFAULT,
                negated: s[s.length - 1]
            }) : a += n;
            continue;
        }
        l[0] === "[" ? (o++, s.push(l[1] === "^")) : l === "]" && o && (o--, s.pop()), a += l;
    }
    return a;
}
function rxl(e, t, n, i) {
    sSs(e, t, n, i);
}
function dzg(e, t, n = 0, i) {
    if (!new RegExp(t, "su").test(e)) return null;
    const r = new RegExp(`${t}|(?<$skip>\\\\?.)`, "gsu");
    r.lastIndex = n;
    let s = 0, o;
    for(; o = r.exec(e);){
        const { 0: a, groups: { $skip: c } } = o;
        if (!c && (!i || i === lue.DEFAULT == !s)) return o;
        a === "[" ? s++ : a === "]" && s && s--, r.lastIndex == o.index && r.lastIndex++;
    }
    return null;
}
function xIi(e, t, n) {
    return !!dzg(e, t, 0, n);
}
function hzg(e, t) {
    const n = /\\?./gsu;
    n.lastIndex = t;
    let i = e.length, r = 0, s = 1, o;
    for(; o = n.exec(e);){
        const [a] = o;
        if (a === "[") r++;
        else if (r) a === "]" && r--;
        else if (a === "(") s++;
        else if (a === ")" && (s--, !s)) {
            i = o.index;
            break;
        }
    }
    return e.slice(t, i);
}
function pzg(e, t) {
    const n = t?.hiddenCaptures ?? [];
    let i = t?.captureTransfers ?? new Map;
    if (!/\(\?>/.test(e)) return {
        pattern: e,
        captureTransfers: i,
        hiddenCaptures: n
    };
    const r = "(?>", s = "(?:(?=(", o = [
        0
    ], a = [];
    let c = 0, l = 0, u = NaN, h;
    do {
        h = !1;
        let p = 0, g = 0, f = !1, v;
        for(oSs.lastIndex = Number.isNaN(u) ? 0 : u + s.length; v = oSs.exec(e);){
            const { 0: b, index: y, groups: { capturingStart: T, noncapturingStart: E } } = v;
            if (b === "[") p++;
            else if (p) b === "]" && p--;
            else if (b === r && !f) u = y, f = !0;
            else if (f && E) g++;
            else if (T) f ? g++ : (c++, o.push(c + l));
            else if (b === ")" && f) {
                if (!g) {
                    l++;
                    const A = c + l;
                    if (e = `${e.slice(0, u)}${s}${e.slice(u + r.length, y)}))<$$${A}>)${e.slice(y + 1)}`, h = !0, a.push(A), czg(n, A), i.size) {
                        const R = new Map;
                        i.forEach((D, P)=>{
                            R.set(P >= A ? P + 1 : P, D.map((N)=>N >= A ? N + 1 : N));
                        }), i = R;
                    }
                    break;
                }
                g--;
            }
        }
    }while (h)
    return n.push(...a), e = sSs(e, String.raw`\\(?<backrefNum>[1-9]\d*)|<\$\$(?<wrappedBackrefNum>\d+)>`, ({ 0: p, groups: { backrefNum: g, wrappedBackrefNum: f } })=>{
        if (g) {
            const v = +g;
            if (v > o.length - 1) throw new Error(`Backref "${p}" greater than number of captures`);
            return `\\${o[v]}`;
        }
        return `\\${f}`;
    }, lue.DEFAULT), {
        pattern: e,
        captureTransfers: i,
        hiddenCaptures: n
    };
}
function mzg(e) {
    if (!new RegExp(`${aSs}\\+`).test(e)) return {
        pattern: e
    };
    const t = [];
    let n = null, i = null, r = "", s = 0, o;
    for(IIi.lastIndex = 0; o = IIi.exec(e);){
        const { 0: a, index: c, groups: { qBase: l, qMod: u, invalidQ: h } } = o;
        if (a === "[") s || (i = c), s++;
        else if (a === "]") s ? s-- : i = null;
        else if (!s) if (u === "+" && r && !r.startsWith("(")) {
            if (h) throw new Error(`Invalid quantifier "${a}"`);
            let p = -1;
            if (/^\{\d+\}$/.test(l)) e = lzg(e, c + l.length, u, "");
            else {
                if (r === ")" || r === "]") {
                    const g = r === ")" ? n : i;
                    if (g === null) throw new Error(`Invalid unmatched "${r}"`);
                    e = `${e.slice(0, g)}(?>${e.slice(g, c)}${l})${e.slice(c + a.length)}`;
                } else e = `${e.slice(0, c - r.length)}(?>${r}${l})${e.slice(c + a.length)}`;
                p += 4;
            }
            IIi.lastIndex += p;
        } else a[0] === "(" ? t.push(c) : a === ")" && (n = t.length ? t.pop() : null);
        r = a;
    }
    return {
        pattern: e
    };
}
function vzg(e, t) {
    const { hiddenCaptures: n, mode: i } = {
        hiddenCaptures: [],
        mode: "plugin",
        ...t
    };
    let r = t?.captureTransfers ?? new Map;
    if (!new RegExp(AIi, "su").test(e)) return {
        pattern: e,
        captureTransfers: r,
        hiddenCaptures: n
    };
    if (i === "plugin" && xIi(e, uue`\(\?\(DEFINE\)`, lue.DEFAULT)) throw new Error("DEFINE groups cannot be used with recursion");
    const s = [], o = xIi(e, uue`\\[1-9]`, lue.DEFAULT), a = new Map, c = [];
    let l = !1, u = 0, h = 0, p;
    for(qYe.lastIndex = 0; p = qYe.exec(e);){
        const { 0: g, groups: { captureName: f, rDepth: v, gRNameOrNum: b, gRDepth: y } } = p;
        if (g === "[") u++;
        else if (u) g === "]" && u--;
        else if (v) {
            if (axl(v), l) throw new Error(RIi);
            if (o) throw new Error(`${i === "external" ? "Backrefs" : "Numbered backrefs"} cannot be used with global recursion`);
            const T = e.slice(0, p.index), E = e.slice(qYe.lastIndex);
            if (xIi(E, AIi, lue.DEFAULT)) throw new Error(RIi);
            const A = +v - 1;
            e = cxl(T, E, A, !1, n, s, h), r = uxl(r, T, A, s.length, 0, h);
            break;
        } else if (b) {
            axl(y);
            let T = !1;
            for (const $ of c)if ($.name === b || $.num === +b) {
                if (T = !0, $.hasRecursedWithin) throw new Error(RIi);
                break;
            }
            if (!T) throw new Error(uue`Recursive \g cannot be used outside the referenced group "${i === "external" ? b : uue`\g<${b}&R=${y}>`}"`);
            const E = a.get(b), A = hzg(e, E);
            if (o && xIi(A, uue`${oCn}|\((?!\?)`, lue.DEFAULT)) throw new Error(`${i === "external" ? "Backrefs" : "Numbered backrefs"} cannot be used with recursion of capturing groups`);
            const R = e.slice(E, p.index), D = A.slice(R.length + g.length), P = s.length, N = +y - 1, O = cxl(R, D, N, !0, n, s, h);
            r = uxl(r, R, N, s.length - P, P, h);
            const F = e.slice(0, E), H = e.slice(E + A.length);
            e = `${F}${O}${H}`, qYe.lastIndex += O.length - g.length - R.length - D.length, c.forEach(($)=>$.hasRecursedWithin = !0), l = !0;
        } else if (f) h++, a.set(String(h), qYe.lastIndex), a.set(f, qYe.lastIndex), c.push({
            num: h,
            name: f
        });
        else if (g[0] === "(") {
            const T = g === "(";
            T && (h++, a.set(String(h), qYe.lastIndex)), c.push(T ? {
                num: h
            } : {});
        } else g === ")" && c.pop();
    }
    return n.push(...s), {
        pattern: e,
        captureTransfers: r,
        hiddenCaptures: n
    };
}
function axl(e) {
    const t = `Max depth must be integer between 2 and 100; used ${e}`;
    if (!/^[1-9]\d*$/.test(e)) throw new Error(t);
    if (e = +e, e < 2 || e > 100) throw new Error(t);
}
function cxl(e, t, n, i, r, s, o) {
    const a = new Set;
    i && rxl(e + t, oCn, ({ groups: { captureName: l } })=>{
        a.add(l);
    }, lue.DEFAULT);
    const c = [
        n,
        i ? a : null,
        r,
        s,
        o
    ];
    return `${e}${lxl(`(?:${e}`, "forward", ...c)}(?:)${lxl(`${t})`, "backward", ...c)}${t}`;
}
function lxl(e, t, n, i, r, s, o) {
    const c = (u)=>t === "forward" ? u + 2 : n - u + 2 - 1;
    let l = "";
    for(let u = 0; u < n; u++){
        const h = c(u);
        l += sSs(e, uue`${cSs}|\\k<(?<backref>[^>]+)>`, ({ 0: p, groups: { captureName: g, unnamed: f, backref: v } })=>{
            if (v && i && !i.has(v)) return p;
            const b = `_$${h}`;
            if (f || g) {
                const y = o + s.length + 1;
                return s.push(y), _zg(r, y), f ? p : `(?<${g}${b}>`;
            }
            return uue`\k<${v}${b}>`;
        }, lue.DEFAULT);
    }
    return l;
}
function _zg(e, t) {
    for(let n = 0; n < e.length; n++)e[n] >= t && e[n]++;
}
function uxl(e, t, n, i, r, s) {
    if (e.size && i) {
        let o = 0;
        rxl(t, cSs, ()=>o++, lue.DEFAULT);
        const a = s - o + r, c = new Map;
        return e.forEach((l, u)=>{
            const h = (i - o * n) / n, p = o * n, g = u > a + o ? u + i : u, f = [];
            for (const v of l)if (v <= a) f.push(v);
            else if (v > a + o + h) f.push(v + i);
            else if (v <= a + o) for(let b = 0; b <= n; b++)f.push(v + o * b);
            else for(let b = 0; b <= n; b++)f.push(v + p + h * b);
            c.set(g, f);
        }), c;
    }
    return e;
}
export function DIi(e, { enable: t, disable: n }) {
    return {
        dotAll: !n?.dotAll && !!(t?.dotAll || e.dotAll),
        ignoreCase: !n?.ignoreCase && !!(t?.ignoreCase || e.ignoreCase)
    };
}
export function aCn(e, t, n) {
    return e.has(t) || e.set(t, n), e.get(t);
}
function lSs(e, t) {
    return _Ss[e] >= _Ss[t];
}
function yzg(e, t) {
    if (e == null) throw new Error(t ?? "Value expected");
    return e;
}
function hxl(e = {}) {
    if ({}.toString.call(e) !== "[object Object]") throw new Error("Unexpected options");
    if (e.target !== void 0 && !Rxl[e.target]) throw new Error(`Unexpected target "${e.target}"`);
    const t = {
        accuracy: "default",
        avoidSubclass: !1,
        flags: "",
        global: !1,
        hasIndices: !1,
        lazyCompileLength: 1 / 0,
        target: "auto",
        verbose: !1,
        ...e,
        rules: {
            allowOrphanBackrefs: !1,
            asciiWordBoundaries: !1,
            captureGroup: !1,
            recursionLimit: 20,
            singleline: !1,
            ...e.rules
        }
    };
    return t.target === "auto" && (t.target = sDe.flagGroups ? "ES2025" : sDe.unicodeSets ? "ES2024" : "ES2018"), t;
}
export function pxl(e) {
    if (Mxl.has(e)) return [
        e
    ];
    const t = new Set, n = e.toLowerCase(), i = n.toUpperCase(), r = Nxl.get(n), s = Pxl.get(n), o = Lxl.get(n);
    return [
        ...i
    ].length === 1 && t.add(i), o && t.add(o), r && t.add(r), t.add(n), s && t.add(s), [
        ...t
    ];
}
function Szg(e, t) {
    const n = [];
    for(let i = e; i <= t; i++)n.push(i);
    return n;
}
export function zYe(e) {
    const t = IU(e);
    return [
        t.toLowerCase(),
        t
    ];
}
export function uSs(e, t) {
    return Szg(e, t).map((n)=>zYe(n));
}
function kzg(e, t) {
    const n = {
        accuracy: "default",
        asciiWordBoundaries: !1,
        avoidSubclass: !1,
        bestEffortTarget: "ES2025",
        ...t
    };
    mxl(e);
    const i = {
        accuracy: n.accuracy,
        asciiWordBoundaries: n.asciiWordBoundaries,
        avoidSubclass: n.avoidSubclass,
        flagDirectivesByAlt: new Map,
        jsGroupNameMap: new Map,
        minTargetEs2024: lSs(n.bestEffortTarget, "ES2024"),
        passedLookbehind: !1,
        strategy: null,
        subroutineRefMap: new Map,
        supportedGNodes: new Set,
        digitIsAscii: e.flags.digitIsAscii,
        spaceIsAscii: e.flags.spaceIsAscii,
        wordIsAscii: e.flags.wordIsAscii
    };
    sCn(e, Fxl, i);
    const r = {
        dotAll: e.flags.dotAll,
        ignoreCase: e.flags.ignoreCase
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
    sCn(e, Bxl, s);
    const o = {
        groupsByName: s.groupsByName,
        highestOrphanBackref: 0,
        numCapturesToLeft: 0,
        reffedNodesByReferencer: s.reffedNodesByReferencer
    };
    return sCn(e, Uxl, o), e._originMap = s.groupOriginByCopy, e._strategy = i.strategy, e;
}
function mxl(e) {
    sCn(e, {
        "*" ({ node: t, parent: n }) {
            t.parent = n;
        }
    });
}
export function wzg(e, t) {
    return e.dotAll === t.dotAll && e.ignoreCase === t.ignoreCase;
}
export function Czg(e, t) {
    let n = t;
    do {
        if (n.type === "Regex") return !1;
        if (n.type === "Alternative") continue;
        if (n === e) return !1;
        const i = _xl(n.parent);
        for (const r of i){
            if (r === n) break;
            if (r === e || yxl(r, e)) return !0;
        }
    }while (n = n.parent)
    throw new Error("Unexpected path");
}
export function gxl(e, t, n, i) {
    const r = Array.isArray(e) ? [] : {};
    for (const [s, o] of Object.entries(e))s === "parent" ? r.parent = Array.isArray(n) ? i : n : o && typeof o == "object" ? r[s] = gxl(o, t, r, n) : (s === "type" && o === "CapturingGroup" && t.set(r, t.get(e) ?? e), r[s] = o);
    return r;
}
export function fxl(e) {
    const t = ZEl(e);
    return t.isRecursive = !0, t;
}
export function Tzg(e, t) {
    const n = [];
    for(; e = e.parent;)(!t || t(e)) && n.push(e);
    return n;
}
export function dSs(e, t) {
    if (t.has(e)) return t.get(e);
    const n = `$${t.size}_${e.replace(/^[^$_\p{IDS}]|[^$\u200C\u200D\p{IDC}]/ug, "_")}`;
    return t.set(e, n), n;
}
export function vxl(e) {
    const t = [
        "dotAll",
        "ignoreCase"
    ], n = {
        enable: {},
        disable: {}
    };
    return e.forEach(({ flags: i })=>{
        t.forEach((r)=>{
            i.enable?.[r] && (delete n.disable[r], n.enable[r] = !0), i.disable?.[r] && (n.disable[r] = !0);
        });
    }), Object.keys(n.enable).length || delete n.enable, Object.keys(n.disable).length || delete n.disable, n.enable || n.disable ? n : null;
}
export function Ezg({ dotAll: e, ignoreCase: t }) {
    const n = {};
    return (e || t) && (n.enable = {}, e && (n.enable.dotAll = !0), t && (n.enable.ignoreCase = !0)), (!e || !t) && (n.disable = {}, !e && (n.disable.dotAll = !0), !t && (n.disable.ignoreCase = !0)), n;
}
function _xl(e) {
    if (!e) throw new Error("Node expected");
    const { body: t } = e;
    return Array.isArray(t) ? t : t ? [
        t
    ] : null;
}
export function bxl(e) {
    const t = e.find((n)=>n.kind === "search_start" || Azg(n, {
            negate: !1
        }) || !xzg(n));
    if (!t) return null;
    if (t.kind === "search_start") return t;
    if (t.type === "LookaroundAssertion") return t.body[0].body[0];
    if (t.type === "CapturingGroup" || t.type === "Group") {
        const n = [];
        for (const i of t.body){
            const r = bxl(i.body);
            if (!r) return null;
            Array.isArray(r) ? n.push(...r) : n.push(r);
        }
        return n;
    }
    return null;
}
function yxl(e, t) {
    const n = _xl(e) ?? [];
    for (const i of n)if (i === t || yxl(i, t)) return !0;
    return !1;
}
function xzg({ type: e }) {
    return e === "Assertion" || e === "Directive" || e === "LookaroundAssertion";
}
export function Izg(e) {
    const t = [
        "Character",
        "CharacterClass",
        "CharacterSet"
    ];
    return t.includes(e.type) || e.type === "Quantifier" && e.min && t.includes(e.body.type);
}
function Azg(e, t) {
    const n = {
        negate: null,
        ...t
    };
    return e.type === "LookaroundAssertion" && (n.negate === null || e.negate === n.negate) && e.body.length === 1 && jEl(e.body[0], {
        type: "Assertion",
        kind: "search_start"
    });
}
export function hSs(e) {
    return /^[$_\p{IDS}][$\u200C\u200D\p{IDC}]*$/u.test(e);
}
export function S9e(e, t) {
    const i = KEl(e, {
        ...t,
        unicodePropertyMap: LIi
    }).body;
    return i.length > 1 || i[0].body.length > 1 ? DCe({
        body: i
    }) : i[0].body[0];
}
export function pSs(e, t) {
    return e.negate = t, e;
}
export function KYe(e, t) {
    return e.parent = t, e;
}
export function f6(e, t) {
    return mxl(e), e.parent = t, e;
}
function Rzg(e, t) {
    const n = hxl(t), i = lSs(n.target, "ES2024"), r = lSs(n.target, "ES2025"), s = n.rules.recursionLimit;
    if (!Number.isInteger(s) || s < 2 || s > 20) throw new Error("Invalid recursionLimit; use 2-20");
    let o = null, a = null;
    if (!r) {
        const g = [
            e.flags.ignoreCase
        ];
        sCn(e, $xl, {
            getCurrentModI: ()=>g.at(-1),
            popModI () {
                g.pop();
            },
            pushModI (f) {
                g.push(f);
            },
            setHasCasedChar () {
                g.at(-1) ? o = !0 : a = !0;
            }
        });
    }
    const c = {
        dotAll: e.flags.dotAll,
        ignoreCase: !!((e.flags.ignoreCase || o) && !a)
    };
    let l = e;
    const u = {
        accuracy: n.accuracy,
        appliedGlobalFlags: c,
        captureMap: new Map,
        currentFlags: {
            dotAll: e.flags.dotAll,
            ignoreCase: e.flags.ignoreCase
        },
        inCharClass: !1,
        lastNode: l,
        originMap: e._originMap,
        recursionLimit: s,
        useAppliedIgnoreCase: !!(!r && o && a),
        useFlagMods: r,
        useFlagV: i,
        verbose: n.verbose
    };
    function h(g) {
        return u.lastNode = l, l = g, yzg(Hxl[g.type], `Unexpected node type "${g.type}"`)(g, u, h);
    }
    const p = {
        pattern: e.body.map(h).join("|"),
        flags: h(e.flags),
        options: {
            ...e.options
        }
    };
    return i || (delete p.options.force.v, p.options.disable.v = !0, p.options.unicodeSetsPlugin = null), p._captureTransfers = new Map, p._hiddenCaptures = [], u.captureMap.forEach((g, f)=>{
        g.hidden && p._hiddenCaptures.push(f), g.transferTo && aCn(p._captureTransfers, g.transferTo, []).push(f);
    }), p;
}
export function mSs(e) {
    return jxl.test(e);
}
export function Sxl(e, t) {
    const n = !!t?.firstOnly, i = e.min.value, r = e.max.value, s = [];
    if (i < 65 && (r === 65535 || r >= 131071) || i === 65536 && r >= 131071) return s;
    for(let o = i; o <= r; o++){
        const a = IU(o);
        if (!mSs(a)) continue;
        const c = pxl(a).filter((l)=>{
            const u = l.codePointAt(0);
            return u < i || u > r;
        });
        if (c.length && (s.push(...c), n)) break;
    }
    return s;
}
export function C9t(e, { escDigit: t, inCharClass: n, useFlagV: i }) {
    if (ySs.has(e)) return ySs.get(e);
    if (e < 32 || e > 126 && e < 160 || e > 262143 || t && Lzg(e)) return e > 255 ? `\\u{${e.toString(16).toUpperCase()}}` : `\\x${e.toString(16).toUpperCase().padStart(2, "0")}`;
    const r = n ? i ? Vxl : Gxl : Wxl, s = IU(e);
    return (r.has(s) ? "\\" : "") + s;
}
export function Dzg(e) {
    const t = e.map((r)=>r.codePointAt(0)).sort((r, s)=>r - s), n = [];
    let i = null;
    for(let r = 0; r < t.length; r++)t[r + 1] === t[r] + 1 ? i ?? (i = t[r]) : i === null ? n.push(t[r]) : (n.push([
        i,
        t[r]
    ]), i = null);
    return n;
}
export function Mzg(e, t, n) {
    if (e) return ">";
    let i = "";
    if (t && n) {
        const { enable: r, disable: s } = t;
        i = (r?.ignoreCase ? "i" : "") + (r?.dotAll ? "s" : "") + (s ? "-" : "") + (s?.ignoreCase ? "i" : "") + (s?.dotAll ? "s" : "");
    }
    return `${i}:`;
}
export function Pzg({ kind: e, max: t, min: n }) {
    let i;
    return !n && t === 1 ? i = "?" : !n && t === 1 / 0 ? i = "*" : n === 1 && t === 1 / 0 ? i = "+" : n === t ? i = `{${n}}` : i = `{${n},${t === 1 / 0 ? "" : t}}`, i + {
        greedy: "",
        lazy: "?",
        possessive: "+"
    }[e];
}
export function kxl({ type: e }) {
    return e === "CapturingGroup" || e === "Group" || e === "LookaroundAssertion";
}
function Lzg(e) {
    return e > 47 && e < 58;
}
export function wxl({ type: e, value: t }) {
    return e === "Character" && t === 45;
}
export function Nzg(e, t, n, i) {
    if (e.index += t, e.input = n, i) {
        const r = e.indices;
        for(let o = 0; o < r.length; o++){
            const a = r[o];
            a && (r[o] = [
                a[0] + t,
                a[1] + t
            ]);
        }
        const s = r.groups;
        s && Object.keys(s).forEach((o)=>{
            const a = s[o];
            a && (s[o] = [
                a[0] + t,
                a[1] + t
            ]);
        });
    }
}
export function Ozg(e, t) {
    const n = new Map;
    for (const i of e)n.set(i, {
        hidden: !0
    });
    for (const [i, r] of t)for (const s of r)aCn(n, s, {}).transferTo = i;
    return n;
}
export function Fzg(e) {
    const t = /(?<capture>\((?:\?<(?![=!])(?<name>[^>]+)>|(?!\?)))|\\?./gsu, n = new Map;
    let i = 0, r = 0, s;
    for(; s = t.exec(e);){
        const { 0: o, groups: { capture: a, name: c } } = s;
        o === "[" ? i++ : i ? o === "]" && i-- : a && (r++, c && n.set(r, c));
    }
    return n;
}
function Bzg(e, t) {
    const n = Uzg(e, t);
    return n.options ? new qxl(n.pattern, n.flags, n.options) : new RegExp(n.pattern, n.flags);
}
function Uzg(e, t) {
    const n = hxl(t), i = KEl(e, {
        flags: n.flags,
        normalizeUnknownPropertyNames: !0,
        rules: {
            captureGroup: n.rules.captureGroup,
            singleline: n.rules.singleline
        },
        skipBackrefValidation: n.rules.allowOrphanBackrefs,
        unicodePropertyMap: LIi
    }), r = kzg(i, {
        accuracy: n.accuracy,
        asciiWordBoundaries: n.rules.asciiWordBoundaries,
        avoidSubclass: n.avoidSubclass,
        bestEffortTarget: n.target
    }), s = Rzg(r, n), o = vzg(s.pattern, {
        captureTransfers: s._captureTransfers,
        hiddenCaptures: s._hiddenCaptures,
        mode: "external"
    }), a = mzg(o.pattern), c = pzg(a.pattern, {
        captureTransfers: o.captureTransfers,
        hiddenCaptures: o.hiddenCaptures
    }), l = {
        pattern: c.pattern,
        flags: `${n.hasIndices ? "d" : ""}${n.global ? "g" : ""}${s.flags}${s.options.disable.v ? "u" : "v"}`
    };
    if (n.avoidSubclass) {
        if (n.lazyCompileLength !== 1 / 0) throw new Error("Lazy compilation requires subclass");
    } else {
        const u = c.hiddenCaptures.sort((f, v)=>f - v), h = Array.from(c.captureTransfers), p = r._strategy, g = l.pattern.length >= n.lazyCompileLength;
        (u.length || h.length || p || g) && (l.options = {
            ...u.length && {
                hiddenCaptures: u
            },
            ...h.length && {
                transfers: h
            },
            ...p && {
                strategy: p
            },
            ...g && {
                lazyCompile: g
            }
        });
    }
    return l;
}
function Hzg(e, t) {
    return Bzg(e, {
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
        ...t
    });
}
function Wzg(e = {}) {
    const t = Object.assign({
        target: "auto",
        cache: new Map
    }, e);
    return t.regexConstructor || (t.regexConstructor = (n)=>Hzg(n, {
            target: t.target
        })), {
        createScanner (n) {
            return new OEl(n, t);
        },
        createString (n) {
            return {
                content: n
            };
        }
    };
}
function zxl() {
    return NIi || (NIi = mqg({
        themes: [
            ays
        ],
        langs: [],
        engine: Wzg()
    })), NIi;
}
function Kxl(e, t) {
    const n = GYe(t);
    if (n === void 0 || e.getLoadedLanguages().includes(n)) return !0;
    const i = Cys(n);
    return i === void 0 ? (Tys(n), !1) : (e.loadLanguageSync(i), !0);
}
function Vzg() {
    return typeof navigator > "u" ? !1 : navigator.scheduling?.isInputPending?.() === !0;
}
function jzg(e) {
    const t = globalThis;
    let n = !1, i, r;
    const s = ()=>{
        if (!n) {
            if (Vzg()) {
                o();
                return;
            }
            e();
        }
    }, o = ()=>{
        t.requestIdleCallback ? i = t.requestIdleCallback(s, {
            timeout: Xxl
        }) : r = setTimeout(s, 0);
    };
    return o(), ()=>{
        n = !0, i !== void 0 && t.cancelIdleCallback?.(i), r !== void 0 && clearTimeout(r);
    };
}
export function Yxl(e, t) {
    const n = zxl();
    if (!Kxl(n, t)) return Mft(e);
    const i = oGg(n, e, t);
    return x9t.add(GYe(t) ?? t), i;
}
export function qzg(e) {
    const t = GYe(e);
    return t === void 0 || x9t.has(t);
}
export function zzg(e, t, n = jzg) {
    if (n === null) return OIi;
    const i = GYe(t) ?? t;
    if (x9t.has(i)) return OIi;
    let r = jft.get(i);
    if (r === void 0) {
        const a = {
            holders: 0,
            cancelRun: OIi
        };
        jft.set(i, a), a.cancelRun = n(()=>{
            jft.get(i) === a && jft.delete(i), x9t.has(i) || Yxl(e, t);
        }), r = a;
    }
    const s = r;
    s.holders += 1;
    let o = !1;
    return ()=>{
        o || (o = !0, s.holders -= 1, !(s.holders > 0 || jft.get(i) !== s) && (jft.delete(i), s.cancelRun()));
    };
}
export function Kzg(e, t, n) {
    const i = zxl();
    if (!Kxl(i, t)) return;
    const r = aGg(i, e, t, n);
    return x9t.add(GYe(t) ?? t), r;
}
export function Yzg(e) {
    return e.split(/\r?\n/);
}
export function Xzg(e, t, n) {
    const i = e.nextLineIndex;
    let r = i, s = 0;
    for(; r < t;){
        const o = e.lines[r]?.length ?? 0, a = r === i ? o : o + 1;
        if (r > i && s + a > n) break;
        s += a, r++;
    }
    return r;
}
export function Qxl(e, t) {
    return `${e}\0${t}`;
}
function iIl(e, t) {
    return `${ays.name}\0${GYe(t) ?? t}\0${e}`;
}
export function Qzg(e, t) {
    const n = iIl(e, t), i = aDe.get(n);
    if (i !== void 0) return aDe.delete(n), aDe.set(n, i), i.tokens;
}
export function Jzg(e, t, n) {
    const i = e.length;
    if (i > SSs) return;
    const r = iIl(e, t), s = aDe.get(r);
    for(s !== void 0 && (aDe.delete(r), uCn -= s.chars), aDe.set(r, {
        tokens: n,
        chars: i
    }), uCn += i; aDe.size > rIl || uCn > SSs;){
        const o = aDe.entries().next().value;
        if (o === void 0) break;
        aDe.delete(o[0]), uCn -= o[1].chars;
    }
}
function tKg() {
    if (wSs) return hCn;
    wSs = !0;
    try {
        const e = globalThis.trustedTypes;
        e?.createPolicy && (hCn = e.createPolicy("shikiWorkerFactory", {
            createScriptURL: (t)=>t
        }));
    } catch  {
        hCn = null;
    }
    return hCn;
}
function nKg() {
    if (dCn !== null) return dCn;
    if (!I9t || I9t === kSs) return null;
    try {
        const e = new Blob([
            I9t
        ], {
            type: "application/javascript"
        });
        return dCn = URL.createObjectURL(e), dCn;
    } catch (e) {
        return console.error("[@anysphere/ui] Failed to create Shiki worker blob URL:", e), null;
    }
}
function iKg() {
    const e = nKg();
    return e ? ()=>{
        try {
            const t = tKg(), n = t ? t.createScriptURL(e) : e;
            return new Worker(n, {
                type: "module"
            });
        } catch (t) {
            throw new Error(`[@anysphere/ui] Failed to create Shiki worker: ${t instanceof Error ? t.message : String(t)}`);
        }
    } : null;
}
export function FIi() {
    return !!I9t && I9t !== kSs;
}
export function rKg() {
    return CSs === void 0 && (CSs = iKg()), CSs;
}
var CSs;
export function aIl(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
export function cIl(e) {
    return FIi() ? e.length > hIl ? {
        kind: "unsupported",
        reason: "code-over-limit"
    } : pIl : {
        kind: "unsupported",
        reason: "worker-unavailable"
    };
}
export function oKg() {
    return BIi || (BIi = new gIl), BIi;
}
import { jsx as lKg } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as _Il } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as uKg, useContext as dKg, useSyncExternalStore as hKg } from "./react-runtime/react/esm-index-production.js";
export function pKg(e) {
    const t = _Il(3), { tokenizer: n, children: i } = e;
    let r;
    return t[0] !== i || t[1] !== n ? (r = lKg(ESs, {
        value: n,
        children: i
    }), t[0] = i, t[1] = n, t[2] = r) : r = t[2], r;
}
export function TSs() {
    return dKg(ESs);
}
export function bIl(e, t, n) {
    const i = _Il(16), r = n === void 0 ? !0 : n;
    let s;
    i[0] !== r || i[1] !== t || i[2] !== e ? (s = (g)=>{
        if (!r) return mKg;
        const f = e.onDidLoadLanguage(g);
        return e.loadLanguage(t), f;
    }, i[0] = r, i[1] = t, i[2] = e, i[3] = s) : s = i[3];
    const o = s;
    let a;
    i[4] !== r || i[5] !== t || i[6] !== e ? (a = ()=>r && e.languageStatus(t) !== "unloaded", i[4] = r, i[5] = t, i[6] = e, i[7] = a) : a = i[7];
    const c = a;
    let l;
    i[8] !== r || i[9] !== t || i[10] !== e ? (l = ()=>r && e.languageStatus(t) === "no-grammar", i[8] = r, i[9] = t, i[10] = e, i[11] = l) : l = i[11];
    const h = hKg(o, c, l);
    let p;
    return i[12] !== t || i[13] !== h || i[14] !== e ? (p = h ? (g)=>e.tokenizeSync(g, t) : Mft, i[12] = t, i[13] = h, i[14] = e, i[15] = p) : p = i[15], p;
}
function mKg() {}
export function gKg({ tokenization: e, sync: t, asyncDebounceMs: n }) {
    return e || (t === !1 ? {
        kind: "worker",
        debounceMs: n ?? 0,
        onRefusal: "plain"
    } : k9e);
}
export function UIi(e, t) {
    return e !== null && e.code === t.code && e.language === t.language;
}
export function fKg({ requested: e, support: t, rejected: n, coldRequest: i, tokenizerWarm: r, cached: s, request: o }) {
    if (e.kind === "inline") return k9e;
    if (e.kind === "inline-when-warm") {
        const a = e.scheduleWarmup === null;
        return s !== void 0 ? {
            kind: "cached",
            tokens: s
        } : ASs(n, o) ? k9e : UIi(i, o) ? ISs : t.kind === "unsupported" || r && !a ? k9e : ISs;
    }
    return t.kind === "unsupported" && t.reason === "worker-unavailable" ? k9e : e.onRefusal === "plain" ? e : t.kind === "unsupported" || ASs(n, o) ? k9e : e;
}
function yIl(e, t, n) {
    return Math.min(Math.max(e, t), n);
}
function _Kg({ lineCount: e, linePitchPx: t, blockTopPx: n, viewportTopPx: i, viewportBottomPx: r }) {
    if (!(t > 0) || e <= 0) return {
        start: 0,
        end: Math.max(e, 0)
    };
    const s = Math.floor((i - n) / t), o = Math.ceil((r - n) / t), a = kIl, c = yIl(Math.floor((s - RSs) / a) * a, 0, e), l = yIl(Math.ceil((o + RSs) / a) * a, 0, e);
    return c < l ? {
        start: c,
        end: l
    } : pCn;
}
function bKg(e, t) {
    return e.start === t.start && e.end === t.end;
}
import { flushSync as yKg } from "./react-runtime/react-dom/esm-index-production.js";
function SKg(e) {
    if (typeof document < "u" && document.visibilityState === "hidden" || typeof requestAnimationFrame != "function") {
        const i = setTimeout(e, 0);
        return ()=>clearTimeout(i);
    }
    const n = requestAnimationFrame(()=>e());
    return ()=>cancelAnimationFrame(n);
}
export function CIl(e) {
    let t = !1, n = ()=>{};
    const i = ()=>{
        n = SKg(()=>{
            t || e() && i();
        });
    };
    return i(), ()=>{
        t = !0, n();
    };
}
function kKg(e) {
    let t = TIl;
    const n = [];
    for(; w9e.length > 0;){
        const r = w9e[0];
        if (n.length > 0 && r.lines > t) break;
        w9e.shift(), t -= r.lines, n.push(r);
    }
    yKg(()=>{
        for (const r of n)r.apply();
    });
    const i = w9e.length > 0;
    return i || (e.drained = !0, XYe === e && (XYe = null)), i;
}
function wKg(e) {
    const t = {
        cancel: ()=>{},
        drained: !1
    };
    XYe = t;
    const n = e(()=>kKg(t));
    t.drained || (t.cancel = n);
}
export function CKg(e, t = CIl) {
    return w9e.push(e), XYe === null && wKg(t), ()=>{
        const n = w9e.indexOf(e);
        n < 0 || (w9e.splice(n, 1), w9e.length === 0 && XYe !== null && (XYe.cancel(), XYe = null));
    };
}
import { c as EKg } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as xKg, useLayoutEffect as IKg } from "./react-runtime/react/esm-index-production.js";
import { flushSync as AKg } from "./react-runtime/react-dom/esm-index-production.js";
export function RKg(e) {
    const t = EKg(11), { contentRef: n, viewport: i, lineCount: r, enabled: s } = e, [o, a] = xKg(pCn);
    let c, l;
    if (t[0] !== n || t[1] !== s || t[2] !== r || t[3] !== i ? (c = ()=>{
        if (!s || i == null) return;
        const g = n.current;
        if (g == null) return;
        const f = ()=>{
            const T = g.getBoundingClientRect(), E = i.getBoundingClientRect();
            return _Kg({
                lineCount: r,
                linePitchPx: T.height / r,
                blockTopPx: T.top,
                viewportTopPx: E.top,
                viewportBottomPx: E.bottom
            });
        }, v = (T)=>{
            a((E)=>bKg(E, T) ? E : T);
        };
        v(f());
        const b = ()=>{
            AKg(()=>v(f()));
        };
        i.addEventListener("scroll", b, {
            passive: !0
        });
        const y = typeof ResizeObserver == "function" ? new ResizeObserver(b) : null;
        y?.observe(i);
        for (const T of i.children)y?.observe(T);
        return ()=>{
            i.removeEventListener("scroll", b), y?.disconnect();
        };
    }, l = [
        n,
        s,
        i,
        r
    ], t[0] = n, t[1] = s, t[2] = r, t[3] = i, t[4] = c, t[5] = l) : (c = t[4], l = t[5]), IKg(c, l), !s) {
        let g;
        return t[6] !== r ? (g = {
            start: 0,
            end: r
        }, t[6] = r, t[7] = g) : g = t[7], g;
    }
    if (i == null) return pCn;
    const u = Math.min(o.start, r), h = Math.min(o.end, r);
    let p;
    return t[8] !== h || t[9] !== u ? (p = u < h ? {
        start: u,
        end: h
    } : pCn, t[8] = h, t[9] = u, t[10] = p) : p = t[10], p;
}
export { R0l };

export var I0l = {};
Object.defineProperty(I0l, "default", {
    enumerable: true,
    get: ()=>R0l
});

import { sIl } from "./_anysphere-ui-esm_shiki-worker.js";
import { Pft } from "./code-token.js";
import { Fkl } from "./css-variables-theme.js";
import { Gzg } from "./engine-compile.js";
import { sKg } from "./html-utils.js";
import { Q1l } from "./index_118.js";
import { BTl, UTl } from "./index_119.js";
import { gqg } from "./index_126.js";
import { lys } from "./shiki-core.js";
import { zxi } from "./shiki-grammars.js";
import { x } from "./tslib.es6.js";
var jTl, qTl, Wre, $ys, Hys, Wys, zTl, KTl, v9t, Gys, tCn;
var NIi, x9t, jft, Xxl, OIi;
var rIl, SSs, aDe, uCn;
var kSs, dCn, hCn, wSs;
var lIl, uIl, QJ, dIl, hIl, pIl, mIl, gIl, BIi;
var TIl, w9e, XYe;
export { $ys, BIi, Gys, Hys, KTl, NIi, OIi, QJ, SSs, TIl, Wre, Wys, XYe, Xxl, aDe, dCn, dIl, gIl, hCn, hIl, jTl, jft, kSs, lIl, mIl, pIl, qTl, rIl, tCn, uCn, uIl, v9t, w9e, wSs, x9t, zTl };
var __wakaru_ZVg_initialized = false;
export function ZVg() {
if (__wakaru_ZVg_initialized) return;
__wakaru_ZVg_initialized = true;
x(), Q1l(), UTl(), jTl = Object.defineProperty, qTl = (e, t, n)=>t in e ? jTl(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, Wre = (e, t, n)=>qTl(e, typeof t != "symbol" ? t + "" : t, n), $ys = {
    light: "#333333",
    dark: "#bbbbbb"
}, Hys = {
    light: "#fffffe",
    dark: "#1e1e1e"
}, Wys = "__shiki_resolved", zTl = class extends BTl {
    constructor(e, t, n, i = {}){
        super(e), Wre(this, "_resolvedThemes", new Map), Wre(this, "_resolvedGrammars", new Map), Wre(this, "_langMap", new Map), Wre(this, "_langGraph", new Map), Wre(this, "_textmateThemeCache", new WeakMap), Wre(this, "_loadedThemesCache", null), Wre(this, "_loadedLanguagesCache", null), this._resolver = e, this._themes = t, this._langs = n, this._alias = i, this._themes.map((r)=>this.loadTheme(r)), this.loadLanguages(this._langs);
    }
    getTheme(e) {
        return typeof e == "string" ? this._resolvedThemes.get(e) : this.loadTheme(e);
    }
    loadTheme(e) {
        const t = Bys(e);
        return t.name && (this._resolvedThemes.set(t.name, t), this._loadedThemesCache = null), t;
    }
    getLoadedThemes() {
        return this._loadedThemesCache || (this._loadedThemesCache = [
            ...this._resolvedThemes.keys()
        ]), this._loadedThemesCache;
    }
    setTheme(e) {
        let t = this._textmateThemeCache.get(e);
        t || (t = Qwn.createFromRawTheme(e), this._textmateThemeCache.set(e, t)), this._syncRegistry.setTheme(t);
    }
    getGrammar(e) {
        return e = HTl(e, this._alias), this._resolvedGrammars.get(e);
    }
    loadLanguage(e) {
        if (this.getGrammar(e.name)) return;
        const t = new Set([
            ...this._langMap.values()
        ].filter((r)=>r.embeddedLangsLazy?.includes(e.name)));
        this._resolver.addLanguage(e);
        const n = {
            balancedBracketSelectors: e.balancedBracketSelectors || [
                "*"
            ],
            unbalancedBracketSelectors: e.unbalancedBracketSelectors || []
        };
        this._syncRegistry._rawGrammars.set(e.scopeName, e);
        const i = this.loadGrammarWithConfiguration(e.scopeName, 1, n);
        if (i.name = e.name, this._resolvedGrammars.set(e.name, i), e.aliases && e.aliases.forEach((r)=>{
            this._alias[r] = e.name;
        }), this._loadedLanguagesCache = null, t.size) for (const r of t)this._resolvedGrammars.delete(r.name), this._loadedLanguagesCache = null, this._syncRegistry?._injectionGrammars?.delete(r.scopeName), this._syncRegistry?._grammars?.delete(r.scopeName), this.loadLanguage(this._langMap.get(r.name));
    }
    dispose() {
        super.dispose(), this._resolvedThemes.clear(), this._resolvedGrammars.clear(), this._langMap.clear(), this._langGraph.clear(), this._loadedThemesCache = null;
    }
    loadLanguages(e) {
        for (const i of e)this.resolveEmbeddedLanguages(i);
        const t = Array.from(this._langGraph.entries()), n = t.filter(([i, r])=>!r);
        if (n.length) {
            const i = t.filter(([r, s])=>s ? (s.embeddedLanguages || s.embeddedLangs)?.some((o)=>n.map(([a])=>a).includes(o)) : !1).filter((r)=>!n.includes(r));
            throw new _2(`Missing languages ${n.map(([r])=>`\`${r}\``).join(", ")}, required by ${i.map(([r])=>`\`${r}\``).join(", ")}`);
        }
        for (const [i, r] of t)this._resolver.addLanguage(r);
        for (const [i, r] of t)this.loadLanguage(r);
    }
    getLoadedLanguages() {
        return this._loadedLanguagesCache || (this._loadedLanguagesCache = [
            ...new Set([
                ...this._resolvedGrammars.keys(),
                ...Object.keys(this._alias)
            ])
        ]), this._loadedLanguagesCache;
    }
    resolveEmbeddedLanguages(e) {
        this._langMap.set(e.name, e), this._langGraph.set(e.name, e);
        const t = e.embeddedLanguages ?? e.embeddedLangs;
        if (t) for (const n of t)this._langGraph.set(n, this._langMap.get(n));
    }
}, KTl = class {
    constructor(e, t){
        Wre(this, "_langs", new Map), Wre(this, "_scopeToLang", new Map), Wre(this, "_injections", new Map), Wre(this, "_onigLib"), this._onigLib = {
            createOnigScanner: (n)=>e.createScanner(n),
            createOnigString: (n)=>e.createString(n)
        }, t.forEach((n)=>this.addLanguage(n));
    }
    get onigLib() {
        return this._onigLib;
    }
    getLangRegistration(e) {
        return this._langs.get(e);
    }
    loadGrammar(e) {
        return this._scopeToLang.get(e);
    }
    addLanguage(e) {
        this._langs.set(e.name, e), e.aliases && e.aliases.forEach((t)=>{
            this._langs.set(t, e);
        }), this._scopeToLang.set(e.scopeName, e), e.injectTo && e.injectTo.forEach((t)=>{
            this._injections.get(t) || this._injections.set(t, []), this._injections.get(t).push(e.scopeName);
        });
    }
    getInjections(e) {
        const t = e.split(".");
        let n = [];
        for(let i = 1; i <= t.length; i++){
            const r = t.slice(0, i).join(".");
            n = [
                ...n,
                ...this._injections.get(r) || []
            ];
        }
        return n;
    }
}, v9t = 0, Gys = new WeakMap, tCn = class Owm {
    constructor(...t){
        if (Wre(this, "_stacks", {}), Wre(this, "lang"), t.length === 2) {
            const [n, i] = t;
            this.lang = i, this._stacks = n;
        } else {
            const [n, i, r] = t;
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
    static initial(t, n) {
        return new Owm(Object.fromEntries(OVg(n).map((i)=>[
                i,
                rIi
            ])), t);
    }
    getInternalStack(t = this.theme) {
        return this._stacks[t];
    }
    getScopes(t = this.theme) {
        return WVg(this._stacks[t]);
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
var __wakaru_Zxl_initialized = false;
export function Zxl() {
if (__wakaru_Zxl_initialized) return;
__wakaru_Zxl_initialized = true;
"use strict";
x(), Pft(), lys(), zxi(), gqg(), Gzg(), Fkl(), NIi = null, x9t = new Set, jft = new Map, Xxl = 2e3, OIi = ()=>{};

}
var __wakaru_eKg_initialized = false;
export function eKg() {
if (__wakaru_eKg_initialized) return;
__wakaru_eKg_initialized = true;
"use strict";
x(), Fkl(), zxi(), rIl = 256, SSs = 512 * 1024, aDe = new Map, uCn = 0;

}
var __wakaru_oIl_initialized = false;
export function oIl() {
if (__wakaru_oIl_initialized) return;
__wakaru_oIl_initialized = true;
"use strict";
x(), sIl(), kSs = "__SHIKI_WORKER_CODE_PLACEHOLDER__", dCn = null, hCn = null, wSs = !1;

}
var __wakaru_aKg_initialized = false;
export function aKg() {
if (__wakaru_aKg_initialized) return;
__wakaru_aKg_initialized = true;
"use strict";
x(), Pft(), sKg(), zxi(), oIl(), lIl = Object.defineProperty, uIl = (e, t, n)=>t in e ? lIl(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, QJ = (e, t, n)=>uIl(e, typeof t != "symbol" ? t + "" : t, n), dIl = 1e4, hIl = 3e4, pIl = {
    kind: "supported"
}, mIl = class {
    constructor(e, t){
        QJ(this, "worker"), QJ(this, "pending", new Map), QJ(this, "grammars", new Set), QJ(this, "tokenizedLanguages", new Set), QJ(this, "_busy", !1), QJ(this, "_disposed", !1), QJ(this, "deadline", null), QJ(this, "onIdle"), QJ(this, "onError"), this.worker = e, this.onIdle = t.onIdle, this.onError = t.onError, this.worker.onmessage = (n)=>{
            this.handleMessage(n.data);
        }, this.worker.onerror = (n)=>{
            console.error("Shiki worker error:", n), this.rejectAll(new Error("Worker error")), this.onError(this);
        };
    }
    get busy() {
        return this._busy;
    }
    hasTokenized(e) {
        return this.tokenizedLanguages.has(e);
    }
    dispatch({ request: e, ...t }) {
        this._busy = !0, this.pending.set(e.id, t), this.mirrorLoadedGrammars(), this.worker.postMessage(e), this.deadline = setTimeout(()=>{
            this.deadline = null, this.rejectAll(new Error("Shiki worker unresponsive")), this.onError(this);
        }, dIl);
    }
    mirrorLoadedGrammars() {
        for (const e of gVg()){
            if (this.grammars.has(e)) continue;
            const t = Cys(e);
            if (t === void 0) continue;
            this.grammars.add(e);
            const n = {
                type: "loadGrammar",
                grammar: t
            };
            this.worker.postMessage(n);
        }
    }
    dispose() {
        this._disposed || (this._disposed = !0, this.rejectAll(new Error("Worker disposed")), this.worker.terminate());
    }
    rejectAll(e) {
        this.clearDeadline();
        for (const [, t] of this.pending)t.reject(e);
        this.pending.clear(), this._busy = !1;
    }
    clearDeadline() {
        this.deadline !== null && (clearTimeout(this.deadline), this.deadline = null);
    }
    handleMessage(e) {
        if (!this._disposed) switch(e.type){
            case "tokenized":
                this.resolvePending(e.id, e.html);
                break;
            case "tokenizedLines":
                this.resolvePending(e.id, e.htmlLines);
                break;
            case "tokenizedStructured":
                this.resolvePending(e.id, e.tokens);
                break;
            case "error":
                {
                    const t = this.pending.get(e.id);
                    t && (t.reject(new Error(e.message)), this.pending.delete(e.id)), this.markIdle();
                    break;
                }
        }
    }
    resolvePending(e, t) {
        const n = this.pending.get(e);
        n && (this.tokenizedLanguages.add(n.language), n.resolve(t), this.pending.delete(e)), this.markIdle();
    }
    markIdle() {
        this.clearDeadline(), this._busy = !1, this.onIdle();
    }
}, gIl = class {
    constructor(e = {}){
        QJ(this, "workers", []), QJ(this, "requestQueue", []), QJ(this, "requestIdCounter", 0), QJ(this, "maxWorkers"), QJ(this, "disposed", !1), this.maxWorkers = e.maxWorkers ?? Math.min(navigator.hardwareConcurrency ?? 4, 2), this.initFirstWorker();
    }
    initFirstWorker() {
        if (!FIi()) return;
        const e = this.createManagedWorker();
        e && this.workers.push(e);
    }
    createManagedWorker() {
        const e = rKg();
        if (!e) return null;
        const t = e();
        return new mIl(t, {
            onIdle: ()=>this.processQueue(),
            onError: (n)=>this.handleManagedWorkerError(n)
        });
    }
    handleManagedWorkerError(e) {
        const t = this.workers.indexOf(e);
        t !== -1 && this.workers.splice(t, 1), e.dispose(), this.processQueue();
    }
    workerFor(e) {
        const t = this.workers.filter((i)=>i.hasTokenized(e));
        if (t.length > 0) return t.find((i)=>!i.busy) ?? null;
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
        const e = [];
        for (const t of this.requestQueue){
            const n = this.workerFor(t.language);
            n ? n.dispatch(t) : e.push(t);
        }
        this.requestQueue = e;
    }
    get available() {
        return FIi();
    }
    get workerCount() {
        return this.workers.length;
    }
    async enqueue(e, t) {
        if (await Tys(e), this.disposed) throw new Error("Pool disposed");
        return new Promise((n, i)=>{
            this.requestQueue.push({
                request: t(++this.requestIdCounter),
                language: GYe(e) ?? e,
                resolve: (r)=>n(r),
                reject: i
            }), this.processQueue();
        });
    }
    async tokenize(e, t) {
        if (this.disposed) throw new Error("Pool disposed");
        return this.available ? this.enqueue(t, (n)=>({
                type: "tokenize",
                id: n,
                code: e,
                lang: t
            })) : aIl(e);
    }
    async tokenizeLines(e, t) {
        if (this.disposed) throw new Error("Pool disposed");
        return this.available ? this.enqueue(t, (n)=>({
                type: "tokenizeLines",
                id: n,
                lines: e,
                lang: t
            })) : e.map(aIl);
    }
    async tokenizeStructured(e, t) {
        if (this.disposed) throw new Error("Pool disposed");
        return cIl(e).kind === "unsupported" ? Mft(e) : this.enqueue(t, (n)=>({
                type: "tokenizeStructured",
                id: n,
                code: e,
                lang: t
            }));
    }
    dispose() {
        this.disposed = !0;
        for (const { reject: e } of this.requestQueue)e(new Error("Pool disposed"));
        this.requestQueue = [];
        for (const e of this.workers)e.dispose();
        this.workers = [];
    }
}, BIi = null;

}
var __wakaru_TKg_initialized = false;
export function TKg() {
if (__wakaru_TKg_initialized) return;
__wakaru_TKg_initialized = true;
"use strict";
x(), TIl = 400, w9e = [], XYe = null;

}
