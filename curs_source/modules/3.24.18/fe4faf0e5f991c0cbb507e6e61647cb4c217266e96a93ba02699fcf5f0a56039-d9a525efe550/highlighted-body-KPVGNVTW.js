import { ELt, Fb, Fbr, xjt } from "./chunk-YOKDWASO.js";
import { i } from "./plugin-brand-icon.js";
import { useEffect as _di } from "./react-runtime/react/esm-index-production.js";
import { jsx as kdi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useState as wdi } from "./react-runtime/react/esm-index-production.js";
import { useContext as ydi } from "./react-runtime/react/esm-index-production.js";
var Ugr;
export { Ugr };
var __wakaru_D4i_initialized = false;
export function D4i() {
if (__wakaru_D4i_initialized) return;
__wakaru_D4i_initialized = true;
"use client";
ELt(), Ugr = i(({ code: r, language: e, maxHeight: a, raw: s, className: l, startLine: u, lineNumbers: p, ...m })=>{
    let { shikiTheme: b } = ydi(Fb), g = Fbr(), [_, v] = wdi(s);
    return _di(()=>{
        if (!g) {
            v(s);
            return;
        }
        let x = g.highlight({
            code: r,
            language: e,
            themes: b
        }, (C)=>{
            v(C);
        });
        x && v(x);
    }, [
        r,
        e,
        b,
        g,
        s
    ]), kdi(xjt, {
        className: l,
        language: e,
        lineNumbers: p,
        maxHeight: a,
        result: _,
        startLine: u,
        ...m
    });
}, "x");

}
