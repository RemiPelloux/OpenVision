import { Mpa, vOr } from "./FullscreenMediaControls.js";
import { $1t, Apa, NFe } from "./FullscreenVideoPlayer.types.js";
import { gn } from "./LYd.js";
import { Dpa, Npa } from "./ipa.js";
import { Ghi, bpa, ypa } from "./media-scrim.stylex.js";
import { Va } from "./stylex.js";
import { E } from "./tslib.es6.js";
import { Opa } from "./video-mute-preference.js";
import { useMemo as Fpa } from "./react-runtime/react/esm-index-production.js";
import { jsxs as LFh } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { createPortal as SyS } from "./react-runtime/react-dom/esm-index-production.js";
import { useState as W1t } from "./react-runtime/react/esm-index-production.js";
import { jsx as _Or } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useRef as bOr } from "./react-runtime/react/esm-index-production.js";
import { useEffect as pSn } from "./react-runtime/react/esm-index-production.js";
import { useCallback as tJ } from "./react-runtime/react/esm-index-production.js";
import { memo as yyS } from "./react-runtime/react/esm-index-production.js";
var OFh, FFh, yOr;
export { FFh, OFh, yOr };
var __wakaru_BFh_initialized = false;
export function BFh() {
if (__wakaru_BFh_initialized) return;
__wakaru_BFh_initialized = true;
"use strict";
E(), Va(), ypa(), Mpa(), Opa(), Apa(), OFh = 120, FFh = {
    container: {
        k1xSpc: "ui-1lliihq",
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
        kkrTdU: "ui-1ypdohk",
        kLWn49: "ui-14ju556",
        $$css: !0
    }
}, yOr = yyS(function({ isOpen: e, onClose: n, videoUrl: i, thumbnailUrl: r, title: s, initialTime: o = 0, initialPlaybackSpeed: a = 1, chapters: l, trimStartSeconds: c, trimEndSeconds: u, portalElement: d, loop: h = !0, cardRect: p, videoAspectRatio: g, topBarActions: f, onContextMenu: _, forceChromeVisible: b = !1, suppressEscapeClose: y = !1 }) {
    const S = d ?? document.body, k = S.ownerDocument, C = k.defaultView ?? window, T = bOr(null), [I, A] = W1t(0), P = c !== void 0 && Number.isFinite(c) && c > 0 ? c : 0, M = u !== void 0 && Number.isFinite(u) && u >= 0 && I > 0 && Number.isFinite(I), O = M ? I - u : I > 0 ? I : void 0, N = I > 0 && O !== void 0 && P < O, U = N ? P : 0, j = N && M ? O : void 0, [$, H] = W1t(!1), [G, q] = W1t(!1), [K, V] = W1t(Dpa), [Y, J] = W1t(a), [Q, te] = W1t(!1), [ee, re] = W1t("idle"), [ie, oe] = W1t(0), se = bOr(null), le = bOr(0), ce = bOr(void 0), ae = tJ((Ve)=>{
        le.current = Ve, oe(Ve);
    }, []), de = tJ((Ve)=>{
        (!(se.current?.(Ve) ?? !1) || Math.abs(Ve - le.current) >= 1) && ae(Ve);
    }, [
        ae
    ]);
    pSn(()=>{
        if (e) {
            re("expanding");
            let Ve, Xe;
            Ve = C.requestAnimationFrame(()=>{
                Xe = C.requestAnimationFrame(()=>{
                    te(!0);
                });
            });
            const lt = C.setTimeout(()=>{
                re("expanded");
            }, NFe);
            return ()=>{
                C.clearTimeout(lt), Ve !== void 0 && C.cancelAnimationFrame(Ve), Xe !== void 0 && C.cancelAnimationFrame(Xe);
            };
        } else te(!1), re("idle");
    }, [
        e,
        C
    ]);
    const he = p ? NFe : OFh, ge = tJ(()=>{
        re("collapsing"), te(!1), ce.current !== void 0 && C.clearTimeout(ce.current), ce.current = C.setTimeout(()=>{
            ce.current = void 0, re("idle"), n();
        }, he);
    }, [
        n,
        C,
        he
    ]);
    pSn(()=>()=>{
            ce.current !== void 0 && C.clearTimeout(ce.current);
        }, [
        C
    ]);
    const pe = tJ(()=>{
        if (T.current) {
            const Ve = T.current.duration;
            A(Ve), T.current.playbackRate = Y;
            const Xe = c !== void 0 && Number.isFinite(c) && c > 0 ? c : 0, lt = u !== void 0 && Number.isFinite(u) && u >= 0 && Number.isFinite(Ve) && Ve > 0 ? Ve - u : void 0, He = lt ?? Ve, gt = Number.isFinite(Ve) && Ve > 0 && Xe < He, ht = gt ? Xe : 0, Ae = gt && lt !== void 0 ? lt : void 0, ot = Math.min(Math.max(o, ht), Ae ?? Number.POSITIVE_INFINITY);
            ot > 0 && (T.current.currentTime = ot), ae(ot);
            const Be = T.current;
            Be.play().catch((Ue)=>{
                if (typeof Ue == "object" && Ue !== null && "name" in Ue && Ue.name === "NotAllowedError" && !Be.muted) {
                    Be.muted = !0, V(!0), Be.play().catch(()=>q(!Be.paused));
                    return;
                }
                q(!Be.paused);
            });
        }
    }, [
        o,
        c,
        u,
        Y,
        ae
    ]), ve = tJ((Ve)=>{
        if (!Ve.paused && Ve.currentTime < U) return Ve.currentTime = U, U;
        if (j !== void 0 && Ve.currentTime >= j) {
            if (!Ve.paused) {
                if (h) return Ve.currentTime = U, U;
                Ve.pause(), Ve.currentTime = j;
            }
            return j;
        }
        return Ve.currentTime;
    }, [
        U,
        j,
        h
    ]), fe = tJ(()=>{
        T.current && de(ve(T.current));
    }, [
        ve,
        de
    ]);
    pSn(()=>{
        if (!G) return;
        let Ve;
        const Xe = ()=>{
            const lt = T.current;
            lt && de(ve(lt)), Ve = C.requestAnimationFrame(Xe);
        };
        return Ve = C.requestAnimationFrame(Xe), ()=>{
            Ve !== void 0 && C.cancelAnimationFrame(Ve);
        };
    }, [
        G,
        C,
        ve,
        de
    ]);
    const Te = tJ(()=>{
        T.current && ae(T.current.currentTime), q(!0);
    }, [
        ae
    ]), _e = tJ(()=>{
        T.current && ae(T.current.currentTime), q(!1);
    }, [
        ae
    ]), Ce = tJ(()=>{
        if (!T.current) return;
        const Ve = T.current;
        Ve.paused ? ((Ve.ended || Ve.currentTime < U || j !== void 0 && Ve.currentTime >= j) && (Ve.currentTime = U), Ve.play()) : Ve.pause();
    }, [
        U,
        j
    ]), Se = tJ((Ve)=>{
        if (T.current) {
            const Xe = Math.min(Math.max(Ve, U), j ?? Number.POSITIVE_INFINITY);
            T.current.currentTime = Xe, ae(Xe);
        }
    }, [
        U,
        j,
        ae
    ]), Pe = tJ(()=>{
        Npa(!K), V(!K);
    }, [
        K
    ]), we = tJ((Ve)=>{
        J(Ve), T.current && (T.current.playbackRate = Ve);
    }, []);
    pSn(()=>{
        T.current && (T.current.playbackRate = Y);
    }, [
        Y
    ]), pSn(()=>{
        if (!e && ee === "idle") return;
        const Ve = (Xe)=>{
            if (Xe.key === "Escape") {
                if (y) return;
                Xe.preventDefault(), ge();
            }
        };
        return C.addEventListener("keydown", Ve), ()=>C.removeEventListener("keydown", Ve);
    }, [
        e,
        ee,
        ge,
        C,
        y
    ]), pSn(()=>(e || ee !== "idle" ? k.body.style.overflow = "hidden" : k.body.style.overflow = "", ()=>{
            k.body.style.overflow = "";
        }), [
        e,
        ee,
        k
    ]);
    const Ie = tJ((Ve)=>{
        Ve.target === Ve.currentTarget && ge();
    }, [
        ge
    ]), Me = tJ((Ve)=>{
        (Ve.key === "Enter" || Ve.key === " ") && (Ve.preventDefault(), Ve.target === Ve.currentTarget && ge());
    }, [
        ge
    ]), De = tJ((Ve)=>{
        (Ve.key === "Enter" || Ve.key === " ") && (Ve.preventDefault(), Ce());
    }, [
        Ce
    ]), Ne = Fpa(()=>{
        if (p && !Q) return {
            position: "fixed",
            top: p.top,
            left: p.left,
            width: p.width,
            height: p.height,
            borderRadius: "8px",
            transition: `all ${NFe}ms ${$1t}`,
            zIndex: 9999,
            overflow: "hidden"
        };
        const Ve = 40, Xe = C.innerWidth - Ve * 2, lt = C.innerHeight - Ve * 2, He = g ?? 16 / 9;
        let gt = Xe, ht = Xe / He;
        ht > lt && (ht = lt, gt = lt * He);
        const Ae = (C.innerWidth - gt) / 2;
        return {
            position: "fixed",
            top: (C.innerHeight - ht) / 2,
            left: Ae,
            width: gt,
            height: ht,
            borderRadius: "12px",
            opacity: p || Q ? 1 : 0,
            transition: `all ${NFe}ms ${$1t}, opacity ${he}ms ${$1t}`,
            zIndex: 9999,
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
        };
    }, [
        p,
        Q,
        g,
        C,
        he
    ]), be = ee === "expanded" && ($ || p == null || b), je = tJ(()=>H(!0), []), $e = tJ(()=>H(!1), []), Je = tJ((Ve)=>{
        Ve.stopPropagation(), Ce();
    }, [
        Ce
    ]), Ge = Fpa(()=>({
            position: "fixed",
            inset: 0,
            width: "100%",
            height: "100%",
            margin: 0,
            padding: 0,
            border: 0,
            cursor: "pointer",
            zIndex: 9998,
            opacity: Q ? 1 : 0,
            transition: `opacity ${ee === "collapsing" ? he : NFe}ms ${$1t}`
        }), [
        Q,
        ee,
        he
    ]), xe = Fpa(()=>({
            opacity: Q ? 1 : 0,
            transform: Q ? "scale(1)" : "scale(0.8)",
            transition: `opacity ${NFe * .6}ms ${$1t} ${Q ? NFe * .4 : 0}ms, transform ${NFe * .6}ms ${$1t} ${Q ? NFe * .4 : 0}ms`
        }), [
        Q
    ]), Oe = gn(FFh.container, bpa), ct = gn(Ghi), Ye = {
        className: "ui-10l6tqk ui-10a8y8t"
    };
    return !e && ee === "idle" ? null : SyS(LFh("div", {
        role: "dialog",
        "aria-modal": "true",
        "aria-label": s ?? "Fullscreen video",
        children: [
            _Or("button", {
                type: "button",
                className: ct.className,
                style: Ge,
                onClick: Ie,
                onKeyDown: Me,
                "aria-label": "Close fullscreen video"
            }),
            LFh("button", {
                type: "button",
                className: Oe.className,
                style: {
                    ...Oe.style,
                    ...Ne
                },
                onMouseEnter: je,
                onMouseLeave: $e,
                onClick: Je,
                onContextMenu: _,
                onKeyDown: De,
                "aria-label": s ?? "Video player",
                children: [
                    _Or("video", {
                        ref: T,
                        src: i,
                        className: "ui-1lliihq ui-h8yej3 ui-5yr21d",
                        loop: h,
                        muted: K,
                        playsInline: !0,
                        onLoadedMetadata: pe,
                        onTimeUpdate: fe,
                        onPlay: Te,
                        onPause: _e,
                        poster: r
                    }),
                    _Or("div", {
                        className: Ye.className,
                        style: {
                            ...Ye.style,
                            ...xe
                        },
                        children: _Or(vOr, {
                            isPlaying: G,
                            duration: I,
                            currentTime: ie,
                            playbackSpeed: Y,
                            onPlayPause: Ce,
                            onSeek: Se,
                            onSpeedChange: we,
                            isMuted: K,
                            onToggleMute: Pe,
                            onClose: ge,
                            isVisible: be,
                            title: s,
                            topBarActions: f,
                            chapters: l,
                            trimStartSeconds: U > 0 ? U : void 0,
                            trimEndSeconds: j,
                            ownerWindow: C,
                            frameWriterRef: se
                        })
                    })
                ]
            })
        ]
    }), S);
});

}
