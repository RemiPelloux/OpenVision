import { x } from "./tslib.es6.js";
import * as Psl from "./react-runtime/react/esm-index-production.js";
var S1i;
export { S1i };
var __wakaru_Lsl_initialized = false;
export function Lsl() {
if (__wakaru_Lsl_initialized) return;
__wakaru_Lsl_initialized = true;
x(), S1i = Psl.createContext({
    register: ()=>{},
    unregister: ()=>{},
    subscribeMapChange: ()=>()=>{},
    elementsRef: {
        current: []
    },
    nextIndexRef: {
        current: 0
    }
}), process.env.NODE_ENV !== "production" && (S1i.displayName = "CompositeListContext");

}
