import { wiv } from "./EditorHistoryOwnerExtension.js";
import { FFs } from "./SearchPlugin.js";
import { Iiv } from "./SearchSelectionScrollExtension.js";
import { Niv } from "./TaskItemNodeView.js";
import { fiv } from "./anchorLinks.js";
import { tNi } from "./index_154.js";
import { jRs } from "./index_167.js";
import { piv } from "./index_182.js";
import { Ife } from "./index_36.js";
import { Siv } from "./markdownChunkedRender.js";
import { A_, bS } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { pY } from "./use-latest-ref.js";
var yhu, b3s, Shu, khu, whu, y3s;
export { Shu, b3s, khu, whu, y3s, yhu };
var __wakaru_$iv_initialized = false;
export function $iv() {
if (__wakaru_$iv_initialized) return;
__wakaru_$iv_initialized = true;
"use strict";
x(), A_(), tNi(), piv(), Ife(), jRs(), pY(), fiv(), Siv(), wiv(), FFs(), Iiv(), Niv(), yhu = /&(?:(#\d+;)|(#x[0-9A-Fa-f]+;)|(\w+);?)/gi, b3s = 1114111, Shu = /((?:^|\r?\n)[\t ]*[-+*][\t ]+\[[ xX]\][\t ]+[^\r\n]*)(?:\r?\n[\t ]*){2,}$/, khu = /(^|[^~])~(?!~)/, whu = bS.create({
    name: "literalSingleTilde",
    markdownTokenizer: {
        name: "literalSingleTilde",
        level: "inline",
        start: (e)=>{
            const t = khu.exec(e);
            return t ? t.index + t[1].length : -1;
        },
        tokenize: (e)=>{
            if (!(!e.startsWith("~") || e.startsWith("~~"))) return {
                type: "text",
                raw: "~",
                text: "~"
            };
        }
    }
}), y3s = 131072;

}
