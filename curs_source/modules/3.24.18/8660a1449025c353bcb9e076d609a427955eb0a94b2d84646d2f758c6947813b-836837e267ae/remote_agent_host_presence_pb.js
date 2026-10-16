import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { Jzr, Q8p, eVr } from "./remote_control_settings_pb.js";
import { E } from "./tslib.es6.js";
var VSl, Bjg, Ujg, J2n, Mps, KSl, YSl, jjg, $jg, Hjg, Wjg, Gjg, qjg, zjg, Vjg, XSl, Kjg, Yjg, Xjg, Zjg, Qjg, Jjg, e$g, t$g, n$g, i$g, r$g, s$g, o$g, a$g, l$g, c$g, u$g, d$g, h$g, p$g, m$g, ZSl, g$g, f$g, v$g, _$g, b$g, y$g;
export { $jg, Bjg, Gjg, Hjg, J2n, Jjg, KSl, Kjg, Mps, Qjg, Ujg, VSl, Vjg, Wjg, XSl, Xjg, YSl, Yjg, ZSl, Zjg, _$g, a$g, b$g, c$g, d$g, e$g, f$g, g$g, h$g, i$g, jjg, l$g, m$g, n$g, o$g, p$g, qjg, r$g, s$g, t$g, u$g, v$g, y$g, zjg };
var __wakaru_S$g_initialized = false;
export function S$g() {
if (__wakaru_S$g_initialized) return;
__wakaru_S$g_initialized = true;
"use strict";
E(), hr(), Q8p(), VSl = x.makeEnum("aiserver.v1.RemoteAgentHostControllerMethod", [
    {
        no: 0,
        name: "REMOTE_AGENT_HOST_CONTROLLER_METHOD_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "REMOTE_AGENT_HOST_CONTROLLER_METHOD_LIST_SESSIONS",
        localName: "LIST_SESSIONS"
    },
    {
        no: 2,
        name: "REMOTE_AGENT_HOST_CONTROLLER_METHOD_WATCH_SESSIONS",
        localName: "WATCH_SESSIONS"
    },
    {
        no: 3,
        name: "REMOTE_AGENT_HOST_CONTROLLER_METHOD_ATTACH_SESSION",
        localName: "ATTACH_SESSION"
    },
    {
        no: 4,
        name: "REMOTE_AGENT_HOST_CONTROLLER_METHOD_GET_SESSION_BLOBS",
        localName: "GET_SESSION_BLOBS"
    },
    {
        no: 5,
        name: "REMOTE_AGENT_HOST_CONTROLLER_METHOD_SEND_MESSAGE",
        localName: "SEND_MESSAGE"
    },
    {
        no: 6,
        name: "REMOTE_AGENT_HOST_CONTROLLER_METHOD_INTERRUPT_TURN",
        localName: "INTERRUPT_TURN"
    },
    {
        no: 7,
        name: "REMOTE_AGENT_HOST_CONTROLLER_METHOD_CANCEL_QUEUED_TURN",
        localName: "CANCEL_QUEUED_TURN"
    },
    {
        no: 8,
        name: "REMOTE_AGENT_HOST_CONTROLLER_METHOD_CREATE_SESSION",
        localName: "CREATE_SESSION"
    },
    {
        no: 9,
        name: "REMOTE_AGENT_HOST_CONTROLLER_METHOD_RESPOND_TO_INTERACTION",
        localName: "RESPOND_TO_INTERACTION"
    },
    {
        no: 10,
        name: "REMOTE_AGENT_HOST_CONTROLLER_METHOD_LIST_WORKSPACES",
        localName: "LIST_WORKSPACES"
    },
    {
        no: 12,
        name: "REMOTE_AGENT_HOST_CONTROLLER_METHOD_SEND_ACTION",
        localName: "SEND_ACTION"
    },
    {
        no: 13,
        name: "REMOTE_AGENT_HOST_CONTROLLER_METHOD_READ_FILE",
        localName: "READ_FILE"
    },
    {
        no: 14,
        name: "REMOTE_AGENT_HOST_CONTROLLER_METHOD_LIST_SKILLS",
        localName: "LIST_SKILLS"
    }
]), Bjg = x.makeEnum("aiserver.v1.RemoteAgentHostTargetPresence", [
    {
        no: 0,
        name: "REMOTE_AGENT_HOST_TARGET_PRESENCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "REMOTE_AGENT_HOST_TARGET_PRESENCE_ONLINE",
        localName: "ONLINE"
    },
    {
        no: 2,
        name: "REMOTE_AGENT_HOST_TARGET_PRESENCE_OFFLINE",
        localName: "OFFLINE"
    }
]), Ujg = x.makeEnum("aiserver.v1.RemoteAgentHostControllerPairing", [
    {
        no: 0,
        name: "REMOTE_AGENT_HOST_CONTROLLER_PAIRING_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "REMOTE_AGENT_HOST_CONTROLLER_PAIRING_PAIRED",
        localName: "PAIRED"
    },
    {
        no: 2,
        name: "REMOTE_AGENT_HOST_CONTROLLER_PAIRING_PENDING",
        localName: "PENDING"
    },
    {
        no: 3,
        name: "REMOTE_AGENT_HOST_CONTROLLER_PAIRING_UNPAIRED",
        localName: "UNPAIRED"
    },
    {
        no: 4,
        name: "REMOTE_AGENT_HOST_CONTROLLER_PAIRING_REVOKED",
        localName: "REVOKED"
    }
]), J2n = x.makeEnum("aiserver.v1.RemoteControlV2RegistrationState", [
    {
        no: 0,
        name: "REMOTE_CONTROL_V2_REGISTRATION_STATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "REMOTE_CONTROL_V2_REGISTRATION_STATE_NOT_ENROLLED",
        localName: "NOT_ENROLLED"
    },
    {
        no: 2,
        name: "REMOTE_CONTROL_V2_REGISTRATION_STATE_ENABLED",
        localName: "ENABLED"
    },
    {
        no: 3,
        name: "REMOTE_CONTROL_V2_REGISTRATION_STATE_DISABLED",
        localName: "DISABLED"
    }
]), Mps = x.makeEnum("aiserver.v1.RemoteControlV2RegistrationReason", [
    {
        no: 0,
        name: "REMOTE_CONTROL_V2_REGISTRATION_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "REMOTE_CONTROL_V2_REGISTRATION_REASON_MANUAL",
        localName: "MANUAL"
    },
    {
        no: 2,
        name: "REMOTE_CONTROL_V2_REGISTRATION_REASON_AUTOMATIC",
        localName: "AUTOMATIC"
    }
]), KSl = x.makeEnum("aiserver.v1.RemoteAgentHostDisabledReason", [
    {
        no: 0,
        name: "REMOTE_AGENT_HOST_DISABLED_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "REMOTE_AGENT_HOST_DISABLED_REASON_DISABLED",
        localName: "DISABLED"
    },
    {
        no: 2,
        name: "REMOTE_AGENT_HOST_DISABLED_REASON_KEY_MISMATCH",
        localName: "KEY_MISMATCH"
    },
    {
        no: 3,
        name: "REMOTE_AGENT_HOST_DISABLED_REASON_KEYLESS",
        localName: "KEYLESS"
    },
    {
        no: 4,
        name: "REMOTE_AGENT_HOST_DISABLED_REASON_RETIRED",
        localName: "RETIRED"
    }
]), YSl = x.makeEnum("aiserver.v1.ControllerTrustStatus", [
    {
        no: 0,
        name: "CONTROLLER_TRUST_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CONTROLLER_TRUST_STATUS_PENDING",
        localName: "PENDING"
    },
    {
        no: 2,
        name: "CONTROLLER_TRUST_STATUS_TRUSTED",
        localName: "TRUSTED"
    },
    {
        no: 3,
        name: "CONTROLLER_TRUST_STATUS_REVOKED",
        localName: "REVOKED"
    },
    {
        no: 4,
        name: "CONTROLLER_TRUST_STATUS_REJECTED",
        localName: "REJECTED"
    },
    {
        no: 5,
        name: "CONTROLLER_TRUST_STATUS_NONE",
        localName: "NONE"
    }
]), jjg = x.makeMessageType("aiserver.v1.GetRemoteControlV2UserSettingsRequest", []), $jg = x.makeMessageType("aiserver.v1.GetRemoteControlV2UserSettingsResponse", ()=>[
        {
            no: 1,
            name: "settings",
            kind: "message",
            T: eVr
        },
        {
            no: 2,
            name: "policy",
            kind: "message",
            T: Jzr
        }
    ]), Hjg = x.makeMessageType("aiserver.v1.UpdateRemoteControlV2UserSettingsRequest", ()=>[
        {
            no: 1,
            name: "settings",
            kind: "message",
            T: eVr
        }
    ]), Wjg = x.makeMessageType("aiserver.v1.UpdateRemoteControlV2UserSettingsResponse", ()=>[
        {
            no: 1,
            name: "settings",
            kind: "message",
            T: eVr
        },
        {
            no: 2,
            name: "policy",
            kind: "message",
            T: Jzr
        }
    ]), Gjg = x.makeMessageType("aiserver.v1.CallAgentHostRequest", ()=>[
        {
            no: 1,
            name: "target_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "method",
            kind: "enum",
            T: x.getEnumType(VSl)
        },
        {
            no: 3,
            name: "data",
            kind: "scalar",
            T: 12
        }
    ]), qjg = x.makeMessageType("aiserver.v1.CallAgentHostResponse", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 12
        }
    ]), zjg = x.makeMessageType("aiserver.v1.StreamAgentHostRequest", ()=>[
        {
            no: 1,
            name: "target_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "method",
            kind: "enum",
            T: x.getEnumType(VSl)
        },
        {
            no: 3,
            name: "data",
            kind: "scalar",
            T: 12
        }
    ]), Vjg = x.makeMessageType("aiserver.v1.StreamAgentHostResponse", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "keepalive",
            kind: "scalar",
            T: 8
        }
    ]), XSl = x.makeMessageType("aiserver.v1.SharedRemoteAgentHostTarget", ()=>[
        {
            no: 1,
            name: "target_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "display_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "agent_host_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "presence",
            kind: "enum",
            T: x.getEnumType(Bjg)
        },
        {
            no: 5,
            name: "enrollment_generation",
            kind: "scalar",
            T: 5
        },
        {
            no: 6,
            name: "controller_pairing",
            kind: "enum",
            T: x.getEnumType(Ujg)
        },
        {
            no: 7,
            name: "reset_at_ms",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ]), Kjg = x.makeMessageType("aiserver.v1.ListSharedTargetsRequest", ()=>[
        {
            no: 1,
            name: "page_size",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "page_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "controller_thumbprint",
            kind: "scalar",
            T: 9
        }
    ]), Yjg = x.makeMessageType("aiserver.v1.ListSharedTargetsResponse", ()=>[
        {
            no: 1,
            name: "targets",
            kind: "message",
            T: XSl,
            repeated: !0
        },
        {
            no: 2,
            name: "next_page_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "recently_reset_targets",
            kind: "message",
            T: XSl,
            repeated: !0
        }
    ]), Xjg = x.makeMessageType("aiserver.v1.RevokeSharedTargetRequest", ()=>[
        {
            no: 1,
            name: "target_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "expected_enrollment_generation",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), Zjg = x.makeMessageType("aiserver.v1.RevokeSharedTargetResponse", ()=>[
        {
            no: 1,
            name: "affected_generation",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "current_generation",
            kind: "scalar",
            T: 5
        }
    ]), Qjg = x.makeMessageType("aiserver.v1.GetSharedTargetRegistrationStateRequest", ()=>[
        {
            no: 1,
            name: "target_id",
            kind: "scalar",
            T: 9
        }
    ]), Jjg = x.makeMessageType("aiserver.v1.GetSharedTargetRegistrationStateResponse", ()=>[
        {
            no: 1,
            name: "state",
            kind: "enum",
            T: x.getEnumType(J2n)
        },
        {
            no: 2,
            name: "enrollment_generation",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "has_enrollment_history",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), e$g = x.makeMessageType("aiserver.v1.EnableSharedTargetRequest", ()=>[
        {
            no: 1,
            name: "target_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "display_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "agent_host_version",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "registration_reason",
            kind: "enum",
            T: x.getEnumType(Mps),
            opt: !0
        },
        {
            no: 5,
            name: "public_key_jwk",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), t$g = x.makeMessageType("aiserver.v1.EnableSharedTargetResponse", ()=>[
        {
            no: 1,
            name: "enrollment_generation",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "display_name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), n$g = x.makeMessageType("aiserver.v1.RemoteAgentHostDisabledDetail", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "enum",
            T: x.getEnumType(KSl)
        },
        {
            no: 2,
            name: "affected_generation",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "current_generation",
            kind: "scalar",
            T: 5
        }
    ]), i$g = x.makeMessageType("aiserver.v1.RemoteAgentHostSupersededDetail", []), r$g = x.makeMessageType("aiserver.v1.TrustControllerRequest", ()=>[
        {
            no: 1,
            name: "public_key_jwk",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "target_id",
            kind: "scalar",
            T: 9
        }
    ]), s$g = x.makeMessageType("aiserver.v1.TrustControllerResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(YSl)
        },
        {
            no: 2,
            name: "thumbprint",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "challenge_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "verification_code",
            kind: "scalar",
            T: 9
        }
    ]), o$g = x.makeMessageType("aiserver.v1.GetControllerTrustStatusRequest", ()=>[
        {
            no: 1,
            name: "public_key_jwk",
            kind: "scalar",
            T: 9,
            oneof: "key"
        },
        {
            no: 2,
            name: "thumbprint",
            kind: "scalar",
            T: 9,
            oneof: "key"
        },
        {
            no: 3,
            name: "target_id",
            kind: "scalar",
            T: 9
        }
    ]), a$g = x.makeMessageType("aiserver.v1.GetControllerTrustStatusResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(YSl)
        },
        {
            no: 2,
            name: "thumbprint",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "challenge_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "verification_code",
            kind: "scalar",
            T: 9
        }
    ]), l$g = x.makeMessageType("aiserver.v1.ListPendingControllerApprovalsRequest", ()=>[
        {
            no: 1,
            name: "target_id",
            kind: "scalar",
            T: 9
        }
    ]), c$g = x.makeMessageType("aiserver.v1.PendingControllerApproval", ()=>[
        {
            no: 1,
            name: "challenge_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "challenge",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "thumbprint",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "created_at_unix",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "verification_code",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "target_id",
            kind: "scalar",
            T: 9
        }
    ]), u$g = x.makeMessageType("aiserver.v1.ListPendingControllerApprovalsResponse", ()=>[
        {
            no: 1,
            name: "approvals",
            kind: "message",
            T: c$g,
            repeated: !0
        }
    ]), d$g = x.makeMessageType("aiserver.v1.ApproveControllerRequest", ()=>[
        {
            no: 1,
            name: "challenge_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "signature",
            kind: "scalar",
            T: 9
        }
    ]), h$g = x.makeMessageType("aiserver.v1.ApproveControllerResponse", ()=>[
        {
            no: 1,
            name: "controller",
            kind: "message",
            T: ZSl
        }
    ]), p$g = x.makeMessageType("aiserver.v1.RejectControllerRequest", ()=>[
        {
            no: 1,
            name: "challenge_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "signature",
            kind: "scalar",
            T: 9
        }
    ]), m$g = x.makeMessageType("aiserver.v1.RejectControllerResponse", []), ZSl = x.makeMessageType("aiserver.v1.TrustedController", ()=>[
        {
            no: 1,
            name: "thumbprint",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "label",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "created_at_unix",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "last_used_at_unix",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "paired_target_ids",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), g$g = x.makeMessageType("aiserver.v1.ListControllersRequest", ()=>[
        {
            no: 1,
            name: "target_id",
            kind: "scalar",
            T: 9
        }
    ]), f$g = x.makeMessageType("aiserver.v1.ListControllersResponse", ()=>[
        {
            no: 1,
            name: "controllers",
            kind: "message",
            T: ZSl,
            repeated: !0
        }
    ]), v$g = x.makeMessageType("aiserver.v1.RevokeControllerRequest", ()=>[
        {
            no: 1,
            name: "thumbprint",
            kind: "scalar",
            T: 9
        }
    ]), _$g = x.makeMessageType("aiserver.v1.RevokeControllerResponse", []), b$g = x.makeMessageType("aiserver.v1.UnpairControllerRequest", ()=>[
        {
            no: 1,
            name: "thumbprint",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "target_id",
            kind: "scalar",
            T: 9
        }
    ]), y$g = x.makeMessageType("aiserver.v1.UnpairControllerResponse", []);

}
