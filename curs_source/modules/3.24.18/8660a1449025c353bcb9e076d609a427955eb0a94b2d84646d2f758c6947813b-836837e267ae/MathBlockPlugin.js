import { Fy, PSt, fE, o6 } from "./LYd.js";
import { Sda, chi } from "./index_34.js";
import { Unt, v_e } from "./index_41.js";
import { Dw1, J_i, Mw1 } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { memo as Aw1 } from "./react-runtime/react/esm-index-production.js";
import { useLayoutEffect as Pw1 } from "./react-runtime/react/esm-index-production.js";
import { useRef as Rw1 } from "./react-runtime/react/esm-index-production.js";
import { jsx as sIp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as xw1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
var aIp, lIp, cIp;
export { aIp, cIp, lIp };
var __wakaru_Nw1_initialized = false;
export function Nw1() {
if (__wakaru_Nw1_initialized) return;
__wakaru_Nw1_initialized = true;
"use strict";
E(), Fy(), v_e(), Sda(), aIp = /^\$\$((?:(?!\$\$)[\s\S])*?)\$\$[ \t]*(?:\n|$)/, lIp = Aw1(function(e) {
    const n = xw1(9), { node: i, selected: r } = e;
    let s;
    n[0] !== i.attrs ? (s = J_i(i.attrs), n[0] = i.attrs, n[1] = s) : s = n[1];
    const o = s, a = Rw1(null);
    let l, c;
    n[2] !== o ? (l = ()=>{
        const g = a.current;
        g && chi.render(o, g, {
            displayMode: !0,
            throwOnError: !1
        });
    }, c = [
        o
    ], n[2] = o, n[3] = l, n[4] = c) : (l = n[3], c = n[4]), Pw1(l, c);
    let u;
    n[5] === Symbol.for("react.memo_cache_sentinel") ? (u = {
        0: {
            className: "ui-1043rbw ui-w2csxc"
        },
        1: {
            className: "ui-1043rbw ui-w2csxc ui-g9z2os"
        }
    }, n[5] = u) : u = n[5];
    const d = u[!!r << 0];
    let h;
    n[6] === Symbol.for("react.memo_cache_sentinel") ? (h = sIp("div", {
        ref: a
    }), n[6] = h) : h = n[6];
    let p;
    return n[7] !== d ? (p = sIp(Unt, {
        ...d,
        "data-type": "math-block",
        children: h
    }), n[7] = d, n[8] = p) : p = n[8], p;
}), cIp = o6.create({
    name: "mathBlock",
    group: "block",
    atom: !0,
    selectable: !0,
    draggable: !1,
    addAttributes () {
        return {
            latex: {
                default: "",
                parseHTML: (t)=>t.getAttribute("data-latex") ?? t.textContent ?? "",
                renderHTML: (t)=>({
                        "data-latex": J_i(t)
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
    renderHTML ({ node: t, HTMLAttributes: e }) {
        return [
            "div",
            fE(e, {
                "data-type": "math-block"
            }),
            `$$
${J_i(t.attrs)}
$$`
        ];
    },
    renderText ({ node: t }) {
        return `$$
${J_i(t.attrs)}
$$`;
    },
    markdownTokenizer: {
        name: "mathBlock",
        level: "block",
        start: Mw1,
        tokenize: Dw1
    },
    parseMarkdown (t, e) {
        return e.createNode("mathBlock", {
            latex: t.text ?? ""
        });
    },
    renderMarkdown (t) {
        return `$$
${J_i(t.attrs)}
$$`;
    },
    addNodeView () {
        return PSt(lIp);
    }
});

}
