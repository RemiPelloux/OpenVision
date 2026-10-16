import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var qni, dbt, Hmn, Dkd, Nkd, Lkd, e9o, Okd;
export { Dkd, Hmn, Lkd, Nkd, Okd, dbt, e9o, qni };
var __wakaru_zni_initialized = false;
export function zni() {
if (__wakaru_zni_initialized) return;
__wakaru_zni_initialized = true;
"use strict";
E(), hr(), qni = x.makeMessageType("agent.v1.ReadArgs", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "tool_call_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "offset",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 5,
            name: "limit",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 6,
            name: "encoding_hint",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "digest_only",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), dbt = x.makeMessageType("agent.v1.ReadResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Hmn,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: Dkd,
            oneof: "result"
        },
        {
            no: 3,
            name: "rejected",
            kind: "message",
            T: Nkd,
            oneof: "result"
        },
        {
            no: 4,
            name: "file_not_found",
            kind: "message",
            T: Lkd,
            oneof: "result"
        },
        {
            no: 5,
            name: "permission_denied",
            kind: "message",
            T: e9o,
            oneof: "result"
        },
        {
            no: 6,
            name: "invalid_file",
            kind: "message",
            T: Okd,
            oneof: "result"
        }
    ]), Hmn = x.makeMessageType("agent.v1.ReadSuccess", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9,
            oneof: "output"
        },
        {
            no: 5,
            name: "data",
            kind: "scalar",
            T: 12,
            oneof: "output"
        },
        {
            no: 3,
            name: "total_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "file_size",
            kind: "scalar",
            T: 3
        },
        {
            no: 6,
            name: "truncated",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "output_blob_id",
            kind: "scalar",
            T: 12,
            opt: !0
        },
        {
            no: 8,
            name: "range_applied",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "sha256",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "size_bytes",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ]), Dkd = x.makeMessageType("agent.v1.ReadError", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Nkd = x.makeMessageType("agent.v1.ReadRejected", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]), Lkd = x.makeMessageType("agent.v1.ReadFileNotFound", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), e9o = x.makeMessageType("agent.v1.ReadPermissionDenied", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), Okd = x.makeMessageType("agent.v1.ReadInvalidFile", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "reason",
            kind: "scalar",
            T: 9
        }
    ]);

}
