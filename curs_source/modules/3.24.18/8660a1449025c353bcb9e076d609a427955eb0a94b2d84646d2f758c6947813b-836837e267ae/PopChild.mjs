import { vFi } from "./MotionConfigContext.mjs";
import { r8 } from "./index_18.mjs";
import { hRs } from "./ofv.js";
import { E } from "./tslib.es6.js";
import { Ov0 } from "./use-composed-ref.mjs";
import * as b1v from "./react-runtime/react/esm-index-production.js";
var S1v;
export { S1v };
var __wakaru_Hv0_initialized = false;
export function Hv0() {
if (__wakaru_Hv0_initialized) return;
__wakaru_Hv0_initialized = true;
"use client";
E(), r8(), vFi(), Ov0(), S1v = class extends b1v.Component {
    getSnapshotBeforeUpdate(t) {
        const e = this.props.childRef.current;
        if (hRs(e) && t.isPresent && !this.props.isPresent && this.props.pop !== !1) {
            const n = e.offsetParent, i = hRs(n) && n.offsetWidth || 0, r = hRs(n) && n.offsetHeight || 0, s = getComputedStyle(e), o = this.props.sizeRef.current;
            o.height = parseFloat(s.height), o.width = parseFloat(s.width), o.top = e.offsetTop, o.left = e.offsetLeft, o.right = i - o.width - o.left, o.bottom = r - o.height - o.top;
        }
        return null;
    }
    componentDidUpdate() {}
    render() {
        return this.props.children;
    }
};

}
