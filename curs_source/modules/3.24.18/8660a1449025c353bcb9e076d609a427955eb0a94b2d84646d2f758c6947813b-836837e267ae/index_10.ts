import { l91 } from "./context-injection.ts";
import { c91 } from "./controlled_3.ts";
import { v91 } from "./conversation-step-timing.ts";
import { w91 } from "./domain-utils.ts";
import { M91 } from "./goal-continuation.ts";
import { D91 } from "./goal-pursuit-guidelines.ts";
import { O91 } from "./interaction-listener.ts";
import { VSm } from "./interaction-queries.ts";
import { U91 } from "./interaction-query-ids.ts";
import { j91 } from "./interaction-updates.ts";
import { $91 } from "./mcp-auth-flow.ts";
import { h91 } from "./remote_2.ts";
import { g91 } from "./steer-outbox.ts";
import { E } from "./tslib.es6.js";
var __wakaru_FO_initialized = false;
export function FO() {
if (__wakaru_FO_initialized) return;
__wakaru_FO_initialized = true;
E(), l91(), c91(), h91(), g91(), v91(), w91(), M91(), D91(), O91(), VSm(), U91(), j91(), $91();

}
