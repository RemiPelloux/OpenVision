import { i } from "./plugin-brand-icon.js";
function Vfr() {
    let r = 1, e = "", a = !0, s;
    return l;
    function l(u, p, m) {
        const b = [];
        let g, _, v, x, C;
        for(u = e + (typeof u == "string" ? u.toString() : new TextDecoder(p || void 0).decode(u)), v = 0, e = "", a && (u.charCodeAt(0) === 65279 && v++, a = void 0); v < u.length;){
            if (SPt.lastIndex = v, g = SPt.exec(u), x = g && g.index !== void 0 ? g.index : u.length, C = u.charCodeAt(x), !g) {
                e = u.slice(v);
                break;
            }
            if (C === 10 && v === x && s) b.push(-3), s = void 0;
            else switch(s && (b.push(-5), s = void 0), v < x && (b.push(u.slice(v, x)), r += x - v), C){
                case 0:
                    {
                        b.push(65533), r++;
                        break;
                    }
                case 9:
                    {
                        for(_ = Math.ceil(r / 4) * 4, b.push(-2); r++ < _;)b.push(-1);
                        break;
                    }
                case 10:
                    {
                        b.push(-4), r = 1;
                        break;
                    }
                default:
                    s = !0, r = 1;
            }
            v = x + 1;
        }
        return m && (s && b.push(-5), e && b.push(e), b.push(null)), b;
    }
}
var SPt;
export { SPt, Vfr };
var __wakaru_Pxi_initialized = false;
export function Pxi() {
if (__wakaru_Pxi_initialized) return;
__wakaru_Pxi_initialized = true;
SPt = /[\0\t\n\r]/g, i(Vfr, "preprocess");

}
