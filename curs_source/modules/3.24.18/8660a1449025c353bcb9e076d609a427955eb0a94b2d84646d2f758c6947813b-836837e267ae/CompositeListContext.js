import { E } from "./tslib.es6.js";
import * as vlh from "./react-runtime/react/esm-index-production.js";
var k2r;
export { k2r };
var __wakaru__lh_initialized = false;
export function _lh() {
if (__wakaru__lh_initialized) return;
__wakaru__lh_initialized = true;
E(), k2r = vlh.createContext({
    register: ()=>{},
    unregister: ()=>{},
    subscribeMapChange: ()=>()=>{},
    elementsRef: {
        current: []
    },
    nextIndexRef: {
        current: 0
    }
}), process.env.NODE_ENV !== "production" && (k2r.displayName = "CompositeListContext");

}
