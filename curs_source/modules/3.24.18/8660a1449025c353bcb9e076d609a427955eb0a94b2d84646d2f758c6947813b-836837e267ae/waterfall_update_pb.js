import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { Js } from "./timestamp_pb.js";
import { E } from "./tslib.es6.js";
var o4e, _Ct, OGt, kL, FGt, WEm, MHa, GEm, DHa, NHa, LHa, OHa, qEm, zEm, VEm, KEm;
export { DHa, FGt, GEm, KEm, LHa, MHa, NHa, OGt, OHa, VEm, WEm, _Ct, kL, o4e, qEm, zEm };
var __wakaru_ywi_initialized = false;
export function ywi() {
if (__wakaru_ywi_initialized) return;
__wakaru_ywi_initialized = true;
"use strict";
E(), hr(), o4e = x.makeEnum("aiserver.v1.WaterfallLogLevel", [
    {
        no: 0,
        name: "WATERFALL_LOG_LEVEL_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "WATERFALL_LOG_LEVEL_DEBUG",
        localName: "DEBUG"
    },
    {
        no: 2,
        name: "WATERFALL_LOG_LEVEL_INFO",
        localName: "INFO"
    },
    {
        no: 3,
        name: "WATERFALL_LOG_LEVEL_WARN",
        localName: "WARN"
    },
    {
        no: 4,
        name: "WATERFALL_LOG_LEVEL_ERROR",
        localName: "ERROR"
    }
]), _Ct = x.makeEnum("aiserver.v1.WaterfallSpanStatusType", [
    {
        no: 0,
        name: "WATERFALL_SPAN_STATUS_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "WATERFALL_SPAN_STATUS_TYPE_MESSAGE",
        localName: "MESSAGE"
    },
    {
        no: 2,
        name: "WATERFALL_SPAN_STATUS_TYPE_WARN",
        localName: "WARN"
    },
    {
        no: 3,
        name: "WATERFALL_SPAN_STATUS_TYPE_ERROR",
        localName: "ERROR"
    }
]), OGt = x.makeEnum("aiserver.v1.WaterfallSpanEndStatus", [
    {
        no: 0,
        name: "WATERFALL_SPAN_END_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "WATERFALL_SPAN_END_STATUS_SUCCESS",
        localName: "SUCCESS"
    },
    {
        no: 2,
        name: "WATERFALL_SPAN_END_STATUS_FAILURE",
        localName: "FAILURE"
    },
    {
        no: 3,
        name: "WATERFALL_SPAN_END_STATUS_SKIPPED",
        localName: "SKIPPED"
    }
]), kL = x.makeEnum("aiserver.v1.WaterfallPhaseType", [
    {
        no: 0,
        name: "WATERFALL_PHASE_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "WATERFALL_PHASE_TYPE_ENVIRONMENT",
        localName: "ENVIRONMENT"
    },
    {
        no: 2,
        name: "WATERFALL_PHASE_TYPE_CREATE_CLOUD_WORKSPACE",
        localName: "CREATE_CLOUD_WORKSPACE"
    },
    {
        no: 3,
        name: "WATERFALL_PHASE_TYPE_PROVISION_SANDBOX",
        localName: "PROVISION_SANDBOX"
    },
    {
        no: 4,
        name: "WATERFALL_PHASE_TYPE_RESTORE_WORKSPACE_FILES",
        localName: "RESTORE_WORKSPACE_FILES"
    },
    {
        no: 5,
        name: "WATERFALL_PHASE_TYPE_DOCKER_BUILD",
        localName: "DOCKER_BUILD"
    },
    {
        no: 6,
        name: "WATERFALL_PHASE_TYPE_SETUP_REPOSITORY",
        localName: "SETUP_REPOSITORY"
    },
    {
        no: 7,
        name: "WATERFALL_PHASE_TYPE_INSTALL_DEPENDENCIES",
        localName: "INSTALL_DEPENDENCIES"
    },
    {
        no: 8,
        name: "WATERFALL_PHASE_TYPE_RUN_WORKSPACE_SETUP",
        localName: "RUN_WORKSPACE_SETUP"
    },
    {
        no: 9,
        name: "WATERFALL_PHASE_TYPE_START_AGENT_SERVICES",
        localName: "START_AGENT_SERVICES"
    },
    {
        no: 10,
        name: "WATERFALL_PHASE_TYPE_INSTALL_EXTENSIONS",
        localName: "INSTALL_EXTENSIONS"
    },
    {
        no: 11,
        name: "WATERFALL_PHASE_TYPE_COMPLETE",
        localName: "COMPLETE"
    },
    {
        no: 12,
        name: "WATERFALL_PHASE_TYPE_ACQUIRE_POD",
        localName: "ACQUIRE_POD"
    },
    {
        no: 13,
        name: "WATERFALL_PHASE_TYPE_HYDRATE",
        localName: "HYDRATE"
    }
]), FGt = x.makeMessageType("aiserver.v1.WaterfallUpdate", ()=>[
        {
            no: 1,
            name: "timestamp",
            kind: "message",
            T: Js
        },
        {
            no: 2,
            name: "span_start",
            kind: "message",
            T: MHa,
            oneof: "update"
        },
        {
            no: 3,
            name: "span_end",
            kind: "message",
            T: DHa,
            oneof: "update"
        },
        {
            no: 4,
            name: "span_log",
            kind: "message",
            T: NHa,
            oneof: "update"
        },
        {
            no: 5,
            name: "span_status_update",
            kind: "message",
            T: LHa,
            oneof: "update"
        },
        {
            no: 6,
            name: "span_update",
            kind: "message",
            T: GEm,
            oneof: "update"
        },
        {
            no: 8,
            name: "sentinel",
            kind: "message",
            T: WEm,
            oneof: "update"
        }
    ]), WEm = x.makeMessageType("aiserver.v1.SetupWaterfallSentinel", []), MHa = x.makeMessageType("aiserver.v1.SpanStart", ()=>[
        {
            no: 1,
            name: "span_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "parent_span_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "phase_type",
            kind: "enum",
            T: x.getEnumType(kL)
        },
        {
            no: 6,
            name: "fallback_phase_label",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "git_repos_setup",
            kind: "message",
            T: zEm,
            oneof: "span_details"
        },
        {
            no: 4,
            name: "git_repo_setup",
            kind: "message",
            T: VEm,
            oneof: "span_details"
        }
    ]), GEm = x.makeMessageType("aiserver.v1.SpanUpdate", ()=>[
        {
            no: 1,
            name: "span_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "generic_log",
            kind: "message",
            T: KEm,
            oneof: "span_update"
        }
    ]), DHa = x.makeMessageType("aiserver.v1.SpanEnd", ()=>[
        {
            no: 1,
            name: "span_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "end_status",
            kind: "enum",
            T: x.getEnumType(OGt)
        }
    ]), NHa = x.makeMessageType("aiserver.v1.SpanLog", ()=>[
        {
            no: 1,
            name: "span_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "timestamp",
            kind: "message",
            T: Js
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "level",
            kind: "enum",
            T: x.getEnumType(o4e)
        }
    ]), LHa = x.makeMessageType("aiserver.v1.SpanStatusUpdate", ()=>[
        {
            no: 1,
            name: "span_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "timestamp",
            kind: "message",
            T: Js
        },
        {
            no: 3,
            name: "status_type",
            kind: "enum",
            T: x.getEnumType(_Ct)
        },
        {
            no: 4,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "call_to_action",
            kind: "message",
            T: OHa,
            opt: !0
        }
    ]), OHa = x.makeMessageType("aiserver.v1.CallToAction", ()=>[
        {
            no: 1,
            name: "open_url",
            kind: "message",
            T: qEm,
            oneof: "call_to_action"
        }
    ]), qEm = x.makeMessageType("aiserver.v1.OpenUrlCallToAction", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "button_text",
            kind: "scalar",
            T: 9
        }
    ]), zEm = x.makeMessageType("aiserver.v1.GitReposSetupSpanDetails", []), VEm = x.makeMessageType("aiserver.v1.GitRepoSetupSpanDetails", ()=>[
        {
            no: 1,
            name: "repo_display_name",
            kind: "scalar",
            T: 9
        }
    ]), KEm = x.makeMessageType("aiserver.v1.GenericLogSpanUpdate", ()=>[
        {
            no: 1,
            name: "timestamp",
            kind: "message",
            T: Js
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "level",
            kind: "enum",
            T: x.getEnumType(o4e)
        }
    ]);

}
