module.exports = function(t, e, i = !1) {
    let r = e.depth, n = e.width, s = e.height, h = e.colorType, o = e.transColor, a = e.palette, l = t;
    return 3 === h ? function(t, e, i, r, n) {
        let s = 0;
        for(let h = 0; h < r; h++)for(let r = 0; r < i; r++){
            let i = n[t[s]];
            if (!i) throw new Error("index " + t[s] + " not in palette");
            for(let t = 0; t < 4; t++)e[s + t] = i[t];
            s += 4;
        }
    }(t, l, n, s, a) : (o && function(t, e, i, r, n) {
        let s = 0;
        for(let h = 0; h < r; h++)for(let r = 0; r < i; r++){
            let i = !1;
            if (1 === n.length ? n[0] === t[s] && (i = !0) : n[0] === t[s] && n[1] === t[s + 1] && n[2] === t[s + 2] && (i = !0), i) for(let t = 0; t < 4; t++)e[s + t] = 0;
            s += 4;
        }
    }(t, l, n, s, o), 8 === r || i || (16 === r && (l = Buffer.alloc(n * s * 4)), function(t, e, i, r, n) {
        let s = Math.pow(2, n) - 1, h = 0;
        for(let n = 0; n < r; n++)for(let r = 0; r < i; r++){
            for(let i = 0; i < 4; i++)e[h + i] = Math.floor(255 * t[h + i] / s + .5);
            h += 4;
        }
    }(t, l, n, s, r))), l;
};
