import { ASt, Aw, Fy, R8t, fE } from "./LYd.js";
import { gE } from "./index_23.js";
import { AQh, J4S, Q4S, V4S, Y4S, Z4S, r$t, xQh } from "./ipa.js";
import { E } from "./tslib.es6.js";
var o9r, UQh, jQh, $Qh, _1a, a9r;
export { $Qh, UQh, _1a, a9r, jQh, o9r };
var __wakaru_l9r_initialized = false;
export function l9r() {
if (__wakaru_l9r_initialized) return;
__wakaru_l9r_initialized = true;
E(), Fy(), Y4S(), gE(), Aw(), o9r = "[\0- \xA0\u1680\u180E\u2000-\u2029\u205F\u3000]", UQh = new RegExp(o9r), jQh = new RegExp(`${o9r}$`), $Qh = new RegExp(o9r, "g"), _1a = ASt.create({
    name: "link",
    priority: 1e3,
    keepOnSplit: !1,
    exitable: !0,
    onCreate () {
        this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((t)=>{
            if (typeof t == "string") {
                xQh(t);
                return;
            }
            xQh(t.scheme, t.optionalSlashes);
        });
    },
    onDestroy () {
        V4S();
    },
    inclusive () {
        return this.options.autolink;
    },
    addOptions () {
        return {
            openOnClick: !0,
            enableClickSelection: !1,
            linkOnPaste: !0,
            autolink: !0,
            protocols: [],
            defaultProtocol: "http",
            HTMLAttributes: {
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: null
            },
            isAllowedUri: (t, e)=>!!r$t(t, e.protocols),
            validate: (t)=>!!t,
            shouldAutoLink: (t)=>!!t
        };
    },
    addAttributes () {
        return {
            href: {
                default: null,
                parseHTML (t) {
                    return t.getAttribute("href");
                }
            },
            target: {
                default: this.options.HTMLAttributes.target
            },
            rel: {
                default: this.options.HTMLAttributes.rel
            },
            class: {
                default: this.options.HTMLAttributes.class
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: "a[href]",
                getAttrs: (t)=>{
                    const e = t.getAttribute("href");
                    return !e || !this.options.isAllowedUri(e, {
                        defaultValidate: (n)=>!!r$t(n, this.options.protocols),
                        protocols: this.options.protocols,
                        defaultProtocol: this.options.defaultProtocol
                    }) ? !1 : null;
                }
            }
        ];
    },
    renderHTML ({ HTMLAttributes: t }) {
        return this.options.isAllowedUri(t.href, {
            defaultValidate: (e)=>!!r$t(e, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
        }) ? [
            "a",
            fE(this.options.HTMLAttributes, t),
            0
        ] : [
            "a",
            fE(this.options.HTMLAttributes, {
                ...t,
                href: ""
            }),
            0
        ];
    },
    markdownTokenName: "link",
    parseMarkdown: (t, e)=>e.applyMark("link", e.parseInline(t.tokens || []), {
            href: t.href,
            title: t.title || null
        }),
    renderMarkdown: (t, e)=>{
        var n;
        const i = ((n = t.attrs) == null ? void 0 : n.href) || "";
        return `[${e.renderChildren(t)}](${i})`;
    },
    addCommands () {
        return {
            setLink: (t)=>({ chain: e })=>{
                    const { href: n } = t;
                    return this.options.isAllowedUri(n, {
                        defaultValidate: (i)=>!!r$t(i, this.options.protocols),
                        protocols: this.options.protocols,
                        defaultProtocol: this.options.defaultProtocol
                    }) ? e().setMark(this.name, t).setMeta("preventAutolink", !0).run() : !1;
                },
            toggleLink: (t)=>({ chain: e })=>{
                    const { href: n } = t || {};
                    return n && !this.options.isAllowedUri(n, {
                        defaultValidate: (i)=>!!r$t(i, this.options.protocols),
                        protocols: this.options.protocols,
                        defaultProtocol: this.options.defaultProtocol
                    }) ? !1 : e().toggleMark(this.name, t, {
                        extendEmptyMarkRange: !0
                    }).setMeta("preventAutolink", !0).run();
                },
            unsetLink: ()=>({ chain: t })=>t().unsetMark(this.name, {
                        extendEmptyMarkRange: !0
                    }).setMeta("preventAutolink", !0).run()
        };
    },
    addPasteRules () {
        return [
            R8t({
                find: (t)=>{
                    const e = [];
                    if (t) {
                        const { protocols: n, defaultProtocol: i } = this.options, r = AQh(t).filter((s)=>s.isLink && this.options.isAllowedUri(s.value, {
                                defaultValidate: (o)=>!!r$t(o, n),
                                protocols: n,
                                defaultProtocol: i
                            }));
                        r.length && r.forEach((s)=>{
                            this.options.shouldAutoLink(s.value) && e.push({
                                text: s.value,
                                data: {
                                    href: s.href
                                },
                                index: s.start
                            });
                        });
                    }
                    return e;
                },
                type: this.type,
                getAttributes: (t)=>{
                    var e;
                    return {
                        href: (e = t.data) == null ? void 0 : e.href
                    };
                }
            })
        ];
    },
    addProseMirrorPlugins () {
        const t = [], { protocols: e, defaultProtocol: n } = this.options;
        return this.options.autolink && t.push(Z4S({
            type: this.type,
            defaultProtocol: this.options.defaultProtocol,
            validate: (i)=>this.options.isAllowedUri(i, {
                    defaultValidate: (r)=>!!r$t(r, e),
                    protocols: e,
                    defaultProtocol: n
                }),
            shouldAutoLink: this.options.shouldAutoLink
        })), t.push(Q4S({
            type: this.type,
            editor: this.editor,
            openOnClick: this.options.openOnClick === "whenNotEditable" ? !0 : this.options.openOnClick,
            enableClickSelection: this.options.enableClickSelection
        })), this.options.linkOnPaste && t.push(J4S({
            editor: this.editor,
            defaultProtocol: this.options.defaultProtocol,
            type: this.type,
            shouldAutoLink: this.options.shouldAutoLink
        })), t;
    }
}), a9r = _1a;

}
