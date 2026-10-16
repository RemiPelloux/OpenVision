import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Aps, Pjg, Mjg, $Sl, Rps, HSl, WSl, GSl, Djg, qSl, Njg;
export { $Sl, Aps, Djg, GSl, HSl, Mjg, Njg, Pjg, Rps, WSl, qSl };
var __wakaru_Z2n_initialized = false;
export function Z2n() {
if (__wakaru_Z2n_initialized) return;
__wakaru_Z2n_initialized = true;
"use strict";
E(), hr(), Aps = x.makeEnum("aiserver.v1.RecommendedActionSurface", [
    {
        no: 0,
        name: "RECOMMENDED_ACTION_SURFACE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "RECOMMENDED_ACTION_SURFACE_GLASS_EMPTY_STATE_QUICKSTART",
        localName: "GLASS_EMPTY_STATE_QUICKSTART"
    }
]), Pjg = x.makeMessageType("aiserver.v1.InstallPluginAndPrefillPromptPayload", ()=>[
        {
            no: 1,
            name: "plugin_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "prompt",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "plugin_id",
            kind: "scalar",
            T: 3
        }
    ]), Mjg = x.makeMessageType("aiserver.v1.PrefillPromptPayload", ()=>[
        {
            no: 1,
            name: "prompt",
            kind: "scalar",
            T: 9
        }
    ]), $Sl = x.makeMessageType("aiserver.v1.RecommendedAction", ()=>[
        {
            no: 1,
            name: "action_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "subtitle",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "icon_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "icon_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "surface",
            kind: "enum",
            T: x.getEnumType(Aps)
        },
        {
            no: 7,
            name: "install_plugin_and_prefill_prompt",
            kind: "message",
            T: Pjg,
            oneof: "payload"
        },
        {
            no: 8,
            name: "prefill_prompt",
            kind: "message",
            T: Mjg,
            oneof: "payload"
        }
    ]), Rps = x.makeMessageType("aiserver.v1.RecommendedActionOwnerScope", ()=>[
        {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 3,
            opt: !0
        }
    ]), HSl = x.makeMessageType("aiserver.v1.ListRecommendedActionsRequest", ()=>[
        {
            no: 1,
            name: "surface",
            kind: "enum",
            T: x.getEnumType(Aps)
        },
        {
            no: 2,
            name: "owner_scope",
            kind: "message",
            T: Rps
        }
    ]), WSl = x.makeMessageType("aiserver.v1.ListRecommendedActionsResponse", ()=>[
        {
            no: 1,
            name: "actions",
            kind: "message",
            T: $Sl,
            repeated: !0
        }
    ]), GSl = x.makeMessageType("aiserver.v1.DismissRecommendedActionRequest", ()=>[
        {
            no: 1,
            name: "action_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "owner_scope",
            kind: "message",
            T: Rps
        }
    ]), Djg = x.makeMessageType("aiserver.v1.DismissRecommendedActionResponse", []), qSl = x.makeMessageType("aiserver.v1.CompleteRecommendedActionRequest", ()=>[
        {
            no: 1,
            name: "action_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "owner_scope",
            kind: "message",
            T: Rps
        }
    ]), Njg = x.makeMessageType("aiserver.v1.CompleteRecommendedActionResponse", []);

}
