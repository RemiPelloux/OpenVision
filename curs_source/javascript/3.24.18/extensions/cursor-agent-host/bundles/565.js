"use strict";
((exports.id = 565),
  (exports.ids = [565]),
  (exports.modules = {
    11565: (t, e, s) => {
      s.d(e, { default: () => f });
      var r = s(41271);
      async function f(t) {
        const e = Buffer.isBuffer(t.bytes) ? t.bytes : Buffer.from(t.bytes),
          s = new r.Cm({ data: e });
        try {
          const t = await s.getText();
          return { text: "string" == typeof t.text ? t.text : "" };
        } finally {
          await s.destroy();
        }
      }
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-host/dist/565.js.map
