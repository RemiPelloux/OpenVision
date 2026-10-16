import { _j } from "./is.js";
import { fvt } from "./stackStrategy.js";
import { E } from "./tslib.es6.js";
var Shr, cko, uko, khr;
export { Shr, cko, khr, uko };
var __wakaru_iXn_initialized = false;
export function iXn() {
if (__wakaru_iXn_initialized) return;
__wakaru_iXn_initialized = true;
"use strict";
E(), _j(), Shr = 0, cko = 1, uko = 2, khr = class OQc {
    constructor(e){
        this._state = Shr, this._handlers = [], this._runExecutor(e);
    }
    then(e, n) {
        return new OQc((i, r)=>{
            this._handlers.push([
                !1,
                (s)=>{
                    if (!e) i(s);
                    else try {
                        i(e(s));
                    } catch (o) {
                        r(o);
                    }
                },
                (s)=>{
                    if (!n) r(s);
                    else try {
                        i(n(s));
                    } catch (o) {
                        r(o);
                    }
                }
            ]), this._executeHandlers();
        });
    }
    catch(e) {
        return this.then((n)=>n, e);
    }
    finally(e) {
        return new OQc((n, i)=>{
            let r, s;
            return this.then((o)=>{
                s = !1, r = o, e && e();
            }, (o)=>{
                s = !0, r = o, e && e();
            }).then(()=>{
                if (s) {
                    i(r);
                    return;
                }
                n(r);
            });
        });
    }
    _executeHandlers() {
        if (this._state === Shr) return;
        const e = this._handlers.slice();
        this._handlers = [], e.forEach((n)=>{
            n[0] || (this._state === cko && n[1](this._value), this._state === uko && n[2](this._value), n[0] = !0);
        });
    }
    _runExecutor(e) {
        const n = (s, o)=>{
            if (this._state === Shr) {
                if (fvt(o)) {
                    o.then(i, r);
                    return;
                }
                this._state = s, this._value = o, this._executeHandlers();
            }
        }, i = (s)=>{
            n(cko, s);
        }, r = (s)=>{
            n(uko, s);
        };
        try {
            e(i, r);
        } catch (s) {
            r(s);
        }
    }
};

}
