import { N, se } from "./event.js";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { NXe, yge } from "./webviewProtocolProvider.js";
import { ct, pt } from "./windows.js";
import { webContents as DXe } from "electron";
var v1;
export { v1 };
var __wakaru_OXe_initialized = false;
export function OXe() {
if (__wakaru_OXe_initialized) return;
__wakaru_OXe_initialized = true;
"use strict";
h(), se(), j(), NXe(), pt(), v1 = class extends J {
    constructor(e){
        super(), this.windowsMainService = e, this._onFoundInFrame = this._register(new N), this.onFoundInFrame = this._onFoundInFrame.event, this._register(new yge);
    }
    async setIgnoreMenuShortcuts(e, t) {
        let n;
        if (typeof e.windowId == "number") {
            const { windowId: r } = e, s = this.windowsMainService.getWindowById(r);
            if (!s) throw new Error(`Invalid windowId: ${r}`);
            if (s.win) n = s.win.webContents;
            else if (s.webContents) n = s.webContents;
            else throw new Error(`Window ${r} has no webContents`);
        } else {
            const { webContentsId: r } = e;
            if (n = DXe.fromId(r), !n) throw new Error(`Invalid webContentsId: ${r}`);
        }
        n.isDestroyed() || n.setIgnoreMenuShortcuts(t);
    }
    async findInFrame(e, t, n, r) {
        const i = this.getFrameByName(e, t);
        if (typeof i.findInFrame == "function") {
            i.findInFrame(n, {
                findNext: r.findNext,
                forward: r.forward
            });
            const a = (o, l)=>{
                l.finalUpdate && (this._onFoundInFrame.fire(l), i.removeListener("found-in-frame", a));
            };
            i.on("found-in-frame", a);
        }
    }
    async stopFindInFrame(e, t, n) {
        const s = this.getFrameByName(e, t);
        typeof s.stopFindInFrame == "function" && s.stopFindInFrame(n.keepSelection ? "keepSelection" : "clearSelection");
    }
    getFrameByName(e, t) {
        const n = this.windowsMainService.getWindowById(e.windowId);
        if (!n) throw new Error(`Invalid windowId: ${e.windowId}`);
        let r;
        if (n.win) r = n.win.webContents;
        else if (n.webContents) r = n.webContents;
        else throw new Error(`Window ${e.windowId} has no webContents`);
        const s = r.mainFrame.framesInSubtree.find((i)=>i.name === t);
        if (!s) throw new Error(`Unknown frame: ${t}`);
        return s;
    }
}, v1 = B([
    w(0, ct)
], v1);

}
