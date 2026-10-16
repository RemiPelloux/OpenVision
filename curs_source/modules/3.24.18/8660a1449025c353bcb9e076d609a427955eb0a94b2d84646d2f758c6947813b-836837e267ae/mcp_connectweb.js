import { Qzr, X8p, Z8p } from "./mcp_pb_2.js";
import { hr } from "./protobuf.js";
import { ke } from "./service-type.js";
import { E } from "./tslib.es6.js";
var VYa;
export { VYa };
var __wakaru_U8m_initialized = false;
export function U8m() {
if (__wakaru_U8m_initialized) return;
__wakaru_U8m_initialized = true;
"use strict";
E(), Qzr(), hr(), VYa = {
    typeName: "aiserver.v1.MCPRegistryService",
    methods: {
        getKnownServers: {
            name: "GetKnownServers",
            I: X8p,
            O: Z8p,
            kind: ke.Unary
        }
    }
};

}
