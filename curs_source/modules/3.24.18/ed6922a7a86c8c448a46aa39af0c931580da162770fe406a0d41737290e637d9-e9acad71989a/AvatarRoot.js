import { COs, _Fi } from "./AvatarRootContext.js";
import { kp } from "./qIc.js";
import { TOs, bFi } from "./stateAttributesMapping_9.js";
import { x } from "./tslib.es6.js";
import { wp } from "./useRenderElement.js";
import * as EOs from "./react-runtime/react/esm-index-production.js";
import { jsx as nJf } from "./react-runtime/react/esm-jsx-runtime-production.js";
var xOs;
export { xOs };
var __wakaru_iJf_initialized = false;
export function iJf() {
if (__wakaru_iJf_initialized) return;
__wakaru_iJf_initialized = true;
x(), wp(), COs(), TOs(), xOs = EOs.forwardRef(function(t, n) {
    const { className: i, render: r, style: s, ...o } = t, [a, c] = EOs.useState("idle"), l = {
        imageLoadingStatus: a
    }, u = EOs.useMemo(()=>({
            imageLoadingStatus: a,
            setImageLoadingStatus: c
        }), [
        a,
        c
    ]), h = kp("span", t, {
        state: l,
        ref: n,
        props: o,
        stateAttributesMapping: bFi
    });
    return nJf(_Fi.Provider, {
        value: u,
        children: h
    });
}), process.env.NODE_ENV !== "production" && (xOs.displayName = "AvatarRoot");

}
