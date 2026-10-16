import { JEc, Lo, Se, bt, rn, u3, ve } from "./HVr.js";
import { Bn, Re, ei } from "./actions_2.js";
import { $n, ki, vi } from "./commands.js";
import { dn, he } from "./contextkey.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { Eg, _a } from "./iterator.js";
import { Qr, eb } from "./keybindingsRegistry.js";
import { JN, oA } from "./linkedList.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var U6, cgo, AJd;
export { AJd, U6, cgo };
var __wakaru_XU_initialized = false;
export function XU() {
if (__wakaru_XU_initialized) return;
__wakaru_XU_initialized = true;
"use strict";
x(), bt(), Eg(), JN(), Se(), gr(), ei(), vi(), dn(), Pn(), Ze(), eb(), U6 = vn("workbenchCommandRegistry"), cgo = class UAt {
    constructor(){
        this.commands = new Map, this._onDidRegisterCommand = new ve, this.onDidRegisterCommand = this._onDidRegisterCommand.event, this._onDidUnregisterCommand = new ve, this.onDidUnregisterCommand = this._onDidUnregisterCommand.event;
    }
    registerCommand(t, n) {
        if (!t) throw new Error("invalid command");
        if (typeof t == "string") {
            if (!n) throw new Error("invalid command");
            return this.registerCommand({
                id: t,
                handler: n
            });
        }
        if (t.metadata && Array.isArray(t.metadata.args)) {
            const a = [];
            for (const l of t.metadata.args)a.push(l.constraint);
            const c = t.handler;
            t.handler = function(l, ...u) {
                return JEc(u, a), c(l, ...u);
            };
        }
        const { id: i } = t;
        let r = this.commands.get(i);
        r || (r = new oA, this.commands.set(i, r));
        const s = r.unshift(t), o = rn(()=>{
            s(), this.commands.get(i)?.isEmpty() && (this.commands.delete(i), this._onDidUnregisterCommand.fire(i));
        });
        return this._onDidRegisterCommand.fire(i), u3(o);
    }
    registerCommandAlias(t, n) {
        return this.registerCommand(t, (i, ...r)=>i.get($n).executeCommand(n, ...r));
    }
    getCommand(t) {
        const n = this.commands.get(t);
        return !n || n.isEmpty() ? ki.getCommand(t) : _a.first(n);
    }
    getCommands() {
        const t = new Map;
        for (const [n, i] of ki.getCommands())t.set(n, i);
        for (const n of this.commands.keys()){
            const i = this.commands.get(n);
            i && !i.isEmpty() && t.set(n, _a.first(i));
        }
        return t;
    }
    registerAction2(t) {
        const n = new t, { f1: i, menu: r, keybinding: s, ...o } = n.desc, a = [];
        if (this.commands.get(o.id)) throw new Error(`Cannot register two commands with the same id: ${o.id}`);
        return a.push(this.registerCommand({
            id: o.id,
            handler: (c, ...l)=>n.run(c, ...l),
            metadata: o.metadata ?? {
                description: n.desc.title
            }
        })), a.push(UAt.acquireGlobalAction(o.id, ()=>{
            const c = [];
            if (Array.isArray(r)) for (const l of r)c.push(Bn.appendMenuItem(l.id, {
                command: {
                    ...o,
                    precondition: l.precondition === null ? void 0 : o.precondition
                },
                ...l
            }));
            else r && c.push(Bn.appendMenuItem(r.id, {
                command: {
                    ...o,
                    precondition: r.precondition === null ? void 0 : o.precondition
                },
                ...r
            }));
            if (i && (c.push(Bn.appendMenuItem(Re.CommandPalette, {
                command: o,
                when: o.precondition
            })), c.push(Bn.addCommand(o))), Array.isArray(s)) for (const l of s)c.push(Qr.registerKeybindingRule({
                ...l,
                id: o.id,
                when: o.precondition ? he.and(o.precondition, l.when) : l.when
            }));
            else s && c.push(Qr.registerKeybindingRule({
                ...s,
                id: o.id,
                when: o.precondition ? he.and(o.precondition, s.when) : s.when
            }));
            return rn(()=>{
                Lo(c);
            });
        })), rn(()=>{
            Lo(a);
        });
    }
    static acquireGlobalAction(t, n) {
        const i = UAt.globalActionRegistrations.get(t);
        if (i) return i.refCount += 1, rn(()=>{
            i.refCount -= 1, i.refCount === 0 && (i.disposable.dispose(), UAt.globalActionRegistrations.delete(t));
        });
        const r = n();
        return UAt.globalActionRegistrations.set(t, {
            disposable: r,
            refCount: 1
        }), rn(()=>{
            const s = UAt.globalActionRegistrations.get(t);
            s && (s.refCount -= 1, s.refCount === 0 && (s.disposable.dispose(), UAt.globalActionRegistrations.delete(t)));
        });
    }
}, cgo.globalActionRegistrations = new Map, AJd = cgo, mn(U6, AJd, 1);

}
