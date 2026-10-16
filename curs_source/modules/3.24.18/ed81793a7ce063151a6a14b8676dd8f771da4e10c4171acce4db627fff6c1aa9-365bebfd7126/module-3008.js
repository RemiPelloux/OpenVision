var n, o, i = require("./module-9117.js"), a = require("./module-8060.js"), u = i.process, s = i.Deno, c = u && u.versions || s && s.version, f = c && c.v8;
f && (o = (n = f.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !o && a && (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = a.match(/Chrome\/(\d+)/)) && (o = +n[1]), module.exports = o;
