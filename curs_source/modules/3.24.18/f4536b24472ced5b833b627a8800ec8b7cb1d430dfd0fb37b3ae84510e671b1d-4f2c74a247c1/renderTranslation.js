import { Sc, s2 } from "./TranslationParserError.js";
import { a } from "./business-error.js";
import { l2, m2 } from "./htmlEntityDecoder.js";
import { d2, u2 } from "./tokenizer.js";
import js from "./react-runtime/react/esm-index-production.js";
var p2, f2;
export { f2, p2 };
var __wakaru_w6_initialized = false;
export function w6() {
if (__wakaru_w6_initialized) return;
__wakaru_w6_initialized = true;
s2(), d2(), m2(), p2 = a((e, t, r)=>{
    const { type: n, props: o = {} } = e;
    if (o.children && Array.isArray(o.children) && r) {
        const { children: i, ...s } = o;
        return js.createElement(n, s, ...t);
    }
    return t.length === 0 ? js.createElement(n, o) : t.length === 1 ? js.createElement(n, o, t[0]) : js.createElement(n, o, ...t);
}, "renderDeclarationNode"), f2 = a((e, t = [])=>{
    if (!e) return [];
    const r = u2(e), n = [], o = [], i = new Set, s = a(()=>{
        if (o.length === 0) return t;
        const c = o[o.length - 1];
        return c.declaration.props?.children && Array.isArray(c.declaration.props.children) ? c.declaration.props.children : c.declarations;
    }, "getCurrentDeclarations");
    if (r.forEach((c)=>{
        switch(c.type){
            case "Text":
                {
                    const l = l2(c.value);
                    (o.length > 0 ? o[o.length - 1].children : n).push(l);
                }
                break;
            case "TagOpen":
                {
                    const { tagNumber: l } = c, m = s(), u = m[l];
                    if (!u) {
                        i.add(l);
                        const d = `<${l}>`;
                        (o.length > 0 ? o[o.length - 1].children : n).push(d);
                        break;
                    }
                    o.push({
                        tagNumber: l,
                        children: [],
                        position: c.position,
                        declaration: u,
                        declarations: m
                    });
                }
                break;
            case "TagClose":
                {
                    const { tagNumber: l } = c;
                    if (i.has(l)) {
                        const p = `</${l}>`;
                        (o.length > 0 ? o[o.length - 1].children : n).push(p), i.delete(l);
                        break;
                    }
                    if (o.length === 0) throw new Sc(`Unexpected closing tag </${l}> at position ${c.position}`, c.position, e);
                    const m = o.pop();
                    if (m.tagNumber !== l) throw new Sc(`Mismatched tags: expected </${m.tagNumber}> but got </${l}> at position ${c.position}`, c.position, e);
                    const u = p2(m.declaration, m.children, m.declarations);
                    (o.length > 0 ? o[o.length - 1].children : n).push(u);
                }
                break;
        }
    }), o.length > 0) {
        const c = o[o.length - 1];
        throw new Sc(`Unclosed tag <${c.tagNumber}> at position ${c.position}`, c.position, e);
    }
    return n;
}, "renderTranslation");

}
