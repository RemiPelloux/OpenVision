import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { Js } from "./timestamp_pb.js";
import { E } from "./tslib.es6.js";
import { OGt, OHa, _Ct, kL, o4e, ywi } from "./waterfall_update_pb.js";
var vas, _as, bas, yas, vul, _ul, TIi, Sas;
export { Sas, TIi, _as, _ul, bas, vas, vul, yas };
var __wakaru_xkk_initialized = false;
export function xkk() {
if (__wakaru_xkk_initialized) return;
__wakaru_xkk_initialized = true;
"use strict";
E(), hr(), ywi(), vas = x.makeMessageType("aiserver.v1.WaterfallState", ()=>[
        {
            no: 1,
            name: "spans",
            kind: "message",
            T: _as,
            repeated: !0
        }
    ]), _as = x.makeMessageType("aiserver.v1.WaterfallSpan", ()=>[
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
            no: 10,
            name: "phase_type",
            kind: "enum",
            T: x.getEnumType(kL)
        },
        {
            no: 11,
            name: "fallback_phase_label",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "start_time",
            kind: "message",
            T: Js
        },
        {
            no: 9,
            name: "end",
            kind: "message",
            T: bas,
            opt: !0
        },
        {
            no: 5,
            name: "logs",
            kind: "message",
            T: TIi,
            repeated: !0
        },
        {
            no: 6,
            name: "status",
            kind: "message",
            T: Sas,
            opt: !0
        },
        {
            no: 7,
            name: "call_to_action",
            kind: "message",
            T: OHa,
            opt: !0
        },
        {
            no: 8,
            name: "span_state",
            kind: "message",
            T: yas
        }
    ]), bas = x.makeMessageType("aiserver.v1.WaterfallSpanEnd", ()=>[
        {
            no: 1,
            name: "timestamp",
            kind: "message",
            T: Js
        },
        {
            no: 2,
            name: "end_status",
            kind: "enum",
            T: x.getEnumType(OGt)
        }
    ]), yas = x.makeMessageType("aiserver.v1.SpanState", ()=>[
        {
            no: 1,
            name: "git_repos_setup",
            kind: "message",
            T: vul,
            oneof: "span_state"
        },
        {
            no: 2,
            name: "git_repo_setup",
            kind: "message",
            T: _ul,
            oneof: "span_state"
        }
    ]), vul = x.makeMessageType("aiserver.v1.GitReposSetupSpanState", []), _ul = x.makeMessageType("aiserver.v1.GitRepoSetupSpanState", ()=>[
        {
            no: 1,
            name: "repo_display_name",
            kind: "scalar",
            T: 9
        }
    ]), TIi = x.makeMessageType("aiserver.v1.WaterfallSpanLog", ()=>[
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
    ]), Sas = x.makeMessageType("aiserver.v1.WaterfallSpanStatus", ()=>[
        {
            no: 1,
            name: "timestamp",
            kind: "message",
            T: Js
        },
        {
            no: 2,
            name: "status_type",
            kind: "enum",
            T: x.getEnumType(_Ct)
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]);

}
