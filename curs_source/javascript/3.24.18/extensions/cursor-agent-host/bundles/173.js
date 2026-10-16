"use strict";
((exports.id = 173),
  (exports.ids = [173]),
  (exports.modules = {
    93173: (t, e, r) => {
      (r.r(e),
        r.d(e, {
          AGENT_HOST_PROD_CREDS_DISPLAY_NAME: () => i,
          AGENT_HOST_REMOTE_EGRESS_PROBE_MS: () => s,
          awaitRemoteEgressDecision: () => g,
          classifyRemoteEgressProbeError: () => E,
          createRemoteEgressFailoverReporter: () => m,
          isConnectClassProbeFailure: () => h,
          isMidStreamTransportError: () => R,
          isPreFirstByteConnectClassError: () => _,
          loadServerAgentnUrlOverlay: () => u,
          probeRemoteAgentBackendEgress: () => p,
          readServerAgentnUrl: () => c,
          resolveAgentServiceProbeUrl: () => a,
          resolveRemoteEgressProbeTarget: () => l,
        }));
      var n = r(32467),
        o = r(41692);
      const s = 5e3,
        i = "Prod";
      function c(t) {
        if (!t || "object" != typeof t) return;
        const e = t.agentUrlConfig,
          r = e?.agentnUrl ?? e?.agentn_url;
        return "string" == typeof r && r.length > 0 ? r : void 0;
      }
      async function u(t) {
        try {
          return c(await t());
        } catch {
          return;
        }
      }
      function a(t) {
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
        const e = a(t);
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
      function E(t) {
        const e = T(t);
        for (const t of e) {
          const e = d(N(t));
          if (void 0 !== e) return e;
        }
        for (const t of e) {
          const e = f(S(t));
          if (void 0 !== e) return e;
        }
        return "unknown";
      }
      function d(t) {
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
                  : y(t, "")
                    ? "tls"
                    : A(t, "")
                      ? "proxy"
                      : void 0;
      }
      function f(t) {
        return /timed out|timeout/i.test(t)
          ? "timeout"
          : /read ECONNRESET|connect ECONNRESET|socket hang up/i.test(t)
            ? "reset"
            : y(void 0, t)
              ? "tls"
              : A(void 0, t)
                ? "proxy"
                : void 0;
      }
      function h(t) {
        return "timeout" === t || "reset" === t || "dns" === t || "tls" === t || "proxy" === t;
      }
      function R(t) {
        return T(t).some((t) =>
          /Premature close|NGHTTP2|http\/2 stream|ERR_HTTP2_SESSION_ERROR/i.test(
            `${N(t) ?? ""} ${S(t)}`,
          ),
        );
      }
      function _(t) {
        if (R(t)) return !1;
        const e = E(t);
        return "transient_dns" === e || h(e);
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
          i = await v(e, r, n, t.connectHttp2, t.connectTls);
        if (i.ok || "transient_dns" !== i.reason) return i;
        const c = await v(e, r, n, t.connectHttp2, t.connectTls);
        return c.ok || "transient_dns" !== c.reason ? c : { ...c, reason: "dns" };
      }
      async function g(t) {
        const e = await t.probe;
        return e.ok || !h(e.reason) ? { kind: "builtin" } : { kind: "external", reason: e.reason };
      }
      function m(t) {
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
      function v(t, e, r, s, i) {
        return t.http2
          ? (function (t, e, r, n) {
              return new Promise((o) => {
                let s = !1;
                const i = (t) => {
                    s || ((s = !0), o(t));
                  },
                  c = new URL(t.url).origin,
                  u = n(
                    c,
                    { servername: t.host, timeout: e, ...(void 0 === r ? {} : { ca: r }) },
                    () => {
                      (u.close(), i({ ok: !0, url: t.url, class: "ok" }));
                    },
                  );
                (u.setTimeout(e, () => {
                  (u.destroy(), i({ ok: !1, reason: "timeout", url: t.url, host: t.host }));
                }),
                  u.once("error", (e) => {
                    (u.destroy(), i({ ok: !1, reason: E(e), url: t.url, host: t.host }));
                  }));
              });
            })(t, e, r, s ?? n.connect)
          : (function (t, e, r, n) {
              return new Promise((o) => {
                let s = !1;
                const i = (t) => {
                    s || ((s = !0), o(t));
                  },
                  c = n(
                    {
                      host: t.host,
                      port: t.port,
                      servername: t.host,
                      timeout: e,
                      ...(void 0 === r ? {} : { ca: r }),
                    },
                    () => {
                      (c.destroy(), i({ ok: !0, url: t.url, class: "ok" }));
                    },
                  );
                (c.setTimeout(e, () => {
                  (c.destroy(), i({ ok: !1, reason: "timeout", url: t.url, host: t.host }));
                }),
                  c.once("error", (e) => {
                    (c.destroy(), i({ ok: !1, reason: E(e), url: t.url, host: t.host }));
                  }));
              });
            })(t, e, r, i ?? o.connect);
      }
      function T(t) {
        const e = [],
          r = new Set();
        let n = t;
        for (; null != n && !r.has(n);)
          (r.add(n), e.push(n), (n = "object" == typeof n && "cause" in n ? n.cause : void 0));
        return e;
      }
      function N(t) {
        if ("object" == typeof t && null !== t && "code" in t && "string" == typeof t.code)
          return t.code;
      }
      function S(t) {
        return t instanceof Error ? t.message : null == t ? "" : String(t);
      }
      function y(t, e) {
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
      function A(t, e) {
        return "EPROTO" === t || /407|proxy|tunneling socket|ERR_PROXY/i.test(e);
      }
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-host/dist/173.js.map
