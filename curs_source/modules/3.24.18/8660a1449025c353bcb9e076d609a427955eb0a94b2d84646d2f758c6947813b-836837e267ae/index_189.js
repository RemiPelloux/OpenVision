import { AAr, BBy, Fy, Ob, Rw, xRe } from "./LYd.js";
import { $01, B01, F01, L01, O01, U01, fL, iHr, j01, tMa } from "./ipa.js";
import { E } from "./tslib.es6.js";
var _xp, nMa, bxp;
export { _xp, bxp, nMa };
var __wakaru_H01_initialized = false;
export function H01() {
if (__wakaru_H01_initialized) return;
__wakaru_H01_initialized = true;
E(), Fy(), L01(), _xp = class {
    constructor(t){
        this.baseExtensions = [], this.extensions = [], this.lastParseResult = null;
        var e, n, i, r, s;
        this.markedInstance = (e = t?.marked) != null ? e : fL, this.lexer = new this.markedInstance.Lexer, this.indentStyle = (i = (n = t?.indentation) == null ? void 0 : n.style) != null ? i : "space", this.indentSize = (s = (r = t?.indentation) == null ? void 0 : r.size) != null ? s : 2, this.baseExtensions = t?.extensions || [], t?.markedOptions && typeof this.markedInstance.setOptions == "function" && this.markedInstance.setOptions(t.markedOptions), this.registry = new Map, this.nodeTypeRegistry = new Map, t?.extensions && (this.baseExtensions = t.extensions, AAr(t.extensions).forEach((a)=>this.registerExtension(a, !1))), this.lexer = new this.markedInstance.Lexer;
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
    registerExtension(t, e = !0) {
        var n, i;
        this.extensions.push(t);
        const r = t.name, s = Ob(t, "markdownTokenName") || r, o = Ob(t, "parseMarkdown"), a = Ob(t, "renderMarkdown"), l = Ob(t, "markdownTokenizer"), c = (n = Ob(t, "markdownOptions")) != null ? n : null, u = (i = c?.indentsContent) != null ? i : !1, d = {
            tokenName: s,
            nodeName: r,
            parseMarkdown: o,
            renderMarkdown: a,
            isIndenting: u,
            tokenizer: l
        };
        if (s && o) {
            const h = this.registry.get(s) || [];
            h.push(d), this.registry.set(s, h);
        }
        if (a) {
            const h = this.nodeTypeRegistry.get(r) || [];
            h.push(d), this.nodeTypeRegistry.set(r, h);
        }
        l && this.hasMarked() && (this.registerTokenizer(l), e && (this.lexer = new this.markedInstance.Lexer));
    }
    registerTokenizer(t) {
        if (!this.hasMarked()) return;
        const { name: e, start: n, level: i = "inline", tokenize: r } = t, a = {
            inlineTokens: (u)=>this.lexer.inlineTokens(u),
            blockTokens: (u)=>this.lexer.blockTokens(u)
        };
        let l;
        n ? l = typeof n == "function" ? n : (u)=>u.indexOf(n) : l = (u)=>{
            const d = r(u, [], a);
            return d && d.raw ? u.indexOf(d.raw) : -1;
        };
        const c = {
            name: e,
            level: i,
            start: l,
            tokenizer: (u, d)=>{
                const h = r(u, d, a);
                if (h && h.type) return {
                    ...h,
                    type: h.type || e,
                    raw: h.raw || "",
                    tokens: h.tokens || []
                };
            },
            childTokens: []
        };
        this.markedInstance.use({
            extensions: [
                c
            ]
        });
    }
    getHandlersForToken(t) {
        try {
            return this.registry.get(t) || [];
        } catch  {
            return [];
        }
    }
    getHandlerForToken(t) {
        const e = this.getHandlersForToken(t);
        if (e.length > 0) return e[0];
        const n = this.getHandlersForNodeType(t);
        return n.length > 0 ? n[0] : void 0;
    }
    getHandlersForNodeType(t) {
        try {
            return this.nodeTypeRegistry.get(t) || [];
        } catch  {
            return [];
        }
    }
    serialize(t) {
        return t ? Array.isArray(t) ? this.renderNodes(t, t) : this.renderNodes(t, t) : "";
    }
    parse(t) {
        if (!this.hasMarked()) throw new Error("No marked instance available for parsing");
        const e = this.markedInstance.lexer(t);
        return {
            type: "doc",
            content: this.parseTokens(e)
        };
    }
    parseTokens(t) {
        return t.map((e)=>this.parseToken(e)).filter((e)=>e !== null).flatMap((e)=>Array.isArray(e) ? e : [
                e
            ]);
    }
    parseToken(t) {
        if (!t.type) return null;
        if (t.type === "list") return this.parseListToken(t);
        const e = this.getHandlersForToken(t.type), n = this.createParseHelpers();
        if (e.find((r)=>{
            if (!r.parseMarkdown) return !1;
            const s = r.parseMarkdown(t, n), o = this.normalizeParseResult(s);
            return o && (!Array.isArray(o) || o.length > 0) ? (this.lastParseResult = o, !0) : !1;
        }) && this.lastParseResult) {
            const r = this.lastParseResult;
            return this.lastParseResult = null, r;
        }
        return this.parseFallbackToken(t);
    }
    parseListToken(t) {
        if (!t.items || t.items.length === 0) return this.parseTokenWithHandlers(t);
        const e = t.items.some((a)=>tMa(a).isTask), n = t.items.some((a)=>!tMa(a).isTask);
        if (!e || !n || this.getHandlersForToken("taskList").length === 0) return this.parseTokenWithHandlers(t);
        const i = [];
        let r = [], s = null;
        for(let a = 0; a < t.items.length; a += 1){
            const l = t.items[a], { isTask: c, checked: u, indentLevel: d } = tMa(l);
            let h = l;
            if (c) {
                const f = (l.raw || l.text || "").split(`
`), _ = f[0].match(/^\s*[-+*]\s+\[([ xX])\]\s+(.*)$/), b = _ ? _[2] : "";
                let y = [];
                if (f.length > 1 && f.slice(1).join(`
`).trim()) {
                    const k = f.slice(1), C = k.filter((T)=>T.trim());
                    if (C.length > 0) {
                        const T = Math.min(...C.map((P)=>P.length - P.trimStart().length)), A = k.map((P)=>P.trim() ? P.slice(T) : "").join(`
`).trim();
                        A && (y = this.markedInstance.lexer(`${A}
`));
                    }
                }
                h = {
                    type: "taskItem",
                    raw: "",
                    mainContent: b,
                    indentLevel: d,
                    checked: u ?? !1,
                    text: b,
                    tokens: this.lexer.inlineTokens(b),
                    nestedTokens: y
                };
            }
            const p = c ? "taskList" : "list";
            s !== p ? (r.length > 0 && i.push({
                type: s,
                items: r
            }), r = [
                h
            ], s = p) : r.push(h);
        }
        r.length > 0 && i.push({
            type: s,
            items: r
        });
        const o = [];
        for(let a = 0; a < i.length; a += 1){
            const l = i[a], c = {
                ...t,
                type: l.type,
                items: l.items
            }, u = this.parseToken(c);
            u && (Array.isArray(u) ? o.push(...u) : o.push(u));
        }
        return o.length > 0 ? o : null;
    }
    parseTokenWithHandlers(t) {
        if (!t.type) return null;
        const e = this.getHandlersForToken(t.type), n = this.createParseHelpers();
        if (e.find((r)=>{
            if (!r.parseMarkdown) return !1;
            const s = r.parseMarkdown(t, n), o = this.normalizeParseResult(s);
            return o && (!Array.isArray(o) || o.length > 0) ? (this.lastParseResult = o, !0) : !1;
        }) && this.lastParseResult) {
            const r = this.lastParseResult;
            return this.lastParseResult = null, r;
        }
        return this.parseFallbackToken(t);
    }
    createParseHelpers() {
        return {
            parseInline: (t)=>this.parseInlineTokens(t),
            parseChildren: (t)=>this.parseTokens(t),
            createTextNode: (t, e)=>({
                    type: "text",
                    text: t,
                    marks: e || void 0
                }),
            createNode: (t, e, n)=>{
                const i = {
                    type: t,
                    attrs: e || void 0,
                    content: n || void 0
                };
                return (!e || Object.keys(e).length === 0) && delete i.attrs, i;
            },
            applyMark: (t, e, n)=>({
                    mark: t,
                    content: e,
                    attrs: n && Object.keys(n).length > 0 ? n : void 0
                })
        };
    }
    escapeRegex(t) {
        return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    parseInlineTokens(t) {
        var e, n, i, r;
        const s = [];
        for(let o = 0; o < t.length; o += 1){
            const a = t[o];
            if (a.type === "text") s.push({
                type: "text",
                text: a.text || ""
            });
            else if (a.type === "html") {
                const l = ((n = (e = a.raw) != null ? e : a.text) != null ? n : "").toString(), c = /^<\/[\s]*[\w-]+/i.test(l), u = l.match(/^<[\s]*([\w-]+)(\s|>|\/|$)/i);
                if (!c && u && !/\/>$/.test(l)) {
                    const h = u[1], p = this.escapeRegex(h), g = new RegExp(`^<\\/\\s*${p}\\b`, "i");
                    let f = -1;
                    const _ = [
                        l
                    ];
                    for(let b = o + 1; b < t.length; b += 1){
                        const y = t[b], S = ((r = (i = y.raw) != null ? i : y.text) != null ? r : "").toString();
                        if (_.push(S), y.type === "html" && g.test(S)) {
                            f = b;
                            break;
                        }
                    }
                    if (f !== -1) {
                        const b = _.join(""), y = {
                            type: "html",
                            raw: b,
                            text: b,
                            block: !1
                        }, S = this.parseHTMLToken(y);
                        if (S) {
                            const k = this.normalizeParseResult(S);
                            Array.isArray(k) ? s.push(...k) : k && s.push(k);
                        }
                        o = f;
                        continue;
                    }
                }
                const d = this.parseHTMLToken(a);
                if (d) {
                    const h = this.normalizeParseResult(d);
                    Array.isArray(h) ? s.push(...h) : h && s.push(h);
                }
            } else if (a.type) {
                const l = this.getHandlerForToken(a.type);
                if (l && l.parseMarkdown) {
                    const c = this.createParseHelpers(), u = l.parseMarkdown(a, c);
                    if (this.isMarkResult(u)) {
                        const d = this.applyMarkToContent(u.mark, u.content, u.attrs);
                        s.push(...d);
                    } else {
                        const d = this.normalizeParseResult(u);
                        Array.isArray(d) ? s.push(...d) : d && s.push(d);
                    }
                } else a.tokens && s.push(...this.parseInlineTokens(a.tokens));
            }
        }
        return s;
    }
    applyMarkToContent(t, e, n) {
        return e.map((i)=>{
            if (i.type === "text") {
                const r = i.marks || [], s = n ? {
                    type: t,
                    attrs: n
                } : {
                    type: t
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
                content: i.content ? this.applyMarkToContent(t, i.content, n) : void 0
            };
        });
    }
    isMarkResult(t) {
        return t && typeof t == "object" && "mark" in t;
    }
    normalizeParseResult(t) {
        return t ? this.isMarkResult(t) ? t.content : t : null;
    }
    parseFallbackToken(t) {
        switch(t.type){
            case "paragraph":
                return {
                    type: "paragraph",
                    content: t.tokens ? this.parseInlineTokens(t.tokens) : []
                };
            case "heading":
                return {
                    type: "heading",
                    attrs: {
                        level: t.depth || 1
                    },
                    content: t.tokens ? this.parseInlineTokens(t.tokens) : []
                };
            case "text":
                return {
                    type: "text",
                    text: t.text || ""
                };
            case "html":
                return this.parseHTMLToken(t);
            case "space":
                return null;
            default:
                return t.tokens ? this.parseTokens(t.tokens) : null;
        }
    }
    parseHTMLToken(t) {
        const e = t.text || t.raw || "";
        if (!e.trim()) return null;
        try {
            const n = BBy(e, this.baseExtensions);
            return n.type === "doc" && n.content ? t.block ? n.content : n.content.length === 1 && n.content[0].type === "paragraph" && n.content[0].content ? n.content[0].content : n.content : n;
        } catch (n) {
            throw new Error(`Failed to parse HTML in markdown: ${n}`);
        }
    }
    renderNodeToMarkdown(t, e, n = 0, i = 0) {
        var r;
        if (t.type === "text") return t.text || "";
        if (!t.type) return "";
        const s = this.getHandlerForToken(t.type);
        if (!s) return "";
        const o = {
            renderChildren: (c, u)=>{
                const d = s.isIndenting ? i + 1 : i;
                return !Array.isArray(c) && c.content ? this.renderNodes(c.content, t, u || "", n, d) : this.renderNodes(c, t, u || "", n, d);
            },
            indent: (c)=>this.indentString + c,
            wrapInBlock: O01
        }, a = {
            index: n,
            level: i,
            parentType: e?.type,
            meta: {}
        };
        return ((r = s.renderMarkdown) == null ? void 0 : r.call(s, t, o, a)) || "";
    }
    renderNodes(t, e, n = "", i = 0, r = 0) {
        return Array.isArray(t) ? this.renderNodesWithMarkBoundaries(t, e, n, r) : t.type ? this.renderNodeToMarkdown(t, e, i, r) : "";
    }
    renderNodesWithMarkBoundaries(t, e, n = "", i = 0) {
        const r = [], s = new Map;
        return t.forEach((o, a)=>{
            const l = a < t.length - 1 ? t[a + 1] : null;
            if (o.type) if (o.type === "text") {
                let c = o.text || "";
                const u = new Map((o.marks || []).map((_)=>[
                        _.type,
                        _
                    ])), d = F01(s, u), h = B01(s, u);
                d.forEach((_)=>{
                    const b = s.get(_), y = this.getMarkClosing(_, b);
                    y && (c += y), s.delete(_);
                });
                let p = "";
                if (h.length > 0) {
                    const _ = c.match(/^(\s+)/);
                    _ && (p = _[1], c = c.slice(p.length));
                }
                h.forEach(({ type: _, mark: b })=>{
                    const y = this.getMarkOpening(_, b);
                    y && (c = y + c), s.set(_, b);
                }), c = p + c;
                const g = U01(s, u, l, this.markSetsEqual.bind(this));
                let f = "";
                if (g.length > 0) {
                    const _ = c.match(/(\s+)$/);
                    _ && (f = _[1], c = c.slice(0, -f.length));
                }
                g.forEach((_)=>{
                    const b = s.get(_), y = this.getMarkClosing(_, b);
                    y && (c += y), s.delete(_);
                }), c += f, r.push(c);
            } else {
                const c = new Map(s), u = j01(s, this.getMarkClosing.bind(this)), d = this.renderNodeToMarkdown(o, e, a, i), h = o.type === "hardBreak" ? "" : $01(c, s, this.getMarkOpening.bind(this));
                r.push(u + d + h);
            }
        }), r.join(n);
    }
    getMarkOpening(t, e) {
        const n = this.getHandlersForNodeType(t), i = n.length > 0 ? n[0] : void 0;
        if (!i || !i.renderMarkdown) return "";
        const r = "\uE000__TIPTAP_MARKDOWN_PLACEHOLDER__\uE001", s = {
            type: t,
            attrs: e.attrs || {},
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
                wrapInBlock: (l, c)=>l + c
            }, {
                index: 0,
                level: 0,
                parentType: "text",
                meta: {}
            }), a = o.indexOf(r);
            return a >= 0 ? o.substring(0, a) : "";
        } catch (o) {
            throw new Error(`Failed to get mark opening for ${t}: ${o}`);
        }
    }
    getMarkClosing(t, e) {
        const n = this.getHandlersForNodeType(t), i = n.length > 0 ? n[0] : void 0;
        if (!i || !i.renderMarkdown) return "";
        const r = "\uE000__TIPTAP_MARKDOWN_PLACEHOLDER__\uE001", s = {
            type: t,
            attrs: e.attrs || {},
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
                wrapInBlock: (c, u)=>c + u
            }, {
                index: 0,
                level: 0,
                parentType: "text",
                meta: {}
            }), a = o.indexOf(r), l = a + r.length;
            return a >= 0 ? o.substring(l) : "";
        } catch (o) {
            throw new Error(`Failed to get mark closing for ${t}: ${o}`);
        }
    }
    markSetsEqual(t, e) {
        return t.size !== e.size ? !1 : Array.from(t.keys()).every((n)=>e.has(n));
    }
}, nMa = _xp, bxp = Rw.create({
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
            setContent: (t, e)=>{
                if (!e?.contentType || iHr(t, e?.contentType) !== "markdown" || !this.editor.markdown) return xRe.setContent(t, e);
                const i = this.editor.markdown.parse(t);
                return xRe.setContent(i, e);
            },
            insertContent: (t, e)=>{
                if (!e?.contentType || iHr(t, e?.contentType) !== "markdown" || !this.editor.markdown) return xRe.insertContent(t, e);
                const i = this.editor.markdown.parse(t);
                return xRe.insertContent(i, e);
            },
            insertContentAt: (t, e, n)=>{
                if (!n?.contentType || iHr(e, n?.contentType) !== "markdown" || !this.editor.markdown) return xRe.insertContentAt(t, e, n);
                const r = this.editor.markdown.parse(e);
                return xRe.insertContentAt(t, r, n);
            }
        };
    },
    addStorage () {
        return {
            manager: new nMa({
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
        if (this.storage.manager = new nMa({
            indentation: this.options.indentation,
            marked: this.options.marked,
            markedOptions: this.options.markedOptions,
            extensions: this.editor.extensionManager.baseExtensions
        }), this.editor.markdown = this.storage.manager, this.editor.getMarkdown = ()=>this.storage.manager.serialize(this.editor.getJSON()), !this.editor.options.contentType || iHr(this.editor.options.content, this.editor.options.contentType) !== "markdown") return;
        if (!this.editor.markdown) throw new Error('[tiptap][markdown]: The `contentType` option is set to "markdown", but the Markdown extension is not added to the editor. Please add the Markdown extension to use this feature.');
        if (this.editor.options.content === void 0 || typeof this.editor.options.content != "string") throw new Error('[tiptap][markdown]: The `contentType` option is set to "markdown", but the initial content is not a string. Please provide the initial content as a markdown string.');
        const e = this.editor.markdown.parse(this.editor.options.content);
        this.editor.options.content = e;
    }
});

}
