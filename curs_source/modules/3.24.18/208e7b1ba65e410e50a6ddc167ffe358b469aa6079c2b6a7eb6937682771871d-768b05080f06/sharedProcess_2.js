import { Bl, le, wr } from "./async.js";
import { Ye, qe } from "./environmentMainService.js";
import { b0 } from "./environmentService.js";
import { C0 } from "./environmentService_2.js";
import { N, se } from "./event.js";
import { B } from "./ipc.js";
import { Te, hr } from "./ipcMain.js";
import { J, Ut, j } from "./lifecycle.js";
import { Nl, Vt, ht } from "./lifecycleMainService.js";
import { Z, te } from "./log.js";
import { Aa, Ro } from "./loggerService_2.js";
import { bo, fi } from "./policy.js";
import { Vw, dO, dYe, lO } from "./sharedProcess.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
import { Ls, Us } from "./userDataProfile.js";
import { Bi, cr } from "./utilityProcess.js";
function t5e(e, t) {
    return b0(e["inspect-sharedprocess"], e["inspect-brk-sharedprocess"], 5879, t, e.extensionEnvironment);
}
var $w;
export { $w, t5e };
var __wakaru_uYe_initialized = false;
export function uYe() {
if (__wakaru_uYe_initialized) return;
__wakaru_uYe_initialized = true;
"use strict";
h(), hr(), le(), j(), Ye(), Vt(), te(), Us(), fi(), Ro(), Bi(), C0(), Ze(), dYe(), se(), $w = class extends J {
    constructor(e, t, n, r, s, i, a, o, l, d){
        super(), this.machineId = e, this.macMachineId = t, this.sqmId = n, this.devDeviceId = r, this.environmentMainService = s, this.userDataProfilesService = i, this.lifecycleMainService = a, this.logService = o, this.loggerMainService = l, this.policyService = d, this.firstWindowConnectionBarrier = new Bl, this.utilityProcess = void 0, this.utilityProcessLogListener = this._register(new Ut), this._onDidCrash = this._register(new N), this.onDidCrash = this._onDidCrash.event, this._whenReady = void 0, this._whenIpcReady = void 0, this.registerListeners();
    }
    registerListeners() {
        Te.on(lO.request, (e, t)=>this.onWindowConnection(e, t, lO.response)), Te.on(dO.request, (e, t)=>this.onWindowConnection(e, t, dO.response)), this._register(this.lifecycleMainService.onWillShutdown(()=>this.onWillShutdown()));
    }
    async onWindowConnection(e, t, n) {
        this.logService.trace(`[SharedProcess] onWindowConnection for: ${n}`), this.firstWindowConnectionBarrier.isOpen() || this.firstWindowConnectionBarrier.open(), await this.whenReady();
        const r = await this.connect(n);
        if (e.sender.isDestroyed()) return r.close();
        e.sender.postMessage(n, t, [
            r
        ]);
    }
    onWillShutdown() {
        this.logService.trace("[SharedProcess] onWillShutdown"), this.utilityProcess?.postMessage(Vw.exit), this.utilityProcess = void 0;
    }
    preWarm() {
        this.firstWindowConnectionBarrier.isOpen() || (this.logService.trace("[SharedProcess] preWarm: starting early spawn before first window connection"), this.firstWindowConnectionBarrier.open(), this.whenReady());
    }
    whenReady() {
        return this._whenReady || (this._whenReady = (async ()=>{
            await this.whenIpcReady;
            const e = new wr;
            this.utilityProcess?.once(Vw.initDone, ()=>e.complete()), await e.p, this.utilityProcessLogListener.clear(), this.logService.trace("[SharedProcess] Overall ready");
        })()), this._whenReady;
    }
    get whenIpcReady() {
        return this._whenIpcReady || (this._whenIpcReady = (async ()=>{
            await this.firstWindowConnectionBarrier.wait(), this.createUtilityProcess();
            const e = new wr;
            this.utilityProcess?.once(Vw.ipcReady, ()=>e.complete()), await e.p, this.logService.trace("[SharedProcess] IPC ready");
        })()), this._whenIpcReady;
    }
    createUtilityProcess() {
        this.logService.trace("[SharedProcess] createUtilityProcess: spawning utility process"), this.utilityProcess = this._register(new cr(this.logService, this.lifecycleMainService)), this.utilityProcessLogListener.value = this.utilityProcess.onMessage((n)=>{
            typeof n.warning == "string" ? this.logService.warn(n.warning) : typeof n.error == "string" && this.logService.error(n.error);
        });
        const e = t5e(this.environmentMainService.args, this.environmentMainService.isBuilt);
        let t;
        e.port !== null && (t = [
            "--nolazy",
            "--experimental-network-inspection"
        ], e.break ? t.push(`--inspect-brk=${e.port}`) : t.push(`--inspect=${e.port}`)), this.utilityProcess.start({
            processTitle: "shared-process",
            type: "shared-process",
            entryPoint: "vs/code/electron-utility/sharedProcess/sharedProcessMain",
            payload: this.createSharedProcessConfiguration(),
            respondToAuthRequestsFromMainProcess: !0,
            execArgv: t
        }), this._register(this.utilityProcess.onCrash(()=>this._onDidCrash.fire()));
    }
    createSharedProcessConfiguration() {
        return {
            machineId: this.machineId,
            macMachineId: this.macMachineId,
            sqmId: this.sqmId,
            devDeviceId: this.devDeviceId,
            codeCachePath: this.environmentMainService.codeCachePath,
            profiles: {
                home: this.userDataProfilesService.profilesHome,
                all: this.userDataProfilesService.profiles
            },
            args: this.environmentMainService.args,
            logLevel: this.loggerMainService.getLogLevel(),
            loggers: this.loggerMainService.getGlobalLoggers(),
            policiesData: this.policyService.serialize()
        };
    }
    async connect(e) {
        return await this.whenIpcReady, Nl(this.utilityProcess).connect(e);
    }
}, $w = B([
    w(4, qe),
    w(5, Ls),
    w(6, ht),
    w(7, Z),
    w(8, Aa),
    w(9, bo)
], $w);

}
