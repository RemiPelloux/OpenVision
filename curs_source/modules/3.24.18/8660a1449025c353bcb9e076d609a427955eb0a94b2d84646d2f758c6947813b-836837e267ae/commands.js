import { Gt, Pn, Qe, m4, tt, wYu } from "./Iwo.js";
import { jn } from "./SZu.js";
import { It } from "./instantiation.js";
import { IT, np } from "./iterator.js";
import { a7, tL } from "./linkedList.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
var nr, hs;
export { hs, nr };
var __wakaru_rs_initialized = false;
export function rs() {
if (__wakaru_rs_initialized) return;
__wakaru_rs_initialized = true;
"use strict";
E(), Gt(), IT(), Qe(), a7(), To(), It(), nr = jn("commandService"), hs = new class {
    constructor(){
        this._commands = new Map, this._onDidRegisterCommand = new tt, this.onDidRegisterCommand = this._onDidRegisterCommand.event;
    }
    registerCommand(t, e) {
        if (!t) throw new Error("invalid command");
        if (typeof t == "string") {
            if (!e) throw new Error("invalid command");
            return this.registerCommand({
                id: t,
                handler: e
            });
        }
        if (t.metadata && Array.isArray(t.metadata.args)) {
            const o = [];
            for (const l of t.metadata.args)o.push(l.constraint);
            const a = t.handler;
            t.handler = function(l, ...c) {
                return wYu(c, o), a(l, ...c);
            };
        }
        const { id: n } = t;
        let i = this._commands.get(n);
        i || (i = new tL, this._commands.set(n, i));
        const r = i.unshift(t), s = Pn(()=>{
            r(), this._commands.get(n)?.isEmpty() && this._commands.delete(n);
        });
        return this._onDidRegisterCommand.fire(n), m4(s);
    }
    registerCommandAlias(t, e) {
        return hs.registerCommand(t, (n, ...i)=>n.get(nr).executeCommand(e, ...i));
    }
    getCommand(t) {
        const e = this._commands.get(t);
        if (!(!e || e.isEmpty())) return np.first(e);
    }
    getCommands() {
        const t = new Map;
        for (const e of this._commands.keys()){
            const n = this.getCommand(e);
            n && t.set(e, n);
        }
        return t;
    }
}, hs.registerCommand("noop", ()=>{}), hs.registerCommandAlias("inlineChat.hideHint", "noop"), hs.registerCommandAlias("inlineChat.showHint", "noop");

}
