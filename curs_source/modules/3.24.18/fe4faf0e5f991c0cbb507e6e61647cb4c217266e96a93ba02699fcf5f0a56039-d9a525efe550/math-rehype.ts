import { m7r, o7r } from "./f6r.js";
import { sCi } from "./index_145.js";
import { cCi } from "./rehype-normalize-latex-text.ts";
var b7r;
export { b7r };
var __wakaru_lCi_initialized = false;
export function lCi() {
if (__wakaru_lCi_initialized) return;
__wakaru_lCi_initialized = true;
"use strict";
sCi(), cCi(), b7r = {
    rehypeNormalizeLatexTextUnderscores: m7r,
    rehypeKatex: o7r
};

}
