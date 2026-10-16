import { Bre, y1i } from "./LabelableContext.js";
import { Fre, SR, l6, su } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { xW } from "./useRefWithInit.js";
import { Cy } from "./useStableCallback.js";
import { jsx as Rcf } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as V0n from "./react-runtime/react/esm-index-production.js";
var wDi;
export { wDi };
var __wakaru_D3l_initialized = false;
export function D3l() {
if (__wakaru_D3l_initialized) return;
__wakaru_D3l_initialized = true;
x(), Cy(), xW(), TD(), Bre(), wDi = function(t) {
    const n = SR(), i = t.controlId === void 0 ? n : t.controlId, [r, s] = V0n.useState(i), [o, a] = V0n.useState(t.labelId), [c, l] = V0n.useState([]), u = l6(()=>new Map), { messageIds: h } = Fre(), p = su((v, b)=>{
        const y = u.current;
        if (b === void 0) {
            y.delete(v);
            return;
        }
        y.set(v, b), s((T)=>{
            if (y.size === 0) return;
            let E;
            for (const A of y.values()){
                if (T !== void 0 && A === T) return T;
                E === void 0 && (E = A);
            }
            return E;
        });
    }), g = V0n.useCallback((v)=>{
        const b = v["aria-describedby"] ? v["aria-describedby"].split(" ") : [];
        return b.push(...h, ...c), {
            ...v,
            "aria-describedby": Array.from(new Set(b)).join(" ") || void 0
        };
    }, [
        h,
        c
    ]), f = V0n.useMemo(()=>({
            controlId: r,
            registerControlId: p,
            labelId: o,
            setLabelId: a,
            messageIds: c,
            setMessageIds: l,
            getDescriptionProps: g
        }), [
        r,
        p,
        o,
        a,
        c,
        l,
        g
    ]);
    return Rcf(y1i.Provider, {
        value: f,
        children: t.children
    });
}, process.env.NODE_ENV !== "production" && (wDi.displayName = "LabelableProvider");

}
