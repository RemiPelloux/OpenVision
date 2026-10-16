"use strict";
var r, n;
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.MethodIdempotency = exports.MethodKind = void 0, function(t) {
    t[t.Unary = 0] = "Unary", t[t.ServerStreaming = 1] = "ServerStreaming", t[t.ClientStreaming = 2] = "ClientStreaming", t[t.BiDiStreaming = 3] = "BiDiStreaming";
}(r || (exports.MethodKind = r = {})), function(t) {
    t[t.NoSideEffects = 1] = "NoSideEffects", t[t.Idempotent = 2] = "Idempotent";
}(n || (exports.MethodIdempotency = n = {}));
