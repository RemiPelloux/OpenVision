import { Ie, Mt } from "./cancellation.js";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { Tot } from "./openWindowCounts.js";
import { dOe, lOe } from "./openWindowCountsMainService.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { ct, pt } from "./windows.js";
function _ot(e) {
    let t = 0, n = 0;
    for (const r of e)r.config?.glass === !0 ? n++ : t++;
    return {
        mainWindowCount: e.length,
        editorWindowCount: t,
        glassWindowCount: n
    };
}
function vot(e, t) {
    if (e.length === 0) return t;
    let n = e[0].id;
    for(let r = 1; r < e.length; r++){
        const s = e[r].id;
        s < n && (n = s);
    }
    return n;
}
var KE;
export { KE, _ot, vot };
var __wakaru_kot_initialized = false;
export function kot() {
if (__wakaru_kot_initialized) return;
__wakaru_kot_initialized = true;
"use strict";
h(), Mt(), j(), pt(), Tot(), dOe(), KE = class extends J {
    constructor(e){
        super(), this.windowsMainService = e;
        const t = (n)=>{
            this._register(n.onDidClose(()=>this.onMainWindowDidClose(n)));
        };
        for (const n of this.windowsMainService.getWindows())t(n);
        this._register(this.windowsMainService.onDidOpenWindow((n)=>{
            t(n);
        })), this._register(this.windowsMainService.onDidChangeWindowsCount((n)=>{
            if (n.newCount === 0) {
                const r = this.pendingZeroCountReporterWindowId ?? 0;
                this.pendingZeroCountReporterWindowId = void 0, this.emitSnapshot({
                    mainWindowCount: 0,
                    editorWindowCount: 0,
                    glassWindowCount: 0
                }, r);
                return;
            }
            this.recordIfChanged();
        }));
    }
    onMainWindowDidClose(e) {
        this.pendingZeroCountReporterWindowId = e.id;
    }
    recordIfChanged() {
        const e = this.windowsMainService.getWindows();
        if (e.length === 0) return;
        const t = _ot(e), n = vot(e, e[0].id);
        this.emitSnapshot(t, n);
    }
    emitSnapshot(e, t) {
        if (this.countsEqual(this.lastRecorded, e)) return;
        this.lastRecorded = e;
        const n = {
            nativeWindowId: t,
            mainWindowCount: e.mainWindowCount,
            editorWindowCount: e.editorWindowCount,
            glassWindowCount: e.glassWindowCount
        };
        this.relayToRenderer(n);
    }
    relayToRenderer(e) {
        try {
            const t = this.windowsMainService.getFocusedWindow() ?? this.windowsMainService.getLastActiveWindow();
            t && t.sendWhenReady(lOe, Ie.None, e);
        } catch  {}
    }
    countsEqual(e, t) {
        return e !== void 0 && e.mainWindowCount === t.mainWindowCount && e.editorWindowCount === t.editorWindowCount && e.glassWindowCount === t.glassWindowCount;
    }
}, KE = B([
    w(0, ct)
], KE);

}
