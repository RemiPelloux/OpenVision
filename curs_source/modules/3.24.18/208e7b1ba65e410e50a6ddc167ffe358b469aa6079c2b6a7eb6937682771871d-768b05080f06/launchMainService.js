import { sh } from "./argvHelper.js";
import { Vn } from "./arrays.js";
import { at, ot } from "./configuration.js";
import { JD, Kme, Ow, el } from "./extensionProtocolUrlWindowRouting.js";
import { Q, ne } from "./instantiation.js";
import { B } from "./ipc.js";
import { Z, te } from "./log.js";
import { gn } from "./pfs.js";
import { oe, q } from "./platform.js";
import { Tt, et } from "./productService.js";
import { w, wn } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
import { Jg, jme } from "./url_2.js";
import { ct, pt } from "./windows.js";
import { app as Cze } from "electron";
import * as Rt from "fs";
function Zxe(e, t = 1e3) {
    return new Promise((n)=>{
        let r = !1;
        const s = setInterval(()=>{
            r || (r = !0, Rt.access(e, (i)=>{
                r = !1, i && (clearInterval(s), n(void 0));
            }));
        }, t);
    });
}
function xc(e) {
    return e.VSCODE_CLI === "1";
}
function KD(e) {
    const t = e.getFocusedWindow();
    if (t?.isReady && el(t)) return t.id;
    const n = e.getLastActiveWindow();
    return n?.isReady && el(n) ? n.id : e.getWindows().find((r)=>r.isReady && el(r))?.id;
}
var Jme, XD, Lw;
export { Jme, KD, Lw, XD, Zxe, xc };
var __wakaru_Ize_initialized = false;
export function Ize() {
if (__wakaru_Ize_initialized) return;
__wakaru_Ize_initialized = true;
"use strict";
h(), Vn(), oe(), ye(), gn(), at(), sh(), ne(), te(), Tt(), jme(), JD(), pt(), Jme = "launchMainService", XD = Q(Jme), Lw = class {
    constructor(e, t, n, r, s){
        this.logService = e, this.windowsMainService = t, this.urlService = n, this.configurationService = r, this.productService = s;
    }
    async start(e, t) {
        this.logService.trace("Received data from other instance: ", e, t), q && Cze.focus({
            steal: !0
        });
        const n = this.parseOpenUrl(e);
        if (n.length) {
            let r = Promise.resolve();
            if (!n.every(({ uri: a })=>Ow({
                    uri: a,
                    urlProtocol: this.productService.urlProtocol,
                    targetedWindowIsGlass: void 0
                })) && KD(this.windowsMainService) === void 0) {
                const a = this.windowsMainService.getWindows().find(el);
                if (a) r = a.ready();
                else {
                    const o = (await this.windowsMainService.openEmptyWindow({
                        context: 4
                    })).at(0);
                    o && (r = o.ready());
                }
            }
            await r;
            const i = KD(this.windowsMainService);
            for (const { uri: a, originalUrl: o } of n)try {
                const l = Kme(a, this.productService.urlProtocol, i);
                await this.urlService.open(a, {
                    originalUrl: o,
                    targetWindowId: l
                });
            } catch (l) {
                this.logService.error("LaunchMainService#start(): failed to handle URL", l);
            }
        } else return this.startOpenWindow(e, t);
    }
    parseOpenUrl(e) {
        return e["open-url"] && e._urls && e._urls.length > 0 ? wn(e._urls.map((t)=>{
            try {
                return {
                    uri: x.parse(t),
                    originalUrl: t
                };
            } catch  {
                return null;
            }
        })) : [];
    }
    async startOpenWindow(e, t) {
        const n = xc(t) ? 0 : 4;
        let r = [];
        const s = e.wait && e.waitMarkerFilePath ? x.file(e.waitMarkerFilePath) : void 0, i = e.remote || void 0, a = {
            context: n,
            cli: e,
            userEnv: e["preserve-env"] || n === 0 ? t : void 0,
            waitMarkerFileURI: s,
            remoteAuthority: i,
            forceProfile: e.profile,
            forceTempProfile: e["profile-temp"]
        };
        if (e.extensionDevelopmentPath) await this.windowsMainService.openExtensionDevelopmentHostWindow(e.extensionDevelopmentPath, a);
        else if (!e._.length && !e["folder-uri"] && !e["file-uri"]) {
            let o = !1;
            if (e["new-window"] || a.forceProfile || a.forceTempProfile) o = !0;
            else if (e["reuse-window"]) o = !1;
            else switch(this.configurationService.getValue("window")?.openWithoutArgumentsInNewWindow || "default"){
                case "on":
                    o = !0;
                    break;
                case "off":
                    o = !1;
                    break;
                default:
                    o = !q;
            }
            if (o) r = await this.windowsMainService.open({
                ...a,
                forceNewWindow: !0,
                forceEmpty: !0
            });
            else {
                const l = this.windowsMainService.getLastActiveWindow();
                l ? (this.windowsMainService.openExistingWindow(l, a), r = [
                    l
                ]) : r = await this.windowsMainService.open({
                    ...a,
                    forceEmpty: !0
                });
            }
        } else r = await this.windowsMainService.open({
            ...a,
            forceNewWindow: e["new-window"],
            preferNewWindow: !e["reuse-window"] && !e.wait,
            forceReuseWindow: e["reuse-window"],
            diffMode: e.diff,
            mergeMode: e.merge,
            addMode: e.add,
            removeMode: e.remove,
            noRecentEntry: !!e["skip-add-to-recently-opened"],
            gotoLineMode: e.goto
        });
        if (s && r.length === 1 && r[0]) return Promise.race([
            r[0].whenClosedOrLoaded,
            Zxe(s.fsPath)
        ]).then(()=>{}, ()=>{});
    }
    async getMainProcessId() {
        return this.logService.trace("Received request for process ID from other instance."), process.pid;
    }
}, Lw = B([
    w(0, Z),
    w(1, ct),
    w(2, Jg),
    w(3, ot),
    w(4, et)
], Lw);

}
