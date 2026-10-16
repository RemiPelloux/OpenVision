import { En, qy } from "./charCode.js";
import { _D, nre } from "./cursorColumns.js";
import { x } from "./tslib.es6.js";
var dfi;
export { dfi };
var __wakaru_VMc_initialized = false;
export function VMc() {
if (__wakaru_VMc_initialized) return;
__wakaru_VMc_initialized = true;
"use strict";
x(), qy(), nre(), dfi = class WSm {
    static whitespaceVisibleColumn(t, n, i) {
        const r = t.length;
        let s = 0, o = -1, a = -1;
        for(let c = 0; c < r; c++){
            if (c === n) return [
                o,
                a,
                s
            ];
            switch(s % i === 0 && (o = c, a = s), t.charCodeAt(c)){
                case En.Space:
                    s += 1;
                    break;
                case En.Tab:
                    s = _D.nextRenderTabStop(s, i);
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
    static atomicPosition(t, n, i, r) {
        const s = t.length, [o, a, c] = WSm.whitespaceVisibleColumn(t, n, i);
        if (c === -1) return -1;
        let l;
        switch(r){
            case 0:
                l = !0;
                break;
            case 1:
                l = !1;
                break;
            case 2:
                if (c % i === 0) return n;
                l = c % i <= i / 2;
                break;
        }
        if (l) {
            if (o === -1) return -1;
            let p = a;
            for(let g = o; g < s; ++g){
                if (p === a + i) return o;
                switch(t.charCodeAt(g)){
                    case En.Space:
                        p += 1;
                        break;
                    case En.Tab:
                        p = _D.nextRenderTabStop(p, i);
                        break;
                    default:
                        return -1;
                }
            }
            return p === a + i ? o : -1;
        }
        const u = _D.nextRenderTabStop(c, i);
        let h = c;
        for(let p = n; p < s; p++){
            if (h === u) return p;
            switch(t.charCodeAt(p)){
                case En.Space:
                    h += 1;
                    break;
                case En.Tab:
                    h = _D.nextRenderTabStop(h, i);
                    break;
                default:
                    return -1;
            }
        }
        return h === u ? s : -1;
    }
};

}
