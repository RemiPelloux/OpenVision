import { A_, BO } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Mjl;
export { Mjl };
var __wakaru_VRf_initialized = false;
export function VRf() {
if (__wakaru_VRf_initialized) return;
__wakaru_VRf_initialized = true;
x(), A_(), Mjl = BO.create({
    name: "doc",
    topNode: !0,
    content: "block+",
    renderMarkdown: (e, t)=>e.content ? t.renderChildren(e.content, `

`) : ""
});

}
