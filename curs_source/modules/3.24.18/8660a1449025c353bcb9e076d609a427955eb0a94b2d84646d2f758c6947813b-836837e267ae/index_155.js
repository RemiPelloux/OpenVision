import { Fy, o6 } from "./LYd.js";
import { E } from "./tslib.es6.js";
var nJh;
export { nJh };
var __wakaru_r9S_initialized = false;
export function r9S() {
if (__wakaru_r9S_initialized) return;
__wakaru_r9S_initialized = true;
E(), Fy(), nJh = o6.create({
    name: "doc",
    topNode: !0,
    content: "block+",
    renderMarkdown: (t, e)=>t.content ? e.renderChildren(t.content, `

`) : ""
});

}
