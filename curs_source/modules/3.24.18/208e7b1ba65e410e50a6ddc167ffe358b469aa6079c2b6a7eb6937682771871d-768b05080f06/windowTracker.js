import { le } from "./async.js";
import { O, se } from "./event.js";
import { Wl } from "./ipc.js";
import { J, j, ve } from "./lifecycle.js";
import { h } from "./tslib.es6.js";
var Nfe;
export { Nfe };
var __wakaru_rZe_initialized = false;
export function rZe() {
if (__wakaru_rZe_initialized) return;
__wakaru_rZe_initialized = true;
"use strict";
h(), le(), se(), j(), Nfe = class extends J {
    constructor({ onDidOpenMainWindow: e, onDidFocusMainWindow: t, getActiveWindowId: n }){
        super(), this.disposables = this._register(new ve), O.latch(O.any(e, t))(this.setActiveWindow, this, this.disposables), this.firstActiveWindowIdPromise = Wl(()=>n()), (async ()=>{
            try {
                const s = await this.firstActiveWindowIdPromise;
                this.activeWindowId = typeof this.activeWindowId == "number" ? this.activeWindowId : s;
            } catch  {} finally{
                this.firstActiveWindowIdPromise = void 0;
            }
        })();
    }
    setActiveWindow(e) {
        this.firstActiveWindowIdPromise && (this.firstActiveWindowIdPromise.cancel(), this.firstActiveWindowIdPromise = void 0), this.activeWindowId = e;
    }
    async getActiveClientId() {
        return `window:${this.firstActiveWindowIdPromise ? await this.firstActiveWindowIdPromise : this.activeWindowId}`;
    }
};

}
