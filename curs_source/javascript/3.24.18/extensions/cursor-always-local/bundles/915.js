"use strict";
((exports.id = 915),
  (exports.ids = [915]),
  (exports.modules = {
    637: (e, t, n) => {
      (n.r(t),
        n.d(t, {
          AGENT_WEBSOCKET_PRECONNECT_RESERVATION_HEADER: () => s,
          AGENT_WEBSOCKET_PRECONNECT_SUBPROTOCOL: () => i,
          AGENT_WEBSOCKET_PROTOCOL_VERSION: () => a,
          AGENT_WEBSOCKET_REUSE_HEADER: () => c,
          AGENT_WEBSOCKET_SEQUENTIAL_V1_REUSE_VALUE: () => l,
          AGENT_WEBSOCKET_SUBPROTOCOL: () => o,
          allowsAgentWebSocketSequentialReuse: () => d,
          validateAgentWebSocketClientFrame: () => g,
          validateAgentWebSocketConnectError: () => m,
          validateAgentWebSocketHello: () => h,
          validateAgentWebSocketRunIdentity: () => f,
          validateAgentWebSocketServerFrame: () => v,
        }));
      var r = n(3192);
      const o = "cursor-agent-v1",
        i = "cursor-agent-preconnect-v1",
        s = "x-cursor-agent-websocket-reservation-id",
        a = r.AgentWebSocketProtocolVersion.V1,
        c = "x-cursor-agent-websocket-reuse",
        l = "sequential-v1";
      function d(e) {
        const t = e.filter((e) => e.name.toLowerCase() === c);
        return 1 === t.length && t[0]?.value === l;
      }
      function u({ value: e, field: t }) {
        if (0 === e.length) throw new Error(`missing Agent WebSocket ${t}`);
      }
      function h(e) {
        if (e.protocolVersion !== a)
          throw new Error("unsupported Agent WebSocket protocol version");
      }
      function f(e) {
        if (void 0 === e) throw new Error("missing Agent WebSocket run identity");
        (u({ value: e.runId, field: "run_id" }), u({ value: e.requestId, field: "request_id" }));
      }
      function m(e) {
        if (void 0 === e) throw new Error("missing Agent WebSocket Connect error");
        if (
          e.code < r.AgentWebSocketConnectCode.CANCELED ||
          e.code > r.AgentWebSocketConnectCode.UNAUTHENTICATED
        )
          throw new Error("invalid Agent WebSocket Connect error code");
        for (const t of e.details)
          u({ value: t.typeName, field: "Connect error detail type_name" });
      }
      function g(e) {
        switch (e.frame.case) {
          case "hello":
            return void h(e.frame.value);
          case "runStart":
            return void f(e.frame.value.identity);
          case "clientMessage":
            if (
              (u({ value: e.frame.value.runId, field: "client message run_id" }),
              0 === e.frame.value.message.byteLength)
            )
              throw new Error("missing Agent WebSocket client message bytes");
            return;
          case "halfClose":
            return void u({ value: e.frame.value.runId, field: "half-close run_id" });
          case "cancelRun":
            return void u({ value: e.frame.value.runId, field: "cancel run_id" });
          default:
            throw new Error("missing Agent WebSocket client frame variant");
        }
      }
      function v(e) {
        switch (e.frame.case) {
          case "hello":
            return void h(e.frame.value);
          case "runAccepted":
            return void f(e.frame.value.identity);
          case "serverMessage":
            if (
              (u({ value: e.frame.value.runId, field: "server message run_id" }),
              0 === e.frame.value.message.byteLength)
            )
              throw new Error("missing Agent WebSocket server message bytes");
            return;
          case "runEnd":
            return (
              f(e.frame.value.identity),
              void (void 0 !== e.frame.value.error && m(e.frame.value.error))
            );
          case "runRejected":
            return (f(e.frame.value.identity), void m(e.frame.value.error));
          default:
            throw new Error("missing Agent WebSocket server frame variant");
        }
      }
    },
    915: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createAgentWebSocketRunSession = void 0));
      const r = n(7670),
        o = n(6920),
        i = n(6157),
        s = n(4436);
      function a(e) {
        const t = {};
        return (
          e.forEach((e, n) => {
            t[n] = e;
          }),
          t
        );
      }
      function c(e, t) {
        return new r.WebSocket(e.url, [t], {
          followRedirects: !1,
          perMessageDeflate: !1,
          headers: a(e.headers),
          ...(void 0 !== e.nodeOptions.ca ? { ca: [...e.nodeOptions.ca] } : {}),
          ...(void 0 !== e.nodeOptions.rejectUnauthorized
            ? { rejectUnauthorized: e.nodeOptions.rejectUnauthorized }
            : {}),
        });
      }
      function l(e, t) {
        if (e.connectionContext.endpoint !== t.connectionContext.endpoint)
          return "endpoint_changed";
        if (e.connectionContext.teamId !== t.connectionContext.teamId) return "team_changed";
        if (e.connectionContext.hasEffectiveProxy !== t.connectionContext.hasEffectiveProxy)
          return "proxy_changed";
        return (0, o.fingerprintAgentRunCredential)(e.headers.get("authorization") ?? void 0) !==
          (0, o.fingerprintAgentRunCredential)(t.headers.get("authorization") ?? void 0)
          ? "authorization_changed"
          : "connection_context_changed";
      }
      t.createAgentWebSocketRunSession = (e) => {
        const t = e.createSocket ?? c,
          n = new i.AgentWebSocketLeaseManager({
            createSocket: (n, r) => e.runWithNetworkContext(() => t(n, r)),
            contextsEqual: (e, t) =>
              (0, o.agentRunWebSocketConnectionContextsEqual)(
                e.connectionContext,
                t.connectionContext,
              ),
            classifyContextMismatch: l,
            ...(void 0 !== e.maxConnections ? { maxConnections: e.maxConnections } : {}),
            ...(void 0 !== e.keepalivePingIntervalMs
              ? { keepalivePingIntervalMs: e.keepalivePingIntervalMs }
              : {}),
            ...(void 0 !== e.keepalivePingTimeoutMs
              ? { keepalivePingTimeoutMs: e.keepalivePingTimeoutMs }
              : {}),
            ...(void 0 !== e.timers ? { timers: e.timers } : {}),
            ...(void 0 === e.observePreconnect ? {} : { observePreconnect: e.observePreconnect }),
            ...(void 0 === e.onPoolWentCold ? {} : { onPoolWentCold: e.onPoolWentCold }),
            ...(void 0 === e.onIdleSocketsExhausted
              ? {}
              : { onIdleSocketsExhausted: e.onIdleSocketsExhausted }),
            ...(void 0 === e.observeLifecycle ? {} : { observeLifecycle: e.observeLifecycle }),
          }),
          r = new s.AgentWebSocketRunAdapter({
            leaseManager: n,
            connectionUsePolicy: "sequential-runs",
            ...(void 0 !== e.timers ? { timers: e.timers } : {}),
            ...(void 0 !== e.observeFirstMessagePipeline
              ? { observeFirstMessagePipeline: e.observeFirstMessagePipeline }
              : {}),
          });
        return {
          run: (e, t) => r.run(e, t),
          preconnect: (e, t = {}) => n.preconnect(e, { ...t, reservationId: e.requestId }),
          retireWhenIdle: (e) => n.retireWhenIdle(e),
          close: (e) => n.close(e),
        };
      };
    },
    3192: (e, t, n) => {
      (n.r(t),
        n.d(t, {
          AgentWebSocketCancelRun: () => g,
          AgentWebSocketClientFrame: () => A,
          AgentWebSocketClientHalfClose: () => m,
          AgentWebSocketClientMessage: () => f,
          AgentWebSocketConnectCode: () => c,
          AgentWebSocketConnectError: () => S,
          AgentWebSocketConnectErrorDetail: () => b,
          AgentWebSocketHeader: () => u,
          AgentWebSocketHello: () => l,
          AgentWebSocketProtocolVersion: () => a,
          AgentWebSocketRunAccepted: () => v,
          AgentWebSocketRunEnd: () => k,
          AgentWebSocketRunIdentity: () => d,
          AgentWebSocketRunRejected: () => y,
          AgentWebSocketRunStart: () => h,
          AgentWebSocketServerFrame: () => w,
          AgentWebSocketServerMessage: () => p,
        }));
      var r = n(6038),
        o = n(8592);
      const i = "agent.v1.";
      class s extends o.HL {
        static get runtime() {
          return (0, o.kU)(this, "runtime", r.proto3);
        }
        static $p() {
          return i;
        }
      }
      var a = (0, o.QT)(
          r.proto3,
          i,
          "AgentWebSocketProtocolVersion",
          [
            [0, "UNSPECIFIED"],
            [1, "V1"],
          ],
          1,
        ),
        c = (0, o.QT)(
          r.proto3,
          i,
          "AgentWebSocketConnectCode",
          [
            [0, "UNSPECIFIED"],
            [1, "CANCELED"],
            [2, "UNKNOWN"],
            [3, "INVALID_ARGUMENT"],
            [4, "DEADLINE_EXCEEDED"],
            [5, "NOT_FOUND"],
            [6, "ALREADY_EXISTS"],
            [7, "PERMISSION_DENIED"],
            [8, "RESOURCE_EXHAUSTED"],
            [9, "FAILED_PRECONDITION"],
            [10, "ABORTED"],
            [11, "OUT_OF_RANGE"],
            [12, "UNIMPLEMENTED"],
            [13, "INTERNAL"],
            [14, "UNAVAILABLE"],
            [15, "DATA_LOSS"],
            [16, "UNAUTHENTICATED"],
          ],
          1,
        );
      class l extends s {
        constructor(e) {
          (super(), (this.protocolVersion = a.UNSPECIFIED), r.proto3.util.initPartial(e, this));
        }
        static fromBinary(e, t) {
          return new l().fromBinary(e, t);
        }
        static fromJson(e, t) {
          return new l().fromJson(e, t);
        }
        static fromJsonString(e, t) {
          return new l().fromJsonString(e, t);
        }
        static equals(e, t) {
          return r.proto3.util.equals(l, e, t);
        }
        static $() {
          return ["AgentWebSocketHello|1 protocol_version #0", a];
        }
      }
      class d extends s {
        constructor(e) {
          (super(), (this.runId = ""), (this.requestId = ""), r.proto3.util.initPartial(e, this));
        }
        static fromBinary(e, t) {
          return new d().fromBinary(e, t);
        }
        static fromJson(e, t) {
          return new d().fromJson(e, t);
        }
        static fromJsonString(e, t) {
          return new d().fromJsonString(e, t);
        }
        static equals(e, t) {
          return r.proto3.util.equals(d, e, t);
        }
        static $() {
          return ["AgentWebSocketRunIdentity|1 run_id 9|2 request_id 9"];
        }
      }
      class u extends s {
        constructor(e) {
          (super(), (this.name = ""), (this.value = ""), r.proto3.util.initPartial(e, this));
        }
        static fromBinary(e, t) {
          return new u().fromBinary(e, t);
        }
        static fromJson(e, t) {
          return new u().fromJson(e, t);
        }
        static fromJsonString(e, t) {
          return new u().fromJsonString(e, t);
        }
        static equals(e, t) {
          return r.proto3.util.equals(u, e, t);
        }
        static $() {
          return ["AgentWebSocketHeader|1 name 9|2 value 9"];
        }
      }
      class h extends s {
        constructor(e) {
          (super(), (this.headers = []), r.proto3.util.initPartial(e, this));
        }
        static fromBinary(e, t) {
          return new h().fromBinary(e, t);
        }
        static fromJson(e, t) {
          return new h().fromJson(e, t);
        }
        static fromJsonString(e, t) {
          return new h().fromJsonString(e, t);
        }
        static equals(e, t) {
          return r.proto3.util.equals(h, e, t);
        }
        static $() {
          return ["AgentWebSocketRunStart|1 identity #0|2 headers #1*", d, u];
        }
      }
      class f extends s {
        constructor(e) {
          (super(),
            (this.runId = ""),
            (this.sequence = r.protoInt64.zero),
            (this.message = new Uint8Array(0)),
            r.proto3.util.initPartial(e, this));
        }
        static fromBinary(e, t) {
          return new f().fromBinary(e, t);
        }
        static fromJson(e, t) {
          return new f().fromJson(e, t);
        }
        static fromJsonString(e, t) {
          return new f().fromJsonString(e, t);
        }
        static equals(e, t) {
          return r.proto3.util.equals(f, e, t);
        }
        static $() {
          return ["AgentWebSocketClientMessage|1 run_id 9|2 sequence 4|3 message 12"];
        }
      }
      class m extends s {
        constructor(e) {
          (super(), (this.runId = ""), r.proto3.util.initPartial(e, this));
        }
        static fromBinary(e, t) {
          return new m().fromBinary(e, t);
        }
        static fromJson(e, t) {
          return new m().fromJson(e, t);
        }
        static fromJsonString(e, t) {
          return new m().fromJsonString(e, t);
        }
        static equals(e, t) {
          return r.proto3.util.equals(m, e, t);
        }
        static $() {
          return ["AgentWebSocketClientHalfClose|1 run_id 9"];
        }
      }
      class g extends s {
        constructor(e) {
          (super(), (this.runId = ""), r.proto3.util.initPartial(e, this));
        }
        static fromBinary(e, t) {
          return new g().fromBinary(e, t);
        }
        static fromJson(e, t) {
          return new g().fromJson(e, t);
        }
        static fromJsonString(e, t) {
          return new g().fromJsonString(e, t);
        }
        static equals(e, t) {
          return r.proto3.util.equals(g, e, t);
        }
        static $() {
          return ["AgentWebSocketCancelRun|1 run_id 9"];
        }
      }
      class v extends s {
        constructor(e) {
          (super(), (this.headers = []), r.proto3.util.initPartial(e, this));
        }
        static fromBinary(e, t) {
          return new v().fromBinary(e, t);
        }
        static fromJson(e, t) {
          return new v().fromJson(e, t);
        }
        static fromJsonString(e, t) {
          return new v().fromJsonString(e, t);
        }
        static equals(e, t) {
          return r.proto3.util.equals(v, e, t);
        }
        static $() {
          return ["AgentWebSocketRunAccepted|1 identity #0|2 headers #1*", d, u];
        }
      }
      class p extends s {
        constructor(e) {
          (super(),
            (this.runId = ""),
            (this.sequence = r.protoInt64.zero),
            (this.message = new Uint8Array(0)),
            r.proto3.util.initPartial(e, this));
        }
        static fromBinary(e, t) {
          return new p().fromBinary(e, t);
        }
        static fromJson(e, t) {
          return new p().fromJson(e, t);
        }
        static fromJsonString(e, t) {
          return new p().fromJsonString(e, t);
        }
        static equals(e, t) {
          return r.proto3.util.equals(p, e, t);
        }
        static $() {
          return ["AgentWebSocketServerMessage|1 run_id 9|2 sequence 4|3 message 12"];
        }
      }
      class b extends s {
        constructor(e) {
          (super(),
            (this.typeName = ""),
            (this.binaryValue = new Uint8Array(0)),
            r.proto3.util.initPartial(e, this));
        }
        static fromBinary(e, t) {
          return new b().fromBinary(e, t);
        }
        static fromJson(e, t) {
          return new b().fromJson(e, t);
        }
        static fromJsonString(e, t) {
          return new b().fromJsonString(e, t);
        }
        static equals(e, t) {
          return r.proto3.util.equals(b, e, t);
        }
        static $() {
          return ["AgentWebSocketConnectErrorDetail|1 type_name 9|2 binary_value 12"];
        }
      }
      class S extends s {
        constructor(e) {
          (super(),
            (this.code = c.UNSPECIFIED),
            (this.rawMessage = ""),
            (this.metadata = []),
            (this.details = []),
            r.proto3.util.initPartial(e, this));
        }
        static fromBinary(e, t) {
          return new S().fromBinary(e, t);
        }
        static fromJson(e, t) {
          return new S().fromJson(e, t);
        }
        static fromJsonString(e, t) {
          return new S().fromJsonString(e, t);
        }
        static equals(e, t) {
          return r.proto3.util.equals(S, e, t);
        }
        static $() {
          return [
            "AgentWebSocketConnectError|1 code #0|2 raw_message 9|3 metadata #1*|4 details #2*",
            c,
            u,
            b,
          ];
        }
      }
      class k extends s {
        constructor(e) {
          (super(), (this.trailers = []), r.proto3.util.initPartial(e, this));
        }
        static fromBinary(e, t) {
          return new k().fromBinary(e, t);
        }
        static fromJson(e, t) {
          return new k().fromJson(e, t);
        }
        static fromJsonString(e, t) {
          return new k().fromJsonString(e, t);
        }
        static equals(e, t) {
          return r.proto3.util.equals(k, e, t);
        }
        static $() {
          return ["AgentWebSocketRunEnd|1 identity #0|2 trailers #1*|3 error #2?", d, u, S];
        }
      }
      class y extends s {
        constructor(e) {
          (super(), r.proto3.util.initPartial(e, this));
        }
        static fromBinary(e, t) {
          return new y().fromBinary(e, t);
        }
        static fromJson(e, t) {
          return new y().fromJson(e, t);
        }
        static fromJsonString(e, t) {
          return new y().fromJsonString(e, t);
        }
        static equals(e, t) {
          return r.proto3.util.equals(y, e, t);
        }
        static $() {
          return ["AgentWebSocketRunRejected|1 identity #0|2 error #1", d, S];
        }
      }
      class A extends s {
        constructor(e) {
          (super(), (this.frame = { case: void 0 }), r.proto3.util.initPartial(e, this));
        }
        static fromBinary(e, t) {
          return new A().fromBinary(e, t);
        }
        static fromJson(e, t) {
          return new A().fromJson(e, t);
        }
        static fromJsonString(e, t) {
          return new A().fromJsonString(e, t);
        }
        static equals(e, t) {
          return r.proto3.util.equals(A, e, t);
        }
        static $() {
          return [
            "AgentWebSocketClientFrame|1 hello #0 frame|2 run_start #1 frame|3 client_message #2 frame|4 half_close #3 frame|5 cancel_run #4 frame",
            l,
            h,
            f,
            m,
            g,
          ];
        }
      }
      class w extends s {
        constructor(e) {
          (super(), (this.frame = { case: void 0 }), r.proto3.util.initPartial(e, this));
        }
        static fromBinary(e, t) {
          return new w().fromBinary(e, t);
        }
        static fromJson(e, t) {
          return new w().fromJson(e, t);
        }
        static fromJsonString(e, t) {
          return new w().fromJsonString(e, t);
        }
        static equals(e, t) {
          return r.proto3.util.equals(w, e, t);
        }
        static $() {
          return [
            "AgentWebSocketServerFrame|1 hello #0 frame|2 run_accepted #1 frame|3 server_message #2 frame|4 run_end #3 frame|5 run_rejected #4 frame",
            l,
            v,
            p,
            k,
            y,
          ];
        }
      }
    },
    4436: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AgentWebSocketRunAdapter = void 0));
      const r = n(637),
        o = n(6402),
        i = n(3192),
        s = n(8394),
        a = n(6157),
        c = n(5349),
        l = new Set([
          "acquisition aborted",
          "binary-frames-only",
          "cancelled",
          "client-closed",
          "context invalidated",
          "expired",
          "failed_precondition",
          "idle",
          "lease released while retiring",
          "lease retired",
          "manager closed",
          "manager closed during dial",
          "opening or handshake failed",
          "permission_denied",
          "released socket is not open",
          "resource_exhausted",
          "retiring idle socket",
          "run-complete",
          "socket error",
          "socket is not reusable",
          "write-unacknowledged",
        ]);
      function d(e) {
        if (void 0 === e || 0 === e.byteLength) return "none";
        const t = e.subarray(0, 128).toString("utf8");
        return l.has(t) ? t : `redacted:${e.byteLength}`;
      }
      function u(e) {
        if (void 0 === e) return "unknown";
        const t = {
          1e3: "normal",
          1001: "going-away",
          1002: "protocol-error",
          1003: "unsupported-data",
          1005: "no-status",
          1006: "abnormal",
          1007: "invalid-payload",
          1008: "policy-violation",
          1009: "message-too-big",
          1010: "extension-required",
          1011: "internal-error",
          1012: "service-restart",
          1013: "try-again-later",
          1014: "bad-gateway",
          1015: "tls-handshake",
        }[e];
        return void 0 !== t
          ? t
          : e >= 3e3 && e <= 3999
            ? "registered"
            : e >= 4e3 && e <= 4999
              ? "application"
              : "other";
      }
      const h = {
        setTimeout: (e, t) => setTimeout(e, t),
        clearTimeout(e) {
          clearTimeout(e);
        },
      };
      function f(e) {
        return e?.reason instanceof s.ConnectError
          ? e.reason
          : new s.ConnectError("Request canceled", s.Code.Canceled);
      }
      function m(e) {
        if (e.byteLength > 5e7)
          throw new s.ConnectError(
            "Agent WebSocket client message exceeds the 50 MB limit",
            s.Code.ResourceExhausted,
          );
      }
      function g(e, t) {
        let n = !1;
        return {
          [Symbol.asyncIterator]() {
            if (n) throw new Error("Agent WebSocket fallback input is one-shot");
            n = !0;
            let r = !0;
            return {
              next: async () => (r ? ((r = !1), e) : t.next()),
              return: async () => ((r = !1), (await t.return?.()) ?? { done: !0, value: void 0 }),
              throw: async (e) => {
                if (((r = !1), void 0 !== t.throw)) return t.throw(e);
                throw (await t.return?.(), e);
              },
            };
          },
        };
      }
      t.AgentWebSocketRunAdapter = class {
        constructor(e) {
          ((this.leaseManager = e.leaseManager),
            (this.connectionUsePolicy = e.connectionUsePolicy ?? "sequential-runs"),
            (this.acceptTimeoutMs = e.acceptTimeoutMs ?? 3e4),
            (this.cancelFinalizationTimeoutMs = e.cancelFinalizationTimeoutMs ?? 5e3),
            (this.maxBufferedBytes = e.maxBufferedBytes ?? 67108864),
            (this.timers = e.timers ?? h),
            (this.observeFirstMessagePipeline = e.observeFirstMessagePipeline));
        }
        observePipeline(e) {
          try {
            this.observeFirstMessagePipeline?.(e);
          } catch {}
        }
        async run(e, t) {
          if (!0 === t.signal?.aborted) throw f(t.signal);
          let n;
          try {
            n = await this.leaseManager.acquire(e, {
              signal: t.signal,
              contextInvalidationSignal: t.contextInvalidationSignal,
              ...(void 0 === t.reuseOnly ? {} : { reuseOnly: t.reuseOnly }),
            });
          } catch (e) {
            if (e instanceof a.AgentWebSocketLifecycleError && "aborted" === e.code)
              throw f(t.signal);
            return e instanceof a.AgentWebSocketLifecycleError && "pool_exhausted" === e.code
              ? { kind: "fallback", reason: "busy" }
              : e instanceof a.AgentWebSocketLifecycleError && "no_idle_socket" === e.code
                ? { kind: "fallback", reason: "cold-pool" }
                : { kind: "fallback", reason: "lease-unavailable" };
          }
          try {
            const e = await this.startRun(n, t);
            return ("fallback" === e.kind && n.retire(), e);
          } catch (e) {
            throw (n.retire(), e);
          }
        }
        startRun(e, t) {
          const { identity: n } = t,
            o = e.socket;
          return new Promise((s, a) => {
            let l,
              d,
              u,
              h,
              v,
              p = !1,
              b = !1,
              S = !1,
              k = !1;
            const y = new Promise((e) => {
                v = e;
              }),
              A = () => {
                (this.timers.clearTimeout(l),
                  o.off("message", W),
                  o.off("error", I),
                  o.off("close", x),
                  t.signal?.removeEventListener("abort", P));
              },
              w = (e) => {
                p || ((p = !0), A(), s(e));
              },
              E = (e) => {
                p ||
                  ((p = !0),
                  ((e) => {
                    if (!k && void 0 !== u) {
                      k = !0;
                      try {
                        const t = void 0 !== u.throw ? u.throw(e) : u.return?.();
                        t?.catch(() => {});
                      } catch {}
                    }
                  })(e),
                  A(),
                  a(e));
              },
              _ = (e, t) => {
                (void 0 === d || b || ((b = !0), this.observePipeline({ outcome: "ambiguous" })),
                  E(new c.AgentWebSocketDeliveryAmbiguousError(e, { cause: t })));
              },
              C = (e) => {
                (v(e), _("Agent WebSocket write failed before RunAccepted", e));
              },
              W = (o) => {
                let s;
                try {
                  ((s = i.AgentWebSocketServerFrame.fromBinary((0, c.rawDataBytes)(o))),
                    (0, r.validateAgentWebSocketServerFrame)(s));
                } catch (e) {
                  return void _("Agent WebSocket sent an unreadable frame before RunAccepted", e);
                }
                if ("runRejected" === s.frame.case)
                  return (0, c.identityMatches)(n, s.frame.value.identity)
                    ? (void 0 === d ||
                        b ||
                        ((b = !0), this.observePipeline({ outcome: "rejected" })),
                      void w({
                        kind: "fallback",
                        reason: "run-rejected",
                        ...(void 0 === h || void 0 === u ? {} : { replayInput: g(h, u) }),
                      }))
                    : void _("Agent WebSocket rejected a different run");
                "runAccepted" === s.frame.case && (0, c.identityMatches)(n, s.frame.value.identity)
                  ? (void 0 === d ||
                      b ||
                      ((b = !0),
                      this.observePipeline({
                        outcome: "accepted",
                        timeSavedMs: Math.max(0, Date.now() - d),
                      })),
                    void 0 !== h && void 0 !== u
                      ? w({
                          kind: "response",
                          response: this.acceptRun({
                            lease: e,
                            request: t,
                            header: (0, c.agentWebSocketHeadersToHeaders)(s.frame.value.headers),
                            inputIterator: u,
                            firstInput: h,
                            firstMessageQueuedBeforeAcceptance: S,
                            preacceptWriteFailure: y,
                          }),
                        })
                      : _("Agent WebSocket accepted before input was initialized"))
                  : _("Agent WebSocket run was not accepted");
              },
              I = (e) => {
                _("Agent WebSocket failed before RunAccepted", e);
              },
              x = () => {
                _("Agent WebSocket closed before RunAccepted");
              },
              P = () => {
                (this.trySend(o, (0, c.cancelRunFrame)(n.runId)), E(f(t.signal)));
              };
            (o.on("message", W),
              o.on("error", I),
              o.on("close", x),
              t.signal?.addEventListener("abort", P, { once: !0 }),
              (l = this.timers.setTimeout(
                () => _("Agent WebSocket run was not accepted in time"),
                this.acceptTimeoutMs,
              )));
            try {
              const i = (0, c.runStartFrame)(n, t.headers, e.preconnectReservationId);
              if (((0, r.validateAgentWebSocketClientFrame)(i), 1 !== o.readyState))
                throw new Error("Agent WebSocket is not open");
              if (!1 === t.canSendRunStart?.())
                return void w({ kind: "fallback", reason: "gate-disabled" });
              this.send(o, i, C);
            } catch {
              return void w({ kind: "fallback", reason: "run-not-started" });
            }
            if (!p) {
              try {
                ((u = t.input[Symbol.asyncIterator]()),
                  (h = Promise.resolve().then(() => u.next())));
              } catch (e) {
                return void _("Agent WebSocket input could not start after RunStart", e);
              }
              (h.then(
                (e) => {
                  if (!p && !0 !== e.done) {
                    try {
                      m(e.value);
                    } catch (e) {
                      return (this.trySend(o, (0, c.cancelRunFrame)(n.runId)), void E(e));
                    }
                    ((d = Date.now()), this.observePipeline({ outcome: "attempted" }));
                    try {
                      (this.send(o, (0, c.clientMessageFrame)(n.runId, BigInt(0), e.value), C),
                        (S = !0));
                    } catch (e) {
                      _("Agent WebSocket first client message could not be queued", e);
                    }
                  }
                },
                (e) => {
                  p || _("Agent WebSocket first input failed before RunAccepted", e);
                },
              ),
                !0 === t.signal?.aborted && P());
            }
          });
        }
        acceptRun(e) {
          const { lease: t, request: n } = e,
            { identity: a } = n,
            l = t.socket,
            h = new Headers(),
            m = new c.SequenceValidator(),
            g = e.inputIterator,
            v = Date.now(),
            p = {
              stage: e.firstMessageQueuedBeforeAcceptance
                ? "client-message-queued"
                : "awaiting-first-input",
              messagesQueued: e.firstMessageQueuedBeforeAcceptance ? 1 : 0,
              bytesQueued: 0,
            };
          let b,
            S,
            k,
            y,
            A,
            w = !1,
            E = !1,
            _ = !1;
          const C = new Promise((e) => {
              A = e;
            }),
            W = (e) => {
              if (void 0 !== y) return y;
              const t = () => {};
              try {
                y =
                  void 0 !== e && void 0 !== g.throw
                    ? g.throw(e).then(t, t)
                    : (g.return?.().then(t, t) ?? Promise.resolve());
              } catch {
                y = Promise.resolve();
              }
              return y;
            },
            I = () =>
              !w &&
              ((w = !0),
              this.timers.clearTimeout(k),
              this.timers.clearTimeout(S),
              l.off("message", L),
              l.off("error", q),
              l.off("close", O),
              n.signal?.removeEventListener("abort", D),
              !0),
            x = (e) => {
              (e ? t.release() : t.retire(), A());
            },
            P = (e) => {
              I() && (W(e), x(!1));
            },
            T = () => {
              if (I()) {
                if ((W(), !_))
                  try {
                    (this.send(l, (0, c.halfCloseFrame)(a.runId)), (_ = !0));
                  } catch {
                    return void x(!1);
                  }
                x(!0);
              }
            },
            R = (e, t, n) => {
              if (w) return;
              const r = (function (e) {
                  const { code: t, reason: n, outbound: r, elapsedMs: o } = e;
                  return {
                    agentWsPhase: "accepted",
                    agentWsCloseCode: void 0 === t ? "none" : String(t),
                    agentWsCloseCategory: u(t),
                    agentWsCloseReason: d(n),
                    agentWsOutboundStage: r.stage,
                    agentWsElapsedMs: String(Math.max(0, o)),
                    agentWsClientMessagesQueued: String(r.messagesQueued),
                    agentWsClientPayloadBytesQueued: String(r.bytesQueued),
                  };
                })({ code: n?.code, reason: n?.reason, outbound: p, elapsedMs: Date.now() - v }),
                o = new c.AgentWebSocketDeliveryAmbiguousError(e, { cause: t, diagnostics: r });
              (M.error(o), P(o));
            },
            B = (e, t) => {
              w ||
                E ||
                ((E = !0),
                t && M.error(e),
                W(e),
                this.trySend(l, (0, c.cancelRunFrame)(a.runId)),
                (k = this.timers.setTimeout(() => P(), this.cancelFinalizationTimeoutMs)));
            },
            M = new c.BoundedFrameQueue(this.maxBufferedBytes, async () => {
              (B(new s.ConnectError("Response iterator returned", s.Code.Canceled), !1), await C);
            }),
            L = (e) => {
              if (w || void 0 !== b) return;
              let t;
              try {
                ((t = i.AgentWebSocketServerFrame.fromBinary((0, c.rawDataBytes)(e))),
                  (0, r.validateAgentWebSocketServerFrame)(t));
              } catch (e) {
                return void R("Accepted Agent WebSocket run sent an unreadable frame", e);
              }
              if ("serverMessage" === t.frame.case) {
                const e = t.frame.value;
                if (e.runId !== a.runId)
                  return void R("Agent WebSocket sent a message for a different run");
                try {
                  m.accept(e.sequence);
                } catch (e) {
                  return void R("Agent WebSocket sent messages out of order", e);
                }
                return void (
                  M.push(e.message, e.message.byteLength) ||
                  R("Agent WebSocket receive buffer exceeded")
                );
              }
              if ("runEnd" !== t.frame.case || !(0, c.identityMatches)(a, t.frame.value.identity))
                return void R("Agent WebSocket sent an invalid frame during an accepted run");
              if (
                ((0, c.agentWebSocketHeadersToHeaders)(t.frame.value.trailers).forEach((e, t) => {
                  h.append(t, e);
                }),
                E)
              )
                return void P();
              const n = t.frame.value.error;
              if (void 0 !== n) {
                const e = (0, c.connectErrorFromAgentWebSocket)(n);
                return (M.error(e), void P(e));
              }
              (M.end(),
                "sequential-runs" === this.connectionUsePolicy &&
                (0, r.allowsAgentWebSocketSequentialReuse)(t.frame.value.trailers)
                  ? T()
                  : P());
            },
            q = (e) => {
              E
                ? P()
                : ((b ??= e),
                  W(b),
                  void 0 === S &&
                    (S = this.timers.setTimeout(() => {
                      S = void 0;
                      void 0 !== b && R("Accepted Agent WebSocket connection failed", b);
                    }, 100)));
            },
            O = (e, t) => {
              E
                ? P()
                : R(
                    void 0 === b
                      ? "Accepted Agent WebSocket connection closed"
                      : "Accepted Agent WebSocket connection failed",
                    b,
                    { code: e, reason: t },
                  );
            },
            D = () => {
              B(f(n.signal), !0);
            };
          return (
            l.on("message", L),
            l.on("error", q),
            l.on("close", O),
            n.signal?.addEventListener("abort", D, { once: !0 }),
            e.preacceptWriteFailure.then((e) => {
              w || R("Accepted Agent WebSocket write failed", e);
            }),
            this.pumpOutbound({
              socket: l,
              identity: a,
              inputIterator: g,
              firstInput: e.firstInput,
              firstMessageQueuedBeforeAcceptance: e.firstMessageQueuedBeforeAcceptance,
              outboundDiagnostics: p,
              isDone: () => E || w || void 0 !== b,
              onHalfCloseSent: () => {
                _ = !0;
              },
              onAmbiguous: R,
            }),
            !0 === n.signal?.aborted && D(),
            e.header.set(o.AGENT_WEBSOCKET_SOCKET_REUSE_RESPONSE_HEADER, t.socketReuse),
            { header: e.header, trailer: h, message: M }
          );
        }
        async pumpOutbound(e) {
          const { socket: t, identity: n, inputIterator: r, outboundDiagnostics: o, isDone: i } = e;
          try {
            {
              const r = e.firstInput;
              if (((e.firstInput = void 0), void 0 === r))
                throw new Error("Agent WebSocket first input was already released");
              if (
                !(await this.pumpFirstOutbound({
                  socket: t,
                  identity: n,
                  firstInput: r,
                  firstMessageQueuedBeforeAcceptance: e.firstMessageQueuedBeforeAcceptance,
                  outboundDiagnostics: o,
                  isDone: i,
                  onHalfCloseSent: e.onHalfCloseSent,
                }))
              )
                return;
            }
            let s = BigInt(1);
            for (;;) {
              o.stage = "awaiting-next-input";
              const a = await r.next();
              if (i()) return;
              if (!0 === a.done)
                return (
                  this.send(t, (0, c.halfCloseFrame)(n.runId)),
                  (o.stage = "half-close-queued"),
                  void e.onHalfCloseSent()
                );
              (m(a.value),
                (o.stage = "input-ready"),
                this.send(t, (0, c.clientMessageFrame)(n.runId, s, a.value)),
                (o.messagesQueued += 1),
                (o.bytesQueued += a.value.byteLength),
                (o.stage = "client-message-queued"),
                (s += BigInt(1)));
            }
          } catch (t) {
            i() || e.onAmbiguous("Accepted Agent WebSocket outbound delivery became ambiguous", t);
          }
        }
        async pumpFirstOutbound(e) {
          const t = await e.firstInput;
          return (
            !e.isDone() &&
            (!0 === t.done
              ? (this.send(e.socket, (0, c.halfCloseFrame)(e.identity.runId)),
                (e.outboundDiagnostics.stage = "half-close-queued"),
                e.onHalfCloseSent(),
                !1)
              : (m(t.value),
                e.firstMessageQueuedBeforeAcceptance
                  ? (e.outboundDiagnostics.bytesQueued = t.value.byteLength)
                  : ((e.outboundDiagnostics.stage = "input-ready"),
                    this.send(
                      e.socket,
                      (0, c.clientMessageFrame)(e.identity.runId, BigInt(0), t.value),
                    ),
                    (e.outboundDiagnostics.messagesQueued = 1),
                    (e.outboundDiagnostics.bytesQueued = t.value.byteLength),
                    (e.outboundDiagnostics.stage = "client-message-queued")),
                (e.outboundDiagnostics.stage = "awaiting-next-input"),
                !0))
          );
        }
        send(e, t, n) {
          if (((0, r.validateAgentWebSocketClientFrame)(t), 1 !== e.readyState))
            throw new Error("Agent WebSocket is not open");
          const o = t.toBinary();
          void 0 !== n
            ? e.send(o, (e) => {
                null != e && n(e);
              })
            : e.send(o);
        }
        trySend(e, t) {
          try {
            this.send(e, t);
          } catch {}
        }
      };
    },
    5349: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BoundedFrameQueue =
          t.SequenceValidator =
          t.AgentWebSocketDeliveryAmbiguousError =
            void 0),
        (t.identityMatches = function (e, t) {
          return void 0 !== t && t.runId === e.runId && t.requestId === e.requestId;
        }),
        (t.headersToAgentWebSocketHeaders = a),
        (t.agentWebSocketHeadersToHeaders = c),
        (t.connectErrorFromAgentWebSocket = function (e) {
          const t = new i.ConnectError(e.rawMessage, e.code, c(e.metadata));
          return (
            (t.details = e.details.map((e) => ({ type: e.typeName, value: e.binaryValue }))), t
          );
        }),
        (t.runStartFrame = function (e, t, n) {
          const i = new Headers(t);
          void 0 !== n && i.set(r.AGENT_WEBSOCKET_PRECONNECT_RESERVATION_HEADER, n);
          return new o.AgentWebSocketClientFrame({
            frame: {
              case: "runStart",
              value: new o.AgentWebSocketRunStart({ identity: e, headers: a(i) }),
            },
          });
        }),
        (t.clientMessageFrame = function (e, t, n) {
          return new o.AgentWebSocketClientFrame({
            frame: {
              case: "clientMessage",
              value: new o.AgentWebSocketClientMessage({ runId: e, sequence: t, message: n }),
            },
          });
        }),
        (t.halfCloseFrame = function (e) {
          return new o.AgentWebSocketClientFrame({
            frame: { case: "halfClose", value: new o.AgentWebSocketClientHalfClose({ runId: e }) },
          });
        }),
        (t.cancelRunFrame = function (e) {
          return new o.AgentWebSocketClientFrame({
            frame: { case: "cancelRun", value: new o.AgentWebSocketCancelRun({ runId: e }) },
          });
        }),
        (t.rawDataBytes = function (e) {
          if (Array.isArray(e)) return Buffer.concat(e);
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        }));
      const r = n(637),
        o = n(3192),
        i = n(8394);
      class s extends Error {
        constructor(e, t) {
          (super(e),
            Object.defineProperty(this, "message", {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              value: e,
            }),
            void 0 !== t &&
              "cause" in t &&
              Object.defineProperty(this, "cause", {
                configurable: !0,
                writable: !0,
                value: t.cause,
              }),
            (this.agentWebSocketDiagnostics = t?.diagnostics),
            (this.name = "AgentWebSocketDeliveryAmbiguousError"));
        }
      }
      function a(e) {
        const t = [];
        return (
          e.forEach((e, n) => {
            t.push(new o.AgentWebSocketHeader({ name: n, value: e }));
          }),
          t
        );
      }
      function c(e) {
        const t = new Headers();
        for (const n of e) t.append(n.name, n.value);
        return t;
      }
      t.AgentWebSocketDeliveryAmbiguousError = s;
      t.SequenceValidator = class {
        constructor() {
          this.next = BigInt(0);
        }
        accept(e) {
          if (e !== this.next)
            throw new Error(`Agent WebSocket sequence ${e} arrived out of order`);
          this.next += BigInt(1);
        }
      };
      class l {
        constructor(e, t) {
          ((this.maxBufferedBytes = e),
            (this.onReturn = t),
            (this.values = []),
            (this.readers = []),
            (this.bufferedBytes = 0));
        }
        push(e, t) {
          if (void 0 !== this.terminal) return !0;
          const n = this.readers.shift();
          return void 0 !== n
            ? (n.resolve({ done: !1, value: e }), !0)
            : !(this.bufferedBytes + t > this.maxBufferedBytes) &&
                ((this.bufferedBytes += t), this.values.push({ value: e, bytes: t }), !0);
        }
        end() {
          this.settle(void 0);
        }
        error(e) {
          this.settle(e);
        }
        settle(e) {
          if (void 0 === this.terminal) {
            ((this.terminal = { error: e }),
              void 0 !== e && ((this.values.length = 0), (this.bufferedBytes = 0)));
            for (const t of this.readers.splice(0))
              void 0 === e ? t.resolve({ done: !0, value: void 0 }) : t.reject(e);
          }
        }
        [Symbol.asyncIterator]() {
          return {
            next: () => {
              const e = this.values.shift();
              if (void 0 !== e)
                return (
                  (this.bufferedBytes -= e.bytes), Promise.resolve({ done: !1, value: e.value })
                );
              const t = this.terminal;
              return void 0 !== t
                ? void 0 === t.error
                  ? Promise.resolve({ done: !0, value: void 0 })
                  : Promise.reject(t.error)
                : new Promise((e, t) => {
                    this.readers.push({ resolve: e, reject: t });
                  });
            },
            return: async () => (await this.onReturn(), { done: !0, value: void 0 }),
          };
        }
      }
      t.BoundedFrameQueue = l;
    },
    6157: (e, t, n) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AgentWebSocketLeaseManager = t.AgentWebSocketLifecycleError = void 0));
      const r = n(637),
        o = n(3192);
      class i extends Error {
        constructor(e, t) {
          (super(t), (this.name = "AgentWebSocketLifecycleError"), (this.code = e));
        }
      }
      t.AgentWebSocketLifecycleError = i;
      const s = {
        setTimeout: (e, t) => setTimeout(e, t),
        clearTimeout(e) {
          clearTimeout(e);
        },
      };
      function a(e, t) {
        const n = t instanceof Error && t.message.length > 0 ? `: ${t.message}` : "";
        return new i(
          e,
          {
            aborted: "Agent WebSocket acquisition aborted",
            context_invalidated: "Agent WebSocket context invalidated",
            handshake_failed: `Agent WebSocket hello handshake failed${n}`,
            handshake_timeout: "Agent WebSocket hello handshake timed out",
            manager_closed: "Agent WebSocket lease manager is closed",
            no_idle_socket: "Agent WebSocket pool had no warm socket to reuse",
            open_failed: `Agent WebSocket failed to open${n}`,
            open_timeout: "Agent WebSocket opening timed out",
            pool_exhausted: "Agent WebSocket connection pool is at capacity",
          }[e],
        );
      }
      function c(e) {
        return !0 === e?.aborted;
      }
      function l(e, t) {
        return "number" == typeof e && Number.isFinite(e) && e > 0 ? e : t;
      }
      function d(e, t) {
        if (void 0 === e) return "none";
        const n = Math.max(0, t - e);
        return n < 1e3
          ? "under_1s"
          : n < 1e4
            ? "1s_to_10s"
            : n < 6e4
              ? "10s_to_1m"
              : n < 3e5
                ? "1m_to_5m"
                : "5m_plus";
      }
      function u(e) {
        return 0 === e
          ? "none"
          : 1e3 === e
            ? "normal"
            : 1001 === e
              ? "going_away"
              : 1006 === e
                ? "abnormal"
                : 1008 === e
                  ? "policy"
                  : 1012 === e
                    ? "restart"
                    : "other";
      }
      function h(e, t) {
        e.activePhaseSocketEventOwner === t && (e.activePhaseSocketEventOwner = void 0);
      }
      t.AgentWebSocketLeaseManager = class {
        constructor(e) {
          ((this.generations = []),
            (this.closingSockets = new Set()),
            (this.reservations = 0),
            (this.retirementDepth = 0),
            (this.closed = !1),
            (this.createSocket = e.createSocket),
            (this.contextsEqual = e.contextsEqual ?? Object.is),
            (this.classifyContextMismatch = e.classifyContextMismatch));
          const t = l(e.maxConnections, 1);
          var n, r;
          ((this.maxConnections = Math.max(1, Math.trunc(t))),
            (this.openTimeoutMs = l(e.openTimeoutMs, 1e4)),
            (this.handshakeTimeoutMs = l(e.handshakeTimeoutMs, 1e4)),
            (this.closeGraceTimeoutMs = l(e.closeGraceTimeoutMs, 5e3)),
            (this.keepalivePingIntervalMs =
              ((n = e.keepalivePingIntervalMs),
              (r = 1e4),
              "number" == typeof n && Number.isFinite(n) && n >= 0 ? n : r)),
            (this.keepalivePingTimeoutMs = l(e.keepalivePingTimeoutMs, 2e4)),
            (this.timers = e.timers ?? s),
            (this.now = e.now ?? Date.now),
            (this.observePreconnect = e.observePreconnect),
            (this.onPoolWentCold = e.onPoolWentCold),
            (this.onIdleSocketsExhausted = e.onIdleSocketsExhausted),
            (this.observeLifecycle = e.observeLifecycle));
        }
        async acquire(e, t = {}) {
          let n,
            o = "no_idle_socket";
          try {
            if (this.closed) throw a("manager_closed");
            if (this.retirementDepth > 0) throw a("pool_exhausted");
            if (c(t.signal)) throw a("aborted");
            if (c(t.contextInvalidationSignal)) throw a("context_invalidated");
            const i = this.claimIdleGeneration(e, t.contextInvalidationSignal);
            o = i.missReason;
            const s = i.generation;
            if (void 0 === s && !0 === t.reuseOnly)
              throw a(
                this.occupancy() >= this.maxConnections ? "pool_exhausted" : "no_idle_socket",
              );
            const l = s ?? (await this.openGeneration(e, t, r.AGENT_WEBSOCKET_SUBPROTOCOL));
            if (((n = l), c(t.signal)))
              throw (
                this.retireGeneration(l, "acquisition aborted", "acquisition_aborted"), a("aborted")
              );
            if (c(t.contextInvalidationSignal))
              throw (
                this.retireGeneration(l, "context invalidated", "context_invalidated"),
                a("context_invalidated")
              );
            if ("ready" !== l.state || 1 !== l.socket.readyState || !this.generations.includes(l))
              throw (
                this.retireGeneration(l, "socket is not reusable", "socket_unusable"),
                a("open_failed")
              );
            let d;
            ((l.leased = !0),
              (l.leaseCount += 1),
              (l.lastClaimedIdleAgeBucket = void 0 === s ? "none" : i.idleAgeBucket),
              this.exitIdle(l),
              l.preconnectReady &&
                !l.preconnectClaimed &&
                ((l.preconnectClaimed = !0),
                (d = l.preconnectReservationId),
                this.emitPreconnect("claimed")));
            const u = void 0 === s ? "opened" : l.leaseCount <= 1 ? "preconnected" : "reused",
              h = this.createLease(l, u, d);
            return (
              this.emitLifecycle(
                void 0 === s
                  ? { type: "acquire", outcome: "opened", missReason: o }
                  : { type: "acquire", outcome: "reused", idleAgeBucket: i.idleAgeBucket },
              ),
              this.maybeEmitIdleSocketsExhausted(),
              h
            );
          } catch (e) {
            throw (
              this.emitLifecycle({
                type: "acquire",
                outcome: "failed",
                failureCategory: e instanceof i ? e.code : "unknown",
                missReason: o,
              }),
              e
            );
          } finally {
            void 0 !== n && (n.acquiring = !1);
          }
        }
        async preconnect(e, t) {
          if (this.closed) throw a("manager_closed");
          if (this.retirementDepth > 0) throw a("pool_exhausted");
          if (c(t.signal)) throw a("aborted");
          if (c(t.contextInvalidationSignal)) throw a("context_invalidated");
          const n = this.claimIdleGeneration(e, t.contextInvalidationSignal).generation;
          if (void 0 !== n) return void (n.acquiring = !1);
          const o = await this.openGeneration(
            e,
            t,
            r.AGENT_WEBSOCKET_PRECONNECT_SUBPROTOCOL,
            t.reservationId,
          );
          if (c(t.signal))
            throw (
              this.retireGeneration(o, "preconnect aborted", "preconnect_aborted"), a("aborted")
            );
          if (c(t.contextInvalidationSignal))
            throw (
              this.retireGeneration(o, "preconnect context invalidated", "context_invalidated"),
              a("context_invalidated")
            );
          if ("ready" !== o.state || 1 !== o.socket.readyState || !this.generations.includes(o))
            throw (
              this.retireGeneration(
                o,
                "preconnected socket is not reusable",
                "preconnect_unusable",
              ),
              a("open_failed")
            );
          if (((o.preconnectReady = !0), (o.acquiring = !1), this.enterIdle(o), o.retireAfterLease))
            throw (
              this.retireGeneration(
                o,
                "preconnect completed while retiring",
                o.deferredRetirementCause ?? "preconnect_stale",
              ),
              a("open_failed")
            );
        }
        close(e = "manager_closed") {
          if (!this.closed) {
            this.closed = !0;
            for (const t of [...this.generations]) this.retireGeneration(t, "manager closed", e);
          }
        }
        retireWhenIdle(e = "unknown") {
          this.retirementDepth += 1;
          try {
            for (const t of [...this.generations])
              ((t.retireAfterLease = !0), (t.deferredRetirementCause ??= e));
            for (const t of [...this.generations])
              this.isIdle(t) && this.retireGeneration(t, "retiring idle socket", e);
          } finally {
            this.retirementDepth -= 1;
          }
        }
        isIdle(e) {
          return "ready" === e.state && !e.leased && !e.acquiring;
        }
        occupancy() {
          return this.generations.length + this.closingSockets.size + this.reservations;
        }
        claimIdleGeneration(e, t) {
          this.retirementDepth += 1;
          try {
            return this.claimIdleGenerationDuringRetirement(e, t);
          } finally {
            this.retirementDepth -= 1;
          }
        }
        claimIdleGenerationDuringRetirement(e, t) {
          let n,
            r = "none";
          const o = new Set(),
            i = [];
          for (const s of [...this.generations]) {
            if (!this.isIdle(s)) continue;
            s.acquiring = !0;
            let a = !1;
            const c = s.contextInvalidationSignal === t;
            try {
              a = c && this.contextsEqual(s.context, e);
            } finally {
              (a && void 0 === n) || (s.acquiring = !1);
            }
            a
              ? "ready" === s.state && this.generations.includes(s)
                ? s.retireAfterLease || 1 !== s.socket.readyState
                  ? ((s.acquiring = !1),
                    o.add("idle_unusable"),
                    this.terminateIdleGeneration(s, "idle_unusable"))
                  : void 0 === n && ((n = s), (r = d(s.idleSinceMs, this.readNow())))
                : (s.acquiring = !1)
              : (o.add(c ? this.contextMismatchReason(s.context, e) : "context_generation_changed"),
                i.push(s));
          }
          if (void 0 !== n)
            return { generation: n, idleAgeBucket: r, missReason: "no_idle_socket" };
          for (const e of i) {
            if (this.occupancy() < this.maxConnections) break;
            this.terminateIdleGeneration(e, "context_mismatch");
          }
          let s = "no_idle_socket";
          if (o.size > 1) s = "multiple_idle_mismatches";
          else for (const e of o) s = e;
          return { generation: void 0, idleAgeBucket: "none", missReason: s };
        }
        dialGeneration(e, t, n, r) {
          if (this.closed) throw a("manager_closed");
          if (this.occupancy() >= this.maxConnections) throw a("pool_exhausted");
          this.reservations += 1;
          try {
            let o;
            try {
              o = this.createSocket(e, n);
            } catch (e) {
              throw a("open_failed", e);
            }
            const i = {
              context: e,
              contextInvalidationSignal: t.contextInvalidationSignal,
              socket: o,
              subprotocol: n,
              preconnectReservationId: r,
              createdAtMs: this.readNow(),
              state: "opening",
              acquiring: !0,
              leased: !1,
              preconnectReady: !1,
              preconnectClaimed: !1,
              retireAfterLease: !1,
              deferredRetirementCause: void 0,
              idleSinceMs: void 0,
              lastClaimedIdleAgeBucket: "none",
              leaseCount: 0,
              keepalivePingTimeout: void 0,
              keepalivePongTimeout: void 0,
              onKeepalivePong: void 0,
              activePhaseSocketEventOwner: void 0,
              cancelPending: void 0,
              onContextInvalidated: void 0,
              durableLifecycleListeners: void 0,
            };
            if (
              (this.generations.push(i),
              this.attachDurableGenerationLifecycleListeners(i),
              this.closed)
            )
              throw (
                this.retireGeneration(i, "manager closed during dial", "manager_closed"),
                a("manager_closed")
              );
            return i;
          } finally {
            this.reservations -= 1;
          }
        }
        async openGeneration(e, t, n, r) {
          const o = this.dialGeneration(e, t, n, r);
          try {
            await this.waitForOpen(o, t.signal);
            const e = o.socket;
            if ((this.assertPooled(o), e.protocol !== n))
              throw a("handshake_failed", new Error(`server did not negotiate ${n}`));
            if (
              (await this.exchangeHello(o, t.signal), !0 === o.contextInvalidationSignal?.aborted)
            )
              throw a("context_invalidated");
            return (
              this.assertPooled(o), (o.state = "ready"), this.attachContextInvalidation(o), o
            );
          } catch (e) {
            throw (
              this.retireGeneration(o, "opening or handshake failed", "open_or_handshake_failed"), e
            );
          }
        }
        waitForOpen(e, t) {
          return 1 === e.socket.readyState
            ? Promise.resolve()
            : new Promise((n, r) => {
                let o,
                  i = !1;
                const s = (a) => {
                    i ||
                      ((i = !0),
                      this.timers.clearTimeout(o),
                      e.socket.off("open", c),
                      h(e, u),
                      t?.removeEventListener("abort", l),
                      e.contextInvalidationSignal?.removeEventListener("abort", d),
                      e.cancelPending === s && (e.cancelPending = void 0),
                      void 0 === a ? n() : r(a));
                  },
                  c = () => s(),
                  l = () => s(a("aborted")),
                  d = () => s(a("context_invalidated")),
                  u = {
                    phase: "opening",
                    onError: (e) => s(a("open_failed", e)),
                    onClose: () => s(a("open_failed")),
                  };
                (e.socket.on("open", c),
                  (e.activePhaseSocketEventOwner = u),
                  t?.addEventListener("abort", l, { once: !0 }),
                  e.contextInvalidationSignal?.addEventListener("abort", d, { once: !0 }),
                  (e.cancelPending = s),
                  (o = this.timers.setTimeout(() => s(a("open_timeout")), this.openTimeoutMs)),
                  !0 === t?.aborted ? l() : !0 === e.contextInvalidationSignal?.aborted && d());
              });
        }
        exchangeHello(e, t) {
          return new Promise((n, i) => {
            let s,
              c = !1;
            const l = (r) => {
                c ||
                  ((c = !0),
                  this.timers.clearTimeout(s),
                  e.socket.off("message", d),
                  h(e, m),
                  t?.removeEventListener("abort", u),
                  e.contextInvalidationSignal?.removeEventListener("abort", f),
                  e.cancelPending === l && (e.cancelPending = void 0),
                  void 0 === r ? n() : i(r));
              },
              d = (e) => {
                try {
                  const t = o.AgentWebSocketServerFrame.fromBinary(
                    (function (e) {
                      return Array.isArray(e)
                        ? Buffer.concat(e)
                        : e instanceof ArrayBuffer
                          ? new Uint8Array(e)
                          : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                    })(e),
                  );
                  if (((0, r.validateAgentWebSocketServerFrame)(t), "hello" !== t.frame.case))
                    throw new Error("first server frame was not hello");
                  l();
                } catch (e) {
                  l(a("handshake_failed", e));
                }
              },
              u = () => l(a("aborted")),
              f = () => l(a("context_invalidated")),
              m = {
                phase: "hello-handshake",
                onError: (e) => l(a("handshake_failed", e)),
                onClose: () => l(a("handshake_failed")),
              };
            (e.socket.on("message", d),
              (e.activePhaseSocketEventOwner = m),
              t?.addEventListener("abort", u, { once: !0 }),
              e.contextInvalidationSignal?.addEventListener("abort", f, { once: !0 }),
              (e.cancelPending = l),
              (s = this.timers.setTimeout(
                () => l(a("handshake_timeout")),
                this.handshakeTimeoutMs,
              )));
            try {
              const t = new o.AgentWebSocketClientFrame({
                frame: {
                  case: "hello",
                  value: new o.AgentWebSocketHello({
                    protocolVersion: r.AGENT_WEBSOCKET_PROTOCOL_VERSION,
                  }),
                },
              });
              ((0, r.validateAgentWebSocketClientFrame)(t), e.socket.send(t.toBinary()));
            } catch (e) {
              l(a("handshake_failed", e));
            }
            !0 === t?.aborted ? u() : !0 === e.contextInvalidationSignal?.aborted && f();
          });
        }
        attachContextInvalidation(e) {
          const t = e.contextInvalidationSignal;
          if (void 0 === t) return;
          const n = () => {
            if (e.leased)
              return (
                (e.retireAfterLease = !0),
                void (e.deferredRetirementCause ??= "context_invalidated")
              );
            this.retireGeneration(e, "context invalidated", "context_invalidated");
          };
          ((e.onContextInvalidated = n), t.addEventListener("abort", n, { once: !0 }));
        }
        attachDurableGenerationLifecycleListeners(e) {
          const t = (t) => {
              const n = e.activePhaseSocketEventOwner;
              void 0 === n
                ? this.retireGeneration(e, "socket error", "socket_error")
                : n.onError(t);
            },
            n = (t, n) => {
              this.emitPeerClosed(e, t ?? 0, (n?.length ?? 0) > 0);
              const r = e.activePhaseSocketEventOwner;
              void 0 === r ? this.abandonGeneration(e) : r.onClose();
            };
          ((e.durableLifecycleListeners = { onSocketError: t, onSocketClose: n }),
            e.socket.on("error", t),
            e.socket.on("close", n));
        }
        createLease(e, t, n) {
          let r = !1;
          return {
            socket: e.socket,
            socketReuse: t,
            ...(void 0 === n ? {} : { preconnectReservationId: n }),
            release: () => {
              r ||
                ((r = !0),
                "retired" !== e.state &&
                  ((e.leased = !1),
                  e.retireAfterLease
                    ? this.retireGeneration(
                        e,
                        "lease released while retiring",
                        e.deferredRetirementCause ?? "unknown",
                      )
                    : 1 !== e.socket.readyState
                      ? this.retireGeneration(
                          e,
                          "released socket is not open",
                          "released_socket_not_open",
                        )
                      : this.enterIdle(e)));
            },
            retire: () => {
              r ||
                ((r = !0),
                (e.leased = !1),
                this.retireGeneration(e, "lease retired", "lease_retired"));
            },
          };
        }
        assertPooled(e) {
          if ("retired" === e.state || !this.generations.includes(e) || this.closed)
            throw a(this.closed ? "manager_closed" : "open_failed");
        }
        enterIdle(e) {
          ((e.idleSinceMs = this.readNow()), this.armKeepalive(e));
        }
        exitIdle(e) {
          ((e.idleSinceMs = void 0), this.clearKeepalive(e));
        }
        armKeepalive(e) {
          this.keepalivePingIntervalMs <= 0 ||
            (this.clearKeepalive(e),
            (e.keepalivePingTimeout = this.timers.setTimeout(() => {
              ((e.keepalivePingTimeout = void 0), this.sendKeepalivePing(e));
            }, this.keepalivePingIntervalMs)));
        }
        clearKeepalive(e) {
          (void 0 !== e.keepalivePingTimeout &&
            (this.timers.clearTimeout(e.keepalivePingTimeout), (e.keepalivePingTimeout = void 0)),
            void 0 !== e.keepalivePongTimeout &&
              (this.timers.clearTimeout(e.keepalivePongTimeout), (e.keepalivePongTimeout = void 0)),
            void 0 !== e.onKeepalivePong &&
              (e.socket.off("pong", e.onKeepalivePong), (e.onKeepalivePong = void 0)));
        }
        sendKeepalivePing(e) {
          if (this.closed || !this.isIdle(e)) return;
          if (1 !== e.socket.readyState)
            return void this.retireGeneration(e, "idle socket is not open", "socket_unusable");
          const t = () => {
            (this.clearKeepalive(e), !this.closed && this.isIdle(e) && this.armKeepalive(e));
          };
          ((e.onKeepalivePong = t),
            e.socket.on("pong", t),
            (e.keepalivePongTimeout = this.timers.setTimeout(() => {
              ((e.keepalivePongTimeout = void 0),
                this.terminateIdleGeneration(e, "keepalive_timeout"));
            }, this.keepalivePingTimeoutMs)));
          try {
            e.socket.ping();
          } catch {
            (this.clearKeepalive(e),
              this.retireGeneration(e, "keepalive ping failed", "socket_unusable"));
          }
        }
        abandonGeneration(e) {
          if ("retired" === e.state) return;
          (this.clearKeepalive(e),
            (e.state = "retired"),
            (e.leased = !1),
            e.preconnectReady &&
              !e.preconnectClaimed &&
              ((e.preconnectClaimed = !0), this.emitPreconnect("expired")));
          const t = e.cancelPending;
          ((e.cancelPending = void 0),
            t?.(a(this.closed ? "manager_closed" : "open_failed")),
            (e.activePhaseSocketEventOwner = void 0),
            this.detachDurableGenerationLifecycleListeners(e));
          const n = this.generations.indexOf(e);
          (-1 !== n && this.generations.splice(n, 1),
            e.socket.on("error", () => {}),
            3 === e.socket.readyState && this.maybeEmitPoolWentCold());
        }
        maybeEmitPoolWentCold() {
          if (!(this.closed || this.occupancy() > 0))
            try {
              this.onPoolWentCold?.();
            } catch {}
        }
        maybeEmitIdleSocketsExhausted() {
          if (
            !(
              this.closed ||
              void 0 === this.onIdleSocketsExhausted ||
              0 === this.occupancy() ||
              this.occupancy() >= this.maxConnections
            )
          ) {
            for (const e of this.generations) if (this.isIdle(e)) return;
            try {
              this.onIdleSocketsExhausted();
            } catch {}
          }
        }
        emitPreconnect(e) {
          try {
            this.observePreconnect?.(e);
          } catch {}
        }
        lifecycleDimensions(e) {
          const t = this.readNow(),
            n = e.activePhaseSocketEventOwner;
          return {
            phase:
              "hello-handshake" === n?.phase
                ? "hello_handshake"
                : "opening" === e.state
                  ? "opening"
                  : e.leased
                    ? "leased"
                    : e.preconnectReady && !e.preconnectClaimed
                      ? "preconnect_idle"
                      : "idle",
            socketAgeBucket:
              ((o = Math.max(0, t - e.createdAtMs)),
              o < 1e4
                ? "under_10s"
                : o < 6e4
                  ? "10s_to_1m"
                  : o < 3e5
                    ? "1m_to_5m"
                    : o < 6e5
                      ? "5m_to_10m"
                      : o < 12e5
                        ? "10m_to_20m"
                        : "20m_plus"),
            idleAgeBucket: d(e.idleSinceMs, t),
            lastClaimedIdleAgeBucket: e.lastClaimedIdleAgeBucket,
            leaseCountBucket:
              ((r = e.leaseCount),
              r <= 0
                ? "0"
                : 1 === r
                  ? "1"
                  : r <= 4
                    ? "2_to_4"
                    : r <= 8
                      ? "5_to_8"
                      : r <= 16
                        ? "9_to_16"
                        : "17_plus"),
          };
          var r, o;
        }
        contextMismatchReason(e, t) {
          try {
            return this.classifyContextMismatch?.(e, t) ?? "connection_context_changed";
          } catch {
            return "connection_context_changed";
          }
        }
        readNow() {
          try {
            return this.now();
          } catch {
            return Date.now();
          }
        }
        emitLifecycle(e) {
          try {
            this.observeLifecycle?.(e);
          } catch {}
        }
        emitPeerClosed(e, t, n) {
          this.emitLifecycle({
            type: "peer_closed",
            closeCodeCategory: u(t),
            hasReason: n,
            ...this.lifecycleDimensions(e),
          });
        }
        terminateIdleGeneration(e, t) {
          if (
            "retired" !== e.state &&
            (this.emitLifecycle({ type: "retired", cause: t, ...this.lifecycleDimensions(e) }),
            this.abandonGeneration(e),
            3 !== e.socket.readyState)
          )
            try {
              e.socket.terminate();
            } catch {
              this.trackClosingSocket(e.socket);
            }
        }
        retireGeneration(e, t, n) {
          if ("retired" === e.state) return;
          if (
            (this.emitLifecycle({ type: "retired", cause: n, ...this.lifecycleDimensions(e) }),
            this.abandonGeneration(e),
            3 === e.socket.readyState)
          )
            return;
          const r = this.trackClosingSocket(e.socket);
          try {
            e.socket.close(1e3, t);
          } catch {
            try {
              e.socket.terminate();
            } catch {
              return;
            }
            return void (void 0 !== r && this.releaseClosingSocket(r));
          }
          void 0 !== r && 3 === e.socket.readyState && this.releaseClosingSocket(r);
        }
        trackClosingSocket(e) {
          if (3 === e.readyState) return;
          const t = {
            socket: e,
            onClose: () => {
              this.releaseClosingSocket(t);
            },
            timeout: void 0,
          };
          return (
            this.closingSockets.add(t),
            e.on("close", t.onClose),
            (t.timeout = this.timers.setTimeout(() => {
              try {
                e.terminate();
              } catch {
                return;
              }
              this.releaseClosingSocket(t);
            }, this.closeGraceTimeoutMs)),
            t
          );
        }
        releaseClosingSocket(e) {
          this.closingSockets.delete(e) &&
            (this.timers.clearTimeout(e.timeout),
            e.socket.off("close", e.onClose),
            this.maybeEmitPoolWentCold());
        }
        detachDurableGenerationLifecycleListeners(e) {
          void 0 !== e.onContextInvalidated &&
            (e.contextInvalidationSignal?.removeEventListener("abort", e.onContextInvalidated),
            (e.onContextInvalidated = void 0));
          const t = e.durableLifecycleListeners;
          void 0 !== t &&
            (e.socket.off("error", t.onSocketError),
            e.socket.off("close", t.onSocketClose),
            (e.durableLifecycleListeners = void 0));
        }
      };
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-always-local/dist/915.js.map
