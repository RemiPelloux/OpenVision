var h;
require.r(exports), require.d(exports, {
    ResizeStrategy: ()=>h,
    methods: ()=>u
}), function(t) {
    t.NEAREST_NEIGHBOR = "nearestNeighbor", t.BILINEAR = "bilinearInterpolation", t.BICUBIC = "bicubicInterpolation", t.HERMITE = "hermiteInterpolation", t.BEZIER = "bezierInterpolation";
}(h || (h = {}));
var r = require(9746);
function s(t, i, e, h, r, s, n) {
    this.widthOriginal = Math.abs(Math.floor(t) || 0), this.heightOriginal = Math.abs(Math.floor(i) || 0), this.targetWidth = Math.abs(Math.floor(e) || 0), this.targetHeight = Math.abs(Math.floor(h) || 0), this.colorChannels = r ? 4 : 3, this.interpolationPass = Boolean(s), this.resizeCallback = "function" == typeof n ? n : function() {}, this.targetWidthMultipliedByChannels = this.targetWidth * this.colorChannels, this.originalWidthMultipliedByChannels = this.widthOriginal * this.colorChannels, this.originalHeightMultipliedByChannels = this.heightOriginal * this.colorChannels, this.widthPassResultSize = this.targetWidthMultipliedByChannels * this.heightOriginal, this.finalResultSize = this.targetWidthMultipliedByChannels * this.targetHeight, this.initialize();
}
s.prototype.initialize = function() {
    if (!(this.widthOriginal > 0 && this.heightOriginal > 0 && this.targetWidth > 0 && this.targetHeight > 0)) throw console.log(this), new Error("Invalid settings specified for the resizer.");
    this.configurePasses();
}, s.prototype.configurePasses = function() {
    this.widthOriginal === this.targetWidth ? this.resizeWidth = this.bypassResizer : (this.ratioWeightWidthPass = this.widthOriginal / this.targetWidth, this.ratioWeightWidthPass < 1 && this.interpolationPass ? (this.initializeFirstPassBuffers(!0), this.resizeWidth = 4 === this.colorChannels ? this.resizeWidthInterpolatedRGBA : this.resizeWidthInterpolatedRGB) : (this.initializeFirstPassBuffers(!1), this.resizeWidth = 4 === this.colorChannels ? this.resizeWidthRGBA : this.resizeWidthRGB)), this.heightOriginal === this.targetHeight ? this.resizeHeight = this.bypassResizer : (this.ratioWeightHeightPass = this.heightOriginal / this.targetHeight, this.ratioWeightHeightPass < 1 && this.interpolationPass ? (this.initializeSecondPassBuffers(!0), this.resizeHeight = this.resizeHeightInterpolated) : (this.initializeSecondPassBuffers(!1), this.resizeHeight = 4 === this.colorChannels ? this.resizeHeightRGBA : this.resizeHeightRGB));
}, s.prototype._resizeWidthInterpolatedRGBChannels = function(t, i) {
    const e = i ? 4 : 3, h = this.ratioWeightWidthPass, r = this.widthBuffer;
    let s, n, a = 0, o = 0, l = 0, d = 0, u = 0;
    for(s = 0; a < 1 / 3; s += e, a += h)for(o = s, l = 0; o < this.widthPassResultSize; l += this.originalWidthMultipliedByChannels, o += this.targetWidthMultipliedByChannels)r[o] = t[l], r[o + 1] = t[l + 1], r[o + 2] = t[l + 2], i && (r[o + 3] = t[l + 3]);
    for(a -= 1 / 3, n = this.widthOriginal - 1; a < n; s += e, a += h)for(u = a % 1, d = 1 - u, o = s, l = Math.floor(a) * e; o < this.widthPassResultSize; l += this.originalWidthMultipliedByChannels, o += this.targetWidthMultipliedByChannels)r[o + 0] = t[l + 0] * d + t[l + e + 0] * u, r[o + 1] = t[l + 1] * d + t[l + e + 1] * u, r[o + 2] = t[l + 2] * d + t[l + e + 2] * u, i && (r[o + 3] = t[l + 3] * d + t[l + e + 3] * u);
    for(n = this.originalWidthMultipliedByChannels - e; s < this.targetWidthMultipliedByChannels; s += e)for(o = s, l = n; o < this.widthPassResultSize; l += this.originalWidthMultipliedByChannels, o += this.targetWidthMultipliedByChannels)r[o] = t[l], r[o + 1] = t[l + 1], r[o + 2] = t[l + 2], i && (r[o + 3] = t[l + 3]);
    return r;
}, s.prototype._resizeWidthRGBChannels = function(t, i) {
    const e = i ? 4 : 3, h = this.ratioWeightWidthPass, r = 1 / h, s = this.originalWidthMultipliedByChannels - e + 1, n = this.targetWidthMultipliedByChannels - e + 1, a = this.outputWidthWorkBench, o = this.widthBuffer, l = this.outputWidthWorkBenchOpaquePixelsCount;
    let d = 0, u = 0, f = 0, p = 0, g = 0, c = 0, B = 0, M = 1, W = 0, y = 0, z = 0, C = 0;
    do {
        for(g = 0; g < this.originalHeightMultipliedByChannels;)a[g++] = 0, a[g++] = 0, a[g++] = 0, i && (a[g++] = 0, l[g / e - 1] = 0);
        d = h;
        do {
            for(u = 1 + f - p, M = Math.min(d, u), g = 0, c = f; g < this.originalHeightMultipliedByChannels; c += s)W = t[c], y = t[++c], z = t[++c], C = i ? t[++c] : 255, a[g++] += (C ? W : 0) * M, a[g++] += (C ? y : 0) * M, a[g++] += (C ? z : 0) * M, i && (a[g++] += C * M, l[g / e - 1] += C ? M : 0);
            if (!(d >= u)) {
                p += d;
                break;
            }
            f += e, p = f, d -= u;
        }while (d > 0 && f < this.originalWidthMultipliedByChannels)
        for(g = 0, c = B; g < this.originalHeightMultipliedByChannels; c += n)d = i ? l[g / e] : 1, M = i ? d ? 1 / d : 0 : r, o[c] = a[g++] * M, o[++c] = a[g++] * M, o[++c] = a[g++] * M, i && (o[++c] = a[g++] * r);
        B += e;
    }while (B < this.targetWidthMultipliedByChannels)
    return o;
}, s.prototype._resizeHeightRGBChannels = function(t, i) {
    const e = this.ratioWeightHeightPass, h = 1 / e, r = this.outputHeightWorkBench, s = this.heightBuffer, n = this.outputHeightWorkBenchOpaquePixelsCount;
    let a = 0, o = 0, l = 0, d = 0, u = 0, f = 0, p = 0, g = 1, c = 0, B = 0, M = 0, W = 0;
    do {
        for(u = 0; u < this.targetWidthMultipliedByChannels;)r[u++] = 0, r[u++] = 0, r[u++] = 0, i && (r[u++] = 0, n[u / 4 - 1] = 0);
        a = e;
        do {
            for(o = 1 + l - d, g = Math.min(a, o), p = l, u = 0; u < this.targetWidthMultipliedByChannels;)c = t[p++], B = t[p++], M = t[p++], W = i ? t[p++] : 255, r[u++] += (W ? c : 0) * g, r[u++] += (W ? B : 0) * g, r[u++] += (W ? M : 0) * g, i && (r[u++] += W * g, n[u / 4 - 1] += W ? g : 0);
            if (!(a >= o)) {
                d += a;
                break;
            }
            l = p, d = l, a -= o;
        }while (a > 0 && l < this.widthPassResultSize)
        for(u = 0; u < this.targetWidthMultipliedByChannels;)a = i ? n[u / 4] : 1, g = i ? a ? 1 / a : 0 : h, s[f++] = Math.round(r[u++] * g), s[f++] = Math.round(r[u++] * g), s[f++] = Math.round(r[u++] * g), i && (s[f++] = Math.round(r[u++] * h));
    }while (f < this.finalResultSize)
    return s;
}, s.prototype.resizeWidthInterpolatedRGB = function(t) {
    return this._resizeWidthInterpolatedRGBChannels(t, !1);
}, s.prototype.resizeWidthInterpolatedRGBA = function(t) {
    return this._resizeWidthInterpolatedRGBChannels(t, !0);
}, s.prototype.resizeWidthRGB = function(t) {
    return this._resizeWidthRGBChannels(t, !1);
}, s.prototype.resizeWidthRGBA = function(t) {
    return this._resizeWidthRGBChannels(t, !0);
}, s.prototype.resizeHeightInterpolated = function(t) {
    const i = this.ratioWeightHeightPass, e = this.heightBuffer;
    let h, r = 0, s = 0, n = 0, a = 0, o = 0, l = 0, d = 0;
    for(; r < 1 / 3; r += i)for(n = 0; n < this.targetWidthMultipliedByChannels;)e[s++] = Math.round(t[n++]);
    for(r -= 1 / 3, h = this.heightOriginal - 1; r < h; r += i)for(d = r % 1, l = 1 - d, a = Math.floor(r) * this.targetWidthMultipliedByChannels, o = a + this.targetWidthMultipliedByChannels, n = 0; n < this.targetWidthMultipliedByChannels; ++n)e[s++] = Math.round(t[a++] * l + t[o++] * d);
    for(; s < this.finalResultSize;)for(n = 0, a = h * this.targetWidthMultipliedByChannels; n < this.targetWidthMultipliedByChannels; ++n)e[s++] = Math.round(t[a++]);
    return e;
}, s.prototype.resizeHeightRGB = function(t) {
    return this._resizeHeightRGBChannels(t, !1);
}, s.prototype.resizeHeightRGBA = function(t) {
    return this._resizeHeightRGBChannels(t, !0);
}, s.prototype.resize = function(t) {
    this.resizeCallback(this.resizeHeight(this.resizeWidth(t)));
}, s.prototype.bypassResizer = function(t) {
    return t;
}, s.prototype.initializeFirstPassBuffers = function(t) {
    this.widthBuffer = this.generateFloatBuffer(this.widthPassResultSize), t || (this.outputWidthWorkBench = this.generateFloatBuffer(this.originalHeightMultipliedByChannels), this.colorChannels > 3 && (this.outputWidthWorkBenchOpaquePixelsCount = this.generateFloat64Buffer(this.heightOriginal)));
}, s.prototype.initializeSecondPassBuffers = function(t) {
    this.heightBuffer = this.generateUint8Buffer(this.finalResultSize), t || (this.outputHeightWorkBench = this.generateFloatBuffer(this.targetWidthMultipliedByChannels), this.colorChannels > 3 && (this.outputHeightWorkBenchOpaquePixelsCount = this.generateFloat64Buffer(this.targetWidth)));
}, s.prototype.generateFloatBuffer = function(t) {
    try {
        return new Float32Array(t);
    } catch (t) {
        return console.error(t), [];
    }
}, s.prototype.generateFloat64Buffer = function(t) {
    try {
        return new Float64Array(t);
    } catch (t) {
        return console.error(t), [];
    }
}, s.prototype.generateUint8Buffer = function(t) {
    try {
        return new Uint8Array(t);
    } catch (t) {
        return console.error(t), [];
    }
};
const n = s, a = {
    nearestNeighbor (t, i) {
        const e = t.width, h = t.height, r = i.width, s = i.height, n = t.data, a = i.data;
        for(let t = 0; t < s; t++)for(let i = 0; i < r; i++){
            let o = 4 * (t * r + i);
            let l = 4 * (Math.floor(t * h / s) * e + Math.floor(i * e / r));
            a[o++] = n[l++], a[o++] = n[l++], a[o++] = n[l++], a[o++] = n[l++];
        }
    },
    bilinearInterpolation (t, i) {
        const e = t.width, h = t.height, r = i.width, s = i.height, n = t.data, a = i.data, o = function(t, i, e, h, r) {
            return i === h ? e : Math.round((t - i) * r + (h - t) * e);
        }, l = function(t, i, h, r, s, l, d, u) {
            let f = 4 * (d * e + r) + i, p = 4 * (d * e + s) + i;
            const g = o(h, r, n[f], s, n[p]);
            if (u === d) a[t + i] = g;
            else {
                f = 4 * (u * e + r) + i, p = 4 * (u * e + s) + i;
                const c = o(h, r, n[f], s, n[p]);
                a[t + i] = o(l, d, g, u, c);
            }
        };
        for(let t = 0; t < s; t++)for(let i = 0; i < r; i++){
            const n = 4 * (t * r + i), a = i * e / r, o = Math.floor(a), d = Math.min(Math.ceil(a), e - 1), u = t * h / s, f = Math.floor(u), p = Math.min(Math.ceil(u), h - 1);
            l(n, 0, a, o, d, u, f, p), l(n, 1, a, o, d, u, f, p), l(n, 2, a, o, d, u, f, p), l(n, 3, a, o, d, u, f, p);
        }
    },
    _interpolate2D (t, i, e, h) {
        const r = t.data, s = i.data, n = t.width, a = t.height, o = i.width, l = i.height, d = Math.max(1, Math.floor(n / o)), u = o * d, f = Math.max(1, Math.floor(a / l)), p = l * f, g = Buffer.alloc(u * a * 4);
        for(let t = 0; t < a; t++)for(let i = 0; i < u; i++){
            const e = i * (n - 1) / u, s = Math.floor(e), a = e - s, o = 4 * (t * n + s), l = 4 * (t * u + i);
            for(let t = 0; t < 4; t++){
                const i = o + t, e = s > 0 ? r[i - 4] : 2 * r[i] - r[i + 4], d = r[i], u = r[i + 4], f = s < n - 2 ? r[i + 8] : 2 * r[i + 4] - r[i];
                g[l + t] = h(e, d, u, f, a);
            }
        }
        const c = Buffer.alloc(u * p * 4);
        for(let t = 0; t < p; t++)for(let i = 0; i < u; i++){
            const e = t * (a - 1) / p, r = Math.floor(e), s = e - r, n = 4 * (r * u + i), o = 4 * (t * u + i);
            for(let t = 0; t < 4; t++){
                const i = n + t, e = r > 0 ? g[i - 4 * u] : 2 * g[i] - g[i + 4 * u], l = g[i], d = g[i + 4 * u], f = r < a - 2 ? g[i + 8 * u] : 2 * g[i + 4 * u] - g[i];
                c[o + t] = h(e, l, d, f, s);
            }
        }
        const B = d * f;
        if (B > 1) for(let t = 0; t < l; t++)for(let i = 0; i < o; i++){
            let e = 0, h = 0, r = 0, n = 0, a = 0;
            for(let s = 0; s < f; s++){
                const o = t * f + s;
                for(let t = 0; t < d; t++){
                    const s = 4 * (o * u + (i * d + t)), l = c[s + 3];
                    l && (e += c[s], h += c[s + 1], r += c[s + 2], a++), n += l;
                }
            }
            const l = 4 * (t * o + i);
            s[l] = a ? Math.round(e / a) : 0, s[l + 1] = a ? Math.round(h / a) : 0, s[l + 2] = a ? Math.round(r / a) : 0, s[l + 3] = Math.round(n / B);
        }
        else i.data = c;
    },
    bicubicInterpolation (t, i, e) {
        return this._interpolate2D(t, i, e, function(t, i, e, h, r) {
            const s = h - e - t + i, n = t - i - s, a = e - t, o = i;
            return Math.max(0, Math.min(255, s * (r * r * r) + n * (r * r) + a * r + o));
        });
    },
    hermiteInterpolation (t, i, e) {
        return this._interpolate2D(t, i, e, function(t, i, e, h, r) {
            const s = i, n = .5 * (e - t), a = t - 2.5 * i + 2 * e - .5 * h, o = .5 * (h - t) + 1.5 * (i - e);
            return Math.max(0, Math.min(255, Math.round(((o * r + a) * r + n) * r + s)));
        });
    },
    bezierInterpolation (t, i, e) {
        return this._interpolate2D(t, i, e, function(t, i, e, h, r) {
            const s = 1 - r, n = i * s * s * s, a = 3 * (i + (e - t) / 4) * s * s * r, o = 3 * (e - (h - i) / 4) * s * r * r, l = e * r * r * r;
            return Math.max(0, Math.min(255, Math.round(n + a + o + l)));
        });
    }
}, o = r.KC([
    r.Ik({
        w: r.ai().min(0),
        h: r.ai().min(0).optional(),
        mode: r.fc(h).optional()
    }),
    r.Ik({
        w: r.ai().min(0).optional(),
        h: r.ai().min(0),
        mode: r.fc(h).optional()
    })
]), l = r.Ik({
    w: r.ai().min(0),
    h: r.ai().min(0),
    mode: r.fc(h).optional()
}), d = r.Ik({
    f: r.ai().min(0),
    mode: r.fc(h).optional()
}), u = {
    resize (t, i) {
        const { mode: e } = o.parse(i);
        let h, r;
        if ("number" == typeof i.w) h = i.w, r = i.h ?? t.bitmap.height * (h / t.bitmap.width);
        else {
            if ("number" != typeof i.h) throw new Error("w must be a number");
            r = i.h, h = i.w ?? t.bitmap.width * (r / t.bitmap.height);
        }
        if (h = Math.round(h) || 1, r = Math.round(r) || 1, e && "function" == typeof a[e]) {
            const i = {
                data: Buffer.alloc(h * r * 4),
                width: h,
                height: r
            };
            a[e](t.bitmap, i), t.bitmap = i;
        } else {
            new n(t.bitmap.width, t.bitmap.height, h, r, !0, !0, (i)=>{
                t.bitmap.data = Buffer.from(i), t.bitmap.width = h, t.bitmap.height = r;
            }).resize(t.bitmap.data);
        }
        return t;
    },
    scale (t, i) {
        const { f: e, mode: h } = "number" == typeof i ? {
            f: i
        } : d.parse(i), r = t.bitmap.width * e, s = t.bitmap.height * e;
        return this.resize(t, {
            w: r,
            h: s,
            mode: h
        });
    },
    scaleToFit (t, i) {
        const { h: e, w: h, mode: r } = l.parse(i), s = h / e > t.bitmap.width / t.bitmap.height ? e / t.bitmap.height : h / t.bitmap.width;
        return this.scale(t, {
            f: s,
            mode: r
        });
    }
};
