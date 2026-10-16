import { a } from "./business-error.js";
var C1, I1, A1, Hd;
export { A1, C1, Hd, I1 };
var __wakaru_R1_initialized = false;
export function R1() {
if (__wakaru_R1_initialized) return;
__wakaru_R1_initialized = true;
C1 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, I1 = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "\xA9",
    "&#169;": "\xA9",
    "&reg;": "\xAE",
    "&#174;": "\xAE",
    "&hellip;": "\u2026",
    "&#8230;": "\u2026",
    "&#x2F;": "/",
    "&#47;": "/"
}, A1 = a((e)=>I1[e], "unescapeHtmlEntity"), Hd = a((e)=>e.replace(C1, A1), "unescape");

}
