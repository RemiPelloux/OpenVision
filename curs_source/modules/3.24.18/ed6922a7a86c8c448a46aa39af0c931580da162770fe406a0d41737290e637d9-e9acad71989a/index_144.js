import { BRf, FRf, I_t, NRf, PRf, URf, rjl, sjl } from "./f0s.js";
import { M0 } from "./index_18.js";
import { A_, P0, iYe, vgt, zS } from "./qIc.js";
import { x } from "./tslib.es6.js";
var zLi, gjl, fjl, vjl, ERs, KLi;
export { ERs, KLi, fjl, gjl, vjl, zLi };
var __wakaru_YLi_initialized = false;
export function YLi() {
if (__wakaru_YLi_initialized) return;
__wakaru_YLi_initialized = true;
x(), A_(), NRf(), M0(), zS(), zLi = "[\0- \xA0\u1680\u180E\u2000-\u2029\u205F\u3000]", gjl = new RegExp(zLi), fjl = new RegExp(`${zLi}$`), vjl = new RegExp(zLi, "g"), ERs = iYe.create({
    name: "link",
    priority: 1e3,
    keepOnSplit: !1,
    exitable: !0,
    onCreate () {
        this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((e)=>{
            if (typeof e == "string") {
                rjl(e);
                return;
            }
            rjl(e.scheme, e.optionalSlashes);
        });
    },
    onDestroy () {
        PRf();
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
            isAllowedUri: (e, t)=>!!I_t(e, t.protocols),
            validate: (e)=>!!e,
            shouldAutoLink: (e)=>!!e
        };
    },
    addAttributes () {
        return {
            href: {
                default: null,
                parseHTML (e) {
                    return e.getAttribute("href");
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
                getAttrs: (e)=>{
                    const t = e.getAttribute("href");
                    return !t || !this.options.isAllowedUri(t, {
                        defaultValidate: (n)=>!!I_t(n, this.options.protocols),
                        protocols: this.options.protocols,
                        defaultProtocol: this.options.defaultProtocol
                    }) ? !1 : null;
                }
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return this.options.isAllowedUri(e.href, {
            defaultValidate: (t)=>!!I_t(t, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
        }) ? [
            "a",
            P0(this.options.HTMLAttributes, e),
            0
        ] : [
            "a",
            P0(this.options.HTMLAttributes, {
                ...e,
                href: ""
            }),
            0
        ];
    },
    markdownTokenName: "link",
    parseMarkdown: (e, t)=>t.applyMark("link", t.parseInline(e.tokens || []), {
            href: e.href,
            title: e.title || null
        }),
    renderMarkdown: (e, t)=>{
        var n;
        const i = ((n = e.attrs) == null ? void 0 : n.href) || "";
        return `[${t.renderChildren(e)}](${i})`;
    },
    addCommands () {
        return {
            setLink: (e)=>({ chain: t })=>{
                    const { href: n } = e;
                    return this.options.isAllowedUri(n, {
                        defaultValidate: (i)=>!!I_t(i, this.options.protocols),
                        protocols: this.options.protocols,
                        defaultProtocol: this.options.defaultProtocol
                    }) ? t().setMark(this.name, e).setMeta("preventAutolink", !0).run() : !1;
                },
            toggleLink: (e)=>({ chain: t })=>{
                    const { href: n } = e || {};
                    return n && !this.options.isAllowedUri(n, {
                        defaultValidate: (i)=>!!I_t(i, this.options.protocols),
                        protocols: this.options.protocols,
                        defaultProtocol: this.options.defaultProtocol
                    }) ? !1 : t().toggleMark(this.name, e, {
                        extendEmptyMarkRange: !0
                    }).setMeta("preventAutolink", !0).run();
                },
            unsetLink: ()=>({ chain: e })=>e().unsetMark(this.name, {
                        extendEmptyMarkRange: !0
                    }).setMeta("preventAutolink", !0).run()
        };
    },
    addPasteRules () {
        return [
            vgt({
                find: (e)=>{
                    const t = [];
                    if (e) {
                        const { protocols: n, defaultProtocol: i } = this.options, r = sjl(e).filter((s)=>s.isLink && this.options.isAllowedUri(s.value, {
                                defaultValidate: (o)=>!!I_t(o, n),
                                protocols: n,
                                defaultProtocol: i
                            }));
                        r.length && r.forEach((s)=>{
                            this.options.shouldAutoLink(s.value) && t.push({
                                text: s.value,
                                data: {
                                    href: s.href
                                },
                                index: s.start
                            });
                        });
                    }
                    return t;
                },
                type: this.type,
                getAttributes: (e)=>{
                    var t;
                    return {
                        href: (t = e.data) == null ? void 0 : t.href
                    };
                }
            })
        ];
    },
    addProseMirrorPlugins () {
        const e = [], { protocols: t, defaultProtocol: n } = this.options;
        return this.options.autolink && e.push(FRf({
            type: this.type,
            defaultProtocol: this.options.defaultProtocol,
            validate: (i)=>this.options.isAllowedUri(i, {
                    defaultValidate: (r)=>!!I_t(r, t),
                    protocols: t,
                    defaultProtocol: n
                }),
            shouldAutoLink: this.options.shouldAutoLink
        })), e.push(BRf({
            type: this.type,
            editor: this.editor,
            openOnClick: this.options.openOnClick === "whenNotEditable" ? !0 : this.options.openOnClick,
            enableClickSelection: this.options.enableClickSelection
        })), this.options.linkOnPaste && e.push(URf({
            editor: this.editor,
            defaultProtocol: this.options.defaultProtocol,
            type: this.type,
            shouldAutoLink: this.options.shouldAutoLink
        })), e;
    }
}), KLi = ERs;

}
