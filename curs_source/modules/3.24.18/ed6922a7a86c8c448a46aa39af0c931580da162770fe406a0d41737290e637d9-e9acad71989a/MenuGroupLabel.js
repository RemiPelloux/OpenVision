import { Q0s } from "./MenuGroupContext.js";
import { taf } from "./f0s.js";
import { SR, kp } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { wp } from "./useRenderElement.js";
import * as raf from "./react-runtime/react/esm-index-production.js";
var e1s;
export { e1s };
var __wakaru_saf_initialized = false;
export function saf() {
if (__wakaru_saf_initialized) return;
__wakaru_saf_initialized = true;
x(), af(), wp(), TD(), Q0s(), e1s = raf.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, id: o, ...a } = t, c = SR(o), l = taf();
    return gl(()=>(l(c), ()=>{
            l(void 0);
        }), [
        l,
        c
    ]), kp("div", t, {
        ref: n,
        props: {
            id: c,
            role: "presentation",
            ...a
        }
    });
}), process.env.NODE_ENV !== "production" && (e1s.displayName = "MenuGroupLabel");

}
