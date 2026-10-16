import { Jd } from "./autorun.js";
import { _b, ls } from "./color.js";
import { doe, pBd } from "./editorColorRegistry.js";
import { Jc } from "./observable.js";
import { E } from "./tslib.es6.js";
import { AQ, pz } from "./viewPart.js";
var pHd;
export { pHd };
var __wakaru_QDy_initialized = false;
export function QDy() {
if (__wakaru_QDy_initialized) return;
__wakaru_QDy_initialized = true;
"use strict";
E(), pz(), _b(), doe(), Jc(), pHd = class extends AQ {
    constructor(t, e){
        super(t), this._viewGpuContext = e, this._gpuShapes = [], this._register(Jd((n)=>this._updateEntries(n)));
    }
    onConfigurationChanged(t) {
        return this._updateEntries(void 0), !0;
    }
    prepareRender(t) {}
    render(t) {}
    _updateEntries(t) {
        const e = this._context.configuration.options, n = e.get(107), i = e.get(52).typicalHalfwidthCharacterWidth, r = this._viewGpuContext.devicePixelRatio.read(t);
        for(let s = 0, o = n.length; s < o; s++){
            const a = n[s], l = this._gpuShapes[s], c = a.color ? ls.fromHex(a.color) : this._context.theme.getColor(pBd) ?? ls.white, u = [
                a.column * i * r,
                0,
                Math.max(1, Math.ceil(r)),
                Number.MAX_SAFE_INTEGER,
                c.rgba.r / 255,
                c.rgba.g / 255,
                c.rgba.b / 255,
                c.rgba.a
            ];
            l ? l.setRaw(u) : this._gpuShapes[s] = this._viewGpuContext.rectangleRenderer.register(...u);
        }
        for(; this._gpuShapes.length > n.length;)this._gpuShapes.splice(-1, 1)[0].dispose();
    }
};

}
