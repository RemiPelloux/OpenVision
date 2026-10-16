import { RAs } from "./MentionChipImageIcon.js";
import { kGl } from "./MentionChipStatusDot.js";
import { TGl } from "./MentionChipTooltip.js";
import { zDf } from "./clipboardPastePill.js";
import { qg } from "./cn.js";
import { CGl, MAs, QDf, SGl, UGl, ZDf, eMf, nMf, qDf, rLi, tMf, zRs } from "./f0s.js";
import { Nft } from "./file-icon-variant-context.js";
import { sp } from "./icon.js";
import { Ife, Sgt } from "./index_36.js";
import { lLi } from "./mention-chip-action.js";
import { LAs, NAs, sTn, uLi } from "./mention-chip-dom.js";
import { nTn, tLi } from "./mention-chip-icon.js";
import { hLi } from "./mention-chip-resolve.js";
import { KXe } from "./mention-chip-utils.js";
import { Oft } from "./path-file-icon.js";
import { TR, X6t } from "./prompt-chip.stylex.js";
import { Nn, Ti, VCi, f9e, ni, zfe } from "./qIc.js";
import { Oc } from "./stylex.js";
import { lNi } from "./tiptap-storage.js";
import { x } from "./tslib.es6.js";
import { jsxs as KDf } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Pql } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as XDf } from "./react-runtime/react/esm-index-production.js";
import { memo as YDf } from "./react-runtime/react/esm-index-production.js";
import { jsx as a0e } from "./react-runtime/react/esm-jsx-runtime-production.js";
var Lql, KRs, Nql;
export { KRs, Lql, Nql };
var __wakaru_iMf_initialized = false;
export function iMf() {
if (__wakaru_iMf_initialized) return;
__wakaru_iMf_initialized = true;
"use strict";
x(), Oc(), Ife(), X6t(), qg(), RAs(), kGl(), TGl(), lLi(), NAs(), nTn(), hLi(), KXe(), zDf(), lNi(), Nft(), sp(), Oft(), Lql = {
    "ui--default-marker": "ui--default-marker",
    $$css: !0
}, KRs = "mentionNode", Nql = YDf(function(t) {
    const n = Pql(160), { node: i, HTMLAttributes: r, extensionHTMLAttributes: s, editor: o, getPos: a } = t, c = f9e(), l = XDf(null), u = MAs(i.attrs);
    let h;
    n[0] !== o ? (h = {
        editor: o,
        selector: eMf
    }, n[0] = o, n[1] = h) : h = n[1];
    const p = VCi(h);
    let g;
    n[2] !== o ? (g = {
        editor: o,
        selector: tMf
    }, n[2] = o, n[3] = g) : g = n[3];
    const f = VCi(g), v = p?.matches?.(u) === !1 ? void 0 : p;
    let b;
    n[4] !== o ? (b = zRs(o), n[4] = o, n[5] = b) : b = n[5];
    const { onMentionChipAction: y, onMentionChipContextMenu: T, readOnlyMentionChrome: E, hideRemoveButton: A } = b, R = f(u), D = (R.tooltipText ?? R.primaryText).trim(), P = R.tooltipContent ? void 0 : D, N = R.action.kind !== "noop" && !!y, O = typeof s?.class == "string" ? s.class : "", F = typeof r?.class == "string" ? r.class : "";
    let H;
    n[6] !== O || n[7] !== F ? (H = [
        sTn,
        O,
        F
    ].filter(Boolean), n[6] = O, n[7] = F, n[8] = H) : H = n[8];
    const $ = H.join(" "), W = !E && !A, G = R.icon.kind === "image";
    let q, z, X, Y, Z, K, J, ne, ee, se, re, ue, ce, de, le, ye;
    if (n[9] !== r || n[10] !== c || n[11] !== u.mentionType || n[12] !== u.plainText || n[13] !== R || n[14] !== $ || n[15] !== o || n[16] !== s || n[17] !== a || n[18] !== G || n[19] !== W || n[20] !== N || n[21] !== v || n[22] !== P || n[23] !== i.nodeSize || n[24] !== y || n[25] !== T || n[26] !== E) {
        const et = Nn(Lql, TR.root, G && TR.rootWithMcpIcon).className;
        let We;
        if (n[43] !== r || n[44] !== c || n[45] !== u.mentionType || n[46] !== u.plainText || n[47] !== R || n[48] !== o || n[49] !== s || n[50] !== a || n[51] !== W || n[52] !== N || n[53] !== v || n[54] !== P || n[55] !== i.nodeSize || n[56] !== y || n[57] !== T || n[58] !== E) {
            const it = Nn(TR.icon, TR.leadingIcon).className;
            let Ne;
            n[72] !== r || n[73] !== s ? (Ne = QDf(s, r), n[72] = r, n[73] = s, n[74] = Ne) : Ne = n[74];
            let Fe;
            n[75] !== P ? (Fe = P ? {
                title: P
            } : {}, n[75] = P, n[76] = Fe) : Fe = n[76];
            let Qe;
            n[77] !== E ? (Qe = E ? {
                "data-read-only-mention": "true"
            } : {}, n[77] = E, n[78] = Qe) : Qe = n[78];
            let tt;
            n[79] !== W ? (tt = W ? {
                "data-has-remove-button": "true"
            } : {}, n[79] = W, n[80] = tt) : tt = n[80];
            let st;
            n[81] !== v ? (st = v ? {
                "data-mention-chip-presentation": v.kind
            } : {}, n[81] = v, n[82] = st) : st = n[82], n[83] !== Qe || n[84] !== tt || n[85] !== st || n[86] !== Ne || n[87] !== Fe ? (We = {
                ...Ne,
                ...LAs,
                "data-type": KRs,
                ...Fe,
                ...Qe,
                ...tt,
                ...st
            }, delete We.class, n[83] = Qe, n[84] = tt, n[85] = st, n[86] = Ne, n[87] = Fe, n[88] = We) : We = n[88];
            const vt = R.chipColor;
            let ht;
            n[89] !== v ? (ht = ZDf(v), n[89] = v, n[90] = ht) : ht = n[90];
            const ut = ht;
            let Dt;
            n[91] !== vt || n[92] !== ut ? (Dt = vt || ut ? {
                ...vt ? {
                    color: vt
                } : {},
                ...ut
            } : void 0, n[91] = vt, n[92] = ut, n[93] = Dt) : Dt = n[93], ce = Dt;
            let lt;
            n[94] !== vt ? (lt = vt ? {
                color: vt
            } : {
                color: "inherit"
            }, n[94] = vt, n[95] = lt) : lt = n[95];
            const Tt = lt;
            let ct;
            n[96] !== o || n[97] !== a || n[98] !== i.nodeSize ? (ct = (ft)=>{
                ft.preventDefault(), ft.stopPropagation();
                const Mt = a();
                Mt !== void 0 && (o.view.dispatch(o.state.tr.delete(Mt, Mt + i.nodeSize).setMeta(uLi, !0).scrollIntoView()), o.view.focus());
            }, n[96] = o, n[97] = a, n[98] = i.nodeSize, n[99] = ct) : ct = n[99], K = ct;
            const Kt = nMf;
            let Rt;
            n[100] === Symbol.for("react.memo_cache_sentinel") ? (Rt = (ft)=>{
                if (!Kt(ft)) {
                    l.current = null;
                    return;
                }
                ft.preventDefault(), ft.stopPropagation(), l.current = ft.key;
            }, n[100] = Rt) : Rt = n[100], ee = Rt;
            let Gt;
            n[101] !== K ? (Gt = (ft)=>{
                l.current === ft.key && (l.current = null, K(ft));
            }, n[101] = K, n[102] = Gt) : Gt = n[102], se = Gt;
            let Nt;
            n[103] === Symbol.for("react.memo_cache_sentinel") ? (Nt = ()=>{
                l.current = null;
            }, n[103] = Nt) : Nt = n[103], J = Nt;
            let sn;
            n[104] !== K ? (sn = (ft)=>{
                if (ft.detail > 0) {
                    ft.preventDefault(), ft.stopPropagation();
                    return;
                }
                K(ft);
            }, n[104] = K, n[105] = sn) : sn = n[105], ne = sn;
            let un;
            n[106] !== R.action || n[107] !== N || n[108] !== y ? (un = (ft)=>{
                !N || !y || (ft.preventDefault(), ft.stopPropagation(), y(R.action, {
                    metaKey: ft.metaKey,
                    ctrlKey: ft.ctrlKey
                }));
            }, n[106] = R.action, n[107] = N, n[108] = y, n[109] = un) : un = n[109], z = un;
            const kt = u.mentionType === "clipboard" && u.plainText && !E ? u.plainText : void 0;
            re = kt !== void 0;
            let ot;
            n[110] !== o || n[111] !== kt || n[112] !== a || n[113] !== i.nodeSize ? (ot = (ft)=>{
                if (kt === void 0 || !o.isEditable) return;
                const Mt = a();
                Mt !== void 0 && (ft.preventDefault(), ft.stopPropagation(), o.chain().focus().insertContentAt({
                    from: Mt,
                    to: Mt + i.nodeSize
                }, qDf(kt)).run());
            }, n[110] = o, n[111] = kt, n[112] = a, n[113] = i.nodeSize, n[114] = ot) : ot = n[114], Y = ot;
            let ze;
            n[115] !== R || n[116] !== T ? (ze = (ft)=>{
                !T || !UGl(R.action) || (ft.preventDefault(), ft.stopPropagation(), T(ft.nativeEvent, R));
            }, n[115] = R, n[116] = T, n[117] = ze) : ze = n[117], X = ze;
            let St;
            if (n[118] !== R.action || n[119] !== Y || n[120] !== N || n[121] !== re || n[122] !== y ? (St = (ft)=>{
                if (!(ft.key !== "Enter" && ft.key !== " ")) {
                    if (re) {
                        Y(ft);
                        return;
                    }
                    !N || !y || (ft.preventDefault(), ft.stopPropagation(), y(R.action));
                }
            }, n[118] = R.action, n[119] = Y, n[120] = N, n[121] = re, n[122] = y, n[123] = St) : St = n[123], Z = St, R.icon.kind === "cursor") ue = a0e(Ti, {
                className: ni("ui-prompt-input-mention-chip__icon ui-prompt-input-mention-chip__leading-icon", it),
                color: R.iconColor,
                name: R.icon.name,
                size: 12,
                "aria-hidden": "true",
                style: R.iconColor ? void 0 : Tt,
                title: P
            });
            else if (R.icon.kind === "image") {
                let ft;
                n[124] === Symbol.for("react.memo_cache_sentinel") ? (ft = [
                    TR.icon,
                    TR.leadingIcon,
                    TR.mcpMentionIcon
                ], n[124] = ft) : ft = n[124];
                let Mt;
                n[125] !== R.icon.src || n[126] !== P ? (Mt = a0e(rLi, {
                    rootStyle: ft,
                    src: R.icon.src,
                    title: P
                }), n[125] = R.icon.src, n[126] = P, n[127] = Mt) : Mt = n[127], ue = Mt;
            } else ue = c !== "seti" ? a0e(zfe, {
                className: ni("ui-prompt-input-mention-chip__icon ui-prompt-input-mention-chip__leading-icon", it),
                name: R.icon.fileName,
                size: tLi,
                "aria-hidden": "true",
                style: vt ? Tt : void 0,
                title: P
            }) : a0e("span", {
                ...Nn(TR.setiSlot, TR.leadingIcon),
                children: a0e(zfe, {
                    className: ni("ui-seti ui-prompt-input-mention-chip__seti ui-prompt-input-mention-chip__leading-icon", Nn(TR.setiGlyph).className),
                    name: R.icon.fileName,
                    size: 18,
                    "aria-hidden": "true",
                    style: vt ? Tt : void 0,
                    title: P
                })
            });
            n[43] = r, n[44] = c, n[45] = u.mentionType, n[46] = u.plainText, n[47] = R, n[48] = o, n[49] = s, n[50] = a, n[51] = W, n[52] = N, n[53] = v, n[54] = P, n[55] = i.nodeSize, n[56] = y, n[57] = T, n[58] = E, n[59] = z, n[60] = X, n[61] = Y, n[62] = Z, n[63] = K, n[64] = J, n[65] = ne, n[66] = ee, n[67] = se, n[68] = re, n[69] = ue, n[70] = We, n[71] = ce;
        } else z = n[59], X = n[60], Y = n[61], Z = n[62], K = n[63], J = n[64], ne = n[65], ee = n[66], se = n[67], re = n[68], ue = n[69], We = n[70], ce = n[71];
        q = Sgt, de = "span", le = We, ye = ni($, et), n[9] = r, n[10] = c, n[11] = u.mentionType, n[12] = u.plainText, n[13] = R, n[14] = $, n[15] = o, n[16] = s, n[17] = a, n[18] = G, n[19] = W, n[20] = N, n[21] = v, n[22] = P, n[23] = i.nodeSize, n[24] = y, n[25] = T, n[26] = E, n[27] = q, n[28] = z, n[29] = X, n[30] = Y, n[31] = Z, n[32] = K, n[33] = J, n[34] = ne, n[35] = ee, n[36] = se, n[37] = re, n[38] = ue, n[39] = ce, n[40] = de, n[41] = le, n[42] = ye;
    } else q = n[27], z = n[28], X = n[29], Y = n[30], Z = n[31], K = n[32], J = n[33], ne = n[34], ee = n[35], se = n[36], re = n[37], ue = n[38], ce = n[39], de = n[40], le = n[41], ye = n[42];
    const _e = N || re ? "button" : void 0, me = N || re ? 0 : void 0, Ce = re ? Y : N ? z : void 0, xe = N || re ? Z : void 0;
    let Le;
    n[128] !== K || n[129] !== J || n[130] !== ne || n[131] !== ee || n[132] !== se || n[133] !== A || n[134] !== P || n[135] !== E ? (Le = E || A ? null : a0e("button", {
        type: "button",
        className: ni("ui-pill__close ui-prompt-input-mention-chip__close-icon", Nn(TR.closeIcon).className),
        "aria-label": "Remove mention",
        title: P,
        onMouseDown: K,
        onClick: ne,
        onKeyDown: ee,
        onKeyUp: se,
        onBlur: J,
        children: a0e(Ti, {
            name: "x",
            size: 11,
            rootStyle: TR.closeIconGlyph,
            "aria-hidden": "true"
        })
    }), n[128] = K, n[129] = J, n[130] = ne, n[131] = ee, n[132] = se, n[133] = A, n[134] = P, n[135] = E, n[136] = Le) : Le = n[136];
    let Be;
    n[137] !== R.secondaryText ? (Be = R.secondaryText ? a0e("span", {
        className: ni("ui-prompt-input-mention-chip__line-range", Nn(TR.lineRange).className),
        children: R.secondaryText
    }) : null, n[137] = R.secondaryText, n[138] = Be) : Be = n[138];
    let je;
    n[139] !== R.statusDot ? (je = R.statusDot ? a0e(SGl, {
        status: R.statusDot
    }) : null, n[139] = R.statusDot, n[140] = je) : je = n[140];
    let Ge;
    n[141] !== q || n[142] !== R.primaryText || n[143] !== X || n[144] !== ue || n[145] !== ce || n[146] !== Ce || n[147] !== xe || n[148] !== Le || n[149] !== Be || n[150] !== je || n[151] !== de || n[152] !== le || n[153] !== ye || n[154] !== _e || n[155] !== me ? (Ge = KDf(q, {
        as: de,
        ...le,
        className: ye,
        style: ce,
        role: _e,
        tabIndex: me,
        onClick: Ce,
        onContextMenu: X,
        onKeyDown: xe,
        children: [
            ue,
            Le,
            R.primaryText,
            Be,
            je
        ]
    }), n[141] = q, n[142] = R.primaryText, n[143] = X, n[144] = ue, n[145] = ce, n[146] = Ce, n[147] = xe, n[148] = Le, n[149] = Be, n[150] = je, n[151] = de, n[152] = le, n[153] = ye, n[154] = _e, n[155] = me, n[156] = Ge) : Ge = n[156];
    const Xe = Ge;
    let Ke;
    return n[157] !== R || n[158] !== Xe ? (Ke = a0e(CGl, {
        chip: R,
        children: Xe
    }), n[157] = R, n[158] = Xe, n[159] = Ke) : Ke = n[159], Ke;
});

}
