import { gPn } from "./ComposerDebugReproductionUtils.js";
import { sd } from "./chat_pb.js";
import { E } from "./tslib.es6.js";
import { $h } from "./use-reactive.react_2.js";
import { Af } from "./use-solid-selector.react_2.js";
var TS_, U7i;
export { TS_, U7i };
var __wakaru__VC_initialized = false;
export function _VC() {
if (__wakaru__VC_initialized) return;
__wakaru__VC_initialized = true;
"use strict";
E(), sd(), gPn(), $h(), Af(), TS_ = {
    value: "done",
    onChange: ()=>({
            dispose: ()=>{}
        })
}, U7i = {
    reproSteps: {
        found: !1,
        isOpen: !1,
        content: ""
    },
    sourceBubbleId: void 0
};

}
