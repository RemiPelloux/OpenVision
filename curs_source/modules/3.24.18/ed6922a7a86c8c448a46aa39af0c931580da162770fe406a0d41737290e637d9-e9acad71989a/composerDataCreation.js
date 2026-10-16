import { dSt } from "./A3u.js";
import { Fo } from "./HVr.js";
import { zd } from "./agent_pb.js";
import { FKe } from "./canvasComposer.js";
import { Hu } from "./chat_pb.js";
import { T2 } from "./composerCapabilities.js";
import { Wf } from "./composerData.js";
import { wFu } from "./composerHeaderStorageUtils.js";
import { _3u } from "./composerMigrations.js";
import { Jm } from "./composer_pb.js";
import { eg } from "./constants_18.js";
import { jZe } from "./generate_image_tool_pb.js";
import { A1 } from "./index_5.ts";
import { bi } from "./protobuf.js";
import { iL } from "./selectedContextData.js";
import { Lk } from "./sentry.js";
import { V8i } from "./serializeToolformerBubbleData.js";
import { cSt } from "./slimConversationStateForBubbleSnapshot.js";
import { nv } from "./spanUtils.js";
import { jS } from "./store.js";
import { ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
import { Qt } from "./uri.js";
import { b1 } from "./utils_16.js";
import { _C } from "./utils_23.js";
import { hu } from "./utils_pb.js";
import { Js } from "./uuid.js";
import { ci } from "./workspace.js";
function Zke(e, t) {
    const n = typeof t == "string" ? t : void 0, i = typeof t != "string" ? {
        captureContext: t
    } : void 0;
    return nv().captureMessage(e, n, i);
}
var U3u, mXs, h7i, $3u, p7i;
export { $3u, U3u, Zke, h7i, mXs, p7i };
var __wakaru_dJe_initialized = false;
export function dJe() {
if (__wakaru_dJe_initialized) return;
__wakaru_dJe_initialized = true;
"use strict";
x(), A1(), jS(), bi(), zd(), jZe(), Hu(), Jm(), ql(), hu(), Fo(), Qt(), Js(), Lk(), ci(), FKe(), iL(), b1(), V8i(), Wf(), wFu(), T2(), cSt(), _3u(), eg(), _C(), U3u = !1, mXs = 50, h7i = 200, $3u = 20, p7i = (e)=>JSON.stringify(dSt(e), (t, n)=>typeof n == "bigint" ? (Zke("BigInt encountered during JSON.stringify in stringifyMessage", {
            level: "warning",
            tags: {
                client_error_type: "bigint_serialization"
            },
            extra: {
                key: t,
                value: n.toString()
            }
        }), Number(n)) : n);

}
