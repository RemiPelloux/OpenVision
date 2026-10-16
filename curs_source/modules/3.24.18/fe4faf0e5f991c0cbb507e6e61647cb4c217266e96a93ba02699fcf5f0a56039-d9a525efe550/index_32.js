import { ENe, wC } from "./index_19.js";
import { Dir } from "./index_20.js";
import { fvi } from "./index_21.js";
import { CNt, TNe } from "./index_22.js";
import { Bir } from "./index_23.js";
import { gvi } from "./index_24.js";
import { ENt, Yir } from "./index_25.js";
import { wh } from "./index_26.js";
import { kMt } from "./index_27.js";
import { Avi } from "./index_29.js";
import { $fe, _C } from "./index_30.js";
import { Ife } from "./index_31.js";
import { R4 } from "./index_6.js";
import { ffe } from "./index_7.js";
import { fP, hNe } from "./index_9.js";
import { i } from "./plugin-brand-icon.js";
var sJ = {};
var jNt = {};
function SMt(r, e) {
    const a = Gsr(r), s = TNe("type", {
        handlers: {
            root: jsr,
            element: Lsr,
            text: Dsr,
            comment: AMt,
            doctype: Fsr,
            raw: zsr
        },
        unknown: Bsr
    }), l = {
        parser: a ? new kMt($Mt) : kMt.getFragmentParser(void 0, $Mt),
        handle (m) {
            s(m, l);
        },
        stitches: !1,
        options: e || {}
    };
    s(r, l), IB(l, _C());
    const u = a ? l.parser.document : l.parser.getFragment(), p = Dir(u, {
        file: l.options.file
    });
    return l.stitches && R4(p, "comment", function(m, b, g) {
        const _ = m;
        if (_.value.stitch && g && b !== void 0) {
            const v = g.children;
            return v[b] = _.value.stitch, b;
        }
    }), p.type === "root" && p.children.length === 1 && p.children[0].type === r.type ? p.children[0] : p;
}
function EMt(r, e) {
    let a = -1;
    if (r) for(; ++a < r.length;)e.handle(r[a]);
}
function jsr(r, e) {
    EMt(r.children, e);
}
function Lsr(r, e) {
    qsr(r, e), EMt(r.children, e), Usr(r, e);
}
function Dsr(r, e) {
    e.parser.tokenizer.state > 4 && (e.parser.tokenizer.state = 0);
    const a = {
        type: sJ.TokenType.CHARACTER,
        chars: r.value,
        location: wJ(r)
    };
    IB(e, _C(r)), e.parser.currentToken = a, e.parser._processToken(e.parser.currentToken);
}
function Fsr(r, e) {
    const a = {
        type: sJ.TokenType.DOCTYPE,
        name: "html",
        forceQuirks: !1,
        publicId: "",
        systemId: "",
        location: wJ(r)
    };
    IB(e, _C(r)), e.parser.currentToken = a, e.parser._processToken(e.parser.currentToken);
}
function Osr(r, e) {
    e.stitches = !0;
    const a = Wsr(r);
    if ("children" in r && "children" in a) {
        const s = SMt({
            type: "root",
            children: r.children
        }, e.options);
        a.children = s.children;
    }
    AMt({
        type: "comment",
        value: {
            stitch: a
        }
    }, e);
}
function AMt(r, e) {
    const a = r.value, s = {
        type: sJ.TokenType.COMMENT,
        data: a,
        location: wJ(r)
    };
    IB(e, _C(r)), e.parser.currentToken = s, e.parser._processToken(e.parser.currentToken);
}
function zsr(r, e) {
    if (e.parser.tokenizer.preprocessor.html = "", e.parser.tokenizer.preprocessor.pos = -1, e.parser.tokenizer.preprocessor.lastGapPos = -2, e.parser.tokenizer.preprocessor.gapStack = [], e.parser.tokenizer.preprocessor.skipNextNewLine = !1, e.parser.tokenizer.preprocessor.lastChunkWritten = !1, e.parser.tokenizer.preprocessor.endOfChunkHit = !1, e.parser.tokenizer.preprocessor.isEol = !1, TMt(e, _C(r)), e.parser.tokenizer.write(e.options.tagfilter ? r.value.replace(Hsr, "&lt;$1$2") : r.value, !1), e.parser.tokenizer._runParsingLoop(), e.parser.tokenizer.state === 72 || e.parser.tokenizer.state === 78) {
        e.parser.tokenizer.preprocessor.lastChunkWritten = !0;
        const a = e.parser.tokenizer._consume();
        e.parser.tokenizer._callState(a);
    }
}
function Bsr(r, e) {
    const a = r;
    if (e.options.passThrough && e.options.passThrough.includes(a.type)) Osr(a, e);
    else {
        let s = "";
        throw Zsr.has(a.type) && (s = ". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax"), new Error("Cannot compile `" + a.type + "` node" + s);
    }
}
function IB(r, e) {
    TMt(r, e);
    const a = r.parser.tokenizer.currentCharacterToken;
    a && a.location && (a.location.endLine = r.parser.tokenizer.preprocessor.line, a.location.endCol = r.parser.tokenizer.preprocessor.col + 1, a.location.endOffset = r.parser.tokenizer.preprocessor.offset + 1, r.parser.currentToken = a, r.parser._processToken(r.parser.currentToken)), r.parser.tokenizer.paused = !1, r.parser.tokenizer.inLoop = !1, r.parser.tokenizer.active = !1, r.parser.tokenizer.returnState = wh.DATA, r.parser.tokenizer.charRefCode = -1, r.parser.tokenizer.consumedAfterSnapshot = -1, r.parser.tokenizer.currentLocation = null, r.parser.tokenizer.currentCharacterToken = null, r.parser.tokenizer.currentToken = null, r.parser.tokenizer.currentAttr = {
        name: "",
        value: ""
    };
}
function TMt(r, e) {
    if (e && e.offset !== void 0) {
        const a = {
            startLine: e.line,
            startCol: e.column,
            startOffset: e.offset,
            endLine: -1,
            endCol: -1,
            endOffset: -1
        };
        r.parser.tokenizer.preprocessor.lineStartPos = -e.column + 1, r.parser.tokenizer.preprocessor.droppedBufferSize = e.offset, r.parser.tokenizer.preprocessor.line = e.line, r.parser.tokenizer.currentLocation = a;
    }
}
function qsr(r, e) {
    const a = r.tagName.toLowerCase();
    if (e.parser.tokenizer.state === wh.PLAINTEXT) return;
    IB(e, _C(r));
    const s = e.parser.openElements.current;
    let l = "namespaceURI" in s ? s.namespaceURI : wC.html;
    l === wC.html && a === "svg" && (l = wC.svg);
    const u = Bir({
        ...r,
        children: []
    }, {
        space: l === wC.svg ? "svg" : "html"
    }), p = {
        type: sJ.TokenType.START_TAG,
        tagName: a,
        tagID: jNt.getTagID(a),
        selfClosing: !1,
        ackSelfClosing: !1,
        attrs: "attrs" in u ? u.attrs : [],
        location: wJ(r)
    };
    e.parser.currentToken = p, e.parser._processToken(e.parser.currentToken), e.parser.tokenizer.lastStartTagName = a;
}
function Usr(r, e) {
    const a = r.tagName.toLowerCase();
    if (!e.parser.tokenizer.inForeignNode && ENt.includes(a) || e.parser.tokenizer.state === wh.PLAINTEXT) return;
    IB(e, $fe(r));
    const s = {
        type: sJ.TokenType.END_TAG,
        tagName: a,
        tagID: jNt.getTagID(a),
        selfClosing: !1,
        ackSelfClosing: !1,
        attrs: [],
        location: wJ(r)
    };
    e.parser.currentToken = s, e.parser._processToken(e.parser.currentToken), a === e.parser.tokenizer.lastStartTagName && (e.parser.tokenizer.state === wh.RCDATA || e.parser.tokenizer.state === wh.RAWTEXT || e.parser.tokenizer.state === wh.SCRIPT_DATA) && (e.parser.tokenizer.state = wh.DATA);
}
function Gsr(r) {
    const e = r.type === "root" ? r.children[0] : r;
    return !!(e && (e.type === "doctype" || e.type === "element" && e.tagName.toLowerCase() === "html"));
}
function wJ(r) {
    const e = _C(r) || {
        line: void 0,
        column: void 0,
        offset: void 0
    }, a = $fe(r) || {
        line: void 0,
        column: void 0,
        offset: void 0
    };
    return {
        startLine: e.line,
        startCol: e.column,
        startOffset: e.offset,
        endLine: a.line,
        endCol: a.column,
        endOffset: a.offset
    };
}
function Wsr(r) {
    return "children" in r ? fP({
        ...r,
        children: []
    }) : fP(r);
}
var Hsr, Zsr, $Mt;
export { $Mt, AMt, Bsr, Dsr, EMt, Fsr, Gsr, Hsr, IB, Lsr, Osr, SMt, TMt, Usr, Wsr, Zsr, jNt, jsr, qsr, sJ, wJ, zsr };
var __wakaru_$vi_initialized = false;
export function $vi() {
if (__wakaru_$vi_initialized) return;
__wakaru_$vi_initialized = true;
hNe(), fvi(), gvi(), Yir(), Avi(), Ife(), ffe(), ENe(), CNt(), Hsr = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi, Zsr = new Set([
    "mdxFlowExpression",
    "mdxJsxFlowElement",
    "mdxJsxTextElement",
    "mdxTextExpression",
    "mdxjsEsm"
]), $Mt = {
    sourceCodeLocationInfo: !0,
    scriptingEnabled: !1
}, i(SMt, "raw"), i(EMt, "all"), i(jsr, "root"), i(Lsr, "element"), i(Dsr, "text"), i(Fsr, "doctype"), i(Osr, "stitch"), i(AMt, "comment"), i(zsr, "handleRaw"), i(Bsr, "unknown"), i(IB, "resetTokenizer"), i(TMt, "setPoint"), i(qsr, "startTag"), i(Usr, "endTag"), i(Gsr, "documentMode"), i(wJ, "createParse5Location"), i(Wsr, "cloneWithoutChildren");

}
