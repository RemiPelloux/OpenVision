import { x } from "./tslib.es6.js";
var Jtu;
export { Jtu };
var __wakaru_qHf_initialized = false;
export function qHf() {
if (__wakaru_qHf_initialized) return;
__wakaru_qHf_initialized = true;
x(), Jtu = class {
    constructor(e = []){
        this.content = [], this.indent = 0, this && (this.args = e);
    }
    indented(e) {
        this.indent += 1, e(this), this.indent -= 1;
    }
    write(e) {
        if (typeof e == "function") {
            e(this, {
                execution: "sync"
            }), e(this, {
                execution: "async"
            });
            return;
        }
        const n = e.split(`
`).filter((s)=>s), i = Math.min(...n.map((s)=>s.length - s.trimStart().length)), r = n.map((s)=>s.slice(i)).map((s)=>" ".repeat(this.indent * 2) + s);
        for (const s of r)this.content.push(s);
    }
    compile() {
        const e = Function, t = this?.args, i = [
            ...(this?.content ?? [
                ""
            ]).map((r)=>`  ${r}`)
        ];
        return new e(...t, i.join(`
`));
    }
};

}
