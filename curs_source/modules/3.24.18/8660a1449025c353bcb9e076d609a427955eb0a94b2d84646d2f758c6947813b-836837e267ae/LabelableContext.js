import { Ax } from "./LYd.js";
import { vA } from "./empty.js";
import { E } from "./tslib.es6.js";
import * as Qah from "./react-runtime/react/esm-index-production.js";
var v2r;
export { v2r };
var __wakaru_VQ_initialized = false;
export function VQ() {
if (__wakaru_VQ_initialized) return;
__wakaru_VQ_initialized = true;
E(), vA(), v2r = Qah.createContext({
    controlId: void 0,
    registerControlId: Ax,
    labelId: void 0,
    setLabelId: Ax,
    messageIds: [],
    setMessageIds: Ax,
    getDescriptionProps: (t)=>t
}), process.env.NODE_ENV !== "production" && (v2r.displayName = "LabelableContext");

}
