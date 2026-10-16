import { IGs, XTu, xGs } from "./fetch_exec_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var ZTu;
export { ZTu };
var __wakaru_rdv_initialized = false;
export function rdv() {
if (__wakaru_rdv_initialized) return;
__wakaru_rdv_initialized = true;
"use strict";
x(), bi(), XTu(), ZTu = k.makeMessageType("agent.v1.FetchToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: xGs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: IGs
        }
    ]);

}
