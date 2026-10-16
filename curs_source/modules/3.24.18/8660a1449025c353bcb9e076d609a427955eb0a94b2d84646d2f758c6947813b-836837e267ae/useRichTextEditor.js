import { Q01 } from "./EditorHistoryOwnerExtension.js";
import { Fy, Rw } from "./LYd.js";
import { W$r } from "./SearchPlugin.js";
import { iC1 } from "./SearchSelectionScrollExtension.js";
import { uC1 } from "./TaskItemNodeView.js";
import { q01 } from "./anchorLinks.js";
import { m9r } from "./index_160.js";
import { F1a } from "./index_173.js";
import { H01 } from "./index_189.js";
import { v_e } from "./index_41.js";
import { X01 } from "./markdownChunkedRender.js";
import { E } from "./tslib.es6.js";
import { joe } from "./use-latest-ref.js";
var Gxp, uMa, qxp, zxp, Vxp, dMa;
export { Gxp, Vxp, dMa, qxp, uMa, zxp };
var __wakaru_Kxp_initialized = false;
export function Kxp() {
if (__wakaru_Kxp_initialized) return;
__wakaru_Kxp_initialized = true;
"use strict";
E(), Fy(), m9r(), H01(), v_e(), F1a(), joe(), q01(), X01(), Q01(), W$r(), iC1(), uC1(), Gxp = /&(?:(#\d+;)|(#x[0-9A-Fa-f]+;)|(\w+);?)/gi, uMa = 1114111, qxp = /((?:^|\r?\n)[\t ]*[-+*][\t ]+\[[ xX]\][\t ]+[^\r\n]*)(?:\r?\n[\t ]*){2,}$/, zxp = /(^|[^~])~(?!~)/, Vxp = Rw.create({
    name: "literalSingleTilde",
    markdownTokenizer: {
        name: "literalSingleTilde",
        level: "inline",
        start: (t)=>{
            const e = zxp.exec(t);
            return e ? e.index + e[1].length : -1;
        },
        tokenize: (t)=>{
            if (!(!t.startsWith("~") || t.startsWith("~~"))) return {
                type: "text",
                raw: "~",
                text: "~"
            };
        }
    }
}), dMa = 131072;

}
