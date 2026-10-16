import { x } from "./tslib.es6.js";
var Y4s;
export { Y4s };
var __wakaru_a_u_initialized = false;
export function a_u() {
if (__wakaru_a_u_initialized) return;
__wakaru_a_u_initialized = true;
x(), Y4s = class {
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
