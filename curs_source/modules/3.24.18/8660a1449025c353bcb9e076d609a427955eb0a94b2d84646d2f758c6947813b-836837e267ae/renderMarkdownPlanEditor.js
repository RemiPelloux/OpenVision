import { fEw } from "./BA.js";
import { vEw } from "./PlanEditorView.js";
import { u0 } from "./Ycg.js";
import { $T } from "./solid_2.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { Ee } from "./ze.js";
var FFf;
export { FFf };
var __wakaru__Ew_initialized = false;
export function _Ew() {
if (__wakaru__Ew_initialized) return;
__wakaru__Ew_initialized = true;
"use strict";
E(), at(), $T(), vEw(), FFf = (t, e, n, i)=>{
    let r, s = !1, o, a, l = null;
    const c = (g)=>{
        a = g;
    }, u = (g)=>{
        l = g;
    }, d = (g)=>{
        a && a.setScrollPositionNow({
            scrollTop: g.scrollTop,
            scrollLeft: g.scrollLeft
        }), g.cursor && l && l.setCursorPosition(g.cursor.from, g.cursor.to);
    }, h = ()=>{
        s = !0, o && (d(o), o = void 0);
    };
    return {
        ...u0(()=>Ee(fEw, {
                input: n,
                delegate: i,
                onReloadReady: (g)=>{
                    r = g;
                },
                onContentReady: h,
                onScrollableReady: c,
                onEditorReady: u
            }), t, e),
        reload: async ()=>{
            r && await r();
        },
        getViewState: ()=>{
            if (!a) return;
            const g = a.getCurrentScrollPosition(), f = {
                scrollTop: g.scrollTop,
                scrollLeft: g.scrollLeft
            }, _ = l?.getCursorPosition();
            return _ && (f.cursor = _), f;
        },
        setViewState: (g)=>{
            s ? d(g) : o = g;
        }
    };
};

}
