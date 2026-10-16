import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var lz, dz, xP, uz, FP, mz, pz;
export { FP, dz, lz, mz, pz, uz, xP };
var __wakaru_hz_initialized = false;
export function hz() {
if (__wakaru_hz_initialized) return;
__wakaru_hz_initialized = true;
"use strict";
h(), F(), lz = c.makeMessageType("agent.v1.ApplyAgentDiffToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: dz
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: xP
        }
    ]), dz = c.makeMessageType("agent.v1.ApplyAgentDiffArgs", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        }
    ]), xP = c.makeMessageType("agent.v1.ApplyAgentDiffResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: uz,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: pz,
            oneof: "result"
        }
    ]), uz = c.makeMessageType("agent.v1.ApplyAgentDiffSuccess", ()=>[
        {
            no: 1,
            name: "applied_changes",
            kind: "message",
            T: FP,
            repeated: !0
        }
    ]), FP = c.makeMessageType("agent.v1.AppliedAgentChange", ()=>[
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
            T: c.getEnumType(mz)
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
    ]), mz = c.makeEnum("agent.v1.AppliedAgentChange.ChangeType", [
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
]), pz = c.makeMessageType("agent.v1.ApplyAgentDiffError", ()=>[
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
            T: FP,
            repeated: !0
        }
    ]);

}
