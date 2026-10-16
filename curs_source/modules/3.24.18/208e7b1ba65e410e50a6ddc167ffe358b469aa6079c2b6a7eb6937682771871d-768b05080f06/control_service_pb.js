import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
import { lr } from "./utils_pb_2.js";
var YDe, JDe, XDe, nU, QDe;
export { JDe, QDe, XDe, YDe, nU };
var __wakaru_qat_initialized = false;
export function qat() {
if (__wakaru_qat_initialized) return;
__wakaru_qat_initialized = true;
"use strict";
h(), F(), lr(), YDe = c.makeEnum("agent.v1.ResourceScope", [
    {
        no: 0,
        name: "RESOURCE_SCOPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "RESOURCE_SCOPE_POD_VM",
        localName: "POD_VM"
    },
    {
        no: 2,
        name: "RESOURCE_SCOPE_CONTAINER",
        localName: "CONTAINER"
    },
    {
        no: 3,
        name: "RESOURCE_SCOPE_HOST",
        localName: "HOST"
    }
]), JDe = c.makeEnum("agent.v1.ResourcePressure", [
    {
        no: 0,
        name: "RESOURCE_PRESSURE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "RESOURCE_PRESSURE_NONE",
        localName: "NONE"
    },
    {
        no: 2,
        name: "RESOURCE_PRESSURE_HIGH",
        localName: "HIGH"
    }
]), XDe = c.makeMessageType("agent.v1.ResourceLimits", ()=>[
        {
            no: 1,
            name: "scope",
            kind: "enum",
            T: c.getEnumType(YDe)
        },
        {
            no: 2,
            name: "memory_limit_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "cpu_limit_mcores",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "disk_limit_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "display_label",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), nU = c.makeMessageType("agent.v1.ResourceSample", ()=>[
        {
            no: 1,
            name: "sampled_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "memory_used_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "memory_available_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "cpu_used_mcores",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "disk_used_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 6,
            name: "pressure",
            kind: "enum",
            T: c.getEnumType(JDe)
        }
    ]), QDe = c.makeMessageType("agent.v1.GetResourceUsageResponse", ()=>[
        {
            no: 1,
            name: "limits",
            kind: "message",
            T: XDe
        },
        {
            no: 2,
            name: "current",
            kind: "message",
            T: nU
        },
        {
            no: 3,
            name: "history",
            kind: "message",
            T: nU,
            repeated: !0
        },
        {
            no: 4,
            name: "next_cursor",
            kind: "scalar",
            T: 9
        }
    ]);

}
