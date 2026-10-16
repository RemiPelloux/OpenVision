import { QN1 } from "./agent-store.ts";
import { M4p } from "./blob-not-found-error.ts";
import { E4p } from "./blob-read-kind.ts";
import { BSi } from "./blob-store.ts";
import { dL1 } from "./cached-blob-store.ts";
import { hL1 } from "./controlled.ts";
import { wL1 } from "./reference.ts";
import { RL1 } from "./retry-blob-store.ts";
import { FSi } from "./serde.ts";
import { w4p } from "./subagent-states.ts";
import { E } from "./tslib.es6.js";
import { Y4p } from "./typed-blob-store.ts";
import { K4p } from "./writethrough-middleware.ts";
var __wakaru_OT_initialized = false;
export function OT() {
if (__wakaru_OT_initialized) return;
__wakaru_OT_initialized = true;
E(), QN1(), E4p(), M4p(), BSi(), dL1(), hL1(), wL1(), RL1(), FSi(), w4p(), Y4p(), K4p();

}
