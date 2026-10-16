import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { RemoteControlV2Policy, RemoteControlV2UserSettings, init_remote_control_settings_pb } from "./remote_control_settings_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage155, __protoMessage3148, RemoteAgentHostControllerMethod, RemoteAgentHostTargetPresence, RemoteAgentHostControllerPairing, RemoteControlV2RegistrationState, RemoteControlV2RegistrationReason, ControllerTrustStatus, GetRemoteControlV2UserSettingsRequest, GetRemoteControlV2UserSettingsResponse, UpdateRemoteControlV2UserSettingsRequest, UpdateRemoteControlV2UserSettingsResponse, CallAgentHostRequest, CallAgentHostResponse, StreamAgentHostRequest, StreamAgentHostResponse, SharedRemoteAgentHostTarget, ListSharedTargetsRequest, ListSharedTargetsResponse, RevokeSharedTargetRequest, RevokeSharedTargetResponse, GetSharedTargetRegistrationStateRequest, GetSharedTargetRegistrationStateResponse, EnableSharedTargetRequest, EnableSharedTargetResponse, TrustControllerRequest, TrustControllerResponse, GetControllerTrustStatusRequest, GetControllerTrustStatusResponse, ListPendingControllerApprovalsRequest, PendingControllerApproval, ListPendingControllerApprovalsResponse, ApproveControllerRequest, ApproveControllerResponse, RejectControllerRequest, RejectControllerResponse, TrustedController, ListControllersRequest, ListControllersResponse, RevokeControllerRequest, RevokeControllerResponse, UnpairControllerRequest, UnpairControllerResponse;
export { ApproveControllerRequest, ApproveControllerResponse, CallAgentHostRequest, CallAgentHostResponse, ControllerTrustStatus, EnableSharedTargetRequest, EnableSharedTargetResponse, GetControllerTrustStatusRequest, GetControllerTrustStatusResponse, GetRemoteControlV2UserSettingsRequest, GetRemoteControlV2UserSettingsResponse, GetSharedTargetRegistrationStateRequest, GetSharedTargetRegistrationStateResponse, ListControllersRequest, ListControllersResponse, ListPendingControllerApprovalsRequest, ListPendingControllerApprovalsResponse, ListSharedTargetsRequest, ListSharedTargetsResponse, PendingControllerApproval, RejectControllerRequest, RejectControllerResponse, RemoteAgentHostControllerMethod, RemoteAgentHostControllerPairing, RemoteAgentHostTargetPresence, RemoteControlV2RegistrationReason, RemoteControlV2RegistrationState, RevokeControllerRequest, RevokeControllerResponse, RevokeSharedTargetRequest, RevokeSharedTargetResponse, SharedRemoteAgentHostTarget, StreamAgentHostRequest, StreamAgentHostResponse, TrustControllerRequest, TrustControllerResponse, TrustedController, UnpairControllerRequest, UnpairControllerResponse, UpdateRemoteControlV2UserSettingsRequest, UpdateRemoteControlV2UserSettingsResponse, __protoMessage3148, __protoPackage155 };
var __wakaru_init_remote_agent_host_presence_pb_initialized = false;
export function init_remote_agent_host_presence_pb() {
if (__wakaru_init_remote_agent_host_presence_pb_initialized) return;
__wakaru_init_remote_agent_host_presence_pb_initialized = true;
"use strict";
init_esm2();
init_remote_control_settings_pb();
init_compact();
__protoPackage155 = "aiserver.v1.";
__protoMessage3148 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage155;
    }
};
RemoteAgentHostControllerMethod = enumType2(proto3, __protoPackage155, "RemoteAgentHostControllerMethod", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "LIST_SESSIONS"
    ],
    [
        2,
        "WATCH_SESSIONS"
    ],
    [
        3,
        "ATTACH_SESSION"
    ],
    [
        4,
        "GET_SESSION_BLOBS"
    ],
    [
        5,
        "SEND_MESSAGE"
    ],
    [
        6,
        "INTERRUPT_TURN"
    ],
    [
        7,
        "CANCEL_QUEUED_TURN"
    ],
    [
        8,
        "CREATE_SESSION"
    ],
    [
        9,
        "RESPOND_TO_INTERACTION"
    ],
    [
        10,
        "LIST_WORKSPACES"
    ],
    [
        12,
        "SEND_ACTION"
    ],
    [
        13,
        "READ_FILE"
    ],
    [
        14,
        "LIST_SKILLS"
    ]
], 1);
RemoteAgentHostTargetPresence = enumType2(proto3, __protoPackage155, "RemoteAgentHostTargetPresence", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ONLINE"
    ],
    [
        2,
        "OFFLINE"
    ]
], 1);
RemoteAgentHostControllerPairing = enumType2(proto3, __protoPackage155, "RemoteAgentHostControllerPairing", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PAIRED"
    ],
    [
        2,
        "PENDING"
    ],
    [
        3,
        "UNPAIRED"
    ],
    [
        4,
        "REVOKED"
    ]
], 1);
RemoteControlV2RegistrationState = enumType2(proto3, __protoPackage155, "RemoteControlV2RegistrationState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NOT_ENROLLED"
    ],
    [
        2,
        "ENABLED"
    ],
    [
        3,
        "DISABLED"
    ]
], 1);
RemoteControlV2RegistrationReason = enumType2(proto3, __protoPackage155, "RemoteControlV2RegistrationReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "MANUAL"
    ],
    [
        2,
        "AUTOMATIC"
    ]
], 1);
ControllerTrustStatus = enumType2(proto3, __protoPackage155, "ControllerTrustStatus", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PENDING"
    ],
    [
        2,
        "TRUSTED"
    ],
    [
        3,
        "REVOKED"
    ],
    [
        4,
        "REJECTED"
    ],
    [
        5,
        "NONE"
    ]
], 1);
GetRemoteControlV2UserSettingsRequest = class _GetRemoteControlV2UserSettingsRequest extends __protoMessage3148 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetRemoteControlV2UserSettingsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetRemoteControlV2UserSettingsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetRemoteControlV2UserSettingsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetRemoteControlV2UserSettingsRequest, a, b2);
    }
    static $() {
        return [
            "GetRemoteControlV2UserSettingsRequest"
        ];
    }
};
GetRemoteControlV2UserSettingsResponse = class _GetRemoteControlV2UserSettingsResponse extends __protoMessage3148 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetRemoteControlV2UserSettingsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetRemoteControlV2UserSettingsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetRemoteControlV2UserSettingsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetRemoteControlV2UserSettingsResponse, a, b2);
    }
    static $() {
        return [
            "GetRemoteControlV2UserSettingsResponse|1 settings #0|2 policy #1",
            RemoteControlV2UserSettings,
            RemoteControlV2Policy
        ];
    }
};
UpdateRemoteControlV2UserSettingsRequest = class _UpdateRemoteControlV2UserSettingsRequest extends __protoMessage3148 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UpdateRemoteControlV2UserSettingsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UpdateRemoteControlV2UserSettingsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UpdateRemoteControlV2UserSettingsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UpdateRemoteControlV2UserSettingsRequest, a, b2);
    }
    static $() {
        return [
            "UpdateRemoteControlV2UserSettingsRequest|1 settings #0",
            RemoteControlV2UserSettings
        ];
    }
};
UpdateRemoteControlV2UserSettingsResponse = class _UpdateRemoteControlV2UserSettingsResponse extends __protoMessage3148 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UpdateRemoteControlV2UserSettingsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UpdateRemoteControlV2UserSettingsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UpdateRemoteControlV2UserSettingsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UpdateRemoteControlV2UserSettingsResponse, a, b2);
    }
    static $() {
        return [
            "UpdateRemoteControlV2UserSettingsResponse|1 settings #0|2 policy #1",
            RemoteControlV2UserSettings,
            RemoteControlV2Policy
        ];
    }
};
CallAgentHostRequest = class _CallAgentHostRequest extends __protoMessage3148 {
    constructor(data){
        super();
        this.targetId = "";
        this.method = RemoteAgentHostControllerMethod.UNSPECIFIED;
        this.data = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CallAgentHostRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CallAgentHostRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CallAgentHostRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CallAgentHostRequest, a, b2);
    }
    static $() {
        return [
            "CallAgentHostRequest|1 target_id 9|2 method #0|3 data 12",
            RemoteAgentHostControllerMethod
        ];
    }
};
CallAgentHostResponse = class _CallAgentHostResponse extends __protoMessage3148 {
    constructor(data){
        super();
        this.data = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CallAgentHostResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CallAgentHostResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CallAgentHostResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CallAgentHostResponse, a, b2);
    }
    static $() {
        return [
            "CallAgentHostResponse|1 data 12"
        ];
    }
};
StreamAgentHostRequest = class _StreamAgentHostRequest extends __protoMessage3148 {
    constructor(data){
        super();
        this.targetId = "";
        this.method = RemoteAgentHostControllerMethod.UNSPECIFIED;
        this.data = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamAgentHostRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamAgentHostRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamAgentHostRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamAgentHostRequest, a, b2);
    }
    static $() {
        return [
            "StreamAgentHostRequest|1 target_id 9|2 method #0|3 data 12",
            RemoteAgentHostControllerMethod
        ];
    }
};
StreamAgentHostResponse = class _StreamAgentHostResponse extends __protoMessage3148 {
    constructor(data){
        super();
        this.data = new Uint8Array(0);
        this.keepalive = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamAgentHostResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamAgentHostResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamAgentHostResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamAgentHostResponse, a, b2);
    }
    static $() {
        return [
            "StreamAgentHostResponse|1 data 12|2 keepalive 8"
        ];
    }
};
SharedRemoteAgentHostTarget = class _SharedRemoteAgentHostTarget extends __protoMessage3148 {
    constructor(data){
        super();
        this.targetId = "";
        this.displayName = "";
        this.agentHostVersion = "";
        this.presence = RemoteAgentHostTargetPresence.UNSPECIFIED;
        this.enrollmentGeneration = 0;
        this.controllerPairing = RemoteAgentHostControllerPairing.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _SharedRemoteAgentHostTarget().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _SharedRemoteAgentHostTarget().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _SharedRemoteAgentHostTarget().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_SharedRemoteAgentHostTarget, a, b2);
    }
    static $() {
        return [
            "SharedRemoteAgentHostTarget|1 target_id 9|2 display_name 9|3 agent_host_version 9|4 presence #0|5 enrollment_generation 5|6 controller_pairing #1|7 reset_at_ms 3?",
            RemoteAgentHostTargetPresence,
            RemoteAgentHostControllerPairing
        ];
    }
};
ListSharedTargetsRequest = class _ListSharedTargetsRequest extends __protoMessage3148 {
    constructor(data){
        super();
        this.pageSize = 0;
        this.pageToken = "";
        this.controllerThumbprint = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListSharedTargetsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListSharedTargetsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListSharedTargetsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListSharedTargetsRequest, a, b2);
    }
    static $() {
        return [
            "ListSharedTargetsRequest|1 page_size 5|2 page_token 9|3 controller_thumbprint 9"
        ];
    }
};
ListSharedTargetsResponse = class _ListSharedTargetsResponse extends __protoMessage3148 {
    constructor(data){
        super();
        this.targets = [];
        this.nextPageToken = "";
        this.recentlyResetTargets = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListSharedTargetsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListSharedTargetsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListSharedTargetsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListSharedTargetsResponse, a, b2);
    }
    static $() {
        return [
            "ListSharedTargetsResponse|1 targets #0*|2 next_page_token 9|3 recently_reset_targets #0*",
            SharedRemoteAgentHostTarget
        ];
    }
};
RevokeSharedTargetRequest = class _RevokeSharedTargetRequest extends __protoMessage3148 {
    constructor(data){
        super();
        this.targetId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RevokeSharedTargetRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RevokeSharedTargetRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RevokeSharedTargetRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RevokeSharedTargetRequest, a, b2);
    }
    static $() {
        return [
            "RevokeSharedTargetRequest|1 target_id 9|2 expected_enrollment_generation 5?"
        ];
    }
};
RevokeSharedTargetResponse = class _RevokeSharedTargetResponse extends __protoMessage3148 {
    constructor(data){
        super();
        this.affectedGeneration = 0;
        this.currentGeneration = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RevokeSharedTargetResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RevokeSharedTargetResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RevokeSharedTargetResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RevokeSharedTargetResponse, a, b2);
    }
    static $() {
        return [
            "RevokeSharedTargetResponse|1 affected_generation 5|2 current_generation 5"
        ];
    }
};
GetSharedTargetRegistrationStateRequest = class _GetSharedTargetRegistrationStateRequest extends __protoMessage3148 {
    constructor(data){
        super();
        this.targetId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetSharedTargetRegistrationStateRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetSharedTargetRegistrationStateRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetSharedTargetRegistrationStateRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetSharedTargetRegistrationStateRequest, a, b2);
    }
    static $() {
        return [
            "GetSharedTargetRegistrationStateRequest|1 target_id 9"
        ];
    }
};
GetSharedTargetRegistrationStateResponse = class _GetSharedTargetRegistrationStateResponse extends __protoMessage3148 {
    constructor(data){
        super();
        this.state = RemoteControlV2RegistrationState.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetSharedTargetRegistrationStateResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetSharedTargetRegistrationStateResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetSharedTargetRegistrationStateResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetSharedTargetRegistrationStateResponse, a, b2);
    }
    static $() {
        return [
            "GetSharedTargetRegistrationStateResponse|1 state #0|2 enrollment_generation 5?|3 has_enrollment_history 8?",
            RemoteControlV2RegistrationState
        ];
    }
};
EnableSharedTargetRequest = class _EnableSharedTargetRequest extends __protoMessage3148 {
    constructor(data){
        super();
        this.targetId = "";
        this.displayName = "";
        this.agentHostVersion = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _EnableSharedTargetRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _EnableSharedTargetRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _EnableSharedTargetRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_EnableSharedTargetRequest, a, b2);
    }
    static $() {
        return [
            "EnableSharedTargetRequest|1 target_id 9|2 display_name 9|3 agent_host_version 9|4 registration_reason #0?|5 public_key_jwk 9?",
            RemoteControlV2RegistrationReason
        ];
    }
};
EnableSharedTargetResponse = class _EnableSharedTargetResponse extends __protoMessage3148 {
    constructor(data){
        super();
        this.enrollmentGeneration = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _EnableSharedTargetResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _EnableSharedTargetResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _EnableSharedTargetResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_EnableSharedTargetResponse, a, b2);
    }
    static $() {
        return [
            "EnableSharedTargetResponse|1 enrollment_generation 5|2 display_name 9?"
        ];
    }
};
TrustControllerRequest = class _TrustControllerRequest extends __protoMessage3148 {
    constructor(data){
        super();
        this.publicKeyJwk = "";
        this.label = "";
        this.targetId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _TrustControllerRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _TrustControllerRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _TrustControllerRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_TrustControllerRequest, a, b2);
    }
    static $() {
        return [
            "TrustControllerRequest|1 public_key_jwk 9|2 label 9|3 target_id 9"
        ];
    }
};
TrustControllerResponse = class _TrustControllerResponse extends __protoMessage3148 {
    constructor(data){
        super();
        this.status = ControllerTrustStatus.UNSPECIFIED;
        this.thumbprint = "";
        this.verificationCode = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _TrustControllerResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _TrustControllerResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _TrustControllerResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_TrustControllerResponse, a, b2);
    }
    static $() {
        return [
            "TrustControllerResponse|1 status #0|2 thumbprint 9|3 challenge_id 9?|4 verification_code 9",
            ControllerTrustStatus
        ];
    }
};
GetControllerTrustStatusRequest = class _GetControllerTrustStatusRequest extends __protoMessage3148 {
    constructor(data){
        super();
        this.key = {
            case: void 0
        };
        this.targetId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetControllerTrustStatusRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetControllerTrustStatusRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetControllerTrustStatusRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetControllerTrustStatusRequest, a, b2);
    }
    static $() {
        return [
            "GetControllerTrustStatusRequest|1 public_key_jwk 9 key|2 thumbprint 9 key|3 target_id 9"
        ];
    }
};
GetControllerTrustStatusResponse = class _GetControllerTrustStatusResponse extends __protoMessage3148 {
    constructor(data){
        super();
        this.status = ControllerTrustStatus.UNSPECIFIED;
        this.thumbprint = "";
        this.verificationCode = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetControllerTrustStatusResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetControllerTrustStatusResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetControllerTrustStatusResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetControllerTrustStatusResponse, a, b2);
    }
    static $() {
        return [
            "GetControllerTrustStatusResponse|1 status #0|2 thumbprint 9|3 challenge_id 9?|4 verification_code 9",
            ControllerTrustStatus
        ];
    }
};
ListPendingControllerApprovalsRequest = class _ListPendingControllerApprovalsRequest extends __protoMessage3148 {
    constructor(data){
        super();
        this.targetId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListPendingControllerApprovalsRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListPendingControllerApprovalsRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListPendingControllerApprovalsRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListPendingControllerApprovalsRequest, a, b2);
    }
    static $() {
        return [
            "ListPendingControllerApprovalsRequest|1 target_id 9"
        ];
    }
};
PendingControllerApproval = class _PendingControllerApproval extends __protoMessage3148 {
    constructor(data){
        super();
        this.challengeId = "";
        this.challenge = "";
        this.label = "";
        this.thumbprint = "";
        this.createdAtUnix = 0;
        this.verificationCode = "";
        this.targetId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _PendingControllerApproval().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _PendingControllerApproval().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _PendingControllerApproval().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_PendingControllerApproval, a, b2);
    }
    static $() {
        return [
            "PendingControllerApproval|1 challenge_id 9|2 challenge 9|3 label 9|4 thumbprint 9|5 created_at_unix 13|6 verification_code 9|7 target_id 9"
        ];
    }
};
ListPendingControllerApprovalsResponse = class _ListPendingControllerApprovalsResponse extends __protoMessage3148 {
    constructor(data){
        super();
        this.approvals = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListPendingControllerApprovalsResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListPendingControllerApprovalsResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListPendingControllerApprovalsResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListPendingControllerApprovalsResponse, a, b2);
    }
    static $() {
        return [
            "ListPendingControllerApprovalsResponse|1 approvals #0*",
            PendingControllerApproval
        ];
    }
};
ApproveControllerRequest = class _ApproveControllerRequest extends __protoMessage3148 {
    constructor(data){
        super();
        this.challengeId = "";
        this.signature = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ApproveControllerRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ApproveControllerRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ApproveControllerRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ApproveControllerRequest, a, b2);
    }
    static $() {
        return [
            "ApproveControllerRequest|1 challenge_id 9|2 signature 9"
        ];
    }
};
ApproveControllerResponse = class _ApproveControllerResponse extends __protoMessage3148 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ApproveControllerResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ApproveControllerResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ApproveControllerResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ApproveControllerResponse, a, b2);
    }
    static $() {
        return [
            "ApproveControllerResponse|1 controller #0",
            TrustedController
        ];
    }
};
RejectControllerRequest = class _RejectControllerRequest extends __protoMessage3148 {
    constructor(data){
        super();
        this.challengeId = "";
        this.signature = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RejectControllerRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RejectControllerRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RejectControllerRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RejectControllerRequest, a, b2);
    }
    static $() {
        return [
            "RejectControllerRequest|1 challenge_id 9|2 signature 9"
        ];
    }
};
RejectControllerResponse = class _RejectControllerResponse extends __protoMessage3148 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RejectControllerResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RejectControllerResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RejectControllerResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RejectControllerResponse, a, b2);
    }
    static $() {
        return [
            "RejectControllerResponse"
        ];
    }
};
TrustedController = class _TrustedController extends __protoMessage3148 {
    constructor(data){
        super();
        this.thumbprint = "";
        this.label = "";
        this.createdAtUnix = 0;
        this.lastUsedAtUnix = 0;
        this.pairedTargetIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _TrustedController().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _TrustedController().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _TrustedController().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_TrustedController, a, b2);
    }
    static $() {
        return [
            "TrustedController|1 thumbprint 9|2 label 9|3 created_at_unix 13|4 last_used_at_unix 13|5 paired_target_ids 9*"
        ];
    }
};
ListControllersRequest = class _ListControllersRequest extends __protoMessage3148 {
    constructor(data){
        super();
        this.targetId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListControllersRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListControllersRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListControllersRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListControllersRequest, a, b2);
    }
    static $() {
        return [
            "ListControllersRequest|1 target_id 9"
        ];
    }
};
ListControllersResponse = class _ListControllersResponse extends __protoMessage3148 {
    constructor(data){
        super();
        this.controllers = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ListControllersResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ListControllersResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ListControllersResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ListControllersResponse, a, b2);
    }
    static $() {
        return [
            "ListControllersResponse|1 controllers #0*",
            TrustedController
        ];
    }
};
RevokeControllerRequest = class _RevokeControllerRequest extends __protoMessage3148 {
    constructor(data){
        super();
        this.thumbprint = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RevokeControllerRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RevokeControllerRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RevokeControllerRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RevokeControllerRequest, a, b2);
    }
    static $() {
        return [
            "RevokeControllerRequest|1 thumbprint 9"
        ];
    }
};
RevokeControllerResponse = class _RevokeControllerResponse extends __protoMessage3148 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RevokeControllerResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RevokeControllerResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RevokeControllerResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RevokeControllerResponse, a, b2);
    }
    static $() {
        return [
            "RevokeControllerResponse"
        ];
    }
};
UnpairControllerRequest = class _UnpairControllerRequest extends __protoMessage3148 {
    constructor(data){
        super();
        this.thumbprint = "";
        this.targetId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UnpairControllerRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UnpairControllerRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UnpairControllerRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UnpairControllerRequest, a, b2);
    }
    static $() {
        return [
            "UnpairControllerRequest|1 thumbprint 9|2 target_id 9"
        ];
    }
};
UnpairControllerResponse = class _UnpairControllerResponse extends __protoMessage3148 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UnpairControllerResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UnpairControllerResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UnpairControllerResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UnpairControllerResponse, a, b2);
    }
    static $() {
        return [
            "UnpairControllerResponse"
        ];
    }
};

}
