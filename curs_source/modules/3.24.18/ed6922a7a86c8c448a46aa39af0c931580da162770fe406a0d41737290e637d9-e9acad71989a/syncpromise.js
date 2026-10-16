import { YB } from "./is.js";
import { eqe } from "./stackStrategy.js";
import { x } from "./tslib.es6.js";
var Thi, wGr, CGr, Ehi;
export { CGr, Ehi, Thi, wGr };
var __wakaru_Fhn_initialized = false;
export function Fhn() {
if (__wakaru_Fhn_initialized) return;
__wakaru_Fhn_initialized = true;
"use strict";
x(), YB(), Thi = 0, wGr = 1, CGr = 2, Ehi = class tIa {
    constructor(t){
        this._state = Thi, this._handlers = [], this._runExecutor(t);
    }
    then(t, n) {
        return new tIa((i, r)=>{
            this._handlers.push([
                !1,
                (s)=>{
                    if (!t) i(s);
                    else try {
                        i(t(s));
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
    catch(t) {
        return this.then((n)=>n, t);
    }
    finally(t) {
        return new tIa((n, i)=>{
            let r, s;
            return this.then((o)=>{
                s = !1, r = o, t && t();
            }, (o)=>{
                s = !0, r = o, t && t();
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
        if (this._state === Thi) return;
        const t = this._handlers.slice();
        this._handlers = [], t.forEach((n)=>{
            n[0] || (this._state === wGr && n[1](this._value), this._state === CGr && n[2](this._value), n[0] = !0);
        });
    }
    _runExecutor(t) {
        const n = (s, o)=>{
            if (this._state === Thi) {
                if (eqe(o)) {
                    o.then(i, r);
                    return;
                }
                this._state = s, this._value = o, this._executeHandlers();
            }
        }, i = (s)=>{
            n(wGr, s);
        }, r = (s)=>{
            n(CGr, s);
        };
        try {
            t(i, r);
        } catch (s) {
            r(s);
        }
    }
};

}
