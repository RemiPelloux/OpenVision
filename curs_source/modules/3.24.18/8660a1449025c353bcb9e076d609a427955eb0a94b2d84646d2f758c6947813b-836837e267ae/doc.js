import { E } from "./tslib.es6.js";
var dAo;
export { dAo };
var __wakaru_esd_initialized = false;
export function esd() {
if (__wakaru_esd_initialized) return;
__wakaru_esd_initialized = true;
E(), dAo = class {
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
