import { Nue } from "./ComboboxRootContext.js";
import { mj } from "./FieldRootContext.js";
import { Bre } from "./LabelableContext.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { lj } from "./event_3.js";
import { E2i, LQl, PQl, _6e, wve } from "./f0s.js";
import { Fhs } from "./getPseudoElementBounds.js";
import { BPs } from "./index_170.js";
import { C5 } from "./owner.js";
import { Bgt, Fre, KS, Lhs, Ohs, Qu, UO, _hs, aN, cg, e$, jc, kp, oY, su, wU, zgt } from "./qIc.js";
import { dSn, g_ } from "./reason-parts.js";
import { Nhs } from "./resolveAriaLabelledBy.js";
import { cN } from "./shadowDom.js";
import { FQl, HPs } from "./stateAttributesMapping_8.js";
import { b6e, op } from "./store_5.js";
import { x } from "./tslib.es6.js";
import { t$ } from "./useButton.js";
import { Ugt } from "./useClick.js";
import { Kgt } from "./useLabelableId.js";
import { wp } from "./useRenderElement.js";
import { Cy } from "./useStableCallback.js";
import { kU } from "./useStore.js";
import { A3 } from "./useTimeout.js";
import { bhs } from "./useTypeahead.js";
import * as jPs from "./react-runtime/react/esm-index-production.js";
var MEn, qPs;
export { MEn, qPs };
var __wakaru_Q4f_initialized = false;
export function Q4f() {
if (__wakaru_Q4f_initialized) return;
__wakaru_Q4f_initialized = true;
x(), Cy(), A3(), C5(), wp(), Nue(), FQl(), b6e(), mj(), Bre(), Fhs(), Ty(), Kgt(), Nhs(), BPs(), kU(), bhs(), Ugt(), t$(), lj(), g_(), cN(), MEn = 2, qPs = jPs.forwardRef(function(t, n) {
    const { render: i, className: r, nativeButton: s = !0, disabled: o = !1, id: a, style: c, ...l } = t, { state: u, disabled: h, setTouched: p, setFocused: g, validationMode: f, validation: v } = oY(), { labelId: b } = Fre(), y = wve(), { filteredItems: T } = _6e(), E = jc(y, op.selectionMode), A = jc(y, op.disabled), R = jc(y, op.readOnly), D = jc(y, op.required), P = jc(y, op.mounted), N = jc(y, op.popupSide), O = jc(y, op.positionerElement), F = jc(y, op.listElement), H = jc(y, op.popupId), $ = jc(y, op.triggerProps), W = jc(y, op.triggerElement), G = jc(y, op.inputInsidePopup), q = jc(y, op.id), z = jc(y, op.labelId), X = jc(y, op.open), Y = jc(y, op.selectedValue), Z = jc(y, op.activeIndex), K = jc(y, op.selectedIndex), J = jc(y, op.hasSelectedValue), ne = E2i(), ee = PQl(), se = aN(), re = h || A || o, ue = T.length === 0, ce = P && O ? N : null;
    zgt({
        id: G ? a : void 0
    });
    const de = G ? a ?? q : a, le = Lhs(b, z);
    let ye;
    X && G ? ye = H ?? LQl(q) : X && (ye = F?.id);
    const _e = jPs.useRef("");
    function me(et) {
        _e.current = et.pointerType;
    }
    const Ce = ne.useState("domReferenceElement");
    jPs.useEffect(()=>{
        G && W && W !== Ce && ne.set("domReferenceElement", W);
    }, [
        W,
        Ce,
        ne,
        G
    ]);
    const { reference: xe } = _hs(ne, {
        enabled: !X && !R && !A && E === "single",
        listRef: y.state.labelsRef,
        activeIndex: Z,
        selectedIndex: K,
        onMatch (et) {
            const We = y.state.valuesRef.current[et];
            We !== void 0 && y.state.setSelectedValue(We, Qu("none"));
        }
    }), { reference: Le } = Bgt(ne, {
        enabled: !R && !A,
        event: "mousedown"
    }), { buttonRef: Be, getButtonProps: je } = e$({
        native: s,
        disabled: re
    }), Ge = {
        ...u,
        open: X,
        disabled: re,
        popupSide: ce,
        listEmpty: ue,
        placeholder: E === "none" ? !1 : !J
    }, Xe = su((et)=>{
        y.set("triggerElement", et);
    });
    return kp("button", t, {
        ref: [
            n,
            Be,
            Xe
        ],
        state: Ge,
        props: [
            $,
            Le,
            xe,
            {
                id: de,
                tabIndex: G ? 0 : -1,
                role: G ? "combobox" : void 0,
                "aria-expanded": X ? "true" : "false",
                "aria-haspopup": G ? "dialog" : "listbox",
                "aria-controls": ye,
                "aria-required": G && D || void 0,
                "aria-labelledby": le,
                onPointerDown: me,
                onPointerEnter: me,
                onFocus () {
                    g(!0), !(re || R) && se.start(0, y.state.forceMount);
                },
                onBlur (et) {
                    if (!cg(O, et.relatedTarget) && (p(!0), g(!1), f === "onBlur")) {
                        const We = E === "none" ? ee : Y;
                        v.commit(We);
                    }
                },
                onMouseDown (et) {
                    if (re || R || (G || ne.set("domReferenceElement", et.currentTarget), y.state.forceMount(), _e.current !== "touch" && (y.state.inputRef.current?.focus(), G || et.preventDefault()), X)) return;
                    const We = KS(et.currentTarget);
                    function it(Ne) {
                        if (!W) return;
                        const Fe = UO(Ne), Qe = y.state.positionerElement, tt = y.state.listElement;
                        if (cg(W, Fe) || cg(Qe, Fe) || cg(tt, Fe) || Fe === W) return;
                        const st = Ohs(W), vt = Ne.clientX >= st.left - MEn && Ne.clientX <= st.right + MEn, ht = Ne.clientY >= st.top - MEn && Ne.clientY <= st.bottom + MEn;
                        vt && ht || y.state.setOpen(!1, Qu("cancel-open", Ne));
                    }
                    G && We.addEventListener("mouseup", it, {
                        once: !0
                    });
                },
                onKeyDown (et) {
                    re || R || (et.key === "ArrowDown" || et.key === "ArrowUp") && (wU(et), y.state.setOpen(!0, Qu(dSn, et.nativeEvent)), y.state.inputRef.current?.focus());
                }
            },
            v ? v.getValidationProps(re, l) : l,
            je
        ],
        stateAttributesMapping: HPs
    });
}), process.env.NODE_ENV !== "production" && (qPs.displayName = "ComboboxTrigger");

}
