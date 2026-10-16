import { fzS } from "./get-shader-color-from-string.js";
import { cop, hop } from "./ipa.js";
import { dop, dzS, uop } from "./liquid-metal.js";
import { CzS, S0a } from "./shader-mount_2.js";
import { Afi, azS, rop } from "./shader-sizing.js";
import { vop, xzS } from "./suspend.js";
import { TzS, k0a } from "./transparent-pixel.js";
import { E } from "./tslib.es6.js";
import { memo as AzS } from "./react-runtime/react/esm-index-production.js";
import { jsx as MzS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useLayoutEffect as PzS } from "./react-runtime/react/esm-index-production.js";
import { useState as RzS } from "./react-runtime/react/esm-index-production.js";
var t$, DzS, NzS, LzS, _op;
export { DzS, LzS, NzS, _op, t$ };
var __wakaru_OzS_initialized = false;
export function OzS() {
if (__wakaru_OzS_initialized) return;
__wakaru_OzS_initialized = true;
E(), CzS(), TzS(), xzS(), azS(), dzS(), fzS(), t$ = {
    name: "Default",
    params: {
        ...Afi,
        scale: .6,
        speed: 1,
        frame: 0,
        colorBack: "#AAAAAC",
        colorTint: "#ffffff",
        distortion: .07,
        repetition: 2,
        shiftRed: .3,
        shiftBlue: .3,
        contour: .4,
        softness: .1,
        angle: 70,
        shape: "diamond"
    }
}, DzS = {
    name: "Noir",
    params: {
        ...Afi,
        scale: .6,
        speed: 1,
        frame: 0,
        colorBack: "#000000",
        colorTint: "#606060",
        softness: .45,
        repetition: 1.5,
        shiftRed: 0,
        shiftBlue: 0,
        distortion: 0,
        contour: 0,
        angle: 90,
        shape: "diamond"
    }
}, NzS = {
    name: "Backdrop",
    params: {
        ...Afi,
        speed: 1,
        frame: 0,
        scale: 1.5,
        colorBack: "#AAAAAC",
        colorTint: "#ffffff",
        softness: .05,
        repetition: 1.5,
        shiftRed: .3,
        shiftBlue: .3,
        distortion: .1,
        contour: .4,
        shape: "none",
        angle: 90,
        worldWidth: 0,
        worldHeight: 0
    }
}, LzS = {
    name: "Stripes",
    params: {
        ...Afi,
        speed: 1,
        frame: 0,
        scale: .6,
        colorBack: "#000000",
        colorTint: "#2c5d72",
        softness: .8,
        repetition: 6,
        shiftRed: 1,
        shiftBlue: -1,
        distortion: .4,
        contour: .4,
        shape: "circle",
        angle: 0
    }
}, _op = AzS(function({ colorBack: e = t$.params.colorBack, colorTint: n = t$.params.colorTint, speed: i = t$.params.speed, frame: r = t$.params.frame, image: s = "", contour: o = t$.params.contour, distortion: a = t$.params.distortion, softness: l = t$.params.softness, repetition: c = t$.params.repetition, shiftRed: u = t$.params.shiftRed, shiftBlue: d = t$.params.shiftBlue, angle: h = t$.params.angle, shape: p = t$.params.shape, suspendWhenProcessingImage: g = !1, fit: f = t$.params.fit, scale: _ = t$.params.scale, rotation: b = t$.params.rotation, originX: y = t$.params.originX, originY: S = t$.params.originY, offsetX: k = t$.params.offsetX, offsetY: C = t$.params.offsetY, worldWidth: T = t$.params.worldWidth, worldHeight: I = t$.params.worldHeight, ...A }) {
    const P = typeof s == "string" ? s : s.src, [M, O] = RzS(k0a);
    let N;
    g && typeof window < "u" && P ? N = vop(()=>cop(P).then((j)=>URL.createObjectURL(j.pngBlob)), [
        P,
        "liquid-metal"
    ]) : N = M, PzS(()=>{
        if (g) return;
        if (!P) {
            O(k0a);
            return;
        }
        let j, $ = !0;
        return cop(P).then((H)=>{
            $ && (j = URL.createObjectURL(H.pngBlob), O(j));
        }), ()=>{
            $ = !1;
        };
    }, [
        P,
        g
    ]);
    const U = {
        u_colorBack: hop(e),
        u_colorTint: hop(n),
        u_image: N,
        u_contour: o,
        u_distortion: a,
        u_softness: l,
        u_repetition: c,
        u_shiftRed: u,
        u_shiftBlue: d,
        u_angle: h,
        u_isImage: !!s,
        u_shape: dop[p],
        u_fit: rop[f],
        u_scale: _,
        u_rotation: b,
        u_offsetX: k,
        u_offsetY: C,
        u_originX: y,
        u_originY: S,
        u_worldWidth: T,
        u_worldHeight: I
    };
    return MzS(S0a, {
        ...A,
        speed: i,
        frame: r,
        fragmentShader: uop,
        mipmaps: [
            "u_image"
        ],
        uniforms: U
    });
});

}
