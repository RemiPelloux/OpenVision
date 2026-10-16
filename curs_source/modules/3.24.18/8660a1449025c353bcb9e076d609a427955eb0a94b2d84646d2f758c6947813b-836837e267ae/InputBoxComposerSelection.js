import { S9e } from "./SimpleMarkdown.react.js";
import { ME, Ok, _Me, aS } from "./Ycg.js";
import { eD } from "./scrollableDiv.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { Ea, Le, wt } from "./yBp.js";
import { Ee, xn } from "./ze.js";
var QEg, JEg, eIg, bgl, tIg;
export { JEg, QEg, bgl, eIg, tIg };
var __wakaru_TRk_initialized = false;
export function TRk() {
if (__wakaru_TRk_initialized) return;
__wakaru_TRk_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), aS(), S9e(), eD(), QEg = wt("<div><div>"), JEg = wt("<div>"), eIg = Ok(_Me), bgl = "<summary>", tIg = (t)=>(()=>{
        var e = JEg();
        return Le(e, Ee(ME, {
            scrollingDirection: "vertical",
            style: {
                width: "100%",
                height: "100%"
            },
            get children () {
                var n = QEg(), i = n.firstChild;
                return n.style.setProperty("display", "flex"), n.style.setProperty("flex-direction", "column"), n.style.setProperty("padding", "0px 0.4rem"), i.style.setProperty("color", "var(--vscode-descriptionForeground)"), i.style.setProperty("white-space", "pre-wrap"), i.style.setProperty("line-height", "1.4"), i.style.setProperty("font-size", "10px"), Le(i, Ee(eIg, {
                    get rawText () {
                        const r = t.summary.summary.trimStart();
                        return r.startsWith(bgl) ? r.slice(bgl.length, -1) : r;
                    },
                    finished: !0
                })), n;
            }
        })), xn((n)=>Ea(e, {
                "white-space": "pre",
                height: "100px",
                ...t.style
            }, n)), e;
    })();

}
