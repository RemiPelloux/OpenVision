var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = e + "+/", s = e + "-_", n = function(t) {
    for(var e = {}, i = 0; i < 64; i++)e[t.charAt(i)] = i;
    return e;
};
module.exports = {
    i2c: i,
    c2i: n(i),
    i2cUrl: s,
    c2iUrl: n(s)
};
