import { AP, DB } from "./code-token.ts";
import { O0r } from "./css-variables-theme.ts";
import { i } from "./plugin-brand-icon.js";
function sRe(r) {
    const e = r.toLowerCase().trim();
    return G0r[e] ?? e;
}
function z0r(r, e) {
    const a = sRe(e);
    return r.getLoadedLanguages().includes(a);
}
function BLt(r, e) {
    const a = sRe(e);
    return z0r(r, a) ? a : "text";
}
function qLt(r) {
    const e = W0r[r];
    return e === void 0 ? cRe : Math.min(e, cRe);
}
function B0r(r) {
    let e = 0, a = 0;
    for(let s = 0; s < r.length; s++){
        const l = r.charCodeAt(s);
        (l === 10 || l === 13) && (s - a > e && (e = s - a), a = s + 1);
    }
    return r.length - a > e && (e = r.length - a), e;
}
function ULt(r) {
    let e = 0;
    return r.map((a)=>{
        const s = {
            content: a.content,
            color: a.color,
            fontStyle: a.fontStyle,
            col: e
        };
        return e += a.content.length, s;
    });
}
function GLt(r) {
    return r.split(/\r?\n/).map((e)=>[
            {
                content: e,
                col: 0
            }
        ]);
}
function q0r(r, e, a) {
    if (e.length > lRe || B0r(e) > cRe) return AP(e);
    const s = BLt(r, a);
    try {
        return r.codeToTokens(e, {
            lang: s,
            theme: "css-variables",
            tokenizeMaxLineLength: qLt(s)
        }).tokens.map(ULt);
    } catch  {
        return AP(e);
    }
}
function U0r(r, e, a, s) {
    if (e.length > lRe) return {
        tokens: GLt(e),
        grammarState: void 0
    };
    const l = BLt(r, a), u = qLt(l);
    try {
        const p = r.codeToTokens(e, {
            lang: l,
            theme: "css-variables",
            grammarState: s,
            tokenizeMaxLineLength: u
        });
        return {
            tokens: p.tokens.map(ULt),
            grammarState: p.grammarState
        };
    } catch  {
        return {
            tokens: GLt(e),
            grammarState: void 0
        };
    }
}
var G0r, cRe, lRe, W0r;
export { B0r, BLt, G0r, GLt, U0r, ULt, W0r, cRe, lRe, q0r, qLt, sRe, z0r };
var __wakaru_WLt_initialized = false;
export function WLt() {
if (__wakaru_WLt_initialized) return;
__wakaru_WLt_initialized = true;
"use strict";
DB(), O0r(), G0r = {
    ts: "typescript",
    cts: "typescript",
    mts: "typescript",
    js: "javascript",
    cjs: "javascript",
    mjs: "javascript",
    py: "python",
    rs: "rust",
    md: "markdown",
    bash: "shellscript",
    sh: "shellscript",
    shell: "shellscript",
    zsh: "shellscript",
    yml: "yaml",
    "c++": "cpp",
    "c#": "csharp",
    cs: "csharp",
    "f#": "fsharp",
    fs: "fsharp",
    kt: "kotlin",
    kts: "kotlin",
    rb: "ruby",
    docker: "dockerfile",
    ex: "elixir",
    exs: "elixir",
    erl: "erlang",
    hs: "haskell",
    ml: "ocaml",
    clj: "clojure",
    "common-lisp": "lisp",
    tf: "terraform",
    tfvars: "terraform",
    protobuf: "proto",
    regex: "regexp",
    gql: "graphql",
    properties: "ini",
    jl: "julia",
    objc: "objective-c",
    make: "makefile",
    tex: "latex",
    ps: "powershell",
    ps1: "powershell",
    pwsh: "powershell"
}, i(sRe, "resolveLang"), i(z0r, "isLangSupported"), i(BLt, "getEffectiveLang"), cRe = 2e4, lRe = 2e5, W0r = {
    javascript: 2500,
    jsx: 2500,
    tsx: 2500,
    java: 7500,
    cpp: 7500,
    csharp: 2500
}, i(qLt, "getTokenizationMaxLineLength"), i(B0r, "maxLineLength"), i(ULt, "mapThemedLineToCodeTokens"), i(GLt, "splitPlainLineTokens"), i(q0r, "tokenizeStructured"), i(U0r, "tokenizeStructuredWithState");

}
