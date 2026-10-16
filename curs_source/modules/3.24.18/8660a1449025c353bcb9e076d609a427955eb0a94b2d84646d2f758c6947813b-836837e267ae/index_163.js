import { Fy, o6 } from "./LYd.js";
import { E } from "./tslib.es6.js";
var TJh;
export { TJh };
var __wakaru_p9S_initialized = false;
export function p9S() {
if (__wakaru_p9S_initialized) return;
__wakaru_p9S_initialized = true;
E(), Fy(), TJh = o6.create({
    name: "text",
    group: "inline",
    parseMarkdown: (t)=>({
            type: "text",
            text: t.text || ""
        }),
    renderMarkdown: (t)=>t.text || ""
});

}
