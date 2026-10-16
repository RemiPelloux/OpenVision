import { c8i } from "./Zo_.js";
import { Jen } from "./glass-markdown-description.react.js";
import { Gfc } from "./pr-comment-image-trust.js";
import { E } from "./tslib.es6.js";
var zfc, A5s, yl_, Sl_, kl_, wl_, Cl_, Tl_, El_, Il_, xl_, Al_, Rl_, Pl_;
export { A5s, Al_, Cl_, El_, Il_, Pl_, Rl_, Sl_, Tl_, kl_, wl_, xl_, yl_, zfc };
var __wakaru_Ml__initialized = false;
export function Ml_() {
if (__wakaru_Ml__initialized) return;
__wakaru_Ml__initialized = true;
"use strict";
E(), Jen(), Gfc(), zfc = {
    stripHtmlComments: !0
}, A5s = c8i, yl_ = /<a\b[^>]*>\s*(?:<picture\b[^>]*>[\s\S]*?<\/picture>|<img\b[^>]*\/?>)\s*<\/a>/gi, Sl_ = /<picture\b[^>]*>[\s\S]*?<\/picture>/gi, kl_ = /<img\b[^>]*\/?>/gi, wl_ = /^\s*(`{3,}|~{3,})/, Cl_ = /[\s()<>"'`\\]/, Tl_ = /<img\b[^>]*\/?>/i, El_ = /^<a\b[^>]*>/i, Il_ = /(?<![\w-])src\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/i, xl_ = /(?<![\w-])alt\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/i, Al_ = /(?<![\w-])width\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/i, Rl_ = /(?<![\w-])height\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/i, Pl_ = /(?<![\w-])href\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/i;

}
