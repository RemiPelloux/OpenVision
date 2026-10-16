"use strict";
((exports.id = 324),
  (exports.ids = [324]),
  (exports.modules = {
    51324: (r, t, e) => {
      e.d(t, { pushExecActivationRequestContext: () => n });
      var o = e(70857),
        s = e(25925),
        i = e(68388),
        c = e(91398);
      function n(r) {
        const t = (0, i.yn)(r.workspacePath, o.homedir()),
          e = (function () {
            let r = c.env.shell ?? "";
            try {
              const t = c.workspace.getConfiguration("terminal.integrated"),
                e =
                  "win32" === process.platform
                    ? "windows"
                    : "darwin" === process.platform
                      ? "osx"
                      : "linux",
                o = t.get(`defaultProfile.${e}`);
              if (o) {
                const s = t.get(`profiles.${e}`),
                  i = s?.[o]?.path;
                i && (r = i);
              }
            } catch {}
            return r;
          })();
        (c.cursor.pushMcpWorkspaceProjectDir(r.projectDir),
          c.cursor.pushEnvStaticData({
            osVersion: `${o.platform()} ${o.release()}`,
            shell: (0, s.G6)(e),
            projectDir: r.projectDir,
            isWorkingDirHomeDir: t,
          }));
      }
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-host/dist/324.js.map
