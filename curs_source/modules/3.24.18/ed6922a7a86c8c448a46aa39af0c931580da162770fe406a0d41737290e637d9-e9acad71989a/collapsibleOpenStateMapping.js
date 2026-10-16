import { C6l, TMi } from "./CollapsiblePanelDataAttributes.js";
import { T6l, dgf } from "./CollapsibleTriggerDataAttributes.js";
import { x } from "./tslib.es6.js";
var E6l, x6l, I6l, A6l;
export { A6l, E6l, I6l, x6l };
var __wakaru_R6l_initialized = false;
export function R6l() {
if (__wakaru_R6l_initialized) return;
__wakaru_R6l_initialized = true;
x(), C6l(), dgf(), E6l = {
    [TMi.open]: ""
}, x6l = {
    [TMi.closed]: ""
}, I6l = {
    open (e) {
        return e ? {
            [T6l.panelOpen]: ""
        } : null;
    }
}, A6l = {
    open (e) {
        return e ? E6l : x6l;
    }
};

}
