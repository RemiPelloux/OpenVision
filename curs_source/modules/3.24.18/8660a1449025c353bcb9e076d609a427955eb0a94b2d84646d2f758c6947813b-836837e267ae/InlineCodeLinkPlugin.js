import { T$r } from "./CitationLink.js";
import { Aw, Fy, HQ, MS, Rw, ar, gn, j1 } from "./LYd.js";
import { qu } from "./attach.js";
import { gE } from "./index_23.js";
import { Doe } from "./index_33.js";
import { LTp, X11, Z11 } from "./ipa.js";
import { Va } from "./stylex.js";
import { E } from "./tslib.es6.js";
var fPa, OTp, B_i, vPa;
export { B_i, OTp, fPa, vPa };
var __wakaru_FTp_initialized = false;
export function FTp() {
if (__wakaru_FTp_initialized) return;
__wakaru_FTp_initialized = true;
"use strict";
E(), Va(), Fy(), gE(), Doe(), T$r(), qu(), HQ(), Aw(), fPa = gn(X11()), OTp = ar({
    rootClass: "ui-inline-code-link-text",
    stylexStyles: Z11()
}), B_i = /(?<!\\)\[([^\]]+)\]\(((?:[^()]|\([^)]*\))+)\)/g, vPa = Rw.create({
    name: "inlineCodeLink",
    addOptions () {
        return {
            onlyFilePaths: !0,
            shouldLinkify: void 0,
            onLinkClick: void 0
        };
    },
    addProseMirrorPlugins () {
        const t = this.options;
        return [
            new MS({
                key: new j1("inlineCodeLink"),
                state: {
                    init (e, { doc: n }) {
                        return LTp(n, t);
                    },
                    apply (e, n) {
                        return e.docChanged ? LTp(e.doc, t) : n;
                    }
                },
                props: {
                    decorations (e) {
                        return this.getState(e);
                    },
                    handleClick (e, n, i) {
                        const r = i.target;
                        if (r.classList.contains("ui-inline-code-link-text")) {
                            const s = r.getAttribute("data-href");
                            if (s && t.onLinkClick) return i.preventDefault(), i.stopPropagation(), t.onLinkClick(s), !0;
                        }
                        return !1;
                    }
                }
            })
        ];
    }
});

}
