import { E } from "./tslib.es6.js";
import { createContext as Dca } from "./react-runtime/react/esm-index-production.js";
var R_e, Nca, Lca;
export { Lca, Nca, R_e };
var __wakaru_Oca_initialized = false;
export function Oca() {
if (__wakaru_Oca_initialized) return;
__wakaru_Oca_initialized = true;
"use strict";
E(), R_e = Dca({
    allowMath: !1,
    allowMermaid: !1,
    isStreaming: !1,
    normalized: !1,
    normalizedHeadingSpacing: "default",
    singleLine: !1,
    size: "md",
    codeBlockWordWrap: !1,
    getSourceText: ()=>""
}), Nca = Dca(!1), Lca = Dca(!1);

}
