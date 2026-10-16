function n() {
    this.pending = 0, this.max = 1 / 0, this.listeners = [], this.waiting = [], this.error = null;
}
function t(e) {
    e.pending += 1;
    var n = !1;
    return function(s) {
        if (n) throw new Error("callback called twice");
        if (n = !0, e.error = e.error || s, e.pending -= 1, e.waiting.length > 0 && e.pending < e.max) a(e, e.waiting.shift());
        else if (0 === e.pending) {
            var o = e.listeners;
            e.listeners = [], o.forEach(t);
        }
    };
    function t(n) {
        n(e.error);
    }
}
function a(e, n) {
    n(t(e));
}
module.exports = n, n.prototype.go = function(e) {
    this.pending < this.max ? a(this, e) : this.waiting.push(e);
}, n.prototype.wait = function(e) {
    0 === this.pending ? e(this.error) : this.listeners.push(e);
}, n.prototype.hold = function() {
    return t(this);
};
