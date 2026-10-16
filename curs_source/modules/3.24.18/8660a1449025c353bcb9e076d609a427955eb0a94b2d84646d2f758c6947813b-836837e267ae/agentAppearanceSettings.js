import { hJn, pa, w_r } from "./constants_8.js";
import { E } from "./tslib.es6.js";
var hee, pee, UKe;
export { UKe, hee, pee };
var __wakaru_hOi_initialized = false;
export function hOi() {
if (__wakaru_hOi_initialized) return;
__wakaru_hOi_initialized = true;
"use strict";
E(), pa(), hee = {
    label: "Code Block Word Wrap",
    description: "Wrap long lines in Agent conversation code blocks",
    searchAliases: [
        "word wrap",
        "code blocks",
        "conversation"
    ],
    defaultValue: w_r
}, pee = {
    label: "Themed Diff Backgrounds",
    description: "Use themed background colors for inline code diffs",
    searchAliases: [
        "diff",
        "background",
        "inline diff",
        "colors"
    ],
    defaultValue: hJn
}, UKe = {
    label: "Chat Width",
    description: "Set the maximum width of Agent conversations",
    searchAliases: [
        "chat width",
        "max width",
        "conversation width",
        "wide",
        "narrow",
        "tables",
        "chatMaxWidth"
    ]
};

}
