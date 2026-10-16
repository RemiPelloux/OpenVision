import { Gt, Qe, st, tt } from "./Iwo.js";
import { jn } from "./SZu.js";
import { Hi, cn } from "./contextkey.js";
import { ize } from "./gYa.js";
import { It } from "./instantiation.js";
import { Eo, Fi } from "./platform_2.js";
import { Lr } from "./resources.js";
import { E } from "./tslib.es6.js";
var _Ya, $Jr, P0i, HJr, zM, n8m, i8m, bYa, yYa, SYa, kYa, r8m, wYa, CYa, TYa, EYa, IYa, xYa, s8m, o8m, UT, Zae, Q7, a8m;
export { $Jr, CYa, EYa, HJr, IYa, P0i, Q7, SYa, TYa, UT, Zae, _Ya, a8m, bYa, i8m, kYa, n8m, o8m, r8m, s8m, wYa, xYa, yYa, zM };
var __wakaru_JD_initialized = false;
export function JD() {
if (__wakaru_JD_initialized) return;
__wakaru_JD_initialized = true;
"use strict";
E(), Gt(), Eo(), Lr(), Hi(), It(), Qe(), _Ya = "text/x-code-output", $Jr = "Log", P0i = "text/x-code-log-output", HJr = "log", zM = "workbench.panel.output", n8m = new cn("inOutput", !1), i8m = new cn("activeLogOutput", !1), bYa = new cn("activeLogOutput.isLog", !1), yYa = new cn("activeLogOutput.levelSettable", !1), SYa = new cn("activeLogOutput.level", ""), kYa = new cn("activeLogOutput.levelIsDefault", !1), r8m = new cn("outputView.scrollLock", !1), wYa = new cn("activeOutputChannel", ""), CYa = new cn("output.filter.trace", !0), TYa = new cn("output.filter.debug", !0), EYa = new cn("output.filter.info", !0), IYa = new cn("output.filter.warning", !0), xYa = new cn("output.filter.error", !0), s8m = new cn("outputFilterFocus", !1), o8m = new cn("output.filter.categories", ""), UT = jn("outputService"), Zae = ((t)=>(t[t.Append = 1] = "Append", t[t.Replace = 2] = "Replace", t[t.Clear = 3] = "Clear", t))(Zae || {}), Q7 = {
    OutputChannels: "workbench.contributions.outputChannels"
}, a8m = class extends st {
    constructor(){
        super(...arguments), this.channels = new Map, this._onDidRegisterChannel = this._register(new tt), this.onDidRegisterChannel = this._onDidRegisterChannel.event, this._onDidRemoveChannel = this._register(new tt), this.onDidRemoveChannel = this._onDidRemoveChannel.event, this._onDidUpdateChannelFiles = this._register(new tt), this.onDidUpdateChannelSources = this._onDidUpdateChannelFiles.event;
    }
    registerChannel(t) {
        this.channels.has(t.id) || (this.channels.set(t.id, t), this._onDidRegisterChannel.fire(t.id));
    }
    replaceOrRegisterChannel(t) {
        const e = this.channels.get(t.id);
        e && !ize(e) && (this.channels.delete(t.id), this._onDidRemoveChannel.fire(e)), this.registerChannel(t);
    }
    getChannels() {
        const t = [];
        return this.channels.forEach((e)=>t.push(e)), t;
    }
    getChannel(t) {
        return this.channels.get(t);
    }
    updateChannelSources(t, e) {
        const n = this.channels.get(t);
        n && ize(n) && (n.source = e, this._onDidUpdateChannelFiles.fire(n));
    }
    removeChannel(t) {
        const e = this.channels.get(t);
        e && (this.channels.delete(t), this._onDidRemoveChannel.fire(e));
    }
}, Fi.add(Q7.OutputChannels, new a8m);

}
