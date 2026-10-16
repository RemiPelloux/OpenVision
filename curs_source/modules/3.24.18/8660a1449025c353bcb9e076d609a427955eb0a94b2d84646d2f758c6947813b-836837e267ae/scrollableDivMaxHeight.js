import { Qe, Vn } from "./Iwo.js";
import { Am, cs, jp } from "./Sol.js";
import { ME, e1 } from "./Ycg.js";
import { SR } from "./async_3.js";
import { eD } from "./scrollableDiv.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { Ea, Le, wt } from "./yBp.js";
import { Cn, Ee, On, Wt, Zy, ks, pi, xn } from "./ze.js";
var oTg, Qxi, Fml, ilt;
export { Fml, Qxi, ilt, oTg };
var __wakaru_$Rn_initialized = false;
export function $Rn() {
if (__wakaru_$Rn_initialized) return;
__wakaru_$Rn_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), Am(), pi(), SR(), Qe(), eD(), oTg = wt("<div>"), Qxi = cs(null), Fml = cs(-1), ilt = (t)=>{
    const e = jp(), [n, i] = Wt(e.get(Qxi));
    On(e.sub(Qxi, ()=>i(e.get(Qxi))));
    const [r, s] = Wt(null), o = ()=>{
        const l = r()?.getBoundingClientRect()?.height ?? 0;
        l !== e.get(Fml) && (e.set(Fml, l), e.set(Qxi, l));
    };
    return Cn(()=>{
        if (t.useResizeObserver) {
            const a = r();
            if (a) {
                let l = !1;
                const c = new Vn, u = ()=>{
                    l || (c.value = e1(()=>{
                        l || o();
                    }));
                }, d = new ResizeObserver(()=>{
                    u();
                });
                d.observe(a), ks(()=>o()), u(), On(()=>{
                    l = !0, d.disconnect(), c.dispose();
                });
            }
        } else {
            const a = t.remeasureTrigger, l = setTimeout(o);
            On(()=>{
                clearTimeout(l);
            });
        }
    }), (()=>{
        var a = oTg();
        return Le(a, Ee(ME, Zy(t, {
            get style () {
                return {
                    height: "100%",
                    ...t.style,
                    ...t.containerStyle
                };
            },
            get setScrollableRef () {
                return t.setScrollableRef;
            },
            get children () {
                return t.children(s);
            }
        }))), xn((l)=>Ea(a, {
                height: t.maxHeight !== void 0 ? n() === null ? void 0 : Math.min(t.maxHeight, n()) + "px" : "100%",
                "max-height": t.maxHeight !== void 0 ? t.maxHeight + "px" : void 0,
                overflow: "hidden",
                ...t.style
            }, l)), a;
    })();
};

}
