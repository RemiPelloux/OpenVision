import { Fa } from "./Iwo.js";
import { ttc } from "./glass-markdown-link.js";
import { Ki } from "./network.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
var e2v, t2v, utc, n2v, i2v, r2v, s2v, o2v;
export { e2v, i2v, n2v, o2v, r2v, s2v, t2v, utc };
var __wakaru_a2v_initialized = false;
export function a2v() {
if (__wakaru_a2v_initialized) return;
__wakaru_a2v_initialized = true;
"use strict";
E(), Ki(), Fa(), fn(), ttc(), e2v = new Set([
    "equation",
    "equation*",
    "displaymath",
    "align",
    "align*",
    "aligned",
    "gather",
    "gather*",
    "multline",
    "multline*",
    "eqnarray",
    "eqnarray*"
]), t2v = new Set([
    "theorem",
    "lemma",
    "proof",
    "definition",
    "proposition",
    "corollary",
    "remark",
    "example"
]), utc = new Set([
    "verbatim",
    "lstlisting"
]), n2v = new Set([
    "%",
    "$",
    "_",
    "&",
    "{",
    "}"
]), i2v = new Set([
    "maketitle",
    "tableofcontents",
    "noindent",
    "centering",
    "raggedright",
    "raggedleft",
    "flushleft",
    "flushright",
    "newpage",
    "clearpage",
    "pagebreak",
    "linebreak",
    "hline",
    "today",
    "and"
]), r2v = new Set([
    "documentclass",
    "usepackage",
    "RequirePackage",
    "newcommand",
    "renewcommand",
    "providecommand",
    "newenvironment",
    "renewenvironment",
    "label",
    "hspace",
    "vspace",
    "vskip",
    "includegraphics",
    "input",
    "include",
    "bibliography",
    "bibliographystyle"
]), s2v = {
    section: "##",
    subsection: "###",
    subsubsection: "####"
}, o2v = {
    textbf: "**",
    underline: "**",
    textit: "*",
    emph: "*",
    textsl: "*"
};

}
