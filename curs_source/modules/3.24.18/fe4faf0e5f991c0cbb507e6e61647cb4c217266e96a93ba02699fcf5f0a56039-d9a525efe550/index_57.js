import { JY } from "./index_2.js";
import { cNe } from "./index_3.js";
var xlr;
export { xlr };
var __wakaru_g3i_initialized = false;
export function g3i() {
if (__wakaru_g3i_initialized) return;
__wakaru_g3i_initialized = true;
cNe(), xlr = JY([
    "break",
    "delete",
    "emphasis",
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    "inlineMath",
    "link",
    "linkReference",
    "mdxJsxTextElement",
    "mdxTextExpression",
    "strong",
    "text",
    "textDirective"
]);

}
