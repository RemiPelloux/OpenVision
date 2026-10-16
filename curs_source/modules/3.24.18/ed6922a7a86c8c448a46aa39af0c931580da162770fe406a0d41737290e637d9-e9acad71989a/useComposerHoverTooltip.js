import { Tb, wl } from "./hoverWidget.js";
import { An, Ut, p5 } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { ir } from "./useKeyboardShortcut.js";
import { rB } from "./useVSHoverTooltip.js";
function iB(e) {
    const t = typeof e == "number" ? {
        delay: e
    } : e, n = t?.delay, [i, r] = Ut(void 0), s = ir(), o = p5();
    let a;
    const c = (u, h)=>{
        a !== void 0 && clearTimeout(a);
        const p = ()=>{
            const f = s.workbenchEnvironmentService.isGlass && u.container === void 0 ? {
                ...u,
                container: s.portalElement
            } : u, v = o.showInstantHover(f);
            v && r(v), a = void 0;
        }, g = h ?? n;
        g && g > 0 ? a = setTimeout(p, g) : p();
    }, l = ()=>{
        a !== void 0 && clearTimeout(a), i() && (i()?.dispose(), o.hideHover()), r(void 0);
    };
    return An(()=>{
        t?.shouldSkipCleanup?.() || l();
    }), {
        showHover: c,
        hideHover: l,
        hoverWidget: i
    };
}
var pte;
export { iB, pte };
var __wakaru_Ioe_initialized = false;
export function Ioe() {
if (__wakaru_Ioe_initialized) return;
__wakaru_Ioe_initialized = true;
"use strict";
x(), Tb(), rB(), pte = (e = {})=>{
    const { showHover: t, hideHover: n } = iB(e.delay), i = e.additionalClasses ?? [
        "chat-hover-tooltip"
    ];
    return {
        showHover: (s, o, a = e.position ?? wl.ABOVE, c)=>{
            t({
                content: o,
                target: s.currentTarget,
                appearance: {
                    showPointer: !e.noPointer,
                    compact: !0
                },
                position: {
                    hoverPosition: a
                },
                container: e.useContainer ? s.currentTarget : void 0,
                additionalClasses: c?.additionalClasses ?? i,
                ...c
            });
        },
        hideHover: n
    };
};

}
