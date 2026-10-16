import { dTn } from "./IconColorPickerPanel.js";
import { jVl } from "./SkillCommandBadge.js";
import { qg } from "./cn.js";
import { JXe, mve } from "./command-chip-shared.js";
import { FDf, GVl, QXe, YVl, dRs, wql } from "./f0s.js";
import { Ife, Sgt } from "./index_36.js";
import { ODe, X6t } from "./prompt-chip.stylex.js";
import { BDf } from "./prompt-input-command-chip-tooltip.js";
import { Nn, ni } from "./qIc.js";
import { Oc } from "./stylex.js";
import { lNi } from "./tiptap-storage.js";
import { x } from "./tslib.es6.js";
import { memo as $Df } from "./react-runtime/react/esm-index-production.js";
import { c as UDf } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as YTn } from "./react-runtime/react/esm-jsx-runtime-production.js";
var Tql, Eql;
export { Eql, Tql };
var __wakaru_WDf_initialized = false;
export function WDf() {
if (__wakaru_WDf_initialized) return;
__wakaru_WDf_initialized = true;
"use strict";
x(), Oc(), Ife(), X6t(), qg(), BDf(), jVl(), JXe(), lNi(), dTn(), Tql = "ui-prompt-input-command-chip", Eql = $Df(function(t) {
    const n = UDf(38), { node: i, editor: r } = t;
    let s, o, a, c, l, u;
    if (n[0] !== r || n[1] !== i.attrs.authorshipLabel || n[2] !== i.attrs.badgeAppearance || n[3] !== i.attrs.content || n[4] !== i.attrs.description || n[5] !== i.attrs.displayName || n[6] !== i.attrs.id || n[7] !== i.attrs.name || n[8] !== i.attrs.sourceUri || n[9] !== i.attrs.tooltipPath || n[10] !== i.attrs.type) {
        const P = wql(r, mve), { onCommandChipClick: N, isCommandChipClickable: O } = P ?? {};
        s = {
            id: i.attrs.id ?? "",
            name: i.attrs.name ?? "",
            displayName: typeof i.attrs.displayName == "string" ? i.attrs.displayName : void 0,
            content: i.attrs.content ?? "",
            type: i.attrs.type ?? void 0,
            description: i.attrs.description ?? void 0,
            tooltipPath: i.attrs.tooltipPath ?? void 0,
            authorshipLabel: i.attrs.authorshipLabel ?? void 0,
            badgeAppearance: QXe(i.attrs.badgeAppearance),
            sourceUri: typeof i.attrs.sourceUri == "string" && i.attrs.sourceUri.length > 0 ? i.attrs.sourceUri : void 0
        }, a = YVl(s, N, O);
        const F = ni(a ? "ui-prompt-input-command-chip__label ui-prompt-input-command-chip__label--clickable" : "ui-prompt-input-command-chip__label", Nn(ODe.label, a && ODe.labelClickable, !s.badgeAppearance && ODe.plainLabelBox).className);
        o = (H)=>{
            H.preventDefault(), H.stopPropagation(), N(s);
        }, c = F, l = s.badgeAppearance ? void 0 : "", u = dRs(s), n[0] = r, n[1] = i.attrs.authorshipLabel, n[2] = i.attrs.badgeAppearance, n[3] = i.attrs.content, n[4] = i.attrs.description, n[5] = i.attrs.displayName, n[6] = i.attrs.id, n[7] = i.attrs.name, n[8] = i.attrs.sourceUri, n[9] = i.attrs.tooltipPath, n[10] = i.attrs.type, n[11] = s, n[12] = o, n[13] = a, n[14] = c, n[15] = l, n[16] = u;
    } else s = n[11], o = n[12], a = n[13], c = n[14], l = n[15], u = n[16];
    let h;
    n[17] !== c || n[18] !== l || n[19] !== u ? (h = YTn("span", {
        className: c,
        "data-command-chip-plain": l,
        children: u
    }), n[17] = c, n[18] = l, n[19] = u, n[20] = h) : h = n[20];
    const p = h;
    let g;
    n[21] !== s.badgeAppearance || n[22] !== p ? (g = s.badgeAppearance ? YTn(GVl, {
        appearance: s.badgeAppearance,
        children: p
    }) : p, n[21] = s.badgeAppearance, n[22] = p, n[23] = g) : g = n[23];
    const f = g;
    let v;
    n[24] === Symbol.for("react.memo_cache_sentinel") ? (v = ni(Tql, Nn(ODe.root).className), n[24] = v) : v = n[24];
    const b = a ? "button" : void 0, y = a ? o : void 0, T = s.displayName ?? s.name, E = s.type ?? "";
    let A;
    n[25] !== f ? (A = YTn("span", {
        children: f
    }), n[25] = f, n[26] = A) : A = n[26];
    let R;
    n[27] !== s.authorshipLabel || n[28] !== s.description || n[29] !== s.tooltipPath || n[30] !== E || n[31] !== A || n[32] !== T ? (R = YTn(FDf, {
        authorshipLabel: s.authorshipLabel,
        description: s.description,
        path: s.tooltipPath,
        title: T,
        type: E,
        children: A
    }), n[27] = s.authorshipLabel, n[28] = s.description, n[29] = s.tooltipPath, n[30] = E, n[31] = A, n[32] = T, n[33] = R) : R = n[33];
    let D;
    return n[34] !== R || n[35] !== b || n[36] !== y ? (D = YTn(Sgt, {
        as: "span",
        className: v,
        contentEditable: !1,
        "data-type": "command",
        role: b,
        onClick: y,
        children: R
    }), n[34] = R, n[35] = b, n[36] = y, n[37] = D) : D = n[37], D;
});

}
