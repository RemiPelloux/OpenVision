import { Yfe } from "./DSs.js";
import { hh } from "./attach.js";
import { Muu, OFi, qtv, uuu, ztv } from "./f0s.js";
import { M0 } from "./index_18.js";
import { iY } from "./index_28.js";
import { duu } from "./link-context-menu.js";
import { AW, A_, Nn, Or, bS, cy, rb, zS } from "./qIc.js";
import { Kft } from "./safeHref.js";
import { Oc } from "./stylex.js";
import { x } from "./tslib.es6.js";
var HFi, BFs, UFs, Luu, Nuu;
export { BFs, HFi, Luu, Nuu, UFs };
var __wakaru_Ktv_initialized = false;
export function Ktv() {
if (__wakaru_Ktv_initialized) return;
__wakaru_Ktv_initialized = true;
"use strict";
x(), Oc(), A_(), M0(), iY(), Kft(), duu(), hh(), AW(), zS(), HFi = /(?<!\\)\[([^\]]+)\]\(((?:[^()]|\([^)]*\))+)\)/g, BFs = {
    syntax: {
        kGuDYH: "ui-gxxoiu",
        kb6lSQ: "ui-12oo3zp",
        k33iCy: "ui-lshs6z",
        kzqmXN: "ui-nalus7",
        k1xSpc: "ui-t0psk2",
        $$css: !0
    },
    text: {
        kMwMTN: "ui-l1v4ol",
        kkrTdU: "ui-1ypdohk",
        kMnn75: "ui-krqix3 ui-1sur9pj",
        kWkggS: "ui-aldt1e ui-1c20lli",
        kaIpWk: "ui-1e1y6u3",
        kLKAdn: "ui-1i05g3g",
        kpe85a: "ui-8iso2o",
        kGO01o: "ui-e2ooyr",
        kE3dHu: "ui-11h9tm7",
        k1ekBW: "ui-rrqi6i",
        kIyJzY: "ui-7pq1vu",
        kAMwcw: "ui-6ekqhr",
        kSiTet: "ui-1hc1fzr ui-ajdars",
        $$css: !0
    }
}, UFs = Nn(qtv()), Luu = Or({
    rootClass: "ui-link-decorator-text",
    stylexStyles: ztv()
}), Nuu = bS.create({
    name: "linkDecorator",
    addOptions () {
        return {
            onLinkClick: void 0,
            onLinkContextMenu: void 0
        };
    },
    addProseMirrorPlugins () {
        const e = this.options, t = (r)=>OFi(r)?.closest(".ui-link-decorator-text") ?? void 0, n = uuu({
            onLinkContextMenu: e.onLinkContextMenu,
            getHref: (r)=>r.getAttribute("data-href") ?? void 0,
            getLinkElement: t
        }), i = (r)=>{
            if (r.repeat || r.key !== "Enter") return !1;
            const s = t(r.target);
            if (!s) return !1;
            if (!e.onLinkClick) return r.preventDefault(), r.stopPropagation(), !0;
            const o = Yfe(s.getAttribute("data-href") ?? void 0);
            return r.preventDefault(), r.stopPropagation(), o && e.onLinkClick(o), !0;
        };
        return [
            new rb({
                key: new cy("linkDecorator"),
                state: {
                    init (r, { doc: s }) {
                        return Muu(s);
                    },
                    apply (r, s) {
                        return r.docChanged ? Muu(r.doc) : s;
                    }
                },
                props: {
                    decorations (r) {
                        return this.getState(r);
                    },
                    handleClick (r, s, o) {
                        const a = t(o.target);
                        if (!a) return !1;
                        const c = Yfe(a.getAttribute("data-href") ?? void 0);
                        return c ? e.onLinkClick ? (o.preventDefault(), o.stopPropagation(), e.onLinkClick(c), !0) : !1 : (o.preventDefault(), o.stopPropagation(), !0);
                    },
                    handleDOMEvents: n
                },
                view (r) {
                    const s = (o)=>{
                        i(o);
                    };
                    return r.dom.addEventListener("keydown", s, !0), {
                        destroy: ()=>{
                            r.dom.removeEventListener("keydown", s, !0);
                        }
                    };
                }
            })
        ];
    }
});

}
