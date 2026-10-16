import { T$r } from "./CitationLink.js";
import { Fy, ar } from "./LYd.js";
import { Mdi } from "./Markdown.stylex.js";
import { qu } from "./attach.js";
import { OHe } from "./cursor-icons.js";
import { fd } from "./icon.js";
import { a9r, l9r } from "./index_150.js";
import { ETp, gPa, nk1 } from "./ipa.js";
import { Ldi } from "./markdownIconSizing.js";
import { Rhe } from "./nca.js";
import { ek1 } from "./richLink.stylex.js";
import { k1t } from "./safeHref.js";
import { Va } from "./stylex.js";
import { E } from "./tslib.es6.js";
var xTp, E$r, ATp;
export { ATp, E$r, xTp };
var __wakaru_RTp_initialized = false;
export function RTp() {
if (__wakaru_RTp_initialized) return;
__wakaru_RTp_initialized = true;
"use strict";
E(), Va(), Fy(), l9r(), ek1(), fd(), Mdi(), Ldi(), k1t(), T$r(), qu(), OHe(), xTp = ar({
    rootClass: "ui-citation-link",
    stylexStyles: ETp()
}), E$r = a9r.extend({
    name: "link",
    addOptions () {
        return {
            ...this.parent?.(),
            HTMLAttributes: {},
            detectFilePaths: !0,
            protocols: [
                "http",
                "https",
                "mailto",
                "file"
            ],
            openOnClick: !1
        };
    },
    addAttributes () {
        return {
            ...this.parent?.(),
            href: {
                default: null
            },
            target: {
                default: null
            },
            rel: {
                default: null
            },
            class: {
                default: null
            },
            "data-citation": {
                default: null
            }
        };
    },
    renderHTML ({ HTMLAttributes: t }) {
        return [
            "a",
            gPa(this.options, t),
            0
        ];
    },
    addKeyboardShortcuts () {
        return {
            "Mod-k": ()=>this.editor.commands.toggleLink({
                    href: ""
                })
        };
    }
}), ATp = E$r.extend({
    renderHTML ({ HTMLAttributes: t }) {
        const e = Rhe(typeof t.href == "string" ? t.href : void 0), n = e !== void 0 && this.options.richLinkPresentationProvider.resolve(e) !== void 0;
        return [
            "a",
            gPa(this.options, t, n),
            0
        ];
    },
    addMarkView () {
        const t = this.options;
        return ({ HTMLAttributes: e, view: n })=>{
            const i = n.dom.ownerDocument, r = i.createElement("a"), s = Rhe(typeof e.href == "string" ? e.href : void 0), o = s === void 0 ? void 0 : t.richLinkPresentationProvider.resolve(s), a = s === void 0 ? r : i.createElement("span"), l = s ? nk1(r, a, i) : void 0, c = a !== r, u = (h)=>{
                if (h.key !== "Enter" || h.repeat) return;
                h.preventDefault(), h.stopPropagation();
                const p = Rhe(r.getAttribute("href") ?? "");
                if (p !== void 0) {
                    if (t.onLinkClick) {
                        t.onLinkClick(p);
                        return;
                    }
                    t.onCitationClick && r.classList.contains("ui-citation-link") && t.onCitationClick(p);
                }
            };
            for (const [h, p] of Object.entries(gPa(t, e, o !== void 0)))p != null && r.setAttribute(h, String(p));
            c && (r.appendChild(a), l?.(o));
            const d = s ? t.richLinkPresentationProvider.subscribe?.(s, ()=>{
                const h = t.richLinkPresentationProvider.resolve(s);
                l?.(h);
            }) ?? (()=>{}) : ()=>{};
            return r.addEventListener("keydown", u), {
                dom: r,
                contentDOM: a,
                ignoreMutation: (h)=>h.type === "attributes" && (h.target === r || h.target === a) || c && h.target !== a && !a.contains(h.target),
                destroy: ()=>{
                    d(), r.removeEventListener("keydown", u);
                }
            };
        };
    }
});

}
