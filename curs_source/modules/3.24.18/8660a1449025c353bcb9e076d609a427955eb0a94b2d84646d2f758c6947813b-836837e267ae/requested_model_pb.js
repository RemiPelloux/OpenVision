import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var rtt, stt, ott, AD, JF;
export { AD, JF, ott, rtt, stt };
var __wakaru_SQ_initialized = false;
export function SQ() {
if (__wakaru_SQ_initialized) return;
__wakaru_SQ_initialized = true;
"use strict";
E(), hr(), rtt = x.makeMessageType("agent.v1.ApiKeyCredentials", ()=>[
        {
            no: 1,
            name: "api_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "base_url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), stt = x.makeMessageType("agent.v1.AzureCredentials", ()=>[
        {
            no: 1,
            name: "api_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "base_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "deployment",
            kind: "scalar",
            T: 9
        }
    ]), ott = x.makeMessageType("agent.v1.BedrockCredentials", ()=>[
        {
            no: 1,
            name: "access_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "secret_key",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "region",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "session_token",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), AD = x.makeMessageType("agent.v1.RequestedModel", ()=>[
        {
            no: 1,
            name: "model_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "max_mode",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "parameters",
            kind: "message",
            T: JF,
            repeated: !0
        },
        {
            no: 4,
            name: "api_key_credentials",
            kind: "message",
            T: rtt,
            oneof: "credentials"
        },
        {
            no: 5,
            name: "azure_credentials",
            kind: "message",
            T: stt,
            oneof: "credentials"
        },
        {
            no: 6,
            name: "bedrock_credentials",
            kind: "message",
            T: ott,
            oneof: "credentials"
        },
        {
            no: 7,
            name: "built_in_model",
            kind: "scalar",
            T: 8
        }
    ]), JF = x.makeMessageType("agent.v1.RequestedModel.ModelParameterValue", ()=>[
        {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "RequestedModel_ModelParameterValue"
});

}
