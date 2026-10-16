import { z4f } from "./ComboboxChipsContext.js";
import { $Ql, L2i } from "./ComboboxInternalDismissButton.js";
import { P2i } from "./ComboboxPositionerContext.js";
import { Nue } from "./ComboboxRootContext.js";
import { yU } from "./DirectionContext.js";
import { OSn, khs, mj } from "./FieldRootContext.js";
import { Bre } from "./LabelableContext.js";
import { qgt, sY } from "./constants_11.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { Rgt, dds } from "./engine.js";
import { lj } from "./event_3.js";
import { GPs, PQl, _6e, q4f, wve } from "./f0s.js";
import { OBt, W5e } from "./os.js";
import { Fre, Lhs, Qu, SR, jc, kp, oY, su, wU, xM } from "./qIc.js";
import { Pgt, Pre, g_, j5e, lN } from "./reason-parts.js";
import { Nhs } from "./resolveAriaLabelledBy.js";
import { FQl, HPs } from "./stateAttributesMapping_8.js";
import { b6e, op } from "./store_5.js";
import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { wp } from "./useRenderElement.js";
import { Cy } from "./useStableCallback.js";
import { kU } from "./useStore.js";
import { jsx as HQl } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as X4f } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as Y4t from "./react-runtime/react/esm-index-production.js";
var VPs;
export { VPs };
var __wakaru_Z4f_initialized = false;
export function Z4f() {
if (__wakaru_Z4f_initialized) return;
__wakaru_Z4f_initialized = true;
x(), Cy(), TD(), wp(), Nue(), FQl(), b6e(), mj(), sY(), Bre(), z4f(), P2i(), Ty(), yU(), Nhs(), $Ql(), kU(), g_(), lj(), Rgt(), W5e(), VPs = Y4t.forwardRef(function(t, n) {
    const { render: i, className: r, disabled: s = !1, id: o, style: a, ...c } = t, { state: l, disabled: u, setTouched: h, setFocused: p, validationMode: g, validation: f } = oY(), { labelId: v } = Fre(), b = q4f(), T = !!GPs(!0), E = wve(), { filteredItems: A } = _6e(), R = PQl(), D = xM(), P = jc(E, op.required), N = jc(E, op.disabled), O = jc(E, op.readOnly), F = jc(E, op.name), H = jc(E, op.form), $ = jc(E, op.selectionMode), W = jc(E, op.autoHighlight), G = jc(E, op.inputProps), q = jc(E, op.triggerProps), z = jc(E, op.open), X = jc(E, op.mounted), Y = jc(E, op.selectedValue), Z = jc(E, op.popupSide), K = jc(E, op.positionerElement), J = jc(E, op.id), ne = jc(E, op.inline), ee = jc(E, op.modal), se = !!W, re = X && K ? Z : null, ue = u || N || s, ce = A.length === 0, de = T || ne, le = !de || ee, ye = SR(o ?? (de ? void 0 : J)), _e = Lhs(v, void 0), me = T ? qgt : l, [Ce, xe] = Y4t.useState(null), Le = Y4t.useRef(!1), Be = Y4t.useRef(null), je = Y4t.useRef(!1), Ge = $ === "none" && !T, Xe = su((Fe)=>{
        const Qe = T || E.state.inline;
        Qe && !E.state.hasInputValue && E.state.setInputValue("", Qu(lN)), E.update({
            inputElement: Fe,
            inputInsidePopup: Qe,
            inputOwnsFormValue: Ge
        });
    }), Ke = T || !f ? c : f.getValidationProps(ue, c), et = {
        ...me,
        open: z,
        disabled: ue,
        readOnly: O,
        popupSide: re,
        listEmpty: ce
    };
    function We(Fe) {
        if (!b) return;
        let Qe;
        const { highlightedChipIndex: tt } = b, st = b.chipsRef.current.length, vt = D === "rtl", ht = vt ? "ArrowRight" : "ArrowLeft", ut = vt ? "ArrowLeft" : "ArrowRight";
        if (tt !== void 0) {
            if (Fe.key === ht) Fe.preventDefault(), tt > 0 ? Qe = tt - 1 : Qe = void 0;
            else if (Fe.key === ut) Fe.preventDefault(), tt < st - 1 ? Qe = tt + 1 : Qe = void 0;
            else if (Fe.key === "Backspace" || Fe.key === "Delete") {
                Fe.preventDefault();
                const Dt = tt >= Y.length - 1 ? Y.length - 2 : tt;
                Qe = Dt >= 0 ? Dt : void 0, E.state.setIndices({
                    activeIndex: null,
                    selectedIndex: null,
                    type: "keyboard"
                });
            }
            return Qe;
        }
        return Fe.key === ht && (Fe.currentTarget.selectionStart ?? 0) === 0 && Y.length > 0 ? (Fe.preventDefault(), Qe = st > 0 ? st - 1 : void 0) : Fe.key === "Backspace" && Fe.currentTarget.value === "" && Y.length > 0 && (E.state.setIndices({
            activeIndex: null,
            selectedIndex: null,
            type: "keyboard"
        }), Fe.preventDefault()), Qe;
    }
    const it = kp("input", t, {
        state: et,
        ref: [
            n,
            E.state.inputRef,
            Xe
        ],
        props: [
            G,
            q,
            {
                type: "text",
                value: t.value ?? Ce ?? R,
                "aria-readonly": O || void 0,
                "aria-required": P || void 0,
                "aria-labelledby": _e,
                disabled: ue,
                readOnly: O,
                required: $ === "none" ? P : void 0,
                form: H,
                ...Ge && F && {
                    name: F
                },
                id: ye,
                onFocus () {
                    if (p(!0), !ne || !je.current) return;
                    je.current = !1;
                    const Fe = Be.current;
                    Fe == null || !Object.hasOwn(E.state.valuesRef.current, Fe) || E.state.setIndices({
                        activeIndex: Fe
                    });
                },
                onBlur () {
                    h(!0), p(!1);
                    const Fe = E.state.activeIndex;
                    if (ne && Fe !== null && W !== "always" && (Be.current = Fe, je.current = !0, E.state.setIndices({
                        activeIndex: null
                    })), g === "onBlur") {
                        const Qe = $ === "none" ? R : Y;
                        f.commit(Qe);
                    }
                },
                onCompositionStart (Fe) {
                    OBt || (Le.current = !0, xe(Fe.currentTarget.value));
                },
                onCompositionEnd (Fe) {
                    Le.current = !1;
                    const Qe = Fe.currentTarget.value;
                    xe(null), E.state.setInputValue(Qe, Qu(j5e, Fe.nativeEvent));
                },
                onChange (Fe) {
                    const Qe = Fe.nativeEvent.inputType, tt = !Qe || Qe === "insertReplacementText", st = Le.current || !tt;
                    if (Le.current) {
                        const lt = Fe.currentTarget.value;
                        xe(lt), lt === "" && !E.state.openOnInputClick && !E.state.inputInsidePopup && E.state.setOpen(!1, Qu(Pre, Fe.nativeEvent));
                        const Tt = lt.trim(), ct = se && Tt !== "";
                        !O && !ue && Tt && st && (E.state.setOpen(!0, Qu(j5e, Fe.nativeEvent)), se || E.state.setIndices({
                            activeIndex: null,
                            selectedIndex: null,
                            type: E.state.keyboardActiveRef.current ? "keyboard" : "pointer"
                        })), z && E.state.activeIndex !== null && !ct && E.state.setIndices({
                            activeIndex: null,
                            selectedIndex: null,
                            type: E.state.keyboardActiveRef.current ? "keyboard" : "pointer"
                        });
                        return;
                    }
                    const vt = Qu(j5e, Fe.nativeEvent);
                    if (E.state.setInputValue(Fe.currentTarget.value, vt), vt.isCanceled) return;
                    const ht = Fe.currentTarget.value === "", ut = Qu(Pre, Fe.nativeEvent);
                    ht && !E.state.inputInsidePopup && ($ === "single" && E.state.setSelectedValue(null, ut), E.state.openOnInputClick || E.state.setOpen(!1, ut));
                    const Dt = Fe.currentTarget.value.trim();
                    !O && !ue && Dt && st && (E.state.setOpen(!0, Qu(j5e, Fe.nativeEvent)), se || E.state.setIndices({
                        activeIndex: null,
                        selectedIndex: null,
                        type: E.state.keyboardActiveRef.current ? "keyboard" : "pointer"
                    })), z && E.state.activeIndex !== null && !se && E.state.setIndices({
                        activeIndex: null,
                        selectedIndex: null,
                        type: E.state.keyboardActiveRef.current ? "keyboard" : "pointer"
                    });
                },
                onKeyDown (Fe) {
                    if (ue || O || Fe.ctrlKey || Fe.shiftKey || Fe.altKey || Fe.metaKey) return;
                    E.state.keyboardActiveRef.current = !0;
                    const Qe = Fe.currentTarget, tt = Qe.scrollWidth - Qe.clientWidth, st = D === "rtl";
                    if (Fe.key === "Home") {
                        wU(Fe);
                        const ut = dds && st ? Qe.value.length : 0;
                        Qe.setSelectionRange(ut, ut), Qe.scrollLeft = 0;
                        return;
                    }
                    if (Fe.key === "End") {
                        wU(Fe);
                        const ut = dds && st ? 0 : Qe.value.length;
                        Qe.setSelectionRange(ut, ut), Qe.scrollLeft = st ? -tt : tt;
                        return;
                    }
                    if (!X && Fe.key === "Escape") {
                        const ut = $ === "multiple" && Array.isArray(Y) ? Y.length === 0 : Y === null, Dt = Qu(Pgt, Fe.nativeEvent), lt = $ === "multiple" ? [] : null;
                        E.state.setInputValue("", Dt), E.state.setSelectedValue(lt, Dt), !ut && !E.state.inline && !Dt.isPropagationAllowed && Fe.stopPropagation();
                        return;
                    }
                    if (b && Fe.key === "Backspace" && Qe.value === "" && b.highlightedChipIndex === void 0 && Array.isArray(Y) && Y.length > 0) {
                        const ut = b.chipsRef.current.length, Dt = ut > 0 ? ut - 1 : Y.length - 1, lt = Y.filter((Tt, ct)=>ct !== Dt);
                        E.state.setIndices({
                            activeIndex: null,
                            selectedIndex: null,
                            type: E.state.keyboardActiveRef.current ? "keyboard" : "pointer"
                        }), E.state.setSelectedValue(lt, Qu(lN, Fe.nativeEvent));
                        return;
                    }
                    const vt = b?.highlightedChipIndex !== void 0, ht = We(Fe);
                    if (b?.setHighlightedChipIndex(ht), ht !== void 0 ? b?.chipsRef.current[ht]?.focus() : vt && E.state.inputRef.current?.focus(), Fe.which !== 229 && Fe.key === "Enter" && z) {
                        const ut = E.state.activeIndex, Dt = Fe.nativeEvent;
                        if (ut === null) {
                            if (ne) return;
                            E.state.setOpen(!1, Qu(lN, Dt));
                            return;
                        }
                        wU(Fe);
                        const lt = E.state.listRef.current[ut];
                        lt && (E.state.selectionEventRef.current = Dt, lt.click(), E.state.selectionEventRef.current = null);
                    }
                },
                onPointerMove () {
                    E.state.keyboardActiveRef.current = !1;
                },
                onPointerDown () {
                    E.state.keyboardActiveRef.current = !1;
                }
            },
            Ke
        ],
        stateAttributesMapping: HPs
    }), Ne = T ? HQl(OSn.Provider, {
        value: khs,
        children: it
    }) : it;
    return X4f(Y4t.Fragment, {
        children: [
            z && le && HQl(L2i, {
                ref: E.state.startDismissRef
            }),
            Ne
        ]
    });
}), process.env.NODE_ENV !== "production" && (VPs.displayName = "ComboboxInput");

}
