"use strict";
((exports.id = 921),
  (exports.ids = [921]),
  (exports.modules = {
    77921: (s, e, r) => {
      r.d(e, { createIdeCanvasDiagnostics: () => c });
      var o = r(87305),
        t = r(37949),
        a = r(76760),
        n = r(22438);
      const i = (0, t.h)("cursor-agent-host-canvas-diagnostics");
      function c(s) {
        const e = (0, a.join)(s.projectDir, "canvases"),
          r = (0, a.join)(s.execExtensionPath, "dist", "agent-sdk"),
          t = (0, o.WT)({ canvasesDir: e, sdkSourceDir: r, tsResolveAnchor: s.execExtensionPath });
        return (
          t.bootstrapReady.then(
            (e) => {
              void 0 === e &&
                i.error(s.logContext, "Canvas SDK source missing from extension bundle");
            },
            (o) => {
              const t = (0, n.E)(o, { canvasesDir: e, sdkSourceDir: r });
              i.warn(s.logContext, "Canvas dir bootstrap failed", {
                errorName: t.errorName,
                errorMessage: t.errorMessage,
              });
            },
          ),
          { resourceDefaults: { getCanvasDiagnostics: (s) => t.getDiagnostics(s) } }
        );
      }
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-host/dist/921.js.map
