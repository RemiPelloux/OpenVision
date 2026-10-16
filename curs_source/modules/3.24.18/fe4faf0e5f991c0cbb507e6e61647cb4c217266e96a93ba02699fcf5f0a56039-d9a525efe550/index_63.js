import { MS } from "./default.js";
import { Gvi, Wcr } from "./index_52.js";
import { oRt } from "./index_59.js";
import { Plr } from "./index_62.js";
import { i } from "./plugin-brand-icon.js";
function jlr() {
    return {
        enter: {
            table: Llr,
            tableData: uRt,
            tableHeader: uRt,
            tableRow: Flr
        },
        exit: {
            codeText: Olr,
            table: Dlr,
            tableData: XNe,
            tableHeader: XNe,
            tableRow: XNe
        }
    };
}
function Llr(r) {
    const e = r._align;
    this.enter({
        type: "table",
        align: e.map(function(a) {
            return a === "none" ? null : a;
        }),
        children: []
    }, r), this.data.inTable = !0;
}
function Dlr(r) {
    this.exit(r), this.data.inTable = void 0;
}
function Flr(r) {
    this.enter({
        type: "tableRow",
        children: []
    }, r);
}
function XNe(r) {
    this.exit(r);
}
function uRt(r) {
    this.enter({
        type: "tableCell",
        children: []
    }, r);
}
function Olr(r) {
    let e = this.resume();
    this.data.inTable && (e = e.replace(/\\([\\|])/g, zlr));
    const a = this.stack[this.stack.length - 1];
    a.type, a.value = e, this.exit(r);
}
function zlr(r, e) {
    return e === "|" ? e : r;
}
function Blr(r) {
    const e = r || {}, a = e.tableCellPadding, s = e.tablePipeAlign, l = e.stringLength, u = a ? " " : "|";
    return {
        unsafe: [
            {
                character: "\r",
                inConstruct: "tableCell"
            },
            {
                character: `
`,
                inConstruct: "tableCell"
            },
            {
                atBreak: !0,
                character: "|",
                after: "[	 :-]"
            },
            {
                character: "|",
                inConstruct: "tableCell"
            },
            {
                atBreak: !0,
                character: ":",
                after: "-"
            },
            {
                atBreak: !0,
                character: "-",
                after: "[:|-]"
            }
        ],
        handlers: {
            inlineCode: x,
            table: p,
            tableCell: b,
            tableRow: m
        }
    };
    function p(C, E, A, $) {
        return g(_(C, A, $), C.align);
    }
    function m(C, E, A, $) {
        const I = v(C, A, $), N = g([
            I
        ]);
        return N.slice(0, N.indexOf(`
`));
    }
    function b(C, E, A, $) {
        const I = A.enter("tableCell"), N = A.enter("phrasing"), R = A.containerPhrasing(C, {
            ...$,
            before: u,
            after: u
        });
        return N(), I(), R;
    }
    function g(C, E) {
        return Wcr(C, {
            align: E,
            alignDelimiters: s,
            padding: a,
            stringLength: l
        });
    }
    function _(C, E, A) {
        const $ = C.children;
        let I = -1;
        const N = [], R = E.enter("table");
        for(; ++I < $.length;)N[I] = v($[I], E, A);
        return R(), N;
    }
    function v(C, E, A) {
        const $ = C.children;
        let I = -1;
        const N = [], R = E.enter("tableRow");
        for(; ++I < $.length;)N[I] = b($[I], C, E, A);
        return R(), N;
    }
    function x(C, E, A) {
        let $ = oRt.inlineCode(C, E, A);
        return A.stack.includes("tableCell") && ($ = $.replace(/\|/g, "\\$&")), $;
    }
}
export { Blr, Dlr, Flr, Llr, Olr, XNe, jlr, uRt, zlr };
var __wakaru_E3i_initialized = false;
export function E3i() {
if (__wakaru_E3i_initialized) return;
__wakaru_E3i_initialized = true;
MS(), Gvi(), Plr(), i(jlr, "gfmTableFromMarkdown"), i(Llr, "enterTable"), i(Dlr, "exitTable"), i(Flr, "enterRow"), i(XNe, "exit"), i(uRt, "enterCell"), i(Olr, "exitCodeText"), i(zlr, "replace"), i(Blr, "gfmTableToMarkdown");

}
