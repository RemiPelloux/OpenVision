"use strict";
((exports.id = 695),
  (exports.ids = [695]),
  (exports.modules = {
    93695: (e, t, n) => {
      (n.r(t), n.d(t, { createPrivateInferenceLoopClient: () => p }));
      var i = n(37949),
        a = n(33002),
        o = n(98691),
        r = n(82714),
        s = n(89117),
        c = n(94698);
      const d = (0, i.h)("agent-host:private-inference");
      async function p(e) {
        const t = e.piOptions.decision;
        if ("fail-closed" === t.kind || "enrollment-pending" === t.kind)
          return l(e, t.configErrorDetail);
        try {
          const n = await (0, s._x)({
              configFile: t.configFile,
              env: e.piOptions.env,
              ...(void 0 !== e.piOptions.onCatalogParsed
                ? { onCatalogParsed: e.piOptions.onCatalogParsed }
                : {}),
            }),
            i = new r.Zy();
          return (
            d.info((0, a.q6)(), "Private inference construction active"),
            (0, o.x)({
              sessionProvider: (0, s.uK)(n),
              catalog: n,
              promptQualityCaptures: i,
              getPrivacyModeEnum: () =>
                e.backendClients.runtimeCapabilities?.getPrivacyModeEnum?.(),
              attachAttemptContext: e.attachAttemptContext,
              ...(void 0 === e.backendClients.privateInferenceBackend ||
              void 0 === e.host.privateInferenceUsage
                ? {}
                : {
                    usageAdmission: (0, c.$)(
                      e.backendClients.privateInferenceBackend,
                      e.host.privateInferenceUsage,
                    ),
                  }),
            })
          );
        } catch (t) {
          const n = t instanceof Error ? t.message : String(t);
          return l(e, n);
        }
      }
      function l(e, t) {
        return (
          d.info((0, a.q6)(), `Private inference unusable. Turns will fail: ${t}`),
          (0, o.x)({
            sessionProvider: void 0,
            catalog: void 0,
            configErrorDetail: t,
            getPrivacyModeEnum: () => e.backendClients.runtimeCapabilities?.getPrivacyModeEnum?.(),
            attachAttemptContext: e.attachAttemptContext,
          })
        );
      }
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-host/dist/695.js.map
