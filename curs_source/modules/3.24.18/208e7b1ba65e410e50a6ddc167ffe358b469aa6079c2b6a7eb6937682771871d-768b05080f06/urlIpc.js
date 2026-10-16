import { Vme } from "./app.js";
import { $me } from "./electronMainProcessRendererConnection.js";
import { Dw } from "./extensionProtocolUrlWindowRouting.js";
import { qD } from "./protocolUrlWindowTarget.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
function RXe(e, t, n) {
    const r = Dw(t, n);
    if (r === void 0) return;
    const s = Vme(r);
    return e.find((i)=>i.ctx === s);
}
var _ge, vge;
export { RXe, _ge, vge };
var __wakaru_CXe_initialized = false;
export function CXe() {
if (__wakaru_CXe_initialized) return;
__wakaru_CXe_initialized = true;
"use strict";
h(), ye(), $me(), qD(), _ge = class {
    constructor(e){
        this.channel = e;
    }
    handleURL(e, t) {
        return this.channel.call("handleURL", [
            e.toJSON(),
            t
        ]);
    }
}, vge = class {
    constructor(e, t){
        this.next = e, this.logService = t;
    }
    async routeCall(e, t, n, r) {
        if (t !== "handleURL") throw new Error(`Call not found: ${t}`);
        if (Array.isArray(n) && n.length > 0) {
            const s = x.revive(n[0]), i = n[1];
            this.logService.trace("URLHandlerRouter#routeCall() with URI argument", s.toString(!0));
            const a = Dw(s, i);
            if (a !== void 0) {
                this.logService.trace(`URLHandlerRouter#routeCall(): found target window with id "${a}"`);
                const o = RXe(e.connections, s, i);
                if (o) return this.logService.trace("URLHandlerRouter#routeCall(): found a connection to route"), o;
                if (this.logService.trace("URLHandlerRouter#routeCall(): did not find a connection to route"), i?.targetWindowId !== void 0) throw new Error(`URL target window ${a} is not connected`);
            } else this.logService.trace("URLHandlerRouter#routeCall(): did not find a target window");
        } else this.logService.trace("URLHandlerRouter#routeCall() without URI argument");
        return this.next.routeCall(e, t, n, r);
    }
    routeEvent(e, t) {
        throw new Error(`Event not found: ${t}`);
    }
};

}
