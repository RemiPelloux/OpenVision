"use strict";
((exports.id = 524),
  (exports.ids = [524]),
  (exports.modules = {
    29524: (e, r, s) => {
      s.d(r, { registerWebpCodecWithStartupDiagnostics: () => c });
      var t = s(37949),
        o = s(91105);
      const a = (0, t.h)("cursor-agent-host");
      function c(e) {
        const r = (0, o.Zu2)();
        r.registered
          ? a.info(e, "webp_codec.startup", { registered: !0 })
          : a.error(e, "webp_codec.startup.unavailable", {
              registered: !1,
              reason: r.reason,
              platform: process.platform,
              arch: process.arch,
            });
      }
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-host/dist/524.js.map
