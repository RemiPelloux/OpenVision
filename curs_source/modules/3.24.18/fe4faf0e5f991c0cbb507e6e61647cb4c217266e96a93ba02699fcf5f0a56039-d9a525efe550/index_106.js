import { KNe, cRt } from "./index.dom.js";
import { jxi } from "./index_105.js";
import { L4, jfe } from "./index_47.js";
import { ZNe } from "./index_55.js";
import { KMt } from "./index_56.js";
import { Ilr, lRt } from "./index_60.js";
import { Nlr, S3i } from "./index_61.js";
import { TJ } from "./index_97.js";
import { Jmr } from "./index_98.js";
import { Hfr } from "./parse.js";
import { i } from "./plugin-brand-icon.js";
import { Zfr } from "./postprocess.js";
import { Vfr } from "./preprocess.js";
function Kfr(r, e, a) {
    return typeof e != "string" && (a = e, e = void 0), Xfr(a)(Zfr(Hfr(a).document().write(Vfr()(r, e, !0))));
}
function Xfr(r) {
    const e = {
        transforms: [],
        canContainEols: [
            "emphasis",
            "fragment",
            "heading",
            "paragraph",
            "strong"
        ],
        enter: {
            autolink: u(it),
            autolinkProtocol: O,
            autolinkEmail: O,
            atxHeading: u(tt),
            blockQuote: u(_e),
            characterEscape: O,
            characterReference: O,
            codeFenced: u(ve),
            codeFencedFenceInfo: p,
            codeFencedFenceMeta: p,
            codeIndented: u(ve, p),
            codeText: u(Se, p),
            codeTextData: O,
            data: O,
            codeFlowValue: O,
            definition: u(Ne),
            definitionDestinationString: p,
            definitionLabelString: p,
            definitionTitleString: p,
            emphasis: u(je),
            hardBreakEscape: u(Ke),
            hardBreakTrailing: u(Ke),
            htmlFlow: u(nt, p),
            htmlFlowData: O,
            htmlText: u(nt, p),
            htmlTextData: O,
            image: u(ut),
            label: p,
            link: u(it),
            listItem: u(Ie),
            listItemValue: x,
            listOrdered: u(Ze, v),
            listUnordered: u(Ze),
            paragraph: u(Me),
            reference: Q,
            referenceString: p,
            resourceDestinationString: p,
            resourceTitleString: p,
            setextHeading: u(tt),
            strong: u(et),
            thematicBreak: u(Be)
        },
        exit: {
            atxHeading: b(),
            atxHeadingSequence: L,
            autolink: b(),
            autolinkEmail: ge,
            autolinkProtocol: ue,
            blockQuote: b(),
            characterEscapeValue: B,
            characterReferenceMarkerHexadecimal: he,
            characterReferenceMarkerNumeric: he,
            characterReferenceValue: me,
            characterReference: be,
            codeFenced: b($),
            codeFencedFence: A,
            codeFencedFenceInfo: C,
            codeFencedFenceMeta: E,
            codeFlowValue: B,
            codeIndented: b(I),
            codeText: b(Y),
            codeTextData: B,
            data: B,
            definition: b(),
            definitionDestinationString: P,
            definitionLabelString: N,
            definitionTitleString: R,
            emphasis: b(),
            hardBreakEscape: b(H),
            hardBreakTrailing: b(H),
            htmlFlow: b(Z),
            htmlFlowData: B,
            htmlText: b(K),
            htmlTextData: B,
            image: b(re),
            label: ae,
            labelText: ne,
            lineEnding: V,
            link: b(J),
            listItem: b(),
            listOrdered: b(),
            listUnordered: b(),
            paragraph: b(),
            referenceString: le,
            resourceDestinationString: W,
            resourceTitleString: oe,
            resource: ce,
            setextHeading: b(q),
            setextHeadingLineSequence: z,
            setextHeadingText: j,
            strong: b(),
            thematicBreak: b()
        }
    };
    EPt(e, (r || {}).mdastExtensions || []);
    const a = {};
    return s;
    function s(Fe) {
        let Je = {
            type: "root",
            children: []
        };
        const ee = {
            stack: [
                Je
            ],
            tokenStack: [],
            config: e,
            enter: m,
            exit: g,
            buffer: p,
            resume: _,
            data: a
        }, Xe = [];
        let We = -1;
        for(; ++We < Fe.length;)if (Fe[We][1].type === "listOrdered" || Fe[We][1].type === "listUnordered") if (Fe[We][0] === "enter") Xe.push(We);
        else {
            const He = Xe.pop();
            We = l(Fe, He, We);
        }
        for(We = -1; ++We < Fe.length;){
            const He = e[Fe[We][0]];
            TPt.call(He, Fe[We][1].type) && He[Fe[We][1].type].call(Object.assign({
                sliceSerialize: Fe[We][2].sliceSerialize
            }, ee), Fe[We][1]);
        }
        if (ee.tokenStack.length > 0) {
            const He = ee.tokenStack[ee.tokenStack.length - 1];
            (He[1] || APt).call(ee, void 0, He[0]);
        }
        for(Je.position = {
            start: i$(Fe.length > 0 ? Fe[0][1].start : {
                line: 1,
                column: 1,
                offset: 0
            }),
            end: i$(Fe.length > 0 ? Fe[Fe.length - 2][1].end : {
                line: 1,
                column: 1,
                offset: 0
            })
        }, We = -1; ++We < e.transforms.length;)Je = e.transforms[We](Je) || Je;
        return Je;
    }
    function l(Fe, Je, ee) {
        let Xe = Je - 1, We = -1, He = !1, Ge, at, Le, kt;
        for(; ++Xe <= ee;){
            const Ft = Fe[Xe];
            switch(Ft[1].type){
                case "listUnordered":
                case "listOrdered":
                case "blockQuote":
                    {
                        Ft[0] === "enter" ? We++ : We--, kt = void 0;
                        break;
                    }
                case "lineEndingBlank":
                    {
                        Ft[0] === "enter" && (Ge && !kt && !We && !Le && (Le = Xe), kt = void 0);
                        break;
                    }
                case "linePrefix":
                case "listItemValue":
                case "listItemMarker":
                case "listItemPrefix":
                case "listItemPrefixWhitespace":
                    break;
                default:
                    kt = void 0;
            }
            if (!We && Ft[0] === "enter" && Ft[1].type === "listItemPrefix" || We === -1 && Ft[0] === "exit" && (Ft[1].type === "listUnordered" || Ft[1].type === "listOrdered")) {
                if (Ge) {
                    let ft = Xe;
                    for(at = void 0; ft--;){
                        const Ct = Fe[ft];
                        if (Ct[1].type === "lineEnding" || Ct[1].type === "lineEndingBlank") {
                            if (Ct[0] === "exit") continue;
                            at && (Fe[at][1].type = "lineEndingBlank", He = !0), Ct[1].type = "lineEnding", at = ft;
                        } else if (!(Ct[1].type === "linePrefix" || Ct[1].type === "blockQuotePrefix" || Ct[1].type === "blockQuotePrefixWhitespace" || Ct[1].type === "blockQuoteMarker" || Ct[1].type === "listItemIndent")) break;
                    }
                    Le && (!at || Le < at) && (Ge._spread = !0), Ge.end = Object.assign({}, at ? Fe[at][1].start : Ft[1].end), Fe.splice(at || Xe, 0, [
                        "exit",
                        Ge,
                        Ft[2]
                    ]), Xe++, ee++;
                }
                if (Ft[1].type === "listItemPrefix") {
                    const ft = {
                        type: "listItem",
                        _spread: !1,
                        start: Object.assign({}, Ft[1].start),
                        end: void 0
                    };
                    Ge = ft, Fe.splice(Xe, 0, [
                        "enter",
                        ft,
                        Ft[2]
                    ]), Xe++, ee++, Le = void 0, kt = !0;
                }
            }
        }
        return Fe[Je][1]._spread = He, ee;
    }
    function u(Fe, Je) {
        return ee;
        function ee(Xe) {
            m.call(this, Fe(Xe), Xe), Je && Je.call(this, Xe);
        }
    }
    function p() {
        this.stack.push({
            type: "fragment",
            children: []
        });
    }
    function m(Fe, Je, ee) {
        this.stack[this.stack.length - 1].children.push(Fe), this.stack.push(Fe), this.tokenStack.push([
            Je,
            ee || void 0
        ]), Fe.position = {
            start: i$(Je.start),
            end: void 0
        };
    }
    function b(Fe) {
        return Je;
        function Je(ee) {
            Fe && Fe.call(this, ee), g.call(this, ee);
        }
    }
    function g(Fe, Je) {
        const ee = this.stack.pop(), Xe = this.tokenStack.pop();
        if (Xe) Xe[0].type !== Fe.type && (Je ? Je.call(this, Fe, Xe[0]) : (Xe[1] || APt).call(this, Fe, Xe[0]));
        else throw new Error("Cannot close `" + Fe.type + "` (" + TJ({
            start: Fe.start,
            end: Fe.end
        }) + "): it\u2019s not open");
        ee.position.end = i$(Fe.end);
    }
    function _() {
        return ZNe(this.stack.pop());
    }
    function v() {
        this.data.expectingFirstListItemValue = !0;
    }
    function x(Fe) {
        if (this.data.expectingFirstListItemValue) {
            const Je = this.stack[this.stack.length - 2];
            Je.start = Number.parseInt(this.sliceSerialize(Fe), 10), this.data.expectingFirstListItemValue = void 0;
        }
    }
    function C() {
        const Fe = this.resume(), Je = this.stack[this.stack.length - 1];
        Je.lang = Fe;
    }
    function E() {
        const Fe = this.resume(), Je = this.stack[this.stack.length - 1];
        Je.meta = Fe;
    }
    function A() {
        this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
    }
    function $() {
        const Fe = this.resume(), Je = this.stack[this.stack.length - 1];
        Je.value = Fe.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
    }
    function I() {
        const Fe = this.resume(), Je = this.stack[this.stack.length - 1];
        Je.value = Fe.replace(/(\r?\n|\r)$/g, "");
    }
    function N(Fe) {
        const Je = this.resume(), ee = this.stack[this.stack.length - 1];
        ee.label = Je, ee.identifier = L4(this.sliceSerialize(Fe)).toLowerCase();
    }
    function R() {
        const Fe = this.resume(), Je = this.stack[this.stack.length - 1];
        Je.title = Fe;
    }
    function P() {
        const Fe = this.resume(), Je = this.stack[this.stack.length - 1];
        Je.url = Fe;
    }
    function L(Fe) {
        const Je = this.stack[this.stack.length - 1];
        if (!Je.depth) {
            const ee = this.sliceSerialize(Fe).length;
            Je.depth = ee;
        }
    }
    function j() {
        this.data.setextHeadingSlurpLineEnding = !0;
    }
    function z(Fe) {
        const Je = this.stack[this.stack.length - 1];
        Je.depth = this.sliceSerialize(Fe).codePointAt(0) === 61 ? 1 : 2;
    }
    function q() {
        this.data.setextHeadingSlurpLineEnding = void 0;
    }
    function O(Fe) {
        const ee = this.stack[this.stack.length - 1].children;
        let Xe = ee[ee.length - 1];
        (!Xe || Xe.type !== "text") && (Xe = Ue(), Xe.position = {
            start: i$(Fe.start),
            end: void 0
        }, ee.push(Xe)), this.stack.push(Xe);
    }
    function B(Fe) {
        const Je = this.stack.pop();
        Je.value += this.sliceSerialize(Fe), Je.position.end = i$(Fe.end);
    }
    function V(Fe) {
        const Je = this.stack[this.stack.length - 1];
        if (this.data.atHardBreak) {
            const ee = Je.children[Je.children.length - 1];
            ee.position.end = i$(Fe.end), this.data.atHardBreak = void 0;
            return;
        }
        !this.data.setextHeadingSlurpLineEnding && e.canContainEols.includes(Je.type) && (O.call(this, Fe), B.call(this, Fe));
    }
    function H() {
        this.data.atHardBreak = !0;
    }
    function Z() {
        const Fe = this.resume(), Je = this.stack[this.stack.length - 1];
        Je.value = Fe;
    }
    function K() {
        const Fe = this.resume(), Je = this.stack[this.stack.length - 1];
        Je.value = Fe;
    }
    function Y() {
        const Fe = this.resume(), Je = this.stack[this.stack.length - 1];
        Je.value = Fe;
    }
    function J() {
        const Fe = this.stack[this.stack.length - 1];
        if (this.data.inReference) {
            const Je = this.data.referenceType || "shortcut";
            Fe.type += "Reference", Fe.referenceType = Je, delete Fe.url, delete Fe.title;
        } else delete Fe.identifier, delete Fe.label;
        this.data.referenceType = void 0;
    }
    function re() {
        const Fe = this.stack[this.stack.length - 1];
        if (this.data.inReference) {
            const Je = this.data.referenceType || "shortcut";
            Fe.type += "Reference", Fe.referenceType = Je, delete Fe.url, delete Fe.title;
        } else delete Fe.identifier, delete Fe.label;
        this.data.referenceType = void 0;
    }
    function ne(Fe) {
        const Je = this.sliceSerialize(Fe), ee = this.stack[this.stack.length - 2];
        ee.label = Nlr(Je), ee.identifier = L4(Je).toLowerCase();
    }
    function ae() {
        const Fe = this.stack[this.stack.length - 1], Je = this.resume(), ee = this.stack[this.stack.length - 1];
        if (this.data.inReference = !0, ee.type === "link") {
            const Xe = Fe.children;
            ee.children = Xe;
        } else ee.alt = Je;
    }
    function W() {
        const Fe = this.resume(), Je = this.stack[this.stack.length - 1];
        Je.url = Fe;
    }
    function oe() {
        const Fe = this.resume(), Je = this.stack[this.stack.length - 1];
        Je.title = Fe;
    }
    function ce() {
        this.data.inReference = void 0;
    }
    function Q() {
        this.data.referenceType = "collapsed";
    }
    function le(Fe) {
        const Je = this.resume(), ee = this.stack[this.stack.length - 1];
        ee.label = Je, ee.identifier = L4(this.sliceSerialize(Fe)).toLowerCase(), this.data.referenceType = "full";
    }
    function he(Fe) {
        this.data.characterReferenceType = Fe.type;
    }
    function me(Fe) {
        const Je = this.sliceSerialize(Fe), ee = this.data.characterReferenceType;
        let Xe;
        ee ? (Xe = lRt(Je, ee === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : Xe = KNe(Je);
        const We = this.stack[this.stack.length - 1];
        We.value += Xe;
    }
    function be(Fe) {
        const Je = this.stack.pop();
        Je.position.end = i$(Fe.end);
    }
    function ue(Fe) {
        B.call(this, Fe);
        const Je = this.stack[this.stack.length - 1];
        Je.url = this.sliceSerialize(Fe);
    }
    function ge(Fe) {
        B.call(this, Fe);
        const Je = this.stack[this.stack.length - 1];
        Je.url = "mailto:" + this.sliceSerialize(Fe);
    }
    function _e() {
        return {
            type: "blockquote",
            children: []
        };
    }
    function ve() {
        return {
            type: "code",
            lang: null,
            meta: null,
            value: ""
        };
    }
    function Se() {
        return {
            type: "inlineCode",
            value: ""
        };
    }
    function Ne() {
        return {
            type: "definition",
            identifier: "",
            label: null,
            title: null,
            url: ""
        };
    }
    function je() {
        return {
            type: "emphasis",
            children: []
        };
    }
    function tt() {
        return {
            type: "heading",
            depth: 0,
            children: []
        };
    }
    function Ke() {
        return {
            type: "break"
        };
    }
    function nt() {
        return {
            type: "html",
            value: ""
        };
    }
    function ut() {
        return {
            type: "image",
            title: null,
            url: "",
            alt: null
        };
    }
    function it() {
        return {
            type: "link",
            title: null,
            url: "",
            children: []
        };
    }
    function Ze(Fe) {
        return {
            type: "list",
            ordered: Fe.type === "listOrdered",
            start: null,
            spread: Fe._spread,
            children: []
        };
    }
    function Ie(Fe) {
        return {
            type: "listItem",
            spread: Fe._spread,
            checked: null,
            children: []
        };
    }
    function Me() {
        return {
            type: "paragraph",
            children: []
        };
    }
    function et() {
        return {
            type: "strong",
            children: []
        };
    }
    function Ue() {
        return {
            type: "text",
            value: ""
        };
    }
    function Be() {
        return {
            type: "thematicBreak"
        };
    }
}
function i$(r) {
    return {
        line: r.line,
        column: r.column,
        offset: r.offset
    };
}
function EPt(r, e) {
    let a = -1;
    for(; ++a < e.length;){
        const s = e[a];
        Array.isArray(s) ? EPt(r, s) : Yfr(r, s);
    }
}
function Yfr(r, e) {
    let a;
    for(a in e)if (TPt.call(e, a)) switch(a){
        case "canContainEols":
            {
                const s = e[a];
                s && r[a].push(...s);
                break;
            }
        case "transforms":
            {
                const s = e[a];
                s && r[a].push(...s);
                break;
            }
        case "enter":
        case "exit":
            {
                const s = e[a];
                s && Object.assign(r[a], s);
                break;
            }
    }
}
function APt(r, e) {
    throw r ? new Error("Cannot close `" + r.type + "` (" + TJ({
        start: r.start,
        end: r.end
    }) + "): a different token (`" + e.type + "`, " + TJ({
        start: e.start,
        end: e.end
    }) + ") is open") : new Error("Cannot close document, a token (`" + e.type + "`, " + TJ({
        start: e.start,
        end: e.end
    }) + ") is still open");
}
var TPt;
export { APt, EPt, Kfr, TPt, Xfr, Yfr, i$ };
var __wakaru_Lxi_initialized = false;
export function Lxi() {
if (__wakaru_Lxi_initialized) return;
__wakaru_Lxi_initialized = true;
KMt(), jxi(), Ilr(), S3i(), jfe(), cRt(), Jmr(), TPt = {}.hasOwnProperty, i(Kfr, "fromMarkdown"), i(Xfr, "compiler"), i(i$, "point"), i(EPt, "configure"), i(Yfr, "extension"), i(APt, "defaultOnError");

}
