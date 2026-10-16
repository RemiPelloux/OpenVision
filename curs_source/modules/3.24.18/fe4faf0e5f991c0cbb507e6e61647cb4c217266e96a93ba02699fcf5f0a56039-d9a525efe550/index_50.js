import { i } from "./plugin-brand-icon.js";
function Ocr() {
    return {
        canContainEols: [
            "delete"
        ],
        enter: {
            strikethrough: Bcr
        },
        exit: {
            strikethrough: qcr
        }
    };
}
function zcr() {
    return {
        unsafe: [
            {
                character: "~",
                inConstruct: "phrasing",
                notInConstruct: Gcr
            }
        ],
        handlers: {
            delete: FMt
        }
    };
}
function Bcr(r) {
    this.enter({
        type: "delete",
        children: []
    }, r);
}
function qcr(r) {
    this.exit(r);
}
function FMt(r, e, a, s) {
    const l = a.createTracker(s), u = a.enter("strikethrough");
    let p = l.move("~~");
    return p += a.containerPhrasing(r, {
        ...l.current(),
        before: p,
        after: "~"
    }), p += l.move("~~"), u(), p;
}
function Ucr() {
    return "~";
}
var Gcr;
export { Bcr, FMt, Gcr, Ocr, Ucr, qcr, zcr };
var __wakaru_qvi_initialized = false;
export function qvi() {
if (__wakaru_qvi_initialized) return;
__wakaru_qvi_initialized = true;
Gcr = [
    "autolink",
    "destinationLiteral",
    "destinationRaw",
    "reference",
    "titleQuote",
    "titleApostrophe"
], FMt.peek = Ucr, i(Ocr, "gfmStrikethroughFromMarkdown"), i(zcr, "gfmStrikethroughToMarkdown"), i(Bcr, "enterStrikethrough"), i(qcr, "exitStrikethrough"), i(FMt, "handleDelete"), i(Ucr, "peekDelete");

}
