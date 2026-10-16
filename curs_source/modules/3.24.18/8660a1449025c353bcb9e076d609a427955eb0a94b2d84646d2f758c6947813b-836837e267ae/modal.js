import { CRn } from "./Ycg.js";
import { gs, yt } from "./codicons.js";
import { YUk } from "./modal.css";
import { vo } from "./solidContext.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { Ea, Er, Le, wt, xbe } from "./yBp.js";
import { Ee, On, Ut, Xc, Zy, pi, xn } from "./ze.js";
var Haf, Waf, WMe;
export { Haf, WMe, Waf };
var __wakaru_Jlt_initialized = false;
export function Jlt() {
if (__wakaru_Jlt_initialized) return;
__wakaru_Jlt_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), at(), at(), gs(), ta(), YUk(), pi(), vo(), Haf = wt("<div>"), Waf = wt("<div class=cursor-modal-backing><div><div class=cursor-modal-interior>"), WMe = (t)=>{
    const e = CRn();
    return Xc(()=>{
        const n = (i)=>{
            i.key === "Escape" && t.closeModal();
        };
        e.window.addEventListener("keydown", n), On(()=>{
            e.window.removeEventListener("keydown", n);
        });
    }), (()=>{
        var n = Waf(), i = n.firstChild, r = i.firstChild;
        return n.addEventListener("click", (s)=>{
            s.stopPropagation(), !t.disableClickOff && t.closeModal();
        }), i.addEventListener("click", (s)=>{
            s.stopPropagation();
        }), xbe(i, Zy({
            get class () {
                return `cursor-overlay-div cursor-modal-container ${t.center ? "cursor-center" : ""}`;
            }
        }, ()=>t.extras, {
            get style () {
                return {
                    ...t.extras?.style,
                    ...t.balanceSides ? {
                        "padding-right": "24px"
                    } : {}
                };
            }
        }), !1, !0), Le(r, Ee(Ut, {
            get when () {
                return !t.disableX;
            },
            get children () {
                var s = Haf();
                return s.addEventListener("click", ()=>{
                    t.closeModal();
                }), xn((o)=>{
                    var a = [
                        "cursor-modal-dismiss",
                        Gn.asClassName(yt.x)
                    ].join(" "), l = t.xOpacity;
                    return a !== o.e && Er(s, o.e = a), l !== o.t && ((o.t = l) != null ? s.style.setProperty("opacity", l) : s.style.removeProperty("opacity")), o;
                }, {
                    e: void 0,
                    t: void 0
                }), s;
            }
        }), null), Le(r, ()=>t.children, null), xn((s)=>{
            var o = `rgba(0, 0, 0, ${t.backOpacity ?? .2})`, a = t.interiorStyle;
            return o !== s.e && ((s.e = o) != null ? n.style.setProperty("background-color", o) : n.style.removeProperty("background-color")), s.t = Ea(r, a, s.t), s;
        }, {
            e: void 0,
            t: void 0
        }), n;
    })();
};

}
