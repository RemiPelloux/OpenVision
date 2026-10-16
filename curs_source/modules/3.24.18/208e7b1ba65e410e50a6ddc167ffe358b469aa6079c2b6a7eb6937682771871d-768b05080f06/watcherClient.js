import { hR } from "./event.js";
import { FVe, a$ } from "./ipc.cp.js";
import { Oe, Qr } from "./ipc.js";
import { En } from "./lifecycleMainService.js";
import { $e, Jt } from "./network.js";
import { h } from "./tslib.es6.js";
import { $d, t$ } from "./watcher.js";
function h4e(e) {
    let t = !1;
    return {
        call (n, r, s) {
            return t ? e.call(n, r, s) : En(0).then(()=>t = !0).then(()=>e.call(n, r, s));
        },
        listen (n, r) {
            if (t) return e.listen(n, r);
            const s = new hR;
            return En(0).then(()=>t = !0).then(()=>s.input = e.listen(n, r)), s.event;
        }
    };
}
var o$;
export { h4e, o$ };
var __wakaru_WVe_initialized = false;
export function WVe() {
if (__wakaru_WVe_initialized) return;
__wakaru_WVe_initialized = true;
"use strict";
h(), $e(), Qr(), FVe(), $d(), o$ = class extends t$ {
    constructor(e, t, n){
        super(e, t, n), this.init();
    }
    createWatcher(e) {
        const t = e.add(new a$(Jt.asFileUri("bootstrap-fork").fsPath, {
            serverName: "File Watcher",
            args: [
                "--type=fileWatcher"
            ],
            env: {
                VSCODE_ESM_ENTRYPOINT: "vs/platform/files/node/watcher/watcherMain",
                VSCODE_PIPE_LOGGING: "true",
                VSCODE_VERBOSE_LOGGING: "true"
            }
        }));
        return e.add(t.onDidProcessExit(({ code: n, signal: r })=>this.onError(`terminated by itself with code ${n}, signal: ${r} (ETERM)`))), Oe.toService(h4e(t.getChannel("watcher")));
    }
};

}
