import { NFi } from "./CitationLink.js";
import { hh } from "./attach.js";
import { huu, ltv, utv } from "./f0s.js";
import { M0 } from "./index_18.js";
import { iY } from "./index_28.js";
import { AW, A_, Nn, Or, bS, cy, rb, zS } from "./qIc.js";
import { Oc } from "./stylex.js";
import { x } from "./tslib.es6.js";
var NFs, puu, Cxn, muu;
export { Cxn, NFs, muu, puu };
var __wakaru_vtv_initialized = false;
export function vtv() {
if (__wakaru_vtv_initialized) return;
__wakaru_vtv_initialized = true;
"use strict";
x(), Oc(), A_(), M0(), iY(), NFi(), hh(), AW(), zS(), NFs = Nn(ltv()), puu = Or({
    rootClass: "ui-inline-code-link-text",
    stylexStyles: utv()
}), Cxn = /(?<!\\)\[([^\]]+)\]\(((?:[^()]|\([^)]*\))+)\)/g, muu = bS.create({
    name: "inlineCodeLink",
    addOptions () {
        return {
            onlyFilePaths: !0,
            shouldLinkify: void 0,
            onLinkClick: void 0
        };
    },
    addProseMirrorPlugins () {
        const e = this.options;
        return [
            new rb({
                key: new cy("inlineCodeLink"),
                state: {
                    init (t, { doc: n }) {
                        return huu(n, e);
                    },
                    apply (t, n) {
                        return t.docChanged ? huu(t.doc, e) : n;
                    }
                },
                props: {
                    decorations (t) {
                        return this.getState(t);
                    },
                    handleClick (t, n, i) {
                        const r = i.target;
                        if (r.classList.contains("ui-inline-code-link-text")) {
                            const s = r.getAttribute("data-href");
                            if (s && e.onLinkClick) return i.preventDefault(), i.stopPropagation(), e.onLinkClick(s), !0;
                        }
                        return !1;
                    }
                }
            })
        ];
    }
});

}
