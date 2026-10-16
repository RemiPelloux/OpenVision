import * as Ay from "./react-runtime/react/esm-index-production.js";
import * as Cy from "./react-runtime/react/esm-index-production.js";
import * as Iy from "./react-runtime/react/esm-index-production.js";
import * as Ny from "./react-runtime/react/esm-index-production.js";
import { jsx as Py } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as Ry from "./react-runtime/react/esm-index-production.js";
import * as Ty from "./react-runtime/react/esm-index-production.js";
import * as Xo from "./react-runtime/react/esm-index-production.js";
import * as _y from "./react-runtime/react/esm-index-production.js";
import * as cF from "./react-runtime/react/esm-index-production.js";
import * as ju from "./react-runtime/react/esm-index-production.js";
import * as ky from "./react-runtime/react/esm-index-production.js";
import { jsxs as lF } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { Ai, Ht, Rr, Si, Uc, _t, ca, gr, po, pt, xr } from "./_t.js";
import { $E, Uf, a9, ol, sT, yt } from "./RE.js";
import { a } from "./business-error.js";
function TN({ controlled: e, default: t, name: r, state: n = "value" }) {
    const { current: o } = ju.useRef(e !== void 0), [i, s] = ju.useState(t), c = o && e !== void 0 ? e : i, l = ju.useCallback((m)=>{
        o || s(m);
    }, []);
    return [
        c,
        l
    ];
}
a(TN, "useControlled");
function CN(e) {
    if (!e) return null;
    for (const t of e.elements){
        const r = t.tagName;
        if (r === "BUTTON" || r === "INPUT") {
            const n = t;
            if (n.type === "submit") return n;
        }
    }
    return null;
}
a(CN, "getDefaultFormSubmitter");
var Rz = "data-valid", Nz = "data-invalid", Pz = {
    badInput: !1,
    customError: !1,
    patternMismatch: !1,
    rangeOverflow: !1,
    rangeUnderflow: !1,
    stepMismatch: !1,
    tooLong: !1,
    tooShort: !1,
    typeMismatch: !1,
    valid: null,
    valueMissing: !1
}, _z = {
    valid: null,
    touched: !1,
    dirty: !1,
    filled: !1,
    focused: !1
}, Mz = {
    disabled: !1,
    ..._z
}, Oz = {
    valid (e) {
        return e === null ? null : e ? {
            [Rz]: ""
        } : {
            [Nz]: ""
        };
    }
}, Dz = "data-checked", Lz = "data-unchecked";
function y0(e) {
    return {
        checked (t) {
            return e.indeterminate ? {} : t ? {
                [Dz]: ""
            } : {
                [Lz]: ""
            };
        },
        ...Oz
    };
}
a(y0, "getCheckboxStateAttributesMapping");
var Fz = {
    invalid: void 0,
    name: void 0,
    validityData: {
        state: Pz,
        errors: [],
        error: "",
        value: "",
        initialValue: null
    },
    setValidityData: yt,
    disabled: void 0,
    setTouched: yt,
    setDirty: yt,
    setFilled: yt,
    setFocused: yt,
    validationMode: "onSubmit",
    shouldValidateOnChange: a(()=>!1, "shouldValidateOnChange"),
    state: Mz,
    registerFieldControl: yt,
    validation: {
        getValidationProps: a((e, t = zt)=>t, "getValidationProps"),
        inputRef: {
            current: null
        },
        registeredInputs: new Map,
        registerInput: yt,
        getInputControl: a(()=>null, "getInputControl"),
        commit: a(async ()=>{}, "commit"),
        change: yt
    }
}, Vz = ky.createContext(Fz);
function w0(e = !0) {
    const t = ky.useContext(Vz);
    if (t.setValidityData === yt && !e) throw new Error(Vn(28));
    return t;
}
a(w0, "useFieldRootContext");
function IN(e, t, r, n, o = !0, i) {
    const { registerFieldControl: s } = w0(), c = Rr(()=>Symbol());
    Ke(()=>{
        const l = c.current;
        if (!o) {
            s(l, void 0);
            return;
        }
        s(l, {
            controlRef: e,
            getValue: n,
            id: t,
            name: i,
            value: r
        });
    }, [
        e,
        o,
        n,
        t,
        i,
        s,
        c,
        r
    ]), Ke(()=>{
        const l = c.current;
        return ()=>{
            s(l, void 0);
        };
    }, [
        s,
        c
    ]);
}
a(IN, "useRegisterFieldControl");
var Bz = Ty.createContext({
    disabled: !1
});
function AN() {
    return Ty.useContext(Bz);
}
a(AN, "useFieldItemContext");
var Uz = Cy.createContext({
    elementRef: {
        current: null
    },
    formRef: {
        current: {
            fields: new Map
        }
    },
    errors: {},
    clearErrors: yt,
    validationMode: "onSubmit",
    submitCountRef: {
        current: 0
    }
});
function RN() {
    return Cy.useContext(Uz);
}
a(RN, "useFormContext");
var jz = Iy.createContext({
    controlId: void 0,
    registerControlId: yt,
    resetControlId: yt,
    labelId: void 0,
    setLabelId: yt,
    messageIds: [],
    setMessageIds: yt,
    getDescriptionProps: a((e)=>e, "getDescriptionProps")
});
function S0() {
    return Iy.useContext(jz);
}
a(S0, "useLabelableContext");
function NN(e, t, r, n = !0, o) {
    const [i, s] = cF.useState(), c = po(o ? `${o}-label` : void 0), l = e ?? t ?? i;
    return Ke(()=>{
        const m = e || t || !n ? void 0 : PN(r.current, c);
        i !== m && s(m);
    }), l;
}
a(NN, "useAriaLabelledBy");
function PN(e, t) {
    const r = _N(e);
    if (r) return !r.id && t && (r.id = t), r.id || void 0;
}
a(PN, "getAriaLabelledBy");
function _N(e) {
    if (!e) return;
    const t = e.parentElement;
    if (t && t.tagName === "LABEL") return t;
    const r = e.id;
    if (r) {
        const o = e.nextElementSibling;
        if (o && o.htmlFor === r) return o;
    }
    const n = e.labels;
    return n && n[0];
}
a(_N, "findAssociatedLabel");
function MN(e = {}) {
    const { id: t, enabled: r = !0 } = e, { controlId: n, registerControlId: o, resetControlId: i } = S0(), s = po(), c = Rr(()=>Symbol()), l = Ay.useRef(!1), m = Ay.useRef(!1), u = pt(()=>{
        !l.current || o === yt || (l.current = !1, o(c.current, void 0));
    });
    return Ke(()=>{
        if (!r || o === yt) {
            u();
            return;
        }
        let d;
        if (t !== void 0) m.current = !0, d = t;
        else if (m.current) d = s;
        else {
            i();
            return;
        }
        if (d === void 0) {
            u();
            return;
        }
        l.current = !0, o(c.current, d);
    }, [
        t,
        r,
        o,
        i,
        s,
        c,
        u
    ]), Ke(()=>u, [
        u
    ]), (r ? n : void 0) ?? t ?? s;
}
a(MN, "useLabelableId");
var zz = Ry.createContext(void 0);
function ON() {
    return Ry.useContext(zz);
}
a(ON, "useCheckboxGroupContext");
var DN = Ny.createContext(void 0);
function LN() {
    const e = Ny.useContext(DN);
    if (e === void 0) throw new Error(Vn(14));
    return e;
}
a(LN, "useCheckboxRootContext");
var Hz = "data-parent", Gz = Xo.forwardRef(a(function(t, r) {
    const { checked: n, className: o, defaultChecked: i = !1, "aria-labelledby": s, disabled: c = !1, form: l, id: m, indeterminate: u = !1, inputRef: d, name: p, onCheckedChange: h, parent: f = !1, readOnly: v = !1, render: x, required: g = !1, uncheckedValue: y, value: w, nativeButton: b = !1, style: T, ...R } = t, { clearErrors: E } = RN(), { disabled: S, name: A, setDirty: C, setFilled: P, setFocused: O, setTouched: M, state: F, validationMode: K, validityData: re, validation: te } = w0(), J = AN(), { labelId: $, registerControlId: ee, getDescriptionProps: W } = S0(), ne = ON(), xe = ne?.allValues === void 0 ? void 0 : ne.parent, j = xe !== void 0, oe = S || J.disabled || ne?.disabled || c, ce = A ?? p, ve = w ?? ce, U = po(), qe = ne?.registerControlId !== ee, He = MN({
        id: m || void 0,
        enabled: qe
    }), We = b ? He : U;
    let H = {};
    j && (f ? H = xe.getParentProps() : ve !== void 0 && (H = xe.getChildProps(ve)));
    const { checked: le = n, indeterminate: Ee = u, onCheckedChange: Oe, ...Me } = H, ie = ne?.value, q = Xo.useRef(null), { getButtonProps: Z, buttonRef: me } = Uc({
        disabled: oe,
        native: b
    }), Ie = ne?.validation ?? te, [Ae, Ge] = TN({
        controlled: ve !== void 0 && ie !== void 0 && !f ? ie.includes(ve) : le,
        default: i,
        name: "Checkbox",
        state: "checked"
    }), et = j ? !!le : Ae, je = j && Ee || u;
    IN(q, U, Ae, void 0, !ne && !oe, p);
    const k = xe?.registerChildId, I = Xo.useRef(null), D = Ie.registerInput, V = ne ? ve : void 0, G = Xo.useCallback((he)=>D(he, {
            controlRef: q,
            value: V
        }), [
        D,
        V
    ]), Q = ca(d, I, f ? void 0 : G), ue = NN(s, $, I, !b, He);
    Ke(()=>{
        I.current && (I.current.indeterminate = je), ne || P(Ae);
    }, [
        Ae,
        je,
        ne,
        P
    ]), sT(Ae, ()=>{
        ne || (E(ce), C(Ae !== re.initialValue), Ie.change(Ae));
    });
    const Ce = Si({
        checked: Ae,
        disabled: oe,
        form: l,
        name: f ? void 0 : ce,
        id: b ? void 0 : He,
        required: g,
        ref: Q,
        style: ce ? a9 : $E,
        tabIndex: -1,
        type: "checkbox",
        "aria-hidden": !0,
        onChange (he) {
            if (he.nativeEvent.defaultPrevented) return;
            if (v) {
                he.preventDefault();
                return;
            }
            const ot = he.currentTarget.checked, Ye = Ht(_t.none, he.nativeEvent);
            if (h?.(ot, Ye), !Ye.isCanceled && (Oe?.(ot, Ye), !Ye.isCanceled && (Ge(ot), ve !== void 0 && ne !== void 0 && !f && !j))) {
                const _ = ot ? [
                    ...ne.value,
                    ve
                ] : ne.value.filter((X)=>X !== ve);
                ne.setValue(_, Ye);
            }
        },
        onClick (he) {
            he.stopPropagation();
        },
        onFocus () {
            q.current?.focus();
        }
    }, w !== void 0 ? {
        value: (ne ? Ae && w : w) || ""
    } : zt, W, (he)=>Ie.getValidationProps(oe, he));
    Xo.useEffect(()=>{
        if (!xe || ve === void 0) return;
        const he = xe.disabledStatesRef.current;
        return he.set(ve, oe), ()=>{
            he.delete(ve);
        };
    }, [
        xe,
        oe,
        ve
    ]);
    const Qe = Xo.useMemo(()=>({
            ...F,
            checked: et,
            disabled: oe,
            readOnly: v,
            required: g,
            indeterminate: je
        }), [
        F,
        et,
        oe,
        v,
        g,
        je
    ]), dt = y0(Qe), Kt = xr("span", t, {
        state: Qe,
        ref: [
            me,
            q,
            r
        ],
        props: [
            {
                id: We,
                role: "checkbox",
                "aria-checked": je ? "mixed" : et,
                "aria-readonly": v || void 0,
                "aria-required": g || void 0,
                "aria-labelledby": ue,
                [Hz]: f ? "" : void 0,
                onFocus () {
                    oe || O(!0);
                },
                onBlur () {
                    const he = I.current;
                    he && (M(!0), O(!1), K === "onBlur" && Ie.commit(ne ? ie : he.checked));
                },
                onKeyDown (he) {
                    if (he.key !== "Enter" || (he.preventBaseUIHandler(), he.defaultPrevented)) return;
                    const ot = I.current?.form ?? null, Ye = he.currentTarget, _ = he.nativeEvent, X = he.preventDefault, z = _.preventDefault;
                    let ae = !1;
                    he.preventDefault = ()=>{
                        ae = !0, X.call(he);
                    }, _.preventDefault = ()=>{
                        ae = !0, z.call(_);
                    }, z.call(_), gr(Ye).queueMicrotask(()=>{
                        he.preventDefault = X, _.preventDefault = z, ae || CN(ot)?.click();
                    });
                },
                onClick (he) {
                    if (v || oe) return;
                    he.preventDefault();
                    const ot = I.current;
                    ot && Ai(ot, he);
                }
            },
            R,
            Me,
            Z,
            W,
            (he)=>Ie.getValidationProps(oe, he)
        ],
        stateAttributesMapping: dt
    }), tt = Kt.props.id;
    return Ke(()=>{
        if (!(!k || f || ve === void 0 || tt === void 0)) return k(ve, tt);
    }, [
        k,
        f,
        ve,
        tt
    ]), lF(DN.Provider, {
        value: Qe,
        children: [
            Kt,
            !Ae && !ne && ce && !f && y !== void 0 && Py("input", {
                type: "hidden",
                form: l,
                name: ce,
                value: y,
                disabled: oe
            }),
            Py("input", {
                ...Ce,
                suppressHydrationWarning: !0
            })
        ]
    });
}, "CheckboxRoot")), $z = _y.forwardRef(a(function(t, r) {
    const { render: n, className: o, style: i, keepMounted: s = !1, ...c } = t, l = LN(), m = l.checked || l.indeterminate, { mounted: u, transitionStatus: d, setMounted: p } = Uf(m), h = _y.useRef(null), f = {
        ...l,
        transitionStatus: d
    };
    ol({
        batch: !0,
        enabled: !m,
        open: m,
        ref: h,
        onComplete () {
            m || p(!1);
        }
    });
    const x = {
        ...y0(l),
        ...rf
    }, g = s || u, y = xr("span", t, {
        ref: [
            r,
            h
        ],
        state: f,
        stateAttributesMapping: x,
        props: c
    });
    return g ? y : null;
}, "CheckboxIndicator")), FN = 24;
export { $z, FN, Gz };

export var vm = {};
Object.defineProperty(vm, "Indicator", {
    enumerable: true,
    get: ()=>$z
});
Object.defineProperty(vm, "Root", {
    enumerable: true,
    get: ()=>Gz
});
