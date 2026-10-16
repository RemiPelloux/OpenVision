import { _Ne, wir } from "./defined-info.js";
import { iJ, tNt } from "./normalize.js";
import { i } from "./plugin-brand-icon.js";
import { gir, rJ } from "./schema.js";
function CB(r) {
    const e = {}, a = {};
    for (const [s, l] of Object.entries(r.properties)){
        const u = new _Ne(s, r.transform(r.attributes || {}, s), l, r.space);
        r.mustUseProperty && r.mustUseProperty.includes(s) && (u.mustUseProperty = !0), e[s] = u, a[iJ(s)] = s, a[iJ(u.attribute)] = s;
    }
    return new rJ(e, a, r.space);
}
export { CB };
var __wakaru_aJ_initialized = false;
export function aJ() {
if (__wakaru_aJ_initialized) return;
__wakaru_aJ_initialized = true;
tNt(), wir(), gir(), i(CB, "create");

}
