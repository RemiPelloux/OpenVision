import { bRt, oEe } from "./frame.mjs";
import { xR } from "./index_10.mjs";
import { J_v, LAs, Qye, lOn } from "./ofv.js";
import { gYl } from "./subscription-manager.mjs";
import { E } from "./tslib.es6.js";
var fXl, Zyv, vXl, Qyv;
export { Qyv, Zyv, fXl, vXl };
var __wakaru__Xl_initialized = false;
export function _Xl() {
if (__wakaru__Xl_initialized) return;
__wakaru__Xl_initialized = true;
E(), xR(), lOn(), bRt(), fXl = 30, Zyv = (t)=>!isNaN(parseFloat(t)), vXl = {
    current: void 0
}, Qyv = class {
    constructor(t, e = {}){
        this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (n)=>{
            const i = Qye.now();
            if (this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(n), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (const r of this.dependents)r.dirty();
        }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner;
    }
    setCurrent(t) {
        this.current = t, this.updatedAt = Qye.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Zyv(this.current));
    }
    setPrevFrameValue(t = this.current) {
        this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
    }
    onChange(t) {
        return process.env.NODE_ENV !== "production" && LAs(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
    }
    on(t, e) {
        this.events[t] || (this.events[t] = new gYl);
        const n = this.events[t].add(e);
        return t === "change" ? ()=>{
            n(), oEe.read(()=>{
                this.events.change.getSize() || this.stop();
            });
        } : n;
    }
    clearListeners() {
        for(const t in this.events)this.events[t].clear();
    }
    attach(t, e) {
        this.passiveEffect = t, this.stopPassiveEffect = e;
    }
    set(t) {
        this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t);
    }
    setWithVelocity(t, e, n) {
        this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - n;
    }
    jump(t, e = !0) {
        this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
    dirty() {
        this.events.change?.notify(this.current);
    }
    addDependent(t) {
        this.dependents || (this.dependents = new Set), this.dependents.add(t);
    }
    removeDependent(t) {
        this.dependents && this.dependents.delete(t);
    }
    get() {
        return vXl.current && vXl.current.push(this), this.current;
    }
    getPrevious() {
        return this.prev;
    }
    getVelocity() {
        const t = Qye.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > fXl) return 0;
        const e = Math.min(this.updatedAt - this.prevUpdatedAt, fXl);
        return J_v(parseFloat(this.current) - parseFloat(this.prevFrameValue), e);
    }
    start(t) {
        return this.stop(), new Promise((e)=>{
            this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify();
        }).then(()=>{
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
        });
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
    }
    isAnimating() {
        return !!this.animation;
    }
    clearAnimation() {
        delete this.animation;
    }
    destroy() {
        this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
};

}
