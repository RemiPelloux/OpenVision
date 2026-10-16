import { GAr, W5, gn, mFe, ri, zt } from "./LYd.js";
import { SSa } from "./MentionChipImageIcon.js";
import { VXh } from "./MentionChipStatusDot.js";
import { XXh } from "./MentionChipTooltip.js";
import { oep } from "./clipboardPastePill.js";
import { mf } from "./cn.js";
import { Z7t } from "./file-icon-variant-context.js";
import { fd } from "./icon.js";
import { Unt, v_e } from "./index_41.js";
import { H1a, Vmi, YXh, aBS, dBS, hBS, iBS, lBS, uBS, wSa, xSa, zXh } from "./ipa.js";
import { v4r } from "./mention-chip-action.js";
import { Dkt, Kmi, Ymi, _4r } from "./mention-chip-dom.js";
import { Gmi, qmi } from "./mention-chip-icon.js";
import { S4r } from "./mention-chip-resolve.js";
import { Mkt } from "./mention-chip-utils.js";
import { SWe } from "./path-file-icon.js";
import { CP, Qjt } from "./prompt-chip.stylex.js";
import { Va } from "./stylex.js";
import { k9r } from "./tiptap-storage.js";
import { E } from "./tslib.es6.js";
import { jsx as ZFe } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as aep } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as oBS } from "./react-runtime/react/esm-index-production.js";
import { jsxs as rBS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { memo as sBS } from "./react-runtime/react/esm-index-production.js";
var lep, W1a, cep;
export { W1a, cep, lep };
var __wakaru_pBS_initialized = false;
export function pBS() {
if (__wakaru_pBS_initialized) return;
__wakaru_pBS_initialized = true;
"use strict";
E(), Va(), v_e(), Qjt(), mf(), SSa(), VXh(), XXh(), v4r(), Ymi(), qmi(), S4r(), Mkt(), oep(), k9r(), Z7t(), fd(), SWe(), lep = {
    "ui--default-marker": "ui--default-marker",
    $$css: !0
}, W1a = "mentionNode", cep = sBS(function(e) {
    const n = aep(160), { node: i, HTMLAttributes: r, extensionHTMLAttributes: s, editor: o, getPos: a } = e, l = mFe(), c = oBS(null), u = wSa(i.attrs);
    let d;
    n[0] !== o ? (d = {
        editor: o,
        selector: uBS
    }, n[0] = o, n[1] = d) : d = n[1];
    const h = GAr(d);
    let p;
    n[2] !== o ? (p = {
        editor: o,
        selector: dBS
    }, n[2] = o, n[3] = p) : p = n[3];
    const g = GAr(p), f = h?.matches?.(u) === !1 ? void 0 : h;
    let _;
    n[4] !== o ? (_ = H1a(o), n[4] = o, n[5] = _) : _ = n[5];
    const { onMentionChipAction: b, onMentionChipContextMenu: y, readOnlyMentionChrome: S, hideRemoveButton: k } = _, C = g(u), T = (C.tooltipText ?? C.primaryText).trim(), I = C.tooltipContent ? void 0 : T, A = C.action.kind !== "noop" && !!b, P = typeof s?.class == "string" ? s.class : "", M = typeof r?.class == "string" ? r.class : "";
    let O;
    n[6] !== P || n[7] !== M ? (O = [
        Dkt,
        P,
        M
    ].filter(Boolean), n[6] = P, n[7] = M, n[8] = O) : O = n[8];
    const N = O.join(" "), U = !S && !k, j = C.icon.kind === "image";
    let $, H, G, q, K, V, Y, J, Q, te, ee, re, ie, oe, se, le;
    if (n[9] !== r || n[10] !== l || n[11] !== u.mentionType || n[12] !== u.plainText || n[13] !== C || n[14] !== N || n[15] !== o || n[16] !== s || n[17] !== a || n[18] !== j || n[19] !== U || n[20] !== A || n[21] !== f || n[22] !== I || n[23] !== i.nodeSize || n[24] !== b || n[25] !== y || n[26] !== S) {
        const Ce = gn(lep, CP.root, j && CP.rootWithMcpIcon).className;
        let Se;
        if (n[43] !== r || n[44] !== l || n[45] !== u.mentionType || n[46] !== u.plainText || n[47] !== C || n[48] !== o || n[49] !== s || n[50] !== a || n[51] !== U || n[52] !== A || n[53] !== f || n[54] !== I || n[55] !== i.nodeSize || n[56] !== b || n[57] !== y || n[58] !== S) {
            const Pe = gn(CP.icon, CP.leadingIcon).className;
            let we;
            n[72] !== r || n[73] !== s ? (we = lBS(s, r), n[72] = r, n[73] = s, n[74] = we) : we = n[74];
            let Ie;
            n[75] !== I ? (Ie = I ? {
                title: I
            } : {}, n[75] = I, n[76] = Ie) : Ie = n[76];
            let Me;
            n[77] !== S ? (Me = S ? {
                "data-read-only-mention": "true"
            } : {}, n[77] = S, n[78] = Me) : Me = n[78];
            let De;
            n[79] !== U ? (De = U ? {
                "data-has-remove-button": "true"
            } : {}, n[79] = U, n[80] = De) : De = n[80];
            let Ne;
            n[81] !== f ? (Ne = f ? {
                "data-mention-chip-presentation": f.kind
            } : {}, n[81] = f, n[82] = Ne) : Ne = n[82], n[83] !== Me || n[84] !== De || n[85] !== Ne || n[86] !== we || n[87] !== Ie ? (Se = {
                ...we,
                ...Kmi,
                "data-type": W1a,
                ...Ie,
                ...Me,
                ...De,
                ...Ne
            }, delete Se.class, n[83] = Me, n[84] = De, n[85] = Ne, n[86] = we, n[87] = Ie, n[88] = Se) : Se = n[88];
            const be = C.chipColor;
            let je;
            n[89] !== f ? (je = aBS(f), n[89] = f, n[90] = je) : je = n[90];
            const $e = je;
            let Je;
            n[91] !== be || n[92] !== $e ? (Je = be || $e ? {
                ...be ? {
                    color: be
                } : {},
                ...$e
            } : void 0, n[91] = be, n[92] = $e, n[93] = Je) : Je = n[93], ie = Je;
            let Ge;
            n[94] !== be ? (Ge = be ? {
                color: be
            } : {
                color: "inherit"
            }, n[94] = be, n[95] = Ge) : Ge = n[95];
            const xe = Ge;
            let Oe;
            n[96] !== o || n[97] !== a || n[98] !== i.nodeSize ? (Oe = (Be)=>{
                Be.preventDefault(), Be.stopPropagation();
                const Ue = a();
                Ue !== void 0 && (o.view.dispatch(o.state.tr.delete(Ue, Ue + i.nodeSize).setMeta(_4r, !0).scrollIntoView()), o.view.focus());
            }, n[96] = o, n[97] = a, n[98] = i.nodeSize, n[99] = Oe) : Oe = n[99], V = Oe;
            const ct = hBS;
            let Ye;
            n[100] === Symbol.for("react.memo_cache_sentinel") ? (Ye = (Be)=>{
                if (!ct(Be)) {
                    c.current = null;
                    return;
                }
                Be.preventDefault(), Be.stopPropagation(), c.current = Be.key;
            }, n[100] = Ye) : Ye = n[100], Q = Ye;
            let Ve;
            n[101] !== V ? (Ve = (Be)=>{
                c.current === Be.key && (c.current = null, V(Be));
            }, n[101] = V, n[102] = Ve) : Ve = n[102], te = Ve;
            let Xe;
            n[103] === Symbol.for("react.memo_cache_sentinel") ? (Xe = ()=>{
                c.current = null;
            }, n[103] = Xe) : Xe = n[103], Y = Xe;
            let lt;
            n[104] !== V ? (lt = (Be)=>{
                if (Be.detail > 0) {
                    Be.preventDefault(), Be.stopPropagation();
                    return;
                }
                V(Be);
            }, n[104] = V, n[105] = lt) : lt = n[105], J = lt;
            let He;
            n[106] !== C.action || n[107] !== A || n[108] !== b ? (He = (Be)=>{
                !A || !b || (Be.preventDefault(), Be.stopPropagation(), b(C.action, {
                    metaKey: Be.metaKey,
                    ctrlKey: Be.ctrlKey
                }));
            }, n[106] = C.action, n[107] = A, n[108] = b, n[109] = He) : He = n[109], H = He;
            const gt = u.mentionType === "clipboard" && u.plainText && !S ? u.plainText : void 0;
            ee = gt !== void 0;
            let ht;
            n[110] !== o || n[111] !== gt || n[112] !== a || n[113] !== i.nodeSize ? (ht = (Be)=>{
                if (gt === void 0 || !o.isEditable) return;
                const Ue = a();
                Ue !== void 0 && (Be.preventDefault(), Be.stopPropagation(), o.chain().focus().insertContentAt({
                    from: Ue,
                    to: Ue + i.nodeSize
                }, iBS(gt)).run());
            }, n[110] = o, n[111] = gt, n[112] = a, n[113] = i.nodeSize, n[114] = ht) : ht = n[114], q = ht;
            let Ae;
            n[115] !== C || n[116] !== y ? (Ae = (Be)=>{
                !y || !xSa(C.action) || (Be.preventDefault(), Be.stopPropagation(), y(Be.nativeEvent, C));
            }, n[115] = C, n[116] = y, n[117] = Ae) : Ae = n[117], G = Ae;
            let ot;
            if (n[118] !== C.action || n[119] !== q || n[120] !== A || n[121] !== ee || n[122] !== b ? (ot = (Be)=>{
                if (!(Be.key !== "Enter" && Be.key !== " ")) {
                    if (ee) {
                        q(Be);
                        return;
                    }
                    !A || !b || (Be.preventDefault(), Be.stopPropagation(), b(C.action));
                }
            }, n[118] = C.action, n[119] = q, n[120] = A, n[121] = ee, n[122] = b, n[123] = ot) : ot = n[123], K = ot, C.icon.kind === "cursor") re = ZFe(zt, {
                className: ri("ui-prompt-input-mention-chip__icon ui-prompt-input-mention-chip__leading-icon", Pe),
                color: C.iconColor,
                name: C.icon.name,
                size: 12,
                "aria-hidden": "true",
                style: C.iconColor ? void 0 : xe,
                title: I
            });
            else if (C.icon.kind === "image") {
                let Be;
                n[124] === Symbol.for("react.memo_cache_sentinel") ? (Be = [
                    CP.icon,
                    CP.leadingIcon,
                    CP.mcpMentionIcon
                ], n[124] = Be) : Be = n[124];
                let Ue;
                n[125] !== C.icon.src || n[126] !== I ? (Ue = ZFe(Vmi, {
                    rootStyle: Be,
                    src: C.icon.src,
                    title: I
                }), n[125] = C.icon.src, n[126] = I, n[127] = Ue) : Ue = n[127], re = Ue;
            } else re = l !== "seti" ? ZFe(W5, {
                className: ri("ui-prompt-input-mention-chip__icon ui-prompt-input-mention-chip__leading-icon", Pe),
                name: C.icon.fileName,
                size: Gmi,
                "aria-hidden": "true",
                style: be ? xe : void 0,
                title: I
            }) : ZFe("span", {
                ...gn(CP.setiSlot, CP.leadingIcon),
                children: ZFe(W5, {
                    className: ri("ui-seti ui-prompt-input-mention-chip__seti ui-prompt-input-mention-chip__leading-icon", gn(CP.setiGlyph).className),
                    name: C.icon.fileName,
                    size: 18,
                    "aria-hidden": "true",
                    style: be ? xe : void 0,
                    title: I
                })
            });
            n[43] = r, n[44] = l, n[45] = u.mentionType, n[46] = u.plainText, n[47] = C, n[48] = o, n[49] = s, n[50] = a, n[51] = U, n[52] = A, n[53] = f, n[54] = I, n[55] = i.nodeSize, n[56] = b, n[57] = y, n[58] = S, n[59] = H, n[60] = G, n[61] = q, n[62] = K, n[63] = V, n[64] = Y, n[65] = J, n[66] = Q, n[67] = te, n[68] = ee, n[69] = re, n[70] = Se, n[71] = ie;
        } else H = n[59], G = n[60], q = n[61], K = n[62], V = n[63], Y = n[64], J = n[65], Q = n[66], te = n[67], ee = n[68], re = n[69], Se = n[70], ie = n[71];
        $ = Unt, oe = "span", se = Se, le = ri(N, Ce), n[9] = r, n[10] = l, n[11] = u.mentionType, n[12] = u.plainText, n[13] = C, n[14] = N, n[15] = o, n[16] = s, n[17] = a, n[18] = j, n[19] = U, n[20] = A, n[21] = f, n[22] = I, n[23] = i.nodeSize, n[24] = b, n[25] = y, n[26] = S, n[27] = $, n[28] = H, n[29] = G, n[30] = q, n[31] = K, n[32] = V, n[33] = Y, n[34] = J, n[35] = Q, n[36] = te, n[37] = ee, n[38] = re, n[39] = ie, n[40] = oe, n[41] = se, n[42] = le;
    } else $ = n[27], H = n[28], G = n[29], q = n[30], K = n[31], V = n[32], Y = n[33], J = n[34], Q = n[35], te = n[36], ee = n[37], re = n[38], ie = n[39], oe = n[40], se = n[41], le = n[42];
    const ce = A || ee ? "button" : void 0, ae = A || ee ? 0 : void 0, de = ee ? q : A ? H : void 0, he = A || ee ? K : void 0;
    let ge;
    n[128] !== V || n[129] !== Y || n[130] !== J || n[131] !== Q || n[132] !== te || n[133] !== k || n[134] !== I || n[135] !== S ? (ge = S || k ? null : ZFe("button", {
        type: "button",
        className: ri("ui-pill__close ui-prompt-input-mention-chip__close-icon", gn(CP.closeIcon).className),
        "aria-label": "Remove mention",
        title: I,
        onMouseDown: V,
        onClick: J,
        onKeyDown: Q,
        onKeyUp: te,
        onBlur: Y,
        children: ZFe(zt, {
            name: "x",
            size: 11,
            rootStyle: CP.closeIconGlyph,
            "aria-hidden": "true"
        })
    }), n[128] = V, n[129] = Y, n[130] = J, n[131] = Q, n[132] = te, n[133] = k, n[134] = I, n[135] = S, n[136] = ge) : ge = n[136];
    let pe;
    n[137] !== C.secondaryText ? (pe = C.secondaryText ? ZFe("span", {
        className: ri("ui-prompt-input-mention-chip__line-range", gn(CP.lineRange).className),
        children: C.secondaryText
    }) : null, n[137] = C.secondaryText, n[138] = pe) : pe = n[138];
    let ve;
    n[139] !== C.statusDot ? (ve = C.statusDot ? ZFe(zXh, {
        status: C.statusDot
    }) : null, n[139] = C.statusDot, n[140] = ve) : ve = n[140];
    let fe;
    n[141] !== $ || n[142] !== C.primaryText || n[143] !== G || n[144] !== re || n[145] !== ie || n[146] !== de || n[147] !== he || n[148] !== ge || n[149] !== pe || n[150] !== ve || n[151] !== oe || n[152] !== se || n[153] !== le || n[154] !== ce || n[155] !== ae ? (fe = rBS($, {
        as: oe,
        ...se,
        className: le,
        style: ie,
        role: ce,
        tabIndex: ae,
        onClick: de,
        onContextMenu: G,
        onKeyDown: he,
        children: [
            re,
            ge,
            C.primaryText,
            pe,
            ve
        ]
    }), n[141] = $, n[142] = C.primaryText, n[143] = G, n[144] = re, n[145] = ie, n[146] = de, n[147] = he, n[148] = ge, n[149] = pe, n[150] = ve, n[151] = oe, n[152] = se, n[153] = le, n[154] = ce, n[155] = ae, n[156] = fe) : fe = n[156];
    const Te = fe;
    let _e;
    return n[157] !== C || n[158] !== Te ? (_e = ZFe(YXh, {
        chip: C,
        children: Te
    }), n[157] = C, n[158] = Te, n[159] = _e) : _e = n[159], _e;
});

}
