import { ppi } from "./FieldItemContext.js";
import { N7 } from "./FieldRootContext.js";
import { Lm, Vj, kjy, r8t, zQ } from "./LYd.js";
import { VQ } from "./LabelableContext.js";
import { BY, wne } from "./constants_11.js";
import { WIr } from "./error_2.js";
import { YOr } from "./ipa.js";
import { BHe, Qvn } from "./safeReact.js";
import { E } from "./tslib.es6.js";
import { Cjy } from "./useLabel.js";
import { Om } from "./useRenderElement.js";
import * as Lma from "./react-runtime/react/esm-index-production.js";
var Oma;
export { Oma };
var __wakaru_k1S_initialized = false;
export function k1S() {
if (__wakaru_k1S_initialized) return;
__wakaru_k1S_initialized = true;
E(), WIr(), Qvn(), N7(), BY(), Om(), VQ(), Cjy(), ppi(), Oma = Lma.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, id: o, nativeLabel: a = !0, ...l } = e, c = Vj(!1), u = YOr(), { labelId: d } = zQ(), h = {
        ...c.state,
        disabled: c.disabled || u.disabled
    }, p = Lma.useRef(null), g = kjy({
        id: d ?? o,
        native: a
    });
    return process.env.NODE_ENV !== "production" && Lma.useEffect(()=>{
        if (!p.current) return;
        const _ = p.current.tagName === "LABEL";
        if (a) {
            if (!_) {
                const b = BHe.captureOwnerStack?.() || "";
                r8t(`<Field.Label> expected a <label> element because the \`nativeLabel\` prop is true. Rendering a non-<label> disables native label association, so \`htmlFor\` will not work. Use a real <label> in the \`render\` prop, or set \`nativeLabel\` to \`false\`.${b}`);
            }
        } else if (_) {
            const b = BHe.captureOwnerStack?.() || "";
            r8t(`<Field.Label> expected a non-<label> element because the \`nativeLabel\` prop is false. Rendering a <label> assumes native label behavior while Base UI treats it as non-native, which can cause unexpected pointer behavior. Use a non-<label> in the \`render\` prop, or set \`nativeLabel\` to \`true\`.${b}`);
        }
    }, [
        a
    ]), Lm("label", e, {
        ref: [
            n,
            p
        ],
        state: h,
        props: [
            g,
            l
        ],
        stateAttributesMapping: wne
    });
}), process.env.NODE_ENV !== "production" && (Oma.displayName = "FieldLabel");

}
