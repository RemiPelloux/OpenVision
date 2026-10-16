import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var NN, DN, mne, pne;
export { DN, NN, mne, pne };
var __wakaru_$qe_initialized = false;
export function $qe() {
if (__wakaru_$qe_initialized) return;
__wakaru_$qe_initialized = true;
"use strict";
h(), F(), NN = c.makeMessageType("agent.v1.SetupVmEnvironmentArgs", ()=>[
        {
            no: 2,
            name: "install_command",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "start_command",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "dockerfile_contents",
            kind: "scalar",
            T: 9
        }
    ]), DN = c.makeMessageType("agent.v1.SetupVmEnvironmentResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: mne,
            oneof: "result"
        }
    ]), mne = c.makeMessageType("agent.v1.SetupVmEnvironmentSuccess", []), pne = c.makeMessageType("agent.v1.SetupVmEnvironmentToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: NN
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: DN
        }
    ]);

}
