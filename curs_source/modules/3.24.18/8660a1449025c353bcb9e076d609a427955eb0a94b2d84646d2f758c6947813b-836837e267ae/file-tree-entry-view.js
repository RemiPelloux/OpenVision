import { NC, U5, W5, ar, c6, zt } from "./LYd.js";
import { Rkt, Yg } from "./Progress_2.js";
import { dy } from "./Text.js";
import { qu } from "./attach.js";
import { ufi } from "./file-tree-dom.js";
import { cfi, ewa, o$t, okn, sBr } from "./file-tree-entry-view.types.js";
import { hBr } from "./file-tree-row-dnd.js";
import { yip } from "./format-file-tree-path-label.js";
import { fd } from "./icon.js";
import { GjS, QjS, XjS, YjS, a$S, c$S, d$S, h$S, i$S, jjS, l$S, n$S, p$S, t$S, u$S } from "./ipa.js";
import { SWe } from "./path-file-icon.js";
import { Va } from "./stylex.js";
import { hL } from "./tooltip.js";
import { E } from "./tslib.es6.js";
import { m2 } from "./variant-enforcer.js";
import { jsx as Hne } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useState as KjS } from "./react-runtime/react/esm-index-production.js";
import { jsxs as Kkt } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Sip } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { memo as VjS } from "./react-runtime/react/esm-index-production.js";
import { useId as kip } from "./react-runtime/react/esm-index-production.js";
import { Fragment as qjS } from "./react-runtime/react/esm-jsx-runtime-production.js";
var Ghe, wip, Ykt, a$t, Cip, Tip, Eip, pBr, swa, owa, l$t;
export { Cip, Eip, Ghe, Tip, Ykt, a$t, l$t, owa, pBr, swa, wip };
var __wakaru_awa_initialized = false;
export function awa() {
if (__wakaru_awa_initialized) return;
__wakaru_awa_initialized = true;
"use strict";
E(), U5(), Va(), ufi(), sBr(), hBr(), yip(), dy(), hL(), qu(), Rkt(), fd(), SWe(), m2(), Ghe = {
    base: {
        k1xSpc: "ui-78zum5",
        kGNEyG: "ui-6s0dn4",
        kOIVth: "ui-11twubx",
        kB7OPa: "ui-9f619",
        kVAEAm: "ui-1n2onr6",
        kzqmXN: "ui-h8yej3",
        k7Eaqz: "ui-euugli",
        kZKoxP: "ui-1gq4xhb",
        kLKAdn: "ui-exx8yu",
        kpe85a: "ui-17v7654",
        kGO01o: "ui-18d9i69",
        kE3dHu: "ui-1uhho1l",
        kIxVMA: "ui-1njmyyh",
        ksF3WI: "ui-y7i79c",
        kYm2EN: "ui-1talola",
        kqGeR4: "ui-famn59",
        kkrTdU: "ui-1ypdohk",
        khDVqt: "ui-uxw1ft",
        kXHlph: "ui-6ikm8r",
        kORKVm: "ui-10wlt62",
        kg5iWk: "ui-lyipyv",
        kMwMTN: "ui-1wd3ewq",
        kGuDYH: "ui-11wthnw",
        kLWn49: "ui-1evy7pa",
        kMeerF: "ui-1s780dp ui-at8dtc ui-4xl6zf",
        k3XXqK: "ui-1t137rt ui-1de710j ui-9v5kkp",
        kjBf7l: "ui-14ytart ui-1xwnvu1 ui-z2lg3n",
        kInvED: "ui-1wfwxd8 ui-167vgm8 ui-y9f4xx",
        $$css: !0
    },
    interactiveUnselected: {
        kWkggS: "ui-jbqb8w ui-1iuyybk ui-1a9ecnp ui-bc7umr",
        $$css: !0
    },
    selected: {
        kWkggS: "ui-flfp0o",
        $$css: !0
    },
    active: {
        kWkggS: "ui-flfp0o",
        $$css: !0
    },
    contextMenuTarget: {
        kWkggS: "ui-1ciwos8",
        $$css: !0
    },
    ignored: {
        kMwMTN: "ui-19aaqeu",
        kSiTet: "ui-1us6l5c",
        $$css: !0
    },
    dragging: {
        kSiTet: "ui-ti2d7y",
        $$css: !0
    },
    dropInto: {
        kWkggS: "ui-162gavy",
        kMeerF: "ui-1qgsegg",
        k3XXqK: "ui-aatb59",
        kjBf7l: "ui-dfyhys",
        kInvED: "ui-1g40iwv",
        $$css: !0
    },
    statusAdded: {
        kMwMTN: "ui-t1zr94",
        $$css: !0
    },
    statusUntracked: {
        kMwMTN: "ui-al71sd",
        $$css: !0
    },
    statusModified: {
        kMwMTN: "ui-1q7yeqr",
        $$css: !0
    },
    statusRenamed: {
        kMwMTN: "ui-1d0l12",
        $$css: !0
    },
    muted: {
        kMwMTN: "ui-19aaqeu ui-1gzqcuk ui-iq000t",
        $$css: !0
    },
    indent: (t)=>[
            {
                kE3dHu: t != null ? "ui-13e46o5" : t,
                $$css: !0
            },
            {
                "--x-paddingLeft": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(t)
            }
        ]
}, wip = {
    base: {
        k1xSpc: "ui-78zum5",
        kGNEyG: "ui-6s0dn4",
        kjj79g: "ui-l56j7k",
        kmuXW: "ui-2lah0s",
        kzQI83: "ui-1c4vz4f",
        kCS8Yb: "ui-fbp3lg",
        kzqmXN: "ui-16bvwqk",
        k7Eaqz: "ui-cbmsab",
        ks0D6T: "ui-2kwetn",
        kZKoxP: "ui-1a6rlst",
        keoZOQ: "ui-dj266r",
        km5ZXQ: "ui-1yf7rl7",
        k1K539: "ui-at24cr",
        koQZXg: "ui-j3b58b",
        kLKAdn: "ui-exx8yu",
        kpe85a: "ui-1xpa7k",
        kGO01o: "ui-18d9i69",
        kE3dHu: "ui-1uhho1l",
        kEafiO: "ui-972fbf",
        kWqL5O: "ui-gfja2r",
        kt9PQ7: "ui-1qhh985",
        kZ1KPB: "ui-yj58a3",
        kPef9Z: "ui-1ejq31n",
        kSWEuD: "ui-11pwa6s",
        kfdmCh: "ui-1sy0etr",
        k4WBpm: "ui-1b16gh4",
        kWkggS: "ui-jbqb8w",
        kMwMTN: "ui-1lbmi28",
        kMv6JI: "ui-jb2p0i",
        kGuDYH: "ui-1qlqyl8",
        k63SB2: "ui-1pd3egz",
        kLWn49: "ui-15bjb6t",
        kkrTdU: "ui-1ypdohk",
        kysU6D: "ui-jyslct",
        kXHlph: "ui-6ikm8r",
        kORKVm: "ui-10wlt62",
        kB7OPa: "ui-9f619",
        $$css: !0
    }
}, Ykt = {
    base: {
        kzQI83: "ui-1iyjqo2",
        kmuXW: "ui-s83m0k",
        k7Eaqz: "ui-euugli",
        kXHlph: "ui-6ikm8r",
        kORKVm: "ui-10wlt62",
        kkrTdU: "ui-1ypdohk",
        $$css: !0
    },
    statusAdded: {
        kMwMTN: "ui-t1zr94",
        $$css: !0
    },
    statusUntracked: {
        kMwMTN: "ui-al71sd",
        $$css: !0
    },
    statusModified: {
        kMwMTN: "ui-1q7yeqr",
        $$css: !0
    },
    statusRenamed: {
        kMwMTN: "ui-1d0l12",
        $$css: !0
    },
    statusDeleted: {
        kMwMTN: "ui-r243le",
        kMnn75: "ui-5lhwog",
        $$css: !0
    },
    muted: {
        kMwMTN: "ui-1heor9g",
        $$css: !0
    }
}, a$t = {
    base: {
        koQZXg: "ui-8x9d4c",
        kmuXW: "ui-2lah0s",
        kGuDYH: "ui-1wm8ruf",
        k63SB2: "ui-1yl5bsf",
        kcqcaj: "ui-ss6m8b",
        $$css: !0
    },
    deleted: {
        kMwMTN: "ui-r243le",
        $$css: !0
    },
    added: {
        kMwMTN: "ui-t1zr94",
        $$css: !0
    },
    untracked: {
        kMwMTN: "ui-al71sd",
        $$css: !0
    },
    modified: {
        kMwMTN: "ui-1q7yeqr",
        $$css: !0
    },
    renamed: {
        kMwMTN: "ui-1d0l12",
        $$css: !0
    }
}, Cip = {
    base: {
        kMwMTN: "ui-1lbmi28",
        kGuDYH: "ui-11wthnw",
        keoZOQ: "ui-dj266r",
        km5ZXQ: "ui-1f1oiij",
        k1K539: "ui-at24cr",
        koQZXg: "ui-7cu23a",
        $$css: !0
    }
}, Tip = {
    active: {
        kWkggS: "ui-162gavy",
        kIxVMA: "ui-1njmyyh",
        ksF3WI: "ui-y7i79c",
        kYm2EN: "ui-1talola",
        kqGeR4: "ui-famn59",
        kGVxlE: "ui-9txa94",
        $$css: !0
    }
}, Eip = {
    base: {
        k1xSpc: "ui-78zum5",
        kGNEyG: "ui-6s0dn4",
        kOIVth: "ui-11twubx",
        koQZXg: "ui-8x9d4c",
        kmuXW: "ui-2lah0s",
        kGuDYH: "ui-1wm8ruf",
        kcqcaj: "ui-ss6m8b",
        $$css: !0
    }
}, pBr = {
    restIcon: {
        k1xSpc: "ui-1lliihq ui-up7835 ui-11nzqvk",
        $$css: !0
    },
    hoverChevron: {
        k1xSpc: "ui-1s85apg ui-1gielv5 ui-120b6io",
        k1ekBW: "ui-11xpdln ui-4wkmsb",
        kIyJzY: "ui-g3p6pi",
        kAMwcw: "ui-6ekqhr",
        $$css: !0
    },
    hoverChevronOpen: {
        k3aq6I: "ui-1iffjtl",
        $$css: !0
    }
}, swa = {
    actionControl: {
        kfzvcC: "ui-67bb7w ui-7gqb9v ui-49ix2u",
        k33iCy: "ui-pboyhx",
        $$css: !0
    }
}, owa = {
    add: {
        kMwMTN: "ui-t1zr94",
        $$css: !0
    },
    del: {
        kMwMTN: "ui-r243le",
        $$css: !0
    }
}, l$t = VjS(function(e) {
    const n = Sip(165), { node: i, tone: r, status: s, ignored: o, depth: a, disabled: l, isActive: c, isContextMenuTarget: u, indentVariant: d, indentStep: h, indentBasePx: p, showIcons: g, folderIconVariant: f, fileHref: _, fileIconVariant: b, pathLabelTooltip: y, pathSeparator: S, rowHeightPx: k, leadingAccessory: C, trailingAccessory: T, trailingAction: I, renderTrailingAction: A, isOpen: P, isLoading: M, onRowClick: O, onToggle: N, onFileDoubleClick: U, onContextMenu: j, isSelected: $, selectable: H, selectionCount: G, draggable: q, dragData: K, onMoveItem: V, acceptExternalDrops: Y, onExternalDrop: J, dropTargetDir: Q, onRowDropTargetChange: te, onRowDragOverChange: ee, onRowDragStart: re, onRowDragEnd: ie, treeId: oe, onFocusNext: se, onFocusPrev: le, onFocusParent: ce, onFocusFirstChild: ae, onToggleSelection: de, onRegister: he, onFocusedItemChange: ge } = e, pe = r === void 0 ? "default" : r, ve = l === void 0 ? !1 : l, fe = c === void 0 ? !1 : c, Te = u === void 0 ? !1 : u, _e = d === void 0 ? "default" : d, Ce = h === void 0 ? cfi : h, Se = p === void 0 ? ewa : p, Pe = g === void 0 ? !0 : g, we = f === void 0 ? "chevron" : f, Ie = y === void 0 ? "tooltip" : y, Me = S === void 0 ? "/" : S, De = k === void 0 ? okn : k, Ne = M === void 0 ? !1 : M, be = $ === void 0 ? !1 : $, je = H === void 0 ? !1 : H, $e = G === void 0 ? 0 : G, Je = Y === void 0 ? !1 : Y, Ge = Q === void 0 ? null : Q, xe = !!i.children;
    let Oe;
    n[0] !== i.path || n[1] !== he ? (Oe = (rr)=>{
        he?.(i.path, rr);
    }, n[0] = i.path, n[1] = he, n[2] = Oe) : Oe = n[2];
    const ct = Oe, Ye = ve ? !1 : q;
    let Ve;
    n[3] !== Je || n[4] !== K || n[5] !== Ge || n[6] !== xe || n[7] !== be || n[8] !== i || n[9] !== J || n[10] !== V || n[11] !== ie || n[12] !== ee || n[13] !== re || n[14] !== te || n[15] !== $e || n[16] !== Ye || n[17] !== oe ? (Ve = {
        node: i,
        isDir: xe,
        treeId: oe,
        draggable: Ye,
        dragData: K,
        onMoveItem: V,
        acceptExternalDrops: Je,
        onExternalDrop: J,
        dropTargetDir: Ge,
        onRowDropTargetChange: te,
        onRowDragOverChange: ee,
        onRowDragStart: re,
        onRowDragEnd: ie,
        isSelected: be,
        selectionCount: $e
    }, n[3] = Je, n[4] = K, n[5] = Ge, n[6] = xe, n[7] = be, n[8] = i, n[9] = J, n[10] = V, n[11] = ie, n[12] = ee, n[13] = re, n[14] = te, n[15] = $e, n[16] = Ye, n[17] = oe, n[18] = Ve) : Ve = n[18];
    const { dragRef: Xe, isDragging: lt, dropRef: He, dragCountRef: gt, showDragCount: ht, segmentDirPaths: Ae, showDropTarget: ot, activeSegmentIndex: Be } = GjS(Ve);
    let Ue;
    n[19] !== Xe || n[20] !== He || n[21] !== ct ? (Ue = [
        Xe,
        He,
        ct
    ], n[19] = Xe, n[20] = He, n[21] = ct, n[22] = Ue) : Ue = n[22];
    const it = c6(Ue);
    let qe;
    n[23] !== ve || n[24] !== xe || n[25] !== i.path || n[26] !== O ? (qe = (rr)=>{
        ve || O?.(i.path, xe, rr);
    }, n[23] = ve, n[24] = xe, n[25] = i.path, n[26] = O, n[27] = qe) : qe = n[27];
    const pt = qe;
    let dt;
    n[28] !== ve || n[29] !== xe || n[30] !== i.path || n[31] !== U ? (dt = (rr)=>{
        ve || xe || U?.(i.path, rr);
    }, n[28] = ve, n[29] = xe, n[30] = i.path, n[31] = U, n[32] = dt) : dt = n[32];
    const ft = dt;
    let bt;
    n[33] !== pt || n[34] !== ve || n[35] !== xe || n[36] !== P || n[37] !== i.path || n[38] !== ae || n[39] !== se || n[40] !== ce || n[41] !== le || n[42] !== N || n[43] !== de ? (bt = (rr)=>{
        const Gs = rr.metaKey || rr.ctrlKey;
        e: switch(rr.key){
            case "Enter":
                {
                    if (rr.altKey || Gs || rr.shiftKey) return;
                    rr.preventDefault(), pt();
                    break e;
                }
            case " ":
                {
                    if (rr.altKey) return;
                    if (rr.preventDefault(), Gs) {
                        de?.(i.path);
                        break e;
                    }
                    pt();
                    break e;
                }
            case "ArrowDown":
                {
                    if (rr.altKey) return;
                    rr.preventDefault(), se?.(i.path, {
                        extendSelection: rr.shiftKey,
                        preserveSelection: Gs && !rr.shiftKey
                    });
                    break e;
                }
            case "ArrowUp":
                {
                    if (rr.altKey) return;
                    rr.preventDefault(), le?.(i.path, {
                        extendSelection: rr.shiftKey,
                        preserveSelection: Gs && !rr.shiftKey
                    });
                    break e;
                }
            case "ArrowRight":
                {
                    if (rr.altKey || Gs || rr.shiftKey || (rr.preventDefault(), ve)) return;
                    xe && (P ? ae?.(i.path) : N?.(i.path));
                    break e;
                }
            case "ArrowLeft":
                {
                    if (rr.altKey || Gs || rr.shiftKey || (rr.preventDefault(), ve)) return;
                    xe && P ? N?.(i.path) : ce?.(i.path);
                    break e;
                }
            default:
        }
    }, n[33] = pt, n[34] = ve, n[35] = xe, n[36] = P, n[37] = i.path, n[38] = ae, n[39] = se, n[40] = ce, n[41] = le, n[42] = N, n[43] = de, n[44] = bt) : bt = n[44];
    const St = bt;
    let Et;
    n[45] !== xe || n[46] !== i.path || n[47] !== ge ? (Et = ()=>{
        ge?.(i.path, xe);
    }, n[45] = xe, n[46] = i.path, n[47] = ge, n[48] = Et) : Et = n[48];
    const kt = Et, [xt, Pt] = KjS(!1);
    let Dt;
    n[49] === Symbol.for("react.memo_cache_sentinel") ? (Dt = ()=>{
        Pt(!0);
    }, n[49] = Dt) : Dt = n[49];
    const tn = A !== void 0 ? Dt : void 0;
    let un;
    n[50] !== ve || n[51] !== xe || n[52] !== i.path || n[53] !== j ? (un = (rr)=>{
        if (ve) {
            rr.preventDefault();
            return;
        }
        j?.(rr, i.path, xe);
    }, n[50] = ve, n[51] = xe, n[52] = i.path, n[53] = j, n[54] = un) : un = n[54];
    const kn = un, oi = _e === "flat" ? 0 : Se + a * Ce;
    let Fn;
    n[55] !== ve || n[56] !== xe || n[57] !== i.path || n[58] !== j ? (Fn = (rr)=>{
        if (ve) {
            rr.preventDefault();
            return;
        }
        !xe || !j || (rr.preventDefault(), rr.stopPropagation(), j(rr, i.path, !0, {
            variant: "createOnly"
        }));
    }, n[55] = ve, n[56] = xe, n[57] = i.path, n[58] = j, n[59] = Fn) : Fn = n[59];
    const Qt = Fn;
    let Sn;
    n[60] !== a || n[61] !== xe || n[62] !== P || n[63] !== i || n[64] !== A || n[65] !== I || n[66] !== xt ? (Sn = I !== void 0 ? I : xt ? A?.({
        node: i,
        depth: a,
        isDirectory: xe,
        isOpen: P
    }) ?? null : null, n[60] = a, n[61] = xe, n[62] = P, n[63] = i, n[64] = A, n[65] = I, n[66] = xt, n[67] = Sn) : Sn = n[67];
    const $n = Sn, Mn = $n != null, Un = kip(), Xn = kip(), Ti = xe && we === "folder", bi = Mn || Ti, Qn = `${De}px`;
    let ni;
    if (n[68] !== bi || n[69] !== o || n[70] !== oi || n[71] !== fe || n[72] !== Te || n[73] !== xe || n[74] !== lt || n[75] !== be || n[76] !== ot || n[77] !== s || n[78] !== Qn || n[79] !== pe) {
        const rr = {
            "--ui-file-tree-row-height": Qn,
            "--ui-file-tree-row-gap": `${o$t}px`
        };
        ni = ar({
            rootClass: "ui-file-tree-entry",
            stylexStyles: [
                ...bi ? [
                    {
                        "ui--default-marker": "ui--default-marker",
                        $$css: !0
                    }
                ] : [],
                YjS({
                    isActive: fe,
                    isContextMenuTarget: Te,
                    isDragging: lt,
                    isDropTarget: ot,
                    isIgnored: o,
                    isSelected: be,
                    status: s,
                    tone: pe,
                    indentPx: oi
                })
            ],
            className: xe ? "ui-file-tree-entry--dir" : void 0,
            style: rr
        }), n[68] = bi, n[69] = o, n[70] = oi, n[71] = fe, n[72] = Te, n[73] = xe, n[74] = lt, n[75] = be, n[76] = ot, n[77] = s, n[78] = Qn, n[79] = pe, n[80] = ni;
    } else ni = n[80];
    const pn = ni;
    let yn;
    n[81] === Symbol.for("react.memo_cache_sentinel") ? (yn = {
        className: "ui-ixxii4 ui-1agkon0 ui-3rpodo ui-493x5y ui-1yxiud8 ui-b6dno7 ui-yab65l ui-1njmyyh ui-y7i79c ui-1talola ui-famn59 ui-1wm8ruf ui-k50ysn ui-uxw1ft ui-47corl ui-1x3a6yq ui-db05xe"
    }, n[81] = yn) : yn = n[81];
    const Ln = yn, xi = xe ? "ui-file-tree-entry__chevron" : "ui-file-tree-entry__icon";
    let Ci;
    n[82] !== xi ? (Ci = ar({
        rootClass: "ui-file-tree-entry__leading",
        className: xi,
        stylexStyles: XjS()
    }), n[82] = xi, n[83] = Ci) : Ci = n[83];
    const En = Ci;
    let Dn;
    n[84] !== xe || n[85] !== s ? (Dn = xe ? void 0 : l$S(s), n[84] = xe, n[85] = s, n[86] = Dn) : Dn = n[86];
    const Si = Dn;
    let Ui;
    n[87] !== s || n[88] !== Si ? (Ui = s ? ar({
        rootClass: "ui-file-tree-entry__status-badge",
        stylexStyles: QjS(s),
        className: `ui-file-tree-entry__status-badge--${Si}`
    }) : void 0, n[87] = s, n[88] = Si, n[89] = Ui) : Ui = n[89];
    const Nn = Ui;
    let ci;
    n[90] === Symbol.for("react.memo_cache_sentinel") ? (ci = ar({
        rootClass: "ui-file-tree-entry__diff",
        stylexStyles: t$S()
    }), n[90] = ci) : ci = n[90];
    const Pi = ci;
    let vi;
    n[91] === Symbol.for("react.memo_cache_sentinel") ? (vi = ar({
        rootClass: "ui-file-tree-entry__diff-add",
        stylexStyles: n$S()
    }), n[91] = vi) : vi = n[91];
    const Yi = vi;
    let Bn;
    n[92] === Symbol.for("react.memo_cache_sentinel") ? (Bn = ar({
        rootClass: "ui-file-tree-entry__diff-del",
        stylexStyles: i$S()
    }), n[92] = Bn) : Bn = n[92];
    const Tn = Bn;
    let Zn;
    n[93] !== xe || n[94] !== i.diff || n[95] !== Nn || n[96] !== Si ? (Zn = ()=>Si && Nn ? Hne("span", {
            className: Nn.className,
            style: Nn.style,
            children: Si
        }) : !xe && i.diff ? Kkt("span", {
            className: Pi.className,
            style: Pi.style,
            children: [
                i.diff.additions > 0 && Kkt("span", {
                    className: Yi.className,
                    style: Yi.style,
                    children: [
                        "+",
                        i.diff.additions
                    ]
                }),
                i.diff.deletions > 0 && Kkt("span", {
                    className: Tn.className,
                    style: Tn.style,
                    children: [
                        "-",
                        i.diff.deletions
                    ]
                })
            ]
        }) : null, n[93] = xe, n[94] = i.diff, n[95] = Nn, n[96] = Si, n[97] = Zn) : Zn = n[97];
    const tr = Zn;
    let hi;
    n[98] !== tr || n[99] !== T ? (hi = T !== void 0 ? T : tr(), n[98] = tr, n[99] = T, n[100] = hi) : hi = n[100];
    const ui = hi, Ni = pn.className, cr = be || void 0, fs = je ? be : void 0, mi = o || void 0, di = fe ? !0 : void 0, Mr = Te ? !0 : void 0, jr = pe === "default" ? void 0 : pe, Ur = lt || void 0, Ws = ot || void 0, jo = ve || void 0;
    let Ia;
    n[101] !== bi ? (Ia = bi ? {
        "data-file-tree-entry": !0
    } : {}, n[101] = bi, n[102] = Ia) : Ia = n[102];
    let ga;
    n[103] !== a || n[104] !== xe ? (ga = jjS(a, xe), n[103] = a, n[104] = xe, n[105] = ga) : ga = n[105];
    const zs = xe ? P : void 0, Vs = Mn ? `${Un} ${Xn}` : void 0;
    let Ra;
    n[106] !== b || n[107] !== Qt || n[108] !== xe || n[109] !== Ne || n[110] !== P || n[111] !== En || n[112] !== i.path || n[113] !== Pe || n[114] !== Ti ? (Ra = Pe && (xe ? Hne("button", {
        type: "button",
        className: En.className,
        style: En.style,
        tabIndex: -1,
        "aria-label": "Folder options",
        onMouseDown: c$S,
        onContextMenu: Qt,
        children: Ne ? Hne(Yg, {
            indeterminate: !0,
            variant: "ring",
            size: "xs"
        }) : Ti ? Kkt(qjS, {
            children: [
                Hne(zt, {
                    name: P ? "folder-open" : "folder",
                    size: "base",
                    rootStyle: pBr.restIcon
                }),
                Hne(zt, {
                    name: "chevron-right",
                    size: "base",
                    rootStyle: [
                        pBr.hoverChevron,
                        P && pBr.hoverChevronOpen
                    ]
                })
            ]
        }) : Hne(zt, {
            name: P ? "chevron-down" : "chevron-right",
            size: "sm"
        })
    }) : Hne("span", {
        className: En.className,
        style: En.style,
        children: Hne(W5, {
            name: i.path,
            size: "base",
            variant: b
        })
    })), n[106] = b, n[107] = Qt, n[108] = xe, n[109] = Ne, n[110] = P, n[111] = En, n[112] = i.path, n[113] = Pe, n[114] = Ti, n[115] = Ra) : Ra = n[115];
    const ur = xe ? void 0 : _;
    let wr;
    n[116] !== Be || n[117] !== Un || n[118] !== i.path || n[119] !== i.segments || n[120] !== Ie || n[121] !== Me || n[122] !== Ae || n[123] !== s || n[124] !== ur || n[125] !== pe ? (wr = Hne(a$S, {
        id: Un,
        segments: i.segments,
        segmentDirPaths: Ae,
        activeSegmentIndex: Be,
        status: s,
        tone: pe,
        title: i.path,
        href: ur,
        pathLabelTooltip: Ie,
        pathSeparator: Me
    }), n[116] = Be, n[117] = Un, n[118] = i.path, n[119] = i.segments, n[120] = Ie, n[121] = Me, n[122] = Ae, n[123] = s, n[124] = ur, n[125] = pe, n[126] = wr) : wr = n[126];
    let Es;
    n[127] !== Mn || n[128] !== ui || n[129] !== $n || n[130] !== Xn ? (Es = Mn ? Kkt("span", {
        className: "ui-rvj5dj ui-6s0dn4 ui-4xo5sw ui-8x9d4c ui-2lah0s ui-euugli",
        children: [
            Hne("span", {
                id: Xn,
                className: "ui-78zum5 ui-6s0dn4 ui-euugli ui-1agbcgv ui-crlgei ui-1hc1fzr ui-1blyawq ui-1m2va0s ui-47corl",
                children: ui
            }),
            Hne("span", {
                className: "ui-78zum5 ui-6s0dn4 ui-11twubx ui-1agbcgv ui-crlgei ui-g01cxk ui-109td2s ui-1kgon1u ui-lshs6z ui-nsyzls ui-kuhm8k ui-8u565s ui-1d9mcvc ui-1xart24",
                role: "presentation",
                onClick: u$S,
                onDoubleClick: d$S,
                onKeyDown: h$S,
                onContextMenu: p$S,
                children: Hne(NC, {
                    buttonRootStyle: swa.actionControl,
                    iconButtonRootStyle: swa.actionControl,
                    children: $n
                })
            })
        ]
    }) : ui, n[127] = Mn, n[128] = ui, n[129] = $n, n[130] = Xn, n[131] = Es) : Es = n[131];
    let eo;
    n[132] !== gt || n[133] !== $e || n[134] !== ht ? (eo = ht && Kkt("div", {
        ref: gt,
        "aria-hidden": !0,
        className: Ln.className,
        style: Ln.style,
        children: [
            $e,
            " items"
        ]
    }), n[132] = gt, n[133] = $e, n[134] = ht, n[135] = eo) : eo = n[135];
    let ts;
    return n[136] !== pt || n[137] !== tn || n[138] !== kn || n[139] !== ft || n[140] !== kt || n[141] !== St || n[142] !== C || n[143] !== it || n[144] !== pn.className || n[145] !== pn.style || n[146] !== s || n[147] !== cr || n[148] !== fs || n[149] !== mi || n[150] !== di || n[151] !== Mr || n[152] !== jr || n[153] !== Ur || n[154] !== Ws || n[155] !== jo || n[156] !== Ia || n[157] !== ga || n[158] !== zs || n[159] !== Vs || n[160] !== Ra || n[161] !== wr || n[162] !== Es || n[163] !== eo ? (ts = Kkt("div", {
        ref: it,
        className: Ni,
        "data-selected": cr,
        "aria-selected": fs,
        "data-ignored": mi,
        "data-active": di,
        "data-context-menu-target": Mr,
        "data-status": s,
        "data-tone": jr,
        "data-dragging": Ur,
        "data-drop-target": Ws,
        "aria-disabled": jo,
        ...Ia,
        ...ga,
        onClick: pt,
        onDoubleClick: ft,
        onContextMenu: kn,
        onFocus: kt,
        onPointerEnter: tn,
        onFocusCapture: tn,
        onKeyDown: St,
        role: "treeitem",
        "aria-expanded": zs,
        "aria-labelledby": Vs,
        tabIndex: 0,
        style: pn.style,
        children: [
            C,
            Ra,
            wr,
            Es,
            eo
        ]
    }), n[136] = pt, n[137] = tn, n[138] = kn, n[139] = ft, n[140] = kt, n[141] = St, n[142] = C, n[143] = it, n[144] = pn.className, n[145] = pn.style, n[146] = s, n[147] = cr, n[148] = fs, n[149] = mi, n[150] = di, n[151] = Mr, n[152] = jr, n[153] = Ur, n[154] = Ws, n[155] = jo, n[156] = Ia, n[157] = ga, n[158] = zs, n[159] = Vs, n[160] = Ra, n[161] = wr, n[162] = Es, n[163] = eo, n[164] = ts) : ts = n[164], ts;
});

}
