import { $Y, eoa, k1h, pyn } from "./LYd.js";
import { E } from "./tslib.es6.js";
import { useContext as inS } from "./react-runtime/react/esm-index-production.js";
import { jsx as onS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useState as rnS } from "./react-runtime/react/esm-index-production.js";
import { useEffect as snS } from "./react-runtime/react/esm-index-production.js";
var wSh;
export { wSh };
var __wakaru_anS_initialized = false;
export function anS() {
if (__wakaru_anS_initialized) return;
__wakaru_anS_initialized = true;
E(), pyn(), wSh = ({ code: t, language: e, maxHeight: n, raw: i, className: r, startLine: s, lineNumbers: o, ...a })=>{
    let { shikiTheme: l } = inS($Y), c = k1h(), [u, d] = rnS(i);
    return snS(()=>{
        if (!c) {
            d(i);
            return;
        }
        let h = c.highlight({
            code: t,
            language: e,
            themes: l
        }, (p)=>{
            d(p);
        });
        h && d(h);
    }, [
        t,
        e,
        l,
        c,
        i
    ]), onS(eoa, {
        className: r,
        language: e,
        lineNumbers: o,
        maxHeight: n,
        result: u,
        startLine: s,
        ...a
    });
};

}
