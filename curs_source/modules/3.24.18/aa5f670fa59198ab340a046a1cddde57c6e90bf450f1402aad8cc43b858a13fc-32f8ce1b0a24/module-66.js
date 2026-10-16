require.r(exports);
require.d(exports, {
    ApiKeyCredentials: ()=>ApiKeyCredentials,
    AzureCredentials: ()=>AzureCredentials,
    BedrockCredentials: ()=>BedrockCredentials,
    RequestedModel: ()=>RequestedModel,
    RequestedModel_ModelParameterValue: ()=>RequestedModel_ModelParameterValue
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const ApiKeyCredentials = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ApiKeyCredentials", ()=>[
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
            opt: true
        }
    ]);
const AzureCredentials = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AzureCredentials", ()=>[
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
    ]);
const BedrockCredentials = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.BedrockCredentials", ()=>[
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
            opt: true
        }
    ]);
const RequestedModel = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RequestedModel", ()=>[
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
            T: RequestedModel_ModelParameterValue,
            repeated: true
        },
        {
            no: 4,
            name: "api_key_credentials",
            kind: "message",
            T: ApiKeyCredentials,
            oneof: "credentials"
        },
        {
            no: 5,
            name: "azure_credentials",
            kind: "message",
            T: AzureCredentials,
            oneof: "credentials"
        },
        {
            no: 6,
            name: "bedrock_credentials",
            kind: "message",
            T: BedrockCredentials,
            oneof: "credentials"
        },
        {
            no: 7,
            name: "built_in_model",
            kind: "scalar",
            T: 8
        }
    ]);
const RequestedModel_ModelParameterValue = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RequestedModel.ModelParameterValue", ()=>[
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
