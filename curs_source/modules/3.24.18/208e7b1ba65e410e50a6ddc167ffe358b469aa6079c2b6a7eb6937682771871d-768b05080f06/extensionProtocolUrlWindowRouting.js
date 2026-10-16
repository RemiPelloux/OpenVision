import { k3, le } from "./async.js";
import { Ja, lF } from "./constants.js";
import { zD } from "./electronUrlListener.js";
import { HD, Nw } from "./extensionManagement.js";
import { qD } from "./protocolUrlWindowTarget.js";
import { h } from "./tslib.es6.js";
import { pt } from "./windows.js";
function oC(e) {
    let t, n = Number.MIN_VALUE;
    for (const r of e)r.lastFocusTime > n && (n = r.lastFocusTime, t = r);
    return t;
}
function Dw(e, t) {
    const n = t?.targetWindowId;
    if (n !== void 0 && Number.isSafeInteger(n) && n > 0) return n;
    const r = new URLSearchParams(e.query).get("windowId");
    if (r === null || !/^[1-9]\d*$/.test(r)) return;
    const s = Number(r);
    return Number.isSafeInteger(s) ? s : void 0;
}
function qme(e) {
    const t = new URLSearchParams(e.query);
    return t.get("windowId") !== "_blank" ? e : (t.delete("windowId"), e.with({
        query: t.toString()
    }));
}
function el(e) {
    return !e.isExtensionDevelopmentHost && !e.isExtensionTestHost && !e.config?.shadowWindowForWorkspaceId && e.config?.windowInWindow === void 0;
}
function bze(e) {
    return e.config?.glass !== !0 && el(e);
}
function Ow(e) {
    const t = e.uri.authority.toLowerCase();
    return e.uri.scheme === e.urlProtocol && HD.test(t) && !YD.has(t) && e.targetedWindowIsGlass !== !1;
}
function Kme(e, t, n) {
    return n !== void 0 && zD(e, t) ? n : void 0;
}
var YD, zme, Yme;
export { Dw, Kme, Ow, YD, Yme, bze, el, oC, qme, zme };
var __wakaru_JD_initialized = false;
export function JD() {
if (__wakaru_JD_initialized) return;
__wakaru_JD_initialized = true;
"use strict";
h(), le(), Ja(), Nw(), qD(), pt(), YD = new Set(lF.map((e)=>e.toLowerCase())), zme = class {
    constructor(e, t){
        this.urlService = e, this.urlProtocol = t, this.sequencer = new k3;
    }
    enqueue(e, t, n) {
        return this.sequencer.queue(async ()=>{
            const r = t?.targetWindowId ?? Kme(e, this.urlProtocol, await n);
            return this.urlService.open(e, {
                ...t,
                targetWindowId: r
            });
        });
    }
}, Yme = class {
    constructor(e, t, n, r, s){
        this.windowsMainService = e, this.rendererUrlHandler = t, this.cli = n, this.urlProtocol = r, this.logService = s;
    }
    async route(e, t) {
        const n = Dw(e, t), r = n === void 0 ? void 0 : this.windowsMainService.getWindowById(n), s = r && el(r) ? r.config?.glass === !0 : void 0;
        if (Ow({
            uri: e,
            urlProtocol: this.urlProtocol,
            targetedWindowIsGlass: s
        })) try {
            return await this.openInClassicWindow(e, t);
        } catch (i) {
            throw this.logService.error("ExtensionProtocolUrlWindowRouter#route(): failed to route extension URL to a classic window", i), i;
        }
    }
    async openInClassicWindow(e, t) {
        const n = t?.targetWindowId === void 0 && new URLSearchParams(e.query).get("windowId") === "_blank", r = await this.getOrOpenClassicWindow(n);
        if (!r) throw new Error("Failed to open a classic window for an extension URL");
        await r.ready(), r.focus(), this.logService.trace("ExtensionProtocolUrlWindowRouter#openInClassicWindow(): routing protocol URL to classic window", r.id);
        const s = n ? qme(e) : e;
        if (!await this.rendererUrlHandler.handleURL(s, {
            ...t,
            targetWindowId: r.id
        })) throw new Error(`Classic window ${r.id} did not handle the extension URL`);
        return !0;
    }
    async getOrOpenClassicWindow(e) {
        const t = e ? void 0 : oC(this.windowsMainService.getWindows().filter(bze));
        if (t) return t;
        if (e) return this.openClassicWindow();
        this.classicWindowPromise || (this.classicWindowPromise = this.openClassicWindow());
        const n = this.classicWindowPromise;
        try {
            return await n;
        } finally{
            this.classicWindowPromise === n && (this.classicWindowPromise = void 0);
        }
    }
    async openClassicWindow() {
        return (await this.windowsMainService.open({
            context: 6,
            cli: {
                ...this.cli,
                classic: !0,
                glass: !1
            },
            forceNewWindow: !0,
            forceEmpty: !0,
            gotoLineMode: !0
        })).at(0);
    }
};

}
