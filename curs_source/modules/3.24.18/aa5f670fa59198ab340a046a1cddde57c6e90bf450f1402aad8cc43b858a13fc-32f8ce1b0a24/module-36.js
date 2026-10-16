require.r(exports);
require.d(exports, {
    MethodIdempotency: ()=>MethodIdempotency,
    MethodKind: ()=>MethodKind
});
var MethodKind = ((MethodKind2)=>{
    MethodKind2[MethodKind2["Unary"] = 0] = "Unary";
    MethodKind2[MethodKind2["ServerStreaming"] = 1] = "ServerStreaming";
    MethodKind2[MethodKind2["ClientStreaming"] = 2] = "ClientStreaming";
    MethodKind2[MethodKind2["BiDiStreaming"] = 3] = "BiDiStreaming";
    return MethodKind2;
})(MethodKind || {});
var MethodIdempotency = ((MethodIdempotency2)=>{
    MethodIdempotency2[MethodIdempotency2["NoSideEffects"] = 1] = "NoSideEffects";
    MethodIdempotency2[MethodIdempotency2["Idempotent"] = 2] = "Idempotent";
    return MethodIdempotency2;
})(MethodIdempotency || {});
