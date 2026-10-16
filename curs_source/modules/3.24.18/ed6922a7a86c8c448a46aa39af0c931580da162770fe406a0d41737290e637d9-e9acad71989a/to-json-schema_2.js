import { E8t, T8t, UM, x8t } from "./f0s.js";
import { r5i } from "./registries_2.js";
import { x } from "./tslib.es6.js";
var M8s, I8t;
export { I8t, M8s };
var __wakaru__5i_initialized = false;
export function _5i() {
if (__wakaru__5i_initialized) return;
__wakaru__5i_initialized = true;
x(), r5i(), M8s = (e, t = {})=>(n)=>{
        const i = T8t({
            ...n,
            processors: t
        });
        return UM(e, i), E8t(i, e), x8t(i, e);
    }, I8t = (e, t, n = {})=>(i)=>{
        const { libraryOptions: r, target: s } = i ?? {}, o = T8t({
            ...r ?? {},
            target: s,
            io: t,
            processors: n
        });
        return UM(e, o), E8t(o, e), x8t(o, e);
    };

}
