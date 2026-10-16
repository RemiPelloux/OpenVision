import { ms } from "./files.js";
import { nl } from "./index.ts";
import { Pts } from "./markdownFrontmatter.js";
import { Ul } from "./path_2.js";
import { Lr } from "./resources.js";
import { E } from "./tslib.es6.js";
var PLn, l5i, nuv, iuv, ruv, suv, ouv;
export { PLn, iuv, l5i, nuv, ouv, ruv, suv };
var __wakaru_c5i_initialized = false;
export function c5i() {
if (__wakaru_c5i_initialized) return;
__wakaru_c5i_initialized = true;
"use strict";
E(), nl(), Ul(), Lr(), Pts(), ms(), PLn = "notes.md", l5i = "tasks.md", nuv = /^\s*<tldr>([\s\S]*?)<\/tldr>(?=\s|$)/, iuv = /<\/?tldr(?:\s[^>]*)?\/?>/i, ruv = /<\/?tldr(?:\s[^>]*)?\/?>/gi, suv = /^ {0,3}(?:`{3,}|~{3,})/, ouv = /^\uFEFF/;

}
