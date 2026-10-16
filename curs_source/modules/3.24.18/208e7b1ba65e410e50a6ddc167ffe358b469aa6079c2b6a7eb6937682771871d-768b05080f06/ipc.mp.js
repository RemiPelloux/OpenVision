import { ae, it } from "./buffer.js";
import { O, se } from "./event.js";
import { Qr, m0 } from "./ipc.js";
import { h } from "./tslib.es6.js";
var AF, MF;
export { AF, MF };
var __wakaru_W4e_initialized = false;
export function W4e() {
if (__wakaru_W4e_initialized) return;
__wakaru_W4e_initialized = true;
"use strict";
h(), it(), se(), Qr(), AF = class {
    constructor(e){
        this.port = e;
        const t = O.fromDOMEventEmitter(this.port, "message", (n)=>n.data ? ae.wrap(n.data) : ae.alloc(0));
        this.onMessage = O.filter(t, (n)=>n.byteLength > 0), e.start();
    }
    send(e) {
        this.port.postMessage(e.buffer);
    }
    disconnect() {
        this.port.close();
    }
}, MF = class extends m0 {
    constructor(e, t){
        const n = new AF(e);
        super(n, t), this.protocol = n;
    }
    dispose() {
        this.protocol.disconnect(), super.dispose();
    }
};

}
