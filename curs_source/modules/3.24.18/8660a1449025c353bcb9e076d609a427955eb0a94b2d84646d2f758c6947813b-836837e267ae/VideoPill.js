import { gs, yt } from "./codicons.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { Er, Le, lo, wt } from "./yBp.js";
import { Ee, Ut, Wt, pi, xn } from "./ze.js";
var NZg, LZg, OZg, FZg;
export { FZg, LZg, NZg, OZg };
var __wakaru_w5k_initialized = false;
export function w5k() {
if (__wakaru_w5k_initialized) return;
__wakaru_w5k_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), pi(), gs(), ta(), NZg = wt("<div>"), LZg = wt('<div class="context-pill context-pill-video"><span class=video-pill-play-overlay aria-hidden=true><svg class=video-pill-play-icon fill=currentColor viewBox="0 0 24 24"><path d="M8 5v14l11-7z">'), OZg = wt("<video class=video-pill-preview muted playsinline preload=metadata>"), FZg = (t)=>{
    const [e, n] = Wt(!1);
    return (()=>{
        var i = LZg(), r = i.firstChild;
        return i.addEventListener("mouseleave", ()=>{
            n(!1);
        }), i.addEventListener("mouseenter", ()=>{
            n(!0);
        }), i.addEventListener("click", (s)=>{
            t.disabled || (s.stopPropagation(), t.onClick?.(s));
        }), Le(i, Ee(Ut, {
            get when () {
                return t.url;
            },
            children: (s)=>(()=>{
                    var o = OZg();
                    return xn(()=>lo(o, "src", s())), o;
                })()
        }), r), Le(i, Ee(Ut, {
            get when () {
                return e() && t.onRemove;
            },
            get children () {
                var s = NZg();
                return s.addEventListener("click", (o)=>{
                    o.stopPropagation(), t.onRemove?.();
                }), xn(()=>Er(s, `video-pill-close-button ${Gn.asClassName(yt.close)}`)), s;
            }
        }), null), xn((s)=>{
            var o = t.id, a = !!t.disabled;
            return o !== s.e && lo(i, "id", s.e = o), a !== s.t && i.classList.toggle("context-pill-disabled", s.t = a), s;
        }, {
            e: void 0,
            t: void 0
        }), i;
    })();
};

}
