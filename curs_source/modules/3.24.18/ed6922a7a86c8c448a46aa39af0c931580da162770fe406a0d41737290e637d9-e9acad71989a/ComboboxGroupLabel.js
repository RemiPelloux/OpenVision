import { oJl } from "./ComboboxGroupContext.js";
import { _Uf } from "./f0s.js";
import { SR, kp } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { wp } from "./useRenderElement.js";
import * as bUf from "./react-runtime/react/esm-index-production.js";
var U2i;
export { U2i };
var __wakaru_lJl_initialized = false;
export function lJl() {
if (__wakaru_lJl_initialized) return;
__wakaru_lJl_initialized = true;
x(), af(), TD(), oJl(), wp(), U2i = bUf.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, id: o, ...a } = t, { setLabelId: c } = _Uf(), l = SR(o);
    return gl(()=>(c(l), ()=>{
            c(void 0);
        }), [
        l,
        c
    ]), kp("div", t, {
        ref: n,
        props: [
            {
                id: l
            },
            a
        ]
    });
}), process.env.NODE_ENV !== "production" && (U2i.displayName = "ComboboxGroupLabel");

}
