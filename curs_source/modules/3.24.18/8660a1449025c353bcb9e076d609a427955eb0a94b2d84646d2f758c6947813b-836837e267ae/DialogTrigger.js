import { FGe } from "./DialogRootContext.js";
import { $I, AJo, Lm, X8t, jli, wz } from "./LYd.js";
import { MRr, k_e } from "./constants_10.js";
import { Oy, zS } from "./formatErrorMessage.js";
import { rst } from "./ipa.js";
import { I4, abn } from "./popupStateMapping.js";
import { FY } from "./popupStoreUtils.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { Cz } from "./useButton.js";
import { Z8t } from "./useClick.js";
import { nci } from "./useOpenInteractionType.js";
import { Om } from "./useRenderElement.js";
import * as Gwp from "./react-runtime/react/esm-index-production.js";
var jRa;
export { jRa };
var __wakaru_G_1_initialized = false;
export function G_1() {
if (__wakaru_G_1_initialized) return;
__wakaru_G_1_initialized = true;
E(), zS(), FGe(), Cz(), Om(), I4(), k_e(), _A(), nci(), FY(), Z8t(), jRa = Gwp.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, disabled: o = !1, nativeButton: a = !0, id: l, payload: c, handle: u, ...d } = e, h = rst(!0), p = u?.store ?? h?.store;
    if (!p) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Dialog.Trigger> must be used within <Dialog.Root> or provided with a handle." : Oy(79));
    const g = $I(l), f = p.useState("floatingRootContext"), _ = p.useState("isOpenedByTrigger", g), b = p.useState("triggerPopupId", g), y = Gwp.useRef(null), { registerTrigger: S, isMountedByThisTrigger: k } = jli(g, y, p, {
        payload: c
    }), { getButtonProps: C, buttonRef: T } = wz({
        disabled: o,
        native: a
    }), I = X8t(f, {
        enabled: f != null
    }), A = AJo(()=>p.select("open"), (O)=>{
        p.set("openMethod", O);
    }), P = {
        disabled: o,
        open: _
    }, M = p.useState("triggerProps", k);
    return Lm("button", e, {
        state: P,
        ref: [
            T,
            n,
            S,
            y
        ],
        props: [
            I.reference,
            M,
            A,
            {
                [MRr]: "",
                id: g,
                "aria-haspopup": "dialog",
                "aria-expanded": _,
                "aria-controls": b
            },
            d,
            C
        ],
        stateAttributesMapping: abn
    });
}), process.env.NODE_ENV !== "production" && (jRa.displayName = "DialogTrigger");

}
