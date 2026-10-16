import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var NDo, LDo, qei, fpd, ODo, vpd, _pd;
export { LDo, NDo, ODo, _pd, fpd, qei, vpd };
var __wakaru_zei_initialized = false;
export function zei() {
if (__wakaru_zei_initialized) return;
__wakaru_zei_initialized = true;
"use strict";
E(), hr(), NDo = x.makeMessageType("agent.v1.ApplyAgentDiffToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: LDo
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: qei
        }
    ]), LDo = x.makeMessageType("agent.v1.ApplyAgentDiffArgs", ()=>[
        {
            no: 1,
            name: "agent_id",
            kind: "scalar",
            T: 9
        }
    ]), qei = x.makeMessageType("agent.v1.ApplyAgentDiffResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: fpd,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: _pd,
            oneof: "result"
        }
    ]), fpd = x.makeMessageType("agent.v1.ApplyAgentDiffSuccess", ()=>[
        {
            no: 1,
            name: "applied_changes",
            kind: "message",
            T: ODo,
            repeated: !0
        }
    ]), ODo = x.makeMessageType("agent.v1.AppliedAgentChange", ()=>[
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
            T: x.getEnumType(vpd)
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
    ]), vpd = x.makeEnum("agent.v1.AppliedAgentChange.ChangeType", [
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
]), _pd = x.makeMessageType("agent.v1.ApplyAgentDiffError", ()=>[
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
            T: ODo,
            repeated: !0
        }
    ]);

}
