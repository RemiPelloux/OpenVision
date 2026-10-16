import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var JNd, eLd, tLd, nLd, iLd, rLd;
export { JNd, eLd, iLd, nLd, rLd, tLd };
var __wakaru_HIy_initialized = false;
export function HIy() {
if (__wakaru_HIy_initialized) return;
__wakaru_HIy_initialized = true;
"use strict";
E(), hr(), JNd = x.makeMessageType("aiserver.v1.HeapProfileConfig", ()=>[
        {
            no: 1,
            name: "sampling_interval",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "include_objects_collected_by_major_gc",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "include_objects_collected_by_minor_gc",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), eLd = x.makeMessageType("aiserver.v1.CpuProfileConfig", ()=>[
        {
            no: 1,
            name: "interval",
            kind: "scalar",
            T: 5
        }
    ]), tLd = x.makeMessageType("aiserver.v1.ProfileConfig", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "heap",
            kind: "message",
            T: JNd,
            opt: !0
        },
        {
            no: 3,
            name: "cpu",
            kind: "message",
            T: eLd,
            opt: !0
        }
    ]), nLd = x.makeMessageType("aiserver.v1.ProfileScheduleConfig", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "process",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "config_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "schedule",
            kind: "message",
            T: iLd
        },
        {
            no: 5,
            name: "activity_timeout",
            kind: "scalar",
            T: 5
        }
    ]), iLd = x.makeMessageType("aiserver.v1.ProfileScheduleConfig.ScheduleConfig", ()=>[
        {
            no: 1,
            name: "interval",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "duration",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "ProfileScheduleConfig_ScheduleConfig"
}), rLd = x.makeMessageType("aiserver.v1.ProfilingConfig", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "configs",
            kind: "message",
            T: tLd,
            repeated: !0
        },
        {
            no: 3,
            name: "schedules",
            kind: "message",
            T: nLd,
            repeated: !0
        }
    ]);

}
