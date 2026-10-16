import { a } from "./business-error.js";
import { Hd, R1 } from "./unescape.js";
var gc, N1, vc;
export { N1, gc, vc };
var __wakaru_bc_initialized = false;
export function bc() {
if (__wakaru_bc_initialized) return;
__wakaru_bc_initialized = true;
R1(), gc = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: [
        "br",
        "strong",
        "i",
        "p"
    ],
    useSuspense: !0,
    unescape: Hd,
    transDefaultProps: void 0
}, N1 = a((e = {})=>{
    gc = {
        ...gc,
        ...e
    };
}, "setDefaults"), vc = a(()=>gc, "getDefaults");

}
