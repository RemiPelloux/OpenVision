var s, n, r = require("./module-4576.js"), a = require("./module-2839.js"), o = r.process, l = r.Deno, h = o && o.versions || l && l.version, c = h && h.v8;
c && (n = (s = c.split("."))[0] > 0 && s[0] < 4 ? 1 : +(s[0] + s[1])), !n && a && (!(s = a.match(/Edge\/(\d+)/)) || s[1] >= 74) && (s = a.match(/Chrome\/(\d+)/)) && (n = +s[1]), module.exports = n;
