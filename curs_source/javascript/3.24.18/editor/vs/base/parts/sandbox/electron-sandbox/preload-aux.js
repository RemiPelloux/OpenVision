"use strict";
!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
              ? self
              : {},
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "6909e491-29a0-590e-841e-e0dc54640326"));
  } catch (e) {}
})();
(function () {
  const { ipcRenderer: o, webFrame: n, contextBridge: s } = require("electron");
  function t(e) {
    if (!e || !e.startsWith("vscode:")) throw new Error(`Unsupported event IPC channel '${e}'`);
    return !0;
  }
  const i = {
    ipcRenderer: {
      send(e, ...r) {
        t(e) && o.send(e, ...r);
      },
      invoke(e, ...r) {
        return (t(e), o.invoke(e, ...r));
      },
    },
    webFrame: {
      setZoomLevel(e) {
        typeof e == "number" && n.setZoomLevel(e);
      },
    },
  };
  try {
    s.exposeInMainWorld("vscode", i);
  } catch (e) {
    console.error(e);
  }
})();

//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/core/vs/base/parts/sandbox/electron-sandbox/preload-aux.js.map

//# debugId=6909e491-29a0-590e-841e-e0dc54640326
