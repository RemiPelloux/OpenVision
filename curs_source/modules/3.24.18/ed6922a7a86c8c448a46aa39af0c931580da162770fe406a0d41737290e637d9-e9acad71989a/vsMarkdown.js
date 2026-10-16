import { $i, Pl, fs, oa, yt } from "./A3u.js";
import { g5, u2 } from "./markdownRenderer_2.js";
import { An, Jt, Rn, Ut, qn } from "./qIc.js";
import { Vs } from "./solidContext.js";
import { x } from "./tslib.es6.js";
import { ir } from "./useKeyboardShortcut.js";
import { Bl_ } from "./vsMarkdown.css";
import { $e } from "./web.js";
var YFh, hRo;
export { YFh, hRo };
var __wakaru_XFh_initialized = false;
export function XFh() {
if (__wakaru_XFh_initialized) return;
__wakaru_XFh_initialized = true;
"use strict";
x(), $e(), $e(), $e(), $e(), $e(), $e(), qn(), g5(), Vs(), Bl_(), YFh = yt("<div>"), hRo = (e)=>{
    const t = ir();
    let n, i = null;
    const [r, s] = Ut(!1), o = ()=>{
        if (!n) return;
        s(!0), i && (i.dispose(), i = null), n.replaceChildren();
        const a = typeof e.content == "string" ? {
            value: e.content,
            supportThemeIcons: e.supportThemeIcons ?? !0,
            supportHtml: e.supportHtml ?? !1,
            isTrusted: e.isTrusted ?? !1
        } : e.content, l = t.instantiationService.createInstance(u2, e.rendererOptions ?? {}).render(a);
        i = l, n.appendChild(l.element), e.onRenderComplete?.(l.element), s(!1);
    };
    return Jt(()=>{
        e.content, e.rendererOptions, e.isTrusted, e.supportThemeIcons, e.supportHtml, o();
    }), An(()=>{
        i && (i.dispose(), i = null);
    }), (()=>{
        var a = YFh(), c = n;
        return typeof c == "function" ? Pl(c, a) : n = a, Rn((l)=>{
            var u = `vs-markdown-container ${e.class ?? ""}`, h = e.style, p = r();
            return u !== l.e && $i(a, l.e = u), l.t = oa(a, h, l.t), p !== l.a && fs(a, "data-rendering", l.a = p), l;
        }, {
            e: void 0,
            t: void 0,
            a: void 0
        }), a;
    })();
};

}
