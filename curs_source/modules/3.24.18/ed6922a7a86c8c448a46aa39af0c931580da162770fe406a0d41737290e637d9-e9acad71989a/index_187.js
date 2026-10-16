import { A_, BO, Mtl, P0, cel } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Bhu, Uhu, $hu;
export { $hu, Bhu, Uhu };
var __wakaru_hrv_initialized = false;
export function hrv() {
if (__wakaru_hrv_initialized) return;
__wakaru_hrv_initialized = true;
x(), A_(), Bhu = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, Uhu = BO.create({
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
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "img",
            P0(this.options.HTMLAttributes, e)
        ];
    },
    parseMarkdown: (e, t)=>t.createNode("image", {
            src: e.href,
            title: e.title,
            alt: e.text
        }),
    renderMarkdown: (e)=>{
        var t, n, i, r, s, o;
        const a = (n = (t = e.attrs) == null ? void 0 : t.src) != null ? n : "", c = (r = (i = e.attrs) == null ? void 0 : i.alt) != null ? r : "", l = (o = (s = e.attrs) == null ? void 0 : s.title) != null ? o : "";
        return l ? `![${c}](${a} "${l}")` : `![${c}](${a})`;
    },
    addNodeView () {
        if (!this.options.resize || !this.options.resize.enabled || typeof document > "u") return null;
        const { directions: e, minWidth: t, minHeight: n, alwaysPreserveAspectRatio: i } = this.options.resize;
        return ({ node: r, getPos: s, HTMLAttributes: o, editor: a })=>{
            const c = document.createElement("img");
            Object.entries(o).forEach(([h, p])=>{
                if (p != null) switch(h){
                    case "width":
                    case "height":
                        break;
                    default:
                        c.setAttribute(h, p);
                        break;
                }
            }), c.src = o.src;
            const l = new Mtl({
                element: c,
                editor: a,
                node: r,
                getPos: s,
                onResize: (h, p)=>{
                    c.style.width = `${h}px`, c.style.height = `${p}px`;
                },
                onCommit: (h, p)=>{
                    const g = s();
                    g !== void 0 && this.editor.chain().setNodeSelection(g).updateAttributes(this.name, {
                        width: h,
                        height: p
                    }).run();
                },
                onUpdate: (h, p, g)=>h.type === r.type,
                options: {
                    directions: e,
                    min: {
                        width: t,
                        height: n
                    },
                    preserveAspectRatio: i === !0
                }
            }), u = l.dom;
            return u.style.visibility = "hidden", u.style.pointerEvents = "none", c.onload = ()=>{
                u.style.visibility = "", u.style.pointerEvents = "";
            }, l;
        };
    },
    addCommands () {
        return {
            setImage: (e)=>({ commands: t })=>t.insertContent({
                        type: this.name,
                        attrs: e
                    })
        };
    },
    addInputRules () {
        return [
            cel({
                find: Bhu,
                type: this.type,
                getAttributes: (e)=>{
                    const [, , t, n, i] = e;
                    return {
                        src: n,
                        alt: t,
                        title: i
                    };
                }
            })
        ];
    }
}), $hu = Uhu;

}
