import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var w4e, C4e, T4e, MD, w2;
export { C4e, MD, T4e, w2, w4e };
var __wakaru_Uj_initialized = false;
export function Uj() {
if (__wakaru_Uj_initialized) return;
__wakaru_Uj_initialized = true;
"use strict";
x(), bi(), w4e = k.makeMessageType("agent.v1.ApiKeyCredentials", ()=>[
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
    ]), C4e = k.makeMessageType("agent.v1.AzureCredentials", ()=>[
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
    ]), T4e = k.makeMessageType("agent.v1.BedrockCredentials", ()=>[
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
    ]), MD = k.makeMessageType("agent.v1.RequestedModel", ()=>[
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
            T: w2,
            repeated: !0
        },
        {
            no: 4,
            name: "api_key_credentials",
            kind: "message",
            T: w4e,
            oneof: "credentials"
        },
        {
            no: 5,
            name: "azure_credentials",
            kind: "message",
            T: C4e,
            oneof: "credentials"
        },
        {
            no: 6,
            name: "bedrock_credentials",
            kind: "message",
            T: T4e,
            oneof: "credentials"
        },
        {
            no: 7,
            name: "built_in_model",
            kind: "scalar",
            T: 8
        }
    ]), w2 = k.makeMessageType("agent.v1.RequestedModel.ModelParameterValue", ()=>[
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
