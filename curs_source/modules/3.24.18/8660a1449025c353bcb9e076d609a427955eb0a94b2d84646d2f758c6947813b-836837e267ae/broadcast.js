import { Ei, Gt, Pn, Qe, st, tt, uf } from "./Iwo.js";
import { E } from "./tslib.es6.js";
import { $t, Bs } from "./window.js";
var lgl;
export { lgl };
var __wakaru_OEg_initialized = false;
export function OEg() {
if (__wakaru_OEg_initialized) return;
__wakaru_OEg_initialized = true;
"use strict";
E(), Bs(), Ei(), Gt(), Qe(), lgl = class extends st {
    constructor(t){
        if (super(), this.channelName = t, this._onDidReceiveData = this._register(new tt), this.onDidReceiveData = this._onDidReceiveData.event, "BroadcastChannel" in $t) try {
            this.broadcastChannel = new BroadcastChannel(t);
            const e = (n)=>{
                this._onDidReceiveData.fire(n.data);
            };
            this.broadcastChannel.addEventListener("message", e), this._register(Pn(()=>{
                this.broadcastChannel && (this.broadcastChannel.removeEventListener("message", e), this.broadcastChannel.close());
            }));
        } catch (e) {
            console.warn("Error while creating broadcast channel. Falling back to localStorage.", uf(e));
        }
        this.broadcastChannel || (this.channelName = `BroadcastDataChannel.${t}`, this.createBroadcastChannel());
    }
    createBroadcastChannel() {
        const t = (e)=>{
            e.key === this.channelName && e.newValue && this._onDidReceiveData.fire(JSON.parse(e.newValue));
        };
        $t.addEventListener("storage", t), this._register(Pn(()=>$t.removeEventListener("storage", t)));
    }
    postData(t) {
        this.broadcastChannel ? this.broadcastChannel.postMessage(t) : (localStorage.removeItem(this.channelName), localStorage.setItem(this.channelName, JSON.stringify(t)));
    }
};

}
