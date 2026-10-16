import { CRn, Gxk, Vxk } from "./Ycg.js";
import { zxk } from "./loadingIndicators.css";
import { vo } from "./solidContext.js";
import { E } from "./tslib.es6.js";
import { qxk } from "./useIsVisible.js";
import { at, zr } from "./web.js";
import { Ea, Er, Le, wt, zu } from "./yBp.js";
import { Cn, Ee, On, Ut, Wt, pi, xn } from "./ze.js";
var WRn, rlt, Wml;
export { WRn, Wml, rlt };
var __wakaru_Sus_initialized = false;
export function Sus() {
if (__wakaru_Sus_initialized) return;
__wakaru_Sus_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), at(), at(), pi(), pi(), vo(), qxk(), zxk(), WRn = wt("<span>"), rlt = (t)=>{
    const [e, n] = Wt(1), i = CRn();
    return Cn(()=>{
        if (t.show === !1) return;
        n(1);
        const r = i.window.setInterval(()=>{
            n((s)=>s === 3 ? 0 : s + 1);
        }, t.speed === "slow" ? 350 : 175);
        On(()=>{
            i.window.clearInterval(r);
        });
    }), (()=>{
        var r = WRn();
        return Le(r, Ee(Ut, {
            get when () {
                return t.show !== !1;
            },
            get fallback () {
                return "\xA0";
            },
            get children () {
                return [
                    zr(()=>".".repeat(e())),
                    Ee(Ut, {
                        get when () {
                            return e() === 0;
                        },
                        children: "\xA0"
                    })
                ];
            }
        })), xn((s)=>Ea(r, {
                "user-select": "text",
                ...t.style
            }, s)), r;
    })();
}, Wml = (t)=>{
    const e = ()=>t.speed === "slow" ? "slow" : "", [n, i] = Gxk({
        rootMargin: "0px"
    }), r = Vxk();
    return (()=>{
        var s = WRn();
        return zu(i, s), Le(s, Ee(Ut, {
            get when () {
                return t.show !== !1;
            },
            get fallback () {
                return "\xA0";
            },
            get children () {
                return [
                    (()=>{
                        var o = WRn();
                        return xn(()=>Er(o, `loading-dot ${e()}`)), o;
                    })(),
                    (()=>{
                        var o = WRn();
                        return xn(()=>Er(o, `loading-dot ${e()}`)), o;
                    })(),
                    (()=>{
                        var o = WRn();
                        return xn(()=>Er(o, `loading-dot ${e()}`)), o;
                    })()
                ];
            }
        })), xn((o)=>{
            var a = `loading-indicator-v3 ${n() ? "" : "loading-offscreen"} ${r() ? "loading-doc-hidden" : ""}`, l = t.style;
            return a !== o.e && Er(s, o.e = a), o.t = Ea(s, l, o.t), o;
        }, {
            e: void 0,
            t: void 0
        }), s;
    })();
};

}
