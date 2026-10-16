import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Gei, dpd, B_t, Dpn, hpd, ppd, mpd, gpd;
export { B_t, Dpn, Gei, dpd, gpd, hpd, mpd, ppd };
var __wakaru_y4t_initialized = false;
export function y4t() {
if (__wakaru_y4t_initialized) return;
__wakaru_y4t_initialized = true;
"use strict";
E(), hr(), Gei = x.makeEnum("agent.v1.RecordingMode", [
    {
        no: 0,
        name: "RECORDING_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "RECORDING_MODE_START_RECORDING",
        localName: "START_RECORDING"
    },
    {
        no: 2,
        name: "RECORDING_MODE_SAVE_RECORDING",
        localName: "SAVE_RECORDING"
    },
    {
        no: 3,
        name: "RECORDING_MODE_DISCARD_RECORDING",
        localName: "DISCARD_RECORDING"
    }
]), dpd = x.makeEnum("agent.v1.RequestedFilePathRejectedReason", [
    {
        no: 0,
        name: "REQUESTED_FILE_PATH_REJECTED_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "REQUESTED_FILE_PATH_REJECTED_REASON_SLASHES_NOT_ALLOWED",
        localName: "SLASHES_NOT_ALLOWED"
    }
]), B_t = x.makeMessageType("agent.v1.RecordScreenArgs", ()=>[
        {
            no: 1,
            name: "mode",
            kind: "enum",
            T: x.getEnumType(Gei)
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "save_as_filename",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Dpn = x.makeMessageType("agent.v1.RecordScreenResult", ()=>[
        {
            no: 1,
            name: "start_success",
            kind: "message",
            T: hpd,
            oneof: "result"
        },
        {
            no: 2,
            name: "save_success",
            kind: "message",
            T: ppd,
            oneof: "result"
        },
        {
            no: 3,
            name: "discard_success",
            kind: "message",
            T: mpd,
            oneof: "result"
        },
        {
            no: 4,
            name: "failure",
            kind: "message",
            T: gpd,
            oneof: "result"
        }
    ]), hpd = x.makeMessageType("agent.v1.RecordScreenStartSuccess", ()=>[
        {
            no: 1,
            name: "was_prior_recording_cancelled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "was_save_as_filename_ignored",
            kind: "scalar",
            T: 8
        }
    ]), ppd = x.makeMessageType("agent.v1.RecordScreenSaveSuccess", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "recording_duration_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "requested_file_path_rejected_reason",
            kind: "enum",
            T: x.getEnumType(dpd),
            opt: !0
        }
    ]), mpd = x.makeMessageType("agent.v1.RecordScreenDiscardSuccess", []), gpd = x.makeMessageType("agent.v1.RecordScreenFailure", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
