import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { fd } from "./struct_pb.js";
import { x } from "./tslib.es6.js";
var ekt, _Wi, ZRd, QRd, JRd, eDd, tDd, nDd, iDd, rDd, Hro, sDd, oDd, aDd, cDd, Wro, lDd, uDd, Gro, dDd, hDd, pDd, mDd, gDd;
export { Gro, Hro, JRd, QRd, Wro, ZRd, _Wi, aDd, cDd, dDd, eDd, ekt, gDd, hDd, iDd, lDd, mDd, nDd, oDd, pDd, rDd, sDd, tDd, uDd };
var __wakaru_PLn_initialized = false;
export function PLn() {
if (__wakaru_PLn_initialized) return;
__wakaru_PLn_initialized = true;
"use strict";
x(), bi(), ekt = k.makeEnum("aiserver.v1.ClientOS", [
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
]), _Wi = k.makeEnum("aiserver.v1.ClientLogLevel", [
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
]), ZRd = k.makeMessageType("aiserver.v1.BootstrapStatsigRequest", ()=>[
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
            T: k.getEnumType(ekt),
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
    ]), QRd = k.makeMessageType("aiserver.v1.BootstrapStatsigResponse", ()=>[
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
    ]), JRd = k.makeMessageType("aiserver.v1.GetFirstWindowStatsigDecisionRequest", ()=>[
        {
            no: 1,
            name: "operating_system",
            kind: "enum",
            T: k.getEnumType(ekt),
            opt: !0
        }
    ]), eDd = k.makeMessageType("aiserver.v1.GetFirstWindowStatsigDecisionResponse", ()=>[
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
    ]), tDd = k.makeMessageType("aiserver.v1.EventData", ()=>[
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
    ]), nDd = k.makeMessageType("aiserver.v1.AnalyticsEvent", ()=>[
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
                T: tDd
            }
        },
        {
            no: 3,
            name: "timestamp",
            kind: "scalar",
            T: 3
        }
    ]), iDd = k.makeMessageType("aiserver.v1.TrackEventsRequest", ()=>[
        {
            no: 1,
            name: "events",
            kind: "message",
            T: nDd,
            repeated: !0
        }
    ]), rDd = k.makeMessageType("aiserver.v1.TrackEventsResponse", []), Hro = k.makeMessageType("aiserver.v1.BatchEvent", ()=>[
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
            T: fd
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
            T: sDd,
            opt: !0
        }
    ]), sDd = k.makeMessageType("aiserver.v1.AnalyticsContext", ()=>[
        {
            no: 1,
            name: "client",
            kind: "message",
            T: oDd,
            opt: !0
        }
    ]), oDd = k.makeMessageType("aiserver.v1.ClientInfo", ()=>[
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
    ]), aDd = k.makeMessageType("aiserver.v1.BatchRequest", ()=>[
        {
            no: 1,
            name: "events",
            kind: "message",
            T: Hro,
            repeated: !0
        }
    ]), cDd = k.makeMessageType("aiserver.v1.BatchResponse", []), Wro = k.makeMessageType("aiserver.v1.ClientLogEntry", ()=>[
        {
            no: 1,
            name: "level",
            kind: "enum",
            T: k.getEnumType(_Wi)
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
    ]), lDd = k.makeMessageType("aiserver.v1.SubmitLogsRequest", ()=>[
        {
            no: 1,
            name: "logs",
            kind: "message",
            T: Wro,
            repeated: !0
        }
    ]), uDd = k.makeMessageType("aiserver.v1.SubmitLogsResponse", ()=>[
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
    ]), Gro = k.makeMessageType("aiserver.v1.IngestConversationRequest", ()=>[
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
    ]), dDd = k.makeMessageType("aiserver.v1.IngestConversationResponse", ()=>[
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
    ]), hDd = k.makeMessageType("aiserver.v1.UploadIssueTraceRequest", ()=>[
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
    ]), pDd = k.makeMessageType("aiserver.v1.UploadIssueTraceResponse", ()=>[
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
    ]), mDd = k.makeMessageType("aiserver.v1.DownloadIssueTracesRequest", ()=>[
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
    ]), gDd = k.makeMessageType("aiserver.v1.DownloadIssueTracesResponse", ()=>[
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
