import { D, Di, _r } from "./Iwo.js";
import { mB, zt } from "./LYd.js";
import { _re } from "./composer-pill.react.js";
import { Ka } from "./context-menu.js";
import { jot } from "./gYa.js";
import { Mt } from "./index_197.js";
import { d_ } from "./index_205.js";
import { QXC, g8 } from "./mm_.js";
import { Bt } from "./nls.js";
import { JXC } from "./skill-pill-utils.js";
import { E } from "./tslib.es6.js";
import { c as eZC } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsxs as nZC } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as nht } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { memo as tZC } from "./react-runtime/react/esm-index-production.js";
var vk_;
export { vk_ };
var __wakaru_iZC_initialized = false;
export function iZC() {
if (__wakaru_iZC_initialized) return;
__wakaru_iZC_initialized = true;
"use strict";
E(), Mt(), d_(), Di(), Bt(), _re(), JXC(), vk_ = tZC(function(e) {
    const n = eZC(29), { skill: i, onDispatch: r, onUnpin: s, onOpenFile: o } = e;
    let a;
    n[0] !== r || n[1] !== o || n[2] !== i.id ? (a = (A)=>{
        if ((_r ? A.metaKey : A.ctrlKey) && o) {
            A.preventDefault(), o(i.id);
            return;
        }
        r(i.id);
    }, n[0] = r, n[1] = o, n[2] = i.id, n[3] = a) : a = n[3];
    const l = a;
    let c;
    n[4] !== s || n[5] !== i.id ? (c = ()=>{
        s(i.id);
    }, n[4] = s, n[5] = i.id, n[6] = c) : c = n[6];
    const u = c;
    let d;
    n[7] !== i.label ? (d = QXC(i.label), n[7] = i.label, n[8] = d) : d = n[8];
    const h = d, p = i.description !== void 0 && i.description.length > 0;
    let g;
    n[9] !== h ? (g = nht("span", {
        children: h
    }), n[9] = h, n[10] = g) : g = n[10];
    let f;
    if (n[11] !== l || n[12] !== i.id || n[13] !== i.label || n[14] !== g) {
        const A = nht(g8, {
            "aria-label": i.label,
            className: "agent-panel-pinned-skill-pill",
            "data-skill-id": i.id,
            onClick: l,
            children: g
        });
        f = nht(Ka.Trigger, {
            children: A
        }), n[11] = l, n[12] = i.id, n[13] = i.label, n[14] = g, n[15] = f;
    } else f = n[15];
    const _ = f;
    let b;
    n[16] !== _ || n[17] !== p || n[18] !== i.description || n[19] !== i.label ? (b = p ? nht(mB, {
        "aria-label": D("glass.pinnedSkill.previewAria", "{0} skill details", i.label),
        content: nht(jot, {
            description: i.description,
            title: i.label
        }),
        children: nht("span", {
            children: _
        })
    }) : _, n[16] = _, n[17] = p, n[18] = i.description, n[19] = i.label, n[20] = b) : b = n[20];
    const y = b;
    let S;
    n[21] === Symbol.for("react.memo_cache_sentinel") ? (S = D("glass.pinnedSkill.contextMenuAria", "Pinned skill actions"), n[21] = S) : S = n[21];
    let k;
    n[22] === Symbol.for("react.memo_cache_sentinel") ? (k = nht(zt, {
        name: "pin-slash"
    }), n[22] = k) : k = n[22];
    let C;
    n[23] === Symbol.for("react.memo_cache_sentinel") ? (C = D("glass.pinnedSkill.unpin", "Unpin"), n[23] = C) : C = n[23];
    let T;
    n[24] !== u ? (T = nht(Ka.Content, {
        "aria-label": S,
        minWidth: 160,
        children: nht(Ka.Item, {
            leading: k,
            onSelect: u,
            children: C
        })
    }), n[24] = u, n[25] = T) : T = n[25];
    let I;
    return n[26] !== T || n[27] !== y ? (I = nZC(Ka, {
        children: [
            y,
            T
        ]
    }), n[26] = T, n[27] = y, n[28] = I) : I = n[28], I;
});

}
