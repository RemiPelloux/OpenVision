import { Aw, Fy, HQ, MS, Rw, ar, gn, j1 } from "./LYd.js";
import { qu } from "./attach.js";
import { gE } from "./index_23.js";
import { Doe } from "./index_33.js";
import { DTp, Ew1, I$r, Tw1, nIp } from "./ipa.js";
import { NTp } from "./link-context-menu.js";
import { Rhe } from "./nca.js";
import { k1t } from "./safeHref.js";
import { Va } from "./stylex.js";
import { E } from "./tslib.es6.js";
var q$r, EPa, IPa, iIp, rIp;
export { EPa, IPa, iIp, q$r, rIp };
var __wakaru_Iw1_initialized = false;
export function Iw1() {
if (__wakaru_Iw1_initialized) return;
__wakaru_Iw1_initialized = true;
"use strict";
E(), Va(), Fy(), gE(), Doe(), k1t(), NTp(), qu(), HQ(), Aw(), q$r = /(?<!\\)\[([^\]]+)\]\(((?:[^()]|\([^)]*\))+)\)/g, EPa = {
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
}, IPa = gn(Tw1()), iIp = ar({
    rootClass: "ui-link-decorator-text",
    stylexStyles: Ew1()
}), rIp = Rw.create({
    name: "linkDecorator",
    addOptions () {
        return {
            onLinkClick: void 0,
            onLinkContextMenu: void 0
        };
    },
    addProseMirrorPlugins () {
        const t = this.options, e = (r)=>I$r(r)?.closest(".ui-link-decorator-text") ?? void 0, n = DTp({
            onLinkContextMenu: t.onLinkContextMenu,
            getHref: (r)=>r.getAttribute("data-href") ?? void 0,
            getLinkElement: e
        }), i = (r)=>{
            if (r.repeat || r.key !== "Enter") return !1;
            const s = e(r.target);
            if (!s) return !1;
            if (!t.onLinkClick) return r.preventDefault(), r.stopPropagation(), !0;
            const o = Rhe(s.getAttribute("data-href") ?? void 0);
            return r.preventDefault(), r.stopPropagation(), o && t.onLinkClick(o), !0;
        };
        return [
            new MS({
                key: new j1("linkDecorator"),
                state: {
                    init (r, { doc: s }) {
                        return nIp(s);
                    },
                    apply (r, s) {
                        return r.docChanged ? nIp(r.doc) : s;
                    }
                },
                props: {
                    decorations (r) {
                        return this.getState(r);
                    },
                    handleClick (r, s, o) {
                        const a = e(o.target);
                        if (!a) return !1;
                        const l = Rhe(a.getAttribute("data-href") ?? void 0);
                        return l ? t.onLinkClick ? (o.preventDefault(), o.stopPropagation(), t.onLinkClick(l), !0) : !1 : (o.preventDefault(), o.stopPropagation(), !0);
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
