import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { ba } from "./struct_pb.js";
import { h } from "./tslib.es6.js";
var cl, wge, Ege, bge, e2, Rge, Cge, Ige, Age, Mge, Pge, Nge, Dge, Oge, Lge, Uge, xge, Fge, Wge, Bge, Gge, Vge, $ge, jge;
export { $ge, Age, Bge, Cge, Dge, Ege, Fge, Gge, Ige, Lge, Mge, Nge, Oge, Pge, Rge, Uge, Vge, Wge, bge, cl, e2, jge, wge, xge };
var __wakaru_Hge_initialized = false;
export function Hge() {
if (__wakaru_Hge_initialized) return;
__wakaru_Hge_initialized = true;
"use strict";
h(), F(), cl = c.makeEnum("aiserver.v1.ClientOS", [
    {
        no: 0,
        name: "CLIENT_OS_UNSPECIFIED"
    },
    {
        no: 1,
        name: "CLIENT_OS_WINDOWS"
    },
    {
        no: 2,
        name: "CLIENT_OS_MACOS"
    },
    {
        no: 3,
        name: "CLIENT_OS_LINUX"
    },
    {
        no: 4,
        name: "CLIENT_OS_IOS"
    },
    {
        no: 5,
        name: "CLIENT_OS_ANDROID"
    }
]), wge = c.makeEnum("aiserver.v1.ClientLogLevel", [
    {
        no: 0,
        name: "CLIENT_LOG_LEVEL_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CLIENT_LOG_LEVEL_INFO",
        localName: "INFO"
    },
    {
        no: 2,
        name: "CLIENT_LOG_LEVEL_DEBUG",
        localName: "DEBUG"
    },
    {
        no: 3,
        name: "CLIENT_LOG_LEVEL_WARN",
        localName: "WARN"
    },
    {
        no: 4,
        name: "CLIENT_LOG_LEVEL_ERROR",
        localName: "ERROR"
    }
]), Ege = c.makeMessageType("aiserver.v1.BootstrapStatsigRequest", ()=>[
        {
            no: 1,
            name: "ignore_dev_status",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 2,
            name: "operating_system",
            kind: "enum",
            T: c.getEnumType(cl),
            opt: !0
        },
        {
            no: 3,
            name: "device_model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "os_version",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "form_factor",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "stable_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "client_channel",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "bundle_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "mobile_app_store_country",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "native_build",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "ota_update_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "ota_runtime_version",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 13,
            name: "ota_embedded_launch",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), bge = c.makeMessageType("aiserver.v1.BootstrapStatsigResponse", ()=>[
        {
            no: 1,
            name: "config",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "generated_at_ms",
            kind: "scalar",
            T: 4
        }
    ]), e2 = c.makeMessageType("aiserver.v1.GetFirstWindowStatsigDecisionRequest", ()=>[
        {
            no: 1,
            name: "operating_system",
            kind: "enum",
            T: c.getEnumType(cl),
            opt: !0
        }
    ]), Rge = c.makeMessageType("aiserver.v1.GetFirstWindowStatsigDecisionResponse", ()=>[
        {
            no: 1,
            name: "variant",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), Cge = c.makeMessageType("aiserver.v1.EventData", ()=>[
        {
            no: 1,
            name: "string_value",
            kind: "scalar",
            T: 9,
            oneof: "data"
        },
        {
            no: 2,
            name: "int_value",
            kind: "scalar",
            T: 3,
            oneof: "data"
        },
        {
            no: 3,
            name: "bool_value",
            kind: "scalar",
            T: 8,
            oneof: "data"
        },
        {
            no: 4,
            name: "double_value",
            kind: "scalar",
            T: 1,
            oneof: "data"
        }
    ]), Ige = c.makeMessageType("aiserver.v1.AnalyticsEvent", ()=>[
        {
            no: 1,
            name: "event_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "event_data",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: Cge
            }
        },
        {
            no: 3,
            name: "timestamp",
            kind: "scalar",
            T: 3
        }
    ]), Age = c.makeMessageType("aiserver.v1.TrackEventsRequest", ()=>[
        {
            no: 1,
            name: "events",
            kind: "message",
            T: Ige,
            repeated: !0
        }
    ]), Mge = c.makeMessageType("aiserver.v1.TrackEventsResponse", []), Pge = c.makeMessageType("aiserver.v1.BatchEvent", ()=>[
        {
            no: 1,
            name: "event",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "properties",
            kind: "message",
            T: ba
        },
        {
            no: 3,
            name: "timestamp",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "user_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "anonymous_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "message_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "context",
            kind: "message",
            T: Nge,
            opt: !0
        }
    ]), Nge = c.makeMessageType("aiserver.v1.AnalyticsContext", ()=>[
        {
            no: 1,
            name: "client",
            kind: "message",
            T: Dge,
            opt: !0
        }
    ]), Dge = c.makeMessageType("aiserver.v1.ClientInfo", ()=>[
        {
            no: 1,
            name: "os",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "arch",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "os_version",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "version",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "layout",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Oge = c.makeMessageType("aiserver.v1.BatchRequest", ()=>[
        {
            no: 1,
            name: "events",
            kind: "message",
            T: Pge,
            repeated: !0
        }
    ]), Lge = c.makeMessageType("aiserver.v1.BatchResponse", []), Uge = c.makeMessageType("aiserver.v1.ClientLogEntry", ()=>[
        {
            no: 1,
            name: "level",
            kind: "enum",
            T: c.getEnumType(wge)
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "metadata",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 4,
            name: "timestamp",
            kind: "scalar",
            T: 3
        },
        {
            no: 5,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "error_stack",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "key",
            kind: "scalar",
            T: 9
        }
    ]), xge = c.makeMessageType("aiserver.v1.SubmitLogsRequest", ()=>[
        {
            no: 1,
            name: "logs",
            kind: "message",
            T: Uge,
            repeated: !0
        }
    ]), Fge = c.makeMessageType("aiserver.v1.SubmitLogsResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "logs_processed",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "logs_dropped",
            kind: "scalar",
            T: 13
        }
    ]), Wge = c.makeMessageType("aiserver.v1.IngestConversationRequest", ()=>[
        {
            no: 1,
            name: "conversation_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "transcript",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "transcript_json",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "mode",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "model",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "last_updated_at",
            kind: "scalar",
            T: 3
        }
    ]), Bge = c.makeMessageType("aiserver.v1.IngestConversationResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "summary",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "detailed_summary",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "error_message",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Gge = c.makeMessageType("aiserver.v1.UploadIssueTraceRequest", ()=>[
        {
            no: 1,
            name: "token",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "payload",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "payload_hash",
            kind: "scalar",
            T: 9
        }
    ]), Vge = c.makeMessageType("aiserver.v1.UploadIssueTraceResponse", ()=>[
        {
            no: 1,
            name: "event_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "size",
            kind: "scalar",
            T: 3
        }
    ]), $ge = c.makeMessageType("aiserver.v1.DownloadIssueTracesRequest", ()=>[
        {
            no: 1,
            name: "token",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "limit",
            kind: "scalar",
            T: 5
        }
    ]), jge = c.makeMessageType("aiserver.v1.DownloadIssueTracesResponse", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "total_traces",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "total_bytes",
            kind: "scalar",
            T: 3
        }
    ]);

}
