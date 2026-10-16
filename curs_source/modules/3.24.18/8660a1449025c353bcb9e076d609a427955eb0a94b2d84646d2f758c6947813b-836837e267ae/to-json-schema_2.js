import { $Uh, Fne, HUh, WUh } from "./ipa.js";
import { qpi } from "./registries_2.js";
import { E } from "./tslib.es6.js";
var GUh, zpi;
export { GUh, zpi };
var __wakaru_rFr_initialized = false;
export function rFr() {
if (__wakaru_rFr_initialized) return;
__wakaru_rFr_initialized = true;
E(), qpi(), GUh = (t, e = {})=>(n)=>{
        const i = $Uh({
            ...n,
            processors: e
        });
        return Fne(t, i), HUh(i, t), WUh(i, t);
    }, zpi = (t, e, n = {})=>(i)=>{
        const { libraryOptions: r, target: s } = i ?? {}, o = $Uh({
            ...r ?? {},
            target: s,
            io: e,
            processors: n
        });
        return Fne(t, o), HUh(o, t), WUh(o, t);
    };

}
