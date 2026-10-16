import { He, Se, U_, Ul, hp, jn, rn } from "./HVr.js";
import { ki, vi } from "./commands.js";
import { Zie } from "./keybindings.js";
import { JN, oA } from "./linkedList.js";
import { kn, rr } from "./platform_2.js";
import { BNt, ipg } from "./qIc.js";
import { x } from "./tslib.es6.js";
var zYr, bMc, Qr, yMc;
export { Qr, bMc, yMc, zYr };
var __wakaru_eb_initialized = false;
export function eb() {
if (__wakaru_eb_initialized) return;
__wakaru_eb_initialized = true;
"use strict";
x(), Zie(), jn(), vi(), rr(), Se(), JN(), zYr = class PXn {
    constructor(){
        this._coreKeybindings = new oA, this._extensionKeybindings = [], this._cachedMergedKeybindings = null, this._version = 0;
    }
    static bindToCurrentPlatform(t) {
        if (hp === Ul.Windows) {
            if (t && t.win) return t.win;
        } else if (hp === Ul.Macintosh) {
            if (t && t.mac) return t.mac;
        } else if (t && t.linux) return t.linux;
        return t;
    }
    registerKeybindingRule(t) {
        const n = PXn.bindToCurrentPlatform(t), i = new He;
        if (n && n.primary) {
            const r = BNt(n.primary, hp);
            r && i.add(this._registerDefaultKeybinding(r, t.id, t.args, t.weight, 0, t.when));
        }
        if (n && Array.isArray(n.secondary)) for(let r = 0, s = n.secondary.length; r < s; r++){
            const o = n.secondary[r], a = BNt(o, hp);
            a && i.add(this._registerDefaultKeybinding(a, t.id, t.args, t.weight, -r - 1, t.when));
        }
        return i;
    }
    setExtensionKeybindings(t) {
        const n = [];
        let i = 0;
        for (const r of t)r.keybinding && (n[i++] = {
            keybinding: r.keybinding,
            command: r.id,
            commandArgs: r.args,
            when: r.when,
            weight1: r.weight,
            weight2: 0,
            extensionId: r.extensionId || null,
            isBuiltinExtension: r.isBuiltinExtension || !1
        });
        PXn._areExtensionKeybindingsEqual(this._extensionKeybindings, n) || (this._extensionKeybindings = n, this._cachedMergedKeybindings = null, this._version++);
    }
    static _areExtensionKeybindingsEqual(t, n) {
        if (t === n) return !0;
        if (t.length !== n.length) return !1;
        for(let i = 0, r = t.length; i < r; i++)if (!PXn._isKeybindingItemEqual(t[i], n[i])) return !1;
        return !0;
    }
    static _isKeybindingItemEqual(t, n) {
        return t === n ? !0 : t.command !== n.command || t.weight1 !== n.weight1 || t.weight2 !== n.weight2 || t.extensionId !== n.extensionId || t.isBuiltinExtension !== n.isBuiltinExtension || t.commandArgs !== n.commandArgs ? !1 : t.keybinding === null || n.keybinding === null ? t.keybinding === n.keybinding : t.keybinding.equals(n.keybinding) ? PXn._isWhenEqual(t.when, n.when) : !1;
    }
    static _isWhenEqual(t, n) {
        return t === n ? !0 : !t || !n ? !1 : t.equals(n);
    }
    registerCommandAndKeybindingRule(t) {
        return U_(this.registerKeybindingRule(t), ki.registerCommand(t));
    }
    _registerDefaultKeybinding(t, n, i, r, s, o) {
        const a = this._coreKeybindings.push({
            keybinding: t,
            command: n,
            commandArgs: i,
            when: o,
            weight1: r,
            weight2: s,
            extensionId: null,
            isBuiltinExtension: !1
        });
        return this._cachedMergedKeybindings = null, this._version++, rn(()=>{
            a(), this._cachedMergedKeybindings = null, this._version++;
        });
    }
    getVersion() {
        return this._version;
    }
    getDefaultKeybindings() {
        return this._cachedMergedKeybindings || (this._cachedMergedKeybindings = Array.from(this._coreKeybindings).concat(this._extensionKeybindings), this._cachedMergedKeybindings.sort(ipg)), this._cachedMergedKeybindings.slice(0);
    }
}, bMc = zYr.bindToCurrentPlatform, Qr = new zYr, yMc = {
    EditorModes: "platform.keybindingsRegistry"
}, kn.add(yMc.EditorModes, Qr);

}
