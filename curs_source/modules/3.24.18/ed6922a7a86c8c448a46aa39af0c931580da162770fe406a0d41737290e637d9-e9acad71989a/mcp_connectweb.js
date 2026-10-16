import { R7i, i5u, r5u } from "./mcp_pb_2.js";
import { bi } from "./protobuf.js";
import { ae } from "./service-type.js";
import { x } from "./tslib.es6.js";
var lgo;
export { lgo };
var __wakaru_DJd_initialized = false;
export function DJd() {
if (__wakaru_DJd_initialized) return;
__wakaru_DJd_initialized = true;
"use strict";
x(), R7i(), bi(), lgo = {
    typeName: "aiserver.v1.MCPRegistryService",
    methods: {
        getKnownServers: {
            name: "GetKnownServers",
            I: i5u,
            O: r5u,
            kind: ae.Unary
        }
    }
};

}
