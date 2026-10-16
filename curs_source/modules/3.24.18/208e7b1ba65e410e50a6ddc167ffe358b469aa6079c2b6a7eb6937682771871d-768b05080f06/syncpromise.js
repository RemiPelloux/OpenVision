import { fn } from "./is.js";
import { RC } from "./stackStrategy.js";
import { h } from "./tslib.es6.js";
var Ck, ZC, eI, tI;
export { Ck, ZC, eI, tI };
var __wakaru_xp_initialized = false;
export function xp() {
if (__wakaru_xp_initialized) return;
__wakaru_xp_initialized = true;
"use strict";
h(), fn(), Ck = 0, ZC = 1, eI = 2, tI = class Rx {
    constructor(t){
        this._state = Ck, this._handlers = [], this._runExecutor(t);
    }
    then(t, n) {
        return new Rx((r, s)=>{
            this._handlers.push([
                !1,
                (i)=>{
                    if (!t) r(i);
                    else try {
                        r(t(i));
                    } catch (a) {
                        s(a);
                    }
                },
                (i)=>{
                    if (!n) s(i);
                    else try {
                        r(n(i));
                    } catch (a) {
                        s(a);
                    }
                }
            ]), this._executeHandlers();
        });
    }
    catch(t) {
        return this.then((n)=>n, t);
    }
    finally(t) {
        return new Rx((n, r)=>{
            let s, i;
            return this.then((a)=>{
                i = !1, s = a, t && t();
            }, (a)=>{
                i = !0, s = a, t && t();
            }).then(()=>{
                if (i) {
                    r(s);
                    return;
                }
                n(s);
            });
        });
    }
    _executeHandlers() {
        if (this._state === Ck) return;
        const t = this._handlers.slice();
        this._handlers = [], t.forEach((n)=>{
            n[0] || (this._state === ZC && n[1](this._value), this._state === eI && n[2](this._value), n[0] = !0);
        });
    }
    _runExecutor(t) {
        const n = (i, a)=>{
            if (this._state === Ck) {
                if (RC(a)) {
                    a.then(r, s);
                    return;
                }
                this._state = i, this._value = a, this._executeHandlers();
            }
        }, r = (i)=>{
            n(ZC, i);
        }, s = (i)=>{
            n(eI, i);
        };
        try {
            t(r, s);
        } catch (i) {
            s(i);
        }
    }
};

}
