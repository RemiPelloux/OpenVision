import { x } from "./tslib.es6.js";
var R2t, s2;
export { R2t, s2 };
var __wakaru_EBe_initialized = false;
export function EBe() {
if (__wakaru_EBe_initialized) return;
__wakaru_EBe_initialized = true;
"use strict";
x(), R2t = ((e)=>(e[e.Other = 0] = "Other", e[e.Comment = 1] = "Comment", e[e.String = 2] = "String", e[e.RegEx = 3] = "RegEx", e))(R2t || {}), s2 = class {
    static getLanguageId(e) {
        return (e & 255) >>> 0;
    }
    static getTokenType(e) {
        return (e & 768) >>> 8;
    }
    static containsBalancedBrackets(e) {
        return (e & 1024) !== 0;
    }
    static getFontStyle(e) {
        return (e & 30720) >>> 11;
    }
    static getForeground(e) {
        return (e & 16744448) >>> 15;
    }
    static getBackground(e) {
        return (e & 4278190080) >>> 24;
    }
    static getClassNameFromMetadata(e) {
        let n = "mtk" + this.getForeground(e);
        const i = this.getFontStyle(e);
        return i & 1 && (n += " mtki"), i & 2 && (n += " mtkb"), i & 4 && (n += " mtku"), i & 8 && (n += " mtks"), n;
    }
    static getInlineStyleFromMetadata(e, t) {
        const n = this.getForeground(e), i = this.getFontStyle(e);
        let r = `color: ${t[n]};`;
        i & 1 && (r += "font-style: italic;"), i & 2 && (r += "font-weight: bold;");
        let s = "";
        return i & 4 && (s += " underline"), i & 8 && (s += " line-through"), s && (r += `text-decoration:${s};`), r;
    }
    static getPresentationFromMetadata(e) {
        const t = this.getForeground(e), n = this.getFontStyle(e);
        return {
            foreground: t,
            italic: !!(n & 1),
            bold: !!(n & 2),
            underline: !!(n & 4),
            strikethrough: !!(n & 8)
        };
    }
};

}
