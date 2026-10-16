import { Hc } from "./autorun.js";
import { Ci, Sm } from "./color.js";
import { BOc, HV } from "./editorColorRegistry.js";
import { qa } from "./observable.js";
import { x } from "./tslib.es6.js";
import { aU, mW } from "./viewPart.js";
var J6c;
export { J6c };
var __wakaru_sbg_initialized = false;
export function sbg() {
if (__wakaru_sbg_initialized) return;
__wakaru_sbg_initialized = true;
"use strict";
x(), aU(), Sm(), HV(), qa(), J6c = class extends mW {
    constructor(e, t){
        super(e), this._viewGpuContext = t, this._gpuShapes = [], this._register(Hc((n)=>this._updateEntries(n)));
    }
    onConfigurationChanged(e) {
        return this._updateEntries(void 0), !0;
    }
    prepareRender(e) {}
    render(e) {}
    _updateEntries(e) {
        const t = this._context.configuration.options, n = t.get(107), i = t.get(52).typicalHalfwidthCharacterWidth, r = this._viewGpuContext.devicePixelRatio.read(e);
        for(let s = 0, o = n.length; s < o; s++){
            const a = n[s], c = this._gpuShapes[s], l = a.color ? Ci.fromHex(a.color) : this._context.theme.getColor(BOc) ?? Ci.white, u = [
                a.column * i * r,
                0,
                Math.max(1, Math.ceil(r)),
                Number.MAX_SAFE_INTEGER,
                l.rgba.r / 255,
                l.rgba.g / 255,
                l.rgba.b / 255,
                l.rgba.a
            ];
            c ? c.setRaw(u) : this._gpuShapes[s] = this._viewGpuContext.rectangleRenderer.register(...u);
        }
        for(; this._gpuShapes.length > n.length;)this._gpuShapes.splice(-1, 1)[0].dispose();
    }
};

}
