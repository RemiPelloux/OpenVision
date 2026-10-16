import { Fy, Onh, fE, o6, orh } from "./LYd.js";
import { E } from "./tslib.es6.js";
var uAp, dAp, hAp;
export { dAp, hAp, uAp };
var __wakaru_$C1_initialized = false;
export function $C1() {
if (__wakaru_$C1_initialized) return;
__wakaru_$C1_initialized = true;
E(), Fy(), uAp = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, dAp = o6.create({
    name: "image",
    addOptions () {
        return {
            inline: !1,
            allowBase64: !1,
            HTMLAttributes: {},
            resize: !1
        };
    },
    inline () {
        return this.options.inline;
    },
    group () {
        return this.options.inline ? "inline" : "block";
    },
    draggable: !0,
    addAttributes () {
        return {
            src: {
                default: null
            },
            alt: {
                default: null
            },
            title: {
                default: null
            },
            width: {
                default: null
            },
            height: {
                default: null
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
            }
        ];
    },
    renderHTML ({ HTMLAttributes: t }) {
        return [
            "img",
            fE(this.options.HTMLAttributes, t)
        ];
    },
    parseMarkdown: (t, e)=>e.createNode("image", {
            src: t.href,
            title: t.title,
            alt: t.text
        }),
    renderMarkdown: (t)=>{
        var e, n, i, r, s, o;
        const a = (n = (e = t.attrs) == null ? void 0 : e.src) != null ? n : "", l = (r = (i = t.attrs) == null ? void 0 : i.alt) != null ? r : "", c = (o = (s = t.attrs) == null ? void 0 : s.title) != null ? o : "";
        return c ? `![${l}](${a} "${c}")` : `![${l}](${a})`;
    },
    addNodeView () {
        if (!this.options.resize || !this.options.resize.enabled || typeof document > "u") return null;
        const { directions: t, minWidth: e, minHeight: n, alwaysPreserveAspectRatio: i } = this.options.resize;
        return ({ node: r, getPos: s, HTMLAttributes: o, editor: a })=>{
            const l = document.createElement("img");
            Object.entries(o).forEach(([d, h])=>{
                if (h != null) switch(d){
                    case "width":
                    case "height":
                        break;
                    default:
                        l.setAttribute(d, h);
                        break;
                }
            }), l.src = o.src;
            const c = new orh({
                element: l,
                editor: a,
                node: r,
                getPos: s,
                onResize: (d, h)=>{
                    l.style.width = `${d}px`, l.style.height = `${h}px`;
                },
                onCommit: (d, h)=>{
                    const p = s();
                    p !== void 0 && this.editor.chain().setNodeSelection(p).updateAttributes(this.name, {
                        width: d,
                        height: h
                    }).run();
                },
                onUpdate: (d, h, p)=>d.type === r.type,
                options: {
                    directions: t,
                    min: {
                        width: e,
                        height: n
                    },
                    preserveAspectRatio: i === !0
                }
            }), u = c.dom;
            return u.style.visibility = "hidden", u.style.pointerEvents = "none", l.onload = ()=>{
                u.style.visibility = "", u.style.pointerEvents = "";
            }, c;
        };
    },
    addCommands () {
        return {
            setImage: (t)=>({ commands: e })=>e.insertContent({
                        type: this.name,
                        attrs: t
                    })
        };
    },
    addInputRules () {
        return [
            Onh({
                find: uAp,
                type: this.type,
                getAttributes: (t)=>{
                    const [, , e, n, i] = t;
                    return {
                        src: n,
                        alt: e,
                        title: i
                    };
                }
            })
        ];
    }
}), hAp = dAp;

}
