import { Aw, Dnh, Fy, Onh, PS, QBy, Q_, fE, o6 } from "./LYd.js";
import { gE } from "./index_23.js";
import { E } from "./tslib.es6.js";
var sJh;
export { sJh };
var __wakaru_a9S_initialized = false;
export function a9S() {
if (__wakaru_a9S_initialized) return;
__wakaru_a9S_initialized = true;
E(), Fy(), gE(), Aw(), sJh = o6.create({
    name: "horizontalRule",
    addOptions () {
        return {
            HTMLAttributes: {},
            nextNodeType: "paragraph"
        };
    },
    group: "block",
    parseHTML () {
        return [
            {
                tag: "hr"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: t }) {
        return [
            "hr",
            fE(this.options.HTMLAttributes, t)
        ];
    },
    markdownTokenName: "hr",
    parseMarkdown: (t, e)=>e.createNode("horizontalRule"),
    renderMarkdown: ()=>"---",
    addCommands () {
        return {
            setHorizontalRule: ()=>({ chain: t, state: e })=>{
                    if (!QBy(e, e.schema.nodes[this.name])) return !1;
                    const { selection: n } = e, { $to: i } = n, r = t();
                    return Dnh(n) ? r.insertContentAt(i.pos, {
                        type: this.name
                    }) : r.insertContent({
                        type: this.name
                    }), r.command(({ state: s, tr: o, dispatch: a })=>{
                        if (a) {
                            const { $to: l } = o.selection, c = l.end();
                            if (l.nodeAfter) l.nodeAfter.isTextblock ? o.setSelection(Q_.create(o.doc, l.pos + 1)) : l.nodeAfter.isBlock ? o.setSelection(PS.create(o.doc, l.pos)) : o.setSelection(Q_.create(o.doc, l.pos));
                            else {
                                const u = s.schema.nodes[this.options.nextNodeType] || l.parent.type.contentMatch.defaultType, d = u?.create();
                                d && (o.insert(c, d), o.setSelection(Q_.create(o.doc, c + 1)));
                            }
                            o.scrollIntoView();
                        }
                        return !0;
                    }).run();
                }
        };
    },
    addInputRules () {
        return [
            Onh({
                find: /^(?:---|\u2014-|___\s|\*\*\*\s)$/,
                type: this.type
            })
        ];
    }
});

}
