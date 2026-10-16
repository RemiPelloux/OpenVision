import { FGe } from "./DialogRootContext.js";
import { $I, Lm } from "./LYd.js";
import { rst } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { Om } from "./useRenderElement.js";
import * as H_1 from "./react-runtime/react/esm-index-production.js";
var URa;
export { URa };
var __wakaru_W_1_initialized = false;
export function W_1() {
if (__wakaru_W_1_initialized) return;
__wakaru_W_1_initialized = true;
E(), FGe(), Om(), _A(), URa = H_1.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, id: o, ...a } = e, { store: l } = rst(), c = $I(o);
    return l.useSyncedValueWithCleanup("titleElementId", c), Lm("h2", e, {
        ref: n,
        props: [
            {
                id: c
            },
            a
        ]
    });
}), process.env.NODE_ENV !== "production" && (URa.displayName = "DialogTitle");

}
