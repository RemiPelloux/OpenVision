import { DD, JFi, aiv, civ, div, hiv, liv, oiv, u3s, uiv } from "./f0s.js";
import { ACi, A_, Xf, bS, xfe, yAg } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Ydu, d3s, Xdu;
export { Xdu, Ydu, d3s };
var __wakaru_piv_initialized = false;
export function piv() {
if (__wakaru_piv_initialized) return;
__wakaru_piv_initialized = true;
x(), A_(), oiv(), Ydu = class {
    constructor(e){
        this.baseExtensions = [], this.extensions = [], this.lastParseResult = null;
        var t, n, i, r, s;
        this.markedInstance = (t = e?.marked) != null ? t : DD, this.lexer = new this.markedInstance.Lexer, this.indentStyle = (i = (n = e?.indentation) == null ? void 0 : n.style) != null ? i : "space", this.indentSize = (s = (r = e?.indentation) == null ? void 0 : r.size) != null ? s : 2, this.baseExtensions = e?.extensions || [], e?.markedOptions && typeof this.markedInstance.setOptions == "function" && this.markedInstance.setOptions(e.markedOptions), this.registry = new Map, this.nodeTypeRegistry = new Map, e?.extensions && (this.baseExtensions = e.extensions, ACi(e.extensions).forEach((a)=>this.registerExtension(a, !1))), this.lexer = new this.markedInstance.Lexer;
    }
    get instance() {
        return this.markedInstance;
    }
    get indentCharacter() {
        return this.indentStyle === "space" ? " " : "	";
    }
    get indentString() {
        return this.indentCharacter.repeat(this.indentSize);
    }
    hasMarked() {
        return !!this.markedInstance;
    }
    registerExtension(e, t = !0) {
        var n, i;
        this.extensions.push(e);
        const r = e.name, s = Xf(e, "markdownTokenName") || r, o = Xf(e, "parseMarkdown"), a = Xf(e, "renderMarkdown"), c = Xf(e, "markdownTokenizer"), l = (n = Xf(e, "markdownOptions")) != null ? n : null, u = (i = l?.indentsContent) != null ? i : !1, h = {
            tokenName: s,
            nodeName: r,
            parseMarkdown: o,
            renderMarkdown: a,
            isIndenting: u,
            tokenizer: c
        };
        if (s && o) {
            const p = this.registry.get(s) || [];
            p.push(h), this.registry.set(s, p);
        }
        if (a) {
            const p = this.nodeTypeRegistry.get(r) || [];
            p.push(h), this.nodeTypeRegistry.set(r, p);
        }
        c && this.hasMarked() && (this.registerTokenizer(c), t && (this.lexer = new this.markedInstance.Lexer));
    }
    registerTokenizer(e) {
        if (!this.hasMarked()) return;
        const { name: t, start: n, level: i = "inline", tokenize: r } = e, a = {
            inlineTokens: (u)=>this.lexer.inlineTokens(u),
            blockTokens: (u)=>this.lexer.blockTokens(u)
        };
        let c;
        n ? c = typeof n == "function" ? n : (u)=>u.indexOf(n) : c = (u)=>{
            const h = r(u, [], a);
            return h && h.raw ? u.indexOf(h.raw) : -1;
        };
        const l = {
            name: t,
            level: i,
            start: c,
            tokenizer: (u, h)=>{
                const p = r(u, h, a);
                if (p && p.type) return {
                    ...p,
                    type: p.type || t,
                    raw: p.raw || "",
                    tokens: p.tokens || []
                };
            },
            childTokens: []
        };
        this.markedInstance.use({
            extensions: [
                l
            ]
        });
    }
    getHandlersForToken(e) {
        try {
            return this.registry.get(e) || [];
        } catch  {
            return [];
        }
    }
    getHandlerForToken(e) {
        const t = this.getHandlersForToken(e);
        if (t.length > 0) return t[0];
        const n = this.getHandlersForNodeType(e);
        return n.length > 0 ? n[0] : void 0;
    }
    getHandlersForNodeType(e) {
        try {
            return this.nodeTypeRegistry.get(e) || [];
        } catch  {
            return [];
        }
    }
    serialize(e) {
        return e ? Array.isArray(e) ? this.renderNodes(e, e) : this.renderNodes(e, e) : "";
    }
    parse(e) {
        if (!this.hasMarked()) throw new Error("No marked instance available for parsing");
        const t = this.markedInstance.lexer(e);
        return {
            type: "doc",
            content: this.parseTokens(t)
        };
    }
    parseTokens(e) {
        return e.map((t)=>this.parseToken(t)).filter((t)=>t !== null).flatMap((t)=>Array.isArray(t) ? t : [
                t
            ]);
    }
    parseToken(e) {
        if (!e.type) return null;
        if (e.type === "list") return this.parseListToken(e);
        const t = this.getHandlersForToken(e.type), n = this.createParseHelpers();
        if (t.find((r)=>{
            if (!r.parseMarkdown) return !1;
            const s = r.parseMarkdown(e, n), o = this.normalizeParseResult(s);
            return o && (!Array.isArray(o) || o.length > 0) ? (this.lastParseResult = o, !0) : !1;
        }) && this.lastParseResult) {
            const r = this.lastParseResult;
            return this.lastParseResult = null, r;
        }
        return this.parseFallbackToken(e);
    }
    parseListToken(e) {
        if (!e.items || e.items.length === 0) return this.parseTokenWithHandlers(e);
        const t = e.items.some((a)=>u3s(a).isTask), n = e.items.some((a)=>!u3s(a).isTask);
        if (!t || !n || this.getHandlersForToken("taskList").length === 0) return this.parseTokenWithHandlers(e);
        const i = [];
        let r = [], s = null;
        for(let a = 0; a < e.items.length; a += 1){
            const c = e.items[a], { isTask: l, checked: u, indentLevel: h } = u3s(c);
            let p = c;
            if (l) {
                const v = (c.raw || c.text || "").split(`
`), b = v[0].match(/^\s*[-+*]\s+\[([ xX])\]\s+(.*)$/), y = b ? b[2] : "";
                let T = [];
                if (v.length > 1 && v.slice(1).join(`
`).trim()) {
                    const A = v.slice(1), R = A.filter((D)=>D.trim());
                    if (R.length > 0) {
                        const D = Math.min(...R.map((O)=>O.length - O.trimStart().length)), N = A.map((O)=>O.trim() ? O.slice(D) : "").join(`
`).trim();
                        N && (T = this.markedInstance.lexer(`${N}
`));
                    }
                }
                p = {
                    type: "taskItem",
                    raw: "",
                    mainContent: y,
                    indentLevel: h,
                    checked: u ?? !1,
                    text: y,
                    tokens: this.lexer.inlineTokens(y),
                    nestedTokens: T
                };
            }
            const g = l ? "taskList" : "list";
            s !== g ? (r.length > 0 && i.push({
                type: s,
                items: r
            }), r = [
                p
            ], s = g) : r.push(p);
        }
        r.length > 0 && i.push({
            type: s,
            items: r
        });
        const o = [];
        for(let a = 0; a < i.length; a += 1){
            const c = i[a], l = {
                ...e,
                type: c.type,
                items: c.items
            }, u = this.parseToken(l);
            u && (Array.isArray(u) ? o.push(...u) : o.push(u));
        }
        return o.length > 0 ? o : null;
    }
    parseTokenWithHandlers(e) {
        if (!e.type) return null;
        const t = this.getHandlersForToken(e.type), n = this.createParseHelpers();
        if (t.find((r)=>{
            if (!r.parseMarkdown) return !1;
            const s = r.parseMarkdown(e, n), o = this.normalizeParseResult(s);
            return o && (!Array.isArray(o) || o.length > 0) ? (this.lastParseResult = o, !0) : !1;
        }) && this.lastParseResult) {
            const r = this.lastParseResult;
            return this.lastParseResult = null, r;
        }
        return this.parseFallbackToken(e);
    }
    createParseHelpers() {
        return {
            parseInline: (e)=>this.parseInlineTokens(e),
            parseChildren: (e)=>this.parseTokens(e),
            createTextNode: (e, t)=>({
                    type: "text",
                    text: e,
                    marks: t || void 0
                }),
            createNode: (e, t, n)=>{
                const i = {
                    type: e,
                    attrs: t || void 0,
                    content: n || void 0
                };
                return (!t || Object.keys(t).length === 0) && delete i.attrs, i;
            },
            applyMark: (e, t, n)=>({
                    mark: e,
                    content: t,
                    attrs: n && Object.keys(n).length > 0 ? n : void 0
                })
        };
    }
    escapeRegex(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    parseInlineTokens(e) {
        var t, n, i, r;
        const s = [];
        for(let o = 0; o < e.length; o += 1){
            const a = e[o];
            if (a.type === "text") s.push({
                type: "text",
                text: a.text || ""
            });
            else if (a.type === "html") {
                const c = ((n = (t = a.raw) != null ? t : a.text) != null ? n : "").toString(), l = /^<\/[\s]*[\w-]+/i.test(c), u = c.match(/^<[\s]*([\w-]+)(\s|>|\/|$)/i);
                if (!l && u && !/\/>$/.test(c)) {
                    const p = u[1], g = this.escapeRegex(p), f = new RegExp(`^<\\/\\s*${g}\\b`, "i");
                    let v = -1;
                    const b = [
                        c
                    ];
                    for(let y = o + 1; y < e.length; y += 1){
                        const T = e[y], E = ((r = (i = T.raw) != null ? i : T.text) != null ? r : "").toString();
                        if (b.push(E), T.type === "html" && f.test(E)) {
                            v = y;
                            break;
                        }
                    }
                    if (v !== -1) {
                        const y = b.join(""), T = {
                            type: "html",
                            raw: y,
                            text: y,
                            block: !1
                        }, E = this.parseHTMLToken(T);
                        if (E) {
                            const A = this.normalizeParseResult(E);
                            Array.isArray(A) ? s.push(...A) : A && s.push(A);
                        }
                        o = v;
                        continue;
                    }
                }
                const h = this.parseHTMLToken(a);
                if (h) {
                    const p = this.normalizeParseResult(h);
                    Array.isArray(p) ? s.push(...p) : p && s.push(p);
                }
            } else if (a.type) {
                const c = this.getHandlerForToken(a.type);
                if (c && c.parseMarkdown) {
                    const l = this.createParseHelpers(), u = c.parseMarkdown(a, l);
                    if (this.isMarkResult(u)) {
                        const h = this.applyMarkToContent(u.mark, u.content, u.attrs);
                        s.push(...h);
                    } else {
                        const h = this.normalizeParseResult(u);
                        Array.isArray(h) ? s.push(...h) : h && s.push(h);
                    }
                } else a.tokens && s.push(...this.parseInlineTokens(a.tokens));
            }
        }
        return s;
    }
    applyMarkToContent(e, t, n) {
        return t.map((i)=>{
            if (i.type === "text") {
                const r = i.marks || [], s = n ? {
                    type: e,
                    attrs: n
                } : {
                    type: e
                };
                return {
                    ...i,
                    marks: [
                        ...r,
                        s
                    ]
                };
            }
            return {
                ...i,
                content: i.content ? this.applyMarkToContent(e, i.content, n) : void 0
            };
        });
    }
    isMarkResult(e) {
        return e && typeof e == "object" && "mark" in e;
    }
    normalizeParseResult(e) {
        return e ? this.isMarkResult(e) ? e.content : e : null;
    }
    parseFallbackToken(e) {
        switch(e.type){
            case "paragraph":
                return {
                    type: "paragraph",
                    content: e.tokens ? this.parseInlineTokens(e.tokens) : []
                };
            case "heading":
                return {
                    type: "heading",
                    attrs: {
                        level: e.depth || 1
                    },
                    content: e.tokens ? this.parseInlineTokens(e.tokens) : []
                };
            case "text":
                return {
                    type: "text",
                    text: e.text || ""
                };
            case "html":
                return this.parseHTMLToken(e);
            case "space":
                return null;
            default:
                return e.tokens ? this.parseTokens(e.tokens) : null;
        }
    }
    parseHTMLToken(e) {
        const t = e.text || e.raw || "";
        if (!t.trim()) return null;
        try {
            const n = yAg(t, this.baseExtensions);
            return n.type === "doc" && n.content ? e.block ? n.content : n.content.length === 1 && n.content[0].type === "paragraph" && n.content[0].content ? n.content[0].content : n.content : n;
        } catch (n) {
            throw new Error(`Failed to parse HTML in markdown: ${n}`);
        }
    }
    renderNodeToMarkdown(e, t, n = 0, i = 0) {
        var r;
        if (e.type === "text") return e.text || "";
        if (!e.type) return "";
        const s = this.getHandlerForToken(e.type);
        if (!s) return "";
        const o = {
            renderChildren: (l, u)=>{
                const h = s.isIndenting ? i + 1 : i;
                return !Array.isArray(l) && l.content ? this.renderNodes(l.content, e, u || "", n, h) : this.renderNodes(l, e, u || "", n, h);
            },
            indent: (l)=>this.indentString + l,
            wrapInBlock: aiv
        }, a = {
            index: n,
            level: i,
            parentType: t?.type,
            meta: {}
        };
        return ((r = s.renderMarkdown) == null ? void 0 : r.call(s, e, o, a)) || "";
    }
    renderNodes(e, t, n = "", i = 0, r = 0) {
        return Array.isArray(e) ? this.renderNodesWithMarkBoundaries(e, t, n, r) : e.type ? this.renderNodeToMarkdown(e, t, i, r) : "";
    }
    renderNodesWithMarkBoundaries(e, t, n = "", i = 0) {
        const r = [], s = new Map;
        return e.forEach((o, a)=>{
            const c = a < e.length - 1 ? e[a + 1] : null;
            if (o.type) if (o.type === "text") {
                let l = o.text || "";
                const u = new Map((o.marks || []).map((b)=>[
                        b.type,
                        b
                    ])), h = civ(s, u), p = liv(s, u);
                h.forEach((b)=>{
                    const y = s.get(b), T = this.getMarkClosing(b, y);
                    T && (l += T), s.delete(b);
                });
                let g = "";
                if (p.length > 0) {
                    const b = l.match(/^(\s+)/);
                    b && (g = b[1], l = l.slice(g.length));
                }
                p.forEach(({ type: b, mark: y })=>{
                    const T = this.getMarkOpening(b, y);
                    T && (l = T + l), s.set(b, y);
                }), l = g + l;
                const f = uiv(s, u, c, this.markSetsEqual.bind(this));
                let v = "";
                if (f.length > 0) {
                    const b = l.match(/(\s+)$/);
                    b && (v = b[1], l = l.slice(0, -v.length));
                }
                f.forEach((b)=>{
                    const y = s.get(b), T = this.getMarkClosing(b, y);
                    T && (l += T), s.delete(b);
                }), l += v, r.push(l);
            } else {
                const l = new Map(s), u = div(s, this.getMarkClosing.bind(this)), h = this.renderNodeToMarkdown(o, t, a, i), p = o.type === "hardBreak" ? "" : hiv(l, s, this.getMarkOpening.bind(this));
                r.push(u + h + p);
            }
        }), r.join(n);
    }
    getMarkOpening(e, t) {
        const n = this.getHandlersForNodeType(e), i = n.length > 0 ? n[0] : void 0;
        if (!i || !i.renderMarkdown) return "";
        const r = "\uE000__TIPTAP_MARKDOWN_PLACEHOLDER__\uE001", s = {
            type: e,
            attrs: t.attrs || {},
            content: [
                {
                    type: "text",
                    text: r
                }
            ]
        };
        try {
            const o = i.renderMarkdown(s, {
                renderChildren: ()=>r,
                indent: (c)=>c,
                wrapInBlock: (c, l)=>c + l
            }, {
                index: 0,
                level: 0,
                parentType: "text",
                meta: {}
            }), a = o.indexOf(r);
            return a >= 0 ? o.substring(0, a) : "";
        } catch (o) {
            throw new Error(`Failed to get mark opening for ${e}: ${o}`);
        }
    }
    getMarkClosing(e, t) {
        const n = this.getHandlersForNodeType(e), i = n.length > 0 ? n[0] : void 0;
        if (!i || !i.renderMarkdown) return "";
        const r = "\uE000__TIPTAP_MARKDOWN_PLACEHOLDER__\uE001", s = {
            type: e,
            attrs: t.attrs || {},
            content: [
                {
                    type: "text",
                    text: r
                }
            ]
        };
        try {
            const o = i.renderMarkdown(s, {
                renderChildren: ()=>r,
                indent: (l)=>l,
                wrapInBlock: (l, u)=>l + u
            }, {
                index: 0,
                level: 0,
                parentType: "text",
                meta: {}
            }), a = o.indexOf(r), c = a + r.length;
            return a >= 0 ? o.substring(c) : "";
        } catch (o) {
            throw new Error(`Failed to get mark closing for ${e}: ${o}`);
        }
    }
    markSetsEqual(e, t) {
        return e.size !== t.size ? !1 : Array.from(e.keys()).every((n)=>t.has(n));
    }
}, d3s = Ydu, Xdu = bS.create({
    name: "markdown",
    addOptions () {
        return {
            indentation: {
                style: "space",
                size: 2
            },
            marked: void 0,
            markedOptions: {}
        };
    },
    addCommands () {
        return {
            setContent: (e, t)=>{
                if (!t?.contentType || JFi(e, t?.contentType) !== "markdown" || !this.editor.markdown) return xfe.setContent(e, t);
                const i = this.editor.markdown.parse(e);
                return xfe.setContent(i, t);
            },
            insertContent: (e, t)=>{
                if (!t?.contentType || JFi(e, t?.contentType) !== "markdown" || !this.editor.markdown) return xfe.insertContent(e, t);
                const i = this.editor.markdown.parse(e);
                return xfe.insertContent(i, t);
            },
            insertContentAt: (e, t, n)=>{
                if (!n?.contentType || JFi(t, n?.contentType) !== "markdown" || !this.editor.markdown) return xfe.insertContentAt(e, t, n);
                const r = this.editor.markdown.parse(t);
                return xfe.insertContentAt(e, r, n);
            }
        };
    },
    addStorage () {
        return {
            manager: new d3s({
                indentation: this.options.indentation,
                marked: this.options.marked,
                markedOptions: this.options.markedOptions,
                extensions: []
            })
        };
    },
    onBeforeCreate () {
        if (this.editor.markdown) {
            console.error("[tiptap][markdown]: There is already a `markdown` property on the editor instance. This might lead to unexpected behavior.");
            return;
        }
        if (this.storage.manager = new d3s({
            indentation: this.options.indentation,
            marked: this.options.marked,
            markedOptions: this.options.markedOptions,
            extensions: this.editor.extensionManager.baseExtensions
        }), this.editor.markdown = this.storage.manager, this.editor.getMarkdown = ()=>this.storage.manager.serialize(this.editor.getJSON()), !this.editor.options.contentType || JFi(this.editor.options.content, this.editor.options.contentType) !== "markdown") return;
        if (!this.editor.markdown) throw new Error('[tiptap][markdown]: The `contentType` option is set to "markdown", but the Markdown extension is not added to the editor. Please add the Markdown extension to use this feature.');
        if (this.editor.options.content === void 0 || typeof this.editor.options.content != "string") throw new Error('[tiptap][markdown]: The `contentType` option is set to "markdown", but the initial content is not a string. Please provide the initial content as a markdown string.');
        const t = this.editor.markdown.parse(this.editor.options.content);
        this.editor.options.content = t;
    }
});

}
