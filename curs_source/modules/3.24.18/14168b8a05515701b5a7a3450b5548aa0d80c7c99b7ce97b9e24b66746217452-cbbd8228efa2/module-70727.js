const r = require("./module-16950.js"), { GifError: s } = require("./module-22104.js");
class n extends r {
    constructor(...t){
        if (super(...t), t[0] instanceof n) {
            const e = t[0];
            this.xOffset = e.xOffset, this.yOffset = e.yOffset, this.disposalMethod = e.disposalMethod, this.delayCentisecs = e.delayCentisecs, this.interlaced = e.interlaced;
        } else {
            const e = t[t.length - 1];
            let i = {};
            "object" != typeof e || e instanceof r || (i = e), this.xOffset = i.xOffset || 0, this.yOffset = i.yOffset || 0, this.disposalMethod = void 0 !== i.disposalMethod ? i.disposalMethod : n.DisposeToBackgroundColor, this.delayCentisecs = i.delayCentisecs || 8, this.interlaced = i.interlaced || !1;
        }
    }
    getPalette() {
        const t = new Set, e = this.bitmap.data;
        let i = 0, r = !1;
        for(; i < e.length;){
            if (0 === e[i + 3]) r = !0;
            else {
                const r = e.readUInt32BE(i, !0) >> 8 & 16777215;
                t.add(r);
            }
            i += 4;
        }
        const s = new Array(t.size), n = t.values();
        for(i = 0; i < s.length; ++i)s[i] = n.next().value;
        s.sort((t, e)=>t - e);
        let a = s.length;
        return r && ++a, {
            colors: s,
            usesTransparency: r,
            indexCount: a
        };
    }
}
n.DisposeToAnything = 0, n.DisposeNothing = 1, n.DisposeToBackgroundColor = 2, n.DisposeToPrevious = 3, exports.GifFrame = n;
