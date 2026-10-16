const r = require("./module-3058.js"), { Gif: s, GifError: n } = require("./module-2104.js");
function a() {
    const t = require("./module-7884.js");
    return a = function() {
        return t;
    }, t;
}
const { GifFrame: o } = require("./module-727.js");
function h(t, e) {
    const i = t.indexOf(e);
    return -1 === i ? null : i;
}
function l(t, e) {
    for(var i, r = 0, s = t.length - 1; r <= s;)if (t[i = Math.floor((r + s) / 2)] > e) s = i - 1;
    else {
        if (!(t[i] < e)) return i;
        r = i + 1;
    }
    return null;
}
function u(t) {
    const e = t.colors;
    t.usesTransparency && e.push(0);
    const i = e.length;
    let r = 2;
    for(; i > r;)r <<= 1;
    e.length = r, e.fill(0, i);
}
function m(t, e) {
    let i = t.bitmap.width * t.bitmap.height;
    return i = Math.ceil(i * e / 8), i += Math.ceil(i / 255), 100 + i + 768;
}
function c(t) {
    let e = t.indexCount, i = 0;
    for(--e; e;)++i, e >>= 1;
    return i > 0 ? i : 1;
}
function _(t, e, i, r, s) {
    if (i.interlaced) throw new n("writing interlaced GIFs is not supported");
    const a = function(t, e, i) {
        const r = i.colors, s = r.length <= 8 ? h : l, a = e.bitmap.data, o = new Buffer(a.length / 4);
        let u = r.length, m = 0, c = 0;
        for(; m < a.length;){
            if (0 !== a[m + 3]) {
                const t = a.readUInt32BE(m, !0) >> 8 & 16777215;
                o[c] = s(r, t);
            } else o[c] = u;
            m += 4, ++c;
        }
        if (i.usesTransparency) {
            if (256 === u) throw new n(`Frame ${t} already has 256 colorsand so can't use transparency`);
        } else u = null;
        return {
            buffer: o,
            transparentIndex: u
        };
    }(e, i, r), o = {
        delay: i.delayCentisecs,
        disposal: i.disposalMethod,
        transparent: a.transparentIndex
    };
    s && (u(r), o.palette = r.colors);
    try {
        let e, r = t.getOutputBuffer(), s = t.getOutputBufferPosition(), n = !0;
        for(; n;)if (e = t.addFrame(i.xOffset, i.yOffset, i.bitmap.width, i.bitmap.height, a.buffer, o), n = !1, e >= r.length - 1) {
            const e = new Buffer(1.5 * r.length);
            r.copy(e), t.setOutputBuffer(e), t.setOutputBufferPosition(s), r = e, n = !0;
        }
        return r;
    } catch (t) {
        throw new n(t);
    }
}
exports.GifCodec = class {
    constructor(t = {}){
        this._transparentRGB = null, "number" == typeof t.transparentRGB && 0 !== t.transparentRGB && (this._transparentRGBA = 256 * t.transparentRGB), this._testInitialBufferSize = 0;
    }
    decodeGif(t) {
        try {
            let e;
            try {
                e = new r.GifReader(t);
            } catch (t) {
                throw new n(t);
            }
            const i = e.numFrames(), a = [], o = {
                width: e.width,
                height: e.height,
                loops: e.loopCount(),
                usesTransparency: !1
            };
            for(let t = 0; t < i; ++t){
                const i = this._decodeFrame(e, t, o.usesTransparency);
                a.push(i.frame), i.usesTransparency && (o.usesTransparency = !0);
            }
            return Promise.resolve(new s(t, a, o));
        } catch (t) {
            return Promise.reject(t);
        }
    }
    encodeGif(t, e = {}) {
        try {
            if (null === t || 0 === t.length) throw new n("there are no frames");
            const i = a().getMaxDimensions(t);
            return (e = Object.assign({}, e)).width = i.maxWidth, e.height = i.maxHeight, void 0 === e.loops && (e.loops = 0), e.colorScope = e.colorScope || s.GlobalColorsPreferred, Promise.resolve(this._encodeGif(t, e));
        } catch (t) {
            return Promise.reject(t);
        }
    }
    _decodeFrame(t, e, i) {
        let r, s;
        try {
            if (r = t.frameInfo(e), s = new Buffer(t.width * t.height * 4), t.decodeAndBlitFrameRGBA(e, s), r.width !== t.width || r.height !== t.height) {
                if (r.y && (s = s.slice(r.y * t.width * 4)), t.width > r.width) for(let e = 0; e < r.height; ++e)s.copy(s, e * r.width * 4, 4 * (r.x + e * t.width), 4 * (r.x + e * t.width) + 4 * r.width);
                s = s.slice(0, r.width * r.height * 4);
            }
        } catch (t) {
            throw new n(t);
        }
        let a = !1;
        if (null === this._transparentRGBA) {
            if (!i) for(let t = 3; t < s.length; t += 4)0 === s[t] && (a = !0, t = s.length);
        } else for(let t = 3; t < s.length; t += 4)0 === s[t] && (s.writeUInt32BE(this._transparentRGBA, t - 3), a = !0);
        return {
            frame: new o(r.width, r.height, s, {
                xOffset: r.x,
                yOffset: r.y,
                disposalMethod: r.disposal,
                interlaced: r.interlaced,
                delayCentisecs: r.delay
            }),
            usesTransparency: a
        };
    }
    _encodeGif(t, e) {
        let i;
        if (e.colorScope === s.LocalColorsOnly) i = a().getColorInfo(t, 0);
        else if (i = a().getColorInfo(t, 256), !i.colors) {
            if (e.colorScope === s.GlobalColorsOnly) throw new n("Too many color indexes for global color table");
            e.colorScope = s.LocalColorsOnly;
        }
        e.usesTransparency = i.usesTransparency;
        const o = i.palettes;
        if (e.colorScope === s.LocalColorsOnly) {
            return function(t, e, i, a) {
                const o = {
                    loop: e.loops
                };
                let h, l = new Buffer(i);
                try {
                    h = new r.GifWriter(l, e.width, e.height, o);
                } catch (t) {
                    throw new n(t);
                }
                for(let e = 0; e < t.length; ++e)l = _(h, e, t[e], a[e], !0);
                return new s(l.slice(0, h.end()), t, e);
            }(t, e, 2e3, o);
        }
        return function(t, e, i, a) {
            const o = {
                colors: a.colors.slice(),
                usesTransparency: a.usesTransparency
            };
            u(o);
            const h = {
                palette: o.colors,
                loop: e.loops
            };
            let l, m = new Buffer(i);
            try {
                l = new r.GifWriter(m, e.width, e.height, h);
            } catch (t) {
                throw new n(t);
            }
            for(let e = 0; e < t.length; ++e)m = _(l, e, t[e], a, !1);
            return new s(m.slice(0, l.end()), t, e);
        }(t, e, 2e3, i);
    }
    _getSizeEstimateGlobal(t, e) {
        if (this._testInitialBufferSize > 0) return this._testInitialBufferSize;
        let i = 968;
        const r = c(t);
        return e.forEach((t)=>{
            i += m(t, r);
        }), i;
    }
    _getSizeEstimateLocal(t, e) {
        if (this._testInitialBufferSize > 0) return this._testInitialBufferSize;
        let i = 200;
        for(let r = 0; r < e.length; ++r){
            const s = c(t[r]);
            i += m(e[r], s);
        }
        return i;
    }
};
