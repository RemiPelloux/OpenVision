var Doc;
export { Doc };
var __wakaru_init_doc_initialized = false;
export function init_doc() {
if (__wakaru_init_doc_initialized) return;
__wakaru_init_doc_initialized = true;
Doc = class {
    constructor(args = []){
        this.content = [];
        this.indent = 0;
        if (this) this.args = args;
    }
    indented(fn) {
        this.indent += 1;
        fn(this);
        this.indent -= 1;
    }
    write(arg) {
        if (typeof arg === "function") {
            arg(this, {
                execution: "sync"
            });
            arg(this, {
                execution: "async"
            });
            return;
        }
        const content = arg;
        const lines2 = content.split("\n").filter((x)=>x);
        const minIndent = Math.min(...lines2.map((x)=>x.length - x.trimStart().length));
        const dedented = lines2.map((x)=>x.slice(minIndent)).map((x)=>" ".repeat(this.indent * 2) + x);
        for (const line of dedented){
            this.content.push(line);
        }
    }
    compile() {
        const F2 = Function;
        const args = this?.args;
        const content = this?.content ?? [
            ``
        ];
        const lines2 = [
            ...content.map((x)=>`  ${x}`)
        ];
        return new F2(...args, lines2.join("\n"));
    }
};

}
