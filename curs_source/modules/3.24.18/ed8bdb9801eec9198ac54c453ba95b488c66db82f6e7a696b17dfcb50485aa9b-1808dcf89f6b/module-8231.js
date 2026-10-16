function t(e) {
    return parseInt(e, 10);
}
function i(e, i) {
    e = e.map(t), i = i.map(t);
    var a = e[0], n = e[1] - 1, r = e[2], o = i[0], s = i[1], f = i[2];
    return Date.UTC(a, n, r, o, s, f, 0) / 1e3;
}
function a(e) {
    var a = e.substr(0, 10).split("-"), n = e.substr(11, 8).split(":"), r = e.substr(19, 6).split(":").map(t), o = 3600 * r[0] + 60 * r[1], s = i(a, n);
    if ("number" == typeof (s -= o) && !isNaN(s)) return s;
}
function n(e) {
    var t = e.split(" "), a = i(t[0].split(":"), t[1].split(":"));
    if ("number" == typeof a && !isNaN(a)) return a;
}
module.exports = {
    parseDateWithSpecFormat: n,
    parseDateWithTimezoneFormat: a,
    parseExifDate: function(e) {
        var t = 19 === e.length && ":" === e.charAt(4);
        return 25 === e.length && "T" === e.charAt(10) ? a(e) : t ? n(e) : void 0;
    }
};
