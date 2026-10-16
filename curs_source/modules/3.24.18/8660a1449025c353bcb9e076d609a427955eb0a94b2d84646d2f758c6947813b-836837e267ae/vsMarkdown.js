import { Gr } from "./Ycg.js";
import { AY, Coe } from "./markdownRenderer_2.js";
import { vo } from "./solidContext.js";
import { E } from "./tslib.es6.js";
import { u2k } from "./vsMarkdown.css";
import { at } from "./web.js";
import { Ea, Er, lo, wt, zu } from "./yBp.js";
import { Cn, On, Wt, pi, xn } from "./ze.js";
var ZIg, Ugl;
export { Ugl, ZIg };
var __wakaru_QIg_initialized = false;
export function QIg() {
if (__wakaru_QIg_initialized) return;
__wakaru_QIg_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), pi(), Coe(), vo(), u2k(), ZIg = wt("<div>"), Ugl = (t)=>{
    const e = Gr();
    let n, i = null;
    const [r, s] = Wt(!1), o = ()=>{
        if (!n) return;
        s(!0), i && (i.dispose(), i = null), n.replaceChildren();
        const a = typeof t.content == "string" ? {
            value: t.content,
            supportThemeIcons: t.supportThemeIcons ?? !0,
            supportHtml: t.supportHtml ?? !1,
            isTrusted: t.isTrusted ?? !1
        } : t.content, c = e.instantiationService.createInstance(AY, t.rendererOptions ?? {}).render(a);
        i = c, n.appendChild(c.element), t.onRenderComplete?.(c.element), s(!1);
    };
    return Cn(()=>{
        t.content, t.rendererOptions, t.isTrusted, t.supportThemeIcons, t.supportHtml, o();
    }), On(()=>{
        i && (i.dispose(), i = null);
    }), (()=>{
        var a = ZIg(), l = n;
        return typeof l == "function" ? zu(l, a) : n = a, xn((c)=>{
            var u = `vs-markdown-container ${t.class ?? ""}`, d = t.style, h = r();
            return u !== c.e && Er(a, c.e = u), c.t = Ea(a, d, c.t), h !== c.a && lo(a, "data-rendering", c.a = h), c;
        }, {
            e: void 0,
            t: void 0,
            a: void 0
        }), a;
    })();
};

}
