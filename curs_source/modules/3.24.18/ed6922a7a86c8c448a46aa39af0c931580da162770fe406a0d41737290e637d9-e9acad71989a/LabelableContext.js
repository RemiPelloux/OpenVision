import { LE } from "./empty.js";
import { Mx } from "./qIc.js";
import { x } from "./tslib.es6.js";
import * as psl from "./react-runtime/react/esm-index-production.js";
var y1i;
export { y1i };
var __wakaru_Bre_initialized = false;
export function Bre() {
if (__wakaru_Bre_initialized) return;
__wakaru_Bre_initialized = true;
x(), LE(), y1i = psl.createContext({
    controlId: void 0,
    registerControlId: Mx,
    labelId: void 0,
    setLabelId: Mx,
    messageIds: [],
    setMessageIds: Mx,
    getDescriptionProps: (e)=>e
}), process.env.NODE_ENV !== "production" && (y1i.displayName = "LabelableContext");

}
