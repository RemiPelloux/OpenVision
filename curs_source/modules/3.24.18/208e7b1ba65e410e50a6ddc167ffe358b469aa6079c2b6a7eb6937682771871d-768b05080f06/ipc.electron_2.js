import { ae, it } from "./buffer.js";
import { N, O, ge, se } from "./event.js";
import { RF, x4e } from "./ipc.electron.js";
import { Qr, u0 } from "./ipc.js";
import { Te, hr } from "./ipcMain.js";
import { j } from "./lifecycle.js";
import { h } from "./tslib.es6.js";
function CF(e, t) {
    const n = O.fromNodeEventEmitter(Te, t, (s, i)=>({
            event: s,
            message: i
        })), r = O.filter(n, ({ event: s })=>s.sender.id === e);
    return O.map(r, ({ message: s })=>s && ae.wrap(s));
}
var y0, IF;
export { CF, IF, y0 };
var __wakaru_F4e_initialized = false;
export function F4e() {
if (__wakaru_F4e_initialized) return;
__wakaru_F4e_initialized = true;
"use strict";
h(), hr(), it(), se(), j(), Qr(), x4e(), y0 = class dm extends u0 {
    static getOnDidClientConnect() {
        const t = O.fromNodeEventEmitter(Te, "vscode:hello", ({ sender: n })=>n);
        return O.map(t, (n)=>{
            const r = n.id;
            dm.Clients.get(r)?.dispose();
            const i = new N, a = ge(()=>{
                i.fire();
            });
            dm.Clients.set(r, a);
            const o = CF(r, "vscode:message"), l = O.any(O.signal(CF(r, "vscode:disconnect")), i.event);
            return O.once(l)(()=>{
                dm.Clients.get(r) === a && dm.Clients.delete(r), queueMicrotask(()=>i.dispose());
            }), {
                protocol: new RF(n, o),
                onDidClientDisconnect: l
            };
        });
    }
    constructor(){
        super(dm.getOnDidClientConnect());
    }
}, y0.Clients = new Map, IF = y0;

}
