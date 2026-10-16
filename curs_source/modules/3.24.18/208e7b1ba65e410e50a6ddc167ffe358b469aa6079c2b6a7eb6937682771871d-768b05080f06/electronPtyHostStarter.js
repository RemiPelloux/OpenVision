import { at, ot } from "./configuration.js";
import { Ye, qe } from "./environmentMainService.js";
import { b0 } from "./environmentService.js";
import { C0 } from "./environmentService_2.js";
import { N, ge, se } from "./event.js";
import { B } from "./ipc.js";
import { PF, yT } from "./ipc.mp_2.js";
import { Te, hr } from "./ipcMain.js";
import { J, j, ve } from "./lifecycle.js";
import { Vt, ht } from "./lifecycleMainService.js";
import { Z, te } from "./log.js";
import { $, $e } from "./network.js";
import { ns } from "./objects.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Bi, Ws, cr } from "./utilityProcess.js";
function e5e(e, t) {
    return b0(e["inspect-ptyhost"], e["inspect-brk-ptyhost"], 5877, t, e.extensionEnvironment);
}
var x1;
export { e5e, x1 };
var __wakaru_uet_initialized = false;
export function uet() {
if (__wakaru_uet_initialized) return;
__wakaru_uet_initialized = true;
"use strict";
h(), Ye(), C0(), Vt(), te(), Bi(), PF(), hr(), j(), se(), ns(), at(), $e(), x1 = class extends J {
    constructor(e, t, n, r, s){
        super(), this._reconnectConstants = e, this._configurationService = t, this._environmentMainService = n, this._lifecycleMainService = r, this._logService = s, this.utilityProcess = void 0, this._onRequestConnection = this._register(new N), this.onRequestConnection = this._onRequestConnection.event, this._onWillShutdown = this._register(new N), this.onWillShutdown = this._onWillShutdown.event, this._register(this._lifecycleMainService.onWillShutdown(()=>this._onWillShutdown.fire())), Te.on("vscode:createPtyHostMessageChannel", (i, a)=>this._onWindowConnection(i, a)), this._register(ge(()=>{
            Te.removeHandler("vscode:createPtyHostMessageChannel");
        }));
    }
    start() {
        this.utilityProcess = new cr(this._logService, this._lifecycleMainService);
        const e = e5e(this._environmentMainService.args, this._environmentMainService.isBuilt), t = e.port !== null ? [
            "--nolazy",
            `--inspect${e.break ? "-brk" : ""}=${e.port}`
        ] : void 0;
        this.utilityProcess.start({
            processTitle: "terminal pty-host",
            type: "ptyHost",
            entryPoint: "vs/platform/terminal/node/ptyHostMain",
            execArgv: t,
            args: [
                "--logsPath",
                this._environmentMainService.logsHome.with({
                    scheme: $.file
                }).fsPath
            ],
            env: this._createPtyHostConfiguration()
        });
        const n = this.utilityProcess.connect(), r = new yT(n, "ptyHost"), s = new ve;
        return s.add(r), s.add(ge(()=>{
            this.utilityProcess?.kill(), this.utilityProcess?.dispose(), this.utilityProcess = void 0;
        })), {
            client: r,
            store: s,
            onDidProcessExit: this.utilityProcess.onExit
        };
    }
    _createPtyHostConfiguration() {
        this._environmentMainService.unsetSnapExportedVariables();
        const e = {
            ...Ws(process.env),
            VSCODE_ESM_ENTRYPOINT: "vs/platform/terminal/node/ptyHostMain",
            VSCODE_PIPE_LOGGING: "true",
            VSCODE_VERBOSE_LOGGING: "true",
            VSCODE_RECONNECT_GRACE_TIME: String(this._reconnectConstants.graceTime),
            VSCODE_RECONNECT_SHORT_GRACE_TIME: String(this._reconnectConstants.shortGraceTime),
            VSCODE_RECONNECT_SCROLLBACK: String(this._reconnectConstants.scrollback)
        }, t = this._configurationService.getValue("terminal.integrated.developer.ptyHost.latency");
        t && typeof t == "number" && (e.VSCODE_LATENCY = String(t));
        const n = this._configurationService.getValue("terminal.integrated.developer.ptyHost.startupDelay");
        return n && typeof n == "number" && (e.VSCODE_STARTUP_DELAY = String(n)), this._environmentMainService.restoreSnapExportedVariables(), e;
    }
    _onWindowConnection(e, t) {
        this._onRequestConnection.fire();
        const n = this.utilityProcess.connect();
        if (e.sender.isDestroyed()) {
            n.close();
            return;
        }
        e.sender.postMessage("vscode:createPtyHostMessageChannelResult", t, [
            n
        ]);
    }
}, x1 = B([
    w(1, ot),
    w(2, qe),
    w(3, ht),
    w(4, Z)
], x1);

}
