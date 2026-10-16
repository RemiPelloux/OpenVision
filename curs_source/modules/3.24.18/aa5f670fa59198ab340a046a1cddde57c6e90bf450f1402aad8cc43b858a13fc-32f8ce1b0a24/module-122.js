require.r(exports);
require.d(exports, {
    ReplaceEnvArgs: ()=>ReplaceEnvArgs,
    ReplaceEnvConfig: ()=>ReplaceEnvConfig,
    ReplaceEnvFailure: ()=>ReplaceEnvFailure,
    ReplaceEnvMode: ()=>ReplaceEnvMode,
    ReplaceEnvResult: ()=>ReplaceEnvResult,
    ReplaceEnvSuccess: ()=>ReplaceEnvSuccess,
    ReplaceEnvToolCall: ()=>ReplaceEnvToolCall,
    ReplaceEnvToolCallDelta: ()=>ReplaceEnvToolCallDelta,
    RepoCheckoutRefOverride: ()=>RepoCheckoutRefOverride
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const ReplaceEnvMode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.ReplaceEnvMode", [
    {
        no: 0,
        name: "REPLACE_ENV_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "REPLACE_ENV_MODE_CUSTOM",
        localName: "CUSTOM"
    },
    {
        no: 2,
        name: "REPLACE_ENV_MODE_CLEAN_SLATE",
        localName: "CLEAN_SLATE"
    },
    {
        no: 3,
        name: "REPLACE_ENV_MODE_DEFAULT",
        localName: "DEFAULT"
    }
]);
const RepoCheckoutRefOverride = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.RepoCheckoutRefOverride", ()=>[
        {
            no: 1,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "ref",
            kind: "scalar",
            T: 9
        }
    ]);
const ReplaceEnvConfig = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReplaceEnvConfig", ()=>[
        {
            no: 1,
            name: "install_script",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "dockerfile_contents",
            kind: "scalar",
            T: 9
        }
    ]);
const ReplaceEnvArgs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReplaceEnvArgs", ()=>[
        {
            no: 1,
            name: "config",
            kind: "message",
            T: ReplaceEnvConfig
        },
        {
            no: 2,
            name: "mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ReplaceEnvMode)
        },
        {
            no: 3,
            name: "checkout_ref_overrides",
            kind: "message",
            T: RepoCheckoutRefOverride,
            repeated: true
        }
    ]);
const ReplaceEnvSuccess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReplaceEnvSuccess", ()=>[
        {
            no: 1,
            name: "setup_logs",
            kind: "scalar",
            T: 9
        }
    ]);
const ReplaceEnvFailure = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReplaceEnvFailure", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "setup_logs",
            kind: "scalar",
            T: 9
        }
    ]);
const ReplaceEnvResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReplaceEnvResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ReplaceEnvSuccess,
            oneof: "result"
        },
        {
            no: 2,
            name: "failure",
            kind: "message",
            T: ReplaceEnvFailure,
            oneof: "result"
        }
    ]);
const ReplaceEnvToolCall = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReplaceEnvToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: ReplaceEnvArgs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: ReplaceEnvResult
        },
        {
            no: 3,
            name: "associated_pod_key",
            kind: "scalar",
            T: 9
        }
    ]);
const ReplaceEnvToolCallDelta = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.ReplaceEnvToolCallDelta", ()=>[
        {
            no: 1,
            name: "associated_pod_key",
            kind: "scalar",
            T: 9
        }
    ]);
