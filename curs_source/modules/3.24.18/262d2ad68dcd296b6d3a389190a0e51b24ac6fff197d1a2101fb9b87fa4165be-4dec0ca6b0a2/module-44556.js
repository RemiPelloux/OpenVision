var n = require("./module-58281.js"), o = require("./module-85039.js"), s = require("./module-7257.js"), i = require("./module-81235.js"), a = require("./module-41565.js"), l = require("./module-98527.js"), c = require("./module-46342.js"), u = require("./module-82238.js");
function d() {
    n.apply(this), this._mProbers = [
        new s,
        new i,
        new a,
        new l,
        new c,
        new o,
        new u
    ];
    const e = this._mProbers.map((e)=>e.getCharsetName());
    this.getSupportedCharsetNames = function() {
        return e;
    }, this.reset();
}
d.prototype = new n, module.exports = d;
