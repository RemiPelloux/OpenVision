import { Vhs } from "./SelectPositionerContext.js";
import { VRe } from "./SelectRootContext.js";
import { Gsl, Q5e, jc, kp, su } from "./qIc.js";
import { J5e, f_ } from "./store_4.js";
import { Jsl, XSn } from "./styles.js";
import { x } from "./tslib.es6.js";
import { wp } from "./useRenderElement.js";
import { Cy } from "./useStableCallback.js";
import { kU } from "./useStore.js";
import { jhs, qhs } from "./utils_17.js";
import * as JPg from "./react-runtime/react/esm-index-production.js";
var ops;
export { ops };
var __wakaru_eLg_initialized = false;
export function eLg() {
if (__wakaru_eLg_initialized) return;
__wakaru_eLg_initialized = true;
x(), Cy(), VRe(), Vhs(), wp(), Jsl(), qhs(), J5e(), kU(), ops = JPg.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, ...o } = t, { store: a, scrollHandlerRef: c } = Q5e(), { alignItemWithTriggerActive: l } = Gsl(), u = jc(a, f_.hasScrollArrows), h = jc(a, f_.openMethod), p = jc(a, f_.multiple), f = {
        id: `${jc(a, f_.id)}-list`,
        role: "listbox",
        "aria-multiselectable": p || void 0,
        onScroll (b) {
            c.current?.(b.currentTarget);
        },
        ...l && {
            style: jhs
        },
        className: u && h !== "touch" ? XSn.className : void 0
    }, v = su((b)=>{
        a.set("listElement", b);
    });
    return kp("div", t, {
        ref: [
            n,
            v
        ],
        props: [
            f,
            o
        ]
    });
}), process.env.NODE_ENV !== "production" && (ops.displayName = "SelectList");

}
