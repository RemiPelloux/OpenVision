var n = require("./module-95647.js"), o = require("./module-58281.js"), s = require("./module-21820.js").mq, i = require("./module-66509.js"), a = require("./module-75322.js"), l = require("./module-51819.js"), c = require("./module-38691.js").K8, u = require("./module-9264.js"), d = require("./module-11156.js");
function p() {
    o.apply(this);
    var e = this;
    this.getSupportedCharsetNames = function() {
        return e._supportedCharsetNames;
    }, function() {
        e._mProbers = [
            new n(a.Win1251CyrillicModel),
            new n(a.Koi8rModel),
            new n(a.Latin5CyrillicModel),
            new n(a.MacCyrillicModel),
            new n(a.Ibm866Model),
            new n(a.Ibm855Model),
            new n(l.Latin7GreekModel),
            new n(l.Win1253GreekModel),
            new n(d.Latin5BulgarianModel),
            new n(d.Win1251BulgarianModel),
            new n(u.Latin2HungarianModel),
            new n(u.Win1250HungarianModel),
            new n(c)
        ];
        var t = new i, r = new n(s, !1, t), o = new n(s, !0, t);
        t.setModelProbers(r, o), e._mProbers.push(t, r, o), e._supportedCharsetNames = [];
        for (const t of e._mProbers)e._supportedCharsetNames.push(t.getCharsetName());
        e.reset();
    }();
}
p.prototype = new o, module.exports = p;
