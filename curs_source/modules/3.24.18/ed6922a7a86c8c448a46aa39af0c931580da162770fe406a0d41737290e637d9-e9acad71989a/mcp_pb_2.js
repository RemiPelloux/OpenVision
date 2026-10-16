import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var e5u, t5u, VXs, n5u, i5u, r5u;
export { VXs, e5u, i5u, n5u, r5u, t5u };
var __wakaru_R7i_initialized = false;
export function R7i() {
if (__wakaru_R7i_initialized) return;
__wakaru_R7i_initialized = true;
"use strict";
x(), bi(), e5u = k.makeMessageType("aiserver.v1.McpOAuthStoredData", ()=>[
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
    ]), t5u = k.makeMessageType("aiserver.v1.McpOAuthStoredClientInfo", ()=>[
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
    ]), VXs = k.makeMessageType("aiserver.v1.MCPKnownServerInfo", ()=>[
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
    ]), n5u = k.makeMessageType("aiserver.v1.MCPServerRegistration", ()=>[
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
            T: VXs
        }
    ]), i5u = k.makeMessageType("aiserver.v1.GetKnownServersRequest", []), r5u = k.makeMessageType("aiserver.v1.GetKnownServersResponse", ()=>[
        {
            no: 1,
            name: "servers",
            kind: "message",
            T: n5u,
            repeated: !0
        }
    ]);

}
