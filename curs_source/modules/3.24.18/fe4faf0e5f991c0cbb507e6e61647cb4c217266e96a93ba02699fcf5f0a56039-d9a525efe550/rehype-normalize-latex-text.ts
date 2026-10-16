import { bqt, d7r, l7r, m7r, p7r, u7r, wqt, yqt } from "./f6r.js";
import { DCr } from "./katex.mjs";
import { i } from "./plugin-brand-icon.js";
var f7r, h7r;
export { f7r, h7r };
var __wakaru_cCi_initialized = false;
export function cCi() {
if (__wakaru_cCi_initialized) return;
__wakaru_cCi_initialized = true;
"use strict";
DCr(), f7r = /\\(emph|text|textbf|textit|textmd|textnormal|textrm|textsf|texttt|textup)([ \t\r\n]*)\{([^{}]*)\}/g, h7r = /\$|\\[()]|\\verb|%/, i(l7r, "escapeUnescapedUnderscores"), i(u7r, "normalizeLatexTextCommandUnderscores"), i(bqt, "canRenderWithKatex"), i(d7r, "repairLatexTextCommandUnderscores"), i(yqt, "getClassNames"), i(p7r, "isMathCodeNode"), i(wqt, "normalizeMathCodeNode"), i(m7r, "rehypeNormalizeLatexTextUnderscores");

}
