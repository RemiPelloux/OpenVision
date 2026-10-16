import { a } from "./business-error.js";
var u2;
export { u2 };
var __wakaru_d2_initialized = false;
export function d2() {
if (__wakaru_d2_initialized) return;
__wakaru_d2_initialized = true;
u2 = a((e)=>{
    const t = [];
    let r = 0, n = "";
    const o = a(()=>{
        n && (t.push({
            type: "Text",
            value: n,
            position: r - n.length
        }), n = "");
    }, "flushText");
    for(; r < e.length;){
        const i = e[r];
        if (i === "<") {
            const s = e.slice(r).match(/^<(\d+)>/);
            if (s) o(), t.push({
                type: "TagOpen",
                value: s[0],
                position: r,
                tagNumber: parseInt(s[1], 10)
            }), r += s[0].length;
            else {
                const c = e.slice(r).match(/^<\/(\d+)>/);
                c ? (o(), t.push({
                    type: "TagClose",
                    value: c[0],
                    position: r,
                    tagNumber: parseInt(c[1], 10)
                }), r += c[0].length) : (n += i, r += 1);
            }
        } else n += i, r += 1;
    }
    return o(), t;
}, "tokenize");

}
