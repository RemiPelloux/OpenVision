import { ME } from "./Ycg.js";
import { gs, yt } from "./codicons.js";
import { eD } from "./scrollableDiv.js";
import { vo } from "./solidContext.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { oT } from "./utils_16.js";
import { at } from "./web.js";
import { Er, Le, lo, wt } from "./yBp.js";
import { Bp, Ee, Su, Wt, e2, pi, xn } from "./ze.js";
var Tgl, cIg, uIg, Egl;
export { Egl, Tgl, cIg, uIg };
var __wakaru_dIg_initialized = false;
export function dIg() {
if (__wakaru_dIg_initialized) return;
__wakaru_dIg_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), at(), pi(), gs(), ta(), oT(), vo(), eD(), Tgl = wt("<span>"), cIg = wt("<div><div class=input-box-code-selection-collapse-toggle>"), uIg = wt("<a>"), Egl = (t, e, n, i)=>{
    const [r, s] = Wt(!0);
    return (()=>{
        var o = cIg(), a = o.firstChild;
        return o.style.setProperty("white-space", "pre"), Le(o, Ee(ME, {
            scrollingDirection: "vertical",
            style: {
                width: "100%",
                height: "100%",
                "box-sizing": "border-box"
            },
            innerContainerStyle: {
                padding: "0.6rem 1rem",
                overflow: "hidden",
                width: "calc(100% - 2rem)"
            },
            get children () {
                return Ee(Su, {
                    get each () {
                        return t.doc?.pages;
                    },
                    children: (l)=>(()=>{
                            var c = uIg();
                            return c.addEventListener("click", ()=>{
                                e.openerService.open(l.url);
                            }), c.style.setProperty("color", "var(--vscode-textLink-foreground)"), c.style.setProperty("overflow", "hidden"), c.style.setProperty("text-overflow", "ellipsis"), c.style.setProperty("white-space", "nowrap"), c.style.setProperty("display", "block"), c.style.setProperty("width", "100%"), Le(c, ()=>l.title), xn((u)=>{
                                var d = l.url, h = l.url;
                                return d !== u.e && lo(c, "href", u.e = d), h !== u.t && lo(c, "title", u.t = h), u;
                            }, {
                                e: void 0,
                                t: void 0
                            }), c;
                        })()
                });
            }
        }), a), a.addEventListener("click", ()=>{
            s(!r());
        }), Le(a, Ee(e2, {
            get children () {
                return [
                    Ee(Bp, {
                        get when () {
                            return r();
                        },
                        get children () {
                            var l = Tgl();
                            return xn(()=>Er(l, Gn.asClassName(yt.chevronDown))), l;
                        }
                    }),
                    Ee(Bp, {
                        get when () {
                            return !r();
                        },
                        get children () {
                            var l = Tgl();
                            return xn(()=>Er(l, Gn.asClassName(yt.chevronUp))), l;
                        }
                    })
                ];
            }
        })), xn((l)=>(l = r() ? `${n}px` : `${i}px`) != null ? o.style.setProperty("height", l) : o.style.removeProperty("height")), o;
    })();
};

}
