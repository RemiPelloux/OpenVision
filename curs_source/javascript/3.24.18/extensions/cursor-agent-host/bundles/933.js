"use strict";
((exports.id = 933),
  (exports.ids = [933]),
  (exports.modules = {
    54933: (e, r, t) => {
      t.d(r, { registerCursorIgnoreFileWatcher: () => n });
      var s = t(91105),
        a = t(91398);
      function n(e) {
        const r = a.workspace.createFileSystemWatcher("**/.cursorignore"),
          t = (r) => {
            for (const t of e()) r(t).catch(() => {});
          };
        return (
          r.onDidCreate(async (e) => {
            const r = await (0, s.yeE)(e.fsPath);
            null !== r && t((e) => e.handleCursorIgnoreCreated(r));
          }),
          r.onDidChange(async (e) => {
            const r = await (0, s.yeE)(e.fsPath);
            null !== r && t((e) => e.handleCursorIgnoreChanged(r));
          }),
          r.onDidDelete(async (e) => {
            const r = (await (0, s.yeE)(e.fsPath)) ?? (0, s.gMI)(e.fsPath);
            t((e) => e.handleCursorIgnoreDeleted(r));
          }),
          r
        );
      }
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-host/dist/933.js.map
