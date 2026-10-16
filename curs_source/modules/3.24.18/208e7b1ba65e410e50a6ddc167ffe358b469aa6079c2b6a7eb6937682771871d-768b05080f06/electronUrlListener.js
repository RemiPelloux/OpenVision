import { le } from "./async.js";
import { O, se } from "./event.js";
import { HD } from "./extensionManagement.js";
import { Dw, JD, YD, el, zme } from "./extensionProtocolUrlWindowRouting.js";
import { Hn } from "./ipc.js";
import { KD } from "./launchMainService.js";
import { J, j } from "./lifecycle.js";
import { ee, oe } from "./platform.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
import { app as kge } from "electron";
function zD(e, t) {
    const n = e.authority.toLowerCase();
    return e.scheme === t && HD.test(n) && YD.has(n) && Dw(e) === void 0 && new URLSearchParams(e.query).get("windowId") !== "_blank";
}
var Sge;
export { Sge, zD };
var __wakaru_AXe_initialized = false;
export function AXe() {
if (__wakaru_AXe_initialized) return;
__wakaru_AXe_initialized = true;
"use strict";
h(), le(), se(), j(), oe(), ye(), JD(), Sge = class extends J {
    constructor(e, t, n, r, s, i){
        if (super(), this.windowsMainService = n, this.logService = i, this.uris = [], this.retryCount = 0, this.initialTargetWindowCaptured = !1, this.waitingForInitialWindow = !0, this.urlProtocol = s.urlProtocol, this.urlDispatchQueue = new zme(t, s.urlProtocol), e && (i.trace("ElectronURLListener initialUrisToHandle:", e.map((o)=>o.originalUrl)), this.uris = e), ee) {
            const o = r.isBuilt ? [] : [
                `"${r.appRoot}"`
            ];
            o.push("--open-url", "--"), kge.setAsDefaultProtocolClient(s.urlProtocol, process.execPath, o);
        }
        const a = O.map(O.fromNodeEventEmitter(kge, "open-url", (o, l)=>({
                event: o,
                url: l
            })), ({ event: o, url: l })=>(o.preventDefault(), l));
        this._register(a((o)=>{
            const l = this.uriFromRawUrl(o);
            if (!l) return;
            if (this.waitingForInitialWindow && !this.hasReadyWindow()) {
                this.uris.push({
                    uri: l,
                    originalUrl: o
                });
                return;
            }
            const d = this.getActiveWindowId(), u = d === void 0 && zD(l, this.urlProtocol) ? this.getOrOpenActiveWindow() : d;
            this.urlDispatchQueue.enqueue(l, {
                originalUrl: o
            }, u).then((m)=>{
                m || this.logService.error("ElectronURLListener: URL was not handled");
            }).catch((m)=>{
                this.logService.error("ElectronURLListener: failed to handle URL", m);
            });
        })), this.hasReadyWindow() ? (i.trace("ElectronURLListener: window is ready to handle URLs"), this.waitingForInitialWindow = !1, this.flush()) : (i.trace("ElectronURLListener: waiting for window to be ready to handle URLs..."), this._register(O.once(n.onDidSignalReadyWindow)(()=>{
            this.waitingForInitialWindow = !1, this.flush();
        })));
    }
    hasReadyWindow() {
        return this.windowsMainService.getWindows().some((e)=>e.isReady);
    }
    getActiveWindowId() {
        return KD(this.windowsMainService);
    }
    getOrOpenActiveWindow() {
        if (!this.activeWindowPromise) {
            const t = this.openActiveWindow().finally(()=>{
                this.activeWindowPromise === t && (this.activeWindowPromise = void 0);
            });
            this.activeWindowPromise = t;
        }
        return this.activeWindowPromise;
    }
    async openActiveWindow() {
        const e = (await this.windowsMainService.openEmptyWindow({
            context: 6
        })).at(0);
        if (!e) throw new Error("Failed to open a window for a protocol URL");
        if (await e.ready(), !el(e)) throw new Error(`Window ${e.id} cannot handle protocol URLs`);
        return e.id;
    }
    uriFromRawUrl(e) {
        try {
            return x.parse(e);
        } catch  {
            return;
        }
    }
    flush() {
        this.doFlush().catch((e)=>{
            this.logService.error("ElectronURLListener#flush(): failed unexpectedly", e);
        });
    }
    async doFlush() {
        if (this.retryCount++ > 10) {
            this.logService.error("ElectronURLListener#flush(): giving up after 10 retries");
            return;
        }
        this.logService.trace("ElectronURLListener#flush(): flushing URLs"), this.initialTargetWindowCaptured || (this.initialTargetWindowId = this.getActiveWindowId(), this.initialTargetWindowCaptured = !0);
        const e = [];
        await Promise.all(this.uris.map(async (t)=>{
            try {
                await this.urlDispatchQueue.enqueue(t.uri, {
                    originalUrl: t.originalUrl
                }, this.initialTargetWindowId) ? this.logService.trace("ElectronURLListener#flush(): URL was handled", t.originalUrl) : (this.logService.trace("ElectronURLListener#flush(): URL was not yet handled", t.originalUrl), e.push(t));
            } catch (n) {
                this.logService.error("ElectronURLListener#flush(): failed to handle URL", n), e.push(t);
            }
        })), e.length !== 0 && (this.uris = e, Hn(()=>this.flush(), 500, this._store));
    }
};

}
