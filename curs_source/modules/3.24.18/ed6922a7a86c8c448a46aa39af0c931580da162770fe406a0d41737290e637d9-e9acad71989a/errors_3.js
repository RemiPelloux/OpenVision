import { x } from "./tslib.es6.js";
var Hcs, hBt, MZc, Wcs;
export { Hcs, MZc, Wcs, hBt };
var __wakaru_Qwi_initialized = false;
export function Qwi() {
if (__wakaru_Qwi_initialized) return;
__wakaru_Qwi_initialized = true;
x(), Hcs = class extends Error {
    constructor(e, t, n, i){
        super(), this.name = e, this.code = n, this.message = i, this.pos = t;
    }
}, hBt = class extends Hcs {
    constructor(e, t, n){
        super("YAMLParseError", e, t, n);
    }
}, MZc = class extends Hcs {
    constructor(e, t, n){
        super("YAMLWarning", e, t, n);
    }
}, Wcs = (e, t)=>(n)=>{
        if (n.pos[0] === -1) return;
        n.linePos = n.pos.map((a)=>t.linePos(a));
        const { line: i, col: r } = n.linePos[0];
        n.message += ` at line ${i}, column ${r}`;
        let s = r - 1, o = e.substring(t.lineStarts[i - 1], t.lineStarts[i]).replace(/[\n\r]+$/, "");
        if (s >= 60 && o.length > 80) {
            const a = Math.min(s - 39, o.length - 79);
            o = "\u2026" + o.substring(a), s -= a - 1;
        }
        if (o.length > 80 && (o = o.substring(0, 79) + "\u2026"), i > 1 && /^ *$/.test(o.substring(0, s))) {
            let a = e.substring(t.lineStarts[i - 2], t.lineStarts[i - 1]);
            a.length > 80 && (a = a.substring(0, 79) + `\u2026
`), o = a + o;
        }
        if (/[^ ]/.test(o)) {
            let a = 1;
            const c = n.linePos[1];
            c?.line === i && c.col > r && (a = Math.max(1, Math.min(c.col - r, 80 - s)));
            const l = " ".repeat(s) + "^".repeat(a);
            n.message += `:

${o}
${l}
`;
        }
    };

}
