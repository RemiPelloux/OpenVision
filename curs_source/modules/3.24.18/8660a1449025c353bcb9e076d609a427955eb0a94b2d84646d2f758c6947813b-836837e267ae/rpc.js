import { E } from "./tslib.es6.js";
var KOd;
export { KOd };
var __wakaru_Axy_initialized = false;
export function Axy() {
if (__wakaru_Axy_initialized) return;
__wakaru_Axy_initialized = true;
"use strict";
E(), KOd = class YQc {
    constructor(e, n){
        this._channelFactory = e, this._getHandler = n, this._channel = this._channelFactory({
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
                    const l = await this._channel.sendRequest([
                        o,
                        a
                    ]);
                    if (l.type === "error") throw l.value;
                    return l.value;
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
    static createHost(e, n) {
        return new YQc(e, n);
    }
    static createClient(e, n) {
        return new YQc(e, n);
    }
};

}
