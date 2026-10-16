import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var wK, EK, bK, Pg, RK;
export { EK, Pg, RK, bK, wK };
var __wakaru_lu_initialized = false;
export function lu() {
if (__wakaru_lu_initialized) return;
__wakaru_lu_initialized = true;
"use strict";
h(), F(), wK = c.makeMessageType("agent.v1.ApiKeyCredentials", ()=>[
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
    ]), EK = c.makeMessageType("agent.v1.AzureCredentials", ()=>[
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
    ]), bK = c.makeMessageType("agent.v1.BedrockCredentials", ()=>[
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
    ]), Pg = c.makeMessageType("agent.v1.RequestedModel", ()=>[
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
            T: RK,
            repeated: !0
        },
        {
            no: 4,
            name: "api_key_credentials",
            kind: "message",
            T: wK,
            oneof: "credentials"
        },
        {
            no: 5,
            name: "azure_credentials",
            kind: "message",
            T: EK,
            oneof: "credentials"
        },
        {
            no: 6,
            name: "bedrock_credentials",
            kind: "message",
            T: bK,
            oneof: "credentials"
        },
        {
            no: 7,
            name: "built_in_model",
            kind: "scalar",
            T: 8
        }
    ]), RK = c.makeMessageType("agent.v1.RequestedModel.ModelParameterValue", ()=>[
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
