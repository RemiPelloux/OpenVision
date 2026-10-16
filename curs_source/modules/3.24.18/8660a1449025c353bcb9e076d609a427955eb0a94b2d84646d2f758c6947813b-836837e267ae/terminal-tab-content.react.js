import { dc0 } from "./Asv.js";
import { Qe } from "./Iwo.js";
import { SR } from "./async_3.js";
import { zat } from "./composerTerminalService.js";
import { mv } from "./editor-panel-context.react.js";
import { Hxs } from "./editor-panel-tab-header-row.react.js";
import { Sgv } from "./environment-snapshot-helper-banner.react.js";
import { hme } from "./glass-panel-resource-ownership-service.js";
import { cD } from "./glass-tab-persistence-service.js";
import { Qc0 } from "./glass-terminal-context-menu.react.js";
import { iEe } from "./glass-terminal-service-proxy.js";
import { Mt } from "./index_197.js";
import { Bt } from "./nls.js";
import { eu0 } from "./private-worker-terminal-message.js";
import { Cut } from "./resize-handle.react.js";
import { vce } from "./tab-loading-placeholder.react.js";
import { pu0 } from "./terminal-find-bar.react.js";
import { lu0 } from "./terminal-find.js";
import { Hu0 } from "./terminal-list.react.js";
import { XEt } from "./terminalColorRegistry.js";
import { SQt } from "./terminal_4.js";
import { I2 } from "./theme_2.js";
import { E } from "./tslib.es6.js";
import { r1 } from "./use-command-bridge.react.js";
import { LVl } from "./use-editor-panel-pane-sidebar.react.js";
import { kut } from "./use-horizontal-resize.react.js";
import { pRt } from "./use-machine-reachability.react.js";
import { M5i } from "./use-remote-workspace-connection.react.js";
import { Oxs } from "./use-scheduled-focus.react.js";
import { w_ } from "./use-service-event-state.react_2.js";
import { In } from "./use-service.react_2.js";
import { Qu0 } from "./use-terminal-context-menu.react.js";
import { R6 } from "./workbenchThemeService.js";
var cfv, iKl, rKl, sKl, QLn, U5i;
export { QLn, U5i, cfv, iKl, rKl, sKl };
var __wakaru_hd0_initialized = false;
export function hd0() {
if (__wakaru_hd0_initialized) return;
__wakaru_hd0_initialized = true;
"use strict";
E(), iEe(), Mt(), SR(), Qe(), Bt(), I2(), zat(), XEt(), hme(), R6(), r1(), kut(), M5i(), Oxs(), In(), w_(), cD(), SQt(), Cut(), mv(), Hxs(), Sgv(), vce(), LVl(), pRt(), Qc0(), eu0(), lu0(), pu0(), Hu0(), Qu0(), cfv = {
    terminalWrapperClassName: "glass-h8yej3 glass-5yr21d",
    xtermWrapperClassName: "glass-1n2onr6"
}, iKl = 220, rKl = 180, sKl = 460, QLn = new WeakMap, U5i = {
    acquire (t) {
        const e = QLn.get(t);
        if (e) {
            e.refCount++;
            return;
        }
        QLn.set(t, {
            refCount: 1,
            savedDisableStdin: !1,
            applied: !1
        });
    },
    apply (t) {
        const e = QLn.get(t), n = t.xterm?.raw;
        !e || e.applied || !n || (e.savedDisableStdin = !!n.options.disableStdin, n.options.disableStdin = !0, e.applied = !0);
    },
    release (t) {
        const e = QLn.get(t);
        if (!e || --e.refCount > 0) return;
        QLn.delete(t);
        const n = t.xterm?.raw;
        !e.applied || !n || dc0(t) || (n.options.disableStdin = e.savedDisableStdin);
    }
};

}
