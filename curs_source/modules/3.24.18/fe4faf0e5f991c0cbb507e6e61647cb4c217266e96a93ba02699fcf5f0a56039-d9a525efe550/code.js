import { Kvi, Qcr } from "./check-fence.js";
import { Jcr, Vvi } from "./format-code-as-indented.js";
import { Ycr, qMt } from "./index_53.js";
import { i } from "./plugin-brand-icon.js";
function elr(r, e, a, s) {
    const l = Qcr(a), u = r.value || "", p = l === "`" ? "GraveAccent" : "Tilde";
    if (Jcr(r, a)) {
        const v = a.enter("codeIndented"), x = a.indentLines(u, tlr);
        return v(), x;
    }
    const m = a.createTracker(s), b = l.repeat(Math.max(qMt(u, l) + 1, 3)), g = a.enter("codeFenced");
    let _ = m.move(b);
    if (r.lang) {
        const v = a.enter(`codeFencedLang${p}`);
        _ += m.move(a.safe(r.lang, {
            before: _,
            after: " ",
            encode: [
                "`"
            ],
            ...m.current()
        })), v();
    }
    if (r.lang && r.meta) {
        const v = a.enter(`codeFencedMeta${p}`);
        _ += m.move(" "), _ += m.move(a.safe(r.meta, {
            before: _,
            after: `
`,
            encode: [
                "`"
            ],
            ...m.current()
        })), v();
    }
    return _ += m.move(`
`), u && (_ += m.move(u + `
`)), _ += m.move(b), g(), _;
}
function tlr(r, e, a) {
    return (a ? "" : "    ") + r;
}
export { elr, tlr };
var __wakaru_Xvi_initialized = false;
export function Xvi() {
if (__wakaru_Xvi_initialized) return;
__wakaru_Xvi_initialized = true;
Ycr(), Vvi(), Kvi(), i(elr, "code"), i(tlr, "map");

}
