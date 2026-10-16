import { Lm, wz, zd } from "./LYd.js";
import { Okt } from "./PopoverRootContext.js";
import { HZh } from "./closePart.js";
import { VS } from "./createBaseUIEventDetails.js";
import { Lkt, i4S } from "./ipa.js";
import { Tli, Zb } from "./reason-parts.js";
import { E } from "./tslib.es6.js";
import { Cz } from "./useButton.js";
import { Om } from "./useRenderElement.js";
import * as c4S from "./react-runtime/react/esm-index-production.js";
var GSa;
export { GSa };
var __wakaru_u4S_initialized = false;
export function u4S() {
if (__wakaru_u4S_initialized) return;
__wakaru_u4S_initialized = true;
E(), Okt(), Om(), VS(), HZh(), Cz(), Zb(), GSa = c4S.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, disabled: o = !1, nativeButton: a = !0, ...l } = e, { buttonRef: c, getButtonProps: u } = wz({
        disabled: o,
        focusableWhenDisabled: !1,
        native: a
    }), { store: d } = Lkt();
    return i4S(), Lm("button", e, {
        ref: [
            n,
            c
        ],
        props: [
            {
                onClick (p) {
                    d.setOpen(!1, zd(Tli, p.nativeEvent));
                }
            },
            l,
            u
        ]
    });
}), process.env.NODE_ENV !== "production" && (GSa.displayName = "PopoverClose");

}
