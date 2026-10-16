import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var rz, sz, OP, LP, iz, az, oz, cz;
export { LP, OP, az, cz, iz, oz, rz, sz };
var __wakaru_UP_initialized = false;
export function UP() {
if (__wakaru_UP_initialized) return;
__wakaru_UP_initialized = true;
"use strict";
h(), F(), rz = c.makeEnum("agent.v1.RecordingMode", [
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
]), sz = c.makeEnum("agent.v1.RequestedFilePathRejectedReason", [
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
]), OP = c.makeMessageType("agent.v1.RecordScreenArgs", ()=>[
        {
            no: 1,
            name: "mode",
            kind: "enum",
            T: c.getEnumType(rz)
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
    ]), LP = c.makeMessageType("agent.v1.RecordScreenResult", ()=>[
        {
            no: 1,
            name: "start_success",
            kind: "message",
            T: iz,
            oneof: "result"
        },
        {
            no: 2,
            name: "save_success",
            kind: "message",
            T: az,
            oneof: "result"
        },
        {
            no: 3,
            name: "discard_success",
            kind: "message",
            T: oz,
            oneof: "result"
        },
        {
            no: 4,
            name: "failure",
            kind: "message",
            T: cz,
            oneof: "result"
        }
    ]), iz = c.makeMessageType("agent.v1.RecordScreenStartSuccess", ()=>[
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
    ]), az = c.makeMessageType("agent.v1.RecordScreenSaveSuccess", ()=>[
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
            T: c.getEnumType(sz),
            opt: !0
        }
    ]), oz = c.makeMessageType("agent.v1.RecordScreenDiscardSuccess", []), cz = c.makeMessageType("agent.v1.RecordScreenFailure", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]);

}
