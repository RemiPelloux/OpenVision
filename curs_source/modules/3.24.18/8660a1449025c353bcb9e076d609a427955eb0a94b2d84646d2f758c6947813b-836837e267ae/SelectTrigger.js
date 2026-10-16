import { N7 } from "./FieldRootContext.js";
import { Ic, Lm, MJo, Nf, Qnt, Vj, a6, ak, pRr, pu, tit, uB, uL, wz, y2r, zQ, zd } from "./LYd.js";
import { VQ } from "./LabelableContext.js";
import { tWe } from "./SelectRootContext.js";
import { BY, wne } from "./constants_11.js";
import { VS } from "./createBaseUIEventDetails.js";
import { zHe } from "./element.js";
import { DJo } from "./getPseudoElementBounds.js";
import { mne } from "./mergeProps.js";
import { hB } from "./owner.js";
import { I4, a7t } from "./popupStateMapping.js";
import { Zb, gRr, kO } from "./reason-parts.js";
import { S2r } from "./resolveAriaLabelledBy.js";
import { $D } from "./shadowDom.js";
import { _S, iit } from "./store_4.js";
import { E } from "./tslib.es6.js";
import { Cz } from "./useButton.js";
import { nit } from "./useLabelableId.js";
import { Om } from "./useRenderElement.js";
import { Jy } from "./useStableCallback.js";
import { TW } from "./useStore.js";
import { M7 } from "./useTimeout.js";
import { Fwe } from "./useValueAsRef.js";
import * as NJo from "./react-runtime/react/esm-index-production.js";
var rci, hlh, plh, LJo;
export { LJo, hlh, plh, rci };
var __wakaru_Ejy_initialized = false;
export function Ejy() {
if (__wakaru_Ejy_initialized) return;
__wakaru_Ejy_initialized = true;
E(), hB(), M7(), Jy(), Fwe(), tWe(), N7(), VQ(), I4(), BY(), Om(), iit(), DJo(), VS(), nit(), S2r(), TW(), Cz(), mne(), $D(), Zb(), zHe(), rci = 2, hlh = 400, plh = {
    ...a7t,
    ...wne,
    popupSide: (t)=>t ? {
            "data-popup-side": t
        } : null,
    value: ()=>null
}, LJo = NJo.forwardRef(function(e, n) {
    const { render: i, className: r, id: s, disabled: o = !1, nativeButton: a = !0, style: l, ...c } = e, { setTouched: u, setFocused: d, validationMode: h, state: p, disabled: g } = Vj(), { labelId: f } = zQ(), { store: _, setOpen: b, selectionRef: y, validation: S, readOnly: k, required: C, alignItemWithTriggerActiveRef: T, disabled: I } = Qnt(), A = g || I || o, P = Ic(_, _S.open), M = Ic(_, _S.mounted), O = Ic(_, _S.value), N = Ic(_, _S.triggerProps), U = Ic(_, _S.positionerElement), j = Ic(_, _S.listElement), $ = Ic(_, _S.popupSide), H = Ic(_, _S.id), G = Ic(_, _S.labelId), q = Ic(_, _S.hasSelectedValue), K = M && U ? $ : null, V = s ?? H, Y = y2r(f, G);
    tit({
        id: V
    });
    const J = uL(U), Q = NJo.useRef(null), { getButtonProps: te, buttonRef: ee } = wz({
        disabled: A,
        native: a
    }), re = pu((de)=>{
        _.set("triggerElement", de);
    }), ie = a6(), oe = a6(), se = a6();
    NJo.useEffect(()=>{
        if (P) return se.start(hlh, ()=>{
            y.current.allowUnselectedMouseUp = !0, y.current.allowSelectedMouseUp = !0;
        }), ()=>{
            se.clear();
        };
        y.current = {
            allowSelectedMouseUp: !1,
            allowUnselectedMouseUp: !1,
            dragY: 0
        }, oe.clear();
    }, [
        P,
        y,
        oe,
        se
    ]);
    const le = uB(N, {
        id: V,
        role: "combobox",
        "aria-expanded": P ? "true" : "false",
        "aria-haspopup": "listbox",
        "aria-controls": P ? j?.id ?? pRr(U)?.id : void 0,
        "aria-labelledby": Y,
        "aria-readonly": k || void 0,
        "aria-required": C || void 0,
        tabIndex: A ? -1 : 0,
        onFocus (de) {
            d(!0), P && T.current && b(!1, zd(kO, de.nativeEvent)), ie.start(0, ()=>{
                _.set("forceMount", !0);
            });
        },
        onBlur (de) {
            Nf(U, de.relatedTarget) || (u(!0), d(!1), h === "onBlur" && S.commit(O));
        },
        onMouseDown (de) {
            if (P) return;
            const he = ak(de.currentTarget);
            function ge(pe) {
                if (!Q.current) return;
                const ve = pe.target;
                if (Nf(Q.current, ve) || Nf(J.current, ve)) return;
                const fe = MJo(Q.current);
                pe.clientX >= fe.left - rci && pe.clientX <= fe.right + rci && pe.clientY >= fe.top - rci && pe.clientY <= fe.bottom + rci || b(!1, zd(gRr, pe));
            }
            oe.start(0, ()=>{
                he.addEventListener("mouseup", ge, {
                    once: !0
                });
            });
        }
    }, c, te), ce = S.getValidationProps(A, le);
    ce.role = "combobox";
    const ae = {
        ...p,
        open: P,
        disabled: A,
        value: O,
        readOnly: k,
        popupSide: K,
        placeholder: !q
    };
    return Lm("button", e, {
        ref: [
            n,
            Q,
            ee,
            re
        ],
        state: ae,
        stateAttributesMapping: plh,
        props: ce
    });
}), process.env.NODE_ENV !== "production" && (LJo.displayName = "SelectTrigger");

}
