import { Pof, eFl } from "./FullscreenMediaControls.js";
import { YOl, bvt, wDe } from "./FullscreenVideoPlayer.types.js";
import { Nof, Oof } from "./f0s.js";
import { $Ol, HOl, P0s } from "./media-scrim.stylex.js";
import { Nn } from "./qIc.js";
import { Oc } from "./stylex.js";
import { x } from "./tslib.es6.js";
import { iFl } from "./video-mute-preference.js";
import { createPortal as Bof } from "./react-runtime/react-dom/esm-index-production.js";
import { memo as Fof } from "./react-runtime/react/esm-index-production.js";
import { useCallback as OW } from "./react-runtime/react/esm-index-production.js";
import { useRef as QRi } from "./react-runtime/react/esm-index-production.js";
import { useMemo as V0s } from "./react-runtime/react/esm-index-production.js";
import { jsx as ZRi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useEffect as e6t } from "./react-runtime/react/esm-index-production.js";
import { useState as pXe } from "./react-runtime/react/esm-index-production.js";
import { jsxs as rFl } from "./react-runtime/react/esm-jsx-runtime-production.js";
var sFl, oFl, j0s;
export { j0s, oFl, sFl };
var __wakaru_aFl_initialized = false;
export function aFl() {
if (__wakaru_aFl_initialized) return;
__wakaru_aFl_initialized = true;
"use strict";
x(), Oc(), HOl(), Pof(), iFl(), YOl(), sFl = 120, oFl = {
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
}, j0s = Fof(function({ isOpen: t, onClose: n, videoUrl: i, thumbnailUrl: r, title: s, initialTime: o = 0, initialPlaybackSpeed: a = 1, chapters: c, trimStartSeconds: l, trimEndSeconds: u, portalElement: h, loop: p = !0, cardRect: g, videoAspectRatio: f, topBarActions: v, onContextMenu: b, forceChromeVisible: y = !1, suppressEscapeClose: T = !1 }) {
    const E = h ?? document.body, A = E.ownerDocument, R = A.defaultView ?? window, D = QRi(null), [P, N] = pXe(0), O = l !== void 0 && Number.isFinite(l) && l > 0 ? l : 0, F = u !== void 0 && Number.isFinite(u) && u >= 0 && P > 0 && Number.isFinite(P), H = F ? P - u : P > 0 ? P : void 0, $ = P > 0 && H !== void 0 && O < H, W = $ ? O : 0, G = $ && F ? H : void 0, [q, z] = pXe(!1), [X, Y] = pXe(!1), [Z, K] = pXe(Nof), [J, ne] = pXe(a), [ee, se] = pXe(!1), [re, ue] = pXe("idle"), [ce, de] = pXe(0), le = QRi(null), ye = QRi(0), _e = QRi(void 0), me = OW((Gt)=>{
        ye.current = Gt, de(Gt);
    }, []), Ce = OW((Gt)=>{
        (!(le.current?.(Gt) ?? !1) || Math.abs(Gt - ye.current) >= 1) && me(Gt);
    }, [
        me
    ]);
    e6t(()=>{
        if (t) {
            ue("expanding");
            let Gt, Nt;
            Gt = R.requestAnimationFrame(()=>{
                Nt = R.requestAnimationFrame(()=>{
                    se(!0);
                });
            });
            const sn = R.setTimeout(()=>{
                ue("expanded");
            }, wDe);
            return ()=>{
                R.clearTimeout(sn), Gt !== void 0 && R.cancelAnimationFrame(Gt), Nt !== void 0 && R.cancelAnimationFrame(Nt);
            };
        } else se(!1), ue("idle");
    }, [
        t,
        R
    ]);
    const xe = g ? wDe : sFl, Le = OW(()=>{
        ue("collapsing"), se(!1), _e.current !== void 0 && R.clearTimeout(_e.current), _e.current = R.setTimeout(()=>{
            _e.current = void 0, ue("idle"), n();
        }, xe);
    }, [
        n,
        R,
        xe
    ]);
    e6t(()=>()=>{
            _e.current !== void 0 && R.clearTimeout(_e.current);
        }, [
        R
    ]);
    const Be = OW(()=>{
        if (D.current) {
            const Gt = D.current.duration;
            N(Gt), D.current.playbackRate = J;
            const Nt = l !== void 0 && Number.isFinite(l) && l > 0 ? l : 0, sn = u !== void 0 && Number.isFinite(u) && u >= 0 && Number.isFinite(Gt) && Gt > 0 ? Gt - u : void 0, un = sn ?? Gt, kt = Number.isFinite(Gt) && Gt > 0 && Nt < un, ot = kt ? Nt : 0, ze = kt && sn !== void 0 ? sn : void 0, St = Math.min(Math.max(o, ot), ze ?? Number.POSITIVE_INFINITY);
            St > 0 && (D.current.currentTime = St), me(St);
            const ft = D.current;
            ft.play().catch((Mt)=>{
                if (typeof Mt == "object" && Mt !== null && "name" in Mt && Mt.name === "NotAllowedError" && !ft.muted) {
                    ft.muted = !0, K(!0), ft.play().catch(()=>Y(!ft.paused));
                    return;
                }
                Y(!ft.paused);
            });
        }
    }, [
        o,
        l,
        u,
        J,
        me
    ]), je = OW((Gt)=>{
        if (!Gt.paused && Gt.currentTime < W) return Gt.currentTime = W, W;
        if (G !== void 0 && Gt.currentTime >= G) {
            if (!Gt.paused) {
                if (p) return Gt.currentTime = W, W;
                Gt.pause(), Gt.currentTime = G;
            }
            return G;
        }
        return Gt.currentTime;
    }, [
        W,
        G,
        p
    ]), Ge = OW(()=>{
        D.current && Ce(je(D.current));
    }, [
        je,
        Ce
    ]);
    e6t(()=>{
        if (!X) return;
        let Gt;
        const Nt = ()=>{
            const sn = D.current;
            sn && Ce(je(sn)), Gt = R.requestAnimationFrame(Nt);
        };
        return Gt = R.requestAnimationFrame(Nt), ()=>{
            Gt !== void 0 && R.cancelAnimationFrame(Gt);
        };
    }, [
        X,
        R,
        je,
        Ce
    ]);
    const Xe = OW(()=>{
        D.current && me(D.current.currentTime), Y(!0);
    }, [
        me
    ]), Ke = OW(()=>{
        D.current && me(D.current.currentTime), Y(!1);
    }, [
        me
    ]), et = OW(()=>{
        if (!D.current) return;
        const Gt = D.current;
        Gt.paused ? ((Gt.ended || Gt.currentTime < W || G !== void 0 && Gt.currentTime >= G) && (Gt.currentTime = W), Gt.play()) : Gt.pause();
    }, [
        W,
        G
    ]), We = OW((Gt)=>{
        if (D.current) {
            const Nt = Math.min(Math.max(Gt, W), G ?? Number.POSITIVE_INFINITY);
            D.current.currentTime = Nt, me(Nt);
        }
    }, [
        W,
        G,
        me
    ]), it = OW(()=>{
        Oof(!Z), K(!Z);
    }, [
        Z
    ]), Ne = OW((Gt)=>{
        ne(Gt), D.current && (D.current.playbackRate = Gt);
    }, []);
    e6t(()=>{
        D.current && (D.current.playbackRate = J);
    }, [
        J
    ]), e6t(()=>{
        if (!t && re === "idle") return;
        const Gt = (Nt)=>{
            if (Nt.key === "Escape") {
                if (T) return;
                Nt.preventDefault(), Le();
            }
        };
        return R.addEventListener("keydown", Gt), ()=>R.removeEventListener("keydown", Gt);
    }, [
        t,
        re,
        Le,
        R,
        T
    ]), e6t(()=>(t || re !== "idle" ? A.body.style.overflow = "hidden" : A.body.style.overflow = "", ()=>{
            A.body.style.overflow = "";
        }), [
        t,
        re,
        A
    ]);
    const Fe = OW((Gt)=>{
        Gt.target === Gt.currentTarget && Le();
    }, [
        Le
    ]), Qe = OW((Gt)=>{
        (Gt.key === "Enter" || Gt.key === " ") && (Gt.preventDefault(), Gt.target === Gt.currentTarget && Le());
    }, [
        Le
    ]), tt = OW((Gt)=>{
        (Gt.key === "Enter" || Gt.key === " ") && (Gt.preventDefault(), et());
    }, [
        et
    ]), st = V0s(()=>{
        if (g && !ee) return {
            position: "fixed",
            top: g.top,
            left: g.left,
            width: g.width,
            height: g.height,
            borderRadius: "8px",
            transition: `all ${wDe}ms ${bvt}`,
            zIndex: 9999,
            overflow: "hidden"
        };
        const Gt = 40, Nt = R.innerWidth - Gt * 2, sn = R.innerHeight - Gt * 2, un = f ?? 16 / 9;
        let kt = Nt, ot = Nt / un;
        ot > sn && (ot = sn, kt = sn * un);
        const ze = (R.innerWidth - kt) / 2;
        return {
            position: "fixed",
            top: (R.innerHeight - ot) / 2,
            left: ze,
            width: kt,
            height: ot,
            borderRadius: "12px",
            opacity: g || ee ? 1 : 0,
            transition: `all ${wDe}ms ${bvt}, opacity ${xe}ms ${bvt}`,
            zIndex: 9999,
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
        };
    }, [
        g,
        ee,
        f,
        R,
        xe
    ]), vt = re === "expanded" && (q || g == null || y), ht = OW(()=>z(!0), []), ut = OW(()=>z(!1), []), Dt = OW((Gt)=>{
        Gt.stopPropagation(), et();
    }, [
        et
    ]), lt = V0s(()=>({
            position: "fixed",
            inset: 0,
            width: "100%",
            height: "100%",
            margin: 0,
            padding: 0,
            border: 0,
            cursor: "pointer",
            zIndex: 9998,
            opacity: ee ? 1 : 0,
            transition: `opacity ${re === "collapsing" ? xe : wDe}ms ${bvt}`
        }), [
        ee,
        re,
        xe
    ]), Tt = V0s(()=>({
            opacity: ee ? 1 : 0,
            transform: ee ? "scale(1)" : "scale(0.8)",
            transition: `opacity ${wDe * .6}ms ${bvt} ${ee ? wDe * .4 : 0}ms, transform ${wDe * .6}ms ${bvt} ${ee ? wDe * .4 : 0}ms`
        }), [
        ee
    ]), ct = Nn(oFl.container, $Ol), Kt = Nn(P0s), Rt = {
        className: "ui-10l6tqk ui-10a8y8t"
    };
    return !t && re === "idle" ? null : Bof(rFl("div", {
        role: "dialog",
        "aria-modal": "true",
        "aria-label": s ?? "Fullscreen video",
        children: [
            ZRi("button", {
                type: "button",
                className: Kt.className,
                style: lt,
                onClick: Fe,
                onKeyDown: Qe,
                "aria-label": "Close fullscreen video"
            }),
            rFl("button", {
                type: "button",
                className: ct.className,
                style: {
                    ...ct.style,
                    ...st
                },
                onMouseEnter: ht,
                onMouseLeave: ut,
                onClick: Dt,
                onContextMenu: b,
                onKeyDown: tt,
                "aria-label": s ?? "Video player",
                children: [
                    ZRi("video", {
                        ref: D,
                        src: i,
                        className: "ui-1lliihq ui-h8yej3 ui-5yr21d",
                        loop: p,
                        muted: Z,
                        playsInline: !0,
                        onLoadedMetadata: Be,
                        onTimeUpdate: Ge,
                        onPlay: Xe,
                        onPause: Ke,
                        poster: r
                    }),
                    ZRi("div", {
                        className: Rt.className,
                        style: {
                            ...Rt.style,
                            ...Tt
                        },
                        children: ZRi(eFl, {
                            isPlaying: X,
                            duration: P,
                            currentTime: ce,
                            playbackSpeed: J,
                            onPlayPause: et,
                            onSeek: We,
                            onSpeedChange: Ne,
                            isMuted: Z,
                            onToggleMute: it,
                            onClose: Le,
                            isVisible: vt,
                            title: s,
                            topBarActions: v,
                            chapters: c,
                            trimStartSeconds: W > 0 ? W : void 0,
                            trimEndSeconds: G,
                            ownerWindow: R,
                            frameWriterRef: le
                        })
                    })
                ]
            })
        ]
    }), E);
});

}
