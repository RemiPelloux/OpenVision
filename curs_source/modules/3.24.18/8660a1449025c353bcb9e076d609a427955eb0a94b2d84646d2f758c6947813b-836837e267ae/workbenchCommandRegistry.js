import { Gt, Nc, Pn, Qe, m4, tt, wYu } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Ft, es, ji } from "./actions_2.js";
import { hs, nr, rs } from "./commands.js";
import { Hi, mt } from "./contextkey.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { IT, np } from "./iterator.js";
import { ja, xT } from "./keybindingsRegistry.js";
import { a7, tL } from "./linkedList.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
var iV, zYa, F8m;
export { F8m, iV, zYa };
var __wakaru_bX_initialized = false;
export function bX() {
if (__wakaru_bX_initialized) return;
__wakaru_bX_initialized = true;
"use strict";
E(), Gt(), IT(), a7(), Qe(), To(), es(), rs(), Hi(), Rn(), It(), xT(), iV = jn("workbenchCommandRegistry"), zYa = class Gsn {
    constructor(){
        this.commands = new Map, this._onDidRegisterCommand = new tt, this.onDidRegisterCommand = this._onDidRegisterCommand.event, this._onDidUnregisterCommand = new tt, this.onDidUnregisterCommand = this._onDidUnregisterCommand.event;
    }
    registerCommand(e, n) {
        if (!e) throw new Error("invalid command");
        if (typeof e == "string") {
            if (!n) throw new Error("invalid command");
            return this.registerCommand({
                id: e,
                handler: n
            });
        }
        if (e.metadata && Array.isArray(e.metadata.args)) {
            const a = [];
            for (const c of e.metadata.args)a.push(c.constraint);
            const l = e.handler;
            e.handler = function(c, ...u) {
                return wYu(u, a), l(c, ...u);
            };
        }
        const { id: i } = e;
        let r = this.commands.get(i);
        r || (r = new tL, this.commands.set(i, r));
        const s = r.unshift(e), o = Pn(()=>{
            s(), this.commands.get(i)?.isEmpty() && (this.commands.delete(i), this._onDidUnregisterCommand.fire(i));
        });
        return this._onDidRegisterCommand.fire(i), m4(o);
    }
    registerCommandAlias(e, n) {
        return this.registerCommand(e, (i, ...r)=>i.get(nr).executeCommand(n, ...r));
    }
    getCommand(e) {
        const n = this.commands.get(e);
        return !n || n.isEmpty() ? hs.getCommand(e) : np.first(n);
    }
    getCommands() {
        const e = new Map;
        for (const [n, i] of hs.getCommands())e.set(n, i);
        for (const n of this.commands.keys()){
            const i = this.commands.get(n);
            i && !i.isEmpty() && e.set(n, np.first(i));
        }
        return e;
    }
    registerAction2(e) {
        const n = new e, { f1: i, menu: r, keybinding: s, ...o } = n.desc, a = [];
        if (this.commands.get(o.id)) throw new Error(`Cannot register two commands with the same id: ${o.id}`);
        return a.push(this.registerCommand({
            id: o.id,
            handler: (l, ...c)=>n.run(l, ...c),
            metadata: o.metadata ?? {
                description: n.desc.title
            }
        })), a.push(Gsn.acquireGlobalAction(o.id, ()=>{
            const l = [];
            if (Array.isArray(r)) for (const c of r)l.push(ji.appendMenuItem(c.id, {
                command: {
                    ...o,
                    precondition: c.precondition === null ? void 0 : o.precondition
                },
                ...c
            }));
            else r && l.push(ji.appendMenuItem(r.id, {
                command: {
                    ...o,
                    precondition: r.precondition === null ? void 0 : o.precondition
                },
                ...r
            }));
            if (i && (l.push(ji.appendMenuItem(Ft.CommandPalette, {
                command: o,
                when: o.precondition
            })), l.push(ji.addCommand(o))), Array.isArray(s)) for (const c of s)l.push(ja.registerKeybindingRule({
                ...c,
                id: o.id,
                when: o.precondition ? mt.and(o.precondition, c.when) : c.when
            }));
            else s && l.push(ja.registerKeybindingRule({
                ...s,
                id: o.id,
                when: o.precondition ? mt.and(o.precondition, s.when) : s.when
            }));
            return Pn(()=>{
                Nc(l);
            });
        })), Pn(()=>{
            Nc(a);
        });
    }
    static acquireGlobalAction(e, n) {
        const i = Gsn.globalActionRegistrations.get(e);
        if (i) return i.refCount += 1, Pn(()=>{
            i.refCount -= 1, i.refCount === 0 && (i.disposable.dispose(), Gsn.globalActionRegistrations.delete(e));
        });
        const r = n();
        return Gsn.globalActionRegistrations.set(e, {
            disposable: r,
            refCount: 1
        }), Pn(()=>{
            const s = Gsn.globalActionRegistrations.get(e);
            s && (s.refCount -= 1, s.refCount === 0 && (s.disposable.dispose(), Gsn.globalActionRegistrations.delete(e)));
        });
    }
}, zYa.globalActionRegistrations = new Map, F8m = zYa, bn(iV, F8m, 1);

}
