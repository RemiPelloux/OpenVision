import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var OSl, Cjg, FSl, Tjg, BSl, Ejg, Ijg, xjg, Ajg, Rjg;
export { Ajg, BSl, Cjg, Ejg, FSl, Ijg, OSl, Rjg, Tjg, xjg };
var __wakaru_USl_initialized = false;
export function USl() {
if (__wakaru_USl_initialized) return;
__wakaru_USl_initialized = true;
"use strict";
E(), hr(), OSl = x.makeMessageType("aiserver.v1.HasSeenAdRequest", ()=>[
        {
            no: 1,
            name: "ad_id",
            kind: "scalar",
            T: 9
        }
    ]), Cjg = x.makeMessageType("aiserver.v1.HasSeenAdResponse", ()=>[
        {
            no: 1,
            name: "has_seen",
            kind: "scalar",
            T: 8
        }
    ]), FSl = x.makeMessageType("aiserver.v1.MarkAdAsSeenRequest", ()=>[
        {
            no: 1,
            name: "ad_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "analytics_variant",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Tjg = x.makeMessageType("aiserver.v1.MarkAdAsSeenResponse", []), BSl = x.makeMessageType("aiserver.v1.ResetUserAdViewsRequest", []), Ejg = x.makeMessageType("aiserver.v1.ResetUserAdViewsResponse", []), Ijg = x.makeMessageType("aiserver.v1.GetAllAdPreviewsRequest", []), xjg = x.makeMessageType("aiserver.v1.InAppAdVariantPreview", ()=>[
        {
            no: 1,
            name: "variant_label",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "ad_bytes",
            kind: "scalar",
            T: 12
        }
    ]), Ajg = x.makeMessageType("aiserver.v1.InAppAdPreview", ()=>[
        {
            no: 1,
            name: "ad_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "gates",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "experiments",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "source_file_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "variants",
            kind: "message",
            T: xjg,
            repeated: !0
        }
    ]), Rjg = x.makeMessageType("aiserver.v1.GetAllAdPreviewsResponse", ()=>[
        {
            no: 1,
            name: "ads",
            kind: "message",
            T: Ajg,
            repeated: !0
        }
    ]);

}
