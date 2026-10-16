import { vof } from "./FullscreenVideoPlayer.stylex.js";
import { KOl, YOl } from "./FullscreenVideoPlayer.types.js";
import { bof } from "./FullscreenVideoPlayer.utils.js";
import { hh } from "./attach.js";
import { hXe } from "./codicon.js";
import { Dof, Mof, PY, QOl, Rof, ZOl, _of, fof, qCe } from "./f0s.js";
import { T0n } from "./format-time.js";
import { Nn, Or } from "./qIc.js";
import { Oc } from "./stylex.js";
import { x } from "./tslib.es6.js";
import { useLayoutEffect as Aof } from "./react-runtime/react/esm-index-production.js";
import { useEffect as E0n } from "./react-runtime/react/esm-index-production.js";
import { useRef as H9e } from "./react-runtime/react/esm-index-production.js";
import { memo as Iof } from "./react-runtime/react/esm-index-production.js";
import { useState as J9t } from "./react-runtime/react/esm-index-production.js";
import { jsxs as gue } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as xof } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as zO } from "./react-runtime/react/esm-jsx-runtime-production.js";
var JOl, eFl;
export { JOl, eFl };
var __wakaru_Pof_initialized = false;
export function Pof() {
if (__wakaru_Pof_initialized) return;
__wakaru_Pof_initialized = true;
"use strict";
x(), Oc(), vof(), YOl(), T0n(), bof(), hh(), hXe(), JOl = "data-video-chapter-label", eFl = Iof(function(t) {
    const n = xof(175), { isPlaying: i, duration: r, currentTime: s, playbackSpeed: o, onPlayPause: a, onSeek: c, onSpeedChange: l, isMuted: u, onToggleMute: h, onClose: p, isVisible: g, title: f, topBarActions: v, chapters: b, trimStartSeconds: y, trimEndSeconds: T, ownerWindow: E, frameWriterRef: A } = t, R = u === void 0 ? !1 : u;
    let D;
    n[0] !== b ? (D = b === void 0 ? [] : b, n[0] = b, n[1] = D) : D = n[1];
    const P = D, N = E === void 0 ? window : E;
    let O;
    n[2] === Symbol.for("react.memo_cache_sentinel") ? (O = new Map, n[2] = O) : O = n[2];
    const F = H9e(O);
    let H;
    n[3] === Symbol.for("react.memo_cache_sentinel") ? (H = new Map, n[3] = H) : H = n[3];
    const $ = H9e(H);
    let W;
    n[4] === Symbol.for("react.memo_cache_sentinel") ? (W = new Map, n[4] = W) : W = n[4];
    const G = H9e(W), q = H9e(null), z = H9e(null), X = H9e(null), Y = H9e(null), Z = H9e(null), K = H9e(null), [J, ne] = J9t(!1), [ee, se] = J9t(!1), [re, ue] = J9t(0), [ce, de] = J9t(0), [le, ye] = J9t(0), [_e, me] = J9t(!1), Ce = P.length > 1;
    let xe;
    n[5] !== P || n[6] !== Ce ? (xe = Ce ? P : [], n[5] = P, n[6] = Ce, n[7] = xe) : xe = n[7];
    let Le;
    n[8] !== r ? (Le = Number.isFinite(r) && r > 0 ? r : 60, n[8] = r, n[9] = Le) : Le = n[9];
    let Be;
    n[10] !== xe || n[11] !== Le || n[12] !== T || n[13] !== y ? (Be = _of(xe, Le, y, T), n[10] = xe, n[11] = Le, n[12] = T, n[13] = y, n[14] = Be) : Be = n[14];
    const je = Be, Ge = je.length > 0 ? je[0].startTime : 0, Xe = je.length > 0 ? je[je.length - 1].endTime : r, Ke = Math.max(0, Xe - Ge);
    let et;
    n[15] !== je || n[16] !== Ge ? (et = (Bs)=>{
        const ua = [];
        if (je.forEach((Ql, ep)=>{
            const Rp = F.current.get(ep)?.getBoundingClientRect();
            Rp !== void 0 && ua.push({
                segment: Ql,
                rect: Rp
            });
        }), ua.length === 0) return Ge;
        if (Bs <= ua[0].rect.left) return ua[0].segment.startTime;
        for (const { segment: Ql, rect: ep } of ua)if (Bs <= ep.right) {
            if (ep.width <= 0 || Ql.endTime <= Ql.startTime) return Ql.startTime;
            const Rp = Math.max(0, Math.min(1, (Bs - ep.left) / ep.width));
            return Ql.startTime + Rp * (Ql.endTime - Ql.startTime);
        }
        return ua[ua.length - 1].segment.endTime;
    }, n[15] = je, n[16] = Ge, n[17] = et) : et = n[17];
    const We = et;
    let it;
    n[18] !== We || n[19] !== c ? (it = (Bs)=>{
        const ua = We(Bs);
        c(ua);
    }, n[18] = We, n[19] = c, n[20] = it) : it = n[20];
    const Ne = it;
    let Fe;
    n[21] !== Ne ? (Fe = (Bs)=>{
        ZOl(Bs) || (Bs.preventDefault(), Bs.stopPropagation(), ne(!0), Ne(Bs.clientX));
    }, n[21] = Ne, n[22] = Fe) : Fe = n[22];
    const Qe = Fe;
    let tt;
    n[23] !== Ne ? (tt = (Bs)=>{
        ZOl(Bs) || (Bs.preventDefault(), Bs.stopPropagation(), Ne(Bs.clientX));
    }, n[23] = Ne, n[24] = tt) : tt = n[24];
    const st = tt;
    let vt;
    n[25] === Symbol.for("react.memo_cache_sentinel") ? (vt = ()=>{
        se(!1), ue(0), de(0), ye(0);
    }, n[25] = vt) : vt = n[25];
    const ht = vt;
    let ut;
    n[26] === Symbol.for("react.memo_cache_sentinel") ? (ut = ()=>{
        ht();
    }, n[26] = ut) : ut = n[26];
    const Dt = ut;
    let lt;
    n[27] !== We || n[28] !== J ? (lt = (Bs)=>{
        if (J) return;
        se(!0);
        const ua = We(Bs.clientX);
        ue(ua);
        const Ql = Y.current;
        if (Ql) {
            const ep = Ql.getBoundingClientRect();
            de(Math.max(0, Math.min(ep.width, Bs.clientX - ep.left)));
        }
    }, n[27] = We, n[28] = J, n[29] = lt) : lt = n[29];
    const Tt = lt;
    let ct;
    n[30] !== J || n[31] !== Ne ? (ct = (Bs)=>{
        J && Ne(Bs.clientX);
    }, n[30] = J, n[31] = Ne, n[32] = ct) : ct = n[32];
    const Kt = ct;
    let Rt;
    n[33] === Symbol.for("react.memo_cache_sentinel") ? (Rt = ()=>{
        ne(!1);
    }, n[33] = Rt) : Rt = n[33];
    const Gt = Rt;
    let Nt;
    n[34] !== s || n[35] !== c || n[36] !== Ke || n[37] !== Xe || n[38] !== Ge ? (Nt = (Bs)=>{
        if (Ke <= 0) return;
        const ua = Ke * .05, Ql = X.current ?? s;
        let ep;
        e: switch(Bs.key){
            case "ArrowLeft":
            case "ArrowDown":
                {
                    Bs.preventDefault(), ep = Math.max(Ge, Ql - ua);
                    break e;
                }
            case "ArrowRight":
            case "ArrowUp":
                {
                    Bs.preventDefault(), ep = Math.min(Xe, Ql + ua);
                    break e;
                }
            case "Home":
                {
                    Bs.preventDefault(), ep = Ge;
                    break e;
                }
            case "End":
                {
                    Bs.preventDefault(), ep = Xe;
                    break e;
                }
            default:
                return;
        }
        c(ep);
    }, n[34] = s, n[35] = c, n[36] = Ke, n[37] = Xe, n[38] = Ge, n[39] = Nt) : Nt = n[39];
    const sn = Nt;
    let un;
    n[40] !== c ? (un = (Bs, ua)=>{
        Bs.preventDefault(), Bs.stopPropagation(), c(ua);
    }, n[40] = c, n[41] = un) : un = n[41];
    const kt = un;
    let ot;
    if (n[42] !== s || n[43] !== re || n[44] !== je) {
        let Bs;
        n[46] !== s || n[47] !== re || n[48] !== je.length ? (Bs = (ua, Ql)=>{
            const ep = ua.endTime - ua.startTime, Rp = Ql === je.length - 1;
            let Wg = 0, gm = !1;
            const N_ = Rp ? s >= ua.startTime && s <= ua.endTime : s >= ua.startTime && s < ua.endTime;
            N_ && ep > 0 ? (Wg = (s - ua.startTime) / ep * 100, gm = !0) : s >= ua.endTime && (Wg = 100);
            let Vm = 0;
            return (Rp ? re >= ua.startTime && re <= ua.endTime : re >= ua.startTime && re < ua.endTime) && ep > 0 ? Vm = (re - ua.startTime) / ep * 100 : re >= ua.endTime && (Vm = 100), {
                segment: ua,
                isActive: N_,
                progressPercent: Wg,
                hasThumb: gm,
                hoverPercent: Vm
            };
        }, n[46] = s, n[47] = re, n[48] = je.length, n[49] = Bs) : Bs = n[49], ot = je.map(Bs), n[42] = s, n[43] = re, n[44] = je, n[45] = ot;
    } else ot = n[45];
    const ze = ot;
    let St;
    e: {
        for(let Bs = 0; Bs < je.length; Bs++){
            const ua = je[Bs];
            if (Bs === je.length - 1 ? re >= ua.startTime && re <= ua.endTime : re >= ua.startTime && re < ua.endTime) {
                St = ua.label.length > 0 ? ua.label : void 0;
                break e;
            }
        }
        St = void 0;
    }
    const ft = St;
    let Mt;
    n[50] !== je || n[51] !== Ke || n[52] !== Ge ? (Mt = (Bs)=>{
        X.current = Bs;
        const ua = q.current;
        if (ua === null) return !0;
        let Ql = !1;
        je.forEach((Rp, Wg)=>{
            const gm = Rp.endTime - Rp.startTime, bl = (Wg === je.length - 1 ? Bs >= Rp.startTime && Bs <= Rp.endTime : Bs >= Rp.startTime && Bs < Rp.endTime) && gm > 0;
            let Ru = 0;
            bl ? Ru = (Bs - Rp.startTime) / gm * 100 : Bs >= Rp.endTime && (Ru = 100);
            const Mg = $.current.get(Wg);
            Mg !== void 0 && (Mg.style.width = `${Ru}%`);
            const es = G.current.get(Wg);
            es !== void 0 && bl ? es.style.left = `${Ru}%` : bl !== (es !== void 0) && (Ql = !0);
        }), ua.setAttribute("aria-valuenow", String(Ke > 0 ? Math.max(0, Math.min(100, (Bs - Ge) / Ke * 100)) : 0));
        const ep = z.current?.firstChild;
        return ep != null && (ep.nodeValue = qCe(Bs)), !Ql;
    }, n[50] = je, n[51] = Ke, n[52] = Ge, n[53] = Mt) : Mt = n[53];
    const Bt = Mt;
    let Ot, Wt;
    n[54] !== s ? (Ot = ()=>{
        X.current = s;
    }, Wt = [
        s
    ], n[54] = s, n[55] = Ot, n[56] = Wt) : (Ot = n[55], Wt = n[56]), E0n(Ot, Wt);
    let nn, pn;
    n[57] !== A || n[58] !== Bt ? (nn = ()=>{
        if (A !== void 0) return A.current = Bt, ()=>{
            A.current = null;
        };
    }, pn = [
        A,
        Bt
    ], n[57] = A, n[58] = Bt, n[59] = nn, n[60] = pn) : (nn = n[59], pn = n[60]), E0n(nn, pn);
    let Yt;
    n[61] !== a ? (Yt = (Bs)=>{
        Bs.stopPropagation(), a();
    }, n[61] = a, n[62] = Yt) : Yt = n[62];
    const _n = Yt;
    let an;
    n[63] !== h ? (an = (Bs)=>{
        Bs.stopPropagation(), h?.();
    }, n[63] = h, n[64] = an) : an = n[64];
    const ln = an;
    let Mn;
    n[65] === Symbol.for("react.memo_cache_sentinel") ? (Mn = (Bs)=>{
        Bs.stopPropagation(), me(Rof);
    }, n[65] = Mn) : Mn = n[65];
    const Dn = Mn;
    let Ln;
    n[66] !== l ? (Ln = (Bs, ua)=>{
        Bs.stopPropagation(), l(ua), me(!1);
    }, n[66] = l, n[67] = Ln) : Ln = n[67];
    const ti = Ln;
    let fi;
    n[68] !== p ? (fi = (Bs)=>{
        Bs.stopPropagation(), p?.();
    }, n[68] = p, n[69] = fi) : fi = n[69];
    const Oi = fi;
    let xr, us;
    n[70] !== Kt || n[71] !== J || n[72] !== N ? (xr = ()=>{
        if (J) return N.addEventListener("mousemove", Kt), N.addEventListener("mouseup", Gt), ()=>{
            N.removeEventListener("mousemove", Kt), N.removeEventListener("mouseup", Gt);
        };
    }, us = [
        J,
        Kt,
        Gt,
        N
    ], n[70] = Kt, n[71] = J, n[72] = N, n[73] = xr, n[74] = us) : (xr = n[73], us = n[74]), E0n(xr, us);
    let Fr, Zn;
    n[75] !== N || n[76] !== _e ? (Fr = ()=>{
        if (!_e) return;
        const Bs = (ua)=>{
            K.current && !K.current.contains(ua.target) && me(!1);
        };
        return N.document.addEventListener("mousedown", Bs), ()=>{
            N.document.removeEventListener("mousedown", Bs);
        };
    }, Zn = [
        _e,
        N
    ], n[75] = N, n[76] = _e, n[77] = Fr, n[78] = Zn) : (Fr = n[77], Zn = n[78]), E0n(Fr, Zn);
    let _r, is;
    n[79] !== g ? (_r = ()=>{
        g || (me(!1), ht());
    }, is = [
        g,
        ht
    ], n[79] = g, n[80] = _r, n[81] = is) : (_r = n[80], is = n[81]), E0n(_r, is);
    let pr;
    n[82] !== ce || n[83] !== J || n[84] !== ee ? (pr = ()=>{
        if (!ee || J) return;
        const Bs = Z.current, ua = Y.current;
        if (!Bs || !ua) return;
        const Ql = Bs.offsetWidth / 2, ep = Math.max(Ql, ua.clientWidth - Ql);
        ye(Math.max(Ql, Math.min(ep, ce)));
    }, n[82] = ce, n[83] = J, n[84] = ee, n[85] = pr) : pr = n[85];
    let Ls;
    n[86] !== ft || n[87] !== re || n[88] !== ce || n[89] !== J || n[90] !== ee ? (Ls = [
        ee,
        J,
        ce,
        re,
        ft
    ], n[86] = ft, n[87] = re, n[88] = ce, n[89] = J, n[90] = ee, n[91] = Ls) : Ls = n[91], Aof(pr, Ls);
    let Br, ho, js, ec, ia, fr, cr, wr, vo, Qc, Ei, br, Hr, Po, ao, qo, Bo, Ns, $a, vr, tr, ur, Zo, Ui;
    if (n[92] !== s || n[93] !== r || n[94] !== Oi || n[95] !== st || n[96] !== Qe || n[97] !== Tt || n[98] !== kt || n[99] !== ln || n[100] !== _n || n[101] !== sn || n[102] !== ti || n[103] !== ft || n[104] !== le || n[105] !== re || n[106] !== J || n[107] !== ee || n[108] !== R || n[109] !== i || n[110] !== g || n[111] !== p || n[112] !== h || n[113] !== o || n[114] !== ze || n[115] !== Ce || n[116] !== _e || n[117] !== f || n[118] !== v || n[119] !== Ke || n[120] !== Ge) {
        Ui = Symbol.for("react.early_return_sentinel");
        e: {
            const Bs = fof(), ua = Nn([
                Bs.fullscreenRoot,
                g ? null : Bs.fullscreenRootHidden
            ]), Ql = Nn(Bs.fullscreenSpacer), ep = Nn(Bs.fullscreenTopScrim), Rp = Nn(Bs.fullscreenTopBar), Wg = Nn(Bs.fullscreenTopBarTrailing), gm = Nn(Bs.fullscreenTitle), N_ = Nn(Bs.fullscreenClose), Vm = Nn(Bs.fullscreenBar), bl = Nn(Bs.fullscreenBottom), Ru = Nn(Bs.fullscreenPlay), Mg = Nn(Bs.fullscreenPlayIcon), es = Nn(Bs.fullscreenTime), mo = Nn(Bs.fullscreenTimeCombined), Wa = Nn(Bs.fullscreenControlSpacer), ap = Nn(Ce ? Bs.fullscreenChapterTimeline : Bs.fullscreenSegmentsWrapper), ra = Nn([
                Bs.fullscreenSegments,
                J ? Bs.fullscreenSegmentsDragging : null
            ]), ms = Nn(Bs.fullscreenHoverPreview), Qa = Nn(Bs.fullscreenHoverPreviewTime), Ks = Nn(Bs.fullscreenHoverPreviewTitle), al = Nn(Bs.fullscreenSpeedDropdown), Sd = Nn(Bs.fullscreenSpeed), Zg = Nn(Bs.fullscreenSpeedMenu);
            if (!g) {
                Ui = zO("div", {
                    className: ua.className,
                    style: ua.style,
                    "aria-hidden": !0
                });
                break e;
            }
            const LS = f !== void 0 && f.length > 0 || v != null || p !== void 0, j0 = gue("div", {
                ref: Y,
                className: ap.className,
                style: ap.style,
                onMouseLeave: Dt,
                onMouseMove: Tt,
                children: [
                    ee && !J && gue("div", {
                        ref: Z,
                        className: ms.className,
                        style: {
                            ...ms.style,
                            left: le
                        },
                        "data-video-hover-preview": "",
                        children: [
                            zO("span", {
                                className: Qa.className,
                                style: Qa.style,
                                children: qCe(re)
                            }),
                            ft !== void 0 && zO("span", {
                                className: Ks.className,
                                style: Ks.style,
                                children: ft
                            })
                        ]
                    }),
                    zO("div", {
                        ref: q,
                        className: ra.className,
                        style: ra.style,
                        onMouseDown: Qe,
                        onClick: st,
                        onKeyDown: sn,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": 0,
                        "aria-valuemax": 100,
                        "aria-valuenow": Ke > 0 ? Math.max(0, Math.min(100, (s - Ge) / Ke * 100)) : 0,
                        "aria-label": "Video progress",
                        children: ze.map((l_, Zi)=>{
                            const { segment: Gn, isActive: Dr, progressPercent: rs, hasThumb: No, hoverPercent: Ur } = l_, El = Or({
                                rootClass: "ui-video-player__fullscreen-segment",
                                stylexStyles: Bs.fullscreenSegment,
                                style: {
                                    flexGrow: Gn.widthPercent
                                }
                            }), _c = Or({
                                rootClass: "ui-video-player__fullscreen-segment-label",
                                stylexStyles: [
                                    Bs.fullscreenSegmentLabel,
                                    Dr ? Bs.fullscreenSegmentLabelActive : null,
                                    J ? Bs.fullscreenSegmentLabelDragging : null
                                ]
                            }), cc = ee ? {
                                "--ui-video-player-fullscreen-track-bg": "rgba(255, 255, 255, 0.4)"
                            } : void 0, Yl = Or({
                                rootClass: "ui-video-player__fullscreen-segment-track",
                                stylexStyles: Bs.fullscreenSegmentTrack,
                                style: cc
                            }), Qd = Or({
                                rootClass: "ui-video-player__fullscreen-segment-hover-fill",
                                stylexStyles: Bs.fullscreenSegmentHoverFill,
                                style: {
                                    width: `${Ur}%`
                                }
                            }), rm = Or({
                                rootClass: "ui-video-player__fullscreen-segment-fill",
                                stylexStyles: Bs.fullscreenSegmentFill,
                                style: {
                                    width: `${rs}%`
                                }
                            }), dd = Or({
                                rootClass: "ui-video-player__fullscreen-thumb",
                                stylexStyles: [
                                    Bs.fullscreenThumb,
                                    ee || J ? Bs.fullscreenThumbActive : null
                                ],
                                style: {
                                    left: `${rs}%`
                                }
                            });
                            return gue("div", {
                                className: El.className,
                                style: El.style,
                                children: [
                                    Ce && Gn.label.length > 0 ? zO("button", {
                                        type: "button",
                                        "data-video-chapter-label": "",
                                        className: _c.className,
                                        style: _c.style,
                                        title: Gn.label,
                                        onClick: (sd)=>kt(sd, Gn.startTime),
                                        children: Gn.label
                                    }) : null,
                                    gue("div", {
                                        ref: (sd)=>{
                                            sd ? F.current.set(Zi, sd) : F.current.delete(Zi);
                                        },
                                        className: Yl.className,
                                        style: Yl.style,
                                        children: [
                                            ee && !J && Ur > 0 && zO("div", {
                                                className: Qd.className,
                                                style: Qd.style
                                            }),
                                            zO("div", {
                                                ref: (sd)=>{
                                                    sd ? $.current.set(Zi, sd) : $.current.delete(Zi);
                                                },
                                                className: rm.className,
                                                style: rm.style
                                            }),
                                            No && zO("div", {
                                                ref: (sd)=>{
                                                    sd ? G.current.set(Zi, sd) : G.current.delete(Zi);
                                                },
                                                className: dd.className,
                                                style: dd.style
                                            })
                                        ]
                                    })
                                ]
                            }, Gn.id);
                        })
                    })
                ]
            });
            vr = ua.className, tr = ua.style, ur = LS && zO("div", {
                className: ep.className,
                style: ep.style,
                onClick: Dof,
                onKeyDown: QOl,
                children: gue("div", {
                    className: Rp.className,
                    style: Rp.style,
                    children: [
                        f !== void 0 && f.length > 0 ? zO("span", {
                            className: gm.className,
                            style: gm.style,
                            title: f,
                            "data-video-title": !0,
                            children: f
                        }) : zO("span", {
                            "aria-hidden": !0
                        }),
                        gue("div", {
                            className: Wg.className,
                            style: Wg.style,
                            children: [
                                v,
                                p !== void 0 && zO("button", {
                                    type: "button",
                                    onClick: Oi,
                                    className: N_.className,
                                    style: N_.style,
                                    "aria-label": "Close fullscreen",
                                    "data-video-close": "",
                                    children: zO(PY, {
                                        name: "close",
                                        size: 16
                                    })
                                })
                            ]
                        })
                    ]
                })
            }), Zo = zO("div", {
                className: Ql.className,
                style: Ql.style,
                "aria-hidden": !0
            }), Hr = "toolbar", Po = "Video controls", ao = Vm.className, qo = Vm.style, Bo = Mof, Ns = QOl, $a = Ce ? j0 : null, fr = bl.className, cr = bl.style, wr = zO("button", {
                type: "button",
                onClick: _n,
                className: Ru.className,
                style: Ru.style,
                "aria-label": i ? "Pause" : "Play",
                children: i ? zO(PY, {
                    name: "debug-pause",
                    size: 16
                }) : zO("span", {
                    className: Mg.className,
                    style: Mg.style,
                    children: zO(PY, {
                        name: "play",
                        size: 16
                    })
                })
            }), vo = Ce ? gue("span", {
                ref: z,
                className: mo.className,
                style: mo.style,
                "data-video-time-combined": "",
                children: [
                    qCe(s),
                    " / ",
                    qCe(r)
                ]
            }) : zO("span", {
                ref: z,
                className: es.className,
                style: es.style,
                children: qCe(s)
            }), Qc = Ce ? null : j0, Ei = Ce ? zO("div", {
                className: Wa.className,
                style: Wa.style,
                "aria-hidden": !0,
                "data-video-control-spacer": ""
            }) : zO("span", {
                className: es.className,
                style: es.style,
                children: qCe(r)
            }), br = h !== void 0 && zO("button", {
                type: "button",
                onClick: ln,
                className: Ru.className,
                style: Ru.style,
                "aria-label": R ? "Unmute" : "Mute",
                children: zO(PY, {
                    name: R ? "mute" : "unmute",
                    size: 16
                })
            }), Br = K, ho = al.className, js = al.style, ec = gue("button", {
                type: "button",
                onClick: Dn,
                className: Sd.className,
                style: Sd.style,
                "aria-label": `Playback speed: ${o}x`,
                "aria-haspopup": "menu",
                "aria-expanded": _e,
                title: `${o}x`,
                children: [
                    o,
                    "x"
                ]
            }), ia = _e && zO("div", {
                role: "menu",
                "aria-label": "Playback speed",
                className: Zg.className,
                style: Zg.style,
                "data-video-speed-menu": "",
                children: KOl.map((l_)=>{
                    const Zi = Nn([
                        Bs.fullscreenSpeedOption,
                        l_ === o ? Bs.fullscreenSpeedOptionActive : null
                    ]);
                    return gue("button", {
                        type: "button",
                        role: "menuitem",
                        className: Zi.className,
                        style: Zi.style,
                        onClick: (Gn)=>ti(Gn, l_),
                        children: [
                            l_,
                            "x"
                        ]
                    }, l_);
                })
            });
        }
        n[92] = s, n[93] = r, n[94] = Oi, n[95] = st, n[96] = Qe, n[97] = Tt, n[98] = kt, n[99] = ln, n[100] = _n, n[101] = sn, n[102] = ti, n[103] = ft, n[104] = le, n[105] = re, n[106] = J, n[107] = ee, n[108] = R, n[109] = i, n[110] = g, n[111] = p, n[112] = h, n[113] = o, n[114] = ze, n[115] = Ce, n[116] = _e, n[117] = f, n[118] = v, n[119] = Ke, n[120] = Ge, n[121] = Br, n[122] = ho, n[123] = js, n[124] = ec, n[125] = ia, n[126] = fr, n[127] = cr, n[128] = wr, n[129] = vo, n[130] = Qc, n[131] = Ei, n[132] = br, n[133] = Hr, n[134] = Po, n[135] = ao, n[136] = qo, n[137] = Bo, n[138] = Ns, n[139] = $a, n[140] = vr, n[141] = tr, n[142] = ur, n[143] = Zo, n[144] = Ui;
    } else Br = n[121], ho = n[122], js = n[123], ec = n[124], ia = n[125], fr = n[126], cr = n[127], wr = n[128], vo = n[129], Qc = n[130], Ei = n[131], br = n[132], Hr = n[133], Po = n[134], ao = n[135], qo = n[136], Bo = n[137], Ns = n[138], $a = n[139], vr = n[140], tr = n[141], ur = n[142], Zo = n[143], Ui = n[144];
    if (Ui !== Symbol.for("react.early_return_sentinel")) return Ui;
    let As;
    n[145] !== Br || n[146] !== ho || n[147] !== js || n[148] !== ec || n[149] !== ia ? (As = gue("div", {
        ref: Br,
        className: ho,
        style: js,
        children: [
            ec,
            ia
        ]
    }), n[145] = Br, n[146] = ho, n[147] = js, n[148] = ec, n[149] = ia, n[150] = As) : As = n[150];
    let Da;
    n[151] !== fr || n[152] !== cr || n[153] !== wr || n[154] !== vo || n[155] !== Qc || n[156] !== Ei || n[157] !== br || n[158] !== As ? (Da = gue("div", {
        className: fr,
        style: cr,
        children: [
            wr,
            vo,
            Qc,
            Ei,
            br,
            As
        ]
    }), n[151] = fr, n[152] = cr, n[153] = wr, n[154] = vo, n[155] = Qc, n[156] = Ei, n[157] = br, n[158] = As, n[159] = Da) : Da = n[159];
    let ma;
    n[160] !== Hr || n[161] !== Po || n[162] !== ao || n[163] !== qo || n[164] !== Bo || n[165] !== Ns || n[166] !== $a || n[167] !== Da ? (ma = gue("div", {
        role: Hr,
        "aria-label": Po,
        className: ao,
        style: qo,
        onClick: Bo,
        onKeyDown: Ns,
        children: [
            $a,
            Da
        ]
    }), n[160] = Hr, n[161] = Po, n[162] = ao, n[163] = qo, n[164] = Bo, n[165] = Ns, n[166] = $a, n[167] = Da, n[168] = ma) : ma = n[168];
    let ou;
    return n[169] !== vr || n[170] !== tr || n[171] !== ur || n[172] !== Zo || n[173] !== ma ? (ou = gue("div", {
        className: vr,
        style: tr,
        children: [
            ur,
            Zo,
            ma
        ]
    }), n[169] = vr, n[170] = tr, n[171] = ur, n[172] = Zo, n[173] = ma, n[174] = ou) : ou = n[174], ou;
});

}
