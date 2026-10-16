Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.commonParams = exports.resolveClientEndpointParameters = void 0;
exports.resolveClientEndpointParameters = (e)=>Object.assign(e, {
        useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
        useFipsEndpoint: e.useFipsEndpoint ?? !1,
        useGlobalEndpoint: e.useGlobalEndpoint ?? !1,
        defaultSigningName: "sts"
    }), exports.commonParams = {
    UseGlobalEndpoint: {
        type: "builtInParams",
        name: "useGlobalEndpoint"
    },
    UseFIPS: {
        type: "builtInParams",
        name: "useFipsEndpoint"
    },
    Endpoint: {
        type: "builtInParams",
        name: "endpoint"
    },
    Region: {
        type: "builtInParams",
        name: "region"
    },
    UseDualStack: {
        type: "builtInParams",
        name: "useDualstackEndpoint"
    }
};
