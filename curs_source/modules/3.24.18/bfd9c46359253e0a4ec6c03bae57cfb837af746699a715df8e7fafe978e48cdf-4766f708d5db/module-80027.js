var t = {
    "prs.": 100,
    "x-": 200,
    "x.": 300,
    "vnd.": 400,
    default: 900
}, r = {
    nginx: 10,
    apache: 20,
    iana: 40,
    default: 30
}, n = {
    application: 1,
    font: 2,
    default: 0
};
module.exports = function(e, s = "default") {
    if ("application/octet-stream" === e) return 0;
    const [o, i] = e.split("/"), a = i.replace(/(\.|x-).*/, "$1");
    return (t[a] || t.default) + (r[s] || r.default) + (n[o] || n.default) + (1 - e.length / 100);
};
