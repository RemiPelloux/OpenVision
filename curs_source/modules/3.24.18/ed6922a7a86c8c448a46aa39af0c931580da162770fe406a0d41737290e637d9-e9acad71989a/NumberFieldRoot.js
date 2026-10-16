import { mj } from "./FieldRootContext.js";
import { mCe } from "./FormContext.js";
import { EFi, xFi } from "./NumberFieldRootContext.js";
import { Jle } from "./addEventListener.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { Lev, a6t, aFs } from "./f0s.js";
import { Q0n } from "./formatNumber.js";
import { Agt, W5e } from "./os.js";
import { C5 } from "./owner.js";
import { Alu, Ilu, PFi, Rlu, _Fs, lFs, uFs } from "./parse_7.js";
import { Ire, KP, KS, Mre, Qu, Xnl, YS, cCe, kp, oY, pCe, su, uj, zgt } from "./qIc.js";
import { Pre, _ds, g_, gil, j5e, lN, p0i } from "./reason-parts.js";
import { cN } from "./shadowDom.js";
import { IFi, kxn } from "./stateAttributesMapping_10.js";
import { x } from "./tslib.es6.js";
import { sCe } from "./useControlled.js";
import { Znl } from "./useForcedRerendering.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { Kgt } from "./useLabelableId.js";
import { _fe } from "./useMergedRefs.js";
import { wp } from "./useRenderElement.js";
import { Cy } from "./useStableCallback.js";
import { oCe } from "./useValueAsRef.js";
import { Nlu } from "./validate.js";
import { Cgt, oYe, sYe } from "./visuallyHidden.js";
import { jsxs as Nev } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as Oev } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as y0e from "./react-runtime/react/esm-index-production.js";
var EFs;
export { EFs };
var __wakaru_Fev_initialized = false;
export function Fev() {
if (__wakaru_Fev_initialized) return;
__wakaru_Fev_initialized = true;
x(), Jle(), sCe(), Cy(), af(), oCe(), Znl(), _fe(), oYe(), C5(), xFi(), mj(), mCe(), Kgt(), IFi(), wp(), PFi(), Q0n(), Nlu(), Ty(), g_(), W5e(), cN(), EFs = y0e.forwardRef(function(t, n) {
    const { id: i, min: r, max: s, smallStep: o = .1, step: a = 1, largeStep: c = 10, required: l = !1, disabled: u = !1, readOnly: h = !1, form: p, name: g, defaultValue: f, value: v, onValueChange: b, onValueCommitted: y, allowWheelScrub: T = !1, snapOnStep: E = !1, allowOutOfRange: A = !1, format: R, locale: D, render: P, className: N, inputRef: O, style: F, ...H } = t, { setDirty: $, validityData: W, disabled: G, setFilled: q, invalid: z, name: X, state: Y, validation: Z } = oY(), { clearErrors: K } = pCe(), J = G || u, ne = X ?? g, ee = a === "any" ? 1 : a, [se, re] = y0e.useState(!1), ue = r ?? Number.MIN_SAFE_INTEGER, ce = s ?? Number.MAX_SAFE_INTEGER, de = r ?? 0, le = R?.style, ye = y0e.useRef(null), _e = Ire(O, Z.inputRef), me = zgt({
        id: i
    }), [Ce, xe] = Mre({
        controlled: v,
        default: f,
        name: "NumberField",
        state: "value"
    }), Le = Ce ?? null, Be = KP(Le);
    gl(()=>{
        q(Le !== null);
    }, [
        q,
        Le
    ]);
    const je = Xnl(), Ge = KP(R), Xe = y0e.useRef(!1), Ke = su((Tt, ct)=>{
        Xe.current = !1, y?.(Tt, ct);
    }), et = y0e.useRef(!0), We = y0e.useRef(null), [it, Ne] = y0e.useState(()=>a6t(Le, D, R)), [Fe, Qe] = y0e.useState("numeric"), tt = su(()=>{
        const { decimal: Tt, group: ct, currency: Kt, literal: Rt } = aFs(D, R), Gt = new Set;
        Ilu.forEach((un)=>Gt.add(un)), Tt && Gt.add(Tt), ct && (Gt.add(ct), _Fs.test(ct) && Gt.add(" "));
        const Nt = le === "percent" || le === "unit" && R?.unit === "percent", sn = le === "percent" || le === "unit" && R?.unit === "permille";
        return Nt && lFs.forEach((un)=>Gt.add(un)), sn && uFs.forEach((un)=>Gt.add(un)), le === "currency" && Kt && Gt.add(Kt), Rt && (Array.from(Rt).forEach((un)=>Gt.add(un)), _Fs.test(Rt) && Gt.add(" ")), Alu.forEach((un)=>Gt.add(un)), (ue < 0 || A) && Rlu.forEach((un)=>Gt.add(un)), Gt;
    }), st = su((Tt)=>Tt?.altKey ? o : Tt?.shiftKey ? c : ee), vt = su((Tt, ct)=>{
        const Kt = ct.event, Rt = ct.direction, Gt = ct.reason === j5e || ct.reason === Pre || ct.reason === p0i || ct.reason === _ds || ct.reason === lN, Nt = !A || !Gt, sn = Lev(Tt, {
            step: Rt ? st(Kt) * Rt : void 0,
            format: Ge.current,
            minWithDefault: ue,
            maxWithDefault: ce,
            minWithZeroDefault: de,
            snapOnStep: E,
            small: Kt?.altKey ?? !1,
            clamp: Nt
        }), un = sn !== Le || Gt && (Tt !== Le || et.current === !1);
        if (un) {
            if (b?.(sn, ct), ct.isCanceled) return !1;
            xe(sn), $(sn !== W.initialValue), Xe.current = !0;
        }
        return We.current = sn, et.current && Ne(a6t(sn, D, R)), je(), un;
    }), ht = su((Tt, { direction: ct, currentValue: Kt, event: Rt, reason: Gt })=>{
        const Nt = Kt ?? Be.current, sn = Rt;
        return typeof Nt != "number" ? vt(0, Qu(Gt, sn)) : vt(Nt + Tt * ct, Qu(Gt, sn, void 0, {
            direction: ct
        }));
    });
    gl(function() {
        if (!et.current) return;
        const ct = a6t(Le, D, R);
        ct !== it && Ne(ct);
    }), gl(function() {
        if (!Agt) return;
        let ct = "text";
        ue >= 0 && (ct = "decimal"), Qe(ct);
    }, [
        ue
    ]), y0e.useEffect(function() {
        const ct = ye.current;
        if (J || h || !T || !ct) return;
        function Kt(Rt) {
            if (Rt.ctrlKey || uj(KS(ye.current)) !== ye.current) return;
            Rt.preventDefault(), et.current = !0;
            const Gt = st(Rt);
            ht(Gt, {
                direction: Rt.deltaY > 0 ? -1 : 1,
                event: Rt,
                reason: "wheel"
            }) && Ke(We.current ?? Be.current, cCe(gil, Rt));
        }
        return YS(ct, "wheel", Kt);
    }, [
        T,
        ht,
        J,
        h,
        st,
        Ke,
        We,
        Be
    ]);
    const ut = y0e.useMemo(()=>({
            ...Y,
            disabled: J,
            readOnly: h,
            required: l,
            value: Le,
            inputValue: it,
            scrubbing: se
        }), [
        Y,
        J,
        h,
        l,
        Le,
        it,
        se
    ]), Dt = y0e.useMemo(()=>({
            inputRef: ye,
            inputValue: it,
            value: Le,
            minWithDefault: ue,
            maxWithDefault: ce,
            disabled: J,
            readOnly: h,
            id: me,
            setValue: vt,
            incrementValue: ht,
            getStepAmount: st,
            allowInputSyncRef: et,
            formatOptionsRef: Ge,
            valueRef: Be,
            lastChangedValueRef: We,
            hasPendingCommitRef: Xe,
            name: ne,
            nameProp: g,
            required: l,
            invalid: z,
            inputMode: Fe,
            getAllowedNonNumericKeys: tt,
            min: r,
            max: s,
            setInputValue: Ne,
            locale: D,
            isScrubbing: se,
            setIsScrubbing: re,
            state: ut,
            onValueCommitted: Ke
        }), [
        ye,
        it,
        Le,
        ue,
        ce,
        J,
        h,
        me,
        vt,
        ht,
        st,
        Ge,
        Be,
        ne,
        g,
        l,
        z,
        Fe,
        tt,
        r,
        s,
        Ne,
        D,
        se,
        ut,
        Ke
    ]), lt = kp("div", t, {
        ref: n,
        state: ut,
        props: H,
        stateAttributesMapping: kxn
    });
    return Nev(EFi.Provider, {
        value: Dt,
        children: [
            lt,
            Oev("input", {
                ...Z.getValidationProps(J, {
                    onFocus () {
                        ye.current?.focus();
                    },
                    onChange (Tt) {
                        if (Tt.nativeEvent.defaultPrevented || J || h) return;
                        const ct = Tt.currentTarget.valueAsNumber, Kt = Number.isNaN(ct) ? null : ct, Rt = Qu(lN, Tt.nativeEvent);
                        vt(Kt, Rt), K(ne), Z.change(We.current ?? Kt);
                    }
                }),
                ref: _e,
                type: "number",
                form: p,
                name: ne,
                value: Le ?? "",
                min: r,
                max: s,
                step: a,
                disabled: J,
                readOnly: h,
                required: l,
                "aria-hidden": !0,
                tabIndex: -1,
                style: ne ? Cgt : sYe,
                suppressHydrationWarning: !0
            })
        ]
    });
}), process.env.NODE_ENV !== "production" && (EFs.displayName = "NumberFieldRoot");

}
