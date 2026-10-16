"use strict";
((exports.id = 746),
  (exports.ids = [746]),
  (exports.modules = {
    12746: (e, r, s) => {
      s.d(r, { FD: () => i, dn: () => l, resolveSandboxHelperPath: () => c });
      var o = s(79896),
        n = s(16928),
        t = s(25925),
        a = s(91398),
        p = s(30306);
      function i() {
        let e = a.env.shell ?? "";
        try {
          const r = a.workspace.getConfiguration("terminal.integrated"),
            s =
              "win32" === process.platform
                ? "windows"
                : "darwin" === process.platform
                  ? "osx"
                  : "linux",
            o = r.get(`defaultProfile.${s}`);
          if (o) {
            const n = r.get(`profiles.${s}`),
              t = n?.[o]?.path;
            t && (e = t);
          }
        } catch (e) {
          p.gW.warn(`Failed to read terminal config: ${e}`);
        }
        return e;
      }
      function c(e) {
        if (
          "linux" !== process.platform &&
          "win32" !== process.platform &&
          "darwin" !== process.platform
        )
          return;
        const r = "win32" === process.platform ? "cursorsandbox.exe" : "cursorsandbox",
          s = process.resourcesPath,
          t = n.dirname(process.execPath),
          a = [n.join(e, "../../resources/helpers", r)];
        (s &&
          (a.push(n.join(s, "app", "resources", "helpers", r)),
          a.push(n.join(s, "resources", "helpers", r))),
          a.push(n.join(t, "resources", "helpers", r)),
          a.push(n.join(t, "resources", "app", "resources", "helpers", r)),
          "1" === process.env.VSCODE_DEV &&
            a.push(n.join(e, "../../node_modules/@anysphere/sandbox-helper/bin", r)));
        for (const e of a)
          try {
            if (o.existsSync(e)) return e;
          } catch {}
      }
      function l(e) {
        return (
          void 0 !== e.helperPath &&
          !!(0, t.yo)() &&
          ((0, t.St)({
            sandboxBinaryPath: e.helperPath,
            workspaceReadEnabled: e.workspaceReadEnabled,
          }),
          !0)
        );
      }
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-host/dist/746.js.map
