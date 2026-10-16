import { QNs, dqf } from "./index_177.js";
import { JNs, pqf } from "./index_178.js";
import { Ife, Kus } from "./index_36.js";
import { x } from "./tslib.es6.js";
import { useEffect as Lru } from "./react-runtime/react/esm-index-production.js";
import { createPortal as Nru } from "./react-runtime/react-dom/esm-index-production.js";
import { jsx as Oru } from "./react-runtime/react/esm-jsx-runtime-production.js";
import Pru from "./react-runtime/react/esm-index-production.js";
import { useRef as e2s } from "./react-runtime/react/esm-index-production.js";
var nxn, mqf;
export { mqf, nxn };
var __wakaru_Fru_initialized = false;
export function Fru() {
if (__wakaru_Fru_initialized) return;
__wakaru_Fru_initialized = true;
x(), dqf(), Ife(), pqf(), nxn = Pru.forwardRef(({ pluginKey: e = "bubbleMenu", editor: t, updateDelay: n, resizeDelay: i, appendTo: r, shouldShow: s = null, getReferencedVirtualElement: o, options: a, children: c, ...l }, u)=>{
    const h = e2s(document.createElement("div"));
    typeof u == "function" ? u(h.current) : u && (u.current = h.current);
    const { editor: p } = Kus(), g = t || p, f = {
        updateDelay: n,
        resizeDelay: i,
        appendTo: r,
        pluginKey: e,
        shouldShow: s,
        getReferencedVirtualElement: o,
        options: a
    }, v = e2s(f);
    return v.current = f, Lru(()=>{
        if (g?.isDestroyed) return;
        if (!g) {
            console.warn("BubbleMenu component is not rendered inside of an editor component or does not have editor prop.");
            return;
        }
        const b = h.current;
        b.style.visibility = "hidden", b.style.position = "absolute";
        const y = QNs({
            ...v.current,
            editor: g,
            element: b
        });
        g.registerPlugin(y);
        const T = v.current.pluginKey;
        return ()=>{
            g.unregisterPlugin(T), window.requestAnimationFrame(()=>{
                b.parentNode && b.parentNode.removeChild(b);
            });
        };
    }, [
        g
    ]), Nru(Oru("div", {
        ...l,
        children: c
    }), h.current);
}), mqf = Pru.forwardRef(({ pluginKey: e = "floatingMenu", editor: t, appendTo: n, shouldShow: i = null, options: r, children: s, ...o }, a)=>{
    const c = e2s(document.createElement("div"));
    typeof a == "function" ? a(c.current) : a && (a.current = c.current);
    const { editor: l } = Kus();
    return Lru(()=>{
        const u = c.current;
        if (u.style.visibility = "hidden", u.style.position = "absolute", t?.isDestroyed || l?.isDestroyed) return;
        const h = t || l;
        if (!h) {
            console.warn("FloatingMenu component is not rendered inside of an editor component or does not have editor prop.");
            return;
        }
        const p = JNs({
            editor: h,
            element: u,
            pluginKey: e,
            appendTo: n,
            shouldShow: i,
            options: r
        });
        return h.registerPlugin(p), ()=>{
            h.unregisterPlugin(e), window.requestAnimationFrame(()=>{
                u.parentNode && u.parentNode.removeChild(u);
            });
        };
    }, [
        t,
        l,
        n,
        e,
        i,
        r
    ]), Nru(Oru("div", {
        ...o,
        children: s
    }), c.current);
});

}
