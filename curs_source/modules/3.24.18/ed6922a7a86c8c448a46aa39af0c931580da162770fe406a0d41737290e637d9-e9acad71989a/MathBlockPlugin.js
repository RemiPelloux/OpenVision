import { Ixn, Jtv, env } from "./f0s.js";
import { Bws, ZCn } from "./index_29.js";
import { Ife, Sgt } from "./index_36.js";
import { A_, BO, P0, RBt } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { jsx as Ouu } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useLayoutEffect as Qtv } from "./react-runtime/react/esm-index-production.js";
import { memo as Xtv } from "./react-runtime/react/esm-index-production.js";
import { c as Ytv } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as Ztv } from "./react-runtime/react/esm-index-production.js";
var Fuu, Buu, Uuu;
export { Buu, Fuu, Uuu };
var __wakaru_nnv_initialized = false;
export function nnv() {
if (__wakaru_nnv_initialized) return;
__wakaru_nnv_initialized = true;
"use strict";
x(), A_(), Ife(), Bws(), Fuu = /^\$\$((?:(?!\$\$)[\s\S])*?)\$\$[ \t]*(?:\n|$)/, Buu = Xtv(function(t) {
    const n = Ytv(9), { node: i, selected: r } = t;
    let s;
    n[0] !== i.attrs ? (s = Ixn(i.attrs), n[0] = i.attrs, n[1] = s) : s = n[1];
    const o = s, a = Ztv(null);
    let c, l;
    n[2] !== o ? (c = ()=>{
        const f = a.current;
        f && ZCn.render(o, f, {
            displayMode: !0,
            throwOnError: !1
        });
    }, l = [
        o
    ], n[2] = o, n[3] = c, n[4] = l) : (c = n[3], l = n[4]), Qtv(c, l);
    let u;
    n[5] === Symbol.for("react.memo_cache_sentinel") ? (u = {
        0: {
            className: "ui-1043rbw ui-w2csxc"
        },
        1: {
            className: "ui-1043rbw ui-w2csxc ui-g9z2os"
        }
    }, n[5] = u) : u = n[5];
    const h = u[!!r << 0];
    let p;
    n[6] === Symbol.for("react.memo_cache_sentinel") ? (p = Ouu("div", {
        ref: a
    }), n[6] = p) : p = n[6];
    let g;
    return n[7] !== h ? (g = Ouu(Sgt, {
        ...h,
        "data-type": "math-block",
        children: p
    }), n[7] = h, n[8] = g) : g = n[8], g;
}), Uuu = BO.create({
    name: "mathBlock",
    group: "block",
    atom: !0,
    selectable: !0,
    draggable: !1,
    addAttributes () {
        return {
            latex: {
                default: "",
                parseHTML: (e)=>e.getAttribute("data-latex") ?? e.textContent ?? "",
                renderHTML: (e)=>({
                        "data-latex": Ixn(e)
                    })
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: 'div[data-type="math-block"]'
            }
        ];
    },
    renderHTML ({ node: e, HTMLAttributes: t }) {
        return [
            "div",
            P0(t, {
                "data-type": "math-block"
            }),
            `$$
${Ixn(e.attrs)}
$$`
        ];
    },
    renderText ({ node: e }) {
        return `$$
${Ixn(e.attrs)}
$$`;
    },
    markdownTokenizer: {
        name: "mathBlock",
        level: "block",
        start: Jtv,
        tokenize: env
    },
    parseMarkdown (e, t) {
        return t.createNode("mathBlock", {
            latex: e.text ?? ""
        });
    },
    renderMarkdown (e) {
        return `$$
${Ixn(e.attrs)}
$$`;
    },
    addNodeView () {
        return RBt(Buu);
    }
});

}
