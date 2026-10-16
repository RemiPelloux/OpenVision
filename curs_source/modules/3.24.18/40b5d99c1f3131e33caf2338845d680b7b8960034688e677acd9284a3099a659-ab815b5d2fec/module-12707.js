module.exports = function(t, e, i) {
    let r = t + e - i, n = Math.abs(r - t), s = Math.abs(r - e), h = Math.abs(r - i);
    return n <= s && n <= h ? t : s <= h ? e : i;
};
