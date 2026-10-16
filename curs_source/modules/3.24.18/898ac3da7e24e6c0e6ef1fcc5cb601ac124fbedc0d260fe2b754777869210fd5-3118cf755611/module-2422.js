"use strict";
var a, t;
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.MethodIdempotency = exports.MethodKind = void 0, function(e) {
    e[e.Unary = 0] = "Unary", e[e.ServerStreaming = 1] = "ServerStreaming", e[e.ClientStreaming = 2] = "ClientStreaming", e[e.BiDiStreaming = 3] = "BiDiStreaming";
}(a || (exports.MethodKind = a = {})), function(e) {
    e[e.NoSideEffects = 1] = "NoSideEffects", e[e.Idempotent = 2] = "Idempotent";
}(t || (exports.MethodIdempotency = t = {}));
