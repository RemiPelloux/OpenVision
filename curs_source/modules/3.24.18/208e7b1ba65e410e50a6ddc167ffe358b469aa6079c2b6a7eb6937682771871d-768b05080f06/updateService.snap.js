import { le } from "./async.js";
import { Ye, qe } from "./environmentMainService.js";
import { N, O, se } from "./event.js";
import { B } from "./ipc.js";
import { En, Vt, ht } from "./lifecycleMainService.js";
import { Z, te } from "./log.js";
import { Ce, _t, st } from "./path.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Eo, xe } from "./update.js";
import { watch as gXe } from "fs";
import { realpath as hXe } from "fs";
import { spawn as pXe } from "child_process";
var u1, m1;
export { m1, u1 };
var __wakaru_fXe_initialized = false;
export function fXe() {
if (__wakaru_fXe_initialized) return;
__wakaru_fXe_initialized = true;
"use strict";
h(), le(), se(), Ce(), Ye(), Vt(), te(), Eo(), u1 = class {
    constructor(e, t, n){
        if (this.lifecycleMainService = e, this.logService = n, this._state = xe.Uninitialized, this._onStateChange = new N, this.onStateChange = this._onStateChange.event, t.disableUpdates) {
            this.logService.info("update#ctor - updates are disabled");
            return;
        }
        this.setState(xe.Idle(this.getUpdateType())), this.scheduleCheckForUpdates(30 * 1e3).then(void 0, (r)=>this.logService.error(r));
    }
    get state() {
        return this._state;
    }
    setState(e) {
        this.logService.info("update#setState", e.type), this._state = e, this._onStateChange.fire(e);
    }
    scheduleCheckForUpdates(e = 3600 * 1e3) {
        return En(e).then(()=>this.checkForUpdates(!1)).then(()=>this.scheduleCheckForUpdates(3600 * 1e3));
    }
    async checkForUpdates(e) {
        this.logService.trace("update#checkForUpdates, state = ", this.state.type), this.state.type === "idle" && this.doCheckForUpdates(e);
    }
    async downloadUpdate() {
        this.logService.trace("update#downloadUpdate, state = ", this.state.type), this.state.type === "available for download" && await this.doDownloadUpdate(this.state);
    }
    doDownloadUpdate(e) {
        return Promise.resolve(void 0);
    }
    async applyUpdate() {
        this.logService.trace("update#applyUpdate, state = ", this.state.type), this.state.type === "downloaded" && await this.doApplyUpdate();
    }
    doApplyUpdate() {
        return Promise.resolve(void 0);
    }
    quitAndInstall() {
        return this.logService.trace("update#quitAndInstall, state = ", this.state.type), this.state.type !== "ready" || (this.logService.trace("update#quitAndInstall(): before lifecycle quit()"), this.lifecycleMainService.quit(!0).then((e)=>{
            this.logService.trace(`update#quitAndInstall(): after lifecycle quit() with veto: ${e}`), !e && (this.logService.trace("update#quitAndInstall(): running raw#quitAndInstall()"), this.doQuitAndInstall());
        })), Promise.resolve(void 0);
    }
    getUpdateType() {
        return 2;
    }
    doQuitAndInstall() {}
    async _applySpecificUpdate(e) {}
    async _setUpdateBaseUrl(e) {}
}, u1 = B([
    w(0, ht),
    w(1, qe),
    w(2, Z)
], u1), m1 = class extends u1 {
    constructor(e, t, n, r, s){
        super(n, r, s), this.snap = e, this.snapRevision = t;
        const i = gXe(st(this.snap)), a = O.fromNodeEventEmitter(i, "change", (u, m)=>m), o = O.filter(a, (u)=>u === "current"), d = O.debounce(o, (u, m)=>m, 2e3)(()=>this.checkForUpdates(!1));
        n.onWillShutdown(()=>{
            d.dispose(), i.close();
        });
    }
    doCheckForUpdates() {
        this.setState(xe.CheckingForUpdates(!1)), this.isUpdateAvailable().then((e)=>{
            e ? this.setState(xe.Ready({
                version: "something"
            })) : this.setState(xe.Idle(2));
        }, (e)=>{
            this.logService.error(e), this.setState(xe.Idle(2, e.message || e));
        });
    }
    doQuitAndInstall() {
        this.logService.trace("update#quitAndInstall(): running raw#quitAndInstall()"), pXe("sleep 3 && " + _t(process.argv[0]), {
            shell: !0,
            detached: !0,
            stdio: "ignore"
        });
    }
    async isUpdateAvailable() {
        const e = await new Promise((n, r)=>hXe(`${st(this.snap)}/current`, (s, i)=>s ? r(s) : n(i))), t = _t(e);
        return this.snapRevision !== t;
    }
    isLatestVersion() {
        return this.isUpdateAvailable().then(void 0, (e)=>{
            this.logService.error("update#checkForSnapUpdate(): Could not get realpath of application.");
        });
    }
}, m1 = B([
    w(2, ht),
    w(3, qe),
    w(4, Z)
], m1);

}
