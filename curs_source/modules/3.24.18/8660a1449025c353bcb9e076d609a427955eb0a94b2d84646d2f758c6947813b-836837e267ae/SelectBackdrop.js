import { Ic, Lm, Qnt } from "./LYd.js";
import { tWe } from "./SelectRootContext.js";
import { I4, T_e } from "./popupStateMapping.js";
import { D7, l6 } from "./stateAttributesMapping.js";
import { _S, iit } from "./store_4.js";
import { E } from "./tslib.es6.js";
import { Om } from "./useRenderElement.js";
import { TW } from "./useStore.js";
import * as Djy from "./react-runtime/react/esm-index-production.js";
var flh, UJo;
export { UJo, flh };
var __wakaru_Njy_initialized = false;
export function Njy() {
if (__wakaru_Njy_initialized) return;
__wakaru_Njy_initialized = true;
E(), tWe(), I4(), l6(), Om(), iit(), TW(), flh = {
    ...T_e,
    ...D7
}, UJo = Djy.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, { store: a } = Qnt(), l = Ic(a, _S.open), c = Ic(a, _S.mounted), u = Ic(a, _S.transitionStatus);
    return Lm("div", e, {
        state: {
            open: l,
            transitionStatus: u
        },
        ref: n,
        props: [
            {
                role: "presentation",
                hidden: !c,
                style: {
                    userSelect: "none",
                    WebkitUserSelect: "none"
                }
            },
            o
        ],
        stateAttributesMapping: flh
    });
}), process.env.NODE_ENV !== "production" && (UJo.displayName = "SelectBackdrop");

}
