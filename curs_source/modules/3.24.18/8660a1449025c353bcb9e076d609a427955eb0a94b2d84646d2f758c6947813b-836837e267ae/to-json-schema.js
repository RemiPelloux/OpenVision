import { Chn, Ehn, Thn, uO } from "./SZu.js";
import { Jfr } from "./registries.js";
import { E } from "./tslib.es6.js";
var KRo, Ihn;
export { Ihn, KRo };
var __wakaru_pvr_initialized = false;
export function pvr() {
if (__wakaru_pvr_initialized) return;
__wakaru_pvr_initialized = true;
E(), Jfr(), KRo = (t, e = {})=>(n)=>{
        const i = Chn({
            ...n,
            processors: e
        });
        return uO(t, i), Thn(i, t), Ehn(i, t);
    }, Ihn = (t, e, n = {})=>(i)=>{
        const { libraryOptions: r, target: s } = i ?? {}, o = Chn({
            ...r ?? {},
            target: s,
            io: e,
            processors: n
        });
        return uO(t, o), Thn(o, t), Ehn(o, t);
    };

}
