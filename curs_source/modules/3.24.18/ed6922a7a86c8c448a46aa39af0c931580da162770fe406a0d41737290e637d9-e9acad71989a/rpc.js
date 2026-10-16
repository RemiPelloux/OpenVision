import { x } from "./tslib.es6.js";
var sDc;
export { sDc };
var __wakaru_fhg_initialized = false;
export function fhg() {
if (__wakaru_fhg_initialized) return;
__wakaru_fhg_initialized = true;
"use strict";
x(), sDc = class lIa {
    constructor(t, n){
        this._channelFactory = t, this._getHandler = n, this._channel = this._channelFactory({
            handleNotification: (s)=>{
                const o = s, a = this._getHandler().notifications[o[0]];
                if (!a) throw new Error(`Unknown notification "${o[0]}"!`);
                a(...o[1]);
            },
            handleRequest: (s)=>{
                const o = s;
                try {
                    return {
                        type: "result",
                        value: this._getHandler().requests[o[0]](...o[1])
                    };
                } catch (a) {
                    return {
                        type: "error",
                        value: a
                    };
                }
            }
        });
        const i = new Proxy({}, {
            get: (s, o)=>{
                if (o !== "then") return async (...a)=>{
                    const c = await this._channel.sendRequest([
                        o,
                        a
                    ]);
                    if (c.type === "error") throw c.value;
                    return c.value;
                };
            }
        }), r = new Proxy({}, {
            get: (s, o)=>{
                if (o !== "then") return (...a)=>{
                    this._channel.sendNotification([
                        o,
                        a
                    ]);
                };
            }
        });
        this.api = {
            notifications: r,
            requests: i
        };
    }
    static createHost(t, n) {
        return new lIa(t, n);
    }
    static createClient(t, n) {
        return new lIa(t, n);
    }
};

}
