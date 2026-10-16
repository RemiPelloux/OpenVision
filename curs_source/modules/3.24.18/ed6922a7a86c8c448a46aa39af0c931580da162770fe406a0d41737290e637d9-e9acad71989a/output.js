import { Se, bt, ve, we } from "./HVr.js";
import { At, dn } from "./contextkey.js";
import { Ze } from "./instantiation.js";
import { kn, rr } from "./platform_2.js";
import { vn } from "./qIc.js";
import { Li } from "./resources.js";
import { x } from "./tslib.es6.js";
import { MPe } from "./xmo.js";
var Rmo, Bqi, H2n, Uqi, IC, Dmo, JQd, Mmo, Pmo, Lmo, Nmo, Omo, Fmo, Bmo, Umo, $mo, Hmo, Wmo, Gmo, Vmo, Bk, MX, $5, eJd;
export { $5, $mo, Bk, Bmo, Bqi, Dmo, Fmo, Gmo, H2n, Hmo, IC, JQd, Lmo, MX, Mmo, Nmo, Omo, Pmo, Rmo, Umo, Uqi, Vmo, Wmo, eJd };
var __wakaru_LI_initialized = false;
export function LI() {
if (__wakaru_LI_initialized) return;
__wakaru_LI_initialized = true;
"use strict";
x(), bt(), rr(), Li(), dn(), Ze(), Se(), Rmo = "text/x-code-output", Bqi = "Log", H2n = "text/x-code-log-output", Uqi = "log", IC = "workbench.panel.output", Dmo = new At("inOutput", !1), JQd = new At("activeLogOutput", !1), Mmo = new At("activeLogOutput.isLog", !1), Pmo = new At("activeLogOutput.levelSettable", !1), Lmo = new At("activeLogOutput.level", ""), Nmo = new At("activeLogOutput.levelIsDefault", !1), Omo = new At("outputView.scrollLock", !1), Fmo = new At("activeOutputChannel", ""), Bmo = new At("output.filter.trace", !0), Umo = new At("output.filter.debug", !0), $mo = new At("output.filter.info", !0), Hmo = new At("output.filter.warning", !0), Wmo = new At("output.filter.error", !0), Gmo = new At("outputFilterFocus", !1), Vmo = new At("output.filter.categories", ""), Bk = vn("outputService"), MX = ((e)=>(e[e.Append = 1] = "Append", e[e.Replace = 2] = "Replace", e[e.Clear = 3] = "Clear", e))(MX || {}), $5 = {
    OutputChannels: "workbench.contributions.outputChannels"
}, eJd = class extends we {
    constructor(){
        super(...arguments), this.channels = new Map, this._onDidRegisterChannel = this._register(new ve), this.onDidRegisterChannel = this._onDidRegisterChannel.event, this._onDidRemoveChannel = this._register(new ve), this.onDidRemoveChannel = this._onDidRemoveChannel.event, this._onDidUpdateChannelFiles = this._register(new ve), this.onDidUpdateChannelSources = this._onDidUpdateChannelFiles.event;
    }
    registerChannel(e) {
        this.channels.has(e.id) || (this.channels.set(e.id, e), this._onDidRegisterChannel.fire(e.id));
    }
    replaceOrRegisterChannel(e) {
        const t = this.channels.get(e.id);
        t && !MPe(t) && (this.channels.delete(e.id), this._onDidRemoveChannel.fire(t)), this.registerChannel(e);
    }
    getChannels() {
        const e = [];
        return this.channels.forEach((t)=>e.push(t)), e;
    }
    getChannel(e) {
        return this.channels.get(e);
    }
    updateChannelSources(e, t) {
        const n = this.channels.get(e);
        n && MPe(n) && (n.source = t, this._onDidUpdateChannelFiles.fire(n));
    }
    removeChannel(e) {
        const t = this.channels.get(e);
        t && (this.channels.delete(e), this._onDidRemoveChannel.fire(t));
    }
}, kn.add($5.OutputChannels, new eJd);

}
