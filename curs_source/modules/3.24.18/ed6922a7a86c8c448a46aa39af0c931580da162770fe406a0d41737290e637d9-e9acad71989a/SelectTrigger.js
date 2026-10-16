import { mj } from "./FieldRootContext.js";
import { Bre } from "./LabelableContext.js";
import { VRe } from "./SelectRootContext.js";
import { Ore, sY } from "./constants_11.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { uYe } from "./element.js";
import { Fhs } from "./getPseudoElementBounds.js";
import { QK } from "./mergeProps.js";
import { C5 } from "./owner.js";
import { Qgt, g2 } from "./popupStateMapping.js";
import { Fre, I3, KP, KS, Lhs, Ohs, Q5e, Qu, aN, cg, e$, h0i, jc, kp, oY, su, zgt } from "./qIc.js";
import { g_, lN, m0i } from "./reason-parts.js";
import { Nhs } from "./resolveAriaLabelledBy.js";
import { cN } from "./shadowDom.js";
import { J5e, f_ } from "./store_4.js";
import { x } from "./tslib.es6.js";
import { t$ } from "./useButton.js";
import { Kgt } from "./useLabelableId.js";
import { wp } from "./useRenderElement.js";
import { Cy } from "./useStableCallback.js";
import { kU } from "./useStore.js";
import { A3 } from "./useTimeout.js";
import { oCe } from "./useValueAsRef.js";
import * as Bhs from "./react-runtime/react/esm-index-production.js";
var USn, Isl, Asl, Uhs;
export { Asl, Isl, USn, Uhs };
var __wakaru_kPg_initialized = false;
export function kPg() {
if (__wakaru_kPg_initialized) return;
__wakaru_kPg_initialized = true;
x(), C5(), A3(), Cy(), oCe(), VRe(), mj(), Bre(), g2(), sY(), wp(), J5e(), Fhs(), Ty(), Kgt(), Nhs(), kU(), t$(), QK(), cN(), g_(), uYe(), USn = 2, Isl = 400, Asl = {
    ...Qgt,
    ...Ore,
    popupSide: (e)=>e ? {
            "data-popup-side": e
        } : null,
    value: ()=>null
}, Uhs = Bhs.forwardRef(function(t, n) {
    const { render: i, className: r, id: s, disabled: o = !1, nativeButton: a = !0, style: c, ...l } = t, { setTouched: u, setFocused: h, validationMode: p, state: g, disabled: f } = oY(), { labelId: v } = Fre(), { store: b, setOpen: y, selectionRef: T, validation: E, readOnly: A, required: R, alignItemWithTriggerActiveRef: D, disabled: P } = Q5e(), N = f || P || o, O = jc(b, f_.open), F = jc(b, f_.mounted), H = jc(b, f_.value), $ = jc(b, f_.triggerProps), W = jc(b, f_.positionerElement), G = jc(b, f_.listElement), q = jc(b, f_.popupSide), z = jc(b, f_.id), X = jc(b, f_.labelId), Y = jc(b, f_.hasSelectedValue), Z = F && W ? q : null, K = s ?? z, J = Lhs(v, X);
    zgt({
        id: K
    });
    const ne = KP(W), ee = Bhs.useRef(null), { getButtonProps: se, buttonRef: re } = e$({
        disabled: N,
        native: a
    }), ue = su((Ce)=>{
        b.set("triggerElement", Ce);
    }), ce = aN(), de = aN(), le = aN();
    Bhs.useEffect(()=>{
        if (O) return le.start(Isl, ()=>{
            T.current.allowUnselectedMouseUp = !0, T.current.allowSelectedMouseUp = !0;
        }), ()=>{
            le.clear();
        };
        T.current = {
            allowSelectedMouseUp: !1,
            allowUnselectedMouseUp: !1,
            dragY: 0
        }, de.clear();
    }, [
        O,
        T,
        de,
        le
    ]);
    const ye = I3($, {
        id: K,
        role: "combobox",
        "aria-expanded": O ? "true" : "false",
        "aria-haspopup": "listbox",
        "aria-controls": O ? G?.id ?? h0i(W)?.id : void 0,
        "aria-labelledby": J,
        "aria-readonly": A || void 0,
        "aria-required": R || void 0,
        tabIndex: N ? -1 : 0,
        onFocus (Ce) {
            h(!0), O && D.current && y(!1, Qu(lN, Ce.nativeEvent)), ce.start(0, ()=>{
                b.set("forceMount", !0);
            });
        },
        onBlur (Ce) {
            cg(W, Ce.relatedTarget) || (u(!0), h(!1), p === "onBlur" && E.commit(H));
        },
        onMouseDown (Ce) {
            if (O) return;
            const xe = KS(Ce.currentTarget);
            function Le(Be) {
                if (!ee.current) return;
                const je = Be.target;
                if (cg(ee.current, je) || cg(ne.current, je)) return;
                const Ge = Ohs(ee.current);
                Be.clientX >= Ge.left - USn && Be.clientX <= Ge.right + USn && Be.clientY >= Ge.top - USn && Be.clientY <= Ge.bottom + USn || y(!1, Qu(m0i, Be));
            }
            de.start(0, ()=>{
                xe.addEventListener("mouseup", Le, {
                    once: !0
                });
            });
        }
    }, l, se), _e = E.getValidationProps(N, ye);
    _e.role = "combobox";
    const me = {
        ...g,
        open: O,
        disabled: N,
        value: H,
        readOnly: A,
        popupSide: Z,
        placeholder: !Y
    };
    return kp("button", t, {
        ref: [
            n,
            ee,
            re,
            ue
        ],
        state: me,
        stateAttributesMapping: Asl,
        props: _e
    });
}), process.env.NODE_ENV !== "production" && (Uhs.displayName = "SelectTrigger");

}
