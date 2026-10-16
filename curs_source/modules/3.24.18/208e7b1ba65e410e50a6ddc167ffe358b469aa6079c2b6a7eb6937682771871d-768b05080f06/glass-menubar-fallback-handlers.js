import { Ie, Mt } from "./cancellation.js";
import { Ye, qe } from "./environmentMainService.js";
import { Fze, gpe, ppe, upe } from "./glass-menubar-command-ids.js";
import { cpe, lpe } from "./glassModeConstants.js";
import { B } from "./ipc.js";
import { Z, te } from "./log.js";
import { Gi, _s } from "./nativeHostMainService.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { ct, pt } from "./windows.js";
var fpe, Gw;
export { Gw, fpe };
var __wakaru_Wze_initialized = false;
export function Wze() {
if (__wakaru_Wze_initialized) return;
__wakaru_Wze_initialized = true;
"use strict";
h(), Mt(), Ye(), te(), Gi(), pt(), Fze(), fpe = [
    ppe,
    gpe
], Gw = class {
    constructor(e, t, n, r){
        this.windowsMainService = e, this.nativeHostMainService = t, this.environmentMainService = n, this.logService = r;
    }
    createHandlers() {
        const e = Object.create(null);
        e[cpe] = ()=>{
            this.openOrFocusGlassWindowForMenu().catch((n)=>{
                this.logService.error("[glassMenubarFallback] Failed to open or focus Glass window", n);
            });
        };
        const t = (n, r)=>{
            this.nativeHostMainService.cursorFocusOrOpenEditorWindow(r?.id).catch((s)=>{
                this.logService.error("[glassMenubarFallback] Failed to open or focus editor window", s);
            });
        };
        e[upe] = t, e[lpe] = t;
        for (const n of fpe)e[n] = ()=>this.openGlassWindowAndRunCommand(n);
        return e;
    }
    openOrFocusGlassWindowForMenu() {
        const e = this.windowsMainService.getWindows().find((t)=>t.config?.glass === !0);
        return e ? (this.windowsMainService.openExistingWindow(e, {
            context: 2,
            cli: this.environmentMainService.args
        }), Promise.resolve(e)) : (this.pendingGlassWindowOpen ??= this.doOpenGlassWindowForMenu().finally(()=>{
            this.pendingGlassWindowOpen = void 0;
        }), this.pendingGlassWindowOpen);
    }
    async doOpenGlassWindowForMenu() {
        const { classic: e, ...t } = this.environmentMainService.args, n = await this.windowsMainService.open({
            context: 2,
            cli: {
                ...t,
                glass: !0,
                "new-window": !0
            },
            forceNewWindow: !0,
            forceEmpty: !0
        });
        return n.find((r)=>r.config?.glass === !0) ?? n.at(0);
    }
    openGlassWindowAndRunCommand(e) {
        const t = {
            id: e,
            from: "menu"
        };
        this.openOrFocusGlassWindowForMenu().then((n)=>{
            n?.sendWhenReady("vscode:runAction", Ie.None, t);
        }).catch((n)=>{
            this.logService.error(`[glassMenubarFallback] Failed to open Glass window for ${e}`, n);
        });
    }
}, Gw = B([
    w(0, ct),
    w(1, _s),
    w(2, qe),
    w(3, Z)
], Gw);

}
