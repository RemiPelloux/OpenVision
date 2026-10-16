import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var VFa, Jzr, eVr;
export { Jzr, VFa, eVr };
var __wakaru_Q8p_initialized = false;
export function Q8p() {
if (__wakaru_Q8p_initialized) return;
__wakaru_Q8p_initialized = true;
"use strict";
E(), hr(), VFa = x.makeMessageType("aiserver.v1.RemoteControlV2AdminSettings", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 2,
            name: "automatic_registration_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), Jzr = x.makeMessageType("aiserver.v1.RemoteControlV2Policy", ()=>[
        {
            no: 1,
            name: "enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 2,
            name: "automatic_registration_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "available",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 4,
            name: "automatic_registration_released",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 5,
            name: "remote_control_denying_org_name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "automatic_registration_denying_org_name",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), eVr = x.makeMessageType("aiserver.v1.RemoteControlV2UserSettings", ()=>[
        {
            no: 2,
            name: "automatic_registration_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]);

}
