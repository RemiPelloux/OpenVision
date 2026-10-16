import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var wAd, CAd, TAd, EAd, xAd, IAd;
export { CAd, EAd, IAd, TAd, wAd, xAd };
var __wakaru_bSv_initialized = false;
export function bSv() {
if (__wakaru_bSv_initialized) return;
__wakaru_bSv_initialized = true;
"use strict";
x(), bi(), wAd = k.makeMessageType("aiserver.v1.HeapProfileConfig", ()=>[
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
    ]), CAd = k.makeMessageType("aiserver.v1.CpuProfileConfig", ()=>[
        {
            no: 1,
            name: "interval",
            kind: "scalar",
            T: 5
        }
    ]), TAd = k.makeMessageType("aiserver.v1.ProfileConfig", ()=>[
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
            T: wAd,
            opt: !0
        },
        {
            no: 3,
            name: "cpu",
            kind: "message",
            T: CAd,
            opt: !0
        }
    ]), EAd = k.makeMessageType("aiserver.v1.ProfileScheduleConfig", ()=>[
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
            T: xAd
        },
        {
            no: 5,
            name: "activity_timeout",
            kind: "scalar",
            T: 5
        }
    ]), xAd = k.makeMessageType("aiserver.v1.ProfileScheduleConfig.ScheduleConfig", ()=>[
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
}), IAd = k.makeMessageType("aiserver.v1.ProfilingConfig", ()=>[
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
            T: TAd,
            repeated: !0
        },
        {
            no: 3,
            name: "schedules",
            kind: "message",
            T: EAd,
            repeated: !0
        }
    ]);

}
