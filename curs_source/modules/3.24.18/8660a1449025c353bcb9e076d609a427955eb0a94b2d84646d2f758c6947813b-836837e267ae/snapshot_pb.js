import { _wi } from "./common_pb.js";
import { JTm } from "./persisted_dev_container_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var A$a;
export { A$a };
var __wakaru_qU1_initialized = false;
export function qU1() {
if (__wakaru_qU1_initialized) return;
__wakaru_qU1_initialized = true;
"use strict";
E(), hr(), JTm(), _wi(), A$a = x.makeEnum("anyrun.v1.SnapshotState", [
    {
        no: 0,
        name: "SNAPSHOT_STATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SNAPSHOT_STATE_CREATING",
        localName: "CREATING"
    },
    {
        no: 2,
        name: "SNAPSHOT_STATE_READY",
        localName: "READY"
    },
    {
        no: 3,
        name: "SNAPSHOT_STATE_FAILED",
        localName: "FAILED"
    },
    {
        no: 4,
        name: "SNAPSHOT_STATE_FINALIZING",
        localName: "FINALIZING"
    }
]);

}
