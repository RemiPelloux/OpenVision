import { EMe } from "./De_3.js";
import { S } from "./HVr.js";
import { gT } from "./api_7.js";
import { A6, IHt } from "./context_pb.js";
import { en } from "./dom_2.js";
import { mi } from "./index_188.js";
import { rt } from "./nls.js";
import { Bwn, DJ, Fwn, Iki, Qzc, k1g, sa, w1g } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { Gr, nj } from "./types_4.js";
function ic_(e) {
    const t = e.textContent;
    if (t !== null) {
        const n = e.getAttribute("data-mention-key") || void 0, i = e.getAttribute("data-typeahead-type"), r = e.getAttribute("data-mention-metadata");
        let s = e.getAttribute("data-mention-name");
        s || (s = t.startsWith("@") ? t.slice(1) : t);
        let o = t;
        const a = i;
        o.startsWith("@") && (a === Gr.folder || a === Gr.file || a === Gr.terminal || a === Gr.terminal_selection || a === Gr.git_diff || a === Gr.link || a === Gr.mcp_attachment || a === Gr.browser || a === Gr.agent_store) && (o = o.slice(1));
        let c;
        if (r) try {
            c = JSON.parse(r);
        } catch  {
            c = void 0;
        }
        const l = new ant(s, void 0, o, void 0, a, c, n);
        return l.setMode("segmented").toggleDirectionless(), {
            node: l
        };
    }
    return null;
}
function c2h(e) {
    return typeof e == "object" && e !== null && "case" in e ? e.case : e;
}
function rc_(e) {
    if (e === Gr.link || e === Gr.file || e === Gr.cursor_command || e === Gr.pr_diff || e === Gr.git_pr || e === Gr.current_pr || e === Gr.mcp_attachment || e === "cursor_skill" || e === "subagent") return {
        cursor: "pointer"
    };
}
function l2h() {
    const e = document.createElement("i");
    return e.className = "codicon codicon-close", e.setAttribute("data-mention-remove", "true"), e.setAttribute("role", "button"), e.setAttribute("tabindex", "0"), e.setAttribute("aria-label", S(11403, null)), e;
}
function cZ(e, t, n) {
    const i = document.createDocumentFragment(), r = document.createElement("span");
    r.className = n ? `mention-codicon-wrapper ${n}` : "mention-codicon-wrapper";
    const s = document.createElement("i");
    s.className = `codicon ${e}`;
    const o = document.createElement("span");
    return o.textContent = t, r.appendChild(s), r.appendChild(o), r.appendChild(l2h()), i.appendChild(r), i;
}
function u2h(e, t) {
    const n = document.createElement("span");
    n.className = "show-file-icons";
    const i = document.createElement("span");
    i.className = "mention-file-wrapper";
    const r = document.createElement("span");
    r.className = "mention-file-icon-container", r.appendChild(e);
    const s = document.createElement("span");
    return s.textContent = t, i.appendChild(r), i.appendChild(s), i.appendChild(l2h()), n.appendChild(i), n;
}
function sc_({ fileName: e, iconName: t, iconStyle: n, iconColor: i }) {
    const r = document.createElement("i");
    return r.className = "cursor-icon ui-icon mention-file-icon", r.dataset.iconName = t, r.style.setProperty("--cursor-icon-content", `"${DJ(t, n)}"`), r.style.setProperty("--icon-size", "12px"), r.style.color = Bwn(i), r.setAttribute("aria-hidden", "true"), u2h(r, e);
}
function oc_() {
    const e = sa(), t = e.document.querySelector(".monaco-workbench");
    if (t && t instanceof e.HTMLElement) return t.classList.contains("file-icons-enabled");
    const n = e.document.createElement("span");
    n.className = "show-file-icons", n.style.position = "absolute", n.style.width = "0", n.style.height = "0", n.style.overflow = "hidden";
    const i = e.document.createElement("span");
    i.className = "monaco-icon-label file-icon", n.appendChild(i), e.document.body.appendChild(n);
    const r = e.getComputedStyle(i, "::before"), s = r.getPropertyValue("background-image"), o = r.getPropertyValue("-webkit-mask-image") || r.getPropertyValue("mask-image"), a = s !== "" && s !== "none" || o !== "" && o !== "none";
    return e.document.body.removeChild(n), a;
}
function ahe(e, t, n, i, r, s, o, a, c) {
    const l = {
        selection: r || void 0,
        selectedOption: o || void 0
    }, u = new ant(e, t, c, n, i, l, s, a);
    return u.setMode("segmented").toggleDirectionless(), u;
}
var rAo, sAo, ant;
export { ahe, ant, c2h, cZ, ic_, l2h, oc_, rAo, rc_, sAo, sc_, u2h };
var __wakaru_U8e_initialized = false;
export function U8e() {
if (__wakaru_U8e_initialized) return;
__wakaru_U8e_initialized = true;
"use strict";
x(), mi(), gT(), A6(), nj(), en(), rt(), rAo = "background-color: var(--ai-input-mention-background, var(--cursor-bg-blue-secondary)); color: var(--cursor-text-link)", sAo = "background-color: var(--ai-input-mention-background, var(--cursor-bg-yellow-secondary)); color: var(--cursor-text-yellow-primary)", ant = class ACm extends EMe {
    static getType() {
        return "mention";
    }
    static clone(t) {
        const n = new ACm(t.__mention, t.__contextIntent, t.__text, t.__key, t.typeaheadType, t.metadata, t.storedKey, t.source);
        return n.__presentationFileIconVariant = t.__presentationFileIconVariant, n;
    }
    static importJSON(t) {
        const n = ahe(t.mentionName, t.contextIntent ? IHt.fromJsonString(t.contextIntent) : void 0, void 0, t.typeaheadType, void 0, t.storedKey, void 0, t.source, t.text);
        if (t.typeaheadType === Gr.folder && t.text) {
            const i = t.text.endsWith("/") ? t.text.slice(0, -1).replace(/^@/, "") : t.text.replace(/^@/, "");
            n.setTextContent(i);
        } else if (t.typeaheadType === Gr.file || t.typeaheadType === Gr.terminal || t.typeaheadType === Gr.terminal_selection || t.typeaheadType === Gr.link || t.typeaheadType === Gr.mcp_attachment || t.typeaheadType === Gr.git_diff || t.typeaheadType === Gr.git_pr || t.typeaheadType === Gr.current_pr || t.typeaheadType === Gr.browser || t.typeaheadType === Gr.agent_store) {
            let i = t.text ? t.text.replace(/^@/, "") : t.text;
            t.typeaheadType === Gr.git_diff && i && (i = i.replace(/\s*\(Diff with Main\)\s*$/i, ""), n.metadata = n.metadata ?? {}, n.metadata.hoverText = n.metadata.hoverText ?? "Diff with Main"), n.setTextContent(i);
        } else n.setTextContent(t.text);
        return n.setFormat(t.format), n.setDetail(t.detail), n.setMode(t.mode), n.setStyle(t.style), n.metadata = t.metadata, t.typeaheadType && (n.typeaheadType = t.typeaheadType), n;
    }
    constructor(t, n, i, r, s, o, a, c){
        const l = Iki(s), u = i ?? (s === Gr.folder || s === Gr.file || s === Gr.terminal || s === Gr.terminal_selection || s === Gr.git_diff || s === Gr.link || s === Gr.mcp_attachment || s === Gr.browser || s === Gr.agent_store ? t : (l ? "/" : "@") + t);
        super(u, r), this.storedKey = a ?? this.__key, this.__mention = t, this.__contextIntent = n, this.metadata = o, this.typeaheadType = s, this.source = c, this.__presentationFileIconVariant = "seti";
    }
    exportJSON() {
        return {
            ...super.exportJSON(),
            text: this.__text,
            mentionName: this.__mention,
            contextIntent: this.__contextIntent?.toJsonString(),
            type: "mention",
            typeaheadType: this.typeaheadType,
            storedKey: this.storedKey,
            version: 1,
            metadata: this.metadata,
            source: this.source
        };
    }
    setContextIntent(t) {
        const n = this.getWritable();
        n.__contextIntent = t;
    }
    getContextIntent() {
        return this.getLatest().__contextIntent;
    }
    setPresentationFileIconVariant(t) {
        const n = this.getWritable();
        return n.__presentationFileIconVariant = t, n;
    }
    updateDOM(t, n, i) {
        return t.__presentationFileIconVariant !== this.__presentationFileIconVariant ? !0 : super.updateDOM(t, n, i);
    }
    createDOM(t) {
        const n = Iki(this.typeaheadType), i = k1g(this.typeaheadType), r = Qzc(this.typeaheadType), s = w1g(this.typeaheadType), o = this.typeaheadType === Gr.folder, a = this.typeaheadType === Gr.file, c = this.typeaheadType === "ui-element", l = this.typeaheadType === Gr.terminal || this.typeaheadType === Gr.terminal_selection, u = this.typeaheadType === Gr.link, h = this.typeaheadType === Gr.mcp_attachment, p = this.typeaheadType === Gr.git_diff || this.typeaheadType === "diffs", g = super.createDOM(t);
        if (this.source === "editor.cmdk") return g.style.cssText = n ? sAo : rAo, g.className = "mention mention-plain", g.setAttribute("contenteditable", "false"), g.textContent = this.getTextContent(), g;
        if (g.style.cssText = n ? sAo : rAo, g.className = "mention", g.setAttribute("contenteditable", "false"), o && (g.textContent = "", g.appendChild(cZ("codicon-folder-two", this.__mention))), a) {
            const D = Fwn({
                filenameOrExt: this.__mention,
                preferred: this.__presentationFileIconVariant
            });
            if (D.variant !== "seti") g.textContent = "", g.appendChild(sc_({
                fileName: this.__mention,
                iconName: D.iconName,
                iconStyle: D.style,
                iconColor: D.color
            }));
            else if (oc_()) {
                let N = this.metadata?.iconClasses;
                (!N || !Array.isArray(N)) && (N = [
                    "file-icon"
                ]);
                const O = document.createElement("span");
                O.className = [
                    "monaco-icon-label",
                    "mention-file-icon",
                    "mention-file-icon-theme",
                    "height-override-important",
                    ...N
                ].join(" "), g.textContent = "", g.appendChild(u2h(O, this.__mention));
            } else g.textContent = "", g.appendChild(cZ("codicon-file", this.__mention));
        }
        if (c) {
            const P = (this.__text !== void 0 ? this.__text : this.__mention).match(/<\s*([a-zA-Z0-9-]+)/), N = P ? `<${P[1]}>` : this.__text && !this.__text.startsWith("<") ? this.__text : "<element>";
            g.textContent = "";
            const O = cZ("codicon-inspect", N, "mention-ui-element"), F = O.firstChild;
            F.setAttribute("data-mention-name", this.__mention), F.setAttribute("data-mention-key", this.__key), F.setAttribute("data-typeahead-type", "ui-element"), g.appendChild(O);
        }
        if (l && (g.textContent = "", g.appendChild(cZ("codicon-terminal", this.__mention))), u) if (g.textContent = "", this.__mention.startsWith("file://") && this.__mention.toLowerCase().endsWith(".pdf")) {
            const P = this.__mention.replace(/^file:\/\//, "");
            g.appendChild(cZ("codicon-file-pdf", P));
        } else {
            let P = this.__mention.replace(/^https?:\/\//, "").replace(/\/$/, "");
            g.appendChild(cZ("codicon-link", P));
        }
        if (h && (g.textContent = "", g.appendChild(cZ("codicon-attach", this.__mention))), p && (g.textContent = "", g.appendChild(cZ("codicon-git-branch", this.__mention))), this.typeaheadType === Gr.doc && (g.textContent = "", g.appendChild(cZ("codicon-book", this.__mention))), this.typeaheadType === Gr.playwright_mcp && (g.textContent = "", g.appendChild(cZ("codicon-globe", this.__mention))), this.typeaheadType === Gr.browser && (g.textContent = "", g.appendChild(cZ("codicon-globe", this.__mention, "mention-browser-selection"))), this.typeaheadType === Gr.agent_store && (g.textContent = "", g.appendChild(cZ("codicon-package", this.__mention))), this.typeaheadType === "console-log" && (g.textContent = "", g.appendChild(cZ("codicon-terminal", this.__mention))), this.typeaheadType === "browser-changes") {
            const D = this.__text || this.__mention;
            g.textContent = "", g.appendChild(cZ("codicon-inspect", D, "mention-browser-changes"));
        }
        if (this.typeaheadType === Gr.pr_diff && (g.textContent = "", g.appendChild(cZ("codicon-git-pull-request", this.__mention))), (this.typeaheadType === Gr.git_pr || this.typeaheadType === Gr.current_pr) && (g.textContent = "", g.appendChild(cZ("codicon-git-pull-request", this.__mention))), this.typeaheadType) {
            const D = c2h(this.typeaheadType), P = rc_(D);
            if (P) for (const [N, O] of Object.entries(P))g.style[N] = O;
            (D === Gr.link || D === Gr.file || D === Gr.folder || D === Gr.cursor_command || D === Gr.pr_diff || D === Gr.git_pr || D === Gr.current_pr || D === Gr.mcp_attachment || D === "cursor_skill" || D === "subagent" || D === Gr.playwright_mcp || D === Gr.agent_store) && g.classList.add("mention-clickable"), g.setAttribute("data-mention-name", this.__mention), g.setAttribute("data-mention-key", this.__key), g.setAttribute("data-typeahead-type", D);
        }
        return g;
    }
    exportDOM() {
        const t = document.createElement("span"), n = this.typeaheadType, i = n === Gr.folder || n === Gr.file || n === Gr.terminal || n === Gr.terminal_selection || n === Gr.git_diff || n === Gr.agent_store ? `@${this.__text}` : this.__text;
        if (t.setAttribute("data-mention-key", this.storedKey), t.setAttribute("data-lexical-mention", "true"), t.setAttribute("data-mention-name", this.__mention), this.typeaheadType) {
            const r = c2h(this.typeaheadType);
            t.setAttribute("data-typeahead-type", r);
        }
        if (this.metadata) {
            const r = this.metadata, s = {
                iconClasses: r.iconClasses || void 0,
                selection: r.selection || void 0,
                selectedOption: void 0,
                hoverText: r.hoverText || void 0,
                uiElementData: r.uiElementData || void 0,
                consoleLogData: r.consoleLogData || void 0,
                prUrl: r.prUrl || void 0,
                filePath: r.filePath || void 0,
                startLine: r.startLine,
                endLine: r.endLine,
                agentStore: r.agentStore || void 0
            }, o = JSON.stringify(s);
            t.setAttribute("data-mention-metadata", o);
        }
        return t.textContent = i, {
            element: t
        };
    }
    getTextContent() {
        const t = this.typeaheadType;
        return t === "ui-element" ? this.__mention : t === "browser-changes" ? this.metadata?.llmText ?? this.__mention : t === Gr.mcp_attachment ? this.metadata?.hoverText ?? this.__mention : this.typeaheadType === Gr.folder || this.typeaheadType === Gr.file || this.typeaheadType === Gr.terminal || this.typeaheadType === Gr.terminal_selection || this.typeaheadType === Gr.git_diff || this.typeaheadType === Gr.git_pr || this.typeaheadType === Gr.current_pr || this.typeaheadType === Gr.agent_store ? `@${this.__text}` : super.getTextContent();
    }
    isSegmented() {
        return !1;
    }
    static importDOM() {
        return {
            span: (t)=>t.hasAttribute("data-lexical-mention") ? {
                    conversion: ic_,
                    priority: 1
                } : null
        };
    }
    isTextEntity() {
        return !0;
    }
    isToken() {
        return !0;
    }
};

}
