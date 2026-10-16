import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var V8p, K8p, zFa, Y8p, X8p, Z8p;
export { K8p, V8p, X8p, Y8p, Z8p, zFa };
var __wakaru_Qzr_initialized = false;
export function Qzr() {
if (__wakaru_Qzr_initialized) return;
__wakaru_Qzr_initialized = true;
"use strict";
E(), hr(), V8p = x.makeMessageType("aiserver.v1.McpOAuthStoredData", ()=>[
        {
            no: 1,
            name: "refresh_token",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "client_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "client_secret",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "redirect_uris",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "access_token",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), K8p = x.makeMessageType("aiserver.v1.McpOAuthStoredClientInfo", ()=>[
        {
            no: 1,
            name: "client_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "client_secret",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "redirect_uris",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), zFa = x.makeMessageType("aiserver.v1.MCPKnownServerInfo", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "icon",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "endpoint",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "is_featured",
            kind: "scalar",
            T: 8
        }
    ]), Y8p = x.makeMessageType("aiserver.v1.MCPServerRegistration", ()=>[
        {
            no: 1,
            name: "domains",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "info",
            kind: "message",
            T: zFa
        }
    ]), X8p = x.makeMessageType("aiserver.v1.GetKnownServersRequest", []), Z8p = x.makeMessageType("aiserver.v1.GetKnownServersResponse", ()=>[
        {
            no: 1,
            name: "servers",
            kind: "message",
            T: Y8p,
            repeated: !0
        }
    ]);

}
