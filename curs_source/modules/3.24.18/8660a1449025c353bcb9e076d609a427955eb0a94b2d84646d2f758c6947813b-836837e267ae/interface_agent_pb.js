import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var sBo, oBo, dtt;
export { dtt, oBo, sBo };
var __wakaru_$Iy_initialized = false;
export function $Iy() {
if (__wakaru_$Iy_initialized) return;
__wakaru_$Iy_initialized = true;
"use strict";
E(), hr(), sBo = x.makeMessageType("aiserver.v1.InterfaceAgentClientState", ()=>[
        {
            no: 3,
            name: "interface_relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "interface_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "test_relative_workspace_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "test_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "implementation_relative_workspace_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "implementation_lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 8,
            name: "language",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "testing_framework",
            kind: "scalar",
            T: 9
        }
    ]), oBo = x.makeMessageType("aiserver.v1.InterfaceAgentStatus", ()=>[
        {
            no: 1,
            name: "validate_configuration",
            kind: "enum",
            T: x.getEnumType(dtt)
        },
        {
            no: 2,
            name: "stub_new_function",
            kind: "enum",
            T: x.getEnumType(dtt)
        },
        {
            no: 3,
            name: "verify_spec",
            kind: "enum",
            T: x.getEnumType(dtt)
        },
        {
            no: 15,
            name: "write_test_plan",
            kind: "enum",
            T: x.getEnumType(dtt)
        },
        {
            no: 4,
            name: "write_tests",
            kind: "enum",
            T: x.getEnumType(dtt)
        },
        {
            no: 5,
            name: "write_implementation",
            kind: "enum",
            T: x.getEnumType(dtt)
        },
        {
            no: 6,
            name: "implement_new_function",
            kind: "enum",
            T: x.getEnumType(dtt)
        },
        {
            no: 7,
            name: "run_tests",
            kind: "enum",
            T: x.getEnumType(dtt)
        },
        {
            no: 8,
            name: "validate_configuration_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 9,
            name: "stub_new_function_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 10,
            name: "verify_spec_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 16,
            name: "write_test_plan_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "write_tests_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 12,
            name: "write_implementation_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "implement_new_function_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 14,
            name: "run_tests_message",
            kind: "scalar",
            T: 9
        }
    ]), dtt = x.makeEnum("aiserver.v1.InterfaceAgentStatus.Status", [
    {
        no: 0,
        name: "STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "STATUS_WAITING",
        localName: "WAITING"
    },
    {
        no: 2,
        name: "STATUS_RUNNING",
        localName: "RUNNING"
    },
    {
        no: 3,
        name: "STATUS_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 4,
        name: "STATUS_FAILURE",
        localName: "FAILURE"
    }
]);

}
