import { MS } from "./default.js";
import { L4, jfe } from "./index_47.js";
import { i } from "./plugin-brand-icon.js";
function Acr() {
    this.buffer();
}
function Tcr(r) {
    this.enter({
        type: "footnoteReference",
        identifier: "",
        label: ""
    }, r);
}
function $cr() {
    this.buffer();
}
function Icr(r) {
    this.enter({
        type: "footnoteDefinition",
        identifier: "",
        label: "",
        children: []
    }, r);
}
function Ncr(r) {
    const e = this.resume(), a = this.stack[this.stack.length - 1];
    a.type, a.identifier = L4(this.sliceSerialize(r)).toLowerCase(), a.label = e;
}
function Mcr(r) {
    this.exit(r);
}
function Rcr(r) {
    const e = this.resume(), a = this.stack[this.stack.length - 1];
    a.type, a.identifier = L4(this.sliceSerialize(r)).toLowerCase(), a.label = e;
}
function Pcr(r) {
    this.exit(r);
}
function jcr() {
    return "[";
}
function LMt(r, e, a, s) {
    const l = a.createTracker(s);
    let u = l.move("[^");
    const p = a.enter("footnoteReference"), m = a.enter("reference");
    return u += l.move(a.safe(a.associationId(r), {
        after: "]",
        before: u
    })), m(), p(), u += l.move("]"), u;
}
function Lcr() {
    return {
        enter: {
            gfmFootnoteCallString: Acr,
            gfmFootnoteCall: Tcr,
            gfmFootnoteDefinitionLabelString: $cr,
            gfmFootnoteDefinition: Icr
        },
        exit: {
            gfmFootnoteCallString: Ncr,
            gfmFootnoteCall: Mcr,
            gfmFootnoteDefinitionLabelString: Rcr,
            gfmFootnoteDefinition: Pcr
        }
    };
}
function Dcr(r) {
    let e = !1;
    return r && r.firstLineBlank && (e = !0), {
        handlers: {
            footnoteDefinition: a,
            footnoteReference: LMt
        },
        unsafe: [
            {
                character: "[",
                inConstruct: [
                    "label",
                    "phrasing",
                    "reference"
                ]
            }
        ]
    };
    function a(s, l, u, p) {
        const m = u.createTracker(p);
        let b = m.move("[^");
        const g = u.enter("footnoteDefinition"), _ = u.enter("label");
        return b += m.move(u.safe(u.associationId(s), {
            before: b,
            after: "]"
        })), _(), b += m.move("]:"), s.children && s.children.length > 0 && (m.shift(4), b += m.move((e ? `
` : " ") + u.indentLines(u.containerFlow(s, m.current()), e ? DMt : Fcr))), g(), b;
    }
    i(a, "footnoteDefinition");
}
function Fcr(r, e, a) {
    return e === 0 ? r : DMt(r, e, a);
}
function DMt(r, e, a) {
    return (a ? "" : "    ") + r;
}
export { $cr, Acr, DMt, Dcr, Fcr, Icr, LMt, Lcr, Mcr, Ncr, Pcr, Rcr, Tcr, jcr };
var __wakaru_zvi_initialized = false;
export function zvi() {
if (__wakaru_zvi_initialized) return;
__wakaru_zvi_initialized = true;
MS(), jfe(), LMt.peek = jcr, i(Acr, "enterFootnoteCallString"), i(Tcr, "enterFootnoteCall"), i($cr, "enterFootnoteDefinitionLabelString"), i(Icr, "enterFootnoteDefinition"), i(Ncr, "exitFootnoteCallString"), i(Mcr, "exitFootnoteCall"), i(Rcr, "exitFootnoteDefinitionLabelString"), i(Pcr, "exitFootnoteDefinition"), i(jcr, "footnoteReferencePeek"), i(LMt, "footnoteReference"), i(Lcr, "gfmFootnoteFromMarkdown"), i(Dcr, "gfmFootnoteToMarkdown"), i(Fcr, "mapExceptFirst"), i(DMt, "mapAll");

}
