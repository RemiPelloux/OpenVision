import { $_s, J5t, eyl, o$ } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { useEffect as CHg } from "./react-runtime/react/esm-index-production.js";
import { jsx as THg } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useContext as kHg } from "./react-runtime/react/esm-index-production.js";
import { useState as wHg } from "./react-runtime/react/esm-index-production.js";
var tbl;
export { tbl };
var __wakaru_EHg_initialized = false;
export function EHg() {
if (__wakaru_EHg_initialized) return;
__wakaru_EHg_initialized = true;
x(), J5t(), tbl = ({ code: e, language: t, maxHeight: n, raw: i, className: r, startLine: s, lineNumbers: o, ...a })=>{
    let { shikiTheme: c } = kHg(o$), l = eyl(), [u, h] = wHg(i);
    return CHg(()=>{
        if (!l) {
            h(i);
            return;
        }
        let p = l.highlight({
            code: e,
            language: t,
            themes: c
        }, (g)=>{
            h(g);
        });
        p && h(p);
    }, [
        e,
        t,
        c,
        l,
        i
    ]), THg($_s, {
        className: r,
        language: t,
        lineNumbers: o,
        maxHeight: n,
        result: u,
        startLine: s,
        ...a
    });
};

}
