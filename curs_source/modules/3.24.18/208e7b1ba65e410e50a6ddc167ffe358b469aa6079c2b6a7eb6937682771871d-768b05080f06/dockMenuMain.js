import { le, pa, xr } from "./async.js";
import { E } from "./configurationRegistry.js";
import { Bke, Gke, Qit } from "./dockRecentDocuments.js";
import { ge } from "./event.js";
import { Bs } from "./extensionsScannerService.js";
import { ha } from "./labels.js";
import { J, j } from "./lifecycle.js";
import { M3 } from "./menubar_2.js";
import { $ } from "./network.js";
import { Ne } from "./nls.js";
import { ns } from "./objects.js";
import { ie } from "./pfs.js";
import { Mi, cs } from "./resources.js";
import { vE } from "./trayMenuState.js";
import { h } from "./tslib.es6.js";
import { QD, Qk } from "./workspacesHistoryMainService.js";
import { app as Fke } from "electron";
import { Menu as Zit } from "electron";
import { app as hl } from "electron";
function Pke(e) {
    return `${e} more unread`;
}
function Wke(e) {
    return e.scheme === $.file ? cs(e) : void 0;
}
async function Xit(e, t) {
    const n = [];
    for (const s of e.workspaces){
        if (n.length === Bke) break;
        const i = Wke(Qk(s) ? s.workspace.configPath : s.folderUri);
        i !== void 0 && await ie.exists(i) && n.push(i);
    }
    const r = [];
    for (const s of e.files){
        if (n.length + r.length === Gke) break;
        const i = Wke(s.fileUri);
        i === void 0 || QD.includes(Mi(s.fileUri)) || n.includes(i) || await ie.exists(i) && r.push(i);
    }
    t() && (r.reverse().forEach((s)=>Fke.addRecentDocument(s)), n.reverse().forEach((s)=>Fke.addRecentDocument(s)));
}
var Vke, $ke, jke;
export { $ke, Pke, Vke, Wke, Xit, jke };
var __wakaru_eat_initialized = false;
export function eat() {
if (__wakaru_eat_initialized) return;
__wakaru_eat_initialized = true;
"use strict";
h(), le(), ha(), j(), ns(), Ne(), vE(), Qit(), Vke = 100, $ke = 800, jke = class extends J {
    constructor(e, t, n){
        super(), this.windowsMainService = e, this.workspacesHistoryMainService = t, this.openAgent = n, this.unreadAgents = [], this.overflowUnreadCount = 0, this.renderedOverflowUnreadCount = 0, this.rebuildScheduler = this._register(new xr(()=>this.rebuild(), Vke)), this.recentDocumentsUpdater = this._register(new pa($ke));
        const r = ()=>this.rebuildScheduler.schedule();
        hl.on("browser-window-focus", r), hl.on("browser-window-blur", r), this._register(ge(()=>{
            hl.off("browser-window-focus", r), hl.off("browser-window-blur", r);
        })), this._register(this.windowsMainService.onDidChangeWindowsCount(()=>this.rebuildScheduler.schedule())), this._register(this.workspacesHistoryMainService.onDidChangeRecentlyOpened(()=>this.updateRecentDocuments())), this.rebuildScheduler.schedule();
    }
    setUnreadAgents(e, t) {
        this.unreadAgents = e, this.overflowUnreadCount = t, this.rebuildScheduler.schedule();
    }
    rebuild() {
        if (!hl.dock) return;
        const e = this.windowsMainService.isLastActiveWindowGlass(), t = e ? this.unreadAgents : [], n = t.length > 0 ? this.overflowUnreadCount : 0, r = e !== this.glassLast;
        !r && Bs(t, this.renderedRows) && n === this.renderedOverflowUnreadCount || (this.glassLast = e, this.renderedRows = t, this.renderedOverflowUnreadCount = n, hl.dock.setMenu(this.createMenu(t, n)), r && this.updateRecentDocuments());
    }
    createMenu(e, t) {
        const n = [
            {
                label: M3(E(2589, null), !0),
                click: ()=>this.windowsMainService.openEmptyWindow({
                        context: 1
                    })
            }
        ];
        return e.length > 0 && (n.push({
            type: "separator"
        }), n.push({
            label: "Unread",
            enabled: !1
        }), e.forEach((r, s)=>{
            n.push({
                label: r.name || `Agent ${s + 1}`,
                click: ()=>this.openAgent(r)
            });
        }), t > 0 && n.push({
            label: Pke(t),
            enabled: !1
        })), Zit.buildFromTemplate(n);
    }
    updateRecentDocuments() {
        this.recentDocumentsUpdater.trigger(()=>this.syncRecentDocuments());
    }
    async syncRecentDocuments() {
        const e = ()=>this.glassLast === !1;
        if (hl.clearRecentDocuments(), !e()) return;
        const t = await this.workspacesHistoryMainService.getRecentlyOpened();
        await Xit(t, e);
    }
};

}
