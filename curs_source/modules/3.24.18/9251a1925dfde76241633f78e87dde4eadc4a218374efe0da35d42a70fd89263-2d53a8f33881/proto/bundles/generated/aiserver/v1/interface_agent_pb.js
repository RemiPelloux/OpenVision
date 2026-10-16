import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage134, __protoMessage3130, InterfaceAgentClientState, InterfaceAgentStatus, InterfaceAgentStatus_Status;
export { InterfaceAgentClientState, InterfaceAgentStatus, InterfaceAgentStatus_Status, __protoMessage3130, __protoPackage134 };
var __wakaru_init_interface_agent_pb_initialized = false;
export function init_interface_agent_pb() {
if (__wakaru_init_interface_agent_pb_initialized) return;
__wakaru_init_interface_agent_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage134 = "aiserver.v1.";
__protoMessage3130 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage134;
    }
};
InterfaceAgentClientState = class _InterfaceAgentClientState extends __protoMessage3130 {
    constructor(data){
        super();
        this.interfaceRelativeWorkspacePath = "";
        this.interfaceLines = [];
        this.testLines = [];
        this.implementationLines = [];
        this.language = "";
        this.testingFramework = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InterfaceAgentClientState().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InterfaceAgentClientState().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InterfaceAgentClientState().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InterfaceAgentClientState, a, b2);
    }
    static $() {
        return [
            "InterfaceAgentClientState|3 interface_relative_workspace_path 9|4 interface_lines 9*|5 test_relative_workspace_path 9?|10 test_lines 9*|6 implementation_relative_workspace_path 9?|7 implementation_lines 9*|8 language 9|9 testing_framework 9"
        ];
    }
};
InterfaceAgentStatus = class _InterfaceAgentStatus extends __protoMessage3130 {
    constructor(data){
        super();
        this.validateConfiguration = InterfaceAgentStatus_Status.UNSPECIFIED;
        this.stubNewFunction = InterfaceAgentStatus_Status.UNSPECIFIED;
        this.verifySpec = InterfaceAgentStatus_Status.UNSPECIFIED;
        this.writeTestPlan = InterfaceAgentStatus_Status.UNSPECIFIED;
        this.writeTests = InterfaceAgentStatus_Status.UNSPECIFIED;
        this.writeImplementation = InterfaceAgentStatus_Status.UNSPECIFIED;
        this.implementNewFunction = InterfaceAgentStatus_Status.UNSPECIFIED;
        this.runTests = InterfaceAgentStatus_Status.UNSPECIFIED;
        this.validateConfigurationMessage = "";
        this.stubNewFunctionMessage = "";
        this.verifySpecMessage = "";
        this.writeTestPlanMessage = "";
        this.writeTestsMessage = "";
        this.writeImplementationMessage = "";
        this.implementNewFunctionMessage = "";
        this.runTestsMessage = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _InterfaceAgentStatus().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _InterfaceAgentStatus().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _InterfaceAgentStatus().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_InterfaceAgentStatus, a, b2);
    }
    static $() {
        return [
            "InterfaceAgentStatus|1 validate_configuration #0|2 stub_new_function #0|3 verify_spec #0|15 write_test_plan #0|4 write_tests #0|5 write_implementation #0|6 implement_new_function #0|7 run_tests #0|8 validate_configuration_message 9|9 stub_new_function_message 9|10 verify_spec_message 9|16 write_test_plan_message 9|11 write_tests_message 9|12 write_implementation_message 9|13 implement_new_function_message 9|14 run_tests_message 9",
            InterfaceAgentStatus_Status
        ];
    }
};
InterfaceAgentStatus_Status = enumType2(proto3, __protoPackage134, "InterfaceAgentStatus.Status", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "WAITING"
    ],
    [
        2,
        "RUNNING"
    ],
    [
        3,
        "SUCCESS"
    ],
    [
        4,
        "FAILURE"
    ]
], 1);

}
