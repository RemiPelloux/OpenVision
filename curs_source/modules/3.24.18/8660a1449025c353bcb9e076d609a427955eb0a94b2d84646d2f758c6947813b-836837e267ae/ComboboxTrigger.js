import { Y_e } from "./ComboboxRootContext.js";
import { N7 } from "./FieldRootContext.js";
import { B5, Ez, Ic, Lm, MJo, Nf, Vj, X8t, _Jo, a6, ak, pu, tit, wz, y2r, zQ, zd } from "./LYd.js";
import { VQ } from "./LabelableContext.js";
import { VS } from "./createBaseUIEventDetails.js";
import { Sne } from "./event_3.js";
import { DJo } from "./getPseudoElementBounds.js";
import { q8r } from "./index_176.js";
import { U8r, bGe, ccp, ucp, x0e } from "./ipa.js";
import { hB } from "./owner.js";
import { Eli, Zb } from "./reason-parts.js";
import { S2r } from "./resolveAriaLabelledBy.js";
import { $D } from "./shadowDom.js";
import { ZCa, z8r } from "./stateAttributesMapping_8.js";
import { gm, yGe } from "./store_5.js";
import { E } from "./tslib.es6.js";
import { Cz } from "./useButton.js";
import { Z8t } from "./useClick.js";
import { nit } from "./useLabelableId.js";
import { Om } from "./useRenderElement.js";
import { Jy } from "./useStableCallback.js";
import { TW } from "./useStore.js";
import { M7 } from "./useTimeout.js";
import { bJo } from "./useTypeahead.js";
import * as tTa from "./react-runtime/react/esm-index-production.js";
var Kfi, Z8r;
export { Kfi, Z8r };
var __wakaru_wcp_initialized = false;
export function wcp() {
if (__wakaru_wcp_initialized) return;
__wakaru_wcp_initialized = true;
E(), Jy(), M7(), hB(), Om(), Y_e(), ZCa(), yGe(), N7(), VQ(), DJo(), VS(), nit(), S2r(), q8r(), TW(), bJo(), Z8t(), Cz(), Sne(), Zb(), $D(), Kfi = 2, Z8r = tTa.forwardRef(function(e, n) {
    const { render: i, className: r, nativeButton: s = !0, disabled: o = !1, id: a, style: l, ...c } = e, { state: u, disabled: d, setTouched: h, setFocused: p, validationMode: g, validation: f } = Vj(), { labelId: _ } = zQ(), b = x0e(), { filteredItems: y } = bGe(), S = Ic(b, gm.selectionMode), k = Ic(b, gm.disabled), C = Ic(b, gm.readOnly), T = Ic(b, gm.required), I = Ic(b, gm.mounted), A = Ic(b, gm.popupSide), P = Ic(b, gm.positionerElement), M = Ic(b, gm.listElement), O = Ic(b, gm.popupId), N = Ic(b, gm.triggerProps), U = Ic(b, gm.triggerElement), j = Ic(b, gm.inputInsidePopup), $ = Ic(b, gm.id), H = Ic(b, gm.labelId), G = Ic(b, gm.open), q = Ic(b, gm.selectedValue), K = Ic(b, gm.activeIndex), V = Ic(b, gm.selectedIndex), Y = Ic(b, gm.hasSelectedValue), J = U8r(), Q = ccp(), te = a6(), ee = d || k || o, re = y.length === 0, ie = I && P ? A : null;
    tit({
        id: j ? a : void 0
    });
    const oe = j ? a ?? $ : a, se = y2r(_, H);
    let le;
    G && j ? le = O ?? ucp($) : G && (le = M?.id);
    const ce = tTa.useRef("");
    function ae(Ce) {
        ce.current = Ce.pointerType;
    }
    const de = J.useState("domReferenceElement");
    tTa.useEffect(()=>{
        j && U && U !== de && J.set("domReferenceElement", U);
    }, [
        U,
        de,
        J,
        j
    ]);
    const { reference: he } = _Jo(J, {
        enabled: !G && !C && !k && S === "single",
        listRef: b.state.labelsRef,
        activeIndex: K,
        selectedIndex: V,
        onMatch (Ce) {
            const Se = b.state.valuesRef.current[Ce];
            Se !== void 0 && b.state.setSelectedValue(Se, zd("none"));
        }
    }), { reference: ge } = X8t(J, {
        enabled: !C && !k,
        event: "mousedown"
    }), { buttonRef: pe, getButtonProps: ve } = wz({
        native: s,
        disabled: ee
    }), fe = {
        ...u,
        open: G,
        disabled: ee,
        popupSide: ie,
        listEmpty: re,
        placeholder: S === "none" ? !1 : !Y
    }, Te = pu((Ce)=>{
        b.set("triggerElement", Ce);
    });
    return Lm("button", e, {
        ref: [
            n,
            pe,
            Te
        ],
        state: fe,
        props: [
            N,
            ge,
            he,
            {
                id: oe,
                tabIndex: j ? 0 : -1,
                role: j ? "combobox" : void 0,
                "aria-expanded": G ? "true" : "false",
                "aria-haspopup": j ? "dialog" : "listbox",
                "aria-controls": le,
                "aria-required": j && T || void 0,
                "aria-labelledby": se,
                onPointerDown: ae,
                onPointerEnter: ae,
                onFocus () {
                    p(!0), !(ee || C) && te.start(0, b.state.forceMount);
                },
                onBlur (Ce) {
                    if (!Nf(P, Ce.relatedTarget) && (h(!0), p(!1), g === "onBlur")) {
                        const Se = S === "none" ? Q : q;
                        f.commit(Se);
                    }
                },
                onMouseDown (Ce) {
                    if (ee || C || (j || J.set("domReferenceElement", Ce.currentTarget), b.state.forceMount(), ce.current !== "touch" && (b.state.inputRef.current?.focus(), j || Ce.preventDefault()), G)) return;
                    const Se = ak(Ce.currentTarget);
                    function Pe(we) {
                        if (!U) return;
                        const Ie = B5(we), Me = b.state.positionerElement, De = b.state.listElement;
                        if (Nf(U, Ie) || Nf(Me, Ie) || Nf(De, Ie) || Ie === U) return;
                        const Ne = MJo(U), be = we.clientX >= Ne.left - Kfi && we.clientX <= Ne.right + Kfi, je = we.clientY >= Ne.top - Kfi && we.clientY <= Ne.bottom + Kfi;
                        be && je || b.state.setOpen(!1, zd("cancel-open", we));
                    }
                    j && Se.addEventListener("mouseup", Pe, {
                        once: !0
                    });
                },
                onKeyDown (Ce) {
                    ee || C || (Ce.key === "ArrowDown" || Ce.key === "ArrowUp") && (Ez(Ce), b.state.setOpen(!0, zd(Eli, Ce.nativeEvent)), b.state.inputRef.current?.focus());
                }
            },
            f ? f.getValidationProps(ee, c) : c,
            ve
        ],
        stateAttributesMapping: z8r
    });
}), process.env.NODE_ENV !== "production" && (Z8r.displayName = "ComboboxTrigger");

}
