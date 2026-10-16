import { qQy } from "./LYd.js";
import { E } from "./tslib.es6.js";
var Svh;
export { Svh };
var __wakaru_zQy_initialized = false;
export function zQy() {
if (__wakaru_zQy_initialized) return;
__wakaru_zQy_initialized = true;
E(), Svh = class {
    constructor(){
        this.map = [];
    }
    add(t, e, n) {
        qQy(this, t, e, n);
    }
    consume(t) {
        if (this.map.sort(function(r, s) {
            return r[0] - s[0];
        }), this.map.length === 0) return;
        let e = this.map.length;
        const n = [];
        for(; e > 0;)e -= 1, n.push(t.slice(this.map[e][0] + this.map[e][1]), this.map[e][2]), t.length = this.map[e][0];
        n.push(t.slice()), t.length = 0;
        let i = n.pop();
        for(; i;){
            for (const r of i)t.push(r);
            i = n.pop();
        }
        this.map.length = 0;
    }
};

}
