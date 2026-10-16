"use strict";
var a = Object.create;
var t = Object.defineProperty;
var d = Object.getOwnPropertyDescriptor;
var p = Object.getOwnPropertyNames;
var m = Object.getPrototypeOf,
  v = Object.prototype.hasOwnProperty;
var l = (s, e) => {
    for (var r in e) t(s, r, { get: e[r], enumerable: !0 });
  },
  c = (s, e, r, i) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let n of p(e))
        !v.call(s, n) &&
          n !== r &&
          t(s, n, { get: () => e[n], enumerable: !(i = d(e, n)) || i.enumerable });
    return s;
  };
var u = (s, e, r) => (
    (r = s != null ? a(m(s)) : {}),
    c(e || !s || !s.__esModule ? t(r, "default", { value: s, enumerable: !0 }) : r, s)
  ),
  w = (s) => c(t({}, "__esModule", { value: !0 }), s);
var C = {};
l(C, { activate: () => x });
module.exports = w(C);
var o = u(require("vscode")),
  h = "simpleBrowser.api.open",
  b = "simpleBrowser.show",
  U = "simpleBrowser.open",
  g = new Set([
    "localhost",
    "127.0.0.1",
    "[0:0:0:0:0:0:0:1]",
    "[::1]",
    "0.0.0.0",
    "[0:0:0:0:0:0:0:0]",
    "[::]",
  ]);
function x(s) {
  (s.subscriptions.push(
    o.commands.registerCommand(b, async (e) => {
      (e ||
        (e = await o.window.showInputBox({
          placeHolder: o.l10n.t("https://example.com"),
          prompt: o.l10n.t("Enter url to visit"),
        })),
        e && (await o.commands.executeCommand("workbench.action.openBrowserEditor", { url: e })));
    }),
  ),
    s.subscriptions.push(
      o.commands.registerCommand(h, async (e, r) => {
        await o.commands.executeCommand("workbench.action.openBrowserEditor", {
          url: e.toString(!0),
          preserveFocus: r?.preserveFocus,
        });
      }),
    ),
    s.subscriptions.push(
      o.window.registerExternalUriOpener(
        U,
        {
          canOpenExternalUri(e) {
            let r = new URL(e.toString(!0));
            return g.has(r.hostname)
              ? E()
                ? o.ExternalUriOpenerPriority.Default
                : o.ExternalUriOpenerPriority.Option
              : o.ExternalUriOpenerPriority.None;
          },
          async openExternalUri(e) {
            await o.commands.executeCommand("workbench.action.openBrowserEditor", {
              url: e.toString(!0),
              preserveFocus: !1,
            });
          },
        },
        { schemes: ["http", "https"], label: o.l10n.t("Open in simple browser") },
      ),
    ));
}
function E() {
  return !(typeof process == "object" && process.versions.node) && o.env.uiKind === o.UIKind.Web;
}
0 && (module.exports = { activate });
//# sourceMappingURL=extension.js.map
