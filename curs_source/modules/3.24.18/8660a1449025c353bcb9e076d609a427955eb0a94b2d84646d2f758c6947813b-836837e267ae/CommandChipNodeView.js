import { igi } from "./IconColorPickerPanel.js";
import { gn, ri } from "./LYd.js";
import { pQh } from "./SkillCommandBadge.js";
import { mf } from "./cn.js";
import { _rt, jne } from "./command-chip-shared.js";
import { Unt, v_e } from "./index_41.js";
import { K9S, KJh, dQh, i1a, nGe, vQh } from "./ipa.js";
import { Qjt, eGe } from "./prompt-chip.stylex.js";
import { Y9S } from "./prompt-input-command-chip-tooltip.js";
import { Va } from "./stylex.js";
import { k9r } from "./tiptap-storage.js";
import { E } from "./tslib.es6.js";
import { jsx as $gi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as X9S } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { memo as Z9S } from "./react-runtime/react/esm-index-production.js";
var XJh, ZJh;
export { XJh, ZJh };
var __wakaru_J9S_initialized = false;
export function J9S() {
if (__wakaru_J9S_initialized) return;
__wakaru_J9S_initialized = true;
"use strict";
E(), Va(), v_e(), Qjt(), mf(), Y9S(), pQh(), _rt(), k9r(), igi(), XJh = "ui-prompt-input-command-chip", ZJh = Z9S(function(e) {
    const n = X9S(38), { node: i, editor: r } = e;
    let s, o, a, l, c, u;
    if (n[0] !== r || n[1] !== i.attrs.authorshipLabel || n[2] !== i.attrs.badgeAppearance || n[3] !== i.attrs.content || n[4] !== i.attrs.description || n[5] !== i.attrs.displayName || n[6] !== i.attrs.id || n[7] !== i.attrs.name || n[8] !== i.attrs.sourceUri || n[9] !== i.attrs.tooltipPath || n[10] !== i.attrs.type) {
        const I = KJh(r, jne), { onCommandChipClick: A, isCommandChipClickable: P } = I ?? {};
        s = {
            id: i.attrs.id ?? "",
            name: i.attrs.name ?? "",
            displayName: typeof i.attrs.displayName == "string" ? i.attrs.displayName : void 0,
            content: i.attrs.content ?? "",
            type: i.attrs.type ?? void 0,
            description: i.attrs.description ?? void 0,
            tooltipPath: i.attrs.tooltipPath ?? void 0,
            authorshipLabel: i.attrs.authorshipLabel ?? void 0,
            badgeAppearance: nGe(i.attrs.badgeAppearance),
            sourceUri: typeof i.attrs.sourceUri == "string" && i.attrs.sourceUri.length > 0 ? i.attrs.sourceUri : void 0
        }, a = vQh(s, A, P);
        const M = ri(a ? "ui-prompt-input-command-chip__label ui-prompt-input-command-chip__label--clickable" : "ui-prompt-input-command-chip__label", gn(eGe.label, a && eGe.labelClickable, !s.badgeAppearance && eGe.plainLabelBox).className);
        o = (O)=>{
            O.preventDefault(), O.stopPropagation(), A(s);
        }, l = M, c = s.badgeAppearance ? void 0 : "", u = i1a(s), n[0] = r, n[1] = i.attrs.authorshipLabel, n[2] = i.attrs.badgeAppearance, n[3] = i.attrs.content, n[4] = i.attrs.description, n[5] = i.attrs.displayName, n[6] = i.attrs.id, n[7] = i.attrs.name, n[8] = i.attrs.sourceUri, n[9] = i.attrs.tooltipPath, n[10] = i.attrs.type, n[11] = s, n[12] = o, n[13] = a, n[14] = l, n[15] = c, n[16] = u;
    } else s = n[11], o = n[12], a = n[13], l = n[14], c = n[15], u = n[16];
    let d;
    n[17] !== l || n[18] !== c || n[19] !== u ? (d = $gi("span", {
        className: l,
        "data-command-chip-plain": c,
        children: u
    }), n[17] = l, n[18] = c, n[19] = u, n[20] = d) : d = n[20];
    const h = d;
    let p;
    n[21] !== s.badgeAppearance || n[22] !== h ? (p = s.badgeAppearance ? $gi(dQh, {
        appearance: s.badgeAppearance,
        children: h
    }) : h, n[21] = s.badgeAppearance, n[22] = h, n[23] = p) : p = n[23];
    const g = p;
    let f;
    n[24] === Symbol.for("react.memo_cache_sentinel") ? (f = ri(XJh, gn(eGe.root).className), n[24] = f) : f = n[24];
    const _ = a ? "button" : void 0, b = a ? o : void 0, y = s.displayName ?? s.name, S = s.type ?? "";
    let k;
    n[25] !== g ? (k = $gi("span", {
        children: g
    }), n[25] = g, n[26] = k) : k = n[26];
    let C;
    n[27] !== s.authorshipLabel || n[28] !== s.description || n[29] !== s.tooltipPath || n[30] !== S || n[31] !== k || n[32] !== y ? (C = $gi(K9S, {
        authorshipLabel: s.authorshipLabel,
        description: s.description,
        path: s.tooltipPath,
        title: y,
        type: S,
        children: k
    }), n[27] = s.authorshipLabel, n[28] = s.description, n[29] = s.tooltipPath, n[30] = S, n[31] = k, n[32] = y, n[33] = C) : C = n[33];
    let T;
    return n[34] !== C || n[35] !== _ || n[36] !== b ? (T = $gi(Unt, {
        as: "span",
        className: f,
        contentEditable: !1,
        "data-type": "command",
        role: _,
        onClick: b,
        children: C
    }), n[34] = C, n[35] = _, n[36] = b, n[37] = T) : T = n[37], T;
});

}
