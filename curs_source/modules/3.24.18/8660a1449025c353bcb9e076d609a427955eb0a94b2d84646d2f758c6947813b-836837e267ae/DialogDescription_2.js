import { FGe } from "./DialogRootContext.js";
import { $I, Lm } from "./LYd.js";
import { rst } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { Om } from "./useRenderElement.js";
import * as __1 from "./react-runtime/react/esm-index-production.js";
var PRa;
export { PRa };
var __wakaru_b_1_initialized = false;
export function b_1() {
if (__wakaru_b_1_initialized) return;
__wakaru_b_1_initialized = true;
E(), FGe(), Om(), _A(), PRa = __1.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, id: o, ...a } = e, { store: l } = rst(), c = $I(o);
    return l.useSyncedValueWithCleanup("descriptionElementId", c), Lm("p", e, {
        ref: n,
        props: [
            {
                id: c
            },
            a
        ]
    });
}), process.env.NODE_ENV !== "production" && (PRa.displayName = "DialogDescription");

}
