import { OIa, ml1 } from "./index_183.js";
import { FIa, fl1 } from "./index_184.js";
import { VZo, v_e } from "./index_41.js";
import { E } from "./tslib.es6.js";
import { useRef as BIa } from "./react-runtime/react/esm-index-production.js";
import { jsx as gvp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import hvp from "./react-runtime/react/esm-index-production.js";
import { createPortal as mvp } from "./react-runtime/react-dom/esm-index-production.js";
import { useEffect as pvp } from "./react-runtime/react/esm-index-production.js";
var Lvi, vl1;
export { Lvi, vl1 };
var __wakaru_fvp_initialized = false;
export function fvp() {
if (__wakaru_fvp_initialized) return;
__wakaru_fvp_initialized = true;
E(), ml1(), v_e(), fl1(), Lvi = hvp.forwardRef(({ pluginKey: t = "bubbleMenu", editor: e, updateDelay: n, resizeDelay: i, appendTo: r, shouldShow: s = null, getReferencedVirtualElement: o, options: a, children: l, ...c }, u)=>{
    const d = BIa(document.createElement("div"));
    typeof u == "function" ? u(d.current) : u && (u.current = d.current);
    const { editor: h } = VZo(), p = e || h, g = {
        updateDelay: n,
        resizeDelay: i,
        appendTo: r,
        pluginKey: t,
        shouldShow: s,
        getReferencedVirtualElement: o,
        options: a
    }, f = BIa(g);
    return f.current = g, pvp(()=>{
        if (p?.isDestroyed) return;
        if (!p) {
            console.warn("BubbleMenu component is not rendered inside of an editor component or does not have editor prop.");
            return;
        }
        const _ = d.current;
        _.style.visibility = "hidden", _.style.position = "absolute";
        const b = OIa({
            ...f.current,
            editor: p,
            element: _
        });
        p.registerPlugin(b);
        const y = f.current.pluginKey;
        return ()=>{
            p.unregisterPlugin(y), window.requestAnimationFrame(()=>{
                _.parentNode && _.parentNode.removeChild(_);
            });
        };
    }, [
        p
    ]), mvp(gvp("div", {
        ...c,
        children: l
    }), d.current);
}), vl1 = hvp.forwardRef(({ pluginKey: t = "floatingMenu", editor: e, appendTo: n, shouldShow: i = null, options: r, children: s, ...o }, a)=>{
    const l = BIa(document.createElement("div"));
    typeof a == "function" ? a(l.current) : a && (a.current = l.current);
    const { editor: c } = VZo();
    return pvp(()=>{
        const u = l.current;
        if (u.style.visibility = "hidden", u.style.position = "absolute", e?.isDestroyed || c?.isDestroyed) return;
        const d = e || c;
        if (!d) {
            console.warn("FloatingMenu component is not rendered inside of an editor component or does not have editor prop.");
            return;
        }
        const h = FIa({
            editor: d,
            element: u,
            pluginKey: t,
            appendTo: n,
            shouldShow: i,
            options: r
        });
        return d.registerPlugin(h), ()=>{
            d.unregisterPlugin(t), window.requestAnimationFrame(()=>{
                u.parentNode && u.parentNode.removeChild(u);
            });
        };
    }, [
        e,
        c,
        n,
        t,
        i,
        r
    ]), mvp(gvp("div", {
        ...o,
        children: s
    }), l.current);
});

}
