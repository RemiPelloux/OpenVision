import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var eBs, tBs, Xxn, fmu, nBs, vmu, _mu;
export { Xxn, _mu, eBs, fmu, nBs, tBs, vmu };
var __wakaru_Zxn_initialized = false;
export function Zxn() {
if (__wakaru_Zxn_initialized) return;
__wakaru_Zxn_initialized = true;
"use strict";
x(), bi(), eBs = k.makeMessageType("agent.v1.ApplyAgentDiffToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: tBs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Xxn
        }
    ]), tBs = k.makeMessageType("agent.v1.ApplyAgentDiffArgs", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        }
    ]), Xxn = k.makeMessageType("agent.v1.ApplyAgentDiffResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: fmu,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: _mu,
            oneof: "result"
        }
    ]), fmu = k.makeMessageType("agent.v1.ApplyAgentDiffSuccess", ()=>[
        {
            no: 1,
            name: "applied_changes",
            kind: "message",
            T: nBs,
            repeated: !0
        }
    ]), nBs = k.makeMessageType("agent.v1.AppliedAgentChange", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "change_type",
            kind: "enum",
            T: k.getEnumType(vmu)
        },
        {
            no: 3,
            name: "before_content",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "after_content",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "error",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "message_for_model",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), vmu = k.makeEnum("agent.v1.AppliedAgentChange.ChangeType", [
    {
        no: 0,
        name: "CHANGE_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CHANGE_TYPE_CREATED",
        localName: "CREATED"
    },
    {
        no: 2,
        name: "CHANGE_TYPE_MODIFIED",
        localName: "MODIFIED"
    },
    {
        no: 3,
        name: "CHANGE_TYPE_DELETED",
        localName: "DELETED"
    }
]), _mu = k.makeMessageType("agent.v1.ApplyAgentDiffError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "applied_changes",
            kind: "message",
            T: nBs,
            repeated: !0
        }
    ]);

}
