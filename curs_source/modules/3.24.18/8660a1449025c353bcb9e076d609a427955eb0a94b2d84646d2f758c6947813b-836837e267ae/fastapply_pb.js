import { sd, wy } from "./chat_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
import { Hu, QE, Z9 } from "./utils_pb.js";
var HEd, Q9o, WEd, GEd, qEd, zEd;
export { GEd, HEd, Q9o, WEd, qEd, zEd };
var __wakaru_VEd_initialized = false;
export function VEd() {
if (__wakaru_VEd_initialized) return;
__wakaru_VEd_initialized = true;
"use strict";
E(), hr(), Hu(), sd(), HEd = x.makeEnum("aiserver.v1.EditFate", [
    {
        no: 0,
        name: "EDIT_FATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "EDIT_FATE_ACCEPTED",
        localName: "ACCEPTED"
    },
    {
        no: 2,
        name: "EDIT_FATE_REJECTED",
        localName: "REJECTED"
    },
    {
        no: 3,
        name: "EDIT_FATE_PARTIALLY_ACCEPTED",
        localName: "PARTIALLY_ACCEPTED"
    }
]), Q9o = x.makeEnum("aiserver.v1.FastApplySource", [
    {
        no: 0,
        name: "FAST_APPLY_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "FAST_APPLY_SOURCE_COMPOSER",
        localName: "COMPOSER"
    },
    {
        no: 2,
        name: "FAST_APPLY_SOURCE_CLICKED_APPLY",
        localName: "CLICKED_APPLY"
    },
    {
        no: 3,
        name: "FAST_APPLY_SOURCE_CACHED_APPLY",
        localName: "CACHED_APPLY"
    },
    {
        no: 4,
        name: "FAST_APPLY_SOURCE_COMPOSER_AGENT",
        localName: "COMPOSER_AGENT"
    }
]), WEd = x.makeMessageType("aiserver.v1.ReportEditFateRequest", ()=>[
        {
            no: 1,
            name: "request_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "fate",
            kind: "enum",
            T: x.getEnumType(HEd),
            opt: !0
        },
        {
            no: 3,
            name: "num_accepted_partial_diffs",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "num_rejected_partial_diffs",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), GEd = x.makeMessageType("aiserver.v1.ReportEditFateResponse", []), qEd = x.makeMessageType("aiserver.v1.WarmApplyRequest", ()=>[
        {
            no: 2,
            name: "current_file",
            kind: "message",
            T: QE
        },
        {
            no: 3,
            name: "conversation",
            kind: "message",
            T: wy,
            repeated: !0
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: Z9
        },
        {
            no: 5,
            name: "source",
            kind: "enum",
            T: x.getEnumType(Q9o)
        },
        {
            no: 6,
            name: "willing_to_pay_extra_for_speed",
            kind: "scalar",
            T: 8
        }
    ]), zEd = x.makeMessageType("aiserver.v1.WarmApplyResponse", []);

}
