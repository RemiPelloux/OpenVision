import { i } from "./plugin-brand-icon.js";
import * as YWn from "./react-runtime/react/esm-index-production.js";
function Fer() {
    return YWn.useContext(gIe);
}
var gIe;
export { Fer, gIe };
var __wakaru_Oer_initialized = false;
export function Oer() {
if (__wakaru_Oer_initialized) return;
__wakaru_Oer_initialized = true;
"use client";
gIe = YWn.createContext({
    register: i(()=>{}, "register"),
    unregister: i(()=>{}, "unregister"),
    subscribeMapChange: i(()=>()=>{}, "subscribeMapChange"),
    elementsRef: {
        current: []
    },
    nextIndexRef: {
        current: 0
    }
}), gIe.displayName = "CompositeListContext", i(Fer, "useCompositeListContext");

}
