import { a } from "./business-error.js";
import { bc, vc } from "./defaults.js";
import { W1, y6 } from "./html-parse-stringify.js";
import { hi, ta } from "./i18nInstance.js";
import { On, fd } from "./i18next.js";
import { Hd, R1 } from "./unescape.js";
import { Dn, Gr, Ut, na, oa } from "./utils_2.js";
import { cloneElement as Au } from "./react-runtime/react/esm-index-production.js";
import { isValidElement as Ho } from "./react-runtime/react/esm-index-production.js";
import { Fragment as Ob } from "./react-runtime/react/esm-index-production.js";
import { Children as lD } from "./react-runtime/react/esm-index-production.js";
import { createElement as to } from "./react-runtime/react/esm-index-production.js";
function X1({ children: e, count: t, parent: r, i18nKey: n, context: o, tOptions: i = {}, values: s, defaults: c, components: l, ns: m, i18n: u, t: d, shouldUnescape: p, ...h }) {
    const f = u || ta();
    if (!f) return Dn(f, "NO_I18NEXT_INSTANCE", "Trans: You need to pass in an i18next instance using initReactI18next or by passing it via props or context. In monorepo setups, make sure there is only one instance of react-i18next.", {
        i18nKey: n
    }), e;
    const v = d || f.t.bind(f) || ((ee)=>ee), x = {
        ...vc(),
        ...f.options?.react
    };
    let g = m || v.ns || f.options?.defaultNS;
    g = Ut(g) ? [
        g
    ] : g || [
        "translation"
    ];
    const { transDefaultProps: y } = x, w = y?.tOptions ? {
        ...y.tOptions,
        ...i
    } : i, b = p ?? y?.shouldUnescape, T = y?.values ? {
        ...y.values,
        ...s
    } : s, R = y?.components ? {
        ...y.components,
        ...l
    } : l, E = wc(e, x, f, n), S = c || w?.defaultValue || E || x.transEmptyNodeValue || (typeof n == "function" ? On(n) : n), { hashTransKey: A } = x, C = n || (A ? A(E || S) : E || S);
    f.options?.interpolation?.defaultVariables ? s = T && Object.keys(T).length > 0 ? {
        ...T,
        ...f.options.interpolation.defaultVariables
    } : {
        ...f.options.interpolation.defaultVariables
    } : s = T;
    const P = Q1(e);
    P && typeof P.count == "number" && t === void 0 && (t = P.count);
    const O = s || t !== void 0 && !f.options?.interpolation?.alwaysFormat || !e ? w.interpolation : {
        interpolation: {
            ...w.interpolation,
            prefix: "#$?",
            suffix: "?$#"
        }
    }, M = {
        ...w,
        context: o || w.context,
        count: t,
        ...s,
        ...O,
        defaultValue: S,
        ns: g
    };
    let F = C ? v(C, M) : S;
    F === C && S && (F = S);
    const K = r2(R, F, f, n);
    let re = K || e, te = null;
    n2(K) && (te = K, re = e);
    const J = J1(re, te, F, f, x, M, b), $ = r ?? x.defaultTransParent;
    return $ ? to($, h, J) : J;
}
var gi, aa, Z1, $r, q1, Q1, wc, J1, qd, e2, t2, r2, n2;
export { $r, J1, Q1, X1, Z1, aa, e2, gi, n2, q1, qd, r2, t2, wc };
var __wakaru_o2_initialized = false;
export function o2() {
if (__wakaru_o2_initialized) return;
__wakaru_o2_initialized = true;
fd(), y6(), oa(), bc(), hi(), R1(), gi = a((e, t)=>{
    if (!e) return !1;
    const r = e.props?.children ?? e.children;
    return t ? r.length > 0 : !!r;
}, "hasChildren"), aa = a((e)=>{
    if (!e) return [];
    const t = e.props?.children ?? e.children;
    return e.props?.i18nIsDynamicList ? $r(t) : t;
}, "getChildren"), Z1 = a((e)=>$r(e).every(Ho), "hasValidReactChildren"), $r = a((e)=>Array.isArray(e) ? e : [
        e
    ], "getAsArray"), q1 = a((e, t)=>{
    const r = {
        ...t
    };
    return r.props = {
        ...t.props,
        ...e.props
    }, r;
}, "mergeProps"), Q1 = a((e)=>{
    const t = {};
    if (!e) return t;
    const r = a((n)=>{
        $r(n).forEach((i)=>{
            Ut(i) || (gi(i) ? r(aa(i)) : Gr(i) && !Ho(i) && Object.assign(t, i));
        });
    }, "getData");
    return r(e), t;
}, "getValuesFromChildren"), wc = a((e, t, r, n)=>{
    if (!e) return "";
    let o = "";
    const i = $r(e), s = t?.transSupportBasicHtmlNodes ? t.transKeepBasicHtmlNodesFor ?? [] : [];
    return i.forEach((c, l)=>{
        if (Ut(c)) {
            o += `${c}`;
            return;
        }
        if (Ho(c)) {
            const { props: m, type: u } = c, d = Object.keys(m).length, p = s.indexOf(u) > -1, h = m.children;
            if (!h && p && !d) {
                o += `<${u}/>`;
                return;
            }
            if (!h && (!p || d) || m.i18nIsDynamicList) {
                o += `<${l}></${l}>`;
                return;
            }
            if (p && d <= 1) {
                const v = Ut(h) ? h : wc(h, t, r, n);
                o += `<${u}>${v}</${u}>`;
                return;
            }
            const f = wc(h, t, r, n);
            o += `<${l}>${f}</${l}>`;
            return;
        }
        if (c === null) {
            na(r, "TRANS_NULL_VALUE", "Passed in a null value as child", {
                i18nKey: n
            });
            return;
        }
        if (Gr(c)) {
            const { format: m, ...u } = c, d = Object.keys(u);
            if (d.length === 1) {
                const p = m ? `${d[0]}, ${m}` : d[0];
                o += `{{${p}}}`;
                return;
            }
            na(r, "TRANS_INVALID_OBJ", "Invalid child - Object should only have keys {{ value, format }} (format is optional).", {
                i18nKey: n,
                child: c
            });
            return;
        }
        na(r, "TRANS_INVALID_VAR", "Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.", {
            i18nKey: n,
            child: c
        });
    }), o;
}, "nodesToString"), J1 = a((e, t, r, n, o, i, s)=>{
    if (r === "") return [];
    const c = o.transKeepBasicHtmlNodesFor || [], l = r && new RegExp(c.map((w)=>`<${w}`).join("|")).test(r);
    if (!e && !t && !l && !s) return [
        r
    ];
    const m = t ?? {}, u = a((w)=>{
        $r(w).forEach((T)=>{
            Ut(T) || (gi(T) ? u(aa(T)) : Gr(T) && !Ho(T) && Object.assign(m, T));
        });
    }, "getData");
    u(e);
    const d = Object.keys(m), p = a((w)=>/^\d+$/.test(w) || c.indexOf(w) > -1 || d.indexOf(w) > -1, "allowedTags"), h = W1.parse(`<0>${r}</0>`, {
        allowedTags: p
    }), f = {
        ...m,
        ...i
    }, v = a((w, b, T)=>{
        const R = aa(w), E = g(R, b.children, T);
        return Z1(R) && E.length === 0 || w.props?.i18nIsDynamicList ? R : E;
    }, "renderInner"), x = a((w, b, T, R, E)=>{
        w.dummy ? (w.children = b, T.push(Au(w, {
            key: R
        }, E ? void 0 : b))) : T.push(...lD.map([
            w
        ], (S)=>{
            if (S.type === Ob || S.props?.i18nIsDynamicList !== void 0) {
                const C = {
                    key: R
                };
                return S && S.props && Object.keys(S.props).forEach((P)=>{
                    P === "children" || P === "i18nIsDynamicList" || (C[P] = S.props[P]);
                }), to(S.type, C, E ? null : b);
            }
            const A = {
                key: R
            };
            return S && S.props && Object.keys(S.props).forEach((C)=>{
                C === "ref" || C === "children" || (A[C] = S.props[C]);
            }), Au(S, A, E ? null : b);
        }));
    }, "pushTranslatedJSX"), g = a((w, b, T)=>{
        const R = $r(w), E = $r(b), S = {};
        return E.reduce((A, C, P)=>{
            const O = C.children?.[0]?.content && n.services.interpolator.interpolate(C.children[0].content, f, n.language);
            if (C.type === "tag") {
                let M = R[parseInt(C.name, 10)];
                !M && t && (M = t[C.name]), T.length === 1 && !M && (M = T[0][C.name]), M || (M = {});
                const F = {
                    ...C.attrs
                };
                s && Object.keys(F).forEach((ee)=>{
                    const W = F[ee];
                    Ut(W) && (F[ee] = Hd(W));
                });
                const K = Object.keys(F).length !== 0 ? q1({
                    props: F
                }, M) : M, re = Ho(K), te = re && gi(C, !0) && !C.voidElement, J = l && Gr(K) && K.dummy && !re, $ = Gr(t) && Object.hasOwnProperty.call(t, C.name);
                if (Ut(K)) {
                    const ee = n.services.interpolator.interpolate(K, f, n.language);
                    A.push(ee);
                } else if (gi(K) || te) {
                    const ee = v(K, C, T);
                    x(K, ee, A, P);
                } else if (J) {
                    const ee = g(R, C.children, T);
                    x(K, ee, A, P);
                } else if (Number.isNaN(parseFloat(C.name))) if ($) {
                    const ee = v(K, C, T);
                    x(K, ee, A, P, C.voidElement);
                } else if (o.transSupportBasicHtmlNodes && c.indexOf(C.name) > -1) if (C.voidElement) A.push(to(C.name, {
                    key: `${C.name}-${P}`
                }));
                else {
                    const ee = S[C.name] || 0;
                    S[C.name] = ee + 1;
                    let W, ne = 0;
                    for(let oe = 0; oe < R.length; oe += 1){
                        const ce = R[oe];
                        if (Ho(ce) && ce.type === C.name) {
                            if (ne === ee) {
                                W = ce;
                                break;
                            }
                            ne += 1;
                        }
                    }
                    const xe = W ? $r(aa(W)) : R, j = g(xe, C.children, T);
                    A.push(to(C.name, {
                        key: `${C.name}-${P}`
                    }, j));
                }
                else if (C.voidElement) A.push(`<${C.name} />`);
                else {
                    const ee = g(R, C.children, T);
                    A.push(`<${C.name}>${ee}</${C.name}>`);
                }
                else if (Gr(K) && !re) {
                    const ee = C.children[0] ? O : null;
                    ee && A.push(ee);
                } else x(K, O, A, P, C.children.length !== 1 || !O);
            } else if (C.type === "text") {
                const M = o.transWrapTextNodes, F = typeof o.unescape == "function" ? o.unescape : vc().unescape, K = s ? F(n.services.interpolator.interpolate(C.content, f, n.language)) : n.services.interpolator.interpolate(C.content, f, n.language);
                M ? A.push(to(M, {
                    key: `${C.name}-${P}`
                }, K)) : A.push(K);
            }
            return A;
        }, []);
    }, "mapAST"), y = g([
        {
            dummy: !0,
            children: e || []
        }
    ], h, $r(e || []));
    return aa(y[0]);
}, "renderNodes"), qd = a((e, t, r)=>{
    const n = e.key || t, o = Au(e, {
        key: n
    });
    if (!o.props || !o.props.children || r.indexOf(`${t}/>`) < 0 && r.indexOf(`${t} />`) < 0) return o;
    function i() {
        return to(Ob, null, o);
    }
    return a(i, "Componentized"), to(i, {
        key: n
    });
}, "fixComponentProps"), e2 = a((e, t)=>e.map((r, n)=>qd(r, n, t)), "generateArrayComponents"), t2 = a((e, t)=>{
    const r = {};
    return Object.keys(e).forEach((n)=>{
        Object.assign(r, {
            [n]: qd(e[n], n, t)
        });
    }), r;
}, "generateObjectComponents"), r2 = a((e, t, r, n)=>e ? Array.isArray(e) ? e2(e, t) : Gr(e) ? t2(e, t) : (Dn(r, "TRANS_INVALID_COMPONENTS", '<Trans /> "components" prop expects an object or array', {
        i18nKey: n
    }), null) : null, "generateComponents"), n2 = a((e)=>!Gr(e) || Array.isArray(e) ? !1 : Object.keys(e).reduce((t, r)=>t && Number.isNaN(Number.parseFloat(r)), !0), "isComponentsMap"), a(X1, "Trans");

}
