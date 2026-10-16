import { E } from "./tslib.es6.js";
var T7h;
export { T7h };
var __wakaru_E7h_initialized = false;
export function E7h() {
if (__wakaru_E7h_initialized) return;
__wakaru_E7h_initialized = true;
E(), T7h = class {
    constructor(t = []){
        this.content = [], this.indent = 0, this && (this.args = t);
    }
    indented(t) {
        this.indent += 1, t(this), this.indent -= 1;
    }
    write(t) {
        if (typeof t == "function") {
            t(this, {
                execution: "sync"
            }), t(this, {
                execution: "async"
            });
            return;
        }
        const n = t.split(`
`).filter((s)=>s), i = Math.min(...n.map((s)=>s.length - s.trimStart().length)), r = n.map((s)=>s.slice(i)).map((s)=>" ".repeat(this.indent * 2) + s);
        for (const s of r)this.content.push(s);
    }
    compile() {
        const t = Function, e = this?.args, i = [
            ...(this?.content ?? [
                ""
            ]).map((r)=>`  ${r}`)
        ];
        return new t(...e, i.join(`
`));
    }
};

}
