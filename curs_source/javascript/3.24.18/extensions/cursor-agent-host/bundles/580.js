"use strict";
((exports.id = 580),
  (exports.ids = [173, 580]),
  (exports.modules = {
    29580: (t, e, r) => {
      (r.r(e),
        r.d(e, {
          AGENT_HOST_REMOTE_EGRESS_FLIP_MESSAGE: () => s,
          createRemoteEgressFlipError: () => i,
          createRemoteEgressKindLatch: () => c,
          createRemoteEgressLatchedTransport: () => l,
          decisionFromProbeResult: () => u,
          isRemoteEgressFlipError: () => a,
          mergeAbortSignals: () => E,
          runLatchedAgentService: () => d,
        }));
      var n = r(93173),
        o = r(1444);
      const s = "connection aborted (remote egress probe latched external)";
      function i() {
        return Object.assign(new Error(s), { code: "ECONNRESET" });
      }
      function a(t) {
        return t instanceof Error && t.message === s;
      }
      function c(t) {
        let e = t?.initial;
        const r = new Set(),
          n = (t) => {
            for (const e of r) e(t);
          },
          s = (r, s) => {
            if (void 0 !== e) return !1;
            e = r;
            const i = s?.source ?? ("external" === r ? "probe" : "run_first_byte"),
              a = s?.reason ?? o.YR,
              c = { kind: r, source: i, reason: a };
            return (
              t?.onDecision?.(c),
              "external" === r
                ? (t?.onExternal?.(a), n({ kind: "external", reason: a }), !0)
                : (n({ kind: "builtin" }), !0)
            );
          };
        return (
          void 0 !== t?.initial &&
            t.onDecision?.({ kind: t.initial, source: t.initialSource ?? "setting", reason: o.YR }),
          {
            resolveKind: () => e ?? "builtin",
            peekKind: () => e,
            latch: s,
            applyProbeResult(t) {
              const e = u(t);
              return (
                "external" === e.kind
                  ? s("external", { source: "probe", reason: e.reason })
                  : t.ok && t.url.length > 0 && s("builtin", { source: "probe", reason: o.YR }),
                e
              );
            },
            subscribe: (t) => (
              r.add(t),
              () => {
                r.delete(t);
              }
            ),
          }
        );
      }
      function u(t) {
        return t.ok || !(0, n.isConnectClassProbeFailure)(t.reason)
          ? { kind: "builtin" }
          : { kind: "external", reason: t.reason };
      }
      function l(t) {
        let e;
        const r = () => ((e ??= t.createExternal()), e);
        return {
          run: (e, n, o) =>
            d({
              builtin: t.builtin,
              getExternal: r,
              latch: t.latch,
              ctx: e,
              request: n,
              options: o,
            }),
        };
      }
      async function* d(t) {
        const e = t.latch.peekKind();
        if ("external" === e) return void (yield* t.getExternal().run(t.ctx, t.request, t.options));
        if ("builtin" === e) return void (yield* t.builtin.run(t.ctx, t.request, t.options));
        const r = new AbortController();
        let o = !1;
        const s = t.latch.subscribe((t) => {
          "external" !== t.kind || o || r.abort();
        });
        try {
          for await (const e of t.builtin.run(t.ctx, t.request, {
            ...t.options,
            signal: E(t.options.signal, r.signal),
          }))
            ((o = !0), t.latch.latch("builtin", { source: "run_first_byte" }), yield e);
          t.latch.latch("builtin", { source: "run_first_byte" });
        } catch (e) {
          if (!o && r.signal.aborted && !t.options.signal.aborted) throw i();
          throw (
            !o &&
              (0, n.isPreFirstByteConnectClassError)(e) &&
              t.latch.latch("external", {
                source: "run_connect_error",
                reason: (0, n.classifyRemoteEgressProbeError)(e),
              }),
            e
          );
        } finally {
          s();
        }
      }
      function E(t, e) {
        const r = AbortSignal.any;
        if ("function" == typeof r) return r([t, e]);
        const n = new AbortController(),
          o = () => {
            n.abort();
          };
        return t.aborted || e.aborted
          ? (n.abort(), n.signal)
          : (t.addEventListener("abort", o, { once: !0 }),
            e.addEventListener("abort", o, { once: !0 }),
            n.signal);
      }
    },
    93173: (t, e, r) => {
      (r.r(e),
        r.d(e, {
          AGENT_HOST_PROD_CREDS_DISPLAY_NAME: () => i,
          AGENT_HOST_REMOTE_EGRESS_PROBE_MS: () => s,
          awaitRemoteEgressDecision: () => R,
          classifyRemoteEgressProbeError: () => d,
          createRemoteEgressFailoverReporter: () => _,
          isConnectClassProbeFailure: () => g,
          isMidStreamTransportError: () => h,
          isPreFirstByteConnectClassError: () => b,
          loadServerAgentnUrlOverlay: () => c,
          probeRemoteAgentBackendEgress: () => p,
          readServerAgentnUrl: () => a,
          resolveAgentServiceProbeUrl: () => u,
          resolveRemoteEgressProbeTarget: () => l,
        }));
      var n = r(32467),
        o = r(41692);
      const s = 5e3,
        i = "Prod";
      function a(t) {
        if (!t || "object" != typeof t) return;
        const e = t.agentUrlConfig,
          r = e?.agentnUrl ?? e?.agentn_url;
        return "string" == typeof r && r.length > 0 ? r : void 0;
      }
      async function c(t) {
        try {
          return a(await t());
        } catch {
          return;
        }
      }
      function u(t) {
        const e = t.creds?.backendUrl,
          r = t.creds?.agentBackendUrlNonPrivacy?.default,
          n =
            (void 0 !== t.serverAgentnUrl &&
            t.serverAgentnUrl.length > 0 &&
            (void 0 === t.creds?.credentialsDisplayName || t.creds.credentialsDisplayName === i)
              ? t.serverAgentnUrl
              : r) || e;
        return t.http2Disabled
          ? void 0 === e || 0 === e.length
            ? void 0
            : { url: e, http2: !1 }
          : void 0 !== n && 0 !== n.length
            ? { url: n, http2: !0 }
            : void 0;
      }
      function l(t) {
        const e = u(t);
        if (e)
          try {
            const t = new URL(e.url);
            if (!t.hostname) return;
            const r = t.port ? Number(t.port) : "http:" === t.protocol ? 80 : 443;
            if (!Number.isFinite(r) || r <= 0) return;
            return { host: t.hostname, port: r, url: e.url, http2: e.http2 };
          } catch {
            return;
          }
      }
      function d(t) {
        const e = v(t);
        for (const t of e) {
          const e = E(y(t));
          if (void 0 !== e) return e;
        }
        for (const t of e) {
          const e = f(T(t));
          if (void 0 !== e) return e;
        }
        return "unknown";
      }
      function E(t) {
        if (void 0 !== t)
          return "ETIMEDOUT" === t || "ERR_SOCKET_TIMEOUT" === t || "UND_ERR_CONNECT_TIMEOUT" === t
            ? "timeout"
            : "EAI_AGAIN" === t
              ? "transient_dns"
              : "ENOTFOUND" === t || "EAI_FAIL" === t || "EAI_NONAME" === t || "EAI_NODATA" === t
                ? "dns"
                : "ECONNRESET" === t ||
                    "ECONNREFUSED" === t ||
                    "EPIPE" === t ||
                    "ECONNABORTED" === t ||
                    "ENETUNREACH" === t ||
                    "EHOSTUNREACH" === t
                  ? "reset"
                  : S(t, "")
                    ? "tls"
                    : N(t, "")
                      ? "proxy"
                      : void 0;
      }
      function f(t) {
        return /timed out|timeout/i.test(t)
          ? "timeout"
          : /read ECONNRESET|connect ECONNRESET|socket hang up/i.test(t)
            ? "reset"
            : S(void 0, t)
              ? "tls"
              : N(void 0, t)
                ? "proxy"
                : void 0;
      }
      function g(t) {
        return "timeout" === t || "reset" === t || "dns" === t || "tls" === t || "proxy" === t;
      }
      function h(t) {
        return v(t).some((t) =>
          /Premature close|NGHTTP2|http\/2 stream|ERR_HTTP2_SESSION_ERROR/i.test(
            `${y(t) ?? ""} ${T(t)}`,
          ),
        );
      }
      function b(t) {
        if (h(t)) return !1;
        const e = d(t);
        return "transient_dns" === e || g(e);
      }
      async function p(t) {
        if (!t.remoteName) return { ok: !0, url: "", class: "ok" };
        const e = l({
          creds: t.creds,
          http2Disabled: t.http2Disabled,
          serverAgentnUrl: t.serverAgentnUrl,
        });
        if (!e) return { ok: !0, url: "", class: "ok" };
        const r = t.timeoutMs ?? s,
          n = await (async function (t) {
            if (void 0 === t) return;
            try {
              const e = await t();
              if (!e || 0 === e.length) return;
              return [...e, ...o.rootCertificates];
            } catch {
              return;
            }
          })(t.loadSystemCertificates),
          i = await m(e, r, n, t.connectHttp2, t.connectTls);
        if (i.ok || "transient_dns" !== i.reason) return i;
        const a = await m(e, r, n, t.connectHttp2, t.connectTls);
        return a.ok || "transient_dns" !== a.reason ? a : { ...a, reason: "dns" };
      }
      async function R(t) {
        const e = await t.probe;
        return e.ok || !g(e.reason) ? { kind: "builtin" } : { kind: "external", reason: e.reason };
      }
      function _(t) {
        let e = !1;
        return {
          announce(r) {
            e ||
              ((e = !0),
              t.info(`agent host: routing inference via local client (${r})`),
              t.structuredWarn("agent host: routing inference via local client", { reason: r }),
              t.metricsIncrement("agent_host.remote_egress_failover", { reason: r }),
              t.captureException(r));
          },
        };
      }
      function m(t, e, r, s, i) {
        return t.http2
          ? (function (t, e, r, n) {
              return new Promise((o) => {
                let s = !1;
                const i = (t) => {
                    s || ((s = !0), o(t));
                  },
                  a = new URL(t.url).origin,
                  c = n(
                    a,
                    { servername: t.host, timeout: e, ...(void 0 === r ? {} : { ca: r }) },
                    () => {
                      (c.close(), i({ ok: !0, url: t.url, class: "ok" }));
                    },
                  );
                (c.setTimeout(e, () => {
                  (c.destroy(), i({ ok: !1, reason: "timeout", url: t.url, host: t.host }));
                }),
                  c.once("error", (e) => {
                    (c.destroy(), i({ ok: !1, reason: d(e), url: t.url, host: t.host }));
                  }));
              });
            })(t, e, r, s ?? n.connect)
          : (function (t, e, r, n) {
              return new Promise((o) => {
                let s = !1;
                const i = (t) => {
                    s || ((s = !0), o(t));
                  },
                  a = n(
                    {
                      host: t.host,
                      port: t.port,
                      servername: t.host,
                      timeout: e,
                      ...(void 0 === r ? {} : { ca: r }),
                    },
                    () => {
                      (a.destroy(), i({ ok: !0, url: t.url, class: "ok" }));
                    },
                  );
                (a.setTimeout(e, () => {
                  (a.destroy(), i({ ok: !1, reason: "timeout", url: t.url, host: t.host }));
                }),
                  a.once("error", (e) => {
                    (a.destroy(), i({ ok: !1, reason: d(e), url: t.url, host: t.host }));
                  }));
              });
            })(t, e, r, i ?? o.connect);
      }
      function v(t) {
        const e = [],
          r = new Set();
        let n = t;
        for (; null != n && !r.has(n);)
          (r.add(n), e.push(n), (n = "object" == typeof n && "cause" in n ? n.cause : void 0));
        return e;
      }
      function y(t) {
        if ("object" == typeof t && null !== t && "code" in t && "string" == typeof t.code)
          return t.code;
      }
      function T(t) {
        return t instanceof Error ? t.message : null == t ? "" : String(t);
      }
      function S(t, e) {
        return (
          !(
            void 0 === t ||
            !(
              t.startsWith("ERR_TLS") ||
              t.startsWith("ERR_SSL") ||
              t.startsWith("CERT_") ||
              "UNABLE_TO_VERIFY_LEAF_SIGNATURE" === t ||
              "DEPTH_ZERO_SELF_SIGNED_CERT" === t
            )
          ) || /certificate|unknown ca|self.signed|SSL alert|unable to verify/i.test(e)
        );
      }
      function N(t, e) {
        return "EPROTO" === t || /407|proxy|tunneling socket|ERR_PROXY/i.test(e);
      }
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-host/dist/580.js.map
