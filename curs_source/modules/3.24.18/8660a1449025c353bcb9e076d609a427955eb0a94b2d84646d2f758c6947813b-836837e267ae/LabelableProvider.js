import { $I, CW, pu, zQ } from "./LYd.js";
import { VQ, v2r } from "./LabelableContext.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { jQ } from "./useRefWithInit.js";
import { Jy } from "./useStableCallback.js";
import { jsx as m1S } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as upi from "./react-runtime/react/esm-index-production.js";
var VOr;
export { VOr };
var __wakaru_o4h_initialized = false;
export function o4h() {
if (__wakaru_o4h_initialized) return;
__wakaru_o4h_initialized = true;
E(), Jy(), jQ(), _A(), VQ(), VOr = function(e) {
    const n = $I(), i = e.controlId === void 0 ? n : e.controlId, [r, s] = upi.useState(i), [o, a] = upi.useState(e.labelId), [l, c] = upi.useState([]), u = CW(()=>new Map), { messageIds: d } = zQ(), h = pu((f, _)=>{
        const b = u.current;
        if (_ === void 0) {
            b.delete(f);
            return;
        }
        b.set(f, _), s((y)=>{
            if (b.size === 0) return;
            let S;
            for (const k of b.values()){
                if (y !== void 0 && k === y) return y;
                S === void 0 && (S = k);
            }
            return S;
        });
    }), p = upi.useCallback((f)=>{
        const _ = f["aria-describedby"] ? f["aria-describedby"].split(" ") : [];
        return _.push(...d, ...l), {
            ...f,
            "aria-describedby": Array.from(new Set(_)).join(" ") || void 0
        };
    }, [
        d,
        l
    ]), g = upi.useMemo(()=>({
            controlId: r,
            registerControlId: h,
            labelId: o,
            setLabelId: a,
            messageIds: l,
            setMessageIds: c,
            getDescriptionProps: p
        }), [
        r,
        h,
        o,
        a,
        l,
        c,
        p
    ]);
    return m1S(v2r.Provider, {
        value: g,
        children: e.children
    });
}, process.env.NODE_ENV !== "production" && (VOr.displayName = "LabelableProvider");

}
