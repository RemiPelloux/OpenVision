import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var zXs, M7i, P7i;
export { M7i, P7i, zXs };
var __wakaru_C5u_initialized = false;
export function C5u() {
if (__wakaru_C5u_initialized) return;
__wakaru_C5u_initialized = true;
"use strict";
x(), bi(), zXs = k.makeMessageType("aiserver.v1.RemoteControlV2AdminSettings", ()=>[
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
    ]), M7i = k.makeMessageType("aiserver.v1.RemoteControlV2Policy", ()=>[
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
    ]), P7i = k.makeMessageType("aiserver.v1.RemoteControlV2UserSettings", ()=>[
        {
            no: 2,
            name: "automatic_registration_enabled",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]);

}
