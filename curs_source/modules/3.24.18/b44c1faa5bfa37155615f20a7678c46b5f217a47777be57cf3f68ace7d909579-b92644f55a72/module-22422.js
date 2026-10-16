"use strict";
var r, n;
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.MethodIdempotency = exports.MethodKind = void 0, function(e) {
    e[e.Unary = 0] = "Unary", e[e.ServerStreaming = 1] = "ServerStreaming", e[e.ClientStreaming = 2] = "ClientStreaming", e[e.BiDiStreaming = 3] = "BiDiStreaming";
}(r || (exports.MethodKind = r = {})), function(e) {
    e[e.NoSideEffects = 1] = "NoSideEffects", e[e.Idempotent = 2] = "Idempotent";
}(n || (exports.MethodIdempotency = n = {}));
