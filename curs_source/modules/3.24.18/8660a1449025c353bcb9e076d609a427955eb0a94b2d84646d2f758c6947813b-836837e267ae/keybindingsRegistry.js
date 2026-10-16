import { Di, Hg, N1, Nt, Pn, Qe, rd } from "./Iwo.js";
import { hs, rs } from "./commands.js";
import { Qke } from "./keybindings.js";
import { a7, tL } from "./linkedList.js";
import { Eo, Fi } from "./platform_2.js";
import { E } from "./tslib.es6.js";
import { hAy, tgn } from "./ze.js";
var G7o, X5d, ja, Z5d;
export { G7o, X5d, Z5d, ja };
var __wakaru_xT_initialized = false;
export function xT() {
if (__wakaru_xT_initialized) return;
__wakaru_xT_initialized = true;
"use strict";
E(), Qke(), Di(), rs(), Eo(), Qe(), a7(), G7o = class vZi {
    constructor(){
        this._coreKeybindings = new tL, this._extensionKeybindings = [], this._cachedMergedKeybindings = null, this._version = 0;
    }
    static bindToCurrentPlatform(e) {
        if (Hg === rd.Windows) {
            if (e && e.win) return e.win;
        } else if (Hg === rd.Macintosh) {
            if (e && e.mac) return e.mac;
        } else if (e && e.linux) return e.linux;
        return e;
    }
    registerKeybindingRule(e) {
        const n = vZi.bindToCurrentPlatform(e), i = new Nt;
        if (n && n.primary) {
            const r = tgn(n.primary, Hg);
            r && i.add(this._registerDefaultKeybinding(r, e.id, e.args, e.weight, 0, e.when));
        }
        if (n && Array.isArray(n.secondary)) for(let r = 0, s = n.secondary.length; r < s; r++){
            const o = n.secondary[r], a = tgn(o, Hg);
            a && i.add(this._registerDefaultKeybinding(a, e.id, e.args, e.weight, -r - 1, e.when));
        }
        return i;
    }
    setExtensionKeybindings(e) {
        const n = [];
        let i = 0;
        for (const r of e)r.keybinding && (n[i++] = {
            keybinding: r.keybinding,
            command: r.id,
            commandArgs: r.args,
            when: r.when,
            weight1: r.weight,
            weight2: 0,
            extensionId: r.extensionId || null,
            isBuiltinExtension: r.isBuiltinExtension || !1
        });
        vZi._areExtensionKeybindingsEqual(this._extensionKeybindings, n) || (this._extensionKeybindings = n, this._cachedMergedKeybindings = null, this._version++);
    }
    static _areExtensionKeybindingsEqual(e, n) {
        if (e === n) return !0;
        if (e.length !== n.length) return !1;
        for(let i = 0, r = e.length; i < r; i++)if (!vZi._isKeybindingItemEqual(e[i], n[i])) return !1;
        return !0;
    }
    static _isKeybindingItemEqual(e, n) {
        return e === n ? !0 : e.command !== n.command || e.weight1 !== n.weight1 || e.weight2 !== n.weight2 || e.extensionId !== n.extensionId || e.isBuiltinExtension !== n.isBuiltinExtension || e.commandArgs !== n.commandArgs ? !1 : e.keybinding === null || n.keybinding === null ? e.keybinding === n.keybinding : e.keybinding.equals(n.keybinding) ? vZi._isWhenEqual(e.when, n.when) : !1;
    }
    static _isWhenEqual(e, n) {
        return e === n ? !0 : !e || !n ? !1 : e.equals(n);
    }
    registerCommandAndKeybindingRule(e) {
        return N1(this.registerKeybindingRule(e), hs.registerCommand(e));
    }
    _registerDefaultKeybinding(e, n, i, r, s, o) {
        const a = this._coreKeybindings.push({
            keybinding: e,
            command: n,
            commandArgs: i,
            when: o,
            weight1: r,
            weight2: s,
            extensionId: null,
            isBuiltinExtension: !1
        });
        return this._cachedMergedKeybindings = null, this._version++, Pn(()=>{
            a(), this._cachedMergedKeybindings = null, this._version++;
        });
    }
    getVersion() {
        return this._version;
    }
    getDefaultKeybindings() {
        return this._cachedMergedKeybindings || (this._cachedMergedKeybindings = Array.from(this._coreKeybindings).concat(this._extensionKeybindings), this._cachedMergedKeybindings.sort(hAy)), this._cachedMergedKeybindings.slice(0);
    }
}, X5d = G7o.bindToCurrentPlatform, ja = new G7o, Z5d = {
    EditorModes: "platform.keybindingsRegistry"
}, Fi.add(Z5d.EditorModes, ja);

}
