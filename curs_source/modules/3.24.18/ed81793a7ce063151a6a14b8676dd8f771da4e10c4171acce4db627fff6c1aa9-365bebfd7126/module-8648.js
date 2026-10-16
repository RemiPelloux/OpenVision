var r = function() {
    this.head = null, this.tail = null;
};
r.prototype = {
    add: function(t) {
        var r = {
            item: t,
            next: null
        }, e = this.tail;
        e ? e.next = r : this.head = r, this.tail = r;
    },
    get: function() {
        var t = this.head;
        if (t) return null === (this.head = t.next) && (this.tail = null), t.item;
    }
}, module.exports = r;
