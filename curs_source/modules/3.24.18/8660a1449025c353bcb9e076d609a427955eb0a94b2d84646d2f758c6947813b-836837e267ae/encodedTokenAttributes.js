import { E } from "./tslib.es6.js";
var Egn, S7;
export { Egn, S7 };
var __wakaru_Obt_initialized = false;
export function Obt() {
if (__wakaru_Obt_initialized) return;
__wakaru_Obt_initialized = true;
"use strict";
E(), Egn = ((t)=>(t[t.Other = 0] = "Other", t[t.Comment = 1] = "Comment", t[t.String = 2] = "String", t[t.RegEx = 3] = "RegEx", t))(Egn || {}), S7 = class {
    static getLanguageId(t) {
        return (t & 255) >>> 0;
    }
    static getTokenType(t) {
        return (t & 768) >>> 8;
    }
    static containsBalancedBrackets(t) {
        return (t & 1024) !== 0;
    }
    static getFontStyle(t) {
        return (t & 30720) >>> 11;
    }
    static getForeground(t) {
        return (t & 16744448) >>> 15;
    }
    static getBackground(t) {
        return (t & 4278190080) >>> 24;
    }
    static getClassNameFromMetadata(t) {
        let n = "mtk" + this.getForeground(t);
        const i = this.getFontStyle(t);
        return i & 1 && (n += " mtki"), i & 2 && (n += " mtkb"), i & 4 && (n += " mtku"), i & 8 && (n += " mtks"), n;
    }
    static getInlineStyleFromMetadata(t, e) {
        const n = this.getForeground(t), i = this.getFontStyle(t);
        let r = `color: ${e[n]};`;
        i & 1 && (r += "font-style: italic;"), i & 2 && (r += "font-weight: bold;");
        let s = "";
        return i & 4 && (s += " underline"), i & 8 && (s += " line-through"), s && (r += `text-decoration:${s};`), r;
    }
    static getPresentationFromMetadata(t) {
        const e = this.getForeground(t), n = this.getFontStyle(t);
        return {
            foreground: e,
            italic: !!(n & 1),
            bold: !!(n & 2),
            underline: !!(n & 4),
            strikethrough: !!(n & 8)
        };
    }
};

}
