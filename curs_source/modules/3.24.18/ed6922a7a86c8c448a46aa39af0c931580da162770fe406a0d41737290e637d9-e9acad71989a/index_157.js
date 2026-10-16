import { A_, BO } from "./qIc.js";
import { x } from "./tslib.es6.js";
var tql;
export { tql };
var __wakaru_JRf_initialized = false;
export function JRf() {
if (__wakaru_JRf_initialized) return;
__wakaru_JRf_initialized = true;
x(), A_(), tql = BO.create({
    name: "text",
    group: "inline",
    parseMarkdown: (e)=>({
            type: "text",
            text: e.text || ""
        }),
    renderMarkdown: (e)=>e.text || ""
});

}
