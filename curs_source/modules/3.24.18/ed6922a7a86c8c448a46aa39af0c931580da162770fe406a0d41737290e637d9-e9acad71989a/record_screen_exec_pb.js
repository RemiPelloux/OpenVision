import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var Yxn, dmu, VZe, HUt, hmu, pmu, mmu, gmu;
export { HUt, VZe, Yxn, dmu, gmu, hmu, mmu, pmu };
var __wakaru_Tbt_initialized = false;
export function Tbt() {
if (__wakaru_Tbt_initialized) return;
__wakaru_Tbt_initialized = true;
"use strict";
x(), bi(), Yxn = k.makeEnum("agent.v1.RecordingMode", [
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
]), dmu = k.makeEnum("agent.v1.RequestedFilePathRejectedReason", [
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
]), VZe = k.makeMessageType("agent.v1.RecordScreenArgs", ()=>[
        {
            no: 1,
            name: "mode",
            kind: "enum",
            T: k.getEnumType(Yxn)
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
    ]), HUt = k.makeMessageType("agent.v1.RecordScreenResult", ()=>[
        {
            no: 1,
            name: "start_success",
            kind: "message",
            T: hmu,
            oneof: "result"
        },
        {
            no: 2,
            name: "save_success",
            kind: "message",
            T: pmu,
            oneof: "result"
        },
        {
            no: 3,
            name: "discard_success",
            kind: "message",
            T: mmu,
            oneof: "result"
        },
        {
            no: 4,
            name: "failure",
            kind: "message",
            T: gmu,
            oneof: "result"
        }
    ]), hmu = k.makeMessageType("agent.v1.RecordScreenStartSuccess", ()=>[
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
    ]), pmu = k.makeMessageType("agent.v1.RecordScreenSaveSuccess", ()=>[
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
            T: k.getEnumType(dmu),
            opt: !0
        }
    ]), mmu = k.makeMessageType("agent.v1.RecordScreenDiscardSuccess", []), gmu = k.makeMessageType("agent.v1.RecordScreenFailure", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
