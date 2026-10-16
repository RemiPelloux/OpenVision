class e {
    constructor(...t){
        if (0 === t.length) throw new Error("constructor requires parameters");
        const i = t[0];
        if (null !== i && "object" == typeof i) if (i instanceof e) {
            const t = i.bitmap;
            this.bitmap = {
                width: t.width,
                height: t.height,
                data: new Buffer(t.width * t.height * 4)
            }, t.data.copy(this.bitmap.data);
        } else {
            if (!(i.width && i.height && i.data)) throw new Error("unrecognized constructor parameters");
            this.bitmap = i;
        }
        else {
            if ("number" != typeof i || "number" != typeof t[1]) throw new Error("unrecognized constructor parameters");
            {
                const e = i, r = t[1], s = t[2];
                this.bitmap = {
                    width: e,
                    height: r
                }, Buffer.isBuffer(s) ? this.bitmap.data = s : (this.bitmap.data = new Buffer(e * r * 4), "number" == typeof s && this.fillRGBA(s));
            }
        }
    }
    blit(t, e, i, r, s, n, a) {
        if (r + n > this.bitmap.width) throw new Error("copy exceeds width of source bitmap");
        if (e + n > t.bitmap.width) throw new Error("copy exceeds width of target bitmap");
        if (s + a > this.bitmap.height) throw new Error("copy exceeds height of source bitmap");
        if (i + a > t.bitmap.height) throw new Erro("copy exceeds height of target bitmap");
        const o = this.bitmap.data, h = t.bitmap.data, l = 4 * this.bitmap.width, u = 4 * t.bitmap.width, m = 4 * n;
        let c = s * l + 4 * r, _ = i * u + 4 * e;
        for(; --a >= 0;)o.copy(h, _, c, c + m), c += l, _ += u;
        return this;
    }
    fillRGBA(t) {
        const e = this.bitmap.data, i = 4 * this.bitmap.height;
        let r = 0;
        for(; r < i;)e.writeUInt32BE(t, r), r += 4;
        for(; r < e.length;)e.copy(e, r, 0, i), r += i;
        return this;
    }
    getRGBA(t, e) {
        const i = 4 * (e * this.bitmap.width + t);
        return this.bitmap.data.readUInt32BE(i);
    }
    getRGBASet() {
        const t = new Set, e = this.bitmap.data;
        for(let i = 0; i < e.length; i += 4)t.add(e.readUInt32BE(i, !0));
        return t;
    }
    greyscale() {
        const t = this.bitmap.data;
        return this.scan(0, 0, this.bitmap.width, this.bitmap.height, (e, i, r)=>{
            const s = Math.round(.299 * t[r] + .587 * t[r + 1] + .114 * t[r + 2]);
            t[r] = s, t[r + 1] = s, t[r + 2] = s;
        }), this;
    }
    reframe(t, i, r, s, n) {
        const a = t < 0 ? 0 : t, o = i < 0 ? 0 : i, h = r + a > this.bitmap.width ? this.bitmap.width - a : r, l = s + o > this.bitmap.height ? this.bitmap.height - o : s, u = t < 0 ? -t : 0, m = i < 0 ? -i : 0;
        let c;
        if (void 0 === n) {
            if (a !== t || o != i || h !== r || l !== s) throw new GifError("fillRGBA required for this reframing");
            c = new e(r, s);
        } else c = new e(r, s, n);
        return this.blit(c, u, m, a, o, h, l), this.bitmap = c.bitmap, this;
    }
    scale(t) {
        if (1 === t) return;
        if (!Number.isInteger(t) || t < 1) throw new Error("the scale must be an integer >= 1");
        const e = this.bitmap.width, i = this.bitmap.height, r = e * t * 4, s = this.bitmap.data, n = new Buffer(i * r * t);
        let a, o = 0, h = 0;
        for(let l = 0; l < i; ++l){
            a = h;
            for(let i = 0; i < e; ++i){
                const e = s.readUInt32BE(o, !0);
                for(let i = 0; i < t; ++i)n.writeUInt32BE(e, h), h += 4;
                o += 4;
            }
            for(let e = 1; e < t; ++e)n.copy(n, h, a, h), h += r, a += r;
        }
        return this.bitmap = {
            width: e * t,
            height: i * t,
            data: n
        }, this;
    }
    scanAllCoords(t) {
        const e = this.bitmap.width, i = this.bitmap.data.length;
        let r = 0, s = 0;
        for(let n = 0; n < i; n += 4)t(r, s, n), ++r === e && (r = 0, ++s);
    }
    scanAllIndexes(t) {
        const e = this.bitmap.data.length;
        for(let i = 0; i < e; i += 4)t(i);
    }
}
module.exports = e;
