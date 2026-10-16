import { JEc, Se, bt, rn, u3, ve } from "./HVr.js";
import { Ze } from "./instantiation.js";
import { Eg, _a } from "./iterator.js";
import { JN, oA } from "./linkedList.js";
import { vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var $n, ki;
export { $n, ki };
var __wakaru_vi_initialized = false;
export function vi() {
if (__wakaru_vi_initialized) return;
__wakaru_vi_initialized = true;
"use strict";
x(), bt(), Eg(), Se(), JN(), gr(), Ze(), $n = vn("commandService"), ki = new class {
    constructor(){
        this._commands = new Map, this._onDidRegisterCommand = new ve, this.onDidRegisterCommand = this._onDidRegisterCommand.event;
    }
    registerCommand(e, t) {
        if (!e) throw new Error("invalid command");
        if (typeof e == "string") {
            if (!t) throw new Error("invalid command");
            return this.registerCommand({
                id: e,
                handler: t
            });
        }
        if (e.metadata && Array.isArray(e.metadata.args)) {
            const o = [];
            for (const c of e.metadata.args)o.push(c.constraint);
            const a = e.handler;
            e.handler = function(c, ...l) {
                return JEc(l, o), a(c, ...l);
            };
        }
        const { id: n } = e;
        let i = this._commands.get(n);
        i || (i = new oA, this._commands.set(n, i));
        const r = i.unshift(e), s = rn(()=>{
            r(), this._commands.get(n)?.isEmpty() && this._commands.delete(n);
        });
        return this._onDidRegisterCommand.fire(n), u3(s);
    }
    registerCommandAlias(e, t) {
        return ki.registerCommand(e, (n, ...i)=>n.get($n).executeCommand(t, ...i));
    }
    getCommand(e) {
        const t = this._commands.get(e);
        if (!(!t || t.isEmpty())) return _a.first(t);
    }
    getCommands() {
        const e = new Map;
        for (const t of this._commands.keys()){
            const n = this.getCommand(t);
            n && e.set(t, n);
        }
        return e;
    }
}, ki.registerCommand("noop", ()=>{}), ki.registerCommandAlias("inlineChat.hideHint", "noop"), ki.registerCommandAlias("inlineChat.showHint", "noop");

}
