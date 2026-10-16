import { Hu, Uv } from "./chat_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
import { OO, ZC, hu } from "./utils_pb.js";
var ASd, qno, RSd, DSd, MSd, PSd;
export { ASd, DSd, MSd, PSd, RSd, qno };
var __wakaru_LSd_initialized = false;
export function LSd() {
if (__wakaru_LSd_initialized) return;
__wakaru_LSd_initialized = true;
"use strict";
x(), bi(), hu(), Hu(), ASd = k.makeEnum("aiserver.v1.EditFate", [
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
]), qno = k.makeEnum("aiserver.v1.FastApplySource", [
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
]), RSd = k.makeMessageType("aiserver.v1.ReportEditFateRequest", ()=>[
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
            T: k.getEnumType(ASd),
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
    ]), DSd = k.makeMessageType("aiserver.v1.ReportEditFateResponse", []), MSd = k.makeMessageType("aiserver.v1.WarmApplyRequest", ()=>[
        {
            no: 2,
            name: "current_file",
            kind: "message",
            T: ZC
        },
        {
            no: 3,
            name: "conversation",
            kind: "message",
            T: Uv,
            repeated: !0
        },
        {
            no: 4,
            name: "explicit_context",
            kind: "message",
            T: OO
        },
        {
            no: 5,
            name: "source",
            kind: "enum",
            T: k.getEnumType(qno)
        },
        {
            no: 6,
            name: "willing_to_pay_extra_for_speed",
            kind: "scalar",
            T: 8
        }
    ]), PSd = k.makeMessageType("aiserver.v1.WarmApplyResponse", []);

}
