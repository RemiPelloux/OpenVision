import { u8g } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Jml;
export { Jml };
var __wakaru_d8g_initialized = false;
export function d8g() {
if (__wakaru_d8g_initialized) return;
__wakaru_d8g_initialized = true;
x(), Jml = class {
    constructor(){
        this.map = [];
    }
    add(e, t, n) {
        u8g(this, e, t, n);
    }
    consume(e) {
        if (this.map.sort(function(r, s) {
            return r[0] - s[0];
        }), this.map.length === 0) return;
        let t = this.map.length;
        const n = [];
        for(; t > 0;)t -= 1, n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), e.length = this.map[t][0];
        n.push(e.slice()), e.length = 0;
        let i = n.pop();
        for(; i;){
            for (const r of i)e.push(r);
            i = n.pop();
        }
        this.map.length = 0;
    }
};

}
