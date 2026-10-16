import { Ga } from "./Iwo.js";
import { ju } from "./agent_pb.js";
import { DHe } from "./canvasComposer.js";
import { sd } from "./chat_pb.js";
import { y6 } from "./composerCapabilities.js";
import { uv } from "./composerData.js";
import { czr } from "./composerHeaderStorageUtils.js";
import { lBp } from "./composerMigrations.js";
import { tf } from "./composer_pb.js";
import { Ef } from "./constants_18.js";
import { U_t } from "./generate_image_tool_pb.js";
import { OT } from "./index_5.ts";
import { hr } from "./protobuf.js";
import { LM } from "./selectedContextData.js";
import { Q0 } from "./sentry.js";
import { azr } from "./serializeToolformerBubbleData.js";
import { wWt } from "./slimConversationStateForBubbleSnapshot.js";
import { Kb } from "./spanUtils.js";
import { v1 } from "./store.js";
import { Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { oT } from "./utils_16.js";
import { rC } from "./utils_23.js";
import { Hu } from "./utils_pb.js";
import { Xo } from "./uuid_2.js";
import { Sr } from "./workspace.js";
import { xWt } from "./yBp.js";
function TOe(t, e) {
    const n = typeof e == "string" ? e : void 0, i = typeof e != "string" ? {
        captureContext: e
    } : void 0;
    return Kb().captureMessage(t, n, i);
}
var DBp, bFa, Mzr, NBp, Dzr;
export { DBp, Dzr, Mzr, NBp, TOe, bFa };
var __wakaru_O0t_initialized = false;
export function O0t() {
if (__wakaru_O0t_initialized) return;
__wakaru_O0t_initialized = true;
"use strict";
E(), OT(), v1(), hr(), ju(), U_t(), sd(), tf(), Pu(), Hu(), Ga(), fn(), Xo(), Q0(), Sr(), DHe(), LM(), oT(), azr(), uv(), czr(), y6(), wWt(), lBp(), Ef(), rC(), DBp = !1, bFa = 50, Mzr = 200, NBp = 20, Dzr = (t)=>JSON.stringify(xWt(t), (e, n)=>typeof n == "bigint" ? (TOe("BigInt encountered during JSON.stringify in stringifyMessage", {
            level: "warning",
            tags: {
                client_error_type: "bigint_serialization"
            },
            extra: {
                key: e,
                value: n.toString()
            }
        }), Number(n)) : n);

}
