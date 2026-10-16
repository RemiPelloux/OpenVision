import { SE } from "./common_pb.js";
import { TSe } from "./persisted_dev_container_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var q9;
export { q9 };
var __wakaru_pat_initialized = false;
export function pat() {
if (__wakaru_pat_initialized) return;
__wakaru_pat_initialized = true;
"use strict";
h(), F(), TSe(), SE(), q9 = c.makeEnum("anyrun.v1.SnapshotState", [
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
