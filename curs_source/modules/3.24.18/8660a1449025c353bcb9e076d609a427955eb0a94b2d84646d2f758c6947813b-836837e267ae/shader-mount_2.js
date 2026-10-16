import { vzS } from "./empty-pixel.js";
import { _zS, gop } from "./ipa.js";
import { yzS } from "./set-min-image-size.js";
import { nop, ozS } from "./shader-mount.js";
import { E } from "./tslib.es6.js";
import { bzS } from "./use-merge-refs.js";
import { forwardRef as SzS } from "./react-runtime/react/esm-index-production.js";
import { useEffect as _kn } from "./react-runtime/react/esm-index-production.js";
import { useState as kzS } from "./react-runtime/react/esm-index-production.js";
import { jsx as wzS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useRef as y0a } from "./react-runtime/react/esm-index-production.js";
var S0a;
export { S0a };
var __wakaru_CzS_initialized = false;
export function CzS() {
if (__wakaru_CzS_initialized) return;
__wakaru_CzS_initialized = true;
E(), bzS(), yzS(), vzS(), ozS(), S0a = SzS(function({ fragmentShader: e, uniforms: n, webGlContextAttributes: i, speed: r = 0, frame: s = 0, width: o, height: a, minPixelRatio: l, maxPixelCount: c, mipmaps: u, style: d, ...h }, p) {
    const [g, f] = kzS(!1), _ = y0a(null), b = y0a(null), y = y0a(i);
    _kn(()=>((async ()=>{
            const C = await gop(n);
            _.current && !b.current && (b.current = new nop(_.current, e, C, y.current, r, s, l, c, u), f(!0));
        })(), ()=>{
            b.current?.dispose(), b.current = null;
        }), [
        e
    ]), _kn(()=>{
        let k = !1;
        return (async ()=>{
            const T = await gop(n);
            k || b.current?.setUniforms(T);
        })(), ()=>{
            k = !0;
        };
    }, [
        n,
        g
    ]), _kn(()=>{
        b.current?.setSpeed(r);
    }, [
        r,
        g
    ]), _kn(()=>{
        b.current?.setMaxPixelCount(c);
    }, [
        c,
        g
    ]), _kn(()=>{
        b.current?.setMinPixelRatio(l);
    }, [
        l,
        g
    ]), _kn(()=>{
        b.current?.setFrame(s);
    }, [
        s,
        g
    ]);
    const S = _zS([
        _,
        p
    ]);
    return wzS("div", {
        ref: S,
        style: o !== void 0 || a !== void 0 ? {
            width: typeof o == "string" && isNaN(+o) === !1 ? +o : o,
            height: typeof a == "string" && isNaN(+a) === !1 ? +a : a,
            ...d
        } : d,
        ...h
    });
}), S0a.displayName = "ShaderMount";

}
