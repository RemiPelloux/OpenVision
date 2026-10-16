import { Cw, ti } from "./charCode.js";
import { sL, zve } from "./cursorColumns.js";
import { E } from "./tslib.es6.js";
var Jkr;
export { Jkr };
var __wakaru_dFd_initialized = false;
export function dFd() {
if (__wakaru_dFd_initialized) return;
__wakaru_dFd_initialized = true;
"use strict";
E(), Cw(), zve(), Jkr = class fAb {
    static whitespaceVisibleColumn(e, n, i) {
        const r = e.length;
        let s = 0, o = -1, a = -1;
        for(let l = 0; l < r; l++){
            if (l === n) return [
                o,
                a,
                s
            ];
            switch(s % i === 0 && (o = l, a = s), e.charCodeAt(l)){
                case ti.Space:
                    s += 1;
                    break;
                case ti.Tab:
                    s = sL.nextRenderTabStop(s, i);
                    break;
                default:
                    return [
                        -1,
                        -1,
                        -1
                    ];
            }
        }
        return n === r ? [
            o,
            a,
            s
        ] : [
            -1,
            -1,
            -1
        ];
    }
    static atomicPosition(e, n, i, r) {
        const s = e.length, [o, a, l] = fAb.whitespaceVisibleColumn(e, n, i);
        if (l === -1) return -1;
        let c;
        switch(r){
            case 0:
                c = !0;
                break;
            case 1:
                c = !1;
                break;
            case 2:
                if (l % i === 0) return n;
                c = l % i <= i / 2;
                break;
        }
        if (c) {
            if (o === -1) return -1;
            let h = a;
            for(let p = o; p < s; ++p){
                if (h === a + i) return o;
                switch(e.charCodeAt(p)){
                    case ti.Space:
                        h += 1;
                        break;
                    case ti.Tab:
                        h = sL.nextRenderTabStop(h, i);
                        break;
                    default:
                        return -1;
                }
            }
            return h === a + i ? o : -1;
        }
        const u = sL.nextRenderTabStop(l, i);
        let d = l;
        for(let h = n; h < s; h++){
            if (d === u) return h;
            switch(e.charCodeAt(h)){
                case ti.Space:
                    d += 1;
                    break;
                case ti.Tab:
                    d = sL.nextRenderTabStop(d, i);
                    break;
                default:
                    return -1;
            }
        }
        return d === u ? s : -1;
    }
};

}
