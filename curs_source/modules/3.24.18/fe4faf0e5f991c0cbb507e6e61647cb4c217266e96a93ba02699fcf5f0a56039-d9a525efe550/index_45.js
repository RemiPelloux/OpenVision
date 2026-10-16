import { MS } from "./default.js";
import { Mfe, ocr } from "./index_40.js";
import { Pfe, Zl, kP } from "./index_41.js";
import { dcr } from "./index_43.js";
import { Dvi } from "./index_44.js";
import { i } from "./plugin-brand-icon.js";
function hcr() {
    return {
        transforms: [
            vcr
        ],
        enter: {
            literalAutolink: bcr,
            literalAutolinkEmail: UNe,
            literalAutolinkHttp: UNe,
            literalAutolinkWww: UNe
        },
        exit: {
            literalAutolink: kcr,
            literalAutolinkEmail: _cr,
            literalAutolinkHttp: ycr,
            literalAutolinkWww: wcr
        }
    };
}
function gcr() {
    return {
        unsafe: [
            {
                character: "@",
                before: "[+\\-.\\w]",
                after: "[\\-.\\w]",
                inConstruct: GNe,
                notInConstruct: WNe
            },
            {
                character: ".",
                before: "[Ww]",
                after: "[\\-.\\w]",
                inConstruct: GNe,
                notInConstruct: WNe
            },
            {
                character: ":",
                before: "[ps]",
                after: "\\/",
                inConstruct: GNe,
                notInConstruct: WNe
            }
        ]
    };
}
function bcr(r) {
    this.enter({
        type: "link",
        title: null,
        url: "",
        children: []
    }, r);
}
function UNe(r) {
    this.config.enter.autolinkProtocol.call(this, r);
}
function ycr(r) {
    this.config.exit.autolinkProtocol.call(this, r);
}
function wcr(r) {
    this.config.exit.data.call(this, r);
    const e = this.stack[this.stack.length - 1];
    e.type, e.url = "http://" + this.sliceSerialize(r);
}
function _cr(r) {
    this.config.exit.autolinkEmail.call(this, r);
}
function kcr(r) {
    this.exit(r);
}
function vcr(r) {
    dcr(r, [
        [
            /(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,
            xcr
        ],
        [
            /(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,
            Ccr
        ]
    ], {
        ignore: [
            "link",
            "linkReference"
        ]
    });
}
function xcr(r, e, a, s, l) {
    let u = "";
    if (!jMt(l) || (/^w/i.test(e) && (a = e + a, e = "", u = "http://"), !Scr(a))) return !1;
    const p = Ecr(a + s);
    if (!p[0]) return !1;
    const m = {
        type: "link",
        title: null,
        url: u + e + p[0],
        children: [
            {
                type: "text",
                value: e + p[0]
            }
        ]
    };
    return p[1] ? [
        m,
        {
            type: "text",
            value: p[1]
        }
    ] : m;
}
function Ccr(r, e, a, s) {
    return !jMt(s, !0) || /[-\d_]$/.test(a) ? !1 : {
        type: "link",
        title: null,
        url: "mailto:" + e + "@" + a,
        children: [
            {
                type: "text",
                value: e + "@" + a
            }
        ]
    };
}
function Scr(r) {
    const e = r.split(".");
    return !(e.length < 2 || e[e.length - 1] && (/_/.test(e[e.length - 1]) || !/[a-zA-Z\d]/.test(e[e.length - 1])) || e[e.length - 2] && (/_/.test(e[e.length - 2]) || !/[a-zA-Z\d]/.test(e[e.length - 2])));
}
function Ecr(r) {
    const e = /[!"&'),.:;<>?\]}]+$/.exec(r);
    if (!e) return [
        r,
        void 0
    ];
    r = r.slice(0, e.index);
    let a = e[0], s = a.indexOf(")");
    const l = Mfe(r, "(");
    let u = Mfe(r, ")");
    for(; s !== -1 && l > u;)r += a.slice(0, s + 1), a = a.slice(s + 1), s = a.indexOf(")"), u++;
    return [
        r,
        a
    ];
}
function jMt(r, e) {
    const a = r.input.charCodeAt(r.index - 1);
    return (r.index === 0 || kP(a) || Pfe(a)) && (!e || a !== 47);
}
var GNe, WNe;
export { Ccr, Ecr, GNe, Scr, UNe, WNe, _cr, bcr, gcr, hcr, jMt, kcr, vcr, wcr, xcr, ycr };
var __wakaru_Fvi_initialized = false;
export function Fvi() {
if (__wakaru_Fvi_initialized) return;
__wakaru_Fvi_initialized = true;
ocr(), MS(), Zl(), Dvi(), GNe = "phrasing", WNe = [
    "autolink",
    "link",
    "image",
    "label"
], i(hcr, "gfmAutolinkLiteralFromMarkdown"), i(gcr, "gfmAutolinkLiteralToMarkdown"), i(bcr, "enterLiteralAutolink"), i(UNe, "enterLiteralAutolinkValue"), i(ycr, "exitLiteralAutolinkHttp"), i(wcr, "exitLiteralAutolinkWww"), i(_cr, "exitLiteralAutolinkEmail"), i(kcr, "exitLiteralAutolink"), i(vcr, "transformGfmAutolinkLiterals"), i(xcr, "findUrl"), i(Ccr, "findEmail"), i(Scr, "isCorrectDomain"), i(Ecr, "splitUrl"), i(jMt, "previous");

}
