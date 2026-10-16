"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createLargeProtoLoggingInterceptor = function(t) {
    return (e)=>async (r)=>{
            let s = !1;
            try {
                s = await t.checkFeatureGate("large_proto_logging_enabled");
            } catch (t) {
                return e(r);
            }
            if (!s) return e(r);
            const i = r.method.name;
            if (r.method.kind === n.MethodKind.Unary || r.method.kind === n.MethodKind.ServerStreaming) return l(r.message, i), e(r);
            if (r.method.kind === n.MethodKind.BiDiStreaming || r.method.kind === n.MethodKind.ClientStreaming) {
                const t = function(t, e) {
                    return {
                        [Symbol.asyncIterator] () {
                            const r = t[Symbol.asyncIterator]();
                            return {
                                async next () {
                                    const t = await r.next();
                                    return !t.done && t.value && l(t.value, e), t;
                                },
                                return: r.return?.bind(r),
                                throw: r.throw?.bind(r)
                            };
                        }
                    };
                }(r.message, i), n = {
                    ...r,
                    message: t
                };
                return e(n);
            }
            return e(r);
        };
};
const n = require("./module-6038.js"), s = require("./module-7126.js"), i = 20971520, o = 3;
function a(t) {
    return null != t && "function" == typeof t.getType;
}
function u(t, e, r = "", n = 0) {
    const i = [];
    try {
        const s = t.getType();
        for (const c of s.fields.list()){
            let l;
            if (c.oneof) {
                const e = t[c.oneof.localName];
                if (!e || e.case !== c.localName) continue;
                l = e.value;
            } else l = t[c.localName];
            if (null == l) continue;
            if (Array.isArray(l) && 0 === l.length) continue;
            const m = r ? `${r}.${c.localName}` : c.localName, d = (c.oneof ? new s({
                [c.oneof.localName]: {
                    case: c.localName,
                    value: l
                }
            }) : new s({
                [c.localName]: l
            })).toBinary().byteLength;
            if (n < o && a(l)) {
                const t = u(l, e, m, n + 1);
                if (t.length > 0) {
                    i.push(...t);
                    continue;
                }
            }
            i.push({
                fieldName: m,
                sizeBytes: d,
                percentage: d / e * 100
            });
        }
    } catch (t) {
        const e = {
            subkey: "field_breakdown_failed",
            error: t instanceof Error ? t.message : String(t)
        };
        console.warn("[LargeProtoLoggingInterceptor] Failed to compute field breakdown", e), s.StructuredLogProviderImpl.warn("transport", "[LargeProtoLoggingInterceptor] Failed to compute field breakdown", e);
    }
    return i.sort((t, e)=>e.sizeBytes - t.sizeBytes);
}
function c(t, e, r, n) {
    const i = performance.now(), o = u(t, e), a = performance.now() - i, c = o.slice(0, 5), l = (e / 1048576).toFixed(2), m = n + a, d = {
        service: "large_proto_interceptor",
        subkey: "large_proto_detected",
        method: r,
        typeName: t.getType?.()?.typeName ?? "unknown",
        totalSizeMB: parseFloat(l),
        topFields: c.map((t)=>({
                field: t.fieldName,
                sizeBytes: t.sizeBytes,
                percentage: t.percentage
            })),
        timingMs: {
            toBinaryTimeMs: n,
            fieldBreakdownMs: a,
            totalMs: m
        }
    };
    console.warn("[LargeProtoLoggingInterceptor] Large proto message detected", d), s.StructuredLogProviderImpl.warn("transport", "[LargeProtoLoggingInterceptor] Large proto message detected", d);
}
function l(t, e) {
    try {
        if ("function" != typeof t.toBinary) return;
        const r = performance.now(), n = t.toBinary().byteLength, s = performance.now() - r;
        n > i && c(t, n, e, s);
    } catch (t) {
        const r = {
            subkey: "check_message_size_failed",
            method: e,
            error: t instanceof Error ? t.message : String(t)
        };
        console.warn("[LargeProtoLoggingInterceptor] Failed to check proto message size", r), s.StructuredLogProviderImpl.warn("transport", "[LargeProtoLoggingInterceptor] Failed to check proto message size", r);
    }
}
