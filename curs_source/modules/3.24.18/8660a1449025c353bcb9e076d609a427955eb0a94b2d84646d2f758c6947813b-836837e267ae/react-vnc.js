import { FgC, igC } from "./QQv.js";
import { E } from "./tslib.es6.js";
import { useRef as ABi } from "./react-runtime/react/esm-index-production.js";
import { forwardRef as JmC } from "./react-runtime/react/esm-index-production.js";
import { jsx as QmC } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useState as egC } from "./react-runtime/react/esm-index-production.js";
import { useEffect as ngC } from "./react-runtime/react/esm-index-production.js";
import { useImperativeHandle as tgC } from "./react-runtime/react/esm-index-production.js";
var Ohc, S6n, Q$, k6n, AF, RBi, vPt, Fhc, Bhc, Uhc, jhc, Yx, CEe, $hc, Hhc, Whc, Ghc, qhc, zhc, gk, Ddt, Vhc, Khc, Ben, Yhc, Xhc, Zhc, Qhc, Jhc, epc, tpc, npc, ipc, Uen, rpc, spc, _Pt, bPt, w6n, jen, C6n, PBi, opc, apc, lpc, cpc, upc, dpc, hpc, ppc, Je_, et_, tt_, nt_;
export { $hc, AF, Ben, Bhc, C6n, CEe, Ddt, Fhc, Ghc, Hhc, Je_, Jhc, Khc, Ohc, PBi, Q$, Qhc, RBi, S6n, Uen, Uhc, Vhc, Whc, Xhc, Yhc, Yx, Zhc, _Pt, apc, bPt, cpc, dpc, epc, et_, gk, hpc, ipc, jen, jhc, k6n, lpc, npc, nt_, opc, ppc, qhc, rpc, spc, tpc, tt_, upc, vPt, w6n, zhc };
var __wakaru_BgC_initialized = false;
export function BgC() {
if (__wakaru_BgC_initialized) return;
__wakaru_BgC_initialized = true;
E(), Ohc = {}, S6n = {}, Q$ = {}, k6n = {}, AF = {}, RBi = {}, vPt = {}, Fhc = {}, Bhc = {}, Uhc = {}, jhc = {}, Yx = {}, CEe = {}, $hc = {}, Hhc = {}, Whc = {}, Ghc = {}, qhc = {}, zhc = {}, gk = {}, Ddt = {}, Vhc = {}, Khc = {}, Ben = {}, Yhc = {}, Xhc = {}, Zhc = {}, Qhc = {}, Jhc = {}, epc = {}, tpc = {}, npc = {}, ipc = {}, Uen = {}, rpc = {}, spc = {}, _Pt = {}, bPt = {}, w6n = {}, jen = {}, C6n = {}, PBi = {}, opc = {}, apc = {}, lpc = {}, cpc = {}, upc = {}, dpc = {}, hpc = {}, ppc = {}, Je_ = FgC(), et_ = igC(Je_), tt_ = (t, e)=>{
    const n = ABi(null), i = ABi(t.autoConnect ?? !0), r = ABi([]), s = ABi({}), o = ABi(null), [a, l] = egC(!0), { url: c, websocket: u, style: d, className: h, viewOnly: p, rfbOptions: g, focusOnClick: f, clipViewport: _, dragViewport: b, scaleViewport: y, resizeSession: S, showDotCursor: k, background: C, qualityLevel: T, compressionLevel: I, autoConnect: A = !0, retryDuration: P = 3e3, debug: M = !1, onConnect: O, onDisconnect: N, onCredentialsRequired: U, onSecurityFailure: j, onClipboard: $, onBell: H, onDesktopName: G, onCapabilities: q, onClippingViewport: K } = t, V = {
        log: (...Ce)=>{
            M && console.log(...Ce);
        },
        info: (...Ce)=>{
            M && console.info(...Ce);
        },
        error: (...Ce)=>{
            M && console.error(...Ce);
        }
    }, Y = ()=>n.current, J = (Ce)=>{
        n.current = Ce;
    }, Q = ()=>i.current, te = (Ce)=>{
        i.current = Ce;
    }, ee = (Ce)=>{
        if (O) {
            O(Ce), l(!1);
            return;
        }
        V.info("Connected to remote VNC."), l(!1);
    }, re = (Ce)=>{
        if (N) {
            N(Ce), l(!0);
            return;
        }
        Q() && !u ? (V.info(`Unexpectedly disconnected from remote VNC, retrying in ${P / 1e3} seconds.`), r.current.push(setTimeout(le, P))) : V.info("Disconnected from remote VNC."), l(!0);
    }, ie = (Ce)=>{
        var Se, Pe, we;
        const Ie = Y();
        if (U) {
            U(Ce);
            return;
        }
        const Me = ((Se = g?.credentials) == null ? void 0 : Se.username) ?? "", De = ((Pe = g?.credentials) == null ? void 0 : Pe.password) ?? "", Ne = ((we = g?.credentials) == null ? void 0 : we.target) ?? "";
        Ie?.sendCredentials({
            password: De,
            username: Me,
            target: Ne
        });
    }, oe = (Ce)=>{
        if (G) {
            G(Ce);
            return;
        }
        V.info(`Desktop name is ${Ce.detail.name}`);
    }, se = ()=>{
        const Ce = Y();
        try {
            if (!Ce) return;
            r.current.forEach(clearTimeout), Object.keys(s.current).forEach((Se)=>{
                s.current[Se] && (Ce.removeEventListener(Se, s.current[Se]), s.current[Se] = void 0);
            }), Ce.disconnect(), J(null), te(!1), re(new CustomEvent("disconnect", {
                detail: {
                    clean: !0
                }
            }));
        } catch (Se) {
            V.error(Se), J(null), te(!1);
        }
    }, le = ()=>{
        try {
            if (i && n && se(), !o.current) return;
            if (!c && !u) {
                V.error("Either url or websocket must be provided");
                return;
            }
            o.current.replaceChildren();
            const Ce = new et_(o.current, u || c, g);
            Ce.viewOnly = p ?? !1, Ce.focusOnClick = f ?? !1, Ce.clipViewport = _ ?? !1, Ce.dragViewport = b ?? !1, Ce.resizeSession = S ?? !1, Ce.scaleViewport = y ?? !1, Ce.showDotCursor = k ?? !1, Ce.background = C ?? "", Ce.qualityLevel = T ?? 6, Ce.compressionLevel = I ?? 2, J(Ce), s.current.connect = ee, s.current.disconnect = re, s.current.credentialsrequired = ie, s.current.securityfailure = j, s.current.clipboard = $, s.current.bell = H, s.current.desktopname = oe, s.current.capabilities = q, s.current.clippingviewport = K, Object.keys(s.current).forEach((Se)=>{
                s.current[Se] && Ce.addEventListener(Se, s.current[Se]);
            }), te(!0);
        } catch (Ce) {
            V.error(Ce);
        }
    }, ce = (Ce)=>{
        const Se = Y(), Pe = {
            username: Ce?.username ?? "",
            password: Ce?.password ?? "",
            target: Ce?.target ?? ""
        };
        Se?.sendCredentials(Pe);
    }, ae = (Ce, Se, Pe)=>{
        const we = Y();
        we?.sendKey(Ce, Se, Pe);
    }, de = ()=>{
        const Ce = Y();
        Ce?.sendCtrlAltDel();
    }, he = ()=>{
        const Ce = Y();
        Ce?.focus();
    }, ge = ()=>{
        const Ce = Y();
        Ce?.blur();
    }, pe = ()=>{
        const Ce = Y();
        Ce?.machineShutdown();
    }, ve = ()=>{
        const Ce = Y();
        Ce?.machineReboot();
    }, fe = ()=>{
        const Ce = Y();
        Ce?.machineReset();
    }, Te = (Ce)=>{
        const Se = Y();
        Se?.clipboardPasteFrom(Ce);
    };
    tgC(e, ()=>({
            connect: le,
            disconnect: se,
            connected: i.current,
            sendCredentials: ce,
            sendKey: ae,
            sendCtrlAltDel: de,
            focus: he,
            blur: ge,
            machineShutdown: pe,
            machineReboot: ve,
            machineReset: fe,
            clipboardPaste: Te,
            rfb: n.current,
            loading: a,
            eventListeners: s.current
        })), ngC(()=>(A && le(), se), []);
    const _e = ()=>{
        const Ce = Y();
        Ce && Ce.focus();
    };
    return QmC("div", {
        style: d,
        className: h,
        ref: o,
        onMouseEnter: ()=>{
            document.activeElement && document.activeElement instanceof HTMLElement && document.activeElement.blur(), _e();
        },
        onMouseLeave: ()=>{
            const Ce = Y();
            Ce && Ce.blur();
        }
    });
}, nt_ = JmC(tt_);

}
