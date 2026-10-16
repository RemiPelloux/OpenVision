import { DL0, TL0, UL0, _L0, kL0 } from "./BPv.js";
import { bL0 } from "./connecting-step.react.js";
import { wL0 } from "./dialog-footer.react.js";
import { EL0 } from "./dialog-header.react.js";
import { NL0 } from "./dialog-root.react.js";
import { jL0 } from "./host-step.react.js";
import { kDv, m5n, znc } from "./remote-connect-view.types.js";
import { E } from "./tslib.es6.js";
var idt;
export { idt };
var __wakaru_vMs_initialized = false;
export function vMs() {
if (__wakaru_vMs_initialized) return;
__wakaru_vMs_initialized = true;
"use strict";
E(), bL0(), wL0(), EL0(), NL0(), jL0(), m5n(), m5n(), idt = {
    ConnectingStep: _L0,
    DialogFooter: kL0,
    DialogHeader: TL0,
    DialogRoot: DL0,
    HostStep: UL0,
    FLOW_STEPS: kDv,
    HOST_STEP_MAX_RECENT_HOSTS: znc
};

}
