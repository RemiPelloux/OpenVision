import { Uf0, _Sv } from "./DOMKeyframesResolver.mjs";
import { ore, wRt } from "./is-motion-value.mjs";
import { HSv, WSv } from "./ofv.js";
import { E } from "./tslib.es6.js";
var jXl;
export { jXl };
var __wakaru_GSv_initialized = false;
export function GSv() {
if (__wakaru_GSv_initialized) return;
__wakaru_GSv_initialized = true;
E(), wRt(), Uf0(), WSv(), jXl = class extends HSv {
    constructor(){
        super(...arguments), this.KeyframeResolver = _Sv;
    }
    sortInstanceNodePosition(t, e) {
        return t.compareDocumentPosition(e) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(t, e) {
        const n = t.style;
        return n ? n[e] : void 0;
    }
    removeValueFromRenderState(t, { vars: e, style: n }) {
        delete e[t], delete n[t];
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const { children: t } = this.props;
        ore(t) && (this.childSubscription = t.on("change", (e)=>{
            this.current && (this.current.textContent = `${e}`);
        }));
    }
};

}
