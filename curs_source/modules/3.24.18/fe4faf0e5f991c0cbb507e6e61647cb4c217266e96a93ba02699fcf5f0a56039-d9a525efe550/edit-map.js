import { i } from "./plugin-brand-icon.js";
function Odr(r, e, a, s) {
    let l = 0;
    if (!(a === 0 && s.length === 0)) {
        for(; l < r.map.length;){
            if (r.map[l][0] === e) {
                r.map[l][1] += a, r.map[l][2].push(...s);
                return;
            }
            l += 1;
        }
        r.map.push([
            e,
            a,
            s
        ]);
    }
}
var FRt, zdr;
export { FRt, Odr, zdr };
var __wakaru_ixi_initialized = false;
export function ixi() {
if (__wakaru_ixi_initialized) return;
__wakaru_ixi_initialized = true;
FRt = class {
    constructor(){
        this.map = [];
    }
    add(e, a, s) {
        Odr(this, e, a, s);
    }
    consume(e) {
        if (this.map.sort(function(u, p) {
            return u[0] - p[0];
        }), this.map.length === 0) return;
        let a = this.map.length;
        const s = [];
        for(; a > 0;)a -= 1, s.push(e.slice(this.map[a][0] + this.map[a][1]), this.map[a][2]), e.length = this.map[a][0];
        s.push(e.slice()), e.length = 0;
        let l = s.pop();
        for(; l;){
            for (const u of l)e.push(u);
            l = s.pop();
        }
        this.map.length = 0;
    }
}, i(FRt, "EditMap"), zdr = FRt, i(Odr, "addImplementation");

}
