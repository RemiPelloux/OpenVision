import { $Nn } from "./common_pb.js";
import { M3d } from "./persisted_dev_container_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var aco;
export { aco };
var __wakaru_YEv_initialized = false;
export function YEv() {
if (__wakaru_YEv_initialized) return;
__wakaru_YEv_initialized = true;
"use strict";
x(), bi(), M3d(), $Nn(), aco = k.makeEnum("anyrun.v1.SnapshotState", [
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
