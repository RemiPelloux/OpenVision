import { M0 } from "./index_18.js";
import { A_, BO, I_, If, LAg, P0, cel, sel, zS } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Njl;
export { Njl };
var __wakaru_zRf_initialized = false;
export function zRf() {
if (__wakaru_zRf_initialized) return;
__wakaru_zRf_initialized = true;
x(), A_(), M0(), zS(), Njl = BO.create({
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
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "hr",
            P0(this.options.HTMLAttributes, e)
        ];
    },
    markdownTokenName: "hr",
    parseMarkdown: (e, t)=>t.createNode("horizontalRule"),
    renderMarkdown: ()=>"---",
    addCommands () {
        return {
            setHorizontalRule: ()=>({ chain: e, state: t })=>{
                    if (!LAg(t, t.schema.nodes[this.name])) return !1;
                    const { selection: n } = t, { $to: i } = n, r = e();
                    return sel(n) ? r.insertContentAt(i.pos, {
                        type: this.name
                    }) : r.insertContent({
                        type: this.name
                    }), r.command(({ state: s, tr: o, dispatch: a })=>{
                        if (a) {
                            const { $to: c } = o.selection, l = c.end();
                            if (c.nodeAfter) c.nodeAfter.isTextblock ? o.setSelection(If.create(o.doc, c.pos + 1)) : c.nodeAfter.isBlock ? o.setSelection(I_.create(o.doc, c.pos)) : o.setSelection(If.create(o.doc, c.pos));
                            else {
                                const u = s.schema.nodes[this.options.nextNodeType] || c.parent.type.contentMatch.defaultType, h = u?.create();
                                h && (o.insert(l, h), o.setSelection(If.create(o.doc, l + 1)));
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
            cel({
                find: /^(?:---|\u2014-|___\s|\*\*\*\s)$/,
                type: this.type
            })
        ];
    }
});

}
