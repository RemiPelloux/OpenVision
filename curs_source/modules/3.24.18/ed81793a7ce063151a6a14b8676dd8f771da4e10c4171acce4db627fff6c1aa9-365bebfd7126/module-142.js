var r = Math.ceil, e = Math.floor;
module.exports = Math.trunc || function(t) {
    var n = +t;
    return (n > 0 ? e : r)(n);
};
