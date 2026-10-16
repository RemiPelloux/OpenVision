import { Am, cs, jp } from "./Sol.js";
import { gs, yt } from "./codicons.js";
import { mk } from "./gallerySection.js";
import { Iw } from "./hoverWidget.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { Jat } from "./useLargeHoverTooltip.js";
import { O6 } from "./useVSHoverTooltip.js";
import { at } from "./web.js";
import { Er, Le, wt } from "./yBp.js";
import { On, Wt, pi, xn } from "./ze.js";
var uZv, dZv, hZv, pZv, mZv, gZv, fZv, vZv, f6n, Tdc, _Zv, bZv;
export { Tdc, _Zv, bZv, dZv, f6n, fZv, gZv, hZv, mZv, pZv, uZv, vZv };
var __wakaru_euC_initialized = false;
export function euC() {
if (__wakaru_euC_initialized) return;
__wakaru_euC_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), Am(), pi(), Iw(), gs(), ta(), Jat(), O6(), mk(), uZv = wt("<div class=thinking-tooltip-description><div>JSX Tooltip Example</div><div>This tooltip is rendered using SolidJS"), dZv = wt("<div class=thinking-tooltip-description><div>Interactive JSX Tooltip</div><div>Counter: </div><button>Increment"), hZv = wt('<div><div class=thinking-tooltip-description>Custom Styled JSX Tooltip</div><div class="continuous-gradient-container gradient-high"><span></span><span>Interactive components</span></div><div>Tooltips with rich content'), pZv = wt("<div><h3>Standard Tooltips (useVSHoverTooltip)</h3><p>Basic tooltips with different positions and behaviors:</p><div><div>Hover Below</div><div>Hover Above</div><div>Hover Left</div><div>Hover Right</div><div>Sticky Tooltip (Click to dismiss)</div><div>Count Hovers"), mZv = wt("<div><h3>Large Tooltips (useLargeHoverTooltip)</h3><p>Enhanced tooltips with custom styling and tracking:</p><div><div>Basic Large Tooltip</div><div>HTML Content Tooltip</div><div>Rich Content Tooltip</div><div>Model Tracking Demo"), gZv = wt("<div><h3>JSX Tooltips (showLargeJSXHover)</h3><p>Tooltips with SolidJS components:</p><div><div>Simple JSX Tooltip</div><div>Interactive JSX Tooltip</div><div>Styled JSX Tooltip</div><div>Dynamic JSX Content"), fZv = wt("<div class=thinking-tooltip-description><div><strong>Current Hover Models:</strong></div><div>Active: </div><div>(This tooltip updates when you hover other examples)"), vZv = ()=>(()=>{
        var t = uZv(), e = t.firstChild;
        return e.style.setProperty("font-weight", "bold"), e.style.setProperty("margin-bottom", "4px"), t;
    })(), f6n = cs(0), Tdc = cs(0), _Zv = ()=>{
    const t = jp(), [e, n] = Wt(t.get(f6n));
    return On(t.sub(f6n, ()=>n(t.get(f6n)))), (()=>{
        var i = dZv(), r = i.firstChild, s = r.nextSibling, o = s.firstChild, a = s.nextSibling;
        return r.style.setProperty("font-weight", "bold"), r.style.setProperty("margin-bottom", "6px"), s.style.setProperty("margin-bottom", "8px"), Le(s, e, null), a.addEventListener("click", ()=>t.set(f6n, t.get(f6n) + 1)), a.style.setProperty("background-color", "var(--vscode-button-background)"), a.style.setProperty("color", "var(--vscode-button-foreground)"), a.style.setProperty("border", "none"), a.style.setProperty("padding", "4px 8px"), a.style.setProperty("border-radius", "4px"), a.style.setProperty("cursor", "pointer"), a.style.setProperty("font-size", "12px"), i;
    })();
}, bZv = ()=>(()=>{
        var t = hZv(), e = t.firstChild, n = e.nextSibling, i = n.firstChild, r = n.nextSibling;
        return t.style.setProperty("padding", "2px"), n.style.setProperty("margin-top", "4px"), r.style.setProperty("margin-top", "6px"), r.style.setProperty("font-size", "10px"), r.style.setProperty("opacity", "0.8"), xn(()=>Er(i, Gn.asClassName(yt.brain))), t;
    })();

}
