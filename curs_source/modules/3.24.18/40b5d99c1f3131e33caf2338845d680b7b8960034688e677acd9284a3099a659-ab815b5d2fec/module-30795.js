let r = require(39023), n = require("./module-79233.js"), s = require("./module-6446.js"), h = module.exports = function(t) {
    n.call(this);
    let e = [], i = this;
    this._filter = new s(t, {
        read: this.read.bind(this),
        write: function(t) {
            e.push(t);
        },
        complete: function() {
            i.emit("complete", Buffer.concat(e));
        }
    }), this._filter.start();
};
r.inherits(h, n);
