import { EDi } from "./FieldItemContext.js";
import { mj } from "./FieldRootContext.js";
import { Bre } from "./LabelableContext.js";
import { Ore, sY } from "./constants_11.js";
import { Zki } from "./error_2.js";
import { G1s } from "./f0s.js";
import { Fre, bPg, jmt, kp, oY } from "./qIc.js";
import { RRe, q3t } from "./safeReact.js";
import { x } from "./tslib.es6.js";
import { SPg } from "./useLabel.js";
import { wp } from "./useRenderElement.js";
import * as V1s from "./react-runtime/react/esm-index-production.js";
var j1s;
export { j1s };
var __wakaru_Bcf_initialized = false;
export function Bcf() {
if (__wakaru_Bcf_initialized) return;
__wakaru_Bcf_initialized = true;
x(), Zki(), q3t(), mj(), sY(), wp(), Bre(), SPg(), EDi(), j1s = V1s.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, id: o, nativeLabel: a = !0, ...c } = t, l = oY(!1), u = G1s(), { labelId: h } = Fre(), p = {
        ...l.state,
        disabled: l.disabled || u.disabled
    }, g = V1s.useRef(null), f = bPg({
        id: h ?? o,
        native: a
    });
    return process.env.NODE_ENV !== "production" && V1s.useEffect(()=>{
        if (!g.current) return;
        const b = g.current.tagName === "LABEL";
        if (a) {
            if (!b) {
                const y = RRe.captureOwnerStack?.() || "";
                jmt(`<Field.Label> expected a <label> element because the \`nativeLabel\` prop is true. Rendering a non-<label> disables native label association, so \`htmlFor\` will not work. Use a real <label> in the \`render\` prop, or set \`nativeLabel\` to \`false\`.${y}`);
            }
        } else if (b) {
            const y = RRe.captureOwnerStack?.() || "";
            jmt(`<Field.Label> expected a non-<label> element because the \`nativeLabel\` prop is false. Rendering a <label> assumes native label behavior while Base UI treats it as non-native, which can cause unexpected pointer behavior. Use a non-<label> in the \`render\` prop, or set \`nativeLabel\` to \`true\`.${y}`);
        }
    }, [
        a
    ]), kp("label", t, {
        ref: [
            n,
            g
        ],
        state: p,
        props: [
            f,
            c
        ],
        stateAttributesMapping: Ore
    });
}), process.env.NODE_ENV !== "production" && (j1s.displayName = "FieldLabel");

}
