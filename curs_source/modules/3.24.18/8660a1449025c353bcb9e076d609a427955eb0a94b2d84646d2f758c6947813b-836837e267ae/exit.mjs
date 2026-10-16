import { HQt } from "./Feature.mjs";
import { r8 } from "./index_18.mjs";
import { $Qt } from "./ofv.js";
import { E } from "./tslib.es6.js";
var Z1v, Q1v;
export { Q1v, Z1v };
var __wakaru_vb0_initialized = false;
export function vb0() {
if (__wakaru_vb0_initialized) return;
__wakaru_vb0_initialized = true;
E(), r8(), Z1v = 0, Q1v = class extends HQt {
    constructor(){
        super(...arguments), this.id = Z1v++, this.isExitComplete = !1;
    }
    update() {
        if (!this.node.presenceContext) return;
        const { isPresent: t, onExitComplete: e } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === n) return;
        if (t && n === !1) {
            if (this.isExitComplete) {
                const { initial: r, custom: s } = this.node.getProps();
                if (typeof r == "string") {
                    const o = $Qt(this.node, r, s);
                    if (o) {
                        const { transition: a, transitionEnd: l, ...c } = o;
                        for(const u in c)this.node.getValue(u)?.jump(c[u]);
                    }
                }
                this.node.animationState.reset(), this.node.animationState.animateChanges();
            } else this.node.animationState.setActive("exit", !1);
            this.isExitComplete = !1;
            return;
        }
        const i = this.node.animationState.setActive("exit", !t);
        e && !t && i.then(()=>{
            this.isExitComplete = !0, e(this.id);
        });
    }
    mount() {
        const { register: t, onExitComplete: e } = this.node.presenceContext || {};
        e && e(this.id), t && (this.unmount = t(this.id));
    }
    unmount() {}
};

}
