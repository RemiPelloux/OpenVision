var e = Math.ceil, i = Math.floor;
module.exports = Math.trunc || function(t) {
    var s = +t;
    return (s > 0 ? i : e)(s);
};
