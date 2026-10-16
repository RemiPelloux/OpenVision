import { E } from "./tslib.es6.js";
var HYo, k_n, seh, WYo;
export { HYo, WYo, k_n, seh };
var __wakaru_Xxr_initialized = false;
export function Xxr() {
if (__wakaru_Xxr_initialized) return;
__wakaru_Xxr_initialized = true;
E(), HYo = class extends Error {
    constructor(t, e, n, i){
        super(), this.name = t, this.code = n, this.message = i, this.pos = e;
    }
}, k_n = class extends HYo {
    constructor(t, e, n){
        super("YAMLParseError", t, e, n);
    }
}, seh = class extends HYo {
    constructor(t, e, n){
        super("YAMLWarning", t, e, n);
    }
}, WYo = (t, e)=>(n)=>{
        if (n.pos[0] === -1) return;
        n.linePos = n.pos.map((a)=>e.linePos(a));
        const { line: i, col: r } = n.linePos[0];
        n.message += ` at line ${i}, column ${r}`;
        let s = r - 1, o = t.substring(e.lineStarts[i - 1], e.lineStarts[i]).replace(/[\n\r]+$/, "");
        if (s >= 60 && o.length > 80) {
            const a = Math.min(s - 39, o.length - 79);
            o = "\u2026" + o.substring(a), s -= a - 1;
        }
        if (o.length > 80 && (o = o.substring(0, 79) + "\u2026"), i > 1 && /^ *$/.test(o.substring(0, s))) {
            let a = t.substring(e.lineStarts[i - 2], e.lineStarts[i - 1]);
            a.length > 80 && (a = a.substring(0, 79) + `\u2026
`), o = a + o;
        }
        if (/[^ ]/.test(o)) {
            let a = 1;
            const l = n.linePos[1];
            l?.line === i && l.col > r && (a = Math.max(1, Math.min(l.col - r, 80 - s)));
            const c = " ".repeat(s) + "^".repeat(a);
            n.message += `:

${o}
${c}
`;
        }
    };

}
