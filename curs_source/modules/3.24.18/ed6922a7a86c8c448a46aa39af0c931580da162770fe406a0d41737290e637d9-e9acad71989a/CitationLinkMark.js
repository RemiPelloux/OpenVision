import { NFi } from "./CitationLink.js";
import { Yfe } from "./DSs.js";
import { ZIi } from "./Markdown.stylex.js";
import { hh } from "./attach.js";
import { xRe } from "./cursor-icons.js";
import { PFs, itv, ptv } from "./f0s.js";
import { sp } from "./icon.js";
import { KLi, YLi } from "./index_144.js";
import { wCn } from "./markdownIconSizing.js";
import { A_, Or } from "./qIc.js";
import { dtv } from "./richLink.stylex.js";
import { Kft } from "./safeHref.js";
import { Oc } from "./stylex.js";
import { x } from "./tslib.es6.js";
var ouu, LFs, auu;
export { LFs, auu, ouu };
var __wakaru_mtv_initialized = false;
export function mtv() {
if (__wakaru_mtv_initialized) return;
__wakaru_mtv_initialized = true;
"use strict";
x(), Oc(), A_(), YLi(), dtv(), sp(), ZIi(), wCn(), Kft(), NFi(), hh(), xRe(), ouu = Or({
    rootClass: "ui-citation-link",
    stylexStyles: itv()
}), LFs = KLi.extend({
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
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "a",
            PFs(this.options, e),
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
}), auu = LFs.extend({
    renderHTML ({ HTMLAttributes: e }) {
        const t = Yfe(typeof e.href == "string" ? e.href : void 0), n = t !== void 0 && this.options.richLinkPresentationProvider.resolve(t) !== void 0;
        return [
            "a",
            PFs(this.options, e, n),
            0
        ];
    },
    addMarkView () {
        const e = this.options;
        return ({ HTMLAttributes: t, view: n })=>{
            const i = n.dom.ownerDocument, r = i.createElement("a"), s = Yfe(typeof t.href == "string" ? t.href : void 0), o = s === void 0 ? void 0 : e.richLinkPresentationProvider.resolve(s), a = s === void 0 ? r : i.createElement("span"), c = s ? ptv(r, a, i) : void 0, l = a !== r, u = (p)=>{
                if (p.key !== "Enter" || p.repeat) return;
                p.preventDefault(), p.stopPropagation();
                const g = Yfe(r.getAttribute("href") ?? "");
                if (g !== void 0) {
                    if (e.onLinkClick) {
                        e.onLinkClick(g);
                        return;
                    }
                    e.onCitationClick && r.classList.contains("ui-citation-link") && e.onCitationClick(g);
                }
            };
            for (const [p, g] of Object.entries(PFs(e, t, o !== void 0)))g != null && r.setAttribute(p, String(g));
            l && (r.appendChild(a), c?.(o));
            const h = s ? e.richLinkPresentationProvider.subscribe?.(s, ()=>{
                const p = e.richLinkPresentationProvider.resolve(s);
                c?.(p);
            }) ?? (()=>{}) : ()=>{};
            return r.addEventListener("keydown", u), {
                dom: r,
                contentDOM: a,
                ignoreMutation: (p)=>p.type === "attributes" && (p.target === r || p.target === a) || l && p.target !== a && !a.contains(p.target),
                destroy: ()=>{
                    h(), r.removeEventListener("keydown", u);
                }
            };
        };
    }
});

}
