import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { MethodKind } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/service-type.js";
import { BidiAppendRequest, BidiAppendResponse, init_bidi_pb } from "./bidi_pb.js";
var BidiService;
export { BidiService };
var __wakaru_init_bidi_connect_initialized = false;
export function init_bidi_connect() {
if (__wakaru_init_bidi_connect_initialized) return;
__wakaru_init_bidi_connect_initialized = true;
"use strict";
init_bidi_pb();
init_esm2();
BidiService = {
    typeName: "aiserver.v1.BidiService",
    methods: {
        bidiAppend: {
            name: "BidiAppend",
            I: BidiAppendRequest,
            O: BidiAppendResponse,
            kind: MethodKind.Unary
        }
    }
};

}
